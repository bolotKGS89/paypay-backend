import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { response } from 'express';
import {EmployeeDto} from '../dtos/EmployeeDto';

describe('AppController (e2e)', () => {
  let app;

    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();
    });

    it('/employees (GET)', (done) => {
      request(app.getHttpServer())
        .get('/employees')
        .expect(200)
        .then((response) => {
            const res = JSON.parse(response.text);
            expect(res.length).toBeGreaterThanOrEqual(1);
            done();
        });
    });

    it('/employees (POST)', (done) => {
      request(app.getHttpServer())
      .post('/employees')
      .send({name: 'Jenny', position: 'test', experience: 1, nationality: 'test'})
      .expect(200)
      .then((response) => {
          const res = JSON.parse(response.text);
          expect(res).toEqual('Jenny');
          done();
      });
    });

    it('/employees (empty POST)', (done) => {
      request(app.getHttpServer())
      .post('/employees')
      .send('s')
      .expect(200)
      .then((response) => {
          expect(response.text).toBeNull;
          done();
      });
    })

    it('/employees (wrong PUT)', (done) => {
      request(app.getHttpServer())
      .put('/employees')
      .send('s')
      .expect(500)
      .then((response) => {
          expect(response.text).toBeDefined;
          done();
      });
    })

    it('/employees (PUT)', (done) => {
      request(app.getHttpServer())
      .put('/employees')
      .send({id: 1, name: 'Jenny', position: 'test', experience: 1, nationality: 'test'})
      .expect(200)
      .then((response) => {
          expect(response.text).toBeDefined;
          done();
      });
    })

    it('/employees (DELETE)', (done) => {
      request(app.getHttpServer())
      .delete('/employees/1')
      .expect(200)
      .then((response) => {
          expect(response.text).toContain('Jon');
          done();
      });
    })

    it('/employees (wrong DELETE)', (done) => {
      request(app.getHttpServer())
      .delete('/employees/asdsd')
      .expect(500)
      .then((response) => {
          expect(response.text).toBeDefined;
          done();
      });
    })

    it('/performance (GET)', (done) => {
      request(app.getHttpServer())
      .get('/performance')
      .expect(200)
      .then((response) => {
          expect(JSON.parse(response.text).length).toBeGreaterThanOrEqual(1);
          done();
      });
    })

    it('/performance (PUT)', (done) => {
      request(app.getHttpServer())
      .put('/performance')
      .send({id: 1, grade: 1, date: 'test', employeeName: 1, comment: 'test'})
      .expect(200)
      .then((response) => {
          expect(response.text).toContain('Jon')
          done();
      });
    })

    it('/performance (wrong PUT)', (done) => {
      request(app.getHttpServer())
      .put('/performance')
      .send('ascasc')
      .expect(500)
      .then((response) => {
          expect(response.text).toBeDefined;
          done();
      });
    })

    it('/performance (empty POST)', (done) => {
      request(app.getHttpServer())
      .post('/performance')
      .send('ascasc')
      .expect(200)
      .then((response) => {
        expect(response.text).toBeNull;
          done();
      });
    })

    it('/feedback (GET)', (done) => {
      request(app.getHttpServer())
      .get('/feedback')
      .expect(200)
      .then((response) => {
          expect(JSON.parse(response.text).length).toBeGreaterThanOrEqual(1);
          done();
      });
    })

    it('/feedback (wrong POST)', (done) => {
      request(app.getHttpServer())
      .post('/feedback')
      .expect(500)
      .then((response) => {
          expect(response.text).toContain('error');
          done();
      });
    })

    it('/feedback (POST)', (done) => {
      request(app.getHttpServer())
      .post('/feedback')
      .send({id: 1, name: 'test', comment: 'test', feedbackText: 'test'})
      .expect(200)
      .then((response) => {
          expect(response.text).toContain('success');
          done();
      });
    })

    it('/feedback (PUT)', (done) => {
      request(app.getHttpServer())
      .put('/feedback')
      .send({id: 1, name: 'test', comment: 'test', feedbackText: 'test'})
      .expect(200)
      .then((response) => {
          expect(Number(response.text)).toEqual(1);
          done();
      });
    })

    it('/feedback (wrong PUT)', (done) => {
      request(app.getHttpServer())
      .put('/feedback')
      .send('asd')
      .expect(500).then((response) => {
        done();
    });;
    })
});
