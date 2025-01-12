const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");
const worker = new Worker("worker.js");

// Animação simples
let x = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width + 30, canvas.height);
  ctx.beginPath();
  ctx.arc(x, canvas.height / 2, 20, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  x = (x + 2) % canvas.width; // Movimento contínuo
  requestAnimationFrame(animate);
}
animate();

// Processo pesado sem Web Worker
document.getElementById("blockProcess").addEventListener("click", () => {
  document.getElementById("status").innerHTML = "Processando";
  const start = Date.now();
  while (Date.now() - start < 5000) {}
  alert("Fim do processo");
  document.getElementById("status").innerHTML = "idle";
});

// Processo pesado com Web Worker
document.getElementById("workerProcess").addEventListener("click", () => {
  document.getElementById("status").innerHTML = "Processando";

  worker.postMessage("start"); // Inicia o processo no Worker
});

worker.onmessage = function (message) {
  
  document.getElementById("status").innerHTML = "idle";
};
