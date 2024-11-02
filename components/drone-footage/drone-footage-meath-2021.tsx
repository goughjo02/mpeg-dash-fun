"use client";

import React from "react";

// This imports the functional component from the previous sample.
import VideoJS from "../video-js";
import type videojs from "video.js";

export const DroneFootageMeath2021 = () => {
  const playerRef = React.useRef<ReturnType<typeof videojs> | null>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/drone_footage_riverstown_january_2021.mpd",
        type: "application/dash+xml",
      },
    ],
  };

  const handlePlayerReady = (player: ReturnType<typeof videojs>) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};
