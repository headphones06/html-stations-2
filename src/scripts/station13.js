function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var flag = false
  const check = document.getElementById("check");
  const text = document.getElementById("text");

  if(check.checked){
    flag = true;
    console.log(flag);
  }else{
    flag = false;
    console.log(flag);
  }
  if(flag==true){
    text.style.backgroundColor = "#ff0000";
  }else if(flag==false){
    text.style.backgroundColor = "#00000000";
  }
}
