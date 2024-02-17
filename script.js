
window.onload = function() {
    var image1 = document.querySelector('.titleimg');
    var image2 = document.querySelector('.arrowsimg');
    image2.style.opacity = 0; 
    var opacity1 = 0;
    var intervalID1 = setInterval(function() {
        if (opacity1 < 1) {
            opacity1 = opacity1 + 0.01;
            image1.style.opacity = opacity1;
        } else {
            clearInterval(intervalID1);
            var opacity2 = 0;
            var intervalID2 = setInterval(function() {
                if (opacity2 < 1) {
                    opacity2 = opacity2 + 0.025;
                    image2.style.opacity = opacity2;
                } else {
                    clearInterval(intervalID2);
                    image2.style.transform = 'translateX(-350px)';
                }
            }, 10);
        }
    }, 10);
};
        
document.querySelector('.container').querySelectorAll('.white, .black').forEach(function(div) {
  div.addEventListener('click', function() {
    if (this.classList.contains('white')) {
      this.classList.remove('white');
      this.classList.add('black');
      this.style.background = 'linear-gradient(to bottom, #b5bbf0, #9063b5)';
    } else if (this.classList.contains('black')) {
      this.classList.remove('black');
      this.classList.add('white');
      this.style.background = 'linear-gradient(to top, #b5bbf0, #9063b5)';
    }
  });
});


