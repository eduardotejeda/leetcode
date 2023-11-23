/* 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {

    console.log(strs)
    if(!strs.length) {
        return ""
    } // Si el array esta vacio devuelve "" como respuesta, finalizando al ejecucion del codigo.

    let palabraMasPequenaDelArray = Math.min(...strs.map((str) => str.length )) //Buscamos la palabra mas pequena del array y la convertimos a un numero. Para poder limitar la busqueda del prefijo.

    console.log(palabraMasPequenaDelArray)

    let prefijo = "" //Aqui almacenaremos la respuesta
//     for(let i = 0; i < palabraMasPequenaDelArray; i++) {

// console.log(i)

// if(strs[0][i] === strs[0][i]) {
// console.log(strs[0][i])
// }


//     }

return strs.reduce((prev, next) => {
    console.log(prev, next)
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        console.log(`prev: ${prev[i]}`, `next: ${next[i]}`)
        console.log(prev.slice(0, 1))
        return prev.slice(0, i);
    });
    

    // console.log(palabraMasPequenaDelArray)
    
};

console.log(longestCommonPrefix(strs))