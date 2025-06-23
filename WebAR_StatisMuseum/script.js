
function showContent(type) {
  document.querySelectorAll('.button').forEach(el => el.setAttribute('visible', false));

  if (type === 'video') {
    const video = document.querySelector('#video');
    video.setAttribute('visible', true);
    video.components.material.material.map.image.play();
    video.classList.add('fade-in');
  } else if (type === 'audio') {
    const audioBox = document.querySelector('#audioBox');
    audioBox.setAttribute('visible', true);
    audioBox.classList.add('fade-in');
  } else if (type === 'text') {
    const textBox = document.querySelector('#textBox');
    textBox.setAttribute('visible', true);
    textBox.classList.add('fade-in');
  }
}
