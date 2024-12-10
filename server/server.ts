import express from 'express'
import cors from 'cors';
import nodemailer from 'nodemailer'

import dotenv from 'dotenv';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

const oAuth2Client = new OAuth2Client(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.URI
    
)

oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

const app = express();

app.use(cors({
    credentials: true,
    origin: [ "http://localhost:4200" ]

}));


app.use(express.json());

app.post("/api/send-email", async (req, res) => {
    const { name, email, content } = req.body;
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USER,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: accessToken.token

        }

    } as SMTPTransport.Options);
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Formulário de Contato: ${name}`,
        html: `
        <!DOCTYPE html>
        <html lang="pt-br">

        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-mail de contato</title>
        </head>

        <body style="background-color: #131515; color: white; font-family: Arial, sans-serif; margin: 0; padding: 0;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #131515; color: white; line-height: 1.6;">
            <tr>
            <td align="center" style="padding: 20px;">

                <table width="600px" cellpadding="0" cellspacing="0" style="background-color: #181818; border-radius: 8px; overflow: hidden;">
                <tr>
                    <td style="padding: 20px;">
                    <h1 style="font-size: 1.7em; margin: 0; color: #ffffff;">E-mail de Contato</h1>
                    <h2 style="font-size: 1.4em; margin-top: 10px; color: #cccccc;">Olá, Ryan. ${name} quer falar com você.</h2>
                    </td>
                </tr>

                <tr>
                    <td style="border-top: 1px solid #b5b5b563; border-bottom: 1px solid #b5b5b563; padding: 20px 30px 50px 30px; background-color: #202020; color: #ffffff; margin: 0; font-size: 1.1em; white-space: pre-line;">
                      ${content}

                    </td>
                    
                </tr>

                <tr>
                    <td style="padding: 20px; background-color: #181818; text-align: left;">
                    <h3 style="margin: 0 0 8px 0; color: #ffffff;">Contato:</h3>
                    <p style="margin: 0; font-size: 1.1em; color: #cccccc;">Enviado por: ${email}</p>
                    </td>
                </tr>
                <tfoot>
                    <td style="padding: 20px; background-color: #000000; text-align: center;">
                    <p style="margin: 0; font-size: 1em; color: #888888;">
                        Portfólio: <a href="#" style="color: #1e90ff; text-decoration: none;">ryansoares.com.br</a> 🚀
                    
                    </p>
                    
                    </td>
                
                </tfoot>
                
                </table>

              </td>
            </tr>
           </table>

        </body>

        </html> `
    
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).json({ content: `Erro ao enviar e-mail: ${error}` });
        
        }
        res.status(200).json({ content: 'E-mail enviado com sucesso' });

      });
});

const port = 5000;

app.listen(port, () => {
    console.log(`server running on port: ${port}`);

})

