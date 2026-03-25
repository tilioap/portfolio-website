import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Données reçues:", body)

    const { firstName, lastName, email, subject, message } = body

    // Validation des champs
    if (!firstName || !lastName || !email || !subject || !message) {
      console.log("Validation échouée:", { firstName, lastName, email, subject, message })
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Configuration du transporteur SMTP pour OVH avec STARTTLS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "ssl0.ovh.net",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // false pour STARTTLS sur port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
      },
      requireTLS: true, // Force l'utilisation de TLS
    })

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            Nouveau message depuis votre portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Sujet :</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #059669; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
            <p>Vous pouvez répondre directement à cet email.</p>
          </div>
        </div>
      `,
    }

    console.log("Tentative d'envoi email...")
    await transporter.sendMail(mailOptions)
    console.log("Email envoyé avec succès")

    return NextResponse.json({ success: true, message: "Message envoyé avec succès" }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
