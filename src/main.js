import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/Homepage';
import AboutPage from './pages/About';
import NotFound from './pages/Notfound';
import SignUpPage from './pages/Signup';
import handleProductList from './handles/handleHomeProduct';
import hanleRegister from './handles/handleRegister';
import { router, render } from './utils/index';

const app = document.getElementById('app');

router.on("/", () => render(app, HomePage()), {
  after() {
    handleProductList()
  }
});

router.on("/about", () => render(app, AboutPage()));
router.on("/signup", () => render(app, SignUpPage()),{
  after(){
    hanleRegister()
  }   
}
);
router.notFound(() => render(app, NotFound()));

router.resolve();
