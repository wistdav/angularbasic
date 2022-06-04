import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Barbero} from '../models';
import {BarberoRepository} from '../repositories';

export class UserController {
  constructor(
    @repository(BarberoRepository)
    public barberoRepository : BarberoRepository,
  ) {}

  @post('/barberos')
  @response(200, {
    description: 'Barbero model instance',
    content: {'application/json': {schema: getModelSchemaRef(Barbero)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Barbero, {
            title: 'NewBarbero',
            exclude: ['id'],
          }),
        },
      },
    })
    barbero: Omit<Barbero, 'id'>,
  ): Promise<Barbero> {
    return this.barberoRepository.create(barbero);
  }

  @get('/barberos/count')
  @response(200, {
    description: 'Barbero model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Barbero) where?: Where<Barbero>,
  ): Promise<Count> {
    return this.barberoRepository.count(where);
  }

  @get('/barberos')
  @response(200, {
    description: 'Array of Barbero model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Barbero, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Barbero) filter?: Filter<Barbero>,
  ): Promise<Barbero[]> {
    return this.barberoRepository.find(filter);
  }

  @patch('/barberos')
  @response(200, {
    description: 'Barbero PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Barbero, {partial: true}),
        },
      },
    })
    barbero: Barbero,
    @param.where(Barbero) where?: Where<Barbero>,
  ): Promise<Count> {
    return this.barberoRepository.updateAll(barbero, where);
  }

  @get('/barberos/{id}')
  @response(200, {
    description: 'Barbero model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Barbero, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Barbero, {exclude: 'where'}) filter?: FilterExcludingWhere<Barbero>
  ): Promise<Barbero> {
    return this.barberoRepository.findById(id, filter);
  }

  @patch('/barberos/{id}')
  @response(204, {
    description: 'Barbero PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Barbero, {partial: true}),
        },
      },
    })
    barbero: Barbero,
  ): Promise<void> {
    await this.barberoRepository.updateById(id, barbero);
  }

  @put('/barberos/{id}')
  @response(204, {
    description: 'Barbero PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() barbero: Barbero,
  ): Promise<void> {
    await this.barberoRepository.replaceById(id, barbero);
  }

  @del('/barberos/{id}')
  @response(204, {
    description: 'Barbero DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.barberoRepository.deleteById(id);
  }
}
