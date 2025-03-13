(function() {
    
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#00FF00';  // Neon green
    overlay.style.zIndex = 9998;  
    overlay.style.opacity = '0';  
    overlay.style.transition = 'opacity 0.1s ease-in-out';  
    document.body.appendChild(overlay);

    
    var gifUrls = [
        'https://i.pinimg.com/originals/3d/b4/ef/3db4efc7212aa4ce72d20434bc9062bd.gif',
        'https://i.pinimg.com/originals/3d/b4/ef/3db4efc7212aa4ce72d20434bc9062bd.gif',
        'https://i.pinimg.com/originals/3d/b4/ef/3db4efc7212aa4ce72d20434bc9062bd.gif'
    ];

   
    function spawnCatGif() {
        var gif = document.createElement('img');
        gif.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];  // Randomly select a GIF
        gif.style.position = 'fixed';
        gif.style.zIndex = 9999;  // Above the overlay
        gif.style.width = '150px';
        gif.style.animation = 'float 3s ease-in-out infinite, spin 1.5s linear infinite, bounce 1s ease-in-out infinite alternate'; // Floating + spinning + bouncing
        gif.style.top = Math.random() * window.innerHeight + 'px';
        gif.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(gif);

       
        setTimeout(() => gif.remove(), 12000);
    }

    // Spawn GIFs even more frequently (every 350ms)
    setInterval(spawnCatGif, 350);

    
    function flashScreen() {
        overlay.style.opacity = '1';  // Show neon green overlay
        setTimeout(() => {
            overlay.style.opacity = '0';  // Hide neon green overlay
        }, 100);  // Faster flashing
    }

    
    setTimeout(() => {
        
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes spin-all {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }

            @keyframes bounce {
                0% { transform: translateX(0px); }
                100% { transform: translateX(10px); }
            }

            body * {
                animation: spin-all 4s linear infinite;
            }
        `));
        document.head.appendChild(style);

        // Trigger screen flash every 1.5 seconds (more chaotic)
        setInterval(flashScreen, 1500);
    }, 3500);  
})();
