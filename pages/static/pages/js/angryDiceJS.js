
var curRound = 'Round 1';
var compRound = 'Round 1';
var start = true;
var lost = 0;
var compTurnTime = 30;
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var d1;
var d2;
var d3;
var d4;

var button = document.getElementById('roll');

var hold1 = document.getElementById('hold1');
var hold2 = document.getElementById('hold2');
var hold3 = document.getElementById('hold3');
var hold4 = document.getElementById('hold4');

var dice1 = {
  sides: 6,
  roll: function () {
    var dice1Rand = Math.floor(Math.random() * this.sides) + 1;
    return dice1Rand;
  }
};
var dice2 = {
  sides: 6,
  roll: function () {
    var dice2Rand = Math.floor(Math.random() * this.sides) + 1;
    return dice2Rand;
  }
};
var dice3 = {
  sides: 6,
  roll: function () {
    var dice3Rand = Math.floor(Math.random() * this.sides) + 1;
    return dice3Rand;
  }
};
var dice4 = {
  sides: 6,
  roll: function () {
    var dice4Rand = Math.floor(Math.random() * this.sides) + 1;
    return dice4Rand;
  }
};


function printNumber(number) {
  d1 = number;
  // console.log(d1);
  var placeholder = document.getElementById('die1');
    placeholder.innerHTML = "<img src=\"/static/pages/img/" + number + ".png\">";

  }
function printNumber2(number) {
  d2 = number;
  var placeholder = document.getElementById('die2');
  placeholder.innerHTML = "<img src=\"/static/pages/img/" + number + ".png\">";
}
function printNumber3(number) {
d3 = number;
// console.log(d1);
var placeholder = document.getElementById('die3');
placeholder.innerHTML = "<img src=\"/static/pages/img/" + number + ".png\">";

}
function printNumber4(number) {
  d4 = number;
  var placeholder = document.getElementById('die4');
  placeholder.innerHTML = "<img src=\"/static/pages/img/" + number + ".png\">";
}

function compHold () {
    if ((d3 === 1 || d3 === 2) &&
        (compRound === 'Round 1') &&
        (hold4.value === 'hold' || d4 !== d3 )){
        hold3.value = 'held';
        hold3.innerHTML = 'held';
        hold3.style.color = '#fff';
        hold3.style.backgroundColor = '#666';
    }
    if ((d4 === 1 || d4 === 2) &&
        (compRound === 'Round 1') &&
        (d4 !== d3)) {
        hold4.value = 'held';
        hold4.innerHTML = 'held';
        hold4.style.color = '#fff';
        hold4.style.backgroundColor = '#666';
    }
    if ((d3 === 3 || d3 === 4) &&
        (compRound === 'Round 2')&&
        (hold4.value === 'hold' || d4 !== d3 ) ) {
        hold3.value = 'held';
        hold3.innerHTML = 'held';
        hold3.style.color = '#fff';
        hold3.style.backgroundColor = '#666';
    }
    if ((d4 === 3 || d4 === 4) &&
        (compRound === 'Round 2') &&
        (d4 !== d3)) {
        hold4.value = 'held';
        hold4.innerHTML = 'held';
        hold4.style.color = '#fff';
        hold4.style.backgroundColor = '#666';
    }
    if ((d3 === 5) &&
        (compRound === 'Round 3')&&
        (hold4.value === 'hold' || d4 !== d3 ) ) {
        hold3.value = 'held';
        hold3.innerHTML = 'held';
        hold3.style.color = '#fff';
        hold3.style.backgroundColor = '#666';
    }
    if ((d4 === 5) &&
        (compRound === 'Round 3') &&
        (d4 != d3)) {
        hold4.value = 'held';
        hold4.innerHTML = 'held';
        hold4.style.color = '#fff';
        hold4.style.backgroundColor = '#666';
    }
}
function restoreHold() {
    hold1.value = 'hold';
    hold1.innerHTML = 'hold';
    hold1.style.color = '#666';
    hold1.style.backgroundColor = '#fff';
    hold2.value = 'hold';
    hold2.innerHTML = 'hold';
    hold2.style.color = '#666';
    hold2.style.backgroundColor = '#fff';
}
function restoreHoldComp() {
    hold3.value = 'hold';
    hold3.innerHTML = 'hold';
    hold3.style.color = '#666';
    hold3.style.backgroundColor = '#fff';
    hold4.value = 'hold';
    hold4.innerHTML = 'hold';
    hold4.style.color = '#666';
    hold4.style.backgroundColor = '#fff';
}

hold1.onclick = function () {
    if (d1 != 6){
    if (hold1.value === 'hold') {
        hold1.value = 'held';
        hold1.innerHTML = 'held';
        hold1.style.backgroundColor = '#666';
        hold1.style.color = '#fff'
;        console.log(hold1.value);
    }
    else if (hold1.value === 'held') {
        hold1.value = 'hold';
        hold1.innerHTML = 'hold';
        hold1.style.color = '#666';
        hold1.style.backgroundColor = '#fff';
    }
}};
hold2.onclick = function () {
    if (d2 != 6){
    if (hold2.value === 'hold') {
        hold2.value = 'held';
        hold2.innerHTML = 'held';
        hold2.style.color = '#fff';
        hold2.style.backgroundColor = '#666';
    }
    else if (hold2.value === 'held') {
        hold2.value = 'hold';
        hold2.innerHTML = 'hold';
        hold2.style.color = '#666';
        hold2.style.backgroundColor = '#fff';
    }
}};

