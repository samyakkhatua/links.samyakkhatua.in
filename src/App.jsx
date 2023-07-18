import "./App.css";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import useAnalyticsEventTracker from "./components/useAnalyticsEventTracker";

// Google Analytics (GA4)
import ReactGA from "react-ga4";
const MEASUREMENT_ID = "G-RRSWWQMQ0Y";
ReactGA.initialize(MEASUREMENT_ID);

function App() {

  // page views
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "Home",
  });

  // GA event tracker
  const gaEventTracker = (category, action, label) =>
    useAnalyticsEventTracker(category, action, label);

  return (
    <div className="mt-32 h-[100%]">
      <div className="justify-content m-auto w-full sm:w-[40%] ">
        <div class="gap-6 text-center md:grid-cols-3 lg:gap-12 text-white">
          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                // src="https://links.samyakkhatua.in/profile-pic.webp"
                src="https://res.cloudinary.com/dmkmepkbv/image/upload/v1688840747/profile-pic_ro6k28.webp"
                class="w-48 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>

            <h5 class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-4xl">
              Samyak Khatua
            </h5>

            <h6 class="mt-0 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-0">
              Fullstack Developer
            </h6>

            {/* <p class="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p> */}
          </div>
        </div>

        {/* Threads */}
        <a
          href="https://bit.ly/3pufGl6"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full w-full hover:bg-gray-200 sm:w-full"
          role="alert"
          target="_blank"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "threads")
          }
        >
          <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 ">
            Threads
          </span>{" "}
          <span class="text-sm font-medium">
            Let's start the conversations!
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Linkedin */}
        <a
          href="https://bit.ly/3hdZJL8"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full w-full hover:bg-gray-200"
          role="alert"
          target="_blank"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "linkedin")
          }
        >
          <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 w-30">
            Linkedin
          </span>{" "}
          <span class="text-sm font-medium">Let's connect and network!</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Github */}
        <a
          href="https://bit.ly/3hez3Kl"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full w-full hover:bg-gray-200"
          role="alert"
          target="_blank"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "github")
          }
        >
          <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 w-30">
            Github
          </span>{" "}
          <span class="text-sm font-medium">
            Explore projects and repositories!
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Mail */}
        <a
          href="mailto:hello@samyakkhatua.in"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full w-full hover:bg-gray-200"
          role="alert"
          target="_blank"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "email")
          }
        >
          <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 w-30">
            Email
          </span>{" "}
          <span class="text-sm font-medium">hello@samyakkhatua.in</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      {/* <CurrentlyPlaying /> */}

      {/* footer */}
      <p class="w-full text-center my-12 text-gray-600 sticky pt-32 bottom-0">
        Made by Samyak Khatua
      </p>
    </div>
  );
}

export default App;
