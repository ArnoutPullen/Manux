import { IEntity } from './IEntity';

export class Entity<E> implements IEntity {
    id: string;
    public constructor(init?: Partial<E>) {
        Object.assign(this, init);
    }
}
