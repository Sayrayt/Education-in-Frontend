import Avatar from './Avatar/Avatar';
import './HomePage.css'

function HomePage() {
    return (
        <div className="Home-page">
            <div className='Routes'>
                <a className='Authorization' href='/login'>
                    <div className='Authorization-route' >
                        <img className='Authorization-ico' src='../../images/routesIco/AuthorizationIco.png' alt='authorization-ico' />
                        <span >Авторизация</span>
                    </div>
                </a>

                <a className='Contact-details' href='#Contacts'>
                    <div className='Contact-details-route'>
                        <img className='Contact-details-ico' src='../../images/routesIco/ContactDetailsIco.png' alt='Contact-details-ico'></img>
                        <span >Контактная информация</span>

                    </div>
                </a>
            </div>

            <article className='Contacts' id="Contacts">
                <a className='Contact-phone-number'>Номер телефона:</a> <br />
                <a className='Contact-email-address'>Электронная почта</a>
            </article>

            <div className='Avatar'>
                <Avatar />
            </div>

        </div>
    )
}

export default HomePage;