// Header.js
import React from "react";


const Body = () => {
  return (
    <div>
      <section id="videos" className="mt-5">
        <div className="container">
          <h2>Videos</h2>
          <div className="ratio ratio-16x9" style={{ width: '50%', float: 'right' }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            >
            </iframe>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Body;
