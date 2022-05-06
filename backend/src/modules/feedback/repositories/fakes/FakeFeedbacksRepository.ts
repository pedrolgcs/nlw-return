import crypto from 'crypto';
import { ICreateFeedbackDTO } from '@/modules/feedback/dtos/ICreateFeedbackDTO';
import { IFeedbacksRepository } from '../IFeedbacksRepository';

class FakeFeedbacksRepository implements IFeedbacksRepository {
  private feedbacks: Array<any> = [];

  public async create(data: ICreateFeedbackDTO): Promise<any> {
    const feedback = {
      id: crypto.randomUUID(),
      ...data,
    };

    this.feedbacks.push(feedback);
  }
}

export { FakeFeedbacksRepository };
