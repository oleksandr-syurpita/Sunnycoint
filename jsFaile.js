       
let _text = "asddasdas";
let key = "key123";

function UpperCase(letter) {
    var l = letter.charCodeAt();
    if(l > 64 && l < 91) {
        return true;
    } else {
        return false;
    }
}

function _lowerCase(letter) {
    let l = letter.charCodeAt();
    if(l > 96 && l < 123) {
        return true;
    } else {
        return false;
    }
}

function isLetter(letter) {
    if(_lowerCase(letter) || UpperCasey(letter)) {
        return true;
    } else {
        return false;
    }
}

function mod(n, m) {
    return ((n % m ) + m) % m;
}

function encrypt(_text, key) {
    let encrypted = "";
    let j = 0;
    for (let i = 0; i < _text.length; i++) {
        let currentLetter = _text[i];
        const A = 65;
        const a = 97;

        if(UpperCase(currentLetter)) {
            let Pi = (currentLetter.charCodeAt(0) - A);
            let Ki = (key[j % key.length].toUpperCase().charCodeAt() - A);
            let upperLetter = mod(Pi + Ki, 26);

            encrypted += String.fromCharCode(upperLetter + A);

            j++;
        } else if(_lowerCase(currentLetter)) {
            let Pi = (currentLetter.charCodeAt() - a);
            let Ki = (key[j % key.length].toLowerCase().charCodeAt() - a);
            let lowerLetter = mod(Pi + Ki, 26);

            encrypted += String.fromCharCode(lowerLetter + a);

            j++;
        } else  {
            encrypted += currentLetter;
        }
    }
    return encrypted;
}

function decrypt(enc, key) {
    let decrypted = "";
    let j = 0;
    for (let i = 0; i < enc.length; i++) {
        let currentLetter = enc[i];
        const A = 65;
        const a = 97;

        if(UpperCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - A);
            let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
            let upperLetter = mod(Ci - Ki, 26);

            decrypted += String.fromCharCode(upperLetter + A);

            j++;
        } else if(_lowerCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - a);
            let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
            let lowerLetter = mod(Ci - Ki, 26);

            decrypted += String.fromCharCode(lowerLetter + a);

            j++;
        } else {
            decrypted += currentLetter;
        }
    }
    return decrypted;
}

let encrypted = encrypt(_text, key);
let decrypted = decrypt(encrypted, key);

console.log(encrypted);
console.log(decrypted);
