const hasDuplicate = arr => {

    // here the set will remove any duplicate values
    let arrSet = new Set(arr)

    // if the array has duplicates the set size will be reduced
    if (arrSet.size !== arr.length) {
        return true;
    }
    return false;
}

console.log(hasDuplicate([1, 2, 3, -1, 1])); // true
