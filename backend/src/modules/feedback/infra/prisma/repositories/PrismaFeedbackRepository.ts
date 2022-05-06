import { prisma } from '@/shared/infra/prisma/prisma';
import { IFeedbacksRepository } from '@/modules/feedback/repositories/IFeedbacksRepository';
import { ICreateFeedbackDTO } from '@/modules/feedback/dtos/ICreateFeedbackDTO';

class PrismaFeedbackRepository implements IFeedbacksRepository {
  public async create(data: ICreateFeedbackDTO): Promise<void> {
    const { type, comment, screenshot } = data;

    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

export { PrismaFeedbackRepository };
