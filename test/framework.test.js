'use strict';

const mock = require('egg-mock');
const { assert } = require('egg-mock/bootstrap');

describe('test/framework.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'example',
      framework: true,
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('framework-example_123456')
      .expect(200);
  });
  it('should GET /render', () => {
    return app.httpRequest()
      .get('/render')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('ves -- The Vue Isomorphic Node Framework') > -1);
        assert(res.text.indexOf('<h1>ves server side render</h1>') > -1);
      });
  });
  it('should GET /renderClient', () => {
    return app.httpRequest()
      .get('/renderClient')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('<title>ves</title>') > -1);
      });
  });
});
