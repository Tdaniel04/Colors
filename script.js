function changeBackgroundColor() {
    var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.body.style.backgroundColor = randomColor;
  
    var colorText = document.getElementById('color-text');
    colorText.textContent = 'Color de fondo: ' + randomColor;
  }
  