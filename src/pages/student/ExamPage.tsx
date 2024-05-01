import {useRef} from "react";
import Webcam from "react-webcam";

export const ExamPage = () => {
    const webCamRef = useRef(null);

    const questions = 50;

    return(
        <section className="flex w-full h-screen">
            {/* Main Section */}
            <div className="w-3/4 px-8 py-4">
                {/* Timer */}
                <div className="flex justify-center">
                    <p className="px-4 py-2 rounded-full bg-green-100 font-semibold text-sm mt-2">Time Left: 120 Minutes</p>
                </div>
                {/* Questions */}
                <div>
                    <div>
                        <h1 className="mt-8 font-semibold text-primary">Question: 1</h1>
                    </div>
                    <div>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="mt-6">
                        <ul className="w-48 text-sm font-medium bg-white rounded-lg">
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4" />
                                    <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium">Vue JS</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4" />
                                    <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium">React</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4" />
                                    <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium">Angular</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-3">
                                    <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4" />
                                    <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium">Laravel</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div className="w-1/4 px-8 py-4 border-separation">
                <div className="mb-2 bg-red-100">
                    <Webcam ref={webCamRef} />
                </div>
                <div>
                    <h1 className="secondary-heading">Full Stack Web Developer</h1>
                    <h2 className="secondary-heading font-semibold text-xl">Questions: {questions}</h2>
                </div>
                <div>
                    <div className="flex items-center">
                        <span className="flex w-3 h-3 me-3 bg-green-500 rounded"></span>
                        <p>Answered Questions</p>
                    </div>
                    <div className="flex items-center">
                        <span className="flex w-3 h-3 me-3 bg-red-500 rounded"></span>
                        <p>Un-Answered Questions</p>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-2 my-10 h-[300px] overflow-auto">
                    {
                        Array.from({length: questions}, (_, index) => (
                            <div key={index} className="py-2 px-4 border-2 border-solid border-[#446860] rounded text-center">
                                <h1 className="font-bold">{index + 1}</h1>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="btn primary mb-2">
                        <button>Submit Test</button>
                    </div>
                    <div className="btn secondary">
                        <button>Cancel Test</button>
                    </div>
                </div>
            </div>
        </section>
    )
}