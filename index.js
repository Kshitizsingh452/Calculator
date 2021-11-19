const display_1=document.querySelector('.display-1');
const display_2=document.querySelector('.display-2');
const display_3=document.querySelector('.display-3');
const numbers=document.querySelectorAll('.num');
const op=document.querySelectorAll('.op');
const clear=document.querySelector('.clear-all');
const last_clear=document.querySelector('.last-clear ');
const equal=document.querySelector('.equal');
let d1='';
let d2='';
let d3='';
let lo='';
let dott=false;
numbers.forEach(number=>{
number.addEventListener('click',(e)=>{
    if(e.target.innerText==='.'&& !dott){
        dott=true;
    }else if(e.target.innerText==='.'&& dott){
        return;
    }
    d2+=e.target.innerText;
    display_2.innerText=d2;
})
});
op.forEach(operation=>{
operation.addEventListener('click',(e)=>{
    if(!d2){
        result;
    }
    dott=false; 

    let operationName =e.target.innerText;
    if(d1&&d2&&lo){
        mo();
    }else{
        result=parseFloat(d2);
    }
    clearVal(operationName);
    lo=operationName;
    console.log(result);

})
});
function clearVal(name=''){
    d1+=d2+' '+name+' ';
    display_1.innerText=d1;
    display_2.innerText='';
    d2='';
    display_3.innerText=result;
}


function mo(){
    if(lo==='X'){
    result=parseFloat(result)*parseFloat(d2);
    }else if(lo==='+'){
    result=parseFloat(result)+parseFloat(d2);
        
    }else if(lo==='-'){
        result=parseFloat(result)-parseFloat(d2);
            
        }else if(lo==='/'){
            result=parseFloat(result)/parseFloat(d2);
                
            }else if(lo==='%'){
                result=parseFloat(result)%parseFloat(d2);
                    
                }
}


equal.addEventListener('click',(e)=>{
    if(!d1 || !d2)
    {
        return;
    }
    dott=false;
    mo();
    clearVal();
    display_2.innerText=result;
    display_3.innerText='';
    d2=result;
    d1='';

});
clear.addEventListener('click',(e)=>{
    display_1.innerText='';
    display_2.innerText='';
    d1='';
    d2='';
    result='';
    display_3='';
});

last_clear.addEventListener('click',(e)=>{
    display_2.innerText='';
    d2='';
});

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
      // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });


  function clickButtonEl(key) {
    numbers.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }
  function clickOperation(key) {
    op.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
  }
  function clickEqual() {
    equal.click();
  }
  
  