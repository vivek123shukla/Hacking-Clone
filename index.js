
let one=document.querySelectorAll('.one');
let two=document.querySelectorAll('.two');
let three=document.querySelectorAll('.three');

setInterval(function(){
    setTimeout(()=>{
        one.forEach(function(e){
            let i=0;
            i++;
            e.innerHTML='.';
  },)    
    },1000);
setTimeout(()=>{
    two.forEach(function(e){
        let i=1;
        i++;
    e.innerHTML='.';
    },)
},1200);
setTimeout(()=>{
    three.forEach(function(e){
        let i=2;
        i++;
        e.innerHTML='.';
    },)  
},1400);
setTimeout(()=>{
    one.forEach(function(e){
        e.innerHTML='';        
    },)
    two.forEach(function(e){
        e.innerHTML='';
    },)
    three.forEach(function(e){
        e.innerHTML='';
    },) 
},1800)
},1000)












