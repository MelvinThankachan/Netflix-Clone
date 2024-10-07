import Reason from "./Reason";
import teleVision from "../assets/icons/tvSVG";
import download from "../assets/icons/downloadSVG";
import watch from "../assets/icons/watchSVG";
import kids from "../assets/icons/kidsSVG";

const ValuesSection = () => {
  return (
    <div className="content section">
      <h1 className="section-heading">More reasons to join</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <Reason
          heading="Enjoy on your TV"
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          svg={teleVision}
        />
        <Reason
          heading="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
          svg={download}
        />
        <Reason
          heading="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
          svg={watch}
        />
        <Reason
          heading="Create profiles for kids"
          description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
          svg={kids}
        />
      </div>
    </div>
  );
};

export default ValuesSection;
