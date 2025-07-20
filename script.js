const malla = [
  {
    "nivel": 1,
    "cursos": [
      {
        "nombre": "Introducci\u00f3n a la hospitalidad",
        "prereq": []
      },
      {
        "nombre": "Sociolog\u00eda y Turismo",
        "prereq": []
      },
      {
        "nombre": "Inform\u00e1tica",
        "prereq": []
      },
      {
        "nombre": "Ingles 1",
        "prereq": []
      },
      {
        "nombre": "Matem\u00e1ticas Financieras",
        "prereq": []
      },
      {
        "nombre": "Filosof\u00eda",
        "prereq": []
      }
    ]
  },
  {
    "nivel": 2,
    "cursos": [
      {
        "nombre": "Historia del Ecuador y Latinoam\u00e9rica",
        "prereq": []
      },
      {
        "nombre": "Escritura acad\u00e9mica",
        "prereq": []
      },
      {
        "nombre": "Geograf\u00eda y Turismo",
        "prereq": []
      },
      {
        "nombre": "Cultura del servicio",
        "prereq": []
      },
      {
        "nombre": "Ingles 2",
        "prereq": [
          "Ingles 1"
        ]
      },
      {
        "nombre": "Estad\u00edstica Descriptiva",
        "prereq": []
      }
    ]
  },
  {
    "nivel": 3,
    "cursos": [
      {
        "nombre": "Patrimonio Cultural del Ecuador",
        "prereq": []
      },
      {
        "nombre": "Patrimonio Natural del Ecuador",
        "prereq": []
      },
      {
        "nombre": "Relaciones p\u00fablicas y protocolo",
        "prereq": []
      },
      {
        "nombre": "Gesti\u00f3n Sostenible y Turismo",
        "prereq": []
      },
      {
        "nombre": "Ingles 3",
        "prereq": [
          "Ingles 2"
        ]
      },
      {
        "nombre": "Estad\u00edstica Inferencial",
        "prereq": [
          "Estad\u00edstica Descriptiva"
        ]
      }
    ]
  },
  {
    "nivel": 4,
    "cursos": [
      {
        "nombre": "Administraci\u00f3n de empresas tur\u00edsticas",
        "prereq": []
      },
      {
        "nombre": "Legislaci\u00f3n empresarial",
        "prereq": []
      },
      {
        "nombre": "Pr\u00e1ctica Laboral 1",
        "prereq": [
          "Relaciones p\u00fablicas y protocolo"
        ]
      },
      {
        "nombre": "Contabilidad",
        "prereq": []
      },
      {
        "nombre": "Investigaci\u00f3n aplicada al turismo",
        "prereq": [
          "Estad\u00edstica Inferencial"
        ]
      },
      {
        "nombre": "Ingles 4",
        "prereq": [
          "Ingles 3"
        ]
      }
    ]
  },
  {
    "nivel": 5,
    "cursos": [
      {
        "nombre": "Intermediaci\u00f3n tur\u00edstica",
        "prereq": []
      },
      {
        "nombre": "Sistemas de calidad aplicados al turismo",
        "prereq": []
      },
      {
        "nombre": "Econom\u00eda y turismo",
        "prereq": []
      },
      {
        "nombre": "Legislaci\u00f3n ambiental y tur\u00edstica",
        "prereq": []
      },
      {
        "nombre": "Marketing e investigaci\u00f3n de mercados tur\u00edsticos",
        "prereq": [
          "Investigaci\u00f3n aplicada al turismo"
        ]
      },
      {
        "nombre": "Ingles 5",
        "prereq": [
          "Ingles 4"
        ]
      }
    ]
  },
  {
    "nivel": 6,
    "cursos": [
      {
        "nombre": "Liderazgo y negociaci\u00f3n",
        "prereq": []
      },
      {
        "nombre": "Finanzas",
        "prereq": []
      },
      {
        "nombre": "Operaci\u00f3n tur\u00edstica y turismo",
        "prereq": [
          "Intermediaci\u00f3n tur\u00edstica"
        ]
      },
      {
        "nombre": "Ordenamiento territorial",
        "prereq": [
          "Legislaci\u00f3n ambiental y tur\u00edstica"
        ]
      },
      {
        "nombre": "Etnograf\u00eda, folklore y saberes ancestrales",
        "prereq": [
          "Todas las materias anteriores"
        ]
      },
      {
        "nombre": "Ingles 6",
        "prereq": [
          "Ingles 5"
        ]
      }
    ]
  },
  {
    "nivel": 7,
    "cursos": [
      {
        "nombre": "Ciudad y turismo",
        "prereq": [
          "Etnograf\u00eda, folklore y saberes ancestrales"
        ]
      },
      {
        "nombre": "Pr\u00e1ctica laboral 2",
        "prereq": [
          "Pr\u00e1ctica Laboral 1"
        ]
      },
      {
        "nombre": "Ingles 7",
        "prereq": [
          "Ingles 6"
        ]
      },
      {
        "nombre": "Planificaci\u00f3n tur\u00edstica",
        "prereq": [
          "Ordenamiento territorial"
        ]
      },
      {
        "nombre": "Dise\u00f1o de trabajo de integraci\u00f3n curricular",
        "prereq": [
          "Todas las materias anteriores"
        ]
      },
      {
        "nombre": "Gesti\u00f3n p\u00fablica del turismo",
        "prereq": [
          "Legislaci\u00f3n ambiental y tur\u00edstica",
          "Legislaci\u00f3n empresarial"
        ]
      },
      {
        "nombre": "Pr\u00e1ctica servicio comunitario 1",
        "prereq": [
          "Etnograf\u00eda, folklore y saberes ancestrales"
        ]
      }
    ]
  },
  {
    "nivel": 8,
    "cursos": [
      {
        "nombre": "Proyectos tur\u00edsticos y emprendimiento",
        "prereq": [
          "Planificaci\u00f3n tur\u00edstica",
          "Finanzas"
        ]
      },
      {
        "nombre": "Ingles 8",
        "prereq": [
          "Ingles 7"
        ]
      },
      {
        "nombre": "Pr\u00e1ctica servicio comunitario 2",
        "prereq": [
          "Pr\u00e1ctica servicio comunitario 1"
        ]
      },
      {
        "nombre": "Industrias culturales y MICE",
        "prereq": [
          "Ciudad y turismo"
        ]
      },
      {
        "nombre": "Integraci\u00f3n curricular: Trabajo de integraci\u00f3n curricular",
        "prereq": [
          "Dise\u00f1o de trabajo de integraci\u00f3n curricular"
        ]
      },
      {
        "nombre": "\u00c9tica",
        "prereq": []
      }
    ]
  }
];

const container = document.getElementById("malla-container");
const info = document.getElementById("info");

malla.forEach(ciclo => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>Ciclo ${ciclo.nivel}</h2>`;
  ciclo.cursos.forEach(c => {
    const cdiv = document.createElement("div");
    cdiv.className = "curso";
    cdiv.innerText = c.nombre;
    cdiv.onclick = () => {
      const prereqs = c.prereq.length ? c.prereq.join(", ") : "Sin prerrequisitos";
      info.innerText = `Asignatura: ${c.nombre}\nPrerrequisitos: ${prereqs}`;
    };
    div.appendChild(cdiv);
  });
  container.appendChild(div);
});
