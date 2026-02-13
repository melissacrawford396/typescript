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

#### Node interface
Allow HTMLElements to utilize a subset of standard methods. (Generics) Then you can pass all sorts of types to appendChild as long as it chains up to Node.
- The document.getElementById function returns HTMLElement
- HTMLElement interface extends the Element interface
- Element interface extend the Node interface

```ts
appendChild<T extends Node>(node: T): T;
```

#### Difference between children and childNodes
- `children`:
- `childNodes`: Can contain additional HTML nodes that children cannot
```
<div>
  <p>Hello, World</p>
  <p>TypeScript!</p>
</div>;

const div = document.getElementsByTagName("div")[0];
div.children;
// HTMLCollection(2) [p, p]
div.childNodes;
// NodeList(2) [p, p]
```

So if you remove the <p></p> from around TypeScript! It'll change the representation. 
- B/c children can't be Node, text is literal Node containing the text TypeScript!. not in childNodes b/c this is considered an HTMLElement
- But childNodes keeps both, one is just now a text instead of having 2 p's.
```
<div>
  <p>Hello, World</p>
  TypeScript!
</div>;
const div = document.getElementsByTagName("div")[0];
div.children;
// HTMLCollection(1) [p]
div.childNodes;
// NodeList(2) [p, text]
```


#### Other good ones
querySelector and querySelectorAll
- Good methods to get lists of dom elements that have more stringent requirements
- lib.dom.d.ts (defines them)

querySelectorAll:
- New return type: NodeListOf
- Implements following properties and methods
  - length
  - item[index]
  - forEach((value, key, parent) => void)
  - and numeric indexing
- returns lis of elements, not nodes (which is what NodeList was returning from the .childNodes)
- Elements extends from Node

```
<ul>
  <li>First :)</li>
  <li>Second!</li>
  <li>Third times a charm.</li>
</ul>;
const first = document.querySelector("li"); // returns the first li element
const all = document.querySelectorAll("li"); // returns the list of all li elements
```


## Securing my Compute Engine
https://www.youtube.com/watch?v=g1_3XqJwLiQ&t=732s
- No ssh keys
- Use service accounts
- Should be using a load balancer and not an external IP (dur) 
- 
