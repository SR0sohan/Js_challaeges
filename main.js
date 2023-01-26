// Todo: 1: find the longest word.
let setnc = "i woke up eareeeely in the night ?"
function longestWord(str) {
    let words = str.split(' ')
    let longWord = ""
    for (const word of words) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord
}
console.log(longestWord(setnc));
// ! note: parameters are differnet they are not actually the main let or const . they represent the let or const. the let and const are declared with function .and parameters execute them.

// Todo : 2: find the math sequences(Arithmatic, Geomatric or No pattern)[no negetive numbers oro values]

function mathSequences(params) {
    let arithmatic = new Set();
    let geomatric = new Set();

    for (let i = 1; i < params.length; i++) {
        let number1 = params[i] - params[i - 1];
        arithmatic.add(number1)
        let number2 = params[i] / params[i - 1];
        geomatric.add(number2);
    }
    if (arithmatic.size === 1) {
        return "Arithmatic"
    }
    if (geomatric.size === 1) {
        return "Geomatric"
    }
    return -1;

}
console.log(mathSequences([10, 20, 30, 40]));
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([12, 2, 70, 40]));

// Todo: 3: find the longest words(this one is different)

function longest_word(stringy) {
    let cut_word = stringy.split(' ')
    let sizex = 0;
    let max_size = [''];
    for (let i = 0; i < cut_word.length; i++) {
        if (cut_word[i].length >= sizex) {
            sizex = cut_word[i].length;
            if (max_size[max_size.length - 1].length < cut_word[i].length) {
                max_size = []
                max_size.push(cut_word[i])
            }
            else {
                max_size = [...max_size, cut_word[i]]
            }
        }

    }

    return [...max_size]
}

console.log(longest_word("This is the most beautiful hardwork of our life nineworld"));
// * This function contains the count of longest word. if there are multiple word with same longest length, then this will return all all of them.

// Todo: 4: capitalize the first letter.

function capitalizeTheFisrtLetter(strings) {
    let formates = strings.split(" ").map(formates => {
        // let first_letter = formates.slice(0,1);
        // let rest = formates.slice(1);
        // first_letter = first_letter.toUpperCase();
        // return `${first_letter}${rest}`
        return formates.charAt(0).toUpperCase() + formates.slice(1)
    });
    return formates.join(" ");
};
// ! the string passed from the first funtion .
console.log(capitalizeTheFisrtLetter(setnc));

// Todo: 5: find the unique values of an string.


function uniqueStirngs(unique_strings) {
    for (let i = 0; i < unique_strings.length; i++) {
        if (unique_strings.lastIndexOf(unique_strings[i]) !== i) {
            return false;
        }

    }
    return true;


    // ! as an object
    // let values_put ={};
    // for (const letters of unique_strings) {
    //     if(values_put[letters]){
    //         return false;
    //     }
    //     values_put[letters] ="exists"
    // }
    // return true;
    // ! as an array
    // let values_put = [];
    // for(let letters of unique_strings){

    //     if(values_put.indexOf(letters)!== -1){
    //         return false;
    //     }
    //     values_put.push(letters)
    // }
    // return true;
}
console.log(uniqueStirngs("abcde"));
console.log(uniqueStirngs("abcdefb"));

// Todo:6: sum of an array
let num_arr = [4, 6, 2, 12]
let num_arr2 = [1, 4, 6, 2, 12, 39]

function arraySum(N_array) {
    let temarray = N_array.sort((a, b) => {
        return a - b
    });
    let largest_num = temarray.pop();
    let num = 0;
    temarray.forEach(item => (num += item));
    return largest_num === num;
};
console.log(arraySum(num_arr));
console.log(arraySum(num_arr2));

// Todo: 7: find the unique values using set() data structure

function uniquevalues(stri) {
    return new Set(stri).size === stri.length;
    // let non_permanent = new Set();
    // for (const letter of stri) {
    //     if(non_permanent.has(letter)){
    //         return false;
    //     }
    //     non_permanent.add(letter)
    // }
    // return true;
}
console.log(uniquevalues("abcd"));
console.log(uniquevalues("abcdade"));

// Todo: 8: find unique object property values
let product = [
    {
        title: "Iphone 8",
        company: "apple"
    },
    {
        title: "Galaxy",
        company: "samsung"
    },
    {
        title: "Spark",
        company: "tecno"
    },
    {
        title: "Iphone xs",
        company: "apple"
    },
    {
        title: "Iphone 11",
        company: "apple"
    },
    {
        title: "I quoo",
        company: "vivo"
    }
];

