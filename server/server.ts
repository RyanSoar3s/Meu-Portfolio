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
    const { name, email, message } = req.body;
    const token = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USER,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: token.token
        },
        logger: true,
        debug: true

    } as SMTPTransport.Options);
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Formulário de Contato: ' + name,
        text: `Testando envio de email - ${message}`
    
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return res.status(500).send(`error: ${error}`);

        }
        res.status(200).send('E-mail enviado com sucesso');

      });
});

const port = Number(process.env.HOST_PORT);

app.listen(port, () => {
    console.log(`server running on port: ${port}`);

})

