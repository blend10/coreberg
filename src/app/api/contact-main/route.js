import { Resend } from "resend";

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "API Key missing" }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const formData = await req.formData();
    const email = formData.get("email");
    const name = formData.get("name");
    const phone = formData.get("phone");
    const company = formData.get("company");
    const service = formData.get("service");
    const message = formData.get("message");

    const { data, error } = await resend.emails.send({
      from: "Kontaktseite <onboarding@resend.dev>",
      to: ["info@coreberg.ch"],
      subject: `Hauptkontakt: ${name} (${company || "Privat"})`,
      html: `
        <p>Eine neue Kontaktanfrage wurde über die Haupt-Kontaktseite gesendet.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Unternehmen:</strong> ${company || "Nicht angegeben"}</p>
        <p><strong>Service:</strong> ${service || "Nicht angegeben"}</p>
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
