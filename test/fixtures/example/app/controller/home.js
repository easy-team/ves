'use strict';
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.service.test.get(123);
    this.ctx.body = data.name;
  }

  // @see https://www.yuque.com/easy-team/egg-react/node
  async render() {
    await this.ctx.render('home/home.js', { message: 'ves server side render' });
  }

  // @see https://www.yuque.com/easy-team/egg-react/web
  async renderClient() {
    await this.ctx.renderClient('home/home.js', { message: 'ves client side render' });
  }

  // @see https://www.yuque.com/easy-team/egg-react/asset
  async renderAsset() {
    const layout = path.resolve(this.ctx.app.baseDir, 'app/web/view/layout.tpl');
    await this.ctx.renderAsset('home/home.js', { title: 'ves asset render', message: 'ves asset client side render' }, { layout });
  }

  // @see https://www.yuque.com/easy-team/egg-react/asset
  async renderNunjucks() {
    await this.ctx.render('nunjucks.tpl', {
      title: 'ves nunjucks render',
      message: 'ves nunjucks client side render',
      state: JSON.stringify({
        engine: 'nunjucks',
      }),
    });
  }
}

module.exports = HomeController;
