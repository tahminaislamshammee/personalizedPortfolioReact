import './home.css';
import Profile from '../../assets/Tahmina.jpg';
import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Home = () => {
    return ( 
       <section className="home section grid">
            <img src={Profile} alt="" className="home__img"/>

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Tahmina Islam</span> Front-End Developer
                    </h1>
                    
                    <p className="home__description">
                    I'm a passionate front-end developer with a knack for transforming creative ideas into captivating digital experiences. With a relentless dedication to my craft, I specialize in crafting pixel-perfect, user-friendly interfaces that leave a lasting impression.
                    </p>

                    <Link to="/about" className="button">
                        More About Me <span className="button__icon"><FaArrowRight/></span>
                    </Link>
                </div>
            </div>

            <div className="color__block">
                
            </div>
       </section>
    );
}
 
export default Home;