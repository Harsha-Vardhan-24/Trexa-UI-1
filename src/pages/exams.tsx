import {ExamCard} from "../components/examCard";

const courseNames = [
    { title: "Cyber Security", questions: 20, time: 60 },
    { title: "Cyber Security Fundamentals", questions: 15, time: 45 },
    { title: "Advanced Cyber Security Practices", questions: 25, time: 75 },
    { title: "Ethical Hacking and Penetration Testing", questions: 30, time: 90 },
    { title: "Network Security Essentials", questions: 18, time: 55 },
    { title: "Cyber Security Risk Management", questions: 22, time: 70 },
    { title: "Cloud Security Principles", questions: 17, time: 50 },
    { title: "Cryptography and Data Protection", questions: 23, time: 65 },
    { title: "Cyber Security Incident Response", questions: 28, time: 80 },
    { title: "Cyber Security for Business Professionals", questions: 12, time: 40 },
    { title: "Web Application Security", questions: 24, time: 70 },
    { title: "Mobile Security and Privacy", questions: 18, time: 55 },
    { title: "Cyber Security Policy and Governance", questions: 16, time: 45 },
    { title: "Cyber Security Threat Intelligence", questions: 21, time: 60 },
    { title: "Industrial Control System Security", questions: 19, time: 50 },
    { title: "Internet of Things (IoT) Security", questions: 26, time: 75 }
];

export const Exams = () => {
    return (
        <section className="relative top-20 p-4 w-full mx-auto">
            <div className="flex justify-between items-center flex-col md:flex-row">
                <h1 className="text-2xl font-bold mb-5">Exam Library</h1>
                <label
                    htmlFor="search"
                    className="label-style sr-only"
                    >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    </div>
                    <input
                    type="search"
                    id="search"
                    className="block w-full p-4 ps-10 text-sm input-text-area"
                    placeholder="Search"
                    required
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center py-5 gap-4">
                {
                    courseNames.map((course, index) => {
                        return(
                            <ExamCard
                                name={course.title}
                                questions={course.questions}
                                time={course.time}
                                key={index}
                            />
                        )
                    })
                }

            </div>
        </section>
    );
  };
  