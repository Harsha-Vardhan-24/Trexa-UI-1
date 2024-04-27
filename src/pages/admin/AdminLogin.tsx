import Logo from '../../assets/TrExa.png';

export const AdminLogin = () => {
  return (
    <section className="p-4 w-full mx-auto">
      <form className="max-w-sm mx-auto my-10 p-6 border-separation rounded-xl">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Company Logo" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="label-style">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="input-text-area"
            placeholder="name@trexa.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="label-style">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="input-text-area"
            placeholder="******"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button type="submit" className="btn primary w-full">
          Login
        </button>
      </form>
    </section>
  );
};
