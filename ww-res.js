const frame = document.querySelector('.frame');

window.addEventListener('wheel', (evt) => {
    if (evt.deltaY !== 0) {
        evt.preventDefault();
        frame.scrollLeft += evt.deltaY*2;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const charBox = document.querySelector('.jianxin');
    const nameCard = document.querySelector('.jianxin-namecard');
    
    charBox.addEventListener('mouseenter', function() {
        nameCard.style.transform = 'translateY(60%)';
    });
    
    charBox.addEventListener('mouseleave', function() {
        nameCard.style.transform = 'translateY(100%)';
    });
    

    const charBox1 = document.querySelector('.yinlin');
    const nameCard1 = document.querySelector('.yinlin-namecard');

    charBox1.addEventListener('mouseenter', function() {
        nameCard1.style.transform = 'translateY(40%)';
    });

    charBox1.addEventListener('mouseleave', function() {
        nameCard1.style.transform = 'translateY(100%)';
    });


    const charBox2 = document.querySelector('.jiyan');
    const nameCard2 = document.querySelector('.jiyan-namecard');

    charBox2.addEventListener('mouseenter', function() {
        nameCard2.style.transform = 'translateY(40%)';
    });

    charBox2.addEventListener('mouseleave', function() {
        nameCard2.style.transform = 'translateY(100%)';
    });


    const charBox3 = document.querySelector('.calcharo');
    const nameCard3 = document.querySelector('.calcharo-namecard');

    charBox3.addEventListener('mouseenter', function() {
        nameCard3.style.transform = 'translateY(40%)';
    });

    charBox3.addEventListener('mouseleave', function() {
        nameCard3.style.transform = 'translateY(100%)';
    });

    const charBox4 = document.querySelector('.sanhua');
    const nameCard4 = document.querySelector('.sanhua-namecard');

    charBox4.addEventListener('mouseenter', function() {
        nameCard4.style.transform = 'translateY(40%)';
    });

    charBox4.addEventListener('mouseleave', function() {
        nameCard4.style.transform = 'translateY(100%)';
    });


    const charBox5 = document.querySelector('.danjin');
    const nameCard5 = document.querySelector('.danjin-namecard');

    charBox5.addEventListener('mouseenter', function() {
        nameCard5.style.transform = 'translateY(40%)';
    });

    charBox5.addEventListener('mouseleave', function() {
        nameCard5.style.transform = 'translateY(100%)';
    });

    const charBox6 = document.querySelector('.mortefi');
    const nameCard6 = document.querySelector('.mortefi-namecard');

    charBox6.addEventListener('mouseenter', function() {
        nameCard6.style.transform = 'translateY(40%)';
    });

    charBox6.addEventListener('mouseleave', function() {
        nameCard6.style.transform = 'translateY(100%)';
    });
    

    const charBox7 = document.querySelector('.lingyang');
    const nameCard7 = document.querySelector('.lingyang-namecard');

    charBox7.addEventListener('mouseenter', function() {
        nameCard7.style.transform = 'translateY(40%)';
    });

    charBox7.addEventListener('mouseleave', function() {
        nameCard7.style.transform = 'translateY(100%)';
    });


    const charBox8 = document.querySelector('.baizhi');
    const nameCard8 = document.querySelector('.baizhi-namecard');

    charBox8.addEventListener('mouseenter', function() {
        nameCard8.style.transform = 'translateY(40%)';
    });

    charBox8.addEventListener('mouseleave', function() {
        nameCard8.style.transform = 'translateY(100%)';
    });


    const charBox9 = document.querySelector('.yangyang');
    const nameCard9 = document.querySelector('.yangyang-namecard');

    charBox9.addEventListener('mouseenter', function() {
        nameCard9.style.transform = 'translateY(40%)';
    });

    charBox9.addEventListener('mouseleave', function() {
        nameCard9.style.transform = 'translateY(100%)';
    });


    const charBox10 = document.querySelector('.chixia');
    const nameCard10 = document.querySelector('.chixia-namecard');

    charBox10.addEventListener('mouseenter', function() {
        nameCard10.style.transform = 'translateY(40%)';
    });

    charBox10.addEventListener('mouseleave', function() {
        nameCard10.style.transform = 'translateY(100%)';
    });
});
