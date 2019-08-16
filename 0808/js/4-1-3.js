// bind메소드로 this제어하기
var healthObj = {
  name: "달리기",
  lastTime: "PM10:12",
  showHealth: function () {
    setTimeout(function () {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }, 1000)
  }
}
healthObj.showHealth();

var healthObj = {
  name: "달리기",
  lastTime: "PM10:12",
  showHealth: function () {
    setTimeout(function () {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }.bind(this), 1000)
  }
}
healthObj.showHealth();

var healthObj = {
  name: "달리기",
  lastTime: "PM10:12",
  showHealth: function(){
    setTimeout( () => {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }, 1000)
  }
}
healthObj.showHealth();