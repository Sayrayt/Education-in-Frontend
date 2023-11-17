import './LoginPage.css';

function LoginPage() {
    return (
        <div className="Login-page">
            <form>
                <a>Авторизация</a>
                <input type="text" placeholder="Введите логин"></input>
                <input type="password" placeholder="Введите пароль"></input>
                <button type="submit" id="login" >Войти</button>
            </form>
            <a href='/registration'>Зарегистрироваться</a>
        </div>
    )
}

export default LoginPage;