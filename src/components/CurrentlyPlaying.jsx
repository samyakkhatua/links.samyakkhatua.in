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
          <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
              <h4 className="text-xs font text-gray-500 dark:text-white pt-2 pb-3">
                What Samyak is listening on Spotify?
              </h4>
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                {currentlyPlaying.track_name}
              </h1>
              <p className="pt-0 text-sm text-gray-500 dark:text-gray-400">
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
            <p className="text-white">What Samyak is listening on Spotify?</p>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentlyPlaying;
