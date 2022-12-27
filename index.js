function changedirection() {
    const el1 = document.getElementsByClassName("container");
    el1[0].style.flexDirection = "column";
    const el2 = document.getElementsByClassName("child");
    for (let i = 0; i < el2.length; i++) {
      el2[i].style.backgroundColor = "#82AAE3";
    }
  }
  function previousdrection() {
    const el1 = document.getElementsByClassName("container");
    el1[0].style.flexDirection = "row";
    const el2 = document.getElementsByClassName("child");
    for (let i = 0; i < el2.length; i++) {
      el2[i].style.backgroundColor = "blueviolet";
    }
  }
  function changehello() {
    const changehello = document.getElementById("hello");
    changehello.innerText = "Hello Word!!";
  }
  const targetelement=document.getElementsByTagName('h1');
  // const colorAtt =document.createAttribute('color')
  targetelement[7].style.color="red";
  targetelement[7].setAttribute('id','heading');
   function replacetext(){
    const text=document.getElementsByClassName('replacetext');
    text[0].innerText="Welcome to Elevation";
    text[0].style.color="green";
   }
   function GOBACK(){
    const text=document.getElementsByClassName('replacetext');
    text[0].innerText="Hello World";
    text[0].style.color="black";
   }
  function clock(){
  
    const date=new Date();
    
    let hours=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    let section =document.getElementById('section');
  
    if(hours>=12){
      hours-=12;
      section.innerHTML="PM"
    }
    else{
      section.innerHTML="AM"
    }
  
  
  
    let hourslot=document.getElementById('hours');
    hourslot.innerHTML=`${hours}:`
    let minslot=document.getElementById('mins');
    minslot.innerHTML=`${mins}:`
    let secslot=document.getElementById('secs');
    secslot.innerHTML=secs;
    
  }
  setInterval(()=>{
    clock();
  },1000);
  
  function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
  }