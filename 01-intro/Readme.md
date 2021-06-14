# 01 - Intro

## Elméleti alapok

### Kis történelem

Java - 1995 - Beta, 1996 - 1.0  
JavaScript - 1996 -> 1997 ECMAScript  
TypeScript - 2012 - Microsoft  
jQuery - 2006  
React - 2013 - Facebook  
Angular - 2016

### EcmaScript

[ES6](./00-ES6-TypeScript/ES6.md)  
ES6 újdonságok

- classok, inheritance
- spread operator
- destructuring

### Typescript

[TypeScript](./00-ES6-TypeScript/TypeScript.md)  
A Typescrip a JavaScript super-set-je, ez röviden annyit jelent hogy a JS-t bővíti ki extra funkcionalitással,
kiegészítésekkel. Talán a legnagyobb haszna és előnye, hogy bevezeti a JS-be a statikus típusosságot. Fontos tudni, hogy
ezt a nyelvet már a böngészők nem tudják kezelni, ezért ez le lesz fordítva JS-re.

### Mi is a React?

- A React.js egy, a Facebook által fejlesztett Javascript könyvtár/library. Jelenleg a 17-es a legújabb verziója.
    - A library elsősorban olyan problémák megoldására született, mint a DOM dinamikus frissítése, módosítása, aszinkron
      frissítése.
- SPA
    - SPA, azaz single-page-application librarynek is nevezik.
    - [Wiki](https://en.wikipedia.org/wiki/Single-page_application)
- https://reactjs.org/
    - Érdemes átfutni a hivatalos dokumentációt, tutorialokat
    - Elérhető magyar nyelven is, de sok benne a félrefordítás

## Hands-on:

### Library használata

- .js szkriptek behúzása
- A React.createElement() metódus és a JSX
- Rendering, JSX alapok: attributes, style, statements

A **01-intro/01/** mappában található *.html* fájlokon keresztül nézzük át, hogy is működik a React, és hogy tudunk
egyre jobban el absztraktálni logikákat.

## Gyakorló feladat:

Oldd meg a **01-intro/01/05-exercise-welcome-page**-ben található feladatokat Oldd meg a **
01-intro/01/05-exercise-stopwatch**-ben található feladatokat

### Node/NPM intro

- Alapok
    - Mi ez? Miért kell nekünk?
    - node hello-world.js

### React project létrehozása: a create-react-app parancs használata

#### Create-React-App

- https://reactjs.org/docs/create-a-new-react-app.html

`npx`

```shell
  npx create-react-app hello-react
```

-vagy-

`npm`

```shell
  npm init react-app hello-react
```

- `package.json`
- `package-lock.json`

- Mi mást csinál ez meg nekünk a háttérben?
- Build folyamat
    - Mi történik a kódunkkal egy build folyamán?
        - obfuszkáció, minify-olás
    - [Webpack](https://webpack.js.org/)
        - Bundler eszköz
    - [Babel](https://babeljs.io/)
        - JS Compiler
        - Compiler működése: https://github.com/jamiebuilds/the-super-tiny-compiler/blob/master/the-su
- [Create-React-App Scripts explained](https://www.freecodecamp.org/news/create-react-app-npm-scripts-explained/)
- [Should I eject my CRA?](https://sebhastian.com/create-react-app-eject/)

#### [Hivatalos CRA oldal](https://create-react-app.dev/)

- Ennek szintén érdemes nagyvonalakban átfutni a dokumentációját.
- CRA Templating:
    - Használhatunk különböző sablonokat a projektünk inicializálásakor pl. TypeScript mint default nyelv
      ```
      npx create-react-app hello-react --template typescript
      -vagy-
      npx create-react-app hello-react --template cra-template-typescript
      ```
    - https://www.npmjs.com/search?q=cra-template-*&ranking=popularity

- React projektstruktúra, alkalmazás elindítása, és leállítása
  ```
  npm start
  ```
