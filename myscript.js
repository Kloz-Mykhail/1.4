function makeHide(text = document.getElementById('text').value) {
  console.log(text);
  Array.from(document.querySelectorAll(text)).forEach((el) => {
    el.style.visibility === 'hidden'
      ? (el.style.visibility = 'visible')
      : (el.style.visibility = 'hidden');
  });
}

document.getElementById('css+js').onclick = () => makeHide();

let oneclick = true;
document.getElementById('yellow').onclick = () => {
  if (oneclick) {
    oneclick = false;
    alert('Nice');
  } else {
    document.getElementById('yellow').style.display = 'none';
  }
};

document.getElementById('css+js').onmouseover = () => {
  document.getElementById('red').style.visibility = 'visible';
};

document.getElementById('css+js').onmouseout = () => {
  document.getElementById('red').style.visibility = 'hidden';
};

document.getElementById('text').onfocus = () => {
  document.getElementById('green').style.visibility = 'visible';
};

document.getElementById('text').onblur = () => {
  document.getElementById('green').style.visibility = 'hidden';
};

document.getElementById('text').oninput = () => {
  document.getElementById('green').style.visibility = 'hidden';
};

document.getElementById('img').onclick = () => {
  const list = document.getElementById('imgtext').value.split('\n');
  list.forEach((el) => {
    try {
      const elem = document.createElement('img');
      elem.src = el;
      elem.setAttribute('class', 'hidden');
      elem.setAttribute('alt', 'IMAGE');
      elem.style.backgroundColor = 'white';
      document.getElementById('kv').append(elem);
    } catch (error) {}
  });
};

window.onmousemove = () => {
  document.getElementById(
    'cor'
  ).innerText = `X:${event.screenX}, Y:${event.screenY}`;
  document.getElementById('lang').innerText = `Lang: ${
    navigator.language || navigator.userLanguage
  }`;

  const coord = document.getElementById('coord');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      coord.innerText = `Latitude: ${pos.coords.latitude}
        Longitude: ${pos.coords.longitude}`;
    });
  }
};

const lS = document.getElementById('lStorage');
const sS = document.getElementById('sStorage');
const cookies = document.getElementById('cookies');

window.onunload = () => {
  localStorage.clear();
  localStorage.setItem('lStorage', lS.value);
  sessionStorage.clear();
  sessionStorage.setItem('sStorage', sS.value);
  document.cookie = `1=${encodeURIComponent(cookies.value)}`;
};

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

window.onload = () => {
  lS.value = localStorage.getItem('lStorage');
  sS.innerText = sessionStorage.getItem('sStorage');
  cookies.value = getCookie('1');
};

const scrollButton = document.getElementById('scrollButton');

window.onscroll = () => {
  if (window.scrollY >= 1000) {
    scrollButton.style.visibility = 'visible';
  } else {
    scrollButton.style.visibility = 'hidden';
  }
};

scrollButton.onclick = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

document.getElementById('box').onclick = () => alert('big box');

document.getElementById('boxInTheBox').onclick = () => {
  alert('small box');
  event.stopPropagation();
};

const block = document.getElementById('block');
document.getElementById('display').onclick = () => {
  document.documentElement.style.overflow = 'hidden';
  block.style.display = 'block';
};

block.onclick = () => {
  document.documentElement.style.overflow = 'visible';
  block.style.display = 'none';
};

const formGroup = document.getElementById('form-group');

formGroup.ondragover = () => {
  event.preventDefault();
  document.getElementById('label').style.border = '2px solid #0d6efd';
};

formGroup.ondragleave = () => {
  event.preventDefault();
  document.getElementById('label').style.border = '2px dashed #0d6efd';
};

formGroup.ondrop = (event) => {
  event.preventDefault();

  const title = document.querySelector('.title');
  const { files } = event.dataTransfer;

  if (files.length === 1) {
    title.innerText = files[0].name;
  } else {
    title.innerText = `Download ${files.length} files`;
  }
  title.style.color = '#0d6efd';
  document.querySelector('.label i').style.color = '#0d6efd';
};
