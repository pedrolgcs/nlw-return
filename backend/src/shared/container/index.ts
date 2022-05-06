import { container } from 'tsyringe';
import { IFeedbacksRepository } from '@/modules/feedback/repositories/IFeedbacksRepository';
import { PrismaFeedbackRepository } from '@/modules/feedback/infra/prisma/repositories/PrismaFeedbackRepository';

// global Providers
import './providers';

container.registerSingleton<IFeedbacksRepository>(
  'FeedbacksRepository',
  PrismaFeedbackRepository
);
