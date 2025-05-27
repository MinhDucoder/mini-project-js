import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigo from 'navigo';

import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import NotFound from './pages/notfound';

const router = new Navigo("/", {
  linksSelector: "a",
});

const app = document.getElementById('app');

const render = (position, content) => {
  position.innerHTML = content;
};

router.on("/", () => render(app, HomePage()), {
  after() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(({ products }) => {
        const contentHTML = products.map(product => `
          <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <div class="product-infor">
              <h3>${product.title}</h3>
              <p>Giá: ${product.price}$</p>
              <div>${product.description}</div>
            </div>
          </div>
        `).join('');


        const list = document.getElementById("productList");
        if (list) list.innerHTML = contentHTML;
      })
      .catch(error => {
        console.error("Lỗi fetch:", error);
      });
  }
});

router.on("/about", () => render(app, AboutPage()));
router.notFound(() => render(app, NotFound()));

router.resolve();
