// Bottom export style - all exports grouped at the bottom
export class MainController {
  static getStatus(req, res) {
    res.json({ status: 'ok' });
  }
}

class HomeController {
  static getWelcome(req, res) {
    res.json({
      message: 'Welcome to the Express API',
      version: '1.0.0'
    });
  }
}

export { HomeController };
