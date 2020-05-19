/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 */
export default function Render(temp, obj) {
    if (typeof temp !== "string") return ""
    let key
    for (key in obj) {
        if (typeof obj[key] === "string") {
            temp = temp.replace(
                new RegExp(`{{ ?${key} ?}}`, "gm"),
                obj[key].toString()
            )
        }
    }
    return temp
}