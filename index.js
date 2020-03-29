module.exports = Render

function Render(temp, obj, opt = { removeUnused: true }) {
    let key
    for (key in obj) {
        if (typeof obj[key] === "string") {
            temp = temp.replace(
                new RegExp(`{{ ${key} }}`, "gm"),
                obj[key].toString()
            )
        }
    }
    if (opt.removeUnused == true) {
        temp = temp.replace(/\{\{\ ?\w+\.?\w+\ ?\}\}/gmi, "")
    }
    return temp
}
