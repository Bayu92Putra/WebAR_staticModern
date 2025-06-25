function showContent(type) {
  const videoEntity = document.querySelector('#video');
  const videoAsset = document.querySelector('#videoAsset');
  const audioBox = document.querySelector('#audioBox');
  const textBox = document.querySelector('#textBox');
  const indoAudio = document.querySelector('#indoAudio');
  const engAudio = document.querySelector('#engAudio');

  // Reset visibilitas
  videoEntity.setAttribute('visible', false);
  audioBox.setAttribute('visible', false);
  textBox.setAttribute('visible', false);

  // Stop semua media
  if (videoAsset?.pause) videoAsset.pause();
  if (indoAudio?.components?.sound) indoAudio.components.sound.stopSound();
  if (engAudio?.components?.sound) engAudio.components.sound.stopSound();

  // Tampilkan dan mainkan sesuai type
   if (type === 'video') {
    videoEntity.setAttribute('visible', true);
    videoAsset.play(); // play dari elemen DOM video, bukan dari mesh
  }

  if (type === 'audio') {
    audioBox.setAttribute('visible', true);
    if (indoAudio?.components?.sound) indoAudio.components.sound.playSound();
  }

  if (type === 'text') {
    textBox.setAttribute('visible', true);
  }
}
