import {useState, useRef} from "react";
import Webcam from "react-webcam";

export const StudentVerification = () => {
    const [userVerificationImg, setUserVerificationImg] = useState(undefined);
    const [userImage, setUserImage] = useState(undefined);
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
    }

    return (
      <section className="relative top-20 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="main-title-text mb-0 md:text-4xl">Verify yourself to get access to the exam</h2>
        </div>
        <div className="pb-8 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="main-title-text text-2xl text-black md:text-2xl">
                Take a photo of yourself with your ID card
            </h2>
            <div className="mb-5">
                <h2 className="secondary-heading font-semibold ">Image Verification:</h2>
                <div className="flex justify-center">
                    <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Student Clear
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            ID Card Clear
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full h-auto max-w-full">
                {
                    userImage === undefined ?
                    <Webcam ref={webCamRef} /> : 
                    <img className="border border-4 border-green-500 rounded" src={userImage} alt="User ID Image" />
                }

                {
                    userImage === undefined ? 
                    <button onClick={updateUserImage} className="btn primary">Capture</button> :
                    <div className="flex flex-col md:flex-row md:justify-center gap-4">
                        <button onClick={retryUserImage} className="btn secondary">Retry</button>
                        <button onClick={updateVerification} className="btn primary">Proceed</button>
                    </div>
                }
            </div>
        </div>
      </section>
    );
  };
  