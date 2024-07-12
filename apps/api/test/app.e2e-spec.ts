import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { TeamsService } from 'src/teams/teams.service';

describe('App (e2e)', () => {
  let app: INestApplication;
  let teamsService: TeamsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    teamsService = moduleFixture.get<TeamsService>(TeamsService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 200 on the GraphQL endpoint', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ __schema { queryType { name } } }' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('data');
      });
  });

  it('should return a formatted error response for GraphQL errors', async () => {
    // Simulate an error by querying for a non-existent field or using an invalid query
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            nonExistentField {
              id
            }
          }
        `,
      })
      .expect(400);

    expect(response.body).toHaveProperty('errors');
    const error = response.body.errors[0];
    expect(error).toHaveProperty('message');
    expect(error.message).toBe(
      'Cannot query field "nonExistentField" on type "Query".',
    );
  });

  it('should return a custom formatted error for service exceptions', async () => {
    // Mock the findAll method to throw an error
    const errorMessage = 'Teams not found';
    jest.spyOn(teamsService, 'findAll').mockImplementation(() => {
      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    });

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            teams {
              id
            }
          }
        `,
      })
      .expect(200);

    expect(response.body).toHaveProperty('errors');

    const error = response.body.errors[0];

    expect(error).toHaveProperty('message');
    expect(error.message).toBe(errorMessage);

    expect(error).toHaveProperty('extensions');
    expect(error.extensions).toHaveProperty('code');
    expect(error.extensions.code).toBe('INTERNAL_SERVER_ERROR');
  });
});
