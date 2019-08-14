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
    todos : ["자바스크립트공부하기"],
    addTodo: function(v){
        this.todos.push(v);
    },
    showTodo: function(){
        console.log(this.todos)
    }
}

var tester = {
    name: "아직 바뀌기 전 이름",
    showMe() {
        console.log(this.name);
        return this.name;
    },
    setName(name){
        console.log(this.name);
        // return this.name = name;
        this.name = name;
    }
}

var others = {
    todos: "난 절대 아무것도 하지 않아"
}

todo.addTodo("some");
todo.addTodo("help")
todo.showTodo();

tester.setName("김밥");
tester.showMe();

todo.showTodo.call(others); //call 함수는 현재 context의 참조점을 바꿔준다.
