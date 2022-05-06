import { Router } from 'express';
import { SubmitFeedbackController } from '@/modules/feedback/useCases/submitFeedback/SubmitFeedbackController';

// inicialize
const submitFeedbackController = new SubmitFeedbackController();
const feedbackRouter = Router();

feedbackRouter.post('/', submitFeedbackController.handle);

export { feedbackRouter };
