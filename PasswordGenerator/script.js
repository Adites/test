let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let Numbers = document.getElementById("Numbers");
let specialcharacters = document.getElementById("specialcharacters");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
//showing inputslider value
sliderValue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>{
    sliderValue.textContent=inputslider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumber="12345667890";
let allsymbols="~!@#$%^&*";


//function to generate Password
function generatePassword(){
    let genPassword = "";
    let allchars="";
    allchars +=lowercase.checked ?  lowerchars:"";
    allchars +=uppercase.checked ?  upperchars:"";
    allchars +=Numbers.checked ?  allnumber:"";
    allchars +=specialcharacters.checked ?  allsymbols:"";

    if(allchars=="" || allchars.length == 0){
        return genPassword;
    }
    let i=1;
    while(i<=inputslider.value){
        genPassword +=allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;   
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
   if(passBox.value!=""||passBox.value.length>=1){
     navigator.clipboard.writeText(passBox.value);
     copyIcon.innerText="check";
     copyIcon.title="Password copied";
     setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title="";
    },3000
    )

    }
});