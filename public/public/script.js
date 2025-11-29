async function testSave() {
  const demoData = {
    mensaje: "Hola Facu, GT3 conectado",
    timestamp: new Date().toISOString()
  };

  const res = await fetch("/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(demoData)
  });

  const json = await res.json();
  document.getElementById("out").textContent =
    "Respuesta /save:\n" + JSON.stringify(json, null, 2);
}

async function testLoad() {
  const res = await fetch("/load");
  const json = await res.json();
  document.getElementById("out").textContent =
    "Respuesta /load:\n" + JSON.stringify(json, null, 2);
}

