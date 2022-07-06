# <span style="color:orangered">HIITmkr</span>

<!-- Online demo: [SSL CoffeeDir](https://coffee-dir.herokuapp.com) | [No-SSL CoffeeDir](http://www.coffeedir.ca) -->

![HIITmkr Logo](src/assets/hiitmkr.png)

### Making your HIIT workout more fun and more encouraging!

---

<br />

#### BRAINSTATION WEB DEVELOPMENT BOOTCAMP CAPSTONE PROJECT

_The problem:_
<span> I love the gym - other than beyond the keyboard, it’s my happy place. What I don’t particularly enjoy is long drawn out cardio workouts - which is why I’ve gravitated towards HIIT, or high-intensity interval training. With HIIT, you alternate between short intervals of high intensity exercise and low intensity exercise - you basically get the benefits of a long cardio session in a much shorter, albeit more intense, workout. The problem is that current apps often give you a countdown timer and a series of beeps - not too inspiring! I wanted to make an app to improve that experience and so HIITmkr will do just that by using your favourite artists to encourage you!</span>

<br />

<h2 style="color: yellow">Tech stack</h2>

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a>
<a href="https://create-react-app.dev/" target="_blank" rel="noreferrer"> <img src="https://create-react-app.dev/img/logo.svg" alt="create-react-app" width="80" height="80"/> </a>
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="80" height="80"/> </a>
<a href="https://axios-http.com/" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/8939680/57233883-20344080-6fe5-11e9-8169-1eeb4c782683.png" alt="Axios" width="160" height="80"/> </a>
<a href="https://reactrouter.com/" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/max/1400/0*nH627PKQdg4-BCfj" alt="Axios" width="160" height="80"/> </a>

Back-end:


NodeJs, JSON Web Tokens (JWT), BCrypt, MongoDB, Mongoose
![back-end](readme/back-end.png)

<br/>

<h2 style="color: yellow">Setup the project</h2>

### Installation (in root directory, use terminal/bash commands)

## In order for HIITmkr to function properly, the server (Spotify authentication) must also be installed : HIITmkr API: (https://github.com/danielj-84/hiitmkr-api.git)

```bash
npm i
```

### Set up `.env` file inside `/server/` directory

### Pick a port to use to run the server (8080 is a good one to use)

`PORT=*PORT NUMBER HERE*`

### Initialize a MongoDB database and include the connection string in `DB_CONNECTION` variable

`DB_CONNECTION=*DB CONNECTION STRING*`

### Secret for the JWT token generation (takes any string, but I suggest using `openssl rand -hex 25` in terminal to generate a quick random key key)

`TOKEN_KEY=*SECRET TOKEN*`

<br/>

<h2 style="color: yellow">Run the project</h2>

To run the project locally, write `npm run dev` in root directory of the project

<br/>

<h2 style="color: yellow">Server end-points</h2>

<h2 style="color: #EEEEEE">/user </h2>

/user/register - takes a user object

```js
{
  username: "username string",
  email: "email string",
  password: "password string"
}
```

/user/login - takes a user object and sends back a JWT token to be added to sessionStorage in the browser to be used for user authentication

```js
{
  email: "email string",
  password: "password string"
}
```
<h2 style="color: yellow">Next steps</h2>
-return a dynamic list of a users top artists instead of a list of currated artists, so that upon selecting 3-5 favorites, your songs will reflect a greater variety

-use song data to snap to a moment of high intensity or low intensity, instead of relying on a random part of the song


<br />
<br />
<h3>Have a good workout! If you have any questions you can find me on  LinkedIn</h3>

[https://www.linkedin.com/in/danielbutincode](https://www.linkedin.com/in/danielbutincode)

---

<br />

### Credits:

Support and guidence (BrainStation Educators and TAs):

Patrick McCullough: [https://github.com/pgmccullough](https://github.com/pgmccullough)

Pavel Ispranikov:[https://github.com/pavelisp](https://github.com/pavelisp)

Andres Beyra: [https://github.com/abeyra](https://github.com/abeyra)
