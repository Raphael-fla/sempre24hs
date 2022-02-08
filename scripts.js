$( document ).ready(function() {
    
    // Progress bar
    
    let containerA = document.getElementById("circleA");
    
    
    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#FFF',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},
    
        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
    
          var value = Math.round(circle.value() * 460);
        
        circle.setText(value);
    
        }
    
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#FFF',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 754);
            
            circle.setText(value);

        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#FFF',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 396);
            
            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#FFF',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 1254);
            
            circle.setText(value);

        }
    });

    // Iniciando o loader quando o usuario chega no elemento

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;
    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();
        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
        
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
        }
    });

    // Parallax

    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/imagemfundoseguro.jpg'});
        $('#apply-area').parallax({imageSrc: 'img/pattern1.png'});

    }, 250);

});


