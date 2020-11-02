
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','X','Y','Z',];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9',];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(',')'];
var pwdlength = document.getElementById("passlength").value;
var pwdletters = document.getElementById("letters").checked;
var pwdnumbers = document.getElementById("numbers").checked;
var pwdspecials = document.getElementById("specials").checked;
var passtext = document.getElementById("passtext").value;
var finaltable = [];
function generate()
{
    passtext = "";
    pwdlength = document.getElementById("passlength").value;
    pwdletters = document.getElementById("letters").checked;
    pwdnumbers = document.getElementById("numbers").checked;
    pwdspecials = document.getElementById("specials").checked;

pwdlength = parseInt(pwdlength);
if(pwdletters && !pwdnumbers & !pwdspecials)
{
    finaltable = letters;
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(pwdnumbers && !pwdletters & !pwdspecials)
{
    finaltable = numbers;
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(pwdspecials && !pwdletters & !pwdnumbers)
{
    finaltable = specials;
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(pwdnumbers && pwdletters & !pwdspecials)
{
    finaltable = [].concat(numbers, letters);
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(pwdnumbers && pwdletters && pwdspecials)
{
    finaltable = [].concat(numbers, letters, specials);
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(pwdnumbers && !pwdletters && pwdspecials)
{
    finaltable = [].concat(numbers, specials);
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}
if(!pwdnumbers && pwdletters && pwdspecials)
{
    finaltable = [].concat(letters, specials);
    for(let i=0; i < pwdlength; i++)
    {
        let random = finaltable[getRandomInt(0,finaltable.length)];
        passtext = passtext + random;

    }
    document.getElementById("passtext").value = passtext;

}


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }