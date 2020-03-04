function Render(temp, obj) {
    let key
    for (key in obj) {
        if (typeof obj[key] === "string") {
            temp = temp.replace(
                new RegExp(`{{ ${key} }}`, "gim"),
                obj[key].toString()
            )
        }
    }
    temp = temp.replace(/\{\{\ ?\w+\ ?\}\}/gim, "")
    return temp
}

module.exports = Render
