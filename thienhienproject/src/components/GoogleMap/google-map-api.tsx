import React from "react";

interface GoogleMapEmbedProps {
  location: string;
  width?: string;
  height?: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ location, width = "300", height = "300" }) => {
  // URL encoding of the location (you can replace this with a dynamic prop)
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(location)}&zoom=14&maptype=roadmap`;

  return (
    <div className="mapswrapper">
      <iframe
        width={width}
        height={height}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        style={{ border: "0", position: "relative", zIndex: 2 }}
      ></iframe>
      <a
        href="https://www.taxuni.com/i9-form/"
        style={{ color: "rgba(0, 0, 0, 0)", position: "absolute", left: 0, top: 0, zIndex: 0 }}
      >
        I9 Form
      </a>
      <style>
        {`
          .mapswrapper {
            background: #fff;
            position: relative;
          }
          .mapswrapper iframe {
            border: 0;
            position: relative;
            z-index: 2;
          }
          .mapswrapper a {
            color: rgba(0, 0, 0, 0);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleMapEmbed;
