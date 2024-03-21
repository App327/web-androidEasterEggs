let toast = document.getElementById('toast');
let lastToastTimeout;

function showToast(txt, dur) {
 clearTimeout(lastToastTimeout);
 toast.innerHTML = txt;
 toast.classList.add('show');
 toast.style.display = 'block';
 let dr;
 if (dur === 1) {
  dr = 2000;
 } else {
  dr = 3500;
 }
 lastToastTimeout = setTimeout(closeToast, dr);
}

function closeToast() {
 toast.classList.remove('show');
 setTimeout(() => toast.style.display = 'none', 400);
}