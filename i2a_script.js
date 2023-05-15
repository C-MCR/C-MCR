var arr = [
  [
    "./i2a/audio/img1_ours0.wav",
    "./i2a/audio/img1_ours1.wav",
    "./i2a/audio/img1_ours2.wav",
    "./i2a/audio/img1_audioclip0.wav",
    "./i2a/audio/img1_audioclip1.wav",
    "./i2a/audio/img1_audioclip2.wav",
    "./i2a/audio/img1_wav2clip0.wav",
    "./i2a/audio/img1_wav2clip1.wav",
    "./i2a/audio/img1_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img2_ours0.wav",
    "./i2a/audio/img2_ours1.wav",
    "./i2a/audio/img2_ours2.wav",
    "./i2a/audio/img2_audioclip0.wav",
    "./i2a/audio/img2_audioclip1.wav",
    "./i2a/audio/img2_audioclip2.wav",
    "./i2a/audio/img2_wav2clip0.wav",
    "./i2a/audio/img2_wav2clip1.wav",
    "./i2a/audio/img2_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img3_ours0.wav",
    "./i2a/audio/img3_ours1.wav",
    "./i2a/audio/img3_ours2.wav",
    "./i2a/audio/img3_audioclip0.wav",
    "./i2a/audio/img3_audioclip1.wav",
    "./i2a/audio/img3_audioclip2.wav",
    "./i2a/audio/img3_wav2clip0.wav",
    "./i2a/audio/img3_wav2clip1.wav",
    "./i2a/audio/img3_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img4_ours0.wav",
    "./i2a/audio/img4_ours1.wav",
    "./i2a/audio/img4_ours2.wav",
    "./i2a/audio/img4_audioclip0.wav",
    "./i2a/audio/img4_audioclip1.wav",
    "./i2a/audio/img4_audioclip2.wav",
    "./i2a/audio/img4_wav2clip0.wav",
    "./i2a/audio/img4_wav2clip1.wav",
    "./i2a/audio/img4_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img5_ours0.wav",
    "./i2a/audio/img5_ours1.wav",
    "./i2a/audio/img5_ours2.wav",
    "./i2a/audio/img5_audioclip0.wav",
    "./i2a/audio/img5_audioclip1.wav",
    "./i2a/audio/img5_audioclip2.wav",
    "./i2a/audio/img5_wav2clip0.wav",
    "./i2a/audio/img5_wav2clip1.wav",
    "./i2a/audio/img5_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img6_ours0.wav",
    "./i2a/audio/img6_ours1.wav",
    "./i2a/audio/img6_ours2.wav",
    "./i2a/audio/img6_audioclip0.wav",
    "./i2a/audio/img6_audioclip1.wav",
    "./i2a/audio/img6_audioclip2.wav",
    "./i2a/audio/img6_wav2clip0.wav",
    "./i2a/audio/img6_wav2clip1.wav",
    "./i2a/audio/img6_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img7_ours0.wav",
    "./i2a/audio/img7_ours1.wav",
    "./i2a/audio/img7_ours2.wav",
    "./i2a/audio/img7_audioclip0.wav",
    "./i2a/audio/img7_audioclip1.wav",
    "./i2a/audio/img7_audioclip2.wav",
    "./i2a/audio/img7_wav2clip0.wav",
    "./i2a/audio/img7_wav2clip1.wav",
    "./i2a/audio/img7_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img8_ours0.wav",
    "./i2a/audio/img8_ours1.wav",
    "./i2a/audio/img8_ours2.wav",
    "./i2a/audio/img8_audioclip0.wav",
    "./i2a/audio/img8_audioclip1.wav",
    "./i2a/audio/img8_audioclip2.wav",
    "./i2a/audio/img8_wav2clip0.wav",
    "./i2a/audio/img8_wav2clip1.wav",
    "./i2a/audio/img8_wav2clip2.wav",
  ],

  [
    "./i2a/audio/img9_ours0.wav",
    "./i2a/audio/img9_ours1.wav",
    "./i2a/audio/img9_ours2.wav",
    "./i2a/audio/img9_audioclip0.wav",
    "./i2a/audio/img9_audioclip1.wav",
    "./i2a/audio/img9_audioclip2.wav",
    "./i2a/audio/img9_wav2clip0.wav",
    "./i2a/audio/img9_wav2clip1.wav",
    "./i2a/audio/img9_wav2clip2.wav",
  ],
];
state = 0;

window.onload = function () {
  var ImageIcons = document.getElementsByClassName("ImageIcon");
  state = 0;
  for (var i = 0; i < ImageIcons.length; i += 1) {
    ImageIcons[i].onclick = change;
  }
};

function change(event) {
  var audios = document.getElementsByClassName("audio");
  var target = event.target; // 获取当前点击的元素对象
  var id = target.id; // 获取元素对象的id属性值
  if (state == 0) {
    var a1 = document.getElementById("Ours");
    a1.innerText = "Ours";
    var a2 = document.getElementById("AudioCLIP");
    a2.innerText = "AudioCLIP";
    var a3 = document.getElementById("WAV2CLIP");
    a3.innerText = "WAV2CLIP";
  }

  if (state != 0) {
    var block_pre = document.getElementById("audio" + state.toString());
    block_pre.style.borderStyle = "";
  }
  var block_now = document.getElementById(id);
  block_now.style.borderStyle = "solid";
  block_now.style.borderColor = "#2ec3da";
  block_now.style.borderWidth = "5px";

  var x = parseInt(id.substring(5));
  state = x;
  for (var i = 0; i < audios.length; i += 1) {
    audios[i].controls = "controls";
    audios[i].src = arr[x - 1][i];
  }

  // if (id == "audio1") {
  //   // 如果点击了第一个音频图标
  //   for(var i=0;i<images.length;i+=1){
  //     images[i].src=arr[0][i];
  //   }
  //   //image.src = arr[0].image; // 取出第一个元素的图像
  // } else if (id == "audio2") {
  //   // 如果点击了第二个音频图标
  //   for(var i=0;i<images.length;i+=1){
  //     images[i].src=arr[1][i];
  //   }
  //   //image.src = arr[1].image; // 取出第二个元素的图像
  // } else if (id == "audio3") {
  //   // 如果点击了第三个音频图标
  //   for(var i=0;i<images.length;i+=1){
  //     images[i].src=arr[2][i];
  //   }
  //   //image.src = arr[2].image; // 取出第三个元素的图像
  // }
}

$(function () {
  var currentValue = $("#currentValue");

  $("#defaultSlider").change(function () {
    currentValue.html(this.value);
  });

  // Trigger the event on load, so
  // the value field is populated:

  $("#defaultSlider").change();
});
