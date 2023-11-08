import React from 'react'
import { skillText } from '../constants'

const Skill = () => {
    return (
        <section id="skill">
            <div class="skill__inner">
                <h2 class="skill__title">
                    challenge <em>나의 도전</em>
                </h2>
                <div class="skill__desc">
                    {skillText.map((text, key) => (
                        <div>
                            <span>{key + 1}.</span>
                            <h3>{text.title}</h3>
                            <p>
                                {text.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill
