import React, { useState, useEffect } from 'react';

function CurrentlyPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    fetch('https://spotinow-1-t1281143.deta.app/currently-playing')
      .then(response => response.json())
      .then(data => setCurrentlyPlaying(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='text-white'>
      {currentlyPlaying ? (
        <div>
          <h2>Currently Playing:</h2>
          <p>ID: {currentlyPlaying.id}</p>
          <p>Track Name: {currentlyPlaying.track_name}</p>
          <p>Artists: {currentlyPlaying.artists}</p>
          <p>Link: <a href={currentlyPlaying.link} target="_blank" rel="noopener noreferrer">{currentlyPlaying.link}</a></p>
        </div>
      ) : (
        <p>Loading currently playing data...</p>
      )}
    </div>
  );
}

export default CurrentlyPlaying;
