// shaxmat                                                                                                                                                                                                                                                                                                                                                                         
// let a=+prompt("Harfli kataklarni kiritng ::::");
// let b=+prompt("Sonli kataklarni kiritng ::::");
// if(){if(a%2===1){
//     if(b%2===1){
// console.log("qora katak")
//     }else{
//         console.log("oq katak");
//     }
// }else if (a%2===0) {
//     if (b%2===1) {
//         console.log("oq katak");
//     }else{                                                       
//         console.log("qora katak");
//     } 
// }} else{
//     console.log("bunday katak mavjud emas");
// }



// if1
// let a = +prompt("son kiritng ::::"); 
// if (a>0) {
//     console.log(++a);
// }else{
//     console.log(a);
// }



// if2
// let a = +prompt("son kiritng ::::"); 
// if (a>0) {
//     console.log(++a);
// }else{
//   a=a-2
//   console.log(a);
// }

// if 3
// let a = +prompt("son kiritng ::::"); 
// if (a>0) {
//     console.log(++a);
// }else if (a<0){
//   a=a-2
//   console.log(a);
// }
// else if (a==0) {
//     a=10
//     console.log(a);
// }


// if 4
// let a=+prompt("a ni kiriting"),b=+prompt("b ni kiriting"),c=+prompt("c ni kiriting"),mus=0,man=0
// if (a>0) {
//     mus++
// }else {
//     man++
// }
// if (b>0) {
//     mus++
// }
// else {
//     man++
// }
// if (c>0) {
//     mus++
// }
// else{
//     man++
// }
// console.log(`musbat son: ${mus}ta manfiy son: ${man}ta`);

// if 6
// let a =+prompt("1-sonni kiriting")
// let b =+prompt("2-sonni kiriting")
// if (a>b) {
//  console.log(`${a}>${b}`);   
// }
// else{
//     console.log(`${b}>${c}`); 
// }


// if 8
// let a =+prompt("1-sonni kiriting")
// let b =+prompt("2-sonni kiriting")
// if (a>b) {
//  console.log(a);   
//  console.log(b);
// }
// else{  
//  console.log(b);
//  console.log(a); 
// }

// if 9
// let a =+prompt("1-sonni kiriting")
// let b =+prompt("2-sonni kiriting")
// let c;
// if (a<b) {
//     console.log(b,a);
// }else{
// c=a-b
// b=c+2
// console.log(b,a);
// }
 

// if 110
// let a =+prompt("1-sonni kiriting")
// let b =+prompt("2-sonni kiriting")
// let c;
// if (a===b) {
//     console.log(b+a);
// }else {
// a=0
// b=0
// console.log(a,b);
// }


// String 27
// let s1=prompt("1-satrni kiriting")
// let s2=prompt("2-satrni kiriting")
// let n1=+prompt("1-sonni kiriting")
// let n2=+prompt("2-sonni kiriting")
// let newstr
// s1=s1.slice(n1)
// console.log(s1.concat(" ",s2.slice(-n2)));

// let arr=[1,2,3,4,4,2,3,4,5,4,6,4]
// for (let i= 1;  i<=arr.length; i++) {
//  if (arr[i]==4) {
//     arr.splice(i,1)   
// i--
//  }
// }
// console.log(arr)

