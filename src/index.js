// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix && matrix.length !== 0) {
        matrix.forEach((i, ind) => {
            if (ind % 2 === 0) {
                arr = [...arr, ...i]
            } else {
                let i_revers = i.reverse();
                arr = [...arr, ...i_revers]
            }

        });
    } else {
        return []
    }
    return arr;
};
