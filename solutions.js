function problem1 (e) {
	var sum = 0;
	for (var i = 0; i < e; ++i) {
		if ((i % 3) === 0 || (i % 5) === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log("Problem 1: " + problem1(1000));

function problem2 (e) {
	var fib1 = 1;
	var fib2 = 2;
	var tempFib = fib1 + fib2;
	var sum = 2;
	while (tempFib < e) {
		tempFib = fib1 + fib2;
		fib1 = fib2;
		fib2 = tempFib;
		if (tempFib % 2 === 0) {
			sum += tempFib;
		}
	}
	return sum;
}

console.log("Problem 2: " + problem2(4000000));

function isPrime (p) {
	if (p < 2) {
		return false;
	}
	if (p === 2 || p === 3) {
		return true;
	}
	if (p % 2 === 0 || p % 3 === 0) {
		return false;
	}
	var max_divisor = Math.sqrt(p);
	var divisor = 5;
	while (divisor <= max_divisor) {
		if (p % divisor === 0 || p % (divisor + 2) === 0) {
			return false;
		}
		divisor += 6;
	}
	return true;
}

function problem3 (e) {
	var largest = 1;
	for (var i = 0; i < Math.sqrt(e); ++i) {
		if ((e % i) === 0 && isPrime(i) && i > largest) {
			largest = i;
		}
	}
	return largest;
}

console.log("Problem 3: " + problem3(600851475143));

function isPalindrome (p) {
	var str = String(p);
	if (str === str.split("").reverse().join("")) {
		return true;
	}
	return false;
}

// var digits = Math.floor(Math.log(e)) + 1;
function problem4 () {
	var res = 100 * 100;
	for (var i = 0; i < 1000; ++i) {
		for (var j = 0; j < 1000; ++j) {
			var guess = i * j;
			if (isPalindrome(guess) && guess > res) {
				res = guess;
			}
		}
	}
	return res;
}

console.log("Problem 4: " + problem4());

// What is the smallest positive number
// that is evenly divisible by all of the numbers from 1 to 20?
function problem5 () {
	var res = 40;
	while (1) {
		var passed = 0;
		for (var i = 1; i < 21; ++i) {
			if ((res % i) === 0) {
				passed++;
			}
		}
		if (passed === 20) {
			return res;
		}
		res += 20;
	}
}

console.log("Problem 5: " + problem5());

// Find the difference between the sum of the squares of the 
// first one hundred natural numbers and the square of the sum.
function problem6 (e) {
	var sumSquare = 0;
	for (var i = 1; i <= e; ++i) {
		sumSquare += i * i;
	}
	var squareSum = 0;
	for (var i = 1; i <= e; ++i) {
		squareSum += i;
	}
	squareSum *= squareSum;
	return squareSum - sumSquare;
}

console.log("Problem 6: " + problem6(100));

// What is the 10001st prime number?
function problem7 (e) {
	var count = 0;
	var prime = 2;
	while (1) {
		if (isPrime(prime)) {
			count++;
		}
		if (count === e) {
			return prime
		}
		prime++;
	}
}

console.log("Problem 7: " + problem7(10001));

// Greatest product of 5 consecutive digits
// function problem8 (e) {
// 	var greatest = 0, potential_greatest = undefined;
// 	for (var i = 0; i < (e.length - 5); ++i) {
// 		for (var j = 0; j < 5; ++j) {
// 			if (potential_greatest === undefined) {
// 				potential_greatest = Number(e.charAt(i));
// 			}
// 			else {
// 				potential_greatest *= Number(e.charAt(i + j));
// 			}
// 		}
// 		if (potential_greatest > greatest) {
// 			greatest = potential_greatest;
// 		}
// 		potential_greatest = undefined;
// 	}
// 	return greatest;
// }

// console.log("Problem 8: " + problem8("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"));

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
function isTriple (t) {
	if ((t[0] * t[0] + t[1] * t[1]) === t[2] * t[2]) {
		return true;
	}
	return false;
}

function problem9 () {
	for (var c = 2; c < 1000; ++c) {
		for (var b = 1; b < c && (b + c) < 1001; ++b) {
			for (var a = 0; a < b && (a + b + c) < 1001; ++a) {
				if (isTriple([a, b, c]) && a + b + c === 1000) {
					return a * b * c;
				}
			}
		}
	}
}

console.log("problem 9: " + problem9());

// Find the sum of all the primes below two million.
function problem10 (e) {
	var sum = 0;
	for (var i = 0; i < e; ++i) {
		if (isPrime(i)) {
			sum += i;
		}	
	}
	return sum;
}

console.log("problem10: " + problem10(2000000));


// What is the greatest product of four adjacent numbers in the same direction 
// (up, down, left, right, or diagonally) in the 20×20 grid?
function problem11 (e) {
	for (var i = 0; i < e.length; ++i) {
		for (var j = 0; j < e[i].length; ++j) {
			if (i > 3) {
				
			}
		}
	}
}

console.log("Problem 11: " + problem11([
[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
[52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
[24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
[67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
[24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
[21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
[16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
[86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
[19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
[04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
[88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
[04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
[20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
[01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]]);