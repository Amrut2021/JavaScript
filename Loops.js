// // 10 natural number using while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     document.write(i + "<br>")
//     i++; 
// }

// sum of all numbers from 1 to 100 using a for loop
// let sum = 0;
// for (j = 1; j <= 100; j++)
//     sum = sum + j;
// document.write(sum + "<br>");

//  print all even numbers between 1 and 50 using a for loop
// document.write("even numbers between 1 and 50" + "<br>")
// for (k = 1; k <= 50; k++) {
//     if (k % 2 == 0)
//      document.write(k + "<br>");
// }     

// //find the factorial of a number entered by the user using a while loop
// let num=parseInt(prompt("Enter a number"));
// let i=num;
// let ans=1;
// while (i>0)
//   {
//     ans*=i;
//     i--;  
//   }
//   document.write(ans);
 
//  To reverse a number using a while loop
// let reverse=parseInt(prompt("Enter a Number to reverse :"));
// let n!= 0;

// while(n=n/10)

// calculate the power of a number using a for loop   
    // let j=1;
    // let n=1;
    // let num1=parseInt(prompt("Enter a number : "));
    // let power=parseInt(prompt("Enter a Power"));
    // while(j<=power)
    // {
    //    n=num1*n;
    //   ++j;
    // }
    // document.write(n);
//  //to count the number of digits in a given number 
   let ct=parseInt(prompt("Enter a number to count digits")) ;
   if(ct%10==0)
   {
    ct++;
   document.write(ct);
   }
   else
   {
    document.write("Enter valid Number");
   }

