var arr = [
  [
    "./a2i/images/audio1_ours0.jpg",
    "./a2i/images/audio1_ours1.jpg",
    "./a2i/images/audio1_ours2.jpg",
    "./a2i/images/audio1_audioclip0.jpg",
    "./a2i/images/audio1_audioclip1.jpg",
    "./a2i/images/audio1_audioclip2.jpg",
    "./a2i/images/audio1_wav2clip0.jpg",
    "./a2i/images/audio1_wav2clip1.jpg",
    "./a2i/images/audio1_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio2_ours0.jpg",
    "./a2i/images/audio2_ours1.jpg",
    "./a2i/images/audio2_ours2.jpg",
    "./a2i/images/audio2_audioclip0.jpg",
    "./a2i/images/audio2_audioclip1.jpg",
    "./a2i/images/audio2_audioclip2.jpg",
    "./a2i/images/audio2_wav2clip0.jpg",
    "./a2i/images/audio2_wav2clip1.jpg",
    "./a2i/images/audio2_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio3_ours0.jpg",
    "./a2i/images/audio3_ours1.jpg",
    "./a2i/images/audio3_ours2.jpg",
    "./a2i/images/audio3_audioclip0.jpg",
    "./a2i/images/audio3_audioclip1.jpg",
    "./a2i/images/audio3_audioclip2.jpg",
    "./a2i/images/audio3_wav2clip0.jpg",
    "./a2i/images/audio3_wav2clip1.jpg",
    "./a2i/images/audio3_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio4_ours0.jpg",
    "./a2i/images/audio4_ours1.jpg",
    "./a2i/images/audio4_ours2.jpg",
    "./a2i/images/audio4_audioclip0.jpg",
    "./a2i/images/audio4_audioclip1.jpg",
    "./a2i/images/audio4_audioclip2.jpg",
    "./a2i/images/audio4_wav2clip0.jpg",
    "./a2i/images/audio4_wav2clip1.jpg",
    "./a2i/images/audio4_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio5_ours0.jpg",
    "./a2i/images/audio5_ours1.jpg",
    "./a2i/images/audio5_ours2.jpg",
    "./a2i/images/audio5_audioclip0.jpg",
    "./a2i/images/audio5_audioclip1.jpg",
    "./a2i/images/audio5_audioclip2.jpg",
    "./a2i/images/audio5_wav2clip0.jpg",
    "./a2i/images/audio5_wav2clip1.jpg",
    "./a2i/images/audio5_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio6_ours0.jpg",
    "./a2i/images/audio6_ours1.jpg",
    "./a2i/images/audio6_ours2.jpg",
    "./a2i/images/audio6_audioclip0.jpg",
    "./a2i/images/audio6_audioclip1.jpg",
    "./a2i/images/audio6_audioclip2.jpg",
    "./a2i/images/audio6_wav2clip0.jpg",
    "./a2i/images/audio6_wav2clip1.jpg",
    "./a2i/images/audio6_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio7_ours0.jpg",
    "./a2i/images/audio7_ours1.jpg",
    "./a2i/images/audio7_ours2.jpg",
    "./a2i/images/audio7_audioclip0.jpg",
    "./a2i/images/audio7_audioclip1.jpg",
    "./a2i/images/audio7_audioclip2.jpg",
    "./a2i/images/audio7_wav2clip0.jpg",
    "./a2i/images/audio7_wav2clip1.jpg",
    "./a2i/images/audio7_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio8_ours0.jpg",
    "./a2i/images/audio8_ours1.jpg",
    "./a2i/images/audio8_ours2.jpg",
    "./a2i/images/audio8_audioclip0.jpg",
    "./a2i/images/audio8_audioclip1.jpg",
    "./a2i/images/audio8_audioclip2.jpg",
    "./a2i/images/audio8_wav2clip0.jpg",
    "./a2i/images/audio8_wav2clip1.jpg",
    "./a2i/images/audio8_wav2clip2.jpg",
  ],
  [
    "./a2i/images/audio9_ours0.jpg",
    "./a2i/images/audio9_ours1.jpg",
    "./a2i/images/audio9_ours2.jpg",
    "./a2i/images/audio9_audioclip0.jpg",
    "./a2i/images/audio9_audioclip1.jpg",
    "./a2i/images/audio9_audioclip2.jpg",
    "./a2i/images/audio9_wav2clip0.jpg",
    "./a2i/images/audio9_wav2clip1.jpg",
    "./a2i/images/audio9_wav2clip2.jpg",
  ],
];
state = 0;

window.onload = function () {
  var audioIcons = document.getElementsByClassName("audioIcon");
  state = 0;
  for (var i = 0; i < audioIcons.length; i += 1) {
    audioIcons[i].onclick = change;
  }
};

function change(event) {
  var images = document.getElementsByClassName("image");
  var target = event.target; // 获取当前点击的元素对象
  var id = target.id; // 获取元素对象的id属性值
  var a1 = document.getElementById("Ours");
  a1.innerText = "Ours";
  var a2 = document.getElementById("AudioCLIP");
  a2.innerText = "AudioCLIP";
  var a3 = document.getElementById("WAV2CLIP");
  a3.innerText = "WAV2CLIP";

  if (state != 0) {
    var block_pre = document.getElementById("audio" + state.toString());
    block_pre.style.borderStyle = "";
  } else {
    for (var i = 0; i < images.length; i += 1) {
      images[i].style.height = "300px";
      images[i].style.width = "300px";
    }
  }
  var block_now = document.getElementById(id);
  block_now.style.borderStyle = "solid";
  block_now.style.borderColor = "#2ec3da";

  var x = parseInt(id.substring(5));
  state = x;
  for (var i = 0; i < images.length; i += 1) {
    images[i].src = arr[x - 1][i];
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
