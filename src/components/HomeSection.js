import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../resources/images/perfil.png'

export default function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <h1 className="home_title"><span>HE</span><br/>LLO.</h1>
                
                <div>
                    <div className="home__social">
                        <a href="#cv" className="button button-light home__button">Download Cv</a>
                        <div className="redes_sociales">
                            <a href="https://www.facebook.com/braysen.torres/" className="home__social-icon">
                                <i><FacebookIcon/></i>
                            </a>
                            <a href="https://www.linkedin.com/in/brayssen-torrejon-cerna/" className="home__social-icon">
                                <i><LinkedInIcon/></i>
                            </a>
                            <a href="https://www.github.com/Braysen" className="home__social-icon">
                                <i><GitHubIcon/></i>
                            </a>
                        </div>
                    </div>
                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-link"><i className="bx bx-up-arrow-alt"></i>Scroll down</a>
                    </div>
                </div>
                <img src={logo} alt="" className="home_img"/>
            </div>
        </section>
    )
}
