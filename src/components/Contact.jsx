import React from 'react'
import { contactText } from '../constants'

const contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <div className="contact__title">Contact</div>

                <div className="contact__line" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    {contactText.map((text, key) => (
                        <div key={key}>
                            <a href={text.link}>{text.title}</a>
                        </div>
                    ))}
                </div>
                <div className="contact__line bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default contact
