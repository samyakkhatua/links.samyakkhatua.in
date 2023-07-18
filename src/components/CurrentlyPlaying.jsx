import React, { useState, useEffect } from 'react';

function CurrentlyPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/currently-playing')
      .then(response => response.json())
      .then(data => setCurrentlyPlaying(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
      </div>

      <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">$129</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
      </div>
    </div>

    <div className='text-white'>
      {currentlyPlaying ? (
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl mb-4">Currently Playing:</h2>
          <p className="text-lg">Track Name: {currentlyPlaying.track_name}</p>
          <p className="text-lg">Artists: {currentlyPlaying.artists}</p>
          <p className="text-lg">
            Link: 
            <a
              href={currentlyPlaying.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline ml-1"
            >
              {currentlyPlaying.link}
            </a>
          </p>
        </div>
      ) : (
        <p>Loading currently playing data...</p>
      )}
    </div>
    </>
  );
}

export default CurrentlyPlaying;
