import React from 'react'

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
                    <div>
                        <a href="/">KAKAO : rlanr</a>
                    </div>
                    <div>
                        <a href="/">rlanrider@gmail.com</a>
                    </div>
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
