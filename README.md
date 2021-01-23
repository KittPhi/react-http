[ReactJS Tutorial - HTTP and React](https://www.youtube.com/watch?v=GTmjthNvrxY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=41)

[github](https://github.com/gopinav/React-Tutorials)

> React Components simply read props & states, then renders it to the UI.

> To use data from a server, you would need to get the data into your
> components props or state.
> Axios is a great candidate as well as Fetch API

### Get right into it:
- npm start
- open chrome dev-tools 'F12'

PostForm.js: Get Request using axios and render the fetched data into React Component
- enter: userid
- enter: title
- enter: body
- submit

using http://jsonplaceholder.typicode.com/posts for fake endpoints:


## Instructions:
npx create-react-app <react-http>

npm i axios

## Get Request, using Axios, to fetch the data.

- json

API endpoint

- http://jsonplaceholder.typicode.com/
- Will get array to display in the UI
  - Routes > GET > /posts

### Component > PostLists.js

To create new component using snippent:

- rce + enter

### Constructor

To create new constructor using snippet:

- rconst + enter

### place get request code inside componentDidMount():

- only executed once in lifetime
- componentDidMount() {
  axios.get('http://jsonplaceholder.typicode.com/posts')
  }
- assign returned data array to the state property, then render to UI

```js
  .then(response => {
                this.setState({posts: response.data})
            })
```

Now we can render to UI, using the map method:

```js
// if atleast one post, then use map method to display EACH title, render nothing
posts.length
  ? posts.map((post) => <div key={post.id}>{post.title}</div>)
  : null;

// only when the state is set, that it renders to the Browser
```

### Post Request onClick

- PostForm.js

```js
// To Render, desctructure the state, then assign to the value element
render() {
    const { userId, title, body } = this.state
    value={userId}
}
```

```js
// add onChange handler to track input value to keep them synced with the state object.
changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

e.target.name]: // key
e.target.value // value
// name attribute allows us to use one handler, this is the key
name="userId"
name="title"
name="body"
```
```js
submitHandler = (e) => {
    e.preventDefault() // to avoid page refresh
    console.log(this.state)

    // the second argument (state object) is the data being sent back.
    axios.post('http://jsonplaceholder.typecode.com/posts', this.state)
    // once the request is complete, we either get a response or an error.
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
```

### Posting Data using involves Form Validation
- Formic library helps with forms in React

### If your using Redux, maybe consider Redux Axios Middleware
