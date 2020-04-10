var isHappy = function (n) {
    while (n <= n) {
        let str = n.toString().split("").reduce((acc, ele) => acc += Math.pow(ele, 2), 0);

        if (str === 1) {
            return true;
        }
        else return str;
    }
};