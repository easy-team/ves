'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.service.test.get(123);
    this.ctx.body = data.name;
  }
  async render() {
    await this.ctx.render('home/home.js', { message: 'ves server side render' });
  }
  async renderClient() {
    await this.ctx.renderClient('home/home.js', { message: 'ves client side render' });
  }
}

module.exports = HomeController;
