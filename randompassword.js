
function generate(){
    const result= document.getElementById("password")
    const lenght= document.getElementById("lenght").value;
    const upper= document.getElementById("upper");
    const lower= document.getElementById("lower");
    const number= document.getElementById("number")
    const special= document.getElementById("special")
    let upperallowed= upper.checked ? true :false
    console.log(upperallowed)
    let lowerallowed= lower.checked ? true :false
    console.log(lowerallowed)
    let numberallowed= number.checked ? true :false
    console.log(numberallowed)
    let specialallowed= special.checked ? true :false
    console.log(specialallowed)
    const thanks= document.getElementById("thanks")
    function password(lenght, upper, lower, number, special){
            const lowercase= "abcdefghijklmnopqrstuvwxyz"
            const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const numberin= "1234567890"
            const specialin= "!@#$%^&*()"
            allowed=""
            password=""
            if(upper===true){
                allowed +=uppercase
            }
            if(number===true){
                allowed +=numberin
            }
            if(lower===true){
                allowed +=lowercase
            }
            if(special===true){
                allowed +=specialin
            }
            console.log(allowed)
            console.log(allowed.length)
            for(i=0; i<lenght; i++){
                randomnum= Math.floor(Math.random()*allowed.length)
                password += allowed[randomnum]

            }
            result.textContent=`your Password is ${password}`
            thanks.textContent="Thank You For Using Our Program"
    }       
    
    (password(lenght, upperallowed, lowerallowed, numberallowed, specialallowed))
    
}


