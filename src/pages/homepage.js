import Header from '../components/Header'
import Footer from '../components/Footer';

const HomePage = () => `
  ${Header()}
  <div class="container">
    <h1>HomePage Page</h1>
    <div class="product-list">Đang tải sản phẩm...</div> <!-- giữ chỗ -->
  </div>
  ${Footer()}
`;

export default HomePage;
