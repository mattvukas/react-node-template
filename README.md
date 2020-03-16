# react-node-template

future url: https://reactnodetemplate.com

## Local Dev Setup

All commands run from project root:

1. `cd src/client && npm install`
2. `cd src/server && npm install`
3. `npm run dev`

Enjoy!

## my full stream of consciousness setup

1. create readme (this)
2. make src directory
3. in src dir, run `npx create-react-app client`
4. in src/client, run `npm install` & `npm start` to sanity check. `npm run build` will build prod bundle
5. in src dir, run `npx express-generator --no-view --git server`
6. in src/server, run `npm install` & `npm start` to sanity check
7. NOW install nodemon && concurrently globally
8. do `npm run dev` in root of project

## todo

- fix heroku-postbuild
- fix start
- test heroku deploy
- have express app serve static build files
- look into this https://hub.packtpub.com/github-introduces-template-repository-for-easy-boilerplate-code-management-and-distribution/
