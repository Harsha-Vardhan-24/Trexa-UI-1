import {useState, useRef} from "react";
import Webcam from "react-webcam";

export const StudentVerification = () => {
    const [userVerificationImg, setUserVerificationImg] = useState(undefined);
    const [userImage, setUserImage] = useState(undefined);
    const [userIdImage, setUserIdImage] = useState(undefined);
    const [userPhotoVerification, setUserPhotoVerification] = useState(false);
    const webCamRef = useRef(null);

    const updateUserImage = () => {
        const image = webCamRef.current.getScreenshot()
        setUserImage(image);
    }

    const retryUserImage = () => {
        setUserImage(undefined);
    }

    const updateVerification = () => {
        setUserPhotoVerification(true)
        setUserVerificationImg(undefined)
    }

    return (
      <section className="relative top-20 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="main-title-text md:text-4xl">Verify yourself to get access to the exam</h2>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="main-title-text text-2xl text-black md:text-2xl">
                {userPhotoVerification ? "Take a photo of your ID card" : "Take a photo of yourself"}
            </h2>
            <div className="flex flex-col gap-4 w-full h-auto max-w-full">
                {
                    userImage === undefined ? (
                        <Webcam ref={webCamRef} /> 
                    ) : userIdImage === undefined ? (
                        <Webcam ref={webCamRef} /> 
                    ) : (
                        <img src={userIdImage} alt="User ID Image" />
                    )
                }

                {
                    userImage === undefined ? 
                    <button onClick={updateUserImage} className="btn primary">Capture</button> :
                    <div className="flex flex-col md:flex-row gap-4">
                        <button onClick={retryUserImage} className="btn secondary">Retry</button>
                        <button onClick={updateVerification} className="btn secondary">Proceed</button>
                    </div>
                }
            </div>
        </div>
      </section>
    );
  };
  