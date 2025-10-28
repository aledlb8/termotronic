import { useState, useRef, useEffect } from 'react';

interface ResponsiveVideoSources {
    desktop: string;
    mobile: string;
}

interface VideoPlayerProps {
    videoSrc?: string | ResponsiveVideoSources;
    gifSrc?: string;
    showAsButton?: boolean;
    buttonText?: string;
    className?: string;
    imgClassName?: string;
    buttonClassName?: string;
}

const VideoPlayer = ({
    videoSrc = "https://media.termotronic.com/Redes/2025/Videos/20Anios%2Emp4",
    gifSrc = "/videos/video.gif",
    showAsButton = false,
    buttonText = "Ver Video Explicativo",
    className = "",
    imgClassName = "rounded-xl",
    buttonClassName = "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
}: VideoPlayerProps) => {
    const [showModal, setShowModal] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isResponsiveVideo = typeof videoSrc === 'object' && videoSrc !== null;

    useEffect(() => {
        if (isResponsiveVideo) {
            const checkScreenSize = () => {
                setIsLargeScreen(window.innerWidth >= 1024);
            };

            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);

            return () => window.removeEventListener('resize', checkScreenSize);
        }
    }, [isResponsiveVideo]);

    const getVideoSource = () => {
        if (isResponsiveVideo && typeof videoSrc === 'object') {
            return isLargeScreen ? videoSrc.desktop : videoSrc.mobile;
        }
        return typeof videoSrc === 'string' ? videoSrc : "";
    };

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
            {showModal && (
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
                        <source src={getVideoSource()} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            <div className={className}>
                {showAsButton ? (
                    <button
                        onClick={handleVideoClick}
                        className={buttonClassName}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        {buttonText}
                    </button>
                ) : (
                    <img
                        src={gifSrc}
                        className={imgClassName}
                        style={{ width: '100%', cursor: 'pointer' }}
                        alt="Click to play video"
                        onClick={handleVideoClick}
                    />
                )}
            </div>
        </>
    );
}

export default VideoPlayer;