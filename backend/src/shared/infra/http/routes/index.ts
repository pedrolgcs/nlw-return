import { Router } from 'express';
import { feedbackRouter } from '@/modules/feedback/infra/http/routes';

const routes = Router();

routes.use('/feedbacks', feedbackRouter);

export { routes };