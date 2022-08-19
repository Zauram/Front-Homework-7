let buttons = document.querySelectorAll(".mytabs");
let tabs= document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        document.querySelector(".mytabs.active").classList.remove("active");
        button.classList.add("active");

        tabs.forEach(tab => {
            if(tab.getAttribute("data-content") == button.getAttribute("data-target")){
                tab.classList.remove("d-none");
            }
            else{
                tab.classList.add("d-none");
            }
        })
    })
});