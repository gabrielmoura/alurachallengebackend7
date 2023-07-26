import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('DepoimentosController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/depoimentos (POST)', () => {
    return request(app.getHttpServer())
      .post('/depoimentos')
      .send({
        nome: 'Teste',
        depoimento:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Etiam facilisis nisl id aliquam finibus. Etiam fringilla pulvinar velit quis convallis. ' +
          'Nam metus ligula, blandit in viverra a, pulvinar a diam. ' +
          'Nunc tincidunt ullamcorper malesuada. Maecenas eget.',
        foto: '',
      })
      .expect(201);
  });

  it('/depoimentos (GET)', () => {
    return request(app.getHttpServer()).get('/depoimentos').expect(200);
    // .expect('Hello World!');
  });
  it('/depoimentos/1 (GET)', () => {
    return request(app.getHttpServer()).get('/depoimentos/1').expect(200);
    // .expect('Hello World!');
  });

  it('/depoimentos/1 (PUT)', () => {
    return request(app.getHttpServer())
      .put('/depoimentos/1')
      .send({
        nome: 'Teste',
        depoimento:
          'Aenean a nunc libero.' +
          ' Fusce pharetra id arcu ut maximus.' +
          ' Etiam malesuada, ipsum vitae blandit pulvinar, leo turpis tincidunt magna, vel lacinia arcu urna a ex.' +
          ' Vestibulum pretium sapien id sapien non.',
        foto: '',
      })
      .expect(200);
  });

  it('/depoimentos/1 (DELETE)', () => {
    return request(app.getHttpServer()).delete('/depoimentos/1').expect(200);
  });
});
