import { ICreateFeedbackDTO } from '../dtos/ICreateFeedbackDTO';

interface IFeedbacksRepository {
  create(data: ICreateFeedbackDTO): Promise<void>;
}

export { IFeedbacksRepository };
