/**
 * 
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} 
 * 
 */

class Solution {
    validateAnagram(str1, str2) {

        if (str1.length !== str1.length) {
            return false
        }
        let lookup = {}
        for (let val of str1) {
            const letter = val;
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        }
        console.log("printing data", lookup);
        for (let val of str2) {
            const letter = val;

            if (!lookup[letter]) {
                return false
            } else {
                lookup[letter] -= 1;
            }
            console.log("printing data", lookup);
        }

        return true
    }
}

const ins = new Solution();
const get = ins.validateAnagram('anagram', 'nagaram');
// const get = ins.validateAnagram('anagrrm', 'nagarbm');

console.log("printing get", get)