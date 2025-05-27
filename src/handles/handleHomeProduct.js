import api from '../apis/index'

const handleProductList = async () => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then(({ products }) => {
    //     const contentHTML = products.map(product => `
    //       <div class="product-card">
    //         <img src="${product.thumbnail}" alt="${product.title}">
    //         <div class="product-infor">
    //           <h3>${product.title}</h3>
    //           <p>Giá: ${product.price}$</p>
    //           <div>${product.description}</div>
    //         </div>
    //       </div>
    //     `).join('');


    //     const list = document.getElementById("productList");
    //     if (list) list.innerHTML = contentHTML;
    //   })
    //   .catch(error => {
    //     console.error("Lỗi fetch:", error);
    //   });
    try {
        const {data} = await api.get('/products');
        const contentHTML = data.map(product => `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="product-infor">
                <h3>${product.title}</h3>
                <p>Giá: ${product.price}$</p>
                <div>${product.description}</div>
                </div>
            </div>
        `).join('');
        const list = document.querySelector('#productList')
        list.innerHTML = contentHTML
    } catch (error) {
        console.log(error)
    }
}
export default handleProductList