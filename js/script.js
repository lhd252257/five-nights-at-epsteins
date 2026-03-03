document.addEventListener('DOMContentLoaded', function() {
    const gameFrame = document.getElementById('game-frame');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');


    const overlay = document.getElementById('game-overlay');
    const playBtn = document.getElementById('play-btn');

    // Only add event listeners if elements exist
    if (playBtn && overlay && gameFrame) {
        playBtn.addEventListener('click', function() {
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            gameFrame.style.opacity = '1';
            // 这里可以添加用户行为数据收集的代码
            console.log('User clicked play button');
        });

        // 添加平滑过渡效果
        overlay.style.transition = 'opacity 0.5s ease';
        gameFrame.style.transition = 'opacity 0.5s ease';
        gameFrame.style.opacity = '0'; // 初始时隐藏游戏框架
    }

    // Only add event listener if menuToggle exists
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log('Menu toggle clicked, nav links toggled');
        });
    }
    
    fullscreenBtn.addEventListener('click', function() {
        if (gameFrame.requestFullscreen) {
            gameFrame.requestFullscreen();
        } else if (gameFrame.mozRequestFullScreen) { // Firefox
            gameFrame.mozRequestFullScreen();
        } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari and Opera
            gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.msRequestFullscreen) { // IE/Edge
            gameFrame.msRequestFullscreen();
        }
    });

    const navButtons = document.querySelectorAll('.nav-links .btn');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.filter = 'brightness(1.2)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.filter = 'brightness(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
});