//sumZero
const addtoZero = arr => {
    if (arr.length < 2){
        return false;
    } else {
        for(let i =0; i < arr.length; i++){
            for(let j=1; j<arr.length; j++){
                if(arr[i] + arr[j] ===0){
                    return false;
                }
            }
        }
        return true;
    }
}
//time: O(n^2)
//space: O(n^2)

//2 unique characters
const hasUniqueChars = str => {
    const strSet = new Set(str)
    return( strSet === str ? true : false)
}
//time:O(logn)
//space: O(n)
//3 Pangram Sentence

const isPangram = str => {
    let panRes = true
    let nArr = str.split('')
    let abcArr= [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    abcArr.forEach(letter => {
      if(!nArr.includes(letter)){
        panRes =false;
      }
    })
    return panRes;
  }
//time O(n^2)
//spaceO(n^2)
//4 longest word
const findLongestWord = arr => {
    let longestWord =''
    arr.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord;
}
//time O(n)
//spaceO(n)

