function largest () {
    return Math.max.apply(null, arguments);
}
function smallest () {
    return Math.min.apply(null, arguments);
}

module.exports = largest;