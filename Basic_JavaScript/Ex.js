function rangeOfNumbers(startNum, endNum) {

    console.log((startNum <= endNum) ? [startNum] : [...rangeOfNumbers(startNum, endNu - 1), endNum]);
}
rangeOfNumbers(1, 5)