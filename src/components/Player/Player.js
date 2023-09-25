import { useState, useEffect, useRef } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-node";
import "./Player.scss";

const spotifyApi = new SpotifyWebApi({
  clientId: "8db84fbb96fa4422b355b2d97d76dd6b",
});

export default function Player({ accessToken, playlist }) {
  const [play, setPlay] = useState(false);
  const [intervals, setIntervals] = useState(40);
  const [intervalDuration, setIntervalDuration] = useState(5000);
  const [remainingTime, setRemainingTime] = useState(5000); // Initial timer duration
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [intervalStartTime, setIntervalStartTime] = useState(null);
  const intervalRef = useRef(null);

  const trackUri0 = playlist[0]?.uri;
  let tracks = [playlist[0]?.uri];

  for (let i = 1; i < playlist.length; i++) {
    tracks.push(playlist[i]?.uri);
  }

  //Set Access Token
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //autoplay the music SDK
  useEffect(() => setPlay(true), [trackUri0]);

  //start song at position 60s
  const seekToPosition = (positionMs) => {
    spotifyApi.seek(positionMs).then(
      function () {
        console.log("Seek to " + positionMs);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  //switch to next song
  const skipSong = () => {
    spotifyApi.skipToNext().then(
      function () {
        seekToPosition(60000)
        setIntervals((intervals) => intervals - 1);
        setIntervalStartTime(Date.now());
        setRemainingTime(intervalDuration);
        console.log("Skip to next song", intervals);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  console.log("remaining", remainingTime)
  console.log("START", intervalStartTime)

  //set time interval before song change
  useEffect(() => {
    if (play) {
      setRemainingTime(intervalDuration);
      if (intervalRef.current === null) {
        intervalRef.current = setInterval(() => {
          skipSong();
        }, intervalDuration);
      }
    } else {
      setRemainingTime(Date.now() - intervalStartTime)
      setIntervalStartTime(Date.now())
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [play]);


  if (!accessToken) return null;
  return (
    <>
      <h4
        className={`player__timer ${
          intervals % 2 === 0 ? "player__timer--high" : "player__timer--low"
        }`}
      >
        {intervals} intervals left!
      </h4>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) {
            setPlay(false);
          } else setPlay(true);
        }}
        play={play}
        uris={playlist ? tracks : []}
        initialVolume={10}
      />
    </>
  );
}
