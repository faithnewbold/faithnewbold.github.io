var age = prompt("Please enter your age:")
if (age>=65) {
    output = "Free Friday Coffee Night for Senior!"
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
}
else{
    output = "Enjoy Music and Make Memories!"
    document.getElementById('verify').style.color = 'maroon';
}

document.getElementById('verify').innerHTML = output