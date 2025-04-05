// Header.js
import React from "react";

const Body = () => {
  return (
    <div>
      <section id="videos" className="mt-5">
        <div className="container d-flex justify-content-end">
          <div className="ratio ratio-16x9" style={{ width: '50%' }}>
            <iframe
              src="https://www.youtube.com/embed/XzGt8egsSio?start=179"
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
