import { AppError } from '@/shared/errors/AppError';

export namespace SubmitFeedbackError {
  export class FeedbackAlreadyExists extends AppError {
    constructor() {
      super('Feedback already exists', 400);
    }
  }
}
