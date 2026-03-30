import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("cv");

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Content = buffer.toString("base64");

    const { data, error } = await resend.emails.send({
      from: "CV Upload <onboarding@resend.dev>",
      to: ["info@coreberg.ch"],
      subject: "Neue CV-Bewerbung",
      html: `
        <p>Ein neuer Lebenslauf wurde über die Website hochgeladen.</p>
        <p><strong>Absender E-Mail:</strong> ${formData.get("email") || "Nicht angegeben"}</p>
        <p><strong>Dateiname:</strong> ${file.name}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: base64Content,
        },
      ],
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
