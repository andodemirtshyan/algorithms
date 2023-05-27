const arr = [9, 5, 4, 6, 3, 11, 50, 25, 30, 1];
// const arr 0, 1, 2, 3, 4, 5,  6,  7,  8,  9

Merge: {
	const solution = (arr) => {
		if (arr.length < 2) {
			return arr;
		}

		const middle = Math.floor(arr.length / 2);
		const left = arr.slice(0, middle);
		const right = arr.slice(middle);

		return merge(solution(left), solution(right));
	}

	const merge = (left, right) => {
		const result = [];

		while (left.length && right.length) {
			if (left[0] < right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}

		return result.concat(left, right);
	}

	console.log('Merge Sort:', solution(arr).toString());
}

Quick: {
	const solution = (arr) => {
		if (arr.length < 2) {
			return arr;
		}

		const pivot = arr[0];
		const left = [];
		const right = [];

		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return solution(left).concat(pivot, solution(right));
	}

	console.log('Quick Sort:', solution(arr).toString());
}

Bubble: {
	const solution = (arr) => {
		let swap = false;

		for (let i = arr.length - 1; i >= 0; i--) {
			for (let j = arr.length - 1; j > i; j--) {
				if (arr[j] < arr[j - 1]) {
					let tmp = arr[j];

					arr[j] = arr[j - 1];
					arr[j - 1] = tmp;

					swap = true;
				}
			}

			if (!swap) {
				break;
			}
		}

		return arr;
	}

	console.log('Bubble Sort:', solution(arr).toString());
}

Insertion: {
	const solution = (arr) => {
		for (let i = 1; i < arr.length; i++) {
			let j = i;

			while (j >= 0 && arr[j] < arr[j - 1]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

				j--;
			}
		}

		return arr;
	}

	console.log('Insertion Sort1:', solution(arr).toString());
}

Selection: {
	const solution = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;

			for (let j = i + 1; j < arr.length; j++) {
				if (arr[min] > arr[j]) {
					min = j;
				}
			}

			if (min !== i) {
				[arr[i], arr[min]] = [arr[min], arr[i]];
			}
		}

		return arr;
	}

	console.log('Selection Sort:', solution(arr).toString());
}
