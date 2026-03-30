import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: ["info@coreberg.ch"],
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <p>Ein neue Kontaktanfrage wurde über das Footer-Formular gesendet.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
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
