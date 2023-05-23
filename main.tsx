// import * as PIXI from "pixi.js";

// const rectBtn = document.getElementById("rectBtn") as HTMLButtonElement;
// const circleBtn = document.getElementById("circleBtn") as HTMLButtonElement;
// const selectBtn = document.getElementById("select") as HTMLButtonElement
// const icons = document.querySelectorAll("i")



// const app = new PIXI.Application<HTMLCanvasElement>({
//   width: 600,
//   height: 600,
//   backgroundColor: "#aaa"
// });


// document.body.appendChild(app.view);


// interface Shape {
//   height?: number;
//   width?: number;
//   y: number;
//   x: number;
//   color: string;
//   shape: PIXI.Graphics;
//   radius?:number;
//   draw(): void;
//   selectShape(): void;
//   moveRight():void;
//   moveLeft():void;
//   moveDown():void;
//   moveUp():void;
// }


// enum ShapeTypes {
//   rect = 1,
//   circle = 2
// }


// const shapes: Shape[] = [];
// let selectedShape: Shape | null = null


// class Rectangle implements Shape {
//   shape: PIXI.Graphics;

//   constructor(
//     public x: number,
//     public y: number,
//     public width: number,
//     public height: number,
//     public color: string,
//   ) {
//     this.shape = new PIXI.Graphics()
//     this.shape.beginFill(this.color)
//       .lineStyle(2)
//       .drawRect(this.x, this.y, this.width, this.height)
//       .endFill()
//   }

//   draw(): void {
//     app.stage.addChild(this.shape);
//   }

//   selectShape(): void {
//     this.shape.interactive = true;
//     this.shape.on('click', () => {
//       selectedShape = this
//     });
//   }

//   moveUp() {
//     this.shape.y -= 10;
//   }

//   moveDown() {
//     this.shape.y += 10;
//   }

//   moveLeft() {
//     this.shape.x -= 10;
//   }

//   moveRight() {
//     this.shape.x += 10;
//   }
// }



// class Circle implements Shape {
//   shape: PIXI.Graphics;

//   constructor(
//     public x: number,
//     public y: number,
//     public radius: number,
//     public color: string,
//   ){
//     this.shape = new PIXI.Graphics()
//     this.shape.beginFill(this.color)
//       .lineStyle(2)
//       .drawCircle(this.x, this.y, this.radius)
//       .endFill()
//   }

//   draw(): void {
//     app.stage.addChild(this.shape);
//   }

//   selectShape(): void {
//     this.shape.interactive = true;
//     this.shape.on('click', () => {
//       selectedShape = this;
//     });
//   }


//   moveUp() {
//     this.shape.y -= 10;
//   }

//   moveDown() {
//     this.shape.y += 10;
//   }

//   moveLeft() {
//     this.shape.x -= 10;
//   }

//   moveRight() {
//     this.shape.x += 10;
//   }
// }



// function generateRandomShape (shapeType: ShapeTypes):Shape {
//   let shape: Shape;
//   const randomX = (Math.floor(Math.random() * 600));
//   const randomY =( Math.floor(Math.random() * 600));
//   const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  
//   switch(shapeType){
//     case ShapeTypes.rect:
//         const randomWidth = Math.floor(Math.random() * 50) + 50;
//         const randomHeight = Math.floor(Math.random() * 50) + 50;
//         shape = new Rectangle(randomX,randomY,randomWidth,randomHeight,randomColor)
//       break;
//     case ShapeTypes.circle:
//         const randomRadius = Math.floor(Math.random() * 50) + 25;
//         shape = new Circle(randomX,randomY,randomRadius,randomColor)
//       break;
//       default:
//         throw new Error()
//   }
//   return shape
// }

// function drawRandomShape(shapeType: ShapeTypes) {
//   const newShape = generateRandomShape(shapeType);
//   shapes.push(newShape);
  
//   shapes.forEach((shape) => {
//     shape.shape.removeAllListeners('click');
//   });

//   newShape.selectShape();
//   selectedShape = newShape;

//   shapes.forEach((shape) => {
//     shape.draw();
//   });
// }

// function startMoveShape() {

