import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
    return `
        ${Header}
        <style>
            .login-container {
                background: white;
                padding: 40px;
                margin: 40px auto;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                width: 100%;
                max-width: 400px;
                font-family: Arial, sans-serif;
            }

            .login-container h2 {
                text-align: center;
                margin-bottom: 30px;
                color: #333;
            }

            .form-group {
                margin-bottom: 20px;
            }

            .form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
            }

            .form-group input {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 16px;
            }

            .login-btn {
                width: 100%;
                padding: 12px;
                background-color: #4CAF50;
                color: white;
                border: none;
                font-size: 16px;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            .login-btn:hover {
                background-color: #45a049;
            }

            .footer-text {
                text-align: center;
                margin-top: 20px;
                font-size: 14px;
                color: #666;
            }

            .footer-text a {
                color: #007BFF;
                text-decoration: none;
            }

            .footer-text a:hover {
                text-decoration: underline;
            }
        </style>

        <div class="login-container">
            <h2>Đăng Nhập</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="email">Tên đăng nhập</label>
                    <input type="text" id="email" name="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" class="login-btn">Đăng nhập</button> 
            </form>
            <div class="footer-text">
                Chưa có tài khoản? <a href="#">Đăng ký</a>
            </div>
        </div>

        ${Footer}
    `;
};

export default LoginPage;
