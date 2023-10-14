let loadBtns = document.getElementsByClassName('load-btn');

for (let i = 0; i < loadBtns.length; i++) {
  loadBtns[i].addEventListener('click', loadSite);
}

function loadSite(event) {
  let loadBox = event.target.parentElement;
  let url = event.target.value;
  event.target.style.display = 'none';
  let siteFrame = document.createElement('iframe');
  siteFrame.src = url;
  loadBox.appendChild(siteFrame);
}