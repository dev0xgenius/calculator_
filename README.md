# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://0xgenius-calculatorv2.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass

### What I learned
I didn't know i could target elements in the head tag with JS,
very simple but unexpected.
```JS
const styleSheet = document.getElementById('theme'); // Line 6, ./css/themes/theme.js
//...line 31, ./css/themes/theme.js (This is where i used it)
styleSheet.href = `./css/themes/theme-${btn.getAttribute('data-no')}.css`;
```
Learnt about CSS "prefers-color-scheme" (Did not use it).
Trying to tackle a project without planning can consume a lot of time.
Almost got me!!

### Continued development
Ahhh... Areas i look to develop on:
- Responsive Layouts with CSS
- Loops // I have a sound knowledge of it, but sometimes i find it tricky
- CSS grid
- Project Time Estimation
- Proper Project Planning and Management
**Note: I might implement the bonus feature later**

## Author
- Twitter - [@yourusername](https://www.twitter.com/dev0xgenius)