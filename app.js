const context = cv.getContext("2d");
const bird = new Image();
bird.src = "bird.png";
birdX = birdDY = score = bestScore = 0;
interval = birdSize = pipeWidth = pipeGapBottomY = 24;
birdY = pipeGap =70;
canvasSize = pipeX = 400;

cv.onclick = () => (birdDY = 7);

setInterval(() => {
    context.fillStyle = "skyBlue";
    context.fillRect(0,0,canvasSize,canvasSize); // draw sky
    birdY -= birdDY -= .5; //Gravity
    context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize); //draw bird
    context.fillStyle = "green";
    pipeX -= 8;
    pipeX < -pipeWidth && 
    ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));

    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); //draw top pipe
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); //draw bottom pipe
    context.fillStyle = "black";
    context.fillText(score++, 9, 25);
    bestScore = bestScore < score ? score : bestScore;
    context.fillText(`Best: ${bestScore}`, 9, 50);

    (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) //bird hit pipe
    && pipeX < birdSize * (524/374)) || birdY > canvasSize) && //bird falls off screen
    ((birdDY = 0), (birdY = 70), (pipeX = canvasSize), (score = 0)); //bird died
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("bestScore").innerHTML = bestScore;
}, interval);
