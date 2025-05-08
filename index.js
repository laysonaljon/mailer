import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/mailer/send', async (req, res) => {
  const { to, subject, html, emailUser, emailPass } = req.body;

  if (!to || !subject || !html || !emailUser || !emailPass) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: emailUser,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(3030, () => console.log('Mailer API running on port 3030'));
