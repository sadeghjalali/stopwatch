(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),h=(n(15),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Stopwatch"),r.a.createElement(d,null))}}]),e}(a.Component)),d=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={status:!1,runningTime:0},n.handleClick=function(){n.setState(function(t){if(t.status)clearInterval(n.timer);else{var e=Date.now()-n.state.runningTime;n.timer=setInterval(function(){n.setState({runningTime:Date.now()-e})})}return{status:!t.status}})},n.handleReset=function(){clearInterval(n.timer),n.setState({runningTime:0,status:!1})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,e=t.status,n=t.runningTime;return r.a.createElement("div",null,r.a.createElement("h1",{className:"ms"},n,"ms"),r.a.createElement("button",{onClick:this.handleClick,className:"stopandreset"},e?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset,className:"stopandreset"},"Reset"))}}]),e}(a.Component),p=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c3aa3f9c.chunk.js.map