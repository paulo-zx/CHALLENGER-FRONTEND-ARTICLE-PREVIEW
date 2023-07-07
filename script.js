let share = document.querySelector(".p2-div3");
let share1 = document.querySelector(".p2-div4");
let p3 = document.querySelector(".p3");
let filtro = document.querySelector(".filtro");

let x=false;

share.addEventListener("click", function(){
  /* p3.className='active'; */
  if(x==false){
    p3.classList.add("active");
    this.classList.add("active1");
    share1.classList.add("active1");
    filtro.classList.add("active2");
    x=true;
  } else if(x==true){
    p3.classList.remove("active");
    this.classList.remove("active1");
    share1.classList.remove("active1");
    filtro.classList.remove("active2");
    x=false;
  }
   
});

