// var num1= +prompt("enter your number")
// var num2= +prompt("enter your secondnumber")
// var num3= +prompt("enter your thirdnumber")
// var num4= +prompt("enter your fourthnumber")
// console.log(num1+num2+num3+num4)

// var num1= +prompt("90")
// var num2= +prompt("10")
// console.log(num1==num2)    
// console.log(10 !== 20); 
// document.write(hello);



// var percentage = +prompt ("what is your percentage")
// console.log('50')
// if else(percentage < 90 )
// else(console.log(percentage))

// var num1= +prompt("100")
// ifelse(divisible by 2 )(console.log(true))
// ifelse(odd)(console.log(false)


// function sum(num1 ,num2){
//     console.log("sum of two numbers===>"  )
// }

// console.log("number")

// sum2("03363098433")




//      function calcolation (){
//     console.log("hello world")
//     return "105"
// }

// var h1 = document.
// querySelector("#h1")
// console.log(h1.innerHTML)
// var paragraph = document.
// querySelector("#para")
// console.log(paragraph.innerHTML)


// function changetext(){
// if(paragraph.innerHTML=== "changed through js" & h1.innerHTML ==="changed through js"){
//     h1.innerHTML="hello world"
//     paragraph.innerHTML="lorem ipsum"
// }
// else{
//     paragraph.innerHTML="changed through js "
//     h1.innerHTML="changed through js"
// }
// }

// var name= ("haashir")
// // console.log(name)
// alert("hello world")
// prompt("haashir")

// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)

// function bewakuf(params) {
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)

// }

// bewakuf()
// bewakuf()

// function nalaik(params) {

//     console.log("hello world")

// }

// nalaik(
// )

// undefined
// null



// var  username
// console.log(username)


// function greetuser (  username , lastname ,age) {
// console.log("hello ,"+ username, + lastname, + age)

// }

// greetuser("haashir" ,"shakeel" ,"18")


// function sum(num1 ,num2) {
//     console.log("sum of two numbers===>",num1 + num2 )
//     sum(50,70)

// }
// var lastname ="memon"

// function greetuser() {
//     varusername= "haashir"
//     console.log(username + lastname)

// }

// console.log(username)
// console.log(lastname)

// greetuser()



// var HEAD = document.querySelector(".HEAD");
// HEAD.innerHTML = "change through js"

// function changetext(head) {

    //     var HEAD = document.querySelector(".HEAD");
    // HEAD.innerHTML = "change through js"
//     if (HEAD.innerHTML = "change through js") {
//         HEAD.innerHTML = "change through js"
//     }
//     //     var HEAD = document.querySelector(".HEAD");
//     else {
//         HEAD.innerHTML = "change through js"
//     }

// }

// var username="haashir"
// var lastname="shakeel"
// var age="18"

// console.log(`my name is ${firstname} ${lastname} and my age is ${age}`)

// function greetuser() {
//     var input1 = "haashir" 
//     var input2 = "haashir"
//     var input3 = "haashir"
//     var input4 = "haashir"

//     console.log("input1")
//      console.log("input2") 
//      console.log("input3")
//       console.log("input4") ;
    
// }


// greetuser();


var head = document.querySelector(".HEAD")
var paragraph = document.querySelector("#para")



// console.log(head.innerHTML)
// console.log(paragraph.innerHTML)

// function changetext() {

//     var head = document.querySelector(".HEAD")
//     var paragraph = document.querySelector("#para")
    

//     head.innerHTML = "change through js"
// paragraph.innerHTML = "lorem ipsum"
// }

// changetext()


// var input = document.querySelector("input")
// console.log(input.value)

// function getvalue () {

//     console.log(input.value)
//     input.value =""
// }

// getvalue()

var input1 =document.querySelector("#input1")
var input2 =document.querySelector("#input2")
var input3 =document.querySelector("#input3")
var input4 =document.querySelector("#input4")
var studenttotal = document.querySelector("#totalmarks")
var grade =document.querySelector("#grade")
var percentage =document.querySelector("#percentage")

// console.log("+input1.value"+  "+input2.value" +"+input3value" +"+input4value");


function findmarks() {
console.log(input1.value);
console.log(input2.value);
console.log(input3.value);
console.log(input4.value);
    
var totalmarks = 400

var obtainedmarks = +input1.value + +input2.value + +input3.value + +input4.value
console.log("obtainedmarks===>", obtainedmarks);

studenttotal.innerHTML = obtainedmarks
var  studentpercentage =obtainedmarks/totalmarks*100
percentage.innerHTML = studentpercentage

if (studentpercentage>80) {
    grade.innerHTML =" A+1"
}

else if(studentpercentage>70) {
    grade.innerHTML = "A"
    
}
else if(studentpercentage>60) {
    grade.innerHTML = "b"
}
else if(studentpercentage>50){
    grade.innerHTML ="c"

}
else{
    grade.innerHTML = "fail"
}

}


