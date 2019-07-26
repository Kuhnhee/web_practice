// // 함수의 호출.
// function printName(firstname) {
//     var myname = "jisu";
//     return myname + " " +  firstname;
// }

// console.log(printName("jisu", "crong"));

// var a =[4];
// a[1000] = 3;
// console.log(a.length);
// console.log(a[500])
// console.log(a)


// var newArr = ["apple","tomato", 'test'].map(function(value, idx) {
//     return idx + "번째 과일은 " + value + "입니다";
//  });
// console.log(newArr)// 여러분들이 실행해보세요


// var obj = { name : "crong", age : 20} 
// console.log(obj["name"]);
// console.log(obj.age);
// console.log(obj);


const myFriend = { key : "value", key2 : "value" };
console.log(typeof(myFriend) === "object");

// // 객체 속성 추가
// myFriend["name"] = "crong";
// console.log(myFriend["name"]);

// myFriend.age = 34;
// console.log(myFriend.age);

// // 객체 속성 삭제
// delete myFriend.key;
// delete myFriend["key2"];
// console.log(myFriend);