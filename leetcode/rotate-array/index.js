const reverseSegment = function (array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
};

const rotateArray = (array, k) => {
  const n = array.length;
  k = k % n;

  // Step 1: Reverse the entire array
  array.reverse();

  // Step 2: Reverse the first k elements
  reverseSegment(array, 0, k - 1);

  // Step 3: Reverse the remaining elements
  reverseSegment(array, k, n - 1);

  return array;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));