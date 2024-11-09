function thirdLargestInArray(array) {
    // Array Size
    let arraySize = array.length;

    // Input Validation
    if (arraySize < 3) {
        console.log("Array must have at least 3 integers!");
        return;
    }

     // Initializing first, second, and third largest integer to -Infinity
     let first = -Infinity, second = -Infinity, third = -Infinity;

     for (let i = 0; i < arraySize; i++) {
         if (array[i] > first) {
             third = second;
             second = first;
             first = array[i];
         } else if (array[i] > second && array[i] < first) {
             third = second;
             second = array[i];
         } else if (array[i] > third && array[i] < second) {
             third = array[i];
         }
     }

    console.log("The third largest integer in", array, "is", third);
}

let array = [1, 2, 3, 4, 5];
thirdLargestInArray(array);