<h1>CodeLeap Network</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/LucasRuy/rollup-boilerplate/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

A very simple application like a feed of posts using React and Redux.

## Getting started

To get the frontend running locally:

- Clone this repo
- `yarn install` to install all req'd dependencies
- `yarn start` to start the local server (this project uses webpack-dev-server)

The local web server will use port `9999` instead of the standard port 3000 to avoid conflicts with some back ends like Node or Rails if any are needed. You can configure port in `devServer` section of `webpack.config.js`.

## Functionality overview

This app is a post feed (like Medium.com, but a little bit simpler). It uses an API to make requests for its functionality.

**General functionality:**

- Authenticate users (login pages)
- CRUD Articles
- GET and display paginated lists of articles

## Accessing the application

To gain access to the main page with all posts, you need to use the following user:

- User: `Victor`

## Author

**Lucas Ruy &lt;lukas.r@hotmail.com.br&gt;**

- Github: [@lucasruy](https://github.com/lucasruy)
