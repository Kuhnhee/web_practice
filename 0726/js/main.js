var log = document.querySelector(".log");
// var lists = document.querySelector("ul > li");
// for (var i=0, len=lists.length; i<lists.length; i++){
//     lists[i].addEventListener("click", function(event){
//         log.innerHTML = "clicked" + evt.currentTarget.firstChild.src;
//     });
// }


var ul = document.querySelector("ul");
ul.addEventListener("click", function(evt){
    console.log(evt.target.tagName, evt.currentTarget.tagName);
    //IMG, UL   //target에는 클릭한 지점(이미지)의 정보가 출력, currentTarget은 event를 작성한 곳.

})