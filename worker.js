// Simula um processo pesado
onmessage = function (event) {
  console.log("inicio");

  const start = Date.now();
  while (Date.now() - start < 5000) {}
  console.log("fim");

  postMessage(`Fim`);
};
