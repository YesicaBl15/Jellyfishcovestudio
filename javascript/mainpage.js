const images = [];
const directions = [];
const speedsX = [];
const speedsY = [];
const rotationAngles = [];
const shouldRotate = [false, true, false, true, false]; // choose 2 to rotate

for (let i = 0; i < 5; i++) {
  const img = document.getElementById('img' + i);
  img.style.left = `${Math.random() * window.innerWidth}px`;
  img.style.top = `${window.innerHeight}px`;
  images.push(img);
  directions.push(Math.random() < 0.5 ? -1 : 1);
  speedsX.push(1 + Math.random() * 2);
  speedsY.push(0.5 + Math.random() * 1);
  rotationAngles.push(Math.random() * 360); // random starting angle
}

function moveImages() {
  images.forEach((img, index) => {
    let left = parseFloat(img.style.left);
    let top = parseFloat(img.style.top);

    // Bounce horizontally
    if (left <= 0 || left >= window.innerWidth - 50) {
      directions[index] *= -1;
    }

    left += directions[index] * speedsX[index];
    top -= speedsY[index];

    // Reset to bottom if it floats off top
    if (top < -50) {
      top = window.innerHeight;
    }

    // Handle rotation
    if (shouldRotate[index]) {
      rotationAngles[index] += 2; // rotate by 2 degrees each frame
      img.style.transform = `rotate(${rotationAngles[index]}deg)`;
    }

    img.style.left = `${left}px`;
    img.style.top = `${top}px`;
  });

  requestAnimationFrame(moveImages);
}

moveImages();
