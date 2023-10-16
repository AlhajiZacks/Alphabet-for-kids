document.querySelector('#a').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/a.jpg';
    document.querySelector('h1').innerHTML = 'A is for APPLE';
    document.querySelector('#change').src = 'img/A.png';         
})

document.querySelector('#b').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/b.jpg';
    document.querySelector('h1').innerHTML = 'B is for BALL';
    document.getElementById('change').src = 'img/B.png';
})

document.querySelector('#c').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/c.jpg';
    document.querySelector('h1').innerHTML = 'C is for CAT';
    document.querySelector('#change').src = 'img/C.png';
    let sound = new Audio('cat.wav');
    sound.play(); 
})

document.querySelector('#d').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/d.jpg';
    document.querySelector('h1').innerHTML = 'D is for Duck';
    document.querySelector('#change').src = 'img/D.png';
    let sound = new Audio('goose.wav');
    sound.play(); 
})

document.querySelector('#e').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/e.jpg';
    document.querySelector('h1').innerHTML = 'E is for ELEPHANT';
    document.querySelector('#change').src = 'img/E.png';
})

document.querySelector('#f').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/f.jpg';
    document.querySelector('h1').innerHTML = 'F is for FISH';
    document.querySelector('#change').src = 'img/F.png';
})

document.querySelector('#g').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/g.jpg';
    document.querySelector('h1').innerHTML = 'G is for GUN';
    document.querySelector('#change').src = 'img/G.png';
})

document.querySelector('#h').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/h.jpg';
    document.querySelector('h1').innerHTML = 'H is for HAT';
    document.querySelector('#change').src = 'img/H.png';
})

document.querySelector('#i').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/i.jpg';
    document.querySelector('h1').innerHTML = 'I is for INK';
    document.querySelector('#change').src = 'img/I.png';
})

document.querySelector('#j').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/j.jpg';
    document.querySelector('h1').innerHTML = 'J is for JAGUAR';
    document.querySelector('#change').src = 'img/J.png';
})

document.querySelector('#k').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/k.jpg';
    document.querySelector('h1').innerHTML = 'K is for KING';
    document.querySelector('#change').src = 'img/K.png';
})

document.querySelector('#l').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/l.jpg';
    document.querySelector('h1').innerHTML = 'L is for LION';
    document.querySelector('#change').src = 'img/L.png';
})

document.querySelector('#m').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/m.jpg';
    document.querySelector('h1').innerHTML = 'M is for MONKEY';
    document.querySelector('#change').src = 'img/M.png';
})

document.querySelector('#n').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/n.jpg';
    document.querySelector('h1').innerHTML = 'N is for NINJA';
    document.querySelector('#change').src = 'img/N.png';
})

document.querySelector('#o').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/o.jpg';
    document.querySelector('h1').innerHTML = 'O is for ORANGE';
    document.querySelector('#change').src = 'img/O.png';
})

document.querySelector('#p').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/p.jpg';
    document.querySelector('h1').innerHTML = 'P is for PARROT';
    document.querySelector('#change').src = 'img/P.png';
})

document.querySelector('#q').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/q.jpg';
    document.querySelector('h1').innerHTML = 'Q is for QUEEN';
    document.querySelector('#change').src = 'img/Q.png';
})

document.querySelector('#r').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/r.jpg';
    document.querySelector('h1').innerHTML = 'R is for RABBIT';
    document.querySelector('#change').src = 'img/R.png';
})

document.querySelector('#s').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/s.jpg';
    document.querySelector('h1').innerHTML = 'S is for SHIP';
    document.querySelector('#change').src = 'img/S.png';
})

document.querySelector('#t').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/t.jpg';
    document.querySelector('h1').innerHTML = 'T is for TIGER';
    document.querySelector('#change').src = 'img/T.png';
})

document.querySelector('#u').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/u.jpg';
    document.querySelector('h1').innerHTML = 'U is for UMBRELLA';
    document.querySelector('#change').src = 'img/U.png';
})

document.querySelector('#v').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/v.jpg';
    document.querySelector('h1').innerHTML = 'V is for VIHICLE';
    document.querySelector('#change').src = 'img/V.png';
    let sound = new Audio('moto.wav');
    sound.play(); 
    
})

document.querySelector('#w').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/w.jpg';
    document.querySelector('h1').innerHTML = 'W is for WIZARD';
    document.querySelector('#change').src = 'img/W.png';
})

document.querySelector('#x').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/x.jpg';
    document.querySelector('h1').innerHTML = 'X is for XYLAPHONE';
    document.querySelector('#change').src = 'img/X.png';
    let sound = new Audio('xylo.wav');
    sound.play(); 
})

document.querySelector('#y').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/y.jpg';
    document.querySelector('h1').innerHTML = 'Y is for YATCH';
    document.querySelector('#change').src = 'img/Y.png';
})

document.querySelector('#z').addEventListener('click', function(){
    document.getElementById('pic-replace').src = 'img/z.jpg';
    document.querySelector('h1').innerHTML = 'Z is for ZEBRA';
    document.querySelector('#change').src = 'img/Z.png';    
})

document.querySelector('.space').addEventListener('click', function(){
    document.querySelector('h1').innerHTML = 'I AM A SPACE';
    document.getElementById('pic-replace').src = 'me.jpg';
    document.querySelector('#change').src = 'img/.png';
    // let sound = new Audio('.wav');
    // sound.play(); 
})


