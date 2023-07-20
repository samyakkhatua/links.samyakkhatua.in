import "./App.css";
import Card from "./components/Card";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import useAnalyticsEventTracker from "./components/useAnalyticsEventTracker";

// Google Analytics (GA4)
import ReactGA from "react-ga4";
const MEASUREMENT_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID;
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
    <div className="mt-24 h-[100%]">
      <HeroSection />

      {/* Cards */}
      <div className="justify-content m-auto w-full sm:w-[40%] ">
        <Card
          label="Threads"
          link="https://bit.ly/3pufGl6"
          linkText="Let's start the conversations!"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "threads")
          }
        />

        <Card
          label="Linkedin"
          link="https://bit.ly/3hdZJL8"
          linkText="Let's connect and network!"
          onClick={() =>
            gaEventTracker("link cards", "card clicked", "linkedin")
          }
        />

        <Card
          label="Github"
          link="https://bit.ly/3hez3Kl"
          linkText="Explore projects and repositories!"
          onClick={() => gaEventTracker("link cards", "card clicked", "github")}
        />

        <Card
          label="Email"
          link="mailto:hello@samyakkhatua.in"
          linkText="hello@samyakkhatua.in"
          onClick={() => gaEventTracker("link cards", "card clicked", "email")}
        />
      </div>

      <CurrentlyPlaying />

      <Footer />
    </div>
  );
}

export default App;
