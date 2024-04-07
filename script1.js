function createFirework() {
    const colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.background = color;
    document.body.appendChild(firework);
  
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
  
    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
  
  setInterval(createFirework, 200);
  