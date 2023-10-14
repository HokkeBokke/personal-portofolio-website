let links = document.querySelectorAll('a');
let portrait = document.getElementById('portrait');

links.forEach(link => {
  link.addEventListener('click', () => alert("Link unavailable. Website still under construction."));
});

portrait.addEventListener('click', handlePortraitClick);

function handlePortraitClick(ev) {
  if (portrait.style.position == 'absolute') defaultImage();
  else frameImage();
}

function frameImage() {
  portrait.style.position = 'absolute';
  portrait.style.width = '50vw';
  portrait.style.left = '25vw';
  portrait.style.top = '5px';
}

function defaultImage() {
  portrait.style.position = '';
  portrait.style.width = '';
  portrait.style.left = '';
  portrait.style.top = '';
}