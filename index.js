function identity(arg) {
    return arg
};

function identityF(arg) {
   function returnFunction() {
    return identityF(arg);
   }
    return returnFunction;
}

module.exports = { identity, identityF };