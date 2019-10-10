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
  it('should GET /renderAsset', () => {
    return app.httpRequest()
      .get('/renderAsset')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('<title>ves asset render</title>') > -1);
        assert(res.text.indexOf('window.__INITIAL_STATE__ = {\"title\":\"ves asset render\",\"message\":\"ves asset client side render\"}') > -1);
      });
  });
  it('should GET /renderNunjucks', () => {
    return app.httpRequest()
      .get('/renderNunjucks')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('<title>ves nunjucks render</title>') > -1);
        assert(res.text.indexOf('<h1>ves nunjucks client side render</h1>') > -1);
        assert(res.text.indexOf('window.__INITIAL_STATE__ = {\"engine\":\"nunjucks\"};') > -1);
      });
  });
});
