function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (!str) return;
    console.log("printing string", str.length)

    let modifiedStr = "";

    for (let i = str.length -1; i >= 0; i--) {
        console.log("printing data inside for ", modifiedStr, str[i]);
        modifiedStr = modifiedStr.concat(str[i]);

    }

    return modifiedStr;

}

const get = reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log("printing get ", get);