import React from 'react';
import './Gallery.sass';
import { FaAngleDown } from 'react-icons/fa';
import img1 from "/assets/1.jpeg";
import img2 from "/assets/2.jpeg";
import img3 from "/assets/3.jpeg";
import img4 from "/assets/4.jpeg";
import img5 from "/assets/5.jpeg";
import img6 from "/assets/6.jpeg";
import img7 from "/assets/7.jpeg";
import img8 from "/assets/8.jpeg";
import img9 from "/assets/9.jpeg";
import img10 from "/assets/10.jpeg";
import img11 from "/assets/11.jpeg";
import img12 from "/assets/12.jpeg";


const Gallery: React.FC = () => {

    return (
        <>
            <section className="gallery-section">
                <div className="gallery-header">
                    <h2>Explore the World of Motion & Art</h2>
                    <p>Discover the beauty of motion graphics, animation, and digital art through our curated gallery. Each piece tells a unique story, bringing creativity to life.</p>
                </div>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={img1} alt="Gallery Image 1" />
                    </div>
                    <div className="gallery-item large">
                        <img src={img2} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery-item">
                        <img src={img3} alt="Gallery Image 3" />
                    </div>
                    <div className="gallery-item wide">
                        <img src={img4} alt="Gallery Image 3" />
                    </div>
                    <div className="gallery-item flex">
                        <img src={img5} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery-item">
                        <img src={img6} alt="Gallery Image 4" />
                    </div>
                    <div className="gallery-item">
                        <img src={img7} alt="Gallery Image 5" />
                    </div>
                    <div className="gallery-item">
                        <img src={img8} alt="Gallery Image 6" />
                    </div>
                    <div className="gallery-item">
                        <img src={img9} alt="Gallery Image 7" />
                    </div>
                    <div className="gallery-item">
                        <img src={img10} alt="Gallery Image 8" />
                    </div>
                    <div className="gallery-item">
                        <img src={img11} alt="Gallery Image 8" />
                    </div>
                    <div className="gallery-item wide">
                        <img src={img12} alt="Gallery Image 8" />
                    </div>
                </div>
                <div className="effect">
                </div>
                <div className="fade-effect">
                    <hr />
                    <div className="show-more">
                        <p>Show More</p>
                        <FaAngleDown />
                    </div>
                </div>
                <div className="gallery-footer">
                    <p>Thank you for exploring our gallery. Stay inspired and keep creating!</p>
                </div>
            </section>
        </>
    )
};
export default Gallery;