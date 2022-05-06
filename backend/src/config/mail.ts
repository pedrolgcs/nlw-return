interface IMailConfig {
  driver: 'local';
  host: string;
  port: number;
  user: string;
  pass: string;
}

export default {
  driver: process.env.MAIL_DRIVER || 'local',
  host: process.env.MAIL_HOST || 'localhost',
  port: Number(process.env.MAIL_PORT) || 2525,
  user: process.env.MAIL_USER || '',
  pass: process.env.MAIL_PASS || '',
} as IMailConfig;
