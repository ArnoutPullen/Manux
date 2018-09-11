import { IEntity } from './IEntity';

export interface IService {
    getAll();
    getSingle(entity: IEntity);
}
