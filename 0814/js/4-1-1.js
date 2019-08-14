var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];

//원본을 건드리지 않고, 새로운 데이터 생성 (map)
var newData = data.map(function(v){
    var obj = {title:v.title, content:v.content+"new", price:v.price*1.1};
    return obj;   //가격 10% 인상
});

//filter 사용하여 새로운 데이터 생성
var newData2 = data.filter(function(v){
    return v.price>1500;
});

//filter와 map chaining (filter의 반환값을 사용해 map에 넣어라)
var newData3 = data.filter(function(v){
    return v.price>1500;
}).map(function(v){
    var obj = {title:v.title, content:v.content, price:v.price+""};
    return obj
});

console.table(data);
console.table(newData);
console.table(newData2);
console.table(newData3);

/////////////////////////// js의 순회

// for(var i=0; i<data.length; i++) {
//   console.log(data[i].title , data[i].price)
// }

data.forEach(function(v) {
   console.log(v.title, v.price);
});

function printElement(v){
    console.log(v.title, v.price);
}
data.forEach(printElement);

//////////////////////////////


// reduce
var totalPrice = data.reduce(function(prevValue, product) { return prevValue + product.price; }, 0);

console.log(totalPrice);