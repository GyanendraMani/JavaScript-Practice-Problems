function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str === '') { return '' }
    else {
        console.log("printing substring", reverse(str.substr(1)) + str.charAt(0))

        return reverse(str.substr(1)) + str.charAt(0);
    }
}

const get = reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log("printing get ", get);