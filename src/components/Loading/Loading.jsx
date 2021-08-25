import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="container-loading">
      <Player
        className="container-loading__player-one"
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_l4lbpsc8.json"
        autoplay={true}
      />
    </div>
  );
};

export default Loading;
