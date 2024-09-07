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
        { img: user_1, name: 'Alice', profession: 'Designer' },
        { img: user_2, name: 'Bob', profession: 'Developer' },
        { img: user_3, name: 'Charlie', profession: 'Project Manager' },
        { img: user_4, name: 'Eve', profession: 'Product Owner' },
    ];


    return (
        <>
            <div className="block" ref={bar}>
                <div className="pixel8cloud" onClick={moveUp}>
                    <div className="label">
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
                    >
                        <div className="card-dot"></div>
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
