/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var PI_2 = Math.PI / 2;

class Vector2 {
	constructor(x, y){
		this.x = x || 0;
		this.y = y || 0;
	}
	
	static get zero(){
		return new Vector2();
	}
	static get up(){
		return new Vector2(0,1);
	}
	static get down(){
		return new Vector2(0,-1);
	}
	static get left(){
		return new Vector2(-1,0);
	}
	static get right(){
		return new Vector2(1,0);
	}
	
	static check(v){
		if (!v) return Vector2.zero;
		if (v instanceof Array) return new Vector2(v[0], v[1]);
		if (typeof v != 'object') return new Vector2(v, v);
		return v;
	}
	
	static round(n, depth = 1000){
		return Math.round(depth * n) / depth;
	}
	static roundVector(v, depth = 1000){
		return v.clone().roundSelf(depth);
	}
	
	roundSelf(depth){
		return this.withSelf( (coo) => Vector2.round(coo, depth) );
	}
	
	withSelf(forCoo = ()=>{}){
		this.x = forCoo(this.x);
		this.y = forCoo(this.y);
		return this;
	}
	
	clone(){
		return new Vector2(this.x, this.y);
	}
	
	add(v){
		v = Vector2.check(v);
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	sub(v){
		v = Vector2.check(v);
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	mult(v){
		v = Vector2.check(v);
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}
	normalize(){
		this.mult(1.0 / this.length);
		return this;
	}
	
	equals(v){
		return this.x == v.x && this.y == v.y;
	}
	
	get sqrLength(){
		return this.x * this.x + this.y * this.y;
	}
	get length(){
		return Math.sqrt(this.sqrLength);
	}
	
	toString(){
		return '(' + this.x + ', ' + this.y + ')';
	}
	
	getAngle(){
		let angle = Math.acos(this.x / this.length);
		if (this.y < 0) angle = -angle;
		return angle;
	}
	
	setAngle(newAngle, center){
		if (!center) center = Vector2.zero;
		
		this.sub(center);
		let len = this.length;
		
		this.x = len * Math.cos(newAngle);
		this.y = len * Math.sin(newAngle);
		
		this.add(center);
		return this;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Vector2);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_canvas__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0_canvas__["a" /* default */].ready(
	[
		__webpack_require__(6),
		__webpack_require__(8)
	],
	0.5
);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(5);



/**
 * @prop {Array} models [ {className: class}, ... ]
 * @prop {Number} width of the canvas
 * @prop {Number} height of the canvas
 */
__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */].ready = function(models, multiplier){
	if (!models) return;
	
	var objects = {};
	
	for (var i = 0; i < models.length; i++){
		let obj = models[i];// {className: class}
		let className = Object.keys(obj)[0];
		objects[className.toLowerCase()] = new obj[className]();
	}
	
	global.onload = function(){
		var renderer = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */](multiplier);
		var updates = [];
		var controls = new __WEBPACK_IMPORTED_MODULE_1__controls__["a" /* default */](renderer);
		
		for (var name in objects){
			let obj = objects[name];
			obj.renderer = renderer;
			obj.controls = controls;
			
			if (obj.Start) obj.Start(objects);
			
			if (obj.render || obj.Update){
				let upd;
				
				if (obj.render && !obj.Update) upd = obj.render.bind(obj);
				
				if (!obj.render && obj.Update) upd = obj.Update.bind(obj);
				
				if (obj.render && obj.Update) upd = () => {
					obj.Update();
					obj.render();
				};
				
				updates.push(upd);
				if (obj.render) obj.render();
			}
		}
		
		controls.Bind(objects);
		
		(function render(){
			requestAnimationFrame(render);
			renderer.clear();
			
			for (var i = 0; i < updates.length; i++){
				updates[i]();
			}
		})();
	};
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* default */]);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {class Canvas
{
	constructor(mult){
		this.DOM = document.createElement('canvas');
		document.body.appendChild(this.DOM);
		
		this.multiplier = mult;
		this.setSize();
		
		this.canvas = this.DOM.getContext('2d');
	}
	
	setSize(){
		this.DOM.width = this.multiplier * global.innerWidth;
		this.DOM.height = this.multiplier * global.innerHeight;
	}
	
	get width(){
		return this.DOM.width;
	}
	get height(){
		return this.DOM.height;
	}
	
	addEvent(event, handler){
		this.DOM.addEventListener(event, handler);
	}
	
	createData(w,h){
		return this.canvas.createImageData(w || this.width, h || this.height);
	}
	renderData(img, x,y){
		this.canvas.putImageData(img, x || 0, y || 0);
	}
	clear(){
		this.renderData(this.createData());
	}
	
	getColorAtIndex(img,i){
		return {
			r: img.data[i] || 0,
			g: img.data[i+1] || 0,
			b: img.data[i+2] || 0,
			a: img.data[i+3] || 0
		};
	}
	setColorAtIndex(img,i,c){
		c = c || {};
		
		img.data[i] = c.r === undefined ? 0 : c.r;
		img.data[i+1] = c.g === undefined ? 0 : c.g;
		img.data[i+2] = c.b === undefined ? 0 : c.b;
		img.data[i+3] = c.a === undefined ? 255 : c.a;
	}
	
	getColorAt(img, x,y){
		return this.getColorAtIndex(img, 4*(x + y * this.DOM.width));
	}
	setColorAt(p, x,y, c){
		var i = 4*(x + y * this.DOM.width);
		this.setColorAtIndex(p,i,c);
	}
	
	//--------------------------------------
	
	setColor(color){
		if (!color) return;
		if (typeof color != 'object') color = {fill: color, stroke: color};
		if (color.stroke) this.canvas.strokeStyle = color.stroke;
		if (color.fill) this.canvas.fillStyle = color.fill;
	}
	
	render(){
		this.canvas.closePath();
		this.canvas.stroke();
	}
	
	drawLine(p1, p2, width){
		if (width) this.canvas.lineWidth = width;
		this.canvas.beginPath();
		
		this.canvas.moveTo(p1.x+0.5, p1.y+0.5);
		this.canvas.lineTo(p2.x+0.5, p2.y+0.5);
		
		this.render();
	}
	drawLineTo(p, init, width){
		if (init) this.init_point = init;
		this.drawLine(this.init_point, p, width);
		this.init_point = p;
	}
	drawLines(points, width){
		if (!points.length) return;
		
		this.init_point = points[0];
		
		for (var i = 1; i < points.length; i++){
			this.drawLineTo(points[i], null, width);
		}
	}
	
	drawRect(p1, p2){
		this.canvas.beginPath();
		this.canvas.fillRect(p1.x+0.5, p1.y+0.5, p2.x+0.5, p2.y+0.5);
		this.render();
	}
	drawPoly(points, width){
		this.drawLines(points, width);
		this.drawLineTo(points[0], null, width);// close path
	}
	drawCircle(p, radius, width){
		this.canvas.beginPath();
		this.canvas.arc(p.x, p.y, radius, 0, 2 * Math.PI, false);
		this.canvas.fill();
		if (width) this.canvas.lineWidth = width;
		this.render();
	}
	
	drawText(text, p, font){
		if (font) this.canvas.font = font;
		this.canvas.fillText(text, p.x, p.y);
	}
	drawTexts(texts){
		for (var i = 0; i < texts.length; i++){
			let t = texts[i];
			this.drawText(t[0], t[1], t[2]);
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {global.merge = function(o1, o2){
	if (!o1) o1 = {};
	var keys = Object.keys(o2 || {});
	
	for (var i = 0; i < keys.length; i++){
		o1[keys[i]] = o2[keys[i]];
	}
	return o1;
};

var defaults = {
	enabled: false,
	enableKeys: true,
	enableMouse: true,
	enableTouch: true,
	
	keys: {
		SPACE: 32,
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		W: 87,
		A: 65,
		S: 83,
		D: 68,
		CTRL: false
	},
	mouse: {
		LEFT: 0,
		WHEEL: 1,
		MIDDLE: 1,
		RIGHT: 2
	},
	
	handlers: {
		keydown: 'onKeyDown',
		keyup: 'onKeyUp',
		
		mousemove: 'onMouseMove',
		mousedown: 'onMouseDown',
		mouseup: 'onMouseUp',
		click: 'onClick',
		wheel: 'onMouseWheel',
		contextmenu: 'onContextMenu',
		
		touchstart: 'onTouchStart',
		touchend: 'onTouchEnd',
		touchmove: 'onTouchMove',
	}
};

class Controls
{
	constructor(renderer){
		merge(this, defaults);
		this.renderer = renderer;
		
		// Hook pointer lock state change events
		document.addEventListener('pointerlockchange', (e) => this.onPointerLockingChange(e), false);
		document.addEventListener('mozpointerlockchange', (e) => this.onPointerLockingChange(e), false);
		document.addEventListener('webkitpointerlockchange', (e) => this.onPointerLockingChange(e), false);
		
		document.addEventListener('pointerlockerror', (e) => this.onPointerLockingError(e), false);
		document.addEventListener('mozpointerlockerror', (e) => this.onPointerLockingError(e), false);
		document.addEventListener('webkitpointerlockerror', (e) => this.onPointerLockingError(e), false);
	}
	
	Bind(objects){
		for (var name in objects){
			let obj = objects[name];
			
			for (let eventName in this.handlers){
				let handlerName = this.handlers[eventName];
				
				if (obj[handlerName]){
					document.body.addEventListener(eventName, (e) => {
						if (!this.enabled) return;
						this.keys.CTRL = e.ctrlKey;
						this.eventHandler(e, obj, handlerName);
					}, false);
				}
			}
		}
		
		global.addEventListener('resize', () => {
			this.renderer.setSize();
		}, false);
	}
	
	eventHandler(e, obj, handlerName){
		var handler = obj[handlerName].bind(obj);
		
		e.preventDefault();
		e.stopPropagation();
		
		switch (handlerName){
			case 'onKeyDown':
			case 'onKeyUp':
				if (!this.enableKeys) return;
				return handler(e.keyCode);
			
			case 'onMouseMove':
				if (!this.enableMouse) return;
				return handler(
					new THREE.Vector2(e.clientX, e.clientY),
					new THREE.Vector2(
						e.movementX || e.mozMovementX || e.webkitMovementX || 0,
						e.movementY || e.mozMovementY || e.webkitMovementY || 0
					)
				);
			
			case 'onMouseWheel':
				if (!this.enableMouse) return;
				return handler(e.deltaY);
			
			case 'onClick':
			case 'onMouseUp':
			case 'onMouseDown':
				if (!this.enableMouse) return;
				return handler(e.button, new THREE.Vector2(e.clientX, e.clientY));
			
			case 'onTouchStart':
			case 'onTouchMove':
			case 'onTouchEnd':
				if (!this.enableTouch) return;
				let points = new Array(e.touches.length);
				
				for (var i = 0; i < points.length; i++){
					points[i] = new THREE.Vector2(e.touches[i].pageX, e.touches[i].pageY);
				}
				
				return handler(points);
			
			default:
				return handler();
		}
	}
	
	onPointerLockingError(){}
	onPointerLockingChange(){}
	
	// Ask the browser to lock the pointer
	lockPointer(elem){
		let lock = elem.requestPointerLock || elem.mozRequestPointerLock || elem.webkitRequestPointerLock;
		lock && lock();
	}
	isPointerLocked(elem){
		return document.pointerLockElement === elem || document.mozPointerLockElement === elem || document.webkitPointerLockElement === elem;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controls;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_figure__ = __webpack_require__(7);



const PI = Math.PI;
const PI_2 = PI / 2;
const PIm2 = PI * 2;

class Ship
{
	constructor(){
		this.figure = new __WEBPACK_IMPORTED_MODULE_1_figure__["a" /* default */]([0, 10], [-5, -10], [5, -10]);
		this.radius = 10;// for collisions
		
		this.velocity = new __WEBPACK_IMPORTED_MODULE_0_vector2__["a" /* default */]();
		this.acceleration = __WEBPACK_IMPORTED_MODULE_0_vector2__["a" /* default */].up.mult(0.1);
		this.angularVelocity = PI / 40;
	}
	
	Start(objects){
		this.controls.enabled = true;
		
		this.position = new __WEBPACK_IMPORTED_MODULE_0_vector2__["a" /* default */](this.renderer.width / 2 - 100, this.renderer.height / 2);
		this.rotation = -PI;
		
		this.figure.setPoints(this.position, this.rotation);
	}
	
	Update(){
		if (this.isDestroyed) return;
		this.position.add(this.velocity);
	}
	
	render(){
		if (this.isDestroyed) return;
		this.renderer.setColor('white');
		this.renderer.drawPoly(this.figure.getPoints(this.position, this.rotation));
	}
	
	destroy(){
		this.isDestroyed = true;
	}
	
	//------------------------------------- EVENTS
	
	onKeyDown(key){
		switch (key) {
			case this.controls.keys.UP:
			case this.controls.keys.W:
				this.velocity.add(this.acceleration.setAngle(this.rotation));
				break;
			
			case this.controls.keys.LEFT:
			case this.controls.keys.A:
				this.rotation -= this.angularVelocity;
				if (this.rotation < -PI) this.rotation += PIm2;
				break;
			
			case this.controls.keys.RIGHT:
			case this.controls.keys.D:
				this.rotation += this.angularVelocity;
				if (this.rotation > PI) this.rotation -= PIm2;
				break;
		}
	}
}
/* harmony export (immutable) */ __webpack_exports__["Ship"] = Ship;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vector2__ = __webpack_require__(1);


class Figure
{
	constructor(...points){
		this.points = new Array(points.length);
		this.setOffsets(points);
	}
	
	setOffsets(points){
		this.offsets = [];
		let PI_2 = Math.PI / 2;
		
		for (var i = 0; i < points.length; i++)
		{
			let pos = __WEBPACK_IMPORTED_MODULE_0_vector2__["a" /* default */].check(points[i]);
			
			this.offsets.push({
				position: pos,
				rotation: pos.getAngle()
			});
		}
	}
	
	getPoints(pos, rot){
		if (!pos.equals(this.oldPos) || rot != this.oldAng){
			this.setPoints(pos, rot);
		}
		return this.points;
	}
	
	setPoints(pos, rot){
		for (var i = 0; i < this.offsets.length; i++){
			this.points[i] = this.setPoint(this.offsets[i], pos, rot);
		}
		this.oldPos = pos.clone();
		this.oldAng = rot;
	}
	
	setPoint(offset, pos, rot){
		let p = offset.position.clone();
		p.setAngle(rot + offset.rotation);
		return p.add(pos);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Figure;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vector2__ = __webpack_require__(1);


class Star
{
	constructor(){
		this.radius = 10;
		this.mass = 1;
		this.gravity = false;
	}
	
	Start(objects){
		this.position = new __WEBPACK_IMPORTED_MODULE_0_vector2__["a" /* default */](this.renderer.width / 2, this.renderer.height / 2);
		this.objects = [];
		
		for (var name in objects){
			if (objects[name].velocity){
				this.objects.push(objects[name]);
			}
		}
	}
	
	Update(){
		if (!this.gravity) return;
		
		var toDelete = [];
		var obj, diff, distance, distanceDiff, direction, velocity;
		
		for (var i = 0; i < this.objects.length; i++){
			obj = this.objects[i];
			diff = this.position.clone().sub(obj.position);
			distance = diff.length;
			distanceDiff = distance - (this.radius + (obj.radius || 0));
			
			if (distanceDiff <= 0){
				obj.destroy();
				toDelete.push(i);
				continue;
			}
			
			direction = diff.clone().normalize();
			velocity = direction.clone().mult(this.mass / distance);
			
			if (distanceDiff - velocity.length <= 0){// on the next frame
				velocity = direction.clone().mult(distance - this.radius);
			}
			
			obj.velocity.add(velocity);
		}
		
		for (i = 0; i < toDelete.length; i++){
			this.objects.splice(toDelete[i], 1);
		}
	}
	
	render(){
		this.renderer.setColor('white');
		this.renderer.drawCircle(this.position, this.radius);
	}
}
/* harmony export (immutable) */ __webpack_exports__["Star"] = Star;



/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map