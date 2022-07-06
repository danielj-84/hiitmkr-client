import { useState, useEffect } from "react";
import "./Dashboard.scss";
import useAuth from "../../useAuth";
import Player from "../../components/Player/Player";
import SpotifyWebApi from "spotify-web-api-node";
import Header from "../../components/Header/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

//carousel variables
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

//features artists
const featuredArtists = [
  {
    artist_id: "6vWDO969PvNqNYHIOW5v0m",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5ebd3d058be8485c8583703b6d2",
    artist_name: "Beyonce",
  },
  {
    artist_id: "4q3ewBCX7sLwd24euuV69X",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5eb8ee9a6f54dcbd4bc95126b14",
    artist_name: "Bad Bunny",
  },
  {
    artist_id: "6KImCVD70vtIoJWnq6nGn3",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
    artist_name: "Harry Styles",
  },
  {
    artist_id: "1HY2Jd0NmPuamShAr6KMms",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5ebc8d3d98a1bccbe71393dbfbf",
    artist_name: "Lady Gaga",
  },
  {
    artist_id: "3Nrfpe0tUJi4K4DXYWgMUX",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb",
    artist_name: "BTS",
  },
  {
    artist_id: "6M2wZ9GZgrQXHCFfjv46we",
    artist_image:
      "https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8858",
    artist_name: "Dua Lipa",
  },
];

//Create new instance of Spotify WebApi
const spotifyApi = new SpotifyWebApi({
  clientId: "8db84fbb96fa4422b355b2d97d76dd6b",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [playingTrack, setPlayingTrack] = useState();
  const [playlist, setPlaylist] = useState([]);

  //Set Access Token
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //Choose Artist Inspiration
  const chooseMusic = (e) => {
    spotifyApi.getArtists([e.target.id]).then(
      function (data) {
        Promise.all([
          spotifyApi.getRecommendations({
            min_energy: 0.7,
            min_danceability: 0.7,
            min_tempo: 130,
            min_popularity: 70,
            seed_artists: data.body.artists[0].id,
          }),
          spotifyApi.getRecommendations({
            // max_tempo: 90,
            max_energy: 0.5,
            seed_artists: data.body.artists[0].id,
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
          console.log(newPlaylist);
        })
      }, 
      function (err) {
        console.error(err);
      }
    );
  };

  // spotifyApi.getArtist('6M2wZ9GZgrQXHCFfjv46we')
  // .then(function(data) {
  //   console.log('Artist information', data.body);
  // }, function(err) {
  //   console.error(err);
  // });

  return (
    <>
      <Header />
      <div className="choices">
        <section className="interval-choice">
          <h1 className="main-title">Choose your interval</h1>
          <form className="interval-choice__form">
            <div className="interval-choice__selectors">
              <div className="interval-choice__category">
                <h4 className="interval-choice__heading">High Intensity</h4>
                <div className="interval-choice__grouping">
                  <p className="interval-choice__selection">30s</p>
                  <p className="interval-choice__selection">45s</p>
                  <p className="interval-choice__selection">60s</p>
                </div>
              </div>
              <div className="interval-choice__category">
                <h4 className="interval-choice__heading">Low Intensity</h4>
                <div className="interval-choice__grouping">
                  <p className="interval-choice__selection">30s</p>
                  <p className="interval-choice__selection">45s</p>
                  <p className="interval-choice__selection">60s</p>
                </div>
              </div>
              <div className="interval-choice__category">
                <h4 className="interval-choice__heading">Workout Duration</h4>
                <div className="interval-choice__grouping">
                  <p className="interval-choice__selection">10m</p>
                  <p className="interval-choice__selection">20m</p>
                  <p className="interval-choice__selection">30m</p>
                </div>
              </div>
            </div>
            <button className="interval-choice__button">
              Confirm HIIT intervals
            </button>
          </form>
        </section>
        <section className="music-choice">
          <h1 className="main-title">Choose your Inspiration</h1>
          <Carousel
            className="carousel"
            swipeable={false}
            responsive={responsive}
            draggable={false}
            infinite={true}
            centerMode={true}
          >
            {featuredArtists.map((artist) => {
              return (
                <div
                  className="carousel__objects"
                  key={artist.artist_id}
                  onClick={chooseMusic}
                >
                  <img
                    className="carousel__image"
                    src={artist.artist_image}
                    id={artist.artist_id}
                    alt="featured artist"
                  />
                  <p className="carousel__artist-name">{artist.artist_name}</p>
                </div>
              );
            })}
          </Carousel>
        </section>
      </div>
      <section className="music-player">
        <Player accessToken={accessToken} playlist={playlist} token={accessToken} />
      </section>
    </>
  );
}
