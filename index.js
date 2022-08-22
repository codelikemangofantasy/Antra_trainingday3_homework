function reversedNum(num) {
    let str = String(num).split("").reverse().join("");
    return Number(str);
}

function palindrome(str) {

    let reversedStr = str.split("").reverse().join("");
    return string === reversedStr;
}

function allCombination(str) {
    let newStr = [];
    let res = [];
    for (let i = 0; i < str.length; i++) {
        newStr = [str[i]];
        let index = 0;
        while (res[index]) {
            newStr.push(" " + res[index] + str[i])
            index++;
        }
        res = res.concat(newStr);
    }
    return res.join(",");
}

function alphabetical(str) {
    let newStr = str.toLowerCase().split("");
    return newStr.sort().join("");
}

function convertToUpperCase(str) {
    let arr = str.split(" ");
    console.log(arr)
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase());
        for (let j = 1; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    return newArr.join("")
}


function longestWord(str) {
    let arr = str.split(" ");
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        num.push(arr[i].length)
    }
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == Math.max(...num)) {
            res += arr[i]
        }
    }
    return res;
}


function countVowel(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    let newArr = str.split("");
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (newArr[i] === arr[j]) {
                num++;
            }
        }
    }

    return num;
}


function primeCheck(n) {
    let divisors = [];
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
            if (i != n / i)
                divisors.push(n / i);
        }
    }
    console.log(divisors)
    if (divisors.length > 0) {
        return n + " is a prime number!";
    } else {
        return n + " is not a prime number!";
    }
}

function dataTypeCheck(argument) {
    return typeof (argument);
}

function createIdentityMatrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let subArr = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                subArr.push(1);
            } else {
                subArr.push(0);
            }
        }
        arr.push(subArr);
    }
    return arr;
}

function secondLowestAndGreatest(arr) {
    arr.sort(function (a, b) { return a - b });
    return arr[1] + "," + arr[arr.length - 2];
}

function perfectNumber(n) {
    let divisors = [];
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
            if (i != n / i)
                divisors.push(n / i);
        }
    }
    let sum = 1;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    if (sum === n) {
        return n + " is a perfect number!";
    } else {
        return n + " is not a perfect number!";
    }
}

function factors(n) {
    let arr = [];
    for (let i = 1; i <= n; i++)
        if (n % i === 0) {
            arr.push(i);
        }
    return arr;
}

function amountToCoins(n) {
    let res = [];
    let arr =[25, 10, 5, 2, 1];
    for(let i = 0; i < arr.length; i++) {
      if(n >= arr[i]){
        n -= arr[i];
        res.push(arr[i]);
        i--;
      }
    }
    return res;
  }

function calculateExponent(b, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= b;
    }
    return result;
}


function uniqueStr(str) {
    let uniqueChars = [...new Set(str)];
    return uniqueChars.join('');
}


function occurences(str) {
    let output = {};
    let temp = str
        .toLowerCase()
        .split('')
        .forEach((e, i, arr) => {
            if (!output[e]) {
                output[e] = 1;
            } else {
                output[e]++;
            }
        });
    return output;
}

function binarySearch(str) {

}

function largerThan(num, arr) {
    let result = [];
    arr.forEach((item) => {
        if (num < item) {
            result.push(item);
        }
    });
    return result;
}


function randomId(n) {
    let result = "";
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomIndex = 0;
    for (let i = 0; i < n; i++) {
        randomIndex = Math.floor(Math.random() * list.length);
        result += list[randomIndex];
    }
    return result;
}


function subSetCombination(arr, n) {  
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      var tempArr = [arr[i]];
      for (var j = 0; j < arr.length; j++) {
        if (i >= j) continue;
        tempArr.push(arr[j]);
        if (n == tempArr.length) {
          res.push(tempArr);
          tempArr = [arr[i]];
        }
      }
    }
    return res;
  }


function countLetter(str, letter) {
    let result = 0;
    let arr = str.split("");
    arr.forEach((item, index, arr) => {
        if (letter === item) {
            result++;
        }
    });

    return result;
}

function firstNotRepeatedChar(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return s[i];
        }
    }
    return null;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}


function longestCountryName(arr) {
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        num.push(arr[i].length)
    }
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == Math.max(...num)) {
            res += arr[i]
        }
    }
    return res;
}


function longestSubString(str) {
    var longest = "";
    var l = str.length;
    for (var i = 0; i < l; i++) {
        var newStr = "";
        var counter = 0;
        while (newStr.includes(str[i]) === false) {
            if (i === l) {
                break;
            }
            newStr += str[i];
            i++;
            counter++;
        }
        i -= counter
        if (newStr.length >= longest.length) {
            longest = newStr;
        }
    }
    return longest;
}

const longestPalindrome = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 2; j < str.length; j++) {
            const tempStr = str.substring(i, j);
            const revTempStr = [...tempStr].reverse().join("");

            if (tempStr === revTempStr && tempStr.length > result.length) result = tempStr;
        }
    }

    return result;
};


function addFruit(num, freshFruit) {
    freshFruit();
}
function freshFruit() {
    console.log('Hello World')
}
addFruit(2, freshFruit);



function getFunctionName() {
    var a = new Error().stack.match(/at (.*?) /);
    console.log(a[1]);
    return a[1]
}

getFunctionName();
console.log(getFunctionName());
