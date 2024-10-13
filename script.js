function palindrome(string1){



var input =string1.replace(/[^A-Z0-9]/ig,"").toLowerCase();

var reversedinput =input.split("").reverse("").join("");

if (input === reversedinput ) {

    alert(  string1 + "  it is a palindrome  ")
}

else alert( string1 + "  it is not a  palindrome ")
}
var input =prompt("enter your word")
if (input ==="" ){

    alert("enter a word ")
}

palindrome(input)



