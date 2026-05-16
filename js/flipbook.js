(function () {
  var base = 'https://cdn.dhl-expresss.com/p_ideas/dark_tower/Dark%20Tower%20(USA)%20(Proto)_';
  var frames = [
    '002','003','004','005','006','007','008','009','010',
    '011','012','013','014','015','016','017','018','019',
    '020','021','022','024','025','026','027','028','029'
  ];
  var img = document.getElementById('flipbook');
  var i = 0;
  setInterval(function () {
    i = (i + 1) % frames.length;
    img.src = base + frames[i] + '.png';
  }, 80);
})();

(function () {
  var base2 = 'https://cdn.dhl-expresss.com/p_ideas/msdos/';
  var img2 = document.getElementById('flipbook2');
  var i2 = 1;
  setInterval(function () {
    i2 = (i2 % 31) + 1;
    img2.src = base2 + i2 + '.png';
  }, 150);
})();
