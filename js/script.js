console.log("oi")
const burguer = document.querySelector(".menu");

burguer.addEventListener('click' , function(){
    const ativo = this.classList.contains("active")
    burguer.classList.add("active")
    if(ativo){
        this.classList.remove("active")
    }
})