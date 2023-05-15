var arr = [
  [
    "./AVSL/images/audio1_gt.jpg",
    "./AVSL/images/audio1_AudioCLIP.jpg",
    "./AVSL/images/audio1_WAV2CLIP.jpg",
    "./AVSL/images/audio1_ours.jpg",
  ],
  [
    "./AVSL/images/audio2_gt.jpg",
    "./AVSL/images/audio2_AudioCLIP.jpg",
    "./AVSL/images/audio2_WAV2CLIP.jpg",
    "./AVSL/images/audio2_ours.jpg",
  ],
  [
    "./AVSL/images/audio3_gt.jpg",
    "./AVSL/images/audio3_AudioCLIP.jpg",
    "./AVSL/images/audio3_WAV2CLIP.jpg",
    "./AVSL/images/audio3_ours.jpg",
  ],
  [
    "./AVSL/images/audio4_gt.jpg",
    "./AVSL/images/audio4_AudioCLIP.jpg",
    "./AVSL/images/audio4_WAV2CLIP.jpg",
    "./AVSL/images/audio4_ours.jpg",
  ],
  [
    "./AVSL/images/audio5_gt.jpg",
    "./AVSL/images/audio5_AudioCLIP.jpg",
    "./AVSL/images/audio5_WAV2CLIP.jpg",
    "./AVSL/images/audio5_ours.jpg",
  ],
  [
    "./AVSL/images/audio6_gt.jpg",
    "./AVSL/images/audio6_AudioCLIP.jpg",
    "./AVSL/images/audio6_WAV2CLIP.jpg",
    "./AVSL/images/audio6_ours.jpg",
  ],
  [
    "./AVSL/images/audio7_gt.jpg",
    "./AVSL/images/audio7_AudioCLIP.jpg",
    "./AVSL/images/audio7_WAV2CLIP.jpg",
    "./AVSL/images/audio7_ours.jpg",
  ],
  [
    "./AVSL/images/audio8_gt.jpg",
    "./AVSL/images/audio8_AudioCLIP.jpg",
    "./AVSL/images/audio8_WAV2CLIP.jpg",
    "./AVSL/images/audio8_ours.jpg",
  ],
  [
    "./AVSL/images/audio9_gt.jpg",
    "./AVSL/images/audio9_AudioCLIP.jpg",
    "./AVSL/images/audio9_WAV2CLIP.jpg",
    "./AVSL/images/audio9_ours.jpg",
  ],
  [
    "./AVSL/images/audio10_gt.jpg",
    "./AVSL/images/audio10_AudioCLIP.jpg",
    "./AVSL/images/audio10_WAV2CLIP.jpg",
    "./AVSL/images/audio10_ours.jpg",
  ],
  [
    "./AVSL/images/audio11_gt.jpg",
    "./AVSL/images/audio11_AudioCLIP.jpg",
    "./AVSL/images/audio11_WAV2CLIP.jpg",
    "./AVSL/images/audio11_ours.jpg",
  ],
  [
    "./AVSL/images/audio12_gt.jpg",
    "./AVSL/images/audio12_AudioCLIP.jpg",
    "./AVSL/images/audio12_WAV2CLIP.jpg",
    "./AVSL/images/audio12_ours.jpg",
  ],
  [
    "./AVSL/images/audio13_gt.jpg",
    "./AVSL/images/audio13_AudioCLIP.jpg",
    "./AVSL/images/audio13_WAV2CLIP.jpg",
    "./AVSL/images/audio13_ours.jpg",
  ],
  [
    "./AVSL/images/audio14_gt.jpg",
    "./AVSL/images/audio14_AudioCLIP.jpg",
    "./AVSL/images/audio14_WAV2CLIP.jpg",
    "./AVSL/images/audio14_ours.jpg",
  ],
  [
    "./AVSL/images/audio15_gt.jpg",
    "./AVSL/images/audio15_AudioCLIP.jpg",
    "./AVSL/images/audio15_WAV2CLIP.jpg",
    "./AVSL/images/audio15_ours.jpg",
  ],
  [
    "./AVSL/images/audio16_gt.jpg",
    "./AVSL/images/audio16_AudioCLIP.jpg",
    "./AVSL/images/audio16_WAV2CLIP.jpg",
    "./AVSL/images/audio16_ours.jpg",
  ],
  [
    "./AVSL/images/audio17_gt.jpg",
    "./AVSL/images/audio17_AudioCLIP.jpg",
    "./AVSL/images/audio17_WAV2CLIP.jpg",
    "./AVSL/images/audio17_ours.jpg",
  ],
  [
    "./AVSL/images/audio18_gt.jpg",
    "./AVSL/images/audio18_AudioCLIP.jpg",
    "./AVSL/images/audio18_WAV2CLIP.jpg",
    "./AVSL/images/audio18_ours.jpg",
  ],
  [
    "./AVSL/images/audio19_gt.jpg",
    "./AVSL/images/audio19_AudioCLIP.jpg",
    "./AVSL/images/audio19_WAV2CLIP.jpg",
    "./AVSL/images/audio19_ours.jpg",
  ],
  [
    "./AVSL/images/audio20_gt.jpg",
    "./AVSL/images/audio20_AudioCLIP.jpg",
    "./AVSL/images/audio20_WAV2CLIP.jpg",
    "./AVSL/images/audio20_ours.jpg",
  ],
  [
    "./AVSL/images/audio21_gt.jpg",
    "./AVSL/images/audio21_AudioCLIP.jpg",
    "./AVSL/images/audio21_WAV2CLIP.jpg",
    "./AVSL/images/audio21_ours.jpg",
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
  var a0 = document.getElementById("GroundTruth");
  a0.innerText = "Ground Truth";
  var a1 = document.getElementById("AudioCLIP");
  a1.innerText = "AudioCLIP";
  var a2 = document.getElementById("WAV2CLIP");
  a2.innerText = "WAV2CLIP";
  var a3 = document.getElementById("Ours");
  a3.innerText = "Ours";

  if (state != 0) {
    var block_pre = document.getElementById("audio" + state.toString());
    block_pre.style.borderStyle = "";
  } else {
    for (var i = 0; i < images.length; i += 1) {
      images[i].style.height = "230px";
      images[i].style.width = "340px";
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
