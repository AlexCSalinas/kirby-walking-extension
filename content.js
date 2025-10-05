// Create the character element
const character = document.createElement('div');

const frameWidth = 60;        
const frameHeight = 60;       
const totalFrames = 10;       
const rowOffset = -60;
const problemFrame = 8;
const frameAdjustment = 5;

character.style.position = 'fixed';
character.style.width = frameWidth + 'px';
character.style.height = frameHeight + 'px';
character.style.zIndex = '999999';
character.style.pointerEvents = 'none';
character.style.backgroundImage = 'url(' + chrome.runtime.getURL('kirby-sprites.png') + ')';
character.style.backgroundSize = '600px 485px';
character.style.backgroundRepeat = 'no-repeat';
character.style.imageRendering = 'pixelated';
character.style.overflow = 'hidden';

document.body.appendChild(character);

// Animation variables
let x = -frameWidth; // Start off-screen
const speed = 1.5;
const bottomOffset = 0;
const pixelsPerFrame = 15;

// Random appearance settings
let isWalking = false;
let waitTime = 0;
const minWaitTime = 10000; // Minimum wait time in milliseconds (10 seconds)
const maxWaitTime = 500000; // Maximum wait time in milliseconds (500 seconds)

function getRandomWaitTime() {
  return Math.random() * (maxWaitTime - minWaitTime) + minWaitTime;
}

function startWalking() {
  isWalking = true;
  x = -frameWidth; // Start from left edge
  character.style.opacity = '1';
}

function stopWalking() {
  isWalking = false;
  character.style.opacity = '0';
  waitTime = Date.now() + getRandomWaitTime();
}

// Start with a random wait
stopWalking();

function animate() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Check if we should start walking
  if (!isWalking && Date.now() >= waitTime) {
    startWalking();
  }
  
  // Only move if walking
  if (isWalking) {
    x += speed;
    
    // If Kirby reaches the right edge, hide and wait
    if (x > screenWidth) {
      stopWalking();
    }
  }
  
  const y = screenHeight - frameHeight - bottomOffset;
  
  // Calculate which frame to show based on position
  const currentFrame = Math.floor(x / pixelsPerFrame) % totalFrames;
  let frameX = -(currentFrame * frameWidth);
  
  // Adjust the problematic frame
  if (currentFrame === 8 || currentFrame === 9) {
    frameX += frameAdjustment;
    character.style.left = (x + frameAdjustment) + 'px'; 
  } else{
    character.style.left = x + 'px';
  }
  character.style.top = y + 'px';
  character.style.backgroundPosition = `${frameX}px ${rowOffset}px`;
  
  requestAnimationFrame(animate);
}

animate();