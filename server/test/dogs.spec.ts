import * as chai from 'chai';
import chaiHttp = require('chai-http')
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Dog from '../models/dog';

chai.use(chaiHttp).should();

describe('Dogs', () => {

    beforeEach(done => {
        Dog.deleteMany({}, err => {
            done();
        });
    });

    describe('Backend tests for dogs', () => {

        it('should get all the dogs', done => {
            chai.request(app)
                .get('/api/dogs')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });

        it('should get dogs count', done => {
            chai.request(app)
                .get('/api/dogs/count')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('number');
                    res.body.should.be.eql(0);
                    done();
                });
        });

        it('should create a new dog', done => {
            const dog = new Dog({ name: 'Sparky', weight: 10, age: 3, favouriteToy: 'rope' });
            chai.request(app)
                .post('/api/dog')
                .send(dog)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('weight');
                    res.body.should.have.property('age');
                    res.body.should.have.property('favouriteToy');
                    done();
                });
        });

        it('should get a dog by its id', done => {
            const dog = new Dog({ name: 'Sparky', weight: 10, age: 3, favouriteToy: 'rope' });
            dog.save((error, newDog) => {
                chai.request(app)
                    .get(`/api/dog/${newDog.id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('weight');
                        res.body.should.have.property('age');
                        res.body.should.have.property('favouriteToy');
                        done();
                    });
            });
        });

        it('should update a dog by its id', done => {
            const dog = new Dog({ name: 'Sparky', weight: 10, age: 3, favouriteToy: 'rope' });
            dog.save((error, newDog) => {
                chai.request(app)
                    .put(`/api/dog/${newDog.id}`)
                    .send({ weight: 400 })
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            });
        });

        it('should delete a dog by its id', done => {
            const dog = new Dog({ name: 'Sparky', weight: 10, age: 3, favouriteToy: 'rope' });
            dog.save((error, newDog) => {
                chai.request(app)
                    .del(`/api/cat/${newDog.id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                    });
                    done();
            });
        });

    })
})