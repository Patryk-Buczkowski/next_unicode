function nextUnicode(inputSting) {
    let result = '';

    for (let i = 0; i < inputSting.length; i++) {
        const char = inputSting[i];
        const charCode = inputSting.charCodeAt(i);

        if (char >= 0 && char <= 9) {
            const nextDigit = String.fromCharCode(charCode + 1);
            result += nextDigit;
        }

        else if ((char >= 'a' && char < 'z') || (char >= 'A' && char < 'Z')) {
            const nextLeter = String.fromCharCode(charCode + 1);
            result += nextLeter;
        }

        else if ( char === 'z' || char === 'Z') {
            const newCharCode = char === 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            result += String.fromCharCode(newCharCode);
        } else {
            result += char;
        }
    }
    return console.log(result);
}

nextUnicode('11#cc#22#dd#33#ff#44');