import React from 'react';
import './Testimonial.sass';
const testimonials = [
    {
        name: "John Doe",
        role: "Motion Designer",
        text: "This platform has transformed the way I approach motion design. The tools and resources available are top-notch!",
    },
    {
        name: "Jane Smith",
        role: "Animator",
        text: "I love the community and the wealth of knowledge shared here. It's truly a hub for creativity and innovation.",
    },
    {
        name: "Michael Lee",
        role: "Art Director",
        text: "The tutorials and courses offered are fantastic. They've really helped me refine my skills and stay ahead in the industry.",
    }
];

const Testimonial: React.FC = () => {
    return (
        <>
            <section className="testimonial-section">
                <h2>What Our <span>Users</span> Say</h2>
                <div className="testimonial-container">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-info">
                                <p className="curl">~</p>
                                <div>
                                    <p className="testimonial-name">{testimonial.name}</p>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="black"></div>
            <div className="text-divider">
                <p className="text-divider-content">CREATIVITY</p>
                <p className="text-divider-content">CREATIVITY</p>
                <div className="bouncing-ball"></div>
            </div>
            <p className="text-footer">IS INTELLIGENCE HAVING FUN</p>
            <div className="white"></div>
        </>
    );
};

export default Testimonial;
