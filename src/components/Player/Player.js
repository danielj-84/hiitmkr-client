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
  // let tracks = [trackUri0];

  // for (let i = 1; i < playlist.length; i++) {
  //   tracks.push(playlist[i]?.uri);
  // }

  //Set Access Token
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => setPlay(true), [trackUri0]);

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

  if (!accessToken) return null;
  return (
    <>
      <h3 className="player__timer">{timer} intervals left!</h3>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        // uris={playlist ? tracks : []}
        uris={playlist ? [playlist[0]?.uri, playlist[1]?.uri, playlist[2]?.uri, playlist[3]?.uri, playlist[4]?.uri, playlist[5]?.uri] : []}
      />
    </>
  );
}
