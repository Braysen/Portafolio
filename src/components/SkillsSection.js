import React from 'react'
//43:51
export default function SkillsSection() {
    return (
        <section className="skills section_skills" id="skills">
            <h2 className="section__title_skills">Skills</h2>
            <span className="section__subtitle_skills">My technical level</span>

            <div className="skills__container container grid">
                <div>
                    <div className="skills__content skills__open">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Front end Developer</h1>
                                <span className="skills__subtitle">More than 2 years</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__javascript"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Back end Developer</h1>
                                <span className="skills__subtitle">More than 2 years</span>
                            </div>

                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Java</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__java"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__number">30%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sql"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">No SQL</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__nosql"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
