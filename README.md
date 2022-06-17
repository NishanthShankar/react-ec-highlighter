React component to highlight any text in a text. Best used to highlight search results. Really Lightweight for all the devs with bundlephobia



<img src="https://i.imgur.com/z4GFtfx.png" height="260">

## Installation
```
yarn add react-ec-highlighter
```

```
npm i --save react-ec-highlighter
```

Check out a demo [here](https://nishanth-jitera.web.app).

## Usage

To use it, just provide it with a search phrase and a text.

[Try this example in Code Sandbox.](https://codesandbox.io/s/react-ec-highlighter-kgnqqe)

```jsx

import ECHighlighter from "react-ec-highlighter";
...

<ECHighlighter
  searchPhrase="is"
  text="Kurtis Weissnat"
/>

```

And the `ECHighlighter` will mark all occurrences of search phrase within the text:

<img width="168" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://i.imgur.com/efMEmmN.png">


## Props

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| searchPhrase | String | ✓ | Search phrase that has to be searched for|
| text | String | ✓ | Text to highlight matches in |
| highlightClassName | String |  | The class name to be applied to the highlighted texts |
| highlightStyle | Object |  | The inline style to be applied to the highlighted texts |
| className | String |  | CSS class name applied to the outer/wrapper `<span>` |
| normalClassName | String |  | CSS class name applied to unhighlighted text |
| normalStyle | Object |  | Inline styles applied to unhighlighted text |
| * | any | | Any other props (such as `title` or `data-*`) are applied to the outer/wrapper `<span>` |

## License
MIT License - fork, modify and use however you want.

## Credits
Shout out to [react-highlight-words](https://www.npmjs.com/package/react-highlight-words) and [react-highlighter](https://www.npmjs.com/package/react-highlighter) for inspiring me to create a simpler and a lighter version. react-highlight-words for the README and package.json. Really helped out my first react module.
