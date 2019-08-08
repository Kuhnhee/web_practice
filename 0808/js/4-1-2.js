//자바스크립트 객체리터럴 
var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }
}
  
healthObj.showHealth();

var todo = {
    data : [],
    addTodo: function(v){
        this.data.push(v);
    },
    showTodo: function(){
        console.log(this.data)
    }
}

todo.addTodo("some");
todo.addTodo("help")
todo.showTodo();