// }


// icons.forEach((icon) => {
//   icon.addEventListener("mousedown", () => {
//     if (selectedShape !== null) {
//       switch (icon.classList[1]) {
//         case "fa-arrow-up":
//           selectedShape.moveUp();
//           break;
//         case "fa-arrow-down":
//           selectedShape.moveDown();
//           break;
//         case "fa-arrow-left":
//           selectedShape.moveLeft();
//           break;
//         case "fa-arrow-right":
//           selectedShape.moveRight();
//           break;
//       };
//     };
//   });
// });



// document.addEventListener("keydown", (event:any) => {
//   if (
//     event.code === "ArrowUp"
//   ) {
//     if(selectedShape !== null) {
//       selectedShape.moveUp()
//     }
//   };
//   if (
//     event.code === "ArrowDown"
//   ) {
//     if(selectedShape !== null) {
//       selectedShape.moveDown()
//     }
//   };
//   if (
//     event.code === "ArrowLeft"
//   ) {
//     if(selectedShape !== null) {
//       selectedShape.moveLeft()
//     }
//   };
//   if (
//     event.code === "ArrowRight"
//   ) {
//     if(selectedShape !== null) {
//       selectedShape.moveRight()
//     }
//   }
// })


// selectBtn.addEventListener("click", () => {
//   shapes.forEach(item => {
//     item.selectShape()
//   })
// });


// rectBtn.addEventListener("click", () => {
//   drawRandomShape(ShapeTypes.rect);
// });


// circleBtn.addEventListener("click", () => {
//   drawRandomShape(ShapeTypes.circle);
// });



// import * as PIXI from "pixi.js"
// const turn = document.getElementById("turn") as HTMLParagraphElement
// const winner = document.getElementById("winner") as HTMLParagraphElement
// const restartBtn = document.getElementById("restart") as HTMLButtonElement
// const playerBtns = document.querySelectorAll("button")
// const player = document.getElementById("player") as HTMLParagraphElement


// let pixiWidht:number = 450;
// let pixiHeight:number = 450;

// const app = new PIXI.Application<HTMLCanvasElement>({
//   width: pixiWidht,
//   height: pixiHeight,
//   background: "white",
// });


// document.body.appendChild(app.view);


// let firstLinePos:number = 150;
// let seconLinePos:number = 300;


// const graphics = new PIXI.Graphics();
// graphics.lineStyle(2);
// graphics.moveTo(firstLinePos, 0);
// graphics.lineTo(firstLinePos, pixiWidht);
// graphics.moveTo(seconLinePos, 0);
// graphics.lineTo(seconLinePos, pixiWidht);
// graphics.moveTo(0, firstLinePos);
// graphics.lineTo(pixiWidht, firstLinePos);
// graphics.moveTo(0, seconLinePos);
// graphics.lineTo(pixiWidht, seconLinePos);


// const square = new PIXI.Graphics();
// square.lineStyle(4);
// square.drawRect(0, 0, pixiWidht, pixiHeight);
// app.stage.addChild(square); 
// app.stage.addChild(graphics);



// const pieceSize:number = 80;
// const xPiece:PIXI.Graphics = new PIXI.Graphics();
// xPiece.lineStyle(2, 0xff0000);
// xPiece.moveTo(pieceSize/4, pieceSize/4);
// xPiece.lineTo(pieceSize*3/4, pieceSize*3/4);
// xPiece.moveTo(pieceSize*3/4, pieceSize/4);
// xPiece.lineTo(pieceSize / 4, pieceSize * 3/4);


// const oPiece:PIXI.Graphics = new PIXI.Graphics();
// oPiece.lineStyle(2, 0x0000ff);
// oPiece.drawCircle(pieceSize/2, pieceSize/2, pieceSize/4);


// let nextPiece:PIXI.Graphics = xPiece;
// let players:string = ""


// function choosePlayer ():typeof players {
//   playerBtns.forEach(btn => {
//     btn.addEventListener("click", ()=> {
//       if(btn.value === "X"){
//         players = btn.value
//         // playerBtns.forEach(btns => {
//         //   btns.style.display = "none"
//         // })
//       }else{
//         // playerBtns.forEach(btns => {
//         //   btns.style.display = "none"
//         // })
//         players = btn.value
//       }
//       player.innerHTML = `you are player: ${players}`
//     })
//   })
//   return players
// }


