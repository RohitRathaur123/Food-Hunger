const humberger = document.querySelector(".humberger"); //navbar icon
const navbar = document.querySelector('.navbar>ul');
const dropheader = document.querySelectorAll('.drop-header');//why us header
const dropDetails = document.querySelectorAll(".drop-details");
const dropIcon = document.querySelectorAll(".drop");




humberger.addEventListener("click",()=>{
    navbar.classList.toggle("menubar");
})
// ====================Drop Header(Whyus) section============
let i;
dropheader.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        dropIcon[index].classList.toggle("fa-angle-down");
        dropIcon[index].classList.toggle('fa-angle-up');
        dropDetails[index].classList.toogle("drop");
        for(i=0; i<=2; i++){
            if(i!=index){
                dropDetails[i].classList.remove('drop');
                dropIcon[i].classList.add('fa-angle-down');
                dropIcon[i].classList.remove('fa-angle-up');
            }
        }
    })
})