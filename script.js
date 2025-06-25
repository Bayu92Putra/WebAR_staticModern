function showContent(type) {
  const video = document.querySelector('#video');
  const audioBox = document.querySelector('#audioBox');
  const textBox = document.querySelector('#textBox');
  const indoAudio = document.querySelector('#indoAudio');
  const engAudio = document.querySelector('#engAudio');

  // Reset visibilitas
  video.setAttribute('visible', false);
  audioBox.setAttribute('visible', false);
  textBox.setAttribute('visible', false);

  // Stop semua media
  if (video && video.components?.material?.material?.map?.image?.pause) {
    video.components.material.material.map.image.pause();
  }

  if (indoAudio?.components?.sound) indoAudio.components.sound.stopSound();
  if (engAudio?.components?.sound) engAudio.components.sound.stopSound();

  // Tampilkan dan mainkan sesuai type
  if (type === 'video') {
    video.setAttribute('visible', true);
    if (video.components.material.material.map.image.play) {
      video.components.material.material.map.image.play();
    }
  } else if (type === 'audio') {
    audioBox.setAttribute('visible', true);
    if (indoAudio?.components?.sound) {
      indoAudio.components.sound.playSound();
    }
  } else if (type === 'text') {
    textBox.setAttribute('visible', true);
  }
}
