module.exports = function reverse (n) {
  let result = '';
  let nString = n.toString()
    if (nString.startsWith('-')) {
        nString = nString.slice(1)
    }
    for (let i = 0; i < nString.length; i++) {
        result = nString[i] + result
    }
return Number(result);
}
