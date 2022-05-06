import nodemailer, { Transporter } from 'nodemailer';
import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProvider } from '../models/IMailProvider';
import mailConfig from '@/config/mail';

class MailtrapMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
    });
  }

  public async sendMail({ variables }: ISendMailDTO): Promise<void> {
    this.client.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Pedro Henrique <pedro.lg.cs@gmail.com>',
      subject: 'Novo feedback',
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${variables.type}`,
        `<p>Comentário: ${variables.comment}`,
        `</div>`,
      ].join('\n'),
    });
  }
}

export { MailtrapMailProvider };
