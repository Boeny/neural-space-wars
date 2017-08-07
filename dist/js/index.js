!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n(2);t.Vector2=e.a.Vector2,e.a.ready([n(6),n(7)],.5)}.call(e,n(0))},function(t,e,n){"use strict";(function(t){var i=n(3),s=n(5);i.a.ready=function(e,n){if(e){for(var o={},r=0;r<e.length;r++){let t=e[r],n=Object.keys(t)[0];o[n.toLowerCase()]=new t[n]}t.onload=function(){var t=new i.a(n),e=[],r=new s.a(t);for(var a in o){let n=o[a];if(n.renderer=t,n.controls=r,n.Start&&n.Start(o),n.render||n.Update){let t;n.render&&!n.Update&&(t=n.render.bind(n)),!n.render&&n.Update&&(t=n.Update.bind(n)),n.render&&n.Update&&(t=(()=>{n.Update(),n.render()})),e.push(t),n.render&&n.render()}}r.Bind(o),function n(){requestAnimationFrame(n),t.clear();for(var i=0;i<e.length;i++)e[i]()}()}}},e.a=i.a}).call(e,n(0))},function(t,e,n){"use strict";(function(t){var i=n(4);class s{constructor(t){this.DOM=document.createElement("canvas"),document.body.appendChild(this.DOM),this.multiplier=t,this.setSize(),this.canvas=this.DOM.getContext("2d")}setSize(){this.DOM.width=this.multiplier*t.innerWidth,this.DOM.height=this.multiplier*t.innerHeight}get width(){return this.DOM.width}get height(){return this.DOM.height}addEvent(t,e){this.DOM.addEventListener(t,e)}createData(t,e){return this.canvas.createImageData(t||this.width,e||this.height)}renderData(t,e,n){this.canvas.putImageData(t,e||0,n||0)}clear(){this.renderData(this.createData())}getColorAtIndex(t,e){return{r:t.data[e]||0,g:t.data[e+1]||0,b:t.data[e+2]||0,a:t.data[e+3]||0}}setColorAtIndex(t,e,n){n=n||{},t.data[e]=void 0===n.r?0:n.r,t.data[e+1]=void 0===n.g?0:n.g,t.data[e+2]=void 0===n.b?0:n.b,t.data[e+3]=void 0===n.a?255:n.a}getColorAt(t,e,n){return this.getColorAtIndex(t,4*(e+n*this.DOM.width))}setColorAt(t,e,n,i){var s=4*(e+n*this.DOM.width);this.setColorAtIndex(t,s,i)}setColor(t){t&&("object"!=typeof t&&(t={fill:t,stroke:t}),t.stroke&&(this.canvas.strokeStyle=t.stroke),t.fill&&(this.canvas.fillStyle=t.fill))}render(){this.canvas.closePath(),this.canvas.stroke()}drawLine(t,e,n){n&&(this.canvas.lineWidth=n),this.canvas.beginPath(),this.canvas.moveTo(t.x+.5,t.y+.5),this.canvas.lineTo(e.x+.5,e.y+.5),this.render()}drawLineTo(t,e,n){e&&(this.init_point=e),this.drawLine(this.init_point,t,n),this.init_point=t}drawLines(t,e){if(t.length){this.init_point=t[0];for(var n=1;n<t.length;n++)this.drawLineTo(t[n],null,e)}}drawRect(t,e){this.canvas.beginPath(),this.canvas.fillRect(t.x+.5,t.y+.5,e.x+.5,e.y+.5),this.render()}drawPoly(t,e){t.push(t[0]),this.drawLines(t,e)}drawCircle(t,e,n){this.canvas.beginPath(),this.canvas.arc(t.x,t.y,e,0,2*Math.PI,!1),this.canvas.fill(),n&&(this.canvas.lineWidth=n),this.render()}drawText(t,e,n){n&&(this.canvas.font=n),this.canvas.fillText(t,e.x,e.y)}drawTexts(t){for(var e=0;e<t.length;e++){let n=t[e];this.drawText(n[0],n[1],n[2])}}}s.Vector2=i.a,e.a=s}).call(e,n(0))},function(t,e,n){"use strict";class i{constructor(t,e){this.x=t||0,this.y=e||0}clone(){return new i(this.x,this.y)}check(t){return t?t instanceof Array?new i(t[0],t[1]):"object"!=typeof t?new i(t,t):t:new i}add(t){return t=this.check(t),this.x+=t.x,this.y+=t.y,this}sub(t){return t=this.check(t),this.x-=t.x,this.y-=t.y,this}mult(t){return t=this.check(t),this.x*=t.x,this.y*=t.y,this}normalize(){return this.mult(1/this.length),this}equals(t){return this.x==t.x&&this.y==t.y}get sqrLength(){return this.x*this.x+this.y*this.y}get length(){return Math.sqrt(this.sqrLength)}toString(){return"("+this.x+", "+this.y+")"}rotate(t,e){let n=this.sub(t).length;this.normalize();let i=Math.cos(e),s=Math.sin(e);return this.x=i*this.x-s*this.y,this.y=s*this.x+i*this.y,this.mult(n).add(t)}}e.a=i},function(t,e,n){"use strict";(function(t){t.merge=function(t,e){t||(t={});for(var n=Object.keys(e||{}),i=0;i<n.length;i++)t[n[i]]=e[n[i]];return t};var n={enabled:!1,enableKeys:!0,enableMouse:!0,enableTouch:!0,keys:{SPACE:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,W:87,A:65,S:83,D:68,CTRL:!1},mouse:{LEFT:0,WHEEL:1,MIDDLE:1,RIGHT:2},handlers:{keydown:"onKeyDown",keyup:"onKeyUp",mousemove:"onMouseMove",mousedown:"onMouseDown",mouseup:"onMouseUp",click:"onClick",wheel:"onMouseWheel",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove"}};class i{constructor(t){merge(this,n),this.renderer=t,document.addEventListener("pointerlockchange",t=>this.onPointerLockingChange(t),!1),document.addEventListener("mozpointerlockchange",t=>this.onPointerLockingChange(t),!1),document.addEventListener("webkitpointerlockchange",t=>this.onPointerLockingChange(t),!1),document.addEventListener("pointerlockerror",t=>this.onPointerLockingError(t),!1),document.addEventListener("mozpointerlockerror",t=>this.onPointerLockingError(t),!1),document.addEventListener("webkitpointerlockerror",t=>this.onPointerLockingError(t),!1)}Bind(e){for(var n in e){let t=e[n];for(let e in this.handlers){let n=this.handlers[e];t[n]&&document.body.addEventListener(e,e=>{this.enabled&&(this.keys.CTRL=e.ctrlKey,this.eventHandler(e,t,n))},!1)}}t.addEventListener("resize",()=>{this.renderer.setSize()},!1)}eventHandler(t,e,n){var i=e[n].bind(e);switch(t.preventDefault(),t.stopPropagation(),n){case"onKeyDown":case"onKeyUp":if(!this.enableKeys)return;return i(t.keyCode);case"onMouseMove":if(!this.enableMouse)return;return i(new THREE.Vector2(t.clientX,t.clientY),new THREE.Vector2(t.movementX||t.mozMovementX||t.webkitMovementX||0,t.movementY||t.mozMovementY||t.webkitMovementY||0));case"onMouseWheel":if(!this.enableMouse)return;return i(t.deltaY);case"onClick":case"onMouseUp":case"onMouseDown":if(!this.enableMouse)return;return i(t.button,new THREE.Vector2(t.clientX,t.clientY));case"onTouchStart":case"onTouchMove":case"onTouchEnd":if(!this.enableTouch)return;let e=new Array(t.touches.length);for(var s=0;s<e.length;s++)e[s]=new THREE.Vector2(t.touches[s].pageX,t.touches[s].pageY);return i(e);default:return i()}}onPointerLockingError(){}onPointerLockingChange(){}lockPointer(t){let e=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock;e&&e()}isPointerLocked(t){return document.pointerLockElement===t||document.mozPointerLockElement===t||document.webkitPointerLockElement===t}}e.a=i}).call(e,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{constructor(){this.radius=10,this.oldPos=null,this.oldAng=null,this.points=[],this.velocity=new Vector2,this.angularVelocity=Math.PI/90}Start(t){this.position=new Vector2(this.renderer.width/2-100,this.renderer.height/2),this.rotation=0,this.getPoints(),this.controls.enabled=!0}getPoints(){let t=null!==this.oldPos&&this.position.equals(this.oldPos),e=null!==this.oldAng&&this.rotation==this.oldAng;if(t&&e)return this.points;if(t||(this.points=[this.position.clone().add([0,-10]),this.position.clone().add([-5,10]),this.position.clone().add([5,10])],this.oldPos=this.position.clone()),!e){for(var n=0;n<this.points.length;n++)this.points[n].rotate(this.position,this.rotation-this.oldAng);this.oldAng=this.rotation}return this.points}Update(){this.isDestroyed||this.position.add(this.velocity)}render(){this.isDestroyed||(this.renderer.setColor("white"),this.renderer.drawPoly(this.getPoints()))}destroy(){this.isDestroyed=!0}onKeyDown(t){switch(t){case this.controls.keys.UP:case this.controls.keys.W:this.velocity.y+=.5;break;case this.controls.keys.LEFT:case this.controls.keys.A:this.rotation-=this.angularVelocity;break;case this.controls.keys.RIGHT:case this.controls.keys.D:this.rotation+=this.angularVelocity}}}e.Ship=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{constructor(){this.radius=10,this.mass=1,this.gravity=!0}Start(t){this.position=new Vector2(this.renderer.width/2,this.renderer.height/2),this.objects=[];for(var e in t)t[e].velocity&&this.objects.push(t[e])}Update(){if(this.gravity){for(var t,e,n,i,s,o,r=[],a=0;a<this.objects.length;a++)t=this.objects[a],(i=(n=(e=this.position.clone().sub(t.position)).length)-(this.radius+(t.radius||0)))<=0?(t.destroy(),r.push(a)):(i-(o=(s=e.clone().normalize()).clone().mult(this.mass/n)).length<=0&&(o=s.clone().mult(n-this.radius)),t.velocity.add(o));for(a=0;a<r.length;a++)this.objects.splice(r[a],1)}}render(){this.renderer.setColor("white"),this.renderer.drawCircle(this.position,this.radius)}}e.Star=i}]);