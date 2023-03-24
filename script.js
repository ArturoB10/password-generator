let btn = document.getElementById('generate'); 
let password = document.getElementById('password');

const passGen = () => {
    let len = prompt("How long would like your password to be (8-128)?");
    if(len<8 || len>128 || isNaN(len)) {
        alert("Need to provide a number between 8-128. Please try again.");
        return passGen();
    }; 
   
    let upper = confirm('Would you like password to have uppercase letters?');
    let lower = confirm("Would you like your password to have lowercase letters?");
    let num = confirm("Would you like your password to have numbers?");
    let spec = confirm("Would you like your password to have special characters?");

    let tmp = '';
    if(upper) tmp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    if(lower) tmp += "abcdefghijklmnopqrstuvwxyz";
    if(num) tmp += "1234567890";
    if(spec) tmp += "!@#$%^&*?";

    let passwd = '';
    for(let i=0;i<len;i++) {
        passwd += tmp[Math.floor(Math.random()*tmp.length)];
    }
    
    password.innerHTML = passwd;
    console.log(tmp);
} 

btn.onclick = passGen;