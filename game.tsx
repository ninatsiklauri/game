import * as PIXI from "pixi.js"

const turnText = document.getElementById("turn") as HTMLParagraphElement


const width: number = 600;
const height: number = 600;
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




const boardSize = 450;

const firstLinePos = 150;
const secondLinePos = 300;


const graphics = new PIXI.Graphics();
graphics.lineStyle(1, "white");
graphics.moveTo(firstLinePos, 0);
graphics.lineTo(firstLinePos, boardSize);
graphics.moveTo(secondLinePos, 0);
graphics.lineTo(secondLinePos, boardSize);
graphics.moveTo(0, firstLinePos);
graphics.lineTo(boardSize, firstLinePos);
graphics.moveTo(0, secondLinePos);
graphics.lineTo(boardSize, secondLinePos);
graphics.x = (app.renderer.width - graphics.width) / 2;
graphics.y = (app.renderer.height - graphics.height) / 2;

const square = new PIXI.Graphics();
square.beginFill("rgba(33, 33, 32, 0.5)");
square.lineStyle(1, "white");
square.drawRect(0, 0, boardSize, boardSize);
square.x = (app.renderer.width - square.width) / 2;
square.y = (app.renderer.height - square.height) / 2;

app.stage.addChild(square);
app.stage.addChild(graphics);


const pieceSize:number = 80;
const xPiece:PIXI.Graphics = new PIXI.Graphics();
xPiece.lineStyle(1, 0xff0000);
xPiece.moveTo(pieceSize/4, pieceSize/4);
xPiece.lineTo(pieceSize*3/4, pieceSize*3/4);
xPiece.moveTo(pieceSize*3/4, pieceSize/4);
xPiece.lineTo(pieceSize / 4, pieceSize * 3/4);



const oPiece:PIXI.Graphics = new PIXI.Graphics();
oPiece.lineStyle(1, 0x0000ff);
oPiece.drawCircle(pieceSize/2, pieceSize/2, pieceSize/4);
xPiece.x = (app.renderer.width - graphics.width) / 2;
xPiece.y = (app.renderer.height - graphics.height) / 2;
oPiece.x = (app.renderer.width - graphics.width) / 2;
oPiece.y = (app.renderer.height - graphics.height) / 2;



let nextPiece:PIXI.Graphics = xPiece;
let shapes: PIXI.Graphics[] = []
let coordinates: { row: number, col: number, shape: PIXI.DisplayObject }[] = [];

function handleClick(event: any) {
    const x = event instanceof MouseEvent ? event.clientX - app.view.offsetLeft : event.touches[0].clientX - app.view.offsetLeft;
    const y = event instanceof MouseEvent ? event.clientY - app.view.offsetTop : event.touches[0].clientY - app.view.offsetTop;

    if (
        x >= square.x &&
        x <= square.x + square.width &&
        y >= square.y &&
        y <= square.y + square.height
    ) {
        const row = Math.floor((y - square.y) / firstLinePos);
        const col = Math.floor((x - square.x) / firstLinePos);

        let cubesCenter = 150;

        const existingShape = app.stage.children.find(
            (child) =>
                child.x === col * firstLinePos + cubesCenter - pieceSize / 2 &&
                child.y === row * firstLinePos + cubesCenter - pieceSize / 2
        );

        if (existingShape) {
            return;
        }

        const piece = nextPiece.clone();
        if (row !== col || row === col) {
            piece.position.set(
                col * firstLinePos + cubesCenter - pieceSize / 2,
                row * firstLinePos + cubesCenter - pieceSize / 2
            );
            app.stage.addChild(piece);
        }

        coordinates.push({ row, col, shape: piece }); 
        shapes.push(piece);
        getTurnInfo();
        getWinner();
    }
}

app.view.addEventListener('mousedown', handleClick);
app.view.addEventListener('touchstart', handleClick);

function getTurnInfo() {
    nextPiece = nextPiece === xPiece ? oPiece : xPiece;
    turnText.innerHTML = `turn: ${nextPiece === xPiece ? "X" : "0"}`;
}

function getWinner() {
    coordinates.forEach(el => {
        console.log(el);
    })
}

const restartBtn = document.getElementById("restart-btn") as HTMLButtonElement;

function restartGame() {
    turnText.innerHTML = `turn: X`;
    nextPiece = xPiece;
    shapes.forEach(el => {
        el.destroy();
    });
    shapes = [];
    coordinates = [];
}



restartBtn.addEventListener("click", () => {
  restartGame()
})



document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement;
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        window.location.replace("index.html");
      });
    } 
});