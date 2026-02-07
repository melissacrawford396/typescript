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