// choosePlayer()


// app.renderer.view.addEventListener('mousedown', handleClick);
// app.renderer.view.addEventListener('touchstart', handleClick);


// function getTurnInfo() {
//   nextPiece = nextPiece === xPiece ? oPiece : xPiece;  
//   turn.innerHTML = `turn: ${nextPiece === xPiece ? "X" : "O"}`;
// }


// let shapes: PIXI.Graphics[] = []


// function handleClick(event: MouseEvent | TouchEvent) {
//   const x = event instanceof MouseEvent ? event.clientX - app.view.offsetLeft : event.touches[0].clientX - app.view.offsetLeft;
//   const y = event instanceof MouseEvent ? event.clientY - app.view.offsetTop : event.touches[0].clientY - app.view.offsetTop;


//   const row = Math.floor(y / firstLinePos);
//   const col = Math.floor(x / firstLinePos);
  

//   let cubesCenter:number = 75

//   const existingShape = app.stage.children.find(
//     (child) => child.x === col * firstLinePos + cubesCenter - pieceSize / 2 && child.y === row * firstLinePos + cubesCenter - pieceSize / 2
//   );


//   if (existingShape) {
//     return;
//   }

//   const piece = nextPiece.clone(); 
//   if (row !== col || row === col) {
//     piece.position.set(col * firstLinePos + cubesCenter - pieceSize / 2, row * firstLinePos + cubesCenter - pieceSize / 2);
//     app.stage.addChild(piece);
//     getTurnInfo()
//     getWinner ()
//   }
//   shapes.push(piece)
// }



// let boardSize: number = 3;
// let board: PIXI.Graphics[][] = [[]]



// function getWinner() {
//   for (let row = 0; row < boardSize; row++) {
    
//   }

//   for(let col = 0; col < boardSize; col++) {
    
//   }
// }


// function restartGame() {
//   player.innerHTML = `you are player: `
//   turn.innerHTML = `turn: X`
//   nextPiece = xPiece
//   shapes.forEach(el => {
//     el.destroy()
//   })
//   shapes = []
// }


// restartBtn.addEventListener("click", () => {
//   restartGame()
// })



import * as PIXI from "pixi.js"



const width: number = innerWidth;
const height: number = innerHeight;
const background: string = "#000"


document.body.style.overflow = "hidden"
document.documentElement.style.overflow = "hidden"


const app = new PIXI.Application<HTMLCanvasElement>({
    width: width,
    height: height,
    background: background,
})

document.body.appendChild(app.view)


const loopTime: number = 3000;
const circles: PIXI.Graphics[] = [];


for (let i = 0; i < loopTime; i++) {
  const randomColor: string = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const randomX: number = Math.floor(Math.random() * width);
  const randomY: number = Math.floor(Math.random() * height);
  const randomRadius: number = Math.floor(Math.random() * 4);

  const circle: PIXI.Graphics = new PIXI.Graphics();

  circle.beginFill(randomColor)
    .drawCircle(randomX, randomY, randomRadius)
    .endFill();
    
  circles.push(circle);
  app.stage.addChild(circle);
}



const moveSpeed = 0.3;

app.ticker.add(() => {
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        circle.x += Math.random() * moveSpeed * 2 - moveSpeed; 
        circle.y += Math.random() * moveSpeed * 2 - moveSpeed; 
    }
});




document.addEventListener("DOMContentLoaded", () => {
  const playerX = document.getElementById("playerX") as HTMLButtonElement;
  const player0 = document.getElementById("player0") as HTMLButtonElement
  if (playerX) {
    playerX.addEventListener("click", () => {
      window.location.replace("game.html");
    });
  }
  if(player0){
    player0.addEventListener("click", () => {
        window.location.replace("game.html")
      })
}
  const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement;
  const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      window.location.replace("index.html");
    });
  } else if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.replace("player.html");
    });
  }
});
