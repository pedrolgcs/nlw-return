import { container } from 'tsyringe';
import mailConfig from '@/config/mail';
import { MailtrapMailProvider } from './implementations/MailtrapMailProvider';
import { IMailProvider } from './models/IMailProvider';

const providers = {
  local: new MailtrapMailProvider(),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
