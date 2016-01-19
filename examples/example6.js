function getAddedValue(firstArgument = secondArgument, secondArgument) {
    return firstArgument + secondArgument;
}

console.log(getAddedValue(1, 1));         // 2
console.log(getAddedValue(undefined, 1)); // throws error
