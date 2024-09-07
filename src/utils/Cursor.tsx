import React, { useEffect, useState, useRef } from 'react';
import './Cursor.sass';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursor = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            cursor.current!.style.display = "block"
        };


        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="circle-cursor" ref={cursor}
            style={{ transform: `translate(${position.x - 22}px, ${position.y - 22}px)` }}
        ></div>
    );
};

export default Cursor;
