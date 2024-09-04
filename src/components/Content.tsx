import React from 'react';
import './Content.sass';
import { FaPlay } from 'react-icons/fa';

const Content: React.FC = () => {
    return (
        <section className="playlist-content">
            <div className="playlist">
                <ul className="video-list">
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                    <li className="video-item">
                        <div className="thumbnail"></div>
                        <div className="video-info">
                            <h4>Mastering Motion Graphics</h4>
                            <p>Introductory Guide</p>
                            <span>12:34</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="video-player">
                <div className="video-container">
                    <div className="play-button-overlay"><FaPlay /></div>
                    <img src="https://placehold.co/600x400/333/d6d6d6" alt="Video Thumbnail" />
                </div>
                <div className="video-container">
                    <div className="play-button-overlay"><FaPlay /></div>
                    <img src="https://placehold.co/600x400/333/d6d6d6" alt="Video Thumbnail" />
                </div>
                <div className="video-container">
                    <div className="play-button-overlay"><FaPlay /></div>
                    <img src="https://placehold.co/600x400/333/d6d6d6" alt="Video Thumbnail" />
                </div>
                <div className="video-container">
                    <div className="play-button-overlay"><FaPlay /></div>
                    <img src="https://placehold.co/600x400/333/d6d6d6" alt="Video Thumbnail" />
                </div>
                <div className="video-container">
                    <div className="play-button-overlay"><FaPlay /></div>
                    <img src="https://placehold.co/600x400/333/d6d6d6" alt="Video Thumbnail" />
                </div>
            </div>
        </section >
    );
};

export default Content;
