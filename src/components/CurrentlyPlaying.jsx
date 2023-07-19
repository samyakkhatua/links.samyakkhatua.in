import React, { useState, useEffect } from "react";

function CurrentlyPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    fetch("https://spotinow-1-t1281143.deta.app/currently-playing")
    // fetch("http://127.0.0.1:8000/currently-playing")
      .then((response) => response.json())
      .then((data) => setCurrentlyPlaying(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="items-center justify-content m-auto w-full sm:w-[40%] pt-24">
      <div className="">

        {currentlyPlaying ? (
          <div className="overflow-hidden rounded-lg shadow-lg bg-gray-800">
            <div className="px-4 py-2">
              <h4 className="text-xs font text-white pt-2 pb-3">
                What Samyak is listening on Spotify?
              </h4>
              <h1 className="text-xl font-bold uppercase text-white">
                {currentlyPlaying.track_name}
              </h1>
              <p className="pt-0 text-sm text-gray-400">
                by {currentlyPlaying.artists}
              </p>
            </div>

            <img
              className="object-cover h-32 justify-content m-auto"
              src="https://cdn.cdnlogo.com/logos/s/74/spotify.svg"
              alt="SpotiNow"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-green-400">
              <h1 className="text-lg font-bold text-white"></h1>
              <a href={currentlyPlaying.link}>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Listen Now
                </button>
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-lg shadow-lg bg-gray-800">
            <div className="px-4 py-2">
              <h4 className="text-xs font text-gray-400 pt-2 pb-3">
                Samyak is not listening right now!
              </h4>
              <h1 className="text-xl font-bold uppercase text-white">
              SpotiNow
              </h1>
                <p className="pb-4 text-sm text-gray-200">
                  made by Samyak Khatua
                </p>
              <p className="pt-0 text-sm text-gray-400">
              SpotiNow is a backend project that brings you a seamless integration between your Spotify account and your app, allowing you to effortlessly showcase the currently playing song in real-time.
              </p>
            </div>

            <img
              className="object-cover h-32 justify-content m-auto"
              src="https://cdn.cdnlogo.com/logos/s/74/spotify.svg"
              alt="SpotiNow"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-green-400">
              <h1 className="text-lg font-bold text-white"></h1>
              <a href="https://github.com/samyakkhatua/SpotiNow">
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Project Link
                </button>
              </a>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentlyPlaying;
