// Malla completa de la carrera de Turismo
const malla = [
  {
    nivel: "Primer Ciclo",
    cursos: [
      { nombre: "Introducción a la hospitalidad", prereq: [] },
      { nombre: "Sociología y Turismo", prereq: [] },
      { nombre: "Informática", prereq: [] },
      { nombre: "Ingles 1", prereq: [] },
      { nombre: "Matemáticas Financieras", prereq: [] },
      { nombre: "Filosofía", prereq: [] }
    ]
  },
  {
    nivel: "Segundo Ciclo",
    cursos: [
      { nombre: "Historia del Ecuador y Latinoamérica", prereq: [] },
      { nombre: "Escritura académica", prereq: [] },
      { nombre: "Geografía y Turismo", prereq: [] },
      { nombre: "Cultura del servicio", prereq: [] },
      { nombre: "Ingles 2", prereq: ["Ingles 1"] },
      { nombre: "Estadística Descriptiva", prereq: [] }
    ]
  },
  {
    nivel: "Tercer Ciclo",
    cursos: [
      { nombre: "Patrimonio Cultural del Ecuador", prereq: [] },
      { nombre: "Patrimonio Natural del Ecuador", prereq: [] },
      { nombre: "Relaciones públicas y protocolo", prereq: [] },
      { nombre: "Gestión Sostenible y Turismo", prereq: [] },
      { nombre: "Ingles 3", prereq: ["Ingles 2"] },
      { nombre: "Estadística Inferencial", prereq: ["Estadística Descriptiva"] }
    ]
  },
  {
    nivel: "Cuarto Ciclo",
    cursos: [
      { nombre: "Administración de empresas turísticas", prereq: [] },
      { nombre: "Legislación empresarial", prereq: [] },
      { nombre: "Práctica Laboral 1", prereq: ["Relaciones públicas y protocolo"] },
      { nombre: "Contabilidad", prereq: [] },
      { nombre: "Investigación aplicada al turismo", prereq: ["Estadística Inferencial"] },
      { nombre: "Ingles 4", prereq: ["Ingles 3"] }
    ]
  },
  {
    nivel: "Quinto Ciclo",
    cursos: [
      { nombre: "Intermediación turística", prereq: [] },
      { nombre: "Sistemas de calidad aplicados al turismo", prereq: [] },
      { nombre: "Economía y turismo", prereq: [] },
      { nombre: "Legislación ambiental y turística", prereq: [] },
      { nombre: "Marketing e investigación de mercados turísticos", prereq: ["Investigación aplicada al turismo"] },
      { nombre: "Ingles 5", prereq: ["Ingles 4"] }
    ]
  },
  {
    nivel: "Sexto Ciclo",
    cursos: [
      { nombre: "Liderazgo y negociación", prereq: [] },
      { nombre: "Finanzas", prereq: [] },
      { nombre: "Operación turística y turismo", prereq: ["Intermediación turística"] },
      { nombre: "Ordenamiento territorial", prereq: ["Legislación ambiental y turística"] },
      { nombre: "Etnografía, folklore y saberes ancestrales", prereq: ["Todas las materias anteriores"] },
      { nombre: "Ingles 6", prereq: ["Ingles 5"] }
    ]
  },
  {
    nivel: "Séptimo Ciclo",
    cursos: [
      { nombre: "Ciudad y turismo", prereq: ["Etnografía, folklore y saberes ancestrales"] },
      { nombre: "Práctica laboral 2", prereq: ["Práctica Laboral 1"] },
      { nombre: "Ingles 7", prereq: ["Ingles 6"] },
      { nombre: "Planificación turística", prereq: ["Ordenamiento territorial"] },
      { nombre: "Diseño de trabajo de integración curricular", prereq: ["Todas las materias anteriores"] },
      { nombre: "Gestión pública del turismo", prereq: ["legislación ambiental y turística", "Legislación empresarial"] },
      { nombre: "Práctica servicio comunitario 1", prereq: ["Etnografía, folklore y saberes ancestrales"] }
    ]
  },
  {
    nivel: "Octavo Ciclo",
    cursos: [
      { nombre: "Proyectos turísticos y emprendimiento", prereq: ["Planificación turística", "Finanzas"] },
      { nombre: "Ingles 8", prereq: ["Ingles 7"] },
      { nombre: "Práctica servicio comunitario 2", prereq: ["Práctica servicio comunitario 1"] },
      { nombre: "Industrias culturales y MICE", prereq: ["Ciudad y turismo"] },
      { nombre: "Integración curricular: Trabajo de integración curricular", prereq: ["Diseño de trabajo de integración curricular"] },
      { nombre: "Ética", prereq: [] }
    ]
  }
];

const container = document.getElementById("malla-container");
const info = document.getElementById("info");
const aprobadas = new Set();

function puedeTomarse(curso) {
  if (!curso.prereq.length) return true;
  if (curso.prereq.includes("Todas las materias anteriores")) {
    return aprobadas.size >= contarTotalMateriasHastaNivel(curso);
  }
  return curso.prereq.every(pr => aprobadas.has(pr));
}

function contarTotalMateriasHastaNivel(cursoActual) {
  let total = 0;
  for (let nivel of malla) {
    for (let curso of nivel.cursos) {
      if (curso.nombre === cursoActual.nombre) return total;
      total++;
    }
  }
  return total;
}

function actualizarTodo() {
  document.querySelectorAll(".curso").forEach(elem => {
    elem.dispatchEvent(new CustomEvent("actualizarEstado"));
  });
}

malla.forEach(ciclo => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${ciclo.nivel}</h2>`;
  ciclo.cursos.forEach(c => {
    const cdiv = document.createElement("div");
    cdiv.className = "curso";
    cdiv.innerText = c.nombre;

    function actualizarEstado() {
      const activo = puedeTomarse(c);
      cdiv.style.opacity = activo ? "1" : "0.4";
      cdiv.style.pointerEvents = activo ? "auto" : "none";
    }

    cdiv.onclick = () => {
      if (!puedeTomarse(c)) return;
      aprobadas.add(c.nombre);
      const prereqs = c.prereq.length ? c.prereq.join(", ") : "Sin prerrequisitos";
      info.innerText = `Asignatura aprobada: ${c.nombre}\nPrerrequisitos: ${prereqs}`;
      actualizarTodo();
    };

    cdiv.addEventListener("actualizarEstado", actualizarEstado);
    actualizarEstado();
    div.appendChild(cdiv);
  });
  container.appendChild(div);
});
