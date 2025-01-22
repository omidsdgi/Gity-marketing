
const checkmode= document.getElementsByTagName('input');

function checkmodefunc(x){

  if(x.checked){
    
      document.getElementById('body').style.backgroundColor="#171928"

      document.getElementById('body').style.color="#ffffff"

  }

  else{
      document.getElementById('body').style.backgroundColor="white"

      document.getElementById('body').style.color="#000000"
  }

}
