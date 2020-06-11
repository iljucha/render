/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 */
export default function Render(temp, obj) {
    if (typeof temp !== "string") {
        return ""
    }
    let key
    for (key in obj) {
        temp = temp.replace(new RegExp(`{{ ?${key} ?}}`, "gm"), obj[key])
    }
    return temp
}

/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 * @param {Function} callback - callback(error, data)
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
