import { describe, it, beforeEach, expect } from '@jest/globals';
import { FakeFeedbacksRepository } from '@/modules/feedback/repositories/fakes/FakeFeedbacksRepository';
import { FakeMailProvider } from '@/shared/container/providers/MailProvider/fakes/FakeMailProvider';
import { SubmitFeedbackUseCase } from './SubmitFeedbackUseCase';

let feedbacksRepository: FakeFeedbacksRepository;
let mailProvider: FakeMailProvider;
let submitFeedbackUseCase: SubmitFeedbackUseCase;

describe('SubmitFeedbackUseCase', () => {
  beforeEach(() => {
    feedbacksRepository = new FakeFeedbacksRepository();
    mailProvider = new FakeMailProvider();
    submitFeedbackUseCase = new SubmitFeedbackUseCase(
      feedbacksRepository,
      mailProvider
    );
  });

  it('Should be able to submit a new feedback', async () => {
    const content = {
      type: 'Bug',
      comment: 'This is a comment',
    };

    const saveFeedbackSpy = jest.spyOn(feedbacksRepository, 'create');
    const sendEmailSpy = jest.spyOn(mailProvider, 'sendMail');

    await submitFeedbackUseCase.execute(content);

    expect(saveFeedbackSpy).toHaveBeenCalledTimes(1);
    expect(saveFeedbackSpy).toHaveBeenCalledWith(content);

    expect(sendEmailSpy).toHaveBeenCalledTimes(1);
    expect(sendEmailSpy).toHaveBeenCalledWith({
      variables: {
        type: content.type,
        comment: content.comment,
      },
    });
    expect(true).toBe(true);
  });
});
