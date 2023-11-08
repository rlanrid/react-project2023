import React, { useEffect, useRef } from 'react'

import { portText } from '../constants'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizantal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizantal,
                start: "top 56px",
                end: () => "+=" + horizantal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });
        return () => {
            scrollTween.kill();
        }
    }, [])

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <div
                            className={`port__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{port.num}</span>
                            <a href="/" rel="noopener noreferrer">
                                <img src={port.img} alt={`이미지${key + 1}`} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">
                                {port.desc}
                            </p>
                            <div className="btn">
                                <a href={port.view} rel="noopener noreferrer">사이트 보기</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port
