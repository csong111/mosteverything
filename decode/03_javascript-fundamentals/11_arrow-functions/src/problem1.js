// fix all the errors.
function c(g, h) {
    var x = g(6);
    var y = h(8, 10);
    return [x, y];
}

function t() {
    return c( y => x + 2, (x,y) => x + y);
}

module.exports = t


