let bar=document.querySelector(".bar");
let menu=document.querySelector(".menu");

bar.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})


// cureency exchange

let input=document.querySelectorAll("input");
let select=document.querySelectorAll("select")
let API_URL="https://api.exchangeratesapi.io/latest";
let html="";

async function cureency(){
  let res=await fetch(API_URL);
  let data=await res.json();
  let key=Object.keys(data.rates)
  let rate=data.rates
  console.log(data.rates)
  key.map(item=>{
      return html+=`<option value=${item}>${item}</option>`
  })
  for(let i=0;i<select.length;i++){
      select[i].innerHTML=html
  }
  function convert(i,j){
      input[i].value=input[j].value * rate[select[i].value]/rate[select[j].value]
  }
  input[0].addEventListener("keyup", ()=> convert(1,0))
  input[1].addEventListener("keyup", ()=> convert(0,1))
  input[0].addEventListener("change", ()=> convert(1,0))
  input[1].addEventListener("change", ()=> convert(0,1))

}

cureency()


//scroll animation 
let scroll=document.querySelector(".header")
document.addEventListener("scroll", ()=>{
  scroll.classList.add("horizTranslate")
} )