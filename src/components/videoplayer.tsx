import { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
        setShowModal(false);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) { // ESC key
            closeModal();
        } else if (event.keyCode === 32 && videoRef.current) { // SPACE key
            event.preventDefault(); // Prevent the default action of the space key (scrolling)
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        if (showModal && videoRef.current) {
            videoRef.current.currentTime = currentTime;
            videoRef.current.play();
        }

        if (showModal) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal, currentTime]);

    return (
        <>
            {showModal ? (
                <div
                    style={{
                        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, width: '100vw', height: '100vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                    onClick={closeModal}
                >
                    <video
                        ref={videoRef}
                        controls
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxHeight: '70vh', width: 'auto' }}
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <img
                    src="/video.gif"
                    className='rounded-xl'
                    style={{ width: '100%', cursor: 'pointer' }}
                    alt="Click to play video"
                    onClick={handleVideoClick}
                />
            )}
        </>
    );
}

export default VideoPlayer;