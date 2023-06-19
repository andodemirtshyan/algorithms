const arr = [1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 16, 20, 25, 26, 30];
//////////// 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12, 13, 14, 15

LinearSearch: {
  const solution = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }

    return -1;
  };

  console.log("Linear Search:", solution(arr, 20));
}

SentinelSearch: {
  const solution = (arr, item) => {
    const lastItem = arr[arr.length - 1];

    arr[arr.length - 1] = item;

    let i = 0;
    while (arr[i] !== item) {
      i++;
    }

    arr[arr.length - 1] = lastItem;

    if (i < arr.length - 1 || arr[arr.length - 1] === item) {
      return i;
    }

    return -1;
  };

  console.log("Sentinel Search:", solution(arr, 20));
}

BinarySearch: {
  Iterative: {
    const solution = (arr, item) => {
      let middle;

      let start = 0;
      let end = arr.length - 1;

      while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
          return middle;
        }

        if (item > arr[middle]) {
          start = middle + 1;
        } else {
          end = middle - 1;
        }
      }

      return -1;
    };

    console.log("Iterative Binary Search:", solution(arr, 20));
  }

  Recursive: {
    const solution = (arr, start, end, item) => {
      if (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
          return middle;
        }

        if (item > arr[middle]) {
          return solution(arr, middle + 1, end, item);
        }

        return solution(arr, start, middle - 1, item);
      }

      return -1;
    };

    console.log("Recursive Binary Search:", solution(arr, 0, arr.length - 1, 20));
  }
}
