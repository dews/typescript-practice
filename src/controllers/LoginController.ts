import { Request, Response, NextFunction } from 'express'
import { get, post, controller, bodyValidator } from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    if (req.session?.loggedIn) {
      res.redirect('/')
    } else {
      res.send(`
      <form method="POST">
          <div>
              <label>Email</label>
              <input name="email" autocomplete="username" />
          </div>
          <div>
              <label>Paasord</label>
              <input name="password" type="password" autocomplete="current-password"/>
          </div>
          <button>Submit</button>
      </form>
    `)
    }
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body
    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true }
      req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
      res.redirect('/')
    } else {
      res.send(`
    <div>
      <div>Invaild email or password</div>
      <a href="/auth/login">Login</a>
    </div>
    `)
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null
    res.redirect('/auth/login')
  }
}
