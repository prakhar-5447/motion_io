import React, { useRef } from 'react';
import './About.sass';
import figma from "/assets/figma.png"
import motion from "/assets/after-effects.png"
import framer from "/assets/framer.png"
import illustrator from "/assets/illustrator.png"
import community from "/assets/community.jpg"
import curl from "/assets/curl.svg"

const About: React.FC = () => {
    const learnContent: { image: string, title: string, description: string }[] = [
        {
            image: figma,
            title: 'Creative Design',
            description: 'Master the fundamentals of creative design, including color theory, typography, and layout design.'
        },
        {
            image: motion,
            title: 'Motion Graphics',
            description: 'Learn to create captivating motion graphics using industry-standard tools like After Effects.'
        },
        {
            image: framer,
            title: 'Interactive Animation',
            description: 'Explore how to bring animations to life with interactive elements using HTML, CSS, and JavaScript.'
        },
        {
            image: illustrator,
            title: 'Vector Art',
            description: 'Create stunning vector illustrations, svg and frame with tools like Adobe Illustrator and Figma.'
        }
    ];
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const tooltip = tooltipRef.current;
        if (tooltip) {
            const parentElement = event.currentTarget;
            const boundingRect = parentElement.getBoundingClientRect();
            const offsetX = event.clientX - boundingRect.left;
            const offsetY = event.clientY - boundingRect.top;

            tooltip.style.transform = `translate(${offsetX + 10}px, ${offsetY + 10}px)`;
            tooltip.style.visibility = 'visible';
        }
    };

    const handleMouseLeave = () => {
        const tooltip = tooltipRef.current;
        if (tooltip) {
            tooltip.style.visibility = 'hidden';
        }
    };
    return (
        <>
            <section className="about">
                <div className="tech-slider">
                    <div className="tech-track">
                        <div className="tech-item">
                            <span>FIGMA</span>
                        </div>
                        <div className="tech-item">
                            <span>LOTIE</span>
                        </div>
                        <div className="tech-item">
                            <span>ILLUSTRATOR</span>
                        </div>
                        <div className="tech-item">
                            <span>CANVA</span>
                        </div>
                        <div className="tech-item">
                            <span>AFTER EFFECTS</span>
                        </div>
                        <div className="tech-item">
                            <span>FRAMER</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="what-you-learn">
                <h2>WHAT WE <span>OFFER</span></h2>
                <div className="learn-cards-container">
                    {learnContent.map((content, index) => (
                        <div className="card" key={index}>
                            <img src={content.image} alt={content.title} />
                            <div className="content">
                                <span className="title">
                                    {content.title}
                                </span>

                                <p className="desc">
                                    {content.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="join-community">
                <div className="community-content">
                    <img src={curl} alt="curl-1" />
                    <h2>Join Our Community</h2>
                    <p>
                        Our community is a thriving hub for designers, animators, and creatives from every corner of the world. Collaborate on projects, share your latest work, or seek feedback.
                    </p>
                    <button className="join-button">Join Now</button>
                </div>
                <div className="image-content" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <div className="tooltip" ref={tooltipRef}>After Effects</div>
                    <img src={community} alt="community" />
                </div>
            </section>
        </>
    )
};
export default About;