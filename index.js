/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 */
export default function Render(temp, obj) {
    if (typeof temp !== "string") {
        return ""
    }
    let key, regexp
    for (key in obj) {
        regexp = new RegExp(`{{ ?${key} ?}}`, "gm")
        if (typeof obj[key] === "string") {
            temp = temp.replace(regexp, obj[key])
        }
        else {
            temp = temp.replace(regexp, "" + obj[key].toString())
        }
    }
    return temp
}

/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 * @param {Function} callback - callback(error: Error, data: String)
 */
export function Render2(temp, obj, callback) {
    try {
        callback(null, Render(temp, obj))
    }
    catch (error) {
        callback(error, null)
    }
}

/**
 * Replaces {{ key }}s in string template
 * @param {object} obj - Key-Values
 */
String.prototype.render = function(obj) {
    return Render(this, obj)
}
