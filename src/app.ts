import express from 'express';
import { Application } from 'express';

class App {
  public app: Application;
  public port: number;

  constructor(init: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = init.port;

    this.middleWares(init.middleWares);
    this.routes(init.controllers);
    this.assets();
    this.template();
  }

  private middleWares(middleWares: { forEach: (args0: (middleWares: any) => void) => void }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: { forEach: (args0: (contoller: any) => void) => void }) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  private assets() {
    this.app.use(express.static('public'));
    this.app.use(express.static('views'));
  }

  private template() {
    this.app.set('view engine', 'pug');
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
