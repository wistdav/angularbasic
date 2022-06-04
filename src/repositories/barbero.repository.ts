import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Barbero, BarberoRelations} from '../models';

export class BarberoRepository extends DefaultCrudRepository<
  Barbero,
  typeof Barbero.prototype.id,
  BarberoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Barbero, dataSource);
  }
}
