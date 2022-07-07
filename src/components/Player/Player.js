import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-node";
import "./Player.scss";

const spotifyApi = new SpotifyWebApi({
  clientId: "8db84fbb96fa4422b355b2d97d76dd6b",
});

export default function Player({ accessToken, playlist }) {
  const [play, setPlay] = useState(false);
  const [timer, setTimer] = useState(40);
  const trackUri0 = playlist[0]?.uri;
  let tracks = [playlist[0]?.uri, playlist[1]?.uri, playlist[2]?.uri, playlist[3]?.uri, playlist[4]?.uri, playlist[5]?.uri];
  const [intervalTimer, setIntervalTimer] = useState(30);

  for (let i = 6; i < playlist.length; i++) {
    tracks.push(playlist[i]?.uri);
  }

  //Set Access Token
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => setPlay(true), [trackUri0]);

  // [] did mount
  // no [] right to it on render
  // [stuff] state change

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

  const skipSong = () => {
    spotifyApi.skipToNext().then(
      function () {
        console.log("Skip to next");
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    ).then(
      function () {
        seekToPosition(60000);
      }
    );
  };

  useEffect(() => {
    const timeProg = setInterval(() => {
      skipSong();
      setTimer(timer - 1);
    }, 30000);

    return () => {
      clearInterval(timeProg);
    };
  }, [timer]);
  

  // useEffect(() => {
  //   const intervalTimer = setInterval(() => {
  //     setIntervalTimer(intervalTimer - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalTimer);
  //   };
  // }, [intervalTimer])




  if (!accessToken) return null;
  return (
    <>
      <h4 className="player__timer">{timer} intervals left!</h4>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={playlist ? tracks : []}
      />
    </>
  );
}
