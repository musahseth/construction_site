import nodemailer from "nodemailer";

const contactEmail = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: process.env.NEXT_PUBLIC_EMAIL_PORT,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_USERPASS,
  },
});

export async function POST(req, res) {
  const { email, subject, name, message } = await req.json();

  const mail = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: subject,
    html: `
    <p>Hello you have a Message from your Website</p>
             <p>subject: ${subject}</p>
             <p>Email or Phone: ${email}</p>
             <p>Name: ${name}</p>
             <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return new Response("Message Sent");
  } catch (error) {
    console.error(error);
    return new Response("something went wrong");
  }
}
