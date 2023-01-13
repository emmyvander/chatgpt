// Declare variables for the number of dots, and their position and velocity.
let numDots = 100;
let dotPositions = [];
let dotVelocities = [];

// Create a setup function to create the dots and set their initial positions and velocities.
function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < numDots; i++) {
        dotPositions.push([random(width), random(height)]);
        dotVelocities.push([random(-5, 5), random(-5, 5)]);
    }
}

// Create a draw function to update the positions of the dots and display them on the canvas.
function draw() {
    background(255);
    for (let i = 0; i < numDots; i++) {
        let dot = dotPositions[i];
        let velocity = dotVelocities[i];

        // Update the dot's position based on its velocity
        dot[0] += velocity[0];
        dot[1] += velocity[1];

        // Check if the dot has gone off the edge of the canvas and change its velocity if it has
        if (dot[0] > width || dot[0] < 0) {
            velocity[0] = -velocity[0];
        }
        if (dot[1] > height || dot[1] < 0) {
            velocity[1] = -velocity[1];
        }
        // Draw the dot at its new position
        fill(0);
        ellipse(dot[0], dot[1], 10, 10);
    }
}
