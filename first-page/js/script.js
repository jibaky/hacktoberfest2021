window.onload = function() {
    const step = 10;
    let box = document.querySelector('.box');

    box.style.left = 0;
    box.style.top = 0;

    document.querySelector('body').addEventListener('keydown',
        function(e) {
            if (e.key == "ArrowLeft") movLeft();
            else if (e.key == "ArrowUp") movUp();
            else if (e.key == "ArrowRight") movRight();
            else if (e.key == "ArrowDown") movDown();

            if (parseInt(box.style.left, 10) >= 430 || parseInt(box.style.top, 10) >= 430) {
                box.style.left = 0;
                box.style.top = 0;
            }
        }
    )

    function movLeft() {
        let num = parseInt(box.style.left, 10);
        if (num != 0) {
            num -= step
            box.style.left = num + 'px';
        }

    }

    function movUp() {
        let num = parseInt(box.style.top, 10);
        if (num != 0) {
            num -= step
            box.style.top = num + 'px';
        }
    }

    function movRight() {
        let num = parseInt(box.style.left, 10);
        num += step
        box.style.left = num + 'px';
    }

    function movDown() {
        let num = parseInt(box.style.top, 10);
        num += step
        box.style.top = num + 'px';
    }
}