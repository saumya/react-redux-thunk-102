React-Redux-Thunk-102
===================

An [introduction][16] is here.

## What for what ?

 - [React][15] - View of the application
 - [Redux][14] - Data / Model / State of the application
 - [Thunk][3] - Communicating with the server
 - [Router][10] - Navigating into different parts of the application

Done in this project
 - round trip from UI-server-UI.
 - navigate to another route after getting some values from server

[Followed this][13] for routing.

### initial setup
Started from [this project][8] and added
 - [react-router][10]
 - [redux-router][9] ( New API )
 - [react-router-redux][11] ( Official API )

We will be using the official one [react-router-redux][11] here. Refering to [react-router-redux-example][12]

[REST calls / API calls][2] in study using [Thunk middleware][3] for React

### References
1. Start using React Redux [without ES6 or Webpack.][5]
2. Official [Example codes][4]
3. Example of [An app to enjoy a music channel with your favorite videos][6]
4. [React Rocks][7] examples
5. [Programatic Routing][13] example

Setup
```
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react
npm install --save-dev css-loader
npm install --save-dev style-loader
npm install --save-dev webpack

npm install --save react
npm install --save react-dom
npm install --save redux

npm install --save react-redux
npm install --save redux-thunk

npm install --save react-router
npm install --save react-router-redux
```

Then run
```
npm run 2js
npm run pack
```

### How it works ?
This seems a surprise but `react-router` and `react-router-redux` once configured, just works as if there is no `redux`. Its simply just works.


[1]: http://redux.js.org/docs/basics/ExampleTodoList.html
[2]: http://redux.js.org/docs/advanced/AsyncActions.html
[3]: https://github.com/gaearon/redux-thunk
[4]: github.com/reactjs/redux/blob/master/examples
[5]: https://medium.com/@firasd/quick-start-tutorial-using-redux-in-react-apps-89b142d6c5c1
[6]: https://github.com/fusenlabs/20v
[7]: https://react.rocks
[8]: https://github.com/saumya/react-redux-thunk-101
[9]: https://github.com/acdlite/redux-router#differences-with-react-router-redux
[10]: https://www.npmjs.com/package/react-router
[11]: https://github.com/reactjs/react-router-redux
[12]: https://github.com/StevenIseki/react-router-redux-example
[13]: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating#navigating-programatically
[14]: https://github.com/reactjs/redux
[15]: https://github.com/facebook/react
[16]: http://saumya.github.io/ray/articles/66/


