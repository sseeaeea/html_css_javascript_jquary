$(function () {
  const gameArea = $("#gameArea");
  const paddle1 = $("#paddle1"); // Player 1 (아래)
  const paddle2 = $("#paddle2"); // Player 2 (위)
  const ball = $("#ball");

  let ballX = 3;
  let ballY = 3;

  let paddleSpeed = 20;
  let p1Score = 0;
  let p2Score = 0;

  function updateScore() {
    $("#player1Score").text("Player 1: " + p1Score);
    $("#player2Score").text("Player 2: " + p2Score);
  }

  $(document).keydown(function (e) {
    let p1Left = paddle1.position().left;
    let p2Left = paddle2.position().left;

    // Player 1: A, D
    if (e.key === "a" || e.key === "A") {
      if (p1Left > 0) paddle1.css("left", p1Left - paddleSpeed);
    } else if (e.key === "d" || e.key === "D") {
      if (p1Left < gameArea.width() - paddle1.width())
        paddle1.css("left", p1Left + paddleSpeed);
    }

    // Player 2: ←, →
    if (e.key === "ArrowLeft") {
      if (p2Left > 0) paddle2.css("left", p2Left - paddleSpeed);
    } else if (e.key === "ArrowRight") {
      if (p2Left < gameArea.width() - paddle2.width())
        paddle2.css("left", p2Left + paddleSpeed);
    }
  });

  function resetBall() {
    ball.css({ left: 292, top: 192 });
    ballX = 3 * (Math.random() > 0.5 ? 1 : -1);
    ballY = 3 * (Math.random() > 0.5 ? 1 : -1);
  }

  function moveBall() {
    let ballPos = ball.position();
    let newX = ballPos.left + ballX;
    let newY = ballPos.top + ballY;

    // 좌우 벽 반사
    if (newX <= 0 || newX >= gameArea.width() - ball.width()) ballX *= -1;

    // Player 1 충돌
    let p1 = paddle1.position();
    if (
      newY + ball.height() >= p1.top &&
      newX + ball.width() >= p1.left &&
      newX <= p1.left + paddle1.width()
    ) {
      ballY *= -1;
    }

    // Player 2 충돌
    let p2 = paddle2.position();
    if (
      newY <= p2.top + paddle2.height() &&
      newX + ball.width() >= p2.left &&
      newX <= p2.left + paddle2.width()
    ) {
      ballY *= -1;
    }

    // 아래쪽 벽 → Player 2 득점
    if (newY >= gameArea.height()) {
      p2Score++;
      updateScore();
      resetBall();
    }

    // 위쪽 벽 → Player 1 득점
    if (newY <= 0) {
      p1Score++;
      updateScore();
      resetBall();
    }

    ball.css({ top: newY, left: newX });
  }

  updateScore();
  setInterval(moveBall, 10);
});
