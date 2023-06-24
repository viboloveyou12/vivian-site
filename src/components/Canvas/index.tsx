import React from 'react';
import './style.scss';
let canvas: HTMLCanvasElement;

class Blob {

  points: Point[];
  ctx: any;
  _color: string;
  _canvas: HTMLCanvasElement;
  _points: number;
  _radius: number;
  _position: {x: number, y: number};
  mousePos: {x: number, y: number};

  constructor() {
    this.points = [];
    this.ctx = null;
    this._color = '#33FFB5';
    this._canvas = document.createElement('canvas');
    this._points = 32;
    this._radius = 150;
    this._position = {x: 0.5, y: 0.5};
    this.mousePos = {x: 0, y: 0};

  }
  
  init() {
    for(let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * ( i + 1 ), this);
      // point.acceleration = -1 + Math.random() * 2;
      this.push(point);
    }
  }
  
  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    // let position = this.position;
    let pointsArray = this.points;
    // let radius = this.radius;
    let points = this.numPoints;
    // let divisional = this.divisional;
    let center = this.center;
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    pointsArray[0].solveWith(pointsArray[points-1], pointsArray[1]);

    let p0 = pointsArray[points-1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo( (p0.x + p1.x) / 2, (p0.y + p1.y) / 2 );

    for(let i = 1; i < points; i++) {
      
      pointsArray[i].solveWith(pointsArray[i-1], pointsArray[i+1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(p2.x, p2.y);

      ctx.fillStyle = '#33FFB5';
      // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

      p1 = p2;
    }

    xc = (p1.x + _p2.x) / 2;
    yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    // ctx.lineTo(_p2.x, _p2.y);

    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = '#33FFB5';
    // ctx.stroke();
    
/*
    ctx.fillStyle = '#000000';
    if(this.mousePos) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
    }
*/
    requestAnimationFrame(this.render.bind(this));
  }
  
  push(item: Point) {
    if(item instanceof Point) {
      this.points.push(item);
    }
  }
  
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || '#33FFB5';
  }
  
  set canvas(value) {
    if(value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = canvas;
      this.ctx = this._canvas.getContext('2d');
      // this.ctx.scale(1.5, 1.5);
    }
  }
  get canvas() {
    return this._canvas;
  }
  
  set numPoints(value) {
    if(value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }
  
  set radius(value) {
    if(value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }
  
  set position(value) {
    if(typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }
  
  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }
  
  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }
}

class Point {
  parent: Blob;
  azimuth: number;
  _components: {x: number, y: number};
  _acceleration: number;
  _speed: number;
  _radialEffect: number;
  _elasticity: number;
  _friction: number;

  constructor(azimuth: number, parent: Blob) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = { 
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };
    
    this.acceleration = -0.3 + Math.random() * 0.6;
    this._acceleration = 0;
    this._speed = 0;
    this._radialEffect = 0;
    this._elasticity = 0.001;
    this._friction = 0.0065;
  }
  
  solveWith(leftPoint: Point, rightPoint: Point) {
    this.acceleration = (-0.3 * this.radialEffect + ( leftPoint.radialEffect - this.radialEffect ) + ( rightPoint.radialEffect - this.radialEffect )) * this.elasticity - this.speed * this.friction;
  }
  
  set acceleration(value) {
    if(typeof value == 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 1.5;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }
  
  set speed(value) {
    if(typeof value == 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 4;
    }
  }
  get speed() {
    return this._speed || 0;
  }
  
  set radialEffect(value) {
    if(typeof value == 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }
  
  get position() {
    return { 
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect), 
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect) 
    }
  }
  
  get components() {
    return this._components;
  }

  set elasticity(value) {
    if(typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if(typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0065;
  }
}

const getClassName = (path: string) => {
  switch (path) {
    case '/work':
      return 'align-left';
    case '/contact':
    case '/about':
        return 'none';
    default:
      return 'align-right';
  }
}

interface CanvasProps {
  path: string;
}

const Canvas = ({ path }: CanvasProps) => {
    let ref = React.useRef<HTMLInputElement>(null);
    let blob = new Blob();

    React.useEffect(() => {
        if (ref.current!.children.length) return;

        canvas = document.createElement('canvas') as HTMLCanvasElement;

        ref.current!.appendChild(canvas);

        let resize = function() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          var ctx = canvas.getContext('2d');
          ctx!.translate(-300, -(window.innerHeight/3));
          ctx!.scale(1.8, 1.8);
        }
        window.addEventListener('resize', resize);
        resize();
        
        let oldMousePoint = { x: 0, y: 0};
        let hover = false;
        let mouseMove = function(e: MouseEvent) {
          
          let pos = blob.center;
          let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
          let dist = Math.sqrt((diff.x * diff.x) + (diff.y * diff.y));
          let angle = 0;
          
          blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };
          
          if(dist < blob.radius && hover === false) {
            let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
            angle = Math.atan2(vector.y, vector.x);
            hover = true;
            // blob.color = '#77FF00';
          } else if(dist > blob.radius && hover === true){ 
            let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
            angle = Math.atan2(vector.y, vector.x);
            hover = false;
            // Not sure
            //blob.color = null; 
          }
          
          if(angle !== 0) {
            
            let nearestPoint: Point | null = null;
            let distanceFromPoint = 900;
            
            blob.points.forEach((point)=> {
              if(Math.abs(angle - point.azimuth) < distanceFromPoint) {
                // console.log(point.azimuth, angle, distanceFromPoint);
                nearestPoint = point;
                distanceFromPoint = Math.abs(angle - point.azimuth);
              }
              
            });
            
            if(nearestPoint) {
              let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
              let sqrtStrength = Math.sqrt((strength.x * strength.x) + (strength.y * strength.y)) * 5;
              if(sqrtStrength > 900) sqrtStrength = 900;
              (nearestPoint as Point).acceleration = sqrtStrength / 900 * (hover ? -1 : 1);
            }
          }
          
          oldMousePoint.x = e.clientX;
          oldMousePoint.y = e.clientY;
        }
        // window.addEventListener('mousemove', mouseMove);
        window.addEventListener('pointermove', mouseMove);
        blob.canvas = canvas;
        blob.init();
        blob.render();
    })

    return (
      <div 
        className={
          `canvas
          ${getClassName(path)}`
        }
        id="blob"
        ref={ref}>
      </div>
    )
}

export default Canvas;