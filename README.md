# render
It's not even a render engine?!
This thing uses *{{ x }}*-placeholder. If a placeholder stays empty, it will be removed from the result.

## Usage
```javascript
var Render = require("./render")

var text = Render(`
    Hello, my name is {{ name }}.
    My favourite programming language is {{ favLang }},
    but everyone tells me to learn a real language.
`, {
    name: "Iljucha",
    favLang: "JavaScript"
})
```

### Output
Guess what?
```
    Hello, my name is Iljucha.
    My favourite programming language is JavaScript,
    but everyone tells me to learn a real language.
````
