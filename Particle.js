class Particle {
    constructor(x, y, x0, y0) {
        // Kinematics properties
        this.pos = new p5.Vector(x, y);
        this.vel = new p5.Vector(0, 0);
        this.acc = new p5.Vector(0, 0);
        this.mass = 1;

        // Attract and repel
        this.desire = new p5.Vector(x0, y0);

        // Render properties
        this.r = 10;
        this.color = random(colorPallet.slice(1));
    }

    draw() {
        noStroke();
        fill(this.color);
        circle(this.pos.x, this.pos.y, this.r);
    }

    applyForce(x, y) {
        let force = new p5.Vector(x, y);
        this.acc = force.div(this.mass);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    update(moX, moY) {
        let mousePos = createVector(moX, moY);

        let force1 = new p5.Vector(0, 0);
        if (p5.Vector.dist(this.pos, mousePos) < 200) {
            let d = constrain(p5.Vector.dist(this.pos, mousePos), 10, 10000);
            force1 = p5.Vector.sub(this.pos, mousePos).normalize().div(d).mult(100.0);
        }

        let force2 = p5.Vector.sub(this.pos, this.desire).mult(-0.01);
        let force3 = p5.Vector.mult(this.vel, -0.1);
        let force = p5.Vector.add(force1, force2);
        force = force.add(force3);

        this.r = constrain(0.0005 * (p5.Vector.dist(this.desire, this.pos)) ** 2 + 10, 10, 30);

        this.applyForce(force.x, force.y);
        this.draw();
    }
}