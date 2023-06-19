const arr = [1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 16, 20, 25, 26, 30];

Solution1: {
  const getRanges = (arr) =>
    arr
      .reduce((acc, curr) => {
        if (acc.length) {
          const lastItem = acc[acc.length - 1];
          const lastNestedItem = lastItem[lastItem.length - 1];

          if (curr - lastNestedItem === 1) {
            acc[acc.length - 1].push(curr);
          } else {
            acc.push([curr]);
          }
        } else {
          return [[curr]];
        }

        return acc;
      }, [])
      .map((item) => {
        if (item.length > 1) {
          return `${item[0]}-${item[item.length - 1]}`;
        } else {
          return item[0];
        }
      })
      .join(",");

  console.log("Solution 1:", getRanges(arr));
}

Solution2: {
  const getRanges = (arr) =>
    arr
      .reduceRight((acc, curr) => {
        if (acc.length) {
          if (acc[0][0] === curr + 1) {
            acc[0].unshift(curr);
          } else {
            acc.unshift([curr]);
          }
        } else {
          return [[curr]];
        }

        return acc;
      }, [])
      .map((item) => {
        if (item.length > 1) {
          return `${item[0]}-${item[item.length - 1]}`;
        } else {
          return item[0];
        }
      })
      .join(",");

  console.log("Solution 2:", getRanges(arr));
}

Solution3: {
  const getRanges = (arr) => {
    let range = [];
    const ranges = [];

    arr.forEach((item, index) => {
      if (item + 1 === arr[index + 1]) {
        range.push(item);
      } else {
        range.push(item);
        ranges.push(range);
        range = [];
      }
    });

    return ranges
      .map((item) => {
        if (item.length > 1) {
          return `${item[0]}-${item[item.length - 1]}`;
        } else {
          return item[0];
        }
      })
      .join(",");
  };

  console.log("Solution 3:", getRanges(arr));
}
