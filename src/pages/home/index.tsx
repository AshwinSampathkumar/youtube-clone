import React from "react";
import ButtonList from "../../components/ButtonList";
import VideoContainer from "../../sections/home/VideoContainer";

const Home = () => {
  return (
    <div className="mt-[80px] px-3 col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Home;