button.onclick = function() {
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    $('#roll').css({ "pointer-events":"none"});
    $('#hold1').css({ "pointer-events":"none"});
    $('#hold2').css({ "pointer-events":"none"});
    document.getElementById('playerRound').innerHTML = curRound;
    button.innerHTML = 'Roll';
    if (start === true) {
        move();
        start = false;
    }
    animatePlayerDice();
    setTimeout(rollDice, 2000);
    setTimeout(whichRound, 2001);
    setTimeout(armStrikePlayer, 2001);
};

function armStrikePlayer() {
    if ((d1 == 6, 5, 4, 3, 2, 1) &&
        (d1 === d2)) {
        var item = document.getElementById(d1);
        item.className += ' armed';
    }
    $('#roll').css({ "pointer-events":"auto"});
    button.style.backgroundColor = '#fff';
    $('#hold1').css({ "pointer-events":"auto"});
    $('#hold2').css({ "pointer-events":"auto"});
}
function armStrikeComp() {
    if ((d3 == 6, 5, 4, 3, 2, 1) &&
        (d3 === d4)) {
        var item = document.getElementById('c' + d3);
        item.className += ' armed';
    }
}

function whichRound() {
  if (curRound === 'Round 1') {
      if (d1 + d2 === 3) {
        curRound = 'Round 2';
        restoreHold()
  }}
  if (curRound === 'Round 2') {
    if (d1 === 3) {
      if (d2 === 4) {
          curRound = 'Round 3';
          restoreHold()
      }
  }}
 if (curRound === 'Round 2') {
    if (d1 === 4) {
      if (d2 === 3) {
          curRound = 'Round 3';
          restoreHold()
      }
  }}
  if (curRound === 'Round 3') {
    if (d1 === 5) {
      if (d2 === 6) {
          lost = 1;
          curRound = 'You win!';
          restoreHold()
      }
  }}
  if (curRound === 'Round 3') {
    if (d1 === 6) {
      if (d2 === 5) {
          curRound = 'You win!';
          lost = 1;
          restoreHold()
      }
  }}
  if (d1 === 3) {
      if (d2 === 3){
          curRound = 'Round 1';
          restoreHold()
      }
  }
  document.getElementById('playerRound').innerHTML = curRound;
}
function whichCompRound() {
  if (compRound === 'Round 1') {
      if (d3 + d4 === 3) {
        compRound = 'Round 2';
        restoreHoldComp()
  }}
  if (compRound === 'Round 2') {
    if (d3 === 3) {
      if (d4 === 4) {
          compRound = 'Round 3';
          restoreHoldComp()
      }
  }}
 if (compRound === 'Round 2') {
    if (d3 === 4) {
      if (d4 === 3) {
          compRound = 'Round 3';
          restoreHoldComp()
      }
  }}
  if (compRound === 'Round 3') {
    if (d3 === 5) {
      if (d4 === 6) {
          compRound = 'You lose!';
          lost = 1;
          restoreHoldComp()
      }
  }}
  if (compRound === 'Round 3') {
    if (d3 === 6) {
      if (d4 === 5) {
          compRound = 'You lose!';
          lost = 1;
          restoreHoldComp()
      }
  }}
  if (d3 === 3) {
      if (d4 === 3){
          compRound = 'Round 1';
          restoreHoldComp()
      }
  }

}

function rollDice() {

     if (hold1.value === 'hold') {
      var result = dice1.roll();
      printNumber(result);
      }
      if (hold2.value === 'hold') {
          var result = dice2.roll();
          printNumber2(result);
      }
  document.getElementById('playerRound').innerHTML = curRound;
}
function compRollDice() {
    if (hold3.value === 'hold') {
      var result = dice3.roll();
      printNumber3(result);
      }
      if (hold4.value === 'hold') {
          var result = dice4.roll();
          printNumber4(result);
      }
};
function move() {
    if (lost === 0) {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, compTurnTime);
    animateCompDice();
    compRollDice();
    compRollDice();
    function frame() {

        document.getElementById('compRound').innerHTML = compRound;
        if (width === 70){
            compRollDice();
            armStrikeComp();
            whichCompRound();
            compHold();
        }
        if (width >= 100) {
            clearInterval(id);
            move();

        } else {
            width++;
            elem.style.width = width + '%';
        }

    }
}

}

function animatePlayerDice() {
    var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 3){
        clearInterval(interval);
    }
    rollDice();
}, 500);

    $(document).ready(function() {
        $.each($('.playerDice'), function(){
            var item = $(this);
            console.log(item)
          item.addClass('rotated');
          setTimeout(function () {
              item.removeClass('rotated');

          }, 2000)

        });


    });
};

function animateCompDice() {

    var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 3){
        clearInterval(interval);
    }
    compRollDice();
}, 500);
    $(document).ready(function() {
        $.each($('.compDice'), function(){
            var item = $(this);
          item.addClass('rotated');
          setTimeout(function () {
              item.removeClass('rotated');

          }, 2100)

        });


    });
};


btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};