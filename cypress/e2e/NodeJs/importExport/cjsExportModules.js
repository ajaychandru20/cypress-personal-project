
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
}



module.exports.add = add;

module.exports.subtract = subtract

exports.div = (a, b) => {
    return a / b;
}

// module.exports = {
//     add,
//     subtract
// }

// console.log(arguments) // function(export, require, module, __filename, __dirname)
