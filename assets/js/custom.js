const checkbox = document.getElementById("check");
const signup = document.getElementById("signup");
checkbox.addEventListener("change", (e)=> {
    e.preventDefault();
    if(checkbox.checked){
        signup.removeAttribute("disabled");
    }else {
        signup.disabled = true;
    }
   
});

