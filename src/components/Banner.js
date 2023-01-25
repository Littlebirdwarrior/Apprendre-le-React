import '../styles/Banner.css'

//mes fichiers
import logo from '../assets/lmj-logo.png'

function Banner() {
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Logo de la maison jungle' className='lmj-logo' />
            <h1>La maison jungle</h1>
        </div>
    );
}

export default Banner