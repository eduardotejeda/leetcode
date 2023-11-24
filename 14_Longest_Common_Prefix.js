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

strs = ["flower","flow","floght", "flo"]

var longestCommonPrefix = function(strs) {

    console.log(strs)
    if(!strs.length) {
        return ""
    } // Si el array esta vacio devuelve "" como respuesta, finalizando la ejecucion del codigo.


    return strs.reduce((prev, next) => {    
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    }); //El metedo reduce compara cada palabra del array. Una por una las coloca en las variables prev y next. El while es una mezcla de if con for loop que mientras la letra prev[i] y next[i] sea igualdad estricta prev[i] === next[i] sean verdaderos retorna la primera letra con el metodo slice(0,1).
    
    
};

console.log(longestCommonPrefix(strs))