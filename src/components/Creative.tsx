import React, { useEffect, useRef } from 'react';
import './Creative.sass';
import user_1 from "/assets/user_1.jpeg"
import user_2 from "/assets/user_2.jpeg"
import user_3 from "/assets/user_3.jpeg"
import user_4 from "/assets/user_4.jpeg"

const Creative: React.FC = () => {
    const bar = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    let sticky: boolean = false;
    useEffect(() => {
        const handleScroll = () => {
            if (blockRef.current) {
                const rect = blockRef.current.getBoundingClientRect();
                if (rect.top <= 0 && !sticky) {
                    sticky = true;
                    bar.current!.classList.add("bar")
                    window.scrollTo(
                        {
                            top: window.scrollY + rect.bottom,
                            behavior: "smooth"
                        }
                    )
                } else if (sticky && rect.top > 0) {
                    sticky = false;
                    bar.current!.classList.remove("bar")
                }
            }
        };


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sticky]);

    const moveUp = () => {
        if (blockRef.current)
            if (sticky) {
                window.scrollTo(
                    {
                        top: window.scrollY + blockRef.current?.getBoundingClientRect().top,
                        behavior: "smooth"
                    }
                )
            } else {
                window.scrollTo(
                    {
                        top: window.scrollY + blockRef.current?.getBoundingClientRect().bottom,
                        behavior: "smooth"
                    }
                )
            }
    }

    const profiles = [
        { img: user_1, name: 'Alice', profession: 'Designer', top: '5%', left: '60%', rotationZ: '-10deg', rotationY: '30deg', rotationX: '10deg', scale: 1.3 },
        { img: user_2, name: 'Bob', profession: 'Developer', top: '20%', left: '80%', rotationZ: '10deg', rotationY: '-80deg', rotationX: '10deg', scale: 1 },
        { img: user_3, name: 'Charlie', profession: 'Project Manager', top: '40%', left: '10%', rotationZ: '-5deg', rotationY: '100deg', rotationX: '10deg', scale: 0.9 },
        { img: user_4, name: 'Eve', profession: 'Product Owner', top: '60%', left: '40%', rotationZ: '20deg', rotationY: '5deg', rotationX: '60deg', scale: 1.2 },
    ];


    return (
        <>
            <div className="block" ref={bar}>
                <div className="pixel8cloud" onClick={moveUp}>
                    <div className="block">
                        <p>
                            pixel8cloud
                        </p>
                    </div>
                </div>
            </div>
            <header ref={blockRef} className="scroll-indicator">
                {profiles.map((profile, index) => (
                    <div
                        className="profile-card"
                        key={index}
                        style={{
                            top: profile.top,
                            left: profile.left,
                            transform: `rotate(${profile.rotationZ}) rotateY(${profile.rotationY}) rotateX(${profile.rotationX}) scale(${profile.scale})`,
                        }}
                    >
                        <div className="card-strip"></div>
                        <div className="avatar">
                            <img src={profile.img} alt="no_image" />
                        </div>
                        <h3 className="name">{profile.name}</h3>
                        <p className="profession">{profile.profession}</p>
                    </div>
                ))}
            </header >
        </>
    );
};

export default Creative;