function getUnique(arrrays) {
    // ! map() method
    // let temparr = arrrays.map(item => item.company);
    // return[...new Set(temparr)];
    // ! reduce() method
    return [
        ...arrrays.reduce((accumulator, current) => {
            accumulator.add(current.company)
            return accumulator;
        }, new Set())
    ];
};
console.log(getUnique(product));

// Todo: 9:  counting letters with javascript(return first word with greatest number of repeated letters.)

let temp_sentense = "This sooooooooong brings me good vibes in the morning when I drink a coffe I always listen to this song and wait for the sun to come up";

function countLetters(temp_str) {
    let temp_place = temp_str.split(" ");
    temp_place = temp_place.map(item => {
        let tempitem = item.toLowerCase().split("");
        return tempitem.reduce((acc, cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
            if (acc[cur] > acc.max) {
                acc.max = acc[cur]
            }
            return acc
        }, { max: 1, word: item })
    });
    let amount = 1;
    let word = "";
    for (let element of temp_place) {
        if (element.max > amount) {
            amount = element.max;
            word = element.word;
        }
        if (amount > 1) {
            return word;
        }
    }
    return -1;
}
console.log(countLetters(temp_sentense));

// Todo: 10: find the second value

function secondvalue(arri) {
    let vals = [...new Set(arri)].sort((a, b) => a - b);
    if (vals.length < 2) {
        return `${vals[0]}`
    } else if (vals.length == 2) {
        return `${vals[0]} ${vals[1]}`
    } else {
        return `${vals[1]} ${vals[vals.length - 2]}`
    }
}

console.log(secondvalue([1]));
// 1
console.log(secondvalue([4, 2]));
// 2 4
console.log(secondvalue([11, 44, 22]));
// 11 22 44 == 22
console.log(secondvalue([3, 2, 88, 3, -11, 67, 7]));
//  -11 2 3 7 67 88 == 2 67


// Todo: 11: find the repeated numbers/ return number  with most repeats/if two numbers the repeated the same return the first /if none return -1

function testRepeat(arrs) {

    let maxima = 1;
    let position = 0;
    let vlauess = -1;
    let temNums = arrs.reduce((accu, curr, index) => {
        accu[curr] = accu[curr] ? { ...accu[curr], amount: accu[curr]["amount"] + 1 } : { amount: 1, index }

        let amount = accu[curr].amount;
        let place = accu[curr].index;
        if (amount > maxima || (amount === maxima && place <= position && amount > 1)) {
            maxima = amount;
            vlauess = curr;
            position = place;
        }
        return accu;
    }, {})

    return vlauess;
}

console.log(testRepeat([5, 2, 2, 1, 5]));
// return 5
console.log(testRepeat([6, 5, 5, 10, 10, 10]));
// return 10
console.log(testRepeat([3, 4, 1, 6, 10]));
// return -1

// Todo: 12: prime number
// ! prime number = can only be divide evenly by itself or one.\Prime Numbers Facts: The only even prime number is 2 and the remaining even numbers can be divided by 2

function isPrime(numbs) {
    if (numbs < 2) {
        return false
    }
    let root = Math.ceil(Math.sqrt(numbs));
    //* % modules operator
    for (let i = 2; i <=root; i++) {
        if (numbs % i === 0) {
            return false;
        }     
    }
    return true;
}
console.log(isPrime(8));
// false
console.log(isPrime(11));
// true
console.log(isPrime(121));
// false
console.log(isPrime(127));
// true

// Todo: 13: count repeating letters
// ! string will not contain numbers or symbols only letters 

function couningtLetters(strngs) {
    let khali_arr = strngs.split('');
    let okkhor = [];
    let gonona = 1;

    for (let i = 0; i < khali_arr.length; i++) {
        if(khali_arr[i] === khali_arr[i+1]){
            gonona++;
        }else{
            let valu =`${gonona}${khali_arr[i]}`
            okkhor = [...okkhor, valu]
            gonona =1;
        }
        
    }

    return okkhor.join('');
}
console.log(couningtLetters('ffffffffeeeeeuuuuuaaaaooohhh'));

// Todo:14: check palindrom / regex palindrom
function checkPalindrom(pars) {
    let first = pars.match(/[a-z0-9]+/ig).join('').toLowerCase();
    let sec = first.split('').reverse().join('');

    // !logic messed up!
    // pars = pars.toLowerCase();
    // let first = pars.split(" ").join('')
    // let sec = first.split('').reverse().join('');
    // console.log(first);
    // console.log(sec);
    return first === sec;
}
console.log(checkPalindrom("was it a car or a cat I saw"));
console.log(checkPalindrom("Red - rum,sir, --is -murder"));