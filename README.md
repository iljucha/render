# render
It's not even a render engine?! This thing uses *{{ x }}*-placeholder.

## Usage
```javascript
var Render = require("./render")

var text = Render(`
    Hello, my name is {{ name }}.
    My favourite programming language is {{ favLang }},
    but everyone tells me to learn a real language. {{ nope }}
`, {
    name: "Iljucha",
    favLang: "JavaScript"
}, {
    removeUnused: false
})
```

### Output
Guess what?
```
    Hello, my name is Iljucha.
    My favourite programming language is JavaScript,
    but everyone tells me to learn a real language. {{ nope }}
````
