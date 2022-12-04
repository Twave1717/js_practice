const randomN = Math.floor(Math.random() * 5);
const url = `src/photo/${randomN}.jpg`;

document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${url}')`;