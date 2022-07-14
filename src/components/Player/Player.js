import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-node";
import "./Player.scss";

const spotifyApi = new SpotifyWebApi({
  clientId: "8db84fbb96fa4422b355b2d97d76dd6b",
});

export default function Player({ accessToken, playlist }) {
  const [play, setPlay] = useState(false);
  // const [timer, setTimer] = useState(40);
  const [intervals, setIntervals] = useState(40);
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
    spotifyApi
      .skipToNext()
      .then(
        function () {
          setIntervals(intervals - 1);
          console.log("Skip to next song", intervals);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      )
      .then(function () {
        seekToPosition(60000);
      });
  };

  //set 30s interval before song change
  useEffect(() => {
    const timeProg = setInterval(() => {
      skipSong();
    }, 10000);

    return () => {
      clearInterval(timeProg);
    };
  }, [play]);

  if (!accessToken) return null;
  return (
    <>
      <h4 className={`player__timer ${intervals%2 === 0 ? "player__timer--high" : "player__timer--low"}`}>{intervals} intervals left!</h4>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={playlist ? tracks : []}
        initialVolume={10}
      />
    </>
  );
}
