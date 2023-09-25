import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.scss";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../../useAuth";
import Header from "../../components/Header/Header";
import SearchResults from "../../components/SearchResults/SearchResults";
import Player from "../../components/Player/Player";
import Footer from "../../components/Footer/Footer";

//Create new instance of Spotify WebApi
const spotifyApi = new SpotifyWebApi({
  clientId: "8db84fbb96fa4422b355b2d97d76dd6b",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [playlist, setPlaylist] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  //Set Access Token
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //Search Spotify for Seed Artists
  const searchSpotify = async () => {
    const url = "https://api.spotify.com/v1/search";
    const searchQuery = encodeURIComponent(searchString);
    const typeQuery = `type=artist`;
    const { data } = await axios.get(`${url}?q=${searchQuery}&${typeQuery}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (data && data.artists) {
      setSearchResults(data.artists.items);
    }
  };

  //Choose Seed Artists for Playlist Creation
  const chooseMusic = (e) => {
    spotifyApi.getArtists(selectedArtists).then(
      function (data) {
        Promise.all([
          spotifyApi.getRecommendations({
            min_energy: 0.8,
            min_tempo: 135,
            min_popularity: 50,
            seed_artists: selectedArtists,
          }),
          spotifyApi.getRecommendations({
            max_tempo: 90,
            max_energy: 0.5,
            min_popularity: 50,
            seed_artists: selectedArtists,
          }),
        ]).then((data) => {
          let highList = data[0].body.tracks;
          let lowList = data[1].body.tracks;
          let newPlaylist = [];
          const len = Math.max(highList.length, lowList.length);
          for (let i = 0; i < len; i++) {
            highList[i]
              ? newPlaylist.push(highList[i])
              : newPlaylist.push(
                  highList[Math.floor(Math.random() * highList.length)]
                );
            lowList[i]
              ? newPlaylist.push(lowList[i])
              : newPlaylist.push(
                  lowList[Math.floor(Math.random() * lowList.length)]
                );
          }
          setPlaylist(newPlaylist);
          // console.log(newPlaylist);
        });
      },
      function (err) {
        console.error(err);
      }
    );
  };

  return (
    <>
      <Header />
      <section className="search">
        <h4 className="search__title">Choose your workout music</h4>

        <div className="search__bar">
          <input
            className="search__input"
            onChange={(event) => setSearchString(event.target.value)}
            value={searchString}
            placeholder="Search for up to 3 artists"
          ></input>
          <button
            className="search__button"
            onClick={function (e) {
              searchSpotify();
              setSearchString("");
            }}
          >
            Search
          </button>
        </div>
        <div className="search__results">
          <SearchResults
            onChange={setSelectedArtists}
            results={searchResults}
          />
        </div>

        <button
          className="search__button search__button--start"
          onClick={chooseMusic}
        >
          Lets HIIT it!
        </button>
      </section>

      <section className="music-player">
        <Player
          accessToken={accessToken}
          playlist={playlist}
          token={accessToken}
        />
      </section>
      <Footer />
    </>
  );
}
