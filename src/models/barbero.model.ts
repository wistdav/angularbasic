import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Barbero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
  })
  nacimiento?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Barbero>) {
    super(data);
  }
}

export interface BarberoRelations {
  // describe navigational properties here
}

export type BarberoWithRelations = Barbero & BarberoRelations;
