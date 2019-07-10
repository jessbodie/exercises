document.getElementById('palBtn').addEventListener('click', function () {
    palindromeChecker(document.getElementById('palInput').value);
});
document.getElementById('palInput').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        palindromeChecker(e.target.value);
    }
});

function palindromeChecker (pal) {
    pal =((pal.toLowerCase()).split('')).filter(p => p !== ' ');
    for (let i = 0; i < (pal.length/2); i++) {
        if (pal[i] !== pal[pal.length - i - 1]) {
            alert('Sorry, this is not a palindrome');
            return;
        } 
    }
    alert('This is a palindrome!')
}
