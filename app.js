
const rektGumballRightEye = document.getElementById('gumballRightEye').getBoundingClientRect();
const rektGumballLeftEye = document.getElementById('gumballLeftEye').getBoundingClientRect();
const rektDarwinRightEye = document.getElementById('darwinRightEye').getBoundingClientRect();
const rektDarwinLeftEye = document.getElementById('darwinLeftEye').getBoundingClientRect();

const gumballAnchorX = anchorPointX(rektGumballRightEye, rektGumballLeftEye);
const gumballAnchorY = anchorPointY(rektGumballRightEye);
const darwinAnchorX = anchorPointX(rektDarwinRightEye, rektDarwinLeftEye);
const darwinAnchorY = anchorPointY(rektDarwinLeftEye);

document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDegGumball = angle(mouseX, mouseY, gumballAnchorX, gumballAnchorY);
    const angleDegDarwin = angle(mouseX, mouseY, darwinAnchorX, darwinAnchorY);

    console.log(angleDegDarwin, angleDegGumball);

    const gumballEyes = document.querySelectorAll('.gumball')
    gumballEyes.forEach(eye => {
        eye.style.transform = `rotate(${-90 + angleDegGumball}deg)`;
    })

    const darwinEyes = document.querySelectorAll('.darwin')
    darwinEyes.forEach(eye => {
        eye.style.transform = `rotate(${-90 + angleDegDarwin}deg)`;
    })

})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg;
}

function anchorPointX(rektRight, rektLeft) {
    let anchorX = (rektRight.left + rektLeft.right) / 2;
    return anchorX;
}

function anchorPointY(rektLeft) {
    let anchorY = (rektLeft.top + rektLeft.bottom) / 2;
    return anchorY;
}