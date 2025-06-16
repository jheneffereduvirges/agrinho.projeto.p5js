let casas = [];

let vacas = [];

function setup() {

  createCanvas(800, 600);

  

  // Criar casinhas em posições fixas

  casas.push(new Casa(100, 400));

  casas.push(new Casa(300, 350));

  casas.push(new Casa(600, 450));

  

  // Criar vacas em posições aleatórias

  for (let i = 0; i < 5; i++) {

    vacas.push(new Vaca(random(width), random(height)));

  }

}

function draw() {

  background(100, 200, 100); // Verde do campo

  

  // Desenhar as casinhas

  for (let casa of casas) {

    casa.mostrar();

  }

  // Atualizar e desenhar as vacas

  for (let vaca of vacas) {

    vaca.mover();

    vaca.mostrar();

  }

}

// Classe Casa

class Casa {

  constructor(x, y) {

    this.x = x;

    this.y = y;

  }

  mostrar() {

    fill(200, 100, 50);

    rect(this.x, this.y, 60, 60);

    fill(150, 50, 30);

    triangle(this.x - 10, this.y, this.x + 30, this.y - 40, this.x + 70, this.y);

  }

}

// Classe Vaca

class Vaca {

  constructor(x, y) {

    this.x = x;

    this.y = y;

    this.dirX = random(-1, 1);

    this.dirY = random(-1, 1);

  }

  mover() {

    this.x += this.dirX;

    this.y += this.dirY;

    // Limitar à tela

    this.x = constrain(this.x, 0, width);

    this.y = constrain(this.y, 0, height);

  }

  mostrar() {

    fill(255);

    ellipse(this.x, this.y, 40, 30); // Corpo

    fill(0);

    ellipse(this.x - 10, this.y - 10, 10, 10); // Mancha

    ellipse(this.x + 10, this.y - 10, 8, 8);   // Mancha

    fill(255, 182, 193);

    ellipse(this.x + 15, this.y + 10, 10, 10); // Rosto/orelhas

  }

}