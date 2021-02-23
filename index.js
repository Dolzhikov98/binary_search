// const array = [4, 65, 76, 89, 3, 45, 64, 23, 34, 52, 12]

//упорядоение массива
const binarySearch = (arr, value) => {
    arr.sort((a, b) => {
        return a - b
    })
    console.log(arr)
    let firstElem = 0;
    let lastElem = arr.length - 1
    let flag = true;
    let foundValue;
    let middle;
    while (flag === true && firstElem <= lastElem) {
        // console.log(arr)
        middle = Math.floor((firstElem + lastElem) / 2)
        console.log(middle);
        if (value < arr[middle]) {
            lastElem = middle - 1;
        } else if (value > arr[middle]) {
            firstElem = middle + 1;
        } else if (value === arr[middle]) {
            foundValue = middle;
            flag = false;
            console.log(`искомое значение ${value} в массиве под индексом ${foundValue}`);
        } else {
            flag = false;
            console.log('Искомого значения в массиве нет!');
        }
    }
}

binarySearch([4, 65, 76, 89, 3, 45, 64, 23, 34, 52, 12], 76)