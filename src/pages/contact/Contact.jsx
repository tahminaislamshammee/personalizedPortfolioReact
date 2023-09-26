import {FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaLinkedin, FaGithub, FaCodepen} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
    return ( 
        <section className="contact section container">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container grid">
                <div className="contact__data">
                    <h3 className="contact__title">
                        Don't be Shy !
                    </h3>

                    <p className="contact__description">
                    Feel free to connect with me if you're interested in collaborating on the development of an engaging and interactive web application.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon'/>

                            <div>
                                <span className="info__title">
                                    Mail me
                                </span>

                                <h4 className="info__desc">
                                    <a  className='mailto' href="mailto:tahminaislamshammee@gmail.com">tahminaislamshammee@gmail.com</a>
                                </h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon'/>

                            <div>
                                <span className="info__title">
                                    Call me
                                </span>

                                <h4 className="info__desc">
                                <a href='tel:+819 340 3052' className="info__desc">
                                    +819 340 3052
                                </a>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.facebook.com/alisha.islam.332" className='contact__social-link'>
                            <FaFacebookF/>
                        </a>

                        <a href="https://github.com/tahminaislamshammee/" className='contact__social-link'>
                            <FaGithub/>
                        </a>

                        <a href="https://www.linkedin.com/in/tahmina-islam-shammee-9413271b7/" className='contact__social-link'>
                            <FaLinkedin/>
                        </a>

                        <a href="https://codepen.io/_tahmina/" className='contact__social-link'>
                            <FaCodepen/>
                        </a>
                    </div>
                </div>

                <form className="contact__form" method='POST' action='https://getform.io/f/fbe31ce3-fd3c-48b4-9dc6-ad654a067b7d'>
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder='Your Name'
                            className='form__control' required/>
                        </div>

                        <div className="form__input-div">
                            <input type="email" placeholder='Your Email'
                            className='form__control' required/>
                        </div>

                        <div className="form__input-div">
                            <input type="text" placeholder='Your Subject'
                            className='form__control' required/>
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea placeholder='Youe Message' className="form__control textarea" required></textarea>
                    </div>

                    <button className='button'>
                        Send Message
                        <span className="button__icon contact__button-icon">
                        <FiSend/>
                    </span>
                    </button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;