function Render(temp, obj) {
    let key
    for (key in obj) {
        if (typeof obj[key] === "string") {
            temp = temp.replace(
                new RegExp(`{{ ${key} }}`, "gm"),
                obj[key].toString()
            )
        }
    }
    temp = temp.replace(/\{\{\ ?\w+\ ?\}\}/gmi, "")
    return temp
}

module.exports = Render
