
// this code is for practicing javascript traversal

const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

var answer = []
Object.keys(data).forEach(function(key){
    if (typeof(data[key]) === "object") {

        Object.keys(data[key]).forEach(function(key2){
            if (typeof(data[key][key2]) === "number"){
                answer.push(key2);
            }
        });
    }
});
console.log(answer)



// return of the code below is "true"
var a = 1;
console.log(typeof a === "number");
