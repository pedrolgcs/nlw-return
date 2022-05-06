import { inject, injectable } from 'tsyringe';
import { IFeedbacksRepository } from '@/modules/feedback/repositories/IFeedbacksRepository';
import { IMailProvider } from '@/shared/container/providers/MailProvider/models/IMailProvider';

type IRquest = {
  type: string;
  comment: string;
  screenshot?: string;
};

@injectable()
class SubmitFeedbackUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private feedbacksRepository: IFeedbacksRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  public async execute(data: IRquest): Promise<void> {
    await this.feedbacksRepository.create(data);

    await this.mailProvider.sendMail({
      variables: {
        type: data.type,
        comment: data.comment,
      },
    });

    return;
  }
}

export { SubmitFeedbackUseCase };
