
import api from "../apis";
import { validRegister } from "../validations/register";
import { router } from "../utils/index";


function handleRegister() {
  const btn = document.getElementById('registerBtn');
  if (btn) {
    btn.addEventListener('click', Register);
  }
}

async function Register() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirmPass').value;

  const user = { email, password, confirmPass };


  if (!validRegister(user)) {
    alert("Vui lòng điền đầy đủ và đúng thông tin. Mật khẩu phải khớp.");
    return;
  }

  try {
    const res = await api.post('/register', {
      email: user.email,
      password: user.password
    });

    console.log("Đăng ký thành công:", res.data);
    alert("Đăng ký thành công!");

    
    sessionStorage.setItem("user", JSON.stringify(res.data));

    router.navigate('/login')

  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    alert("Đăng ký thất bại. Tài khoản có thể đã tồn tại.");
  }
}

export default handleRegister;
