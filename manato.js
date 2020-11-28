const $doc = document;
//定数$chordBtnに「明るい曲」「暗い曲」のボタンを設定
const $chordBtn = $doc.getElementById('chord-select');
//定数$speedBtnに「速い曲」「遅い曲」のボタンを設定
const $speedBtn = $doc.getElementById('speed-select');
//「明るい曲」を指定
const $majorSong = $doc.getElementById('major-song');
//「暗い曲」を指定
const $minorSong = $doc.getElementById('minor-song');
//「明るくて速い曲」「明るくて遅い曲」を指定
const $major = $speedBtn.getElementsByClassName('major');
//「暗くて速い曲」「暗くて遅い曲」を指定
const $minor = $speedBtn.getElementsByClassName('minor');

//明るくて速い曲、明るくて遅い曲に対応するURLを表示する
//という関数をmajorselectに定義する
const majorselect = ()=> {
$speedBtn.addEventListener('click', (e)=>{
  if (e.target.textContent === "明るくて速い曲"){
    $doc.getElementById('hitoe').style.display = 'block';
    $doc.getElementById('waltz').style.display = 'none';
    $doc.getElementById('kitty').style.display = 'none';
    $doc.getElementById('danro').style.display = 'none';

  }else{
    $doc.getElementById('hitoe').style.display = 'none';
    $doc.getElementById('danro').style.display = 'block';
    $doc.getElementById('waltz').style.display = 'none';
    $doc.getElementById('kitty').style.display = 'none';
  }
});
}
//暗くて速い曲、遅い曲のそれぞれに対応するURLを表示する
//という関数をminorselectに定義する
const minorselect = ()=> {
$speedBtn.addEventListener('click', (e)=>{
  if (e.target.textContent === "暗くて速い曲"){
    $doc.getElementById('waltz').style.display = 'block';
    $doc.getElementById('hitoe').style.display = 'none';
    $doc.getElementById('kitty').style.display = 'none';
    $doc.getElementById('danro').style.display = 'none';
  }else{
    $doc.getElementById('kitty').style.display = 'block';
    $doc.getElementById('waltz').style.display = 'none';
    $doc.getElementById('hitoe').style.display = 'none';
    $doc.getElementById('danro').style.display = 'none';
    }
  });
}


//速度ボタンを非表示にしておく
$major[0].style.display = 'none';
$minor[0].style.display = 'none';


//URL部分を個別に非表示にしておく
$doc.getElementById('hitoe').style.display = 'none';
$doc.getElementById('danro').style.display = 'none';
$doc.getElementById('waltz').style.display = 'none';
$doc.getElementById('kitty').style.display = 'none';


//「明るい曲」ボタンを押したら「明るくて速い曲」「明るくて遅い曲」ボタンが表示される
$majorSong.addEventListener('click', ()=> {
  $major[0].style.display = 'block';
  $minor[0].style.display = 'none';
});
//「暗い曲」ボタンを押したら「暗くて速い曲」「暗くて遅い曲」ボタンが表示される
$minorSong.addEventListener('click', ()=> {
  $minor[0].style.display = 'block';
  $major[0].style.display = 'none';
});

//それぞれのボタンに対応したURLを表示する
$major[0].addEventListener('click', ()=>{
  majorselect();
  $doc.getElementsByClassName('recomend')[0].style.display = 'block';

});
$minor[0].addEventListener('click', ()=>{
  minorselect();
  $doc.getElementsByClassName('recomend')[0].style.display = 'block';

});
