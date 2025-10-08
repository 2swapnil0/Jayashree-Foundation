import React from "react";

const Map = () => {
  return (
    <div>
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">https://JayshreeFoundation.org/location</div>
        </div>
        <div className=" px-4  bg-base-200">
          <div className="md:mb-12 lg:mb-0">
            <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
              <iframe
              title="map"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jayashree Foundation | Navi Mumbai, Room No -17,Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
