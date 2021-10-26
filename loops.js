
var data = [45, 67, 34, 45, 98, 90];

// var sum = 0;

// for (i = 0; i < data.length; i++) {

//     sum = sum + i;
//     document.write(data[i])
//     document.write("<br>")
// }
// document.write("<br>", "total=", sum)


// var max = 0;

// for (i = 0; i < data.length; i++) {

//     document.write(data[i])
//     document.write("&nbsp;", ",", "&nbsp;")
//     if (max <= data[i]) {
//         max = data[i]
//     }
// }
// document.write("<br>", "max number=", max)


// show data in table by js dom
// using for loop
//by userInpit

var firstInput = parseInt(prompt('enter first number'))

var secondInput = parseInt(prompt('enter second number'))

document.write("<table border=1>")

for (i = 1; i <= firstInput; i++) {


    document.write("<tr>");
    for (j = 2; j <= secondInput; j++) {
        document.write("<th>", i * j)
    }
    document.write("<br>")
}
