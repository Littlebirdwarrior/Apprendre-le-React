import '../styles/Banner.css';
import Recommendation from './Recommendation'


//mes fichiers
import logo from '../assets/lmj-logo.png'



function Banner() {
    const title = 'La maison jungle'

    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} alt='Logo de la maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommendation/>
        </div>

    );
}

export default Banner