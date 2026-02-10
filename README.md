# typescript


Let's try to make a basic website 

https://medium.com/@jaeho.kim/how-to-install-typescript-and-create-a-simple-webpage-cd60371a4bb3

```
npm install -g typescript
npm init

nvm use v24.13.0

npm install typescript

npm install ts-node --save-dev

```

Lol, I had an old version node the first time. Breaking things. Start over
```
rm -rf node_modules package-lock.json

npm install

npm install typescript
npm install typescript
npm install ts-node --save-dev
npm start

```

failed let's try
```
npm rebuild
npm start

npx tsc -p tsconfig.json

```


# LOLLLLLLL
the issue was because I had accidently added a space in the name for the file tsconfig.json


Add other files
re-run npm start

then open the index.html file in the browser

AND IT WAS THERE!! woot!

-------
https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

Seems like the other article was just some of the default hello world of typescript the language.

https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
- to manipulate the DOM tomorrow!

If I want to run a script that isn't `npm run` you need to call it like: 
- `npm run startPy`

```json
"scripts": {
  "start": "tsc && http-server dist -o src/index.html",
  "start:dev": "concurrently \"tsc --watch\" \"http-server dist -o src/index.html\"",
  "watch": "tsc --watch",
  "serve": "http-server dist -o src/index.html",
  "start:all": "npm-run-all --parallel watch serve"
}
```
Install helpers 
```bash
npm install --save-dev concurrently npm-run-all http-server
```

Then you get these commands
```
npm start                # runs the default `start`
npm run start:dev        # runs the dev watcher + server
npm run serve            # run only the static server
npm run start:all        # run multiple tasks in parallel
```