import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

const Me = () => {
  return (
    <section className="my-10 cursor-pointer">
      <h2 className="text-3xl font-bold text-center mb-6">Learning / Interests</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {/* React */}
        <div className="flex flex-col items-center justify-center text-center hover:bg-blue-600 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faReact} className="text-6xl mb-2" />
          <p className="text-lg font-semibold">React</p>
        </div>

        {/* C lang (can use a custom icon) */}
        <div className=" cursor-pointer flex-col items-center justify-center text-center hover:bg-gray-600 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faC} className="text-5xl mb-2" />
          <p className="text-lg font-semibold">C lang </p>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center justify-center text-center hover:bg-orange-500 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faHtml5} className="text-6xl mb-2" />
          <p className="text-lg font-semibold">HTML</p>
        </div>

        {/* CSS */}
        <div
            className="flex flex-col items-center justify-center text-center hover:bg-blue-500 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
          <a
              href="https://dev.to/joacod/the-special-meaning-behind-the-new-css-logo-rebeccapurple-2205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
          >

            <FontAwesomeIcon icon={faCss3Alt} className="text-6xl mb-2"/>
            <p className="text-lg font-semibold">CSS</p>
          </a>
        </div>

        {/* JavaScript */}
        <div
            className="flex flex-col items-center justify-center text-center hover:bg-yellow-500 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faJsSquare} className="text-6xl mb-2" />
          <p className="text-lg font-semibold">JavaScript</p>
        </div>
      </div>
    </section>
  );
};

export default Me;
