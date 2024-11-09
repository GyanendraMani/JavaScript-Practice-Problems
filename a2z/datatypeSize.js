class Solution {
    // Function to find the size of different data types.
    dataTypeSize(dataType) {
        switch (dataType) {
            case 'character':
                return 2;
            case 'integer':
                return 4;
            case 'long':       
                return 8;
            case 'float':     
                return 4;
            case 'double':
                return 8;
            default:
                return -1;
        }
    }
}

console.log(new Solution().dataTypeSize("character"))