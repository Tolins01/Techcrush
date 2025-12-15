const toggleBut = document.getElementById("hamburger")
const nav = document.getElementById("navLinks")
const close =document.getElementById("close")

toggleBut.addEventListener("click",()=>{
    toggleBut.classList.toggle("max-md:hidden")
    nav.classList.toggle("max-md:hidden")
    nav.classList.add("max-md:flex")
    close.classList.toggle("max-md:flex")
})

close.addEventListener("click",()=>{
    close.classList.toggle("max-md:flex")
    toggleBut.classList.toggle("max-md:hidden")
    nav.classList.remove("max-md:flex")
    nav.classList.toggle("max-md:hidden")
})