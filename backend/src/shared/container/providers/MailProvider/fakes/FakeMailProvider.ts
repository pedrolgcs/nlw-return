// dtos
import { ISendMailDTO } from '../dtos/ISendMailDTO';

// interfaces
import { IMailProvider } from '../models/IMailProvider';

class FakeMailProvider implements IMailProvider {
  private mails: Array<ISendMailDTO> = [];

  public async sendMail(data: ISendMailDTO): Promise<void> {
    this.mails.push(data);
  }
}

export { FakeMailProvider };
