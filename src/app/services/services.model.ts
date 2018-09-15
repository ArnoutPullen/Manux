import { Entity } from '../core/Entity';

export class Service extends Entity<Service> {
    name: string;
    activated: boolean;
}
