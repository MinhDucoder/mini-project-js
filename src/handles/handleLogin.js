import { router } from "../utils/index";
import api from "../apis/index";
import { validLogin } from "../validations/register";

function handleLogin(){
  const btn = document.querySelector('.login-btn')
  if (!btn){
    console.log('error')
    return
  }
  btn.addEventListener('click', Login)
}

const Login = async (e) => {
  
  e.preventDefault();

  const emailEl = document.getElementById('email');
  const passEl = document.getElementById('password');

  console.log('email element:', emailEl);
  console.log('password element:', passEl);

  const email = emailEl.value.trim();
  const password = passEl.value;


  const user = { email, password };

  if (!validLogin(user)) {
    console.log('sai')
    alert("Xin mời nhập lại mật khẩu");
    return;
  }

  try {

    const res = await api.post('/signin', {
      ...user,
      role:'admin',
      address:'',
      phone:''
    });

    if (res.data) {
      sessionStorage.setItem('user', JSON.stringify(res.data.user));
      alert("Đăng nhập thành công!");
      router.navigate('/')
    } else {
      alert("Đăng nhập thất bại!");
    }
  } catch (error) {
  if (error.response) {
    console.error("Server trả về lỗi:", error.response.data);
    alert("Lỗi: " + error.response.data.message || "Đăng nhập thất bại.");
  } else if (error.request) {
    console.error("Không nhận được phản hồi từ server:", error.request);
    alert("Không thể kết nối đến máy chủ.");
  } else {
    console.error("Lỗi khác:", error.message);
    alert("Đã xảy ra lỗi không xác định.");
  }
}

};

export default handleLogin;
