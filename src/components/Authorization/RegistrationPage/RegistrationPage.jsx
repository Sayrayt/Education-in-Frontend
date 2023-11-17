import './RegistrationPage.css';

function LoginPage() {
    return (
        <div className="Login-page">
            <form>
                <a>Регистрация</a>
                <input type="text" placeholder="Введите логин"></input>
                <input type="password" placeholder="Введите пароль"></input>
                <input type="password" placeholder="Повторите пароль"></input>
                <button type="submit">Зарегистрироваться</button>
            </form>
            Уже есть аккаунт? <a href='/login'>Войти</a>
        </div>
    )
}

export default LoginPage;