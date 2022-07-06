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

Font-end:

Create-react-app, React Router v6, Axios, Sass
![front-end](readme/front-end.png)

Back-end:

NodeJs, JSON Web Tokens (JWT), BCrypt, MongoDB, Mongoose
![back-end](readme/back-end.png)

<br/>

<h2 style="color: yellow">Setup the project</h2>

### Installation (in root directory, use terminal/bash commands)

```bash
npm i
cd client && npm i
cd .. && cd server && npm i
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

<h2 style="color: #EEEEEE">/coffee </h2>

/coffee - takes a large object with all the coffee information that includes user id, so the coffee can be tied to the user

```js
{
  name: "coffee name",
  roaster: "roaster name",
  origin: "country of origin",
  farm: "coffee farm",
  description: "a large string with description",
  flavours: ["array of strings"],
  price: number,
  link: "https url string",
  score: number,
  user_id: req.params.userId
}
```

/coffee/:id - takes a large object with all the coffee information and uses request params to identify coffee to update

```js
{
  name: "coffee name",
  roaster: "roaster name",
  origin: "country of origin",
  farm: "coffee farm",
  description: "a large string with description",
  flavours: ["array of strings"],
  price: number,
  link: "https url string",
  score: number,
}
```

<br />

---

<h3>Hope you enjoy my project and collect some amazing brew, if you have any questions you can find me on  LinkedIn</h3>

[https://www.linkedin.com/in/danielbutincode](https://www.linkedin.com/in/danielbutincode)

---

<br />

### Credits:

Background image:

<a className="About__image-link" target="_blank" rel="noreferrer" href="https://www.freepik.com/vectors/coffee-branch">Coffee branch vector created by rattanachomphoo - www.freepik.com</a>

Support and guidence (BrainStation Educators and TAs):

Patrick McCullough: [https://github.com/pgmccullough](https://github.com/pgmccullough)

Pavel Ispranikov:[https://github.com/pavelisp](https://github.com/pavelisp)

Andres Beyra: [https://github.com/abeyra](https://github.com/abeyra)
