import React from 'react'
import logo from '../resources/images/perfil.png'

export default function AboutSection() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About me</h2>
            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <h2 className="about_subtitle">I am Brayssen Torrejon Cerna</h2>
                    <span className="about_profession">Full Stack Developer</span>
                    <p className="about_text">Mi nombre es Brayssen Torrejon Cerna soy estudiante de la carrera de Ingeniería de sistemas e informática, me gusta aprender nuevas tecnologías. Mi objetivo es integrar equipos con alta especialización tecnológica.</p>
                </div>
            </div>
        </section>
    )
}
