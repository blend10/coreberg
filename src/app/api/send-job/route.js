import { Resend } from "resend";

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "API Key missing" }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");
    const email = formData.get("email");
    const type = formData.get("type") || "PDF/Job Add";

    if (!files || files.length === 0) {
      return Response.json({ error: "No files provided" }, { status: 400 });
    }

    const attachments = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return {
          filename: file.name,
          content: buffer.toString("base64"),
        };
      }),
    );

    const { data, error } = await resend.emails.send({
      from: "Job/PDF Upload <onboarding@resend.dev>",
      to: ["info@coreberg.ch"],
      subject: `Neuer Upload: ${type}`,
      html: `
        <p>Ein neuer Upload wurde über die Industries-Sektion empfangen.</p>
        <p><strong>Typ:</strong> ${type}</p>
        <p><strong>Absender E-Mail:</strong> ${email || "Nicht angegeben"}</p>
        <p><strong>Anzahl Dateien:</strong> ${files.length}</p>
      `,
      attachments,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    return Response.json(
      { error: error.message || "Something went wrong" },
      { status: 500 },
    );
  }
}