// let matn =(" markazlashtirib, mamlakat mudofaasini mustahkamlashga harakat qilgan. U Buxoro xonligi hududiga shimol tomondan xavf solgan qalmoqlar, jungʻorlarga qarshi muvaffaqiyatli janglar olib borgan. Xonlik hududidagi bir qancha oʻzboshimcha amaldorlar va hokimlar harakatini bostirgan. Imomqulixon hukmronligi davrida Rossiya, Turkiya, Hindiston va boshqa mamlakatlar bilan faol tashqi siyosat olib borgan. Jumladan, Turkiyada hukmronlik qilgan Usmoniylar imperiyasi hukmdori Ahmad I va Murod IV, Hindistonda Boburiylar sulolasi vakillari Jahongir va Shoh Jahon, Rossiyada Romanovlar sulolasi hukmdori Mixail Fyodorovich bilan faol diplomatik munosabatlarni oʻrnatgan")
// matn=matn.split("")
// let s=0
// let a=0
// let l=0
// let o=0
// let m=0
// for (let i= 0 ;i<=matn.length ;i++) {
//     if(matn[i]=="s"||matn[i]=="S"){
//         s++
//     } else   if(matn[i]=="a"||matn[i]=="A"){
//         a++
//     }
//     else if(matn[i]=="l"||matn[i]=="L"){
//         l++
//     }
//     else if(matn[i]=="o"||matn[i]=="O"){
//         o++
//     }
//     else if(matn[i]=="m"||matn[i]=="M"){
//         m++
//     }
// }
// console.log(Math.min(s,a,l,o,m));

// let arr = ["*","a", "b", "c","d"];
// for ( i = 0; i < arr.length; i++){
//     // console.log(arr.join(" "));
//     let array=arr.shift()
//    arr.push(array)
//    console.log(arr.join(" "));
// }

// // string 28
// let S="Oʻzbekiston Respucblikasi hududida avtomobil oynalacrining tusinii"
// let arr = S.split("")
// // let c=0
// for (let i=0; i<S.length; i++){
//     if (arr[i]=="c"||arr[i]=="C") {
//         arr.splice(i, 0, "c")
//     }
// }
// console.log(arr.join(""));


// // string 29
// let S1="chumoli chumchuq"
// let S2 ="yashasin ozbekisyon"
// // for (let i=0 ;i<=S.length;i++){
// //         if (S[i]=="c"||S[i]=="C") {
// //             c++
// //         }}
// ch=S1.indexOf("c")
// console.log(ch);



// let arr=[`*`,"a","b","c","d"]
// let  i= -1
// while (i<arr.length) {
//         console.log(arr.join(""));
//         arr.shift();
//         arr.push(arr[i])
//     i++
// }

// let arr = ["*","a", "b", "c","d"];
// for ( i = 0; i < arr.length; i++){
//    let array=arr.shift()
//    arr.push(array)
//     console.log(array);
// }


// // cat
// let matn="catbcat"
// let c=0
// let a=0
// let t=0
// for (let i = 0; i < matn.length; i++){
//  if (matn[i].toLocaleLowerCase()==="c") {
//     c++
//  }
//  else if (matn[i].toLocaleLowerCase()==="a") {
//     a++
//  }
// else if (matn[i].toLocaleLowerCase()==="t") {
//     t++
//  }
// }
// console.log(Math.min(c,a,t));



// let   number=[1,1,2,2,2,3,3,3,3]
// let one="";
// let two="";
// let three="";
// for (let i= 0; i<number.length; i++) {
//     if (number[i]===1) {
//         one=one+"*"
//     }
//     else if (number[i]===2) {
//         two=two+"*"
//     }
//    else if (number[i]===3) {
//         three=three+"*"
//     }   
// }
// console.log(`1:${one}`);
// console.log(`2:${two}`);
// console.log(`3:${three}`);


// let number=[1,2,4,5,3]
// let i=0,sum=0,middle=0
// for (let i = 0; i < number.length; i++) {
//    sum=sum+number[i]
// }
// middle=sum/number.length
// let arr=[]
// for (let i = 0; i < number.length; i++) {
//  if (number[i]>middle) {
//     arr.push(number[i])
//  }   
// }
// console.log(arr);

// let son=+prompt("son kiritng")
// let i=1,sum=1
// while (i<=son) {
//     sum=sum*i
//     i++
// }
// console.log(sum);

let    son=[1,2,3,4,4,5,6,6,8,9]
let number=[1,2,3,5,4,3,2,3,4,5]
let ball=0
let strike=0
for (let i = 0; i < son.length; i++) {
    if (son[i]===number[i]) {
        strike++}else{ball++}
    
}
console.log(`${strike}S${ball}B`);