function isEven(b) {
    if (b==0) {
        return true;
    } else if (b == 1) {
        return false; 
    } else if (b < 0) {
        return isEven(-b) 
    } else {
        return isEven(b - 2);
    }
}
module.exports = isEven;