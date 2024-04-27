import {useState} from "react";
import {Student} from "../types/studentTypes"

export const StudentProfile = () => {

  const initialStudent: Student = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    userImage: '',
    organizationName: '',
    organizationId: '',
    rollNo: '',
    joinedOn: '',
    address: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
  };

  const [studentDetails, setStudentDetails] = useState<Student[]>([initialStudent]);


  const updateUserDetails = (e) => {
    e.preventDefault();
    console.log(e.target.id, e.target.value)
  }

  return (
    <section className="relative top-20 p-4 w-[90%] mx-auto">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <h1 className="text-2xl font-bold mb-5">Settings</h1>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
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
      <form>
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Personal Info</h1>
            <p className="text-sm font-light">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn secondary">
              Cancel
            </button>
            <button type="submit" className="btn primary">
              Update
            </button>
          </div>
        </div>
        <div className="grid mx-auto md:mx-grid gap-6 mb-6 md:grid-cols-2">
          
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="label-style"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="input-text-area"
              placeholder="First Name"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>
          
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="label-style"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="input-text-area"
              placeholder="Last Name"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>
          
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="label-style"
            >
              Email
            </label>
            <div className="relative">
              <div className="input-text-area-with-icon">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email"
                className="block w-full ps-10 p-2.5 input-text-area"
                placeholder="name@flowbite.com"
                onChange={(e) => updateUserDetails(e)}
                required
              />
            </div>
          </div>
          
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="label-style"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="input-text-area"
              placeholder="+91 9949548481"
              pattern="\+?[0-9]{12}"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>
          
          {/* Your Photo */}
          <div className="md:col-span-2">
            <label
              className="label-style"
              htmlFor="userImage"
            >
              Your Photo
            </label>
            <div className="flex gap-2">
              <img
                className="w-12 h-12 rounded-full"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712397638~exp=1712398238~hmac=8938bb40bb51f95d148f3456e0b8f998d12810ea08894cdffb9691a2f36153ed"
                alt=""
              />

              <div className="relative border-2 border-solid w-full border-green-700 rounded-lg h-32 flex justify-center items-center flex-col p-4 text-center">
                <div className="border-2 border-solid border-gray-200 rounded-lg shadow-sm">
                  <svg
                    className="w-8 h-8 text-gray-800 opacity-50"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="grey"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  className="input-field-upload-file"
                  aria-describedby="user_avatar_help"
                  id="userImage"
                  type="file"
                  onChange={(e) => updateUserDetails(e)}
                />
                <div
                  className="mt-1 text-sm text-gray-500"
                  id="user_avatar_help"
                >
                  <a className="text-green-700 font-semibold">
                    Click to upload{" "}
                  </a>
                  or drag and drop image
                </div>
              </div>
            </div>
          </div>

            {/* Organization Name */}
          <div>
            <label
              htmlFor="organizationName"
              className="label-style"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              className="input-text-area"
              placeholder="Organization Name"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>

            {/* Organization ID */}
          <div>
            <label
              htmlFor="organizationId"
              className="label-style"
            >
              Organization ID
            </label>
            <input
              type="text"
              id="organizationId"
              className="input-text-area"
              placeholder="Organization ID"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>

            {/* Roll Number */}
          <div>
            <label
              htmlFor="rollNo"
              className="label-style"
            >
              Roll No
            </label>
            <input
              type="tel"
              id="rollNo"
              className="input-text-area"
              placeholder="12345678910"
              pattern="[0-9]"
              onChange={(e) => updateUserDetails(e)}
              required
            />
          </div>

          {/* Joined On */}
          <div>
            <div className="relative">
              <label
                htmlFor="joinedOn"
                className="label-style"
              >
                Joined On
              </label>
              <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 mt-6 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                name="start"
                id="joinedOn"
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 "
                value="2024-04-06" // Here we need to get the data from API in this format
                readOnly
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="label-style"
            >
              Address
            </label>
            <textarea
              id="address"
              rows={4}
              className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
              placeholder="Address Here"
              onChange={(e) => updateUserDetails(e)}
              required
            ></textarea>
          </div>

          {/* Portfolio Projects */}
          <div className="md:col-span-2">
            <label
              className="label-style"
              htmlFor="user_avatar"
            >
              Portfolio Projects
            </label>
            <div className="relative border-2 border-solid w-full border-green-700 rounded-lg h-32 flex justify-center items-center flex-col p-4 text-center mb-5">
              <div className="border-2 border-solid border-gray-200 rounded-lg shadow-sm">
                <svg
                  className="w-8 h-8 text-gray-800 opacity-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="grey"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                className="input-field-upload-file"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
                <a className="text-green-700 font-semibold">Click to upload </a>
                or drag and drop data
              </div>
            </div>

              {/* LinkedIn URL */}
            <div>
              <label
                htmlFor="linkedinUrl"
                className="label-style"
              >
                Linkedin
              </label>
              <div className="relative mb-6">
                <div className="input-text-area-with-icon">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="linkedinUrl"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 "
                  placeholder="John Smith"
                  onChange={(e) => updateUserDetails(e)}
                />
              </div>
            </div>

              {/* GIthub URL */}
            <div>
              <label
                htmlFor="githubUrl"
                className="label-style"
              >
                Github
              </label>
              <div className="relative mb-6">
                <div className="input-text-area-with-icon">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="githubUrl"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 "
                  placeholder="John Smith"
                  onChange={(e) => updateUserDetails(e)}
                />
              </div>
            </div>

              {/* Porfolio Link */}
            <div>
              <label
                htmlFor="portfolio_Url"
                className="label-style"
              >
                Link
              </label>
              <div className="relative mb-6">
                <div className="input-text-area-with-icon">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="portfolio_Url"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 "
                  placeholder="johnsmith.com"
                  onChange={(e) => updateUserDetails(e)}
                />
              </div>
            </div>
          </div>
          
            {/* <div>
                <label
                  htmlFor="section"
                  className="label-style"
                >
                  Section
                </label>
                <select id="section" className="input-text-area" required>
                  <option value="" disabled selected>
                    Select a section
                  </option>
                  <option>Section 1</option>
                  <option>Section 2</option>
                  <option>Section 3</option>
                  <option>Section 4</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="label-style"
                >
                  Department
                </label>
                <select id="department" className="input-text-area" required>
                  <option value="" disabled selected>
                    Select a department
                  </option>
                  <option>Department 1</option>
                  <option>Department 2</option>
                  <option>Department 3</option>
                  <option>Department 4</option>
                </select>
              </div>
              <div>
              <label
                htmlFor="gender"
                className="label-style"
              >
                Gender
              </label>
              <select id="gender" className="input-text-area" required>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div> */}
        </div>
      </form>
    </section>
  );
};
