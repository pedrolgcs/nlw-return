import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SubmitFeedbackUseCase } from './SubmitFeedbackUseCase';

class SubmitFeedbackController {
  public async handle(request: Request, response: Response) {
    const { type, comment, screenshot } = request.body;

    const submitFeedbackUseCase = container.resolve(SubmitFeedbackUseCase);

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return response.status(201).send();
  }
}

export { SubmitFeedbackController };
