const sections = [...document.querySelectorAll("li")];
const desc = document.querySelector(".desc");
const asc = document.querySelector(".asc");
let order=0;








sections.forEach(li => {

    li.onclick = function () {
        const activeLi = document.querySelector("li.active");
        activeLi.classList.remove("active");
        this.classList.add("active");
        let data = this.getAttribute("data-id");
        let type = this.getAttribute("data-type");
        [...document.querySelectorAll('.col-3')].forEach(item => {
            if (item.getAttribute("data-id") === data) {
                item.classList.add("d-block");
            }
            else {
                item.classList.remove("d-block");
                item.classList.add("d-none");
            }
            if (item.getAttribute("data-type") === type) {
                item.classList.remove("d-none");
                item.classList.add("d-block");
            }
            else {
                item.classList.add("d-none");
            }
           
           
            


        })
    }
})
desc.onclick=function(){
   
    const items=[...document.querySelectorAll(".col-3")];
    items.forEach(item=>{
        item.style.order=`${order}`;
        order--;
    })
    asc.onclick=function(){
        const items=[...document.querySelectorAll(".col-3")];
        items.forEach(item=>{
            item.style.order=`${order}`;
            order++;
        })
    }

}
