import Assert from "@iljucha/assert"

/**
 * Replaces {{ key }}s in string template
 * @param {string} temp - String template
 * @param {object} obj - Key-Values
 */
export default function Render(temp, obj) {
    Assert.type(temp, "temp", "string")
    Assert.type(obj, "obj", "object")
    Assert.type(Object.values(obj), "obj values", "Array<string>")
    let key, regexp
    for (key in obj) {
        regexp = new RegExp(`{{ ?${key} ?}}`, "gm")
        temp.replace(regexp, obj[key])
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