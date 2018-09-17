const header=document.querySelector('header');
const link=document.querySelectorAll('header a');
header.addEventListener('click',function(event){
  function a(){
    for(let i=0;i<link.length;i++){
      link[i].style.borderBottom='none';
    }
  }         
    switch(event.target){
    case link[0]:
    a();
    link[0].style.borderBottom='solid';
    break;
    case link[1]:
    a();
    link[1].style.borderBottom='solid';
    break;
    case link[2]:
    a();
    link[2].style.borderBottom='solid';
    break;
  }
})