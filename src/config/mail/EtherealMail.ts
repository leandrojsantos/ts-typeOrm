import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandlebarsMailTemplate';

interface IMailContact {
  name: string;
  email: string;
}

interface ITemplateVariables {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariables;
}

interface ISendMail {
  to: IMailContact;
  from: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class EtherealMail {
  static async sendMail({ to, from, subject, templateData }: ISendMail): Promise<void> {
  const accont = await nodemailer.createTestAccount();
  const mailTemple = new HandlebarsMailTemplate();

  const transporter = nodemailer.createTransport({
    host: accont.smtp.host,
    port: accont.smtp.port,
    secure: accont.smtp.secure,
    auth: {
      user: accont.user,
      pass: accont.pass,
    },
  });

  const messsage = await transporter.sendMail({
    from: {
      name: from?.name || 'Fake News api-testes',
      address: from?.email || 'soco@brucedragonlee.com',
    },
    to: {
      name: to.name,
      address: to.email,
    },
    subject,
    html: await mailTemple.parse(templateData),
  });

  console.log('Message sent: %s', messsage.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(messsage));
  }
}
