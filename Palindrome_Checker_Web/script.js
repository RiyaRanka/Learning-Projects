const inputString = document.getElementById("inputBox");

function reverseString(str) {
    return str.split("").reverse("").join("");
}

function check() {
    const value = inputString.value;
    const reverse = reverseString(value);
    // alert(reverse);

    if (value === reverse) {
        alert ("It is a Palindrome String! \n Original String:" + value + "\nReverse String: " + reverse);
    }
    else {
        alert (" It is not Palindrome String! \n Original String:" + value + "\nReverse String: " + reverse);
    }

    inputString.value = "";
}
