import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category = "", action = "", label = "u") => {
  console.log(category, action, label);
  ReactGA.event({ category, action, label });
};

export default useAnalyticsEventTracker;
