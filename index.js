let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")
}


let Themetoggler = document.querySelector("#theme-toggler")

Themetoggler.onclick = () => {

    Themetoggler.classList.toggle("fa-apple");

    if (Themetoggler.classList.contains("fa-apple")) {
        document.body.classList.add("active")

    } else { document.body.classList.remove("active") }
}

// Form Validation




function validetion() {

    let form = document.getElementById("form").value
    let username = document.getElementById("uname").value
    let mail = document.getElementById("mail").value
    let passworde = document.getElementById("pword").value

    let message = document.getElementById("message").value;



    if (username == "") {
        document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **Please Enter your name**'


    }

    else if (username.length <= 3 || (username.length > 20)) {
        document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **min 3 chracter max 20 cracter rexuired**'


    }

    else if (!isNaN(username)) {

        document.getElementById("userror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **Only Alphabats are Allowed*'

 

    } else {
        document.getElementById("userror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>'



    }


    if (mail == "") {
        document.getElementById("mailrror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **Please Enter your E-mail**'

    }
    else {
        document.getElementById("mailrror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>'
    

    }



    if (passworde == "") {
        document.getElementById("passworderror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>   **Please Enter your Password**'
    
  

    }
    else if (passworde.length <= 2 || (username.length > 20)) {
        document.getElementById("passworderror").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"></i>  **min 3 chracter max 20 cracter rexuired**'


    } else {
        document.getElementById("passworderror").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>'
    


    
    }



    if (message == "") {
        document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"> </i>   **Please Enter your Message**'

      

  
    }

    else if (message.length <= 20 || (username.length > 1000)) {
        document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-triangle-exclamation mx-1" style="color: #ff0000;"> </i>   **min 20 chracter max 1000 chracter rexuired**'
        flag = 0

    } else {
        document.getElementById("meserroe").innerHTML = '<i class="fa-solid fa-circle-check mx-2" style="font-size: 20px; color: green"></i>'
        
     
   

    }

return false




}