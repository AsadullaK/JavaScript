var x = 10;
var y = 20;
if(x>y){
  document.write("hello work");
}else{
  document.write("hey work")
}
var name = "khatami";
var gender = "male";
if(gender == "male"){
  document.write("hello mr."+ " " + name)
}else{
  document.write("hello miss." + " " +name)
}
var z;
//(x==10.)?z="true":z="flas";
z = (x==10) ? x+1 : x+2
document.write(z +"<br>");
var day = 5 ;
  
switch(day){
  case 0:
    document.write("Sunday")
   break;
  case 1:
    document.write("monday")
  break;

  case 2:  
    document.write("tueday")
  break;

  case 3:    
    document.write("wedday")
  break;

  case 4:  
    document.write("thuday")
  break;

  case 5:   
    document.write("friday")
  break;

  case 6:
    document.write("satday")
  break;
  
}
var age = 2;
switch(true){
  case age <= 18:
    document.write("you are uneligible")
    break;
  case age >= 18:
    document.write("you are eligible")
    break;
  //default: document.write("enter your age")
}
/*alert("hello would");
if (x>y){
  alert("value of x" + x)
}else{
  alert("value of y" +y)
}*/
//confirm(" you are legend")
var br = "<br>"
document.write(br);

//var pro = prompt("what is your name?")
//document.write(pro)
function brek(){
  document.write("<br>")
}
brek();
brek();
function add(x , y){
  document.write(x+y + "<br>");
}
add(10 , 20)
add(50 , 60)
function fullname(fname , lname){
  var a = fname +" - "+ lname+ "<br>";
  return a;
}
var fu = fullname("asadulla", "khatami");
document.write(fu);

function sum(mat,eng,ban){
  var s = mat + eng + ban;
  return s;
}
var total = sum(87 , 53 ,60 );
function presen(tt){
  var per = total/300*100;
  document.write(per + "%");
}
//presen(total);
var a =2 ;
while(a<=1){
  document.write(" hello world <br>");
  a = a+1;
}
var d =3;
do{
  document.write(d + "do while loop <br>");
  d++
}while(d<=1);

for(var a =1; a<=10; a++){
  if(a==3){
  document.write("for loop"+a +"<br>");
  break;
  }
  document.write(a + "fore loop<br>");
}