/*
const request = new Request (url, {
    //other stuff
    headers: {}
})

*/

document.getElementById("phoneNum").
    addEventListener("input",(event)=>{
        let regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
        let input = document.getElementById("phoneNum");
        let format = document.querySelector(".phoneFormat");
        let phone = input.value;
        let found = regex.test(phone);
        console.log(phone);
        if (!found && phone.length){
            input.classList.add("invalid");
            format.classList.add("block");
        }
        else {
            input.classList.remove("invalid");
            format.classList.remove("block");   
        }
    })

document.getElementById("phoneForm").
    addEventListener("submit",(event)=>{
        event.preventDefault();
        let input =document.getElementById("phoneNum");
        let regex = /[()-. ]/g;
        let savedPhoneNum = input.value.replaceAll(regex,"");
        console.log(savedPhoneNum);  
    })

    document.getElementById("textForm").
        addEventListener("submit",(event)=>{
            event.preventDefault();
            let input = document.getElementById("textEntry");
            let regex = / {2,}/g;
            let newText = input.value.replaceAll(regex," ").trim();//trim will delete white spaces in end and begin
            console.log(newText);
            let encodedInputText = encodeURI(input.value);
            let encodedCleanText = encodeURI(newText);
            console.log(encodedInputText);
            console.log(encodedCleanText);
        })
i