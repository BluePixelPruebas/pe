/**
 * TALENT HUB · FUNDACIÓN PROEMPLEO × BLUEPIXEL
 * Archivo Maestro de Lógica e Interactividad (app.js)
 * Conforme a BPDS 2027 y Requerimientos TDR TH-2026
 */

// Estado Global de la Aplicación
const AppState = {
  currentView: 'onboarding',
  isMobileFrame: true,
  user: {
    nombre: 'Mariana Hernández',
    correo: 'mariana.hernandez@ejemplo.com',
    edadTipo: 'adult', // 'minor' o 'adult'
    tutor: '',
    situacion: 'egresado',
    puntos: 180,
    nivel: 'Nivel 1: Explorador',
    perfilAsignado: null,
    scores: {
      blandas: 85,
      digitales: 70,
      cv: 45,
      adaptabilidad: 90,
      disponibilidad: 80
    },
    postulaciones: [
      {
        id: 2,
        titulo: 'Auxiliar de Operaciones y Logística Junior',
        entidad: 'Distribuidora Central (Red Aliada ProEmpleo)',
        fecha: 'Hoy (17 oct)',
        tipo: 'empleo',
        estado: 'revision',
        entrevistaFecha: 'Jueves 22 oct · 11:00 hrs',
        entrevistaLugar: 'Videollamada Google Meet (Reclutamiento)',
        salario: '$9,800 MXN mensuales + Prestaciones de Ley'
      },
      {
        id: 4,
        titulo: 'Servicio Social y Prácticas en Vinculación Social',
        entidad: 'Fundación ProEmpleo Productivo, A.C.',
        fecha: 'Hoy (17 oct)',
        tipo: 'practicas',
        estado: 'revision',
        entrevistaFecha: 'Viernes 23 oct · 10:30 hrs',
        entrevistaLugar: 'Oficinas Anzures (Herschel 131, CDMX)',
        salario: 'Beca de Transporte + Liberación Oficial'
      },
      {
        id: 3,
        titulo: 'Taller ReEmprende Digital: Comercio Electrónico y Redes',
        entidad: 'Fundación ProEmpleo',
        fecha: 'Hoy (17 oct)',
        tipo: 'curso',
        estado: 'revision',
        entrevistaFecha: 'Lunes 26 oct · 17:00 hrs',
        entrevistaLugar: 'Aula Virtual ProEmpleo (Vía Zoom)',
        salario: '100% Becado · 30 horas acreditadas'
      },
      {
        id: 1,
        titulo: 'Taller Emprende: De la Idea a tu Empresa Sostenible',
        entidad: 'Fundación ProEmpleo',
        fecha: 'Hoy (17 oct)',
        tipo: 'curso',
        estado: 'revision',
        entrevistaFecha: 'Martes 27 oct · 16:00 hrs',
        entrevistaLugar: 'Sede Central ProEmpleo / Aula Virtual',
        salario: '100% Becado · Programa Insignia 80 hrs'
      }
    ],
    enrolledWorkshop: false,
    stage: 'diagnostico'
  },
  currentQuestionIndex: 0,
  opportunitiesFilter: 'all',
  catalogSearchQuery: '',
  opportunities: [
    {
      id: 1,
      titulo: 'Taller Emprende: De la Idea a tu Empresa Sostenible',
      entidad: 'Fundación ProEmpleo',
      tipo: 'curso',
      tipoLabel: 'Programa Insignia',
      modalidad: 'En línea / Presencial CDMX',
      duracion: '80 horas · 100% becado',
      requisitos: 'Mayor de 16 años · Saber operaciones básicas',
      descripcion: 'Aprende administración, mercadotecnia, finanzas, ventas y responsabilidad social empresarial para fundar tu propio negocio o proyecto productivo con asesoría de consultores certificados.',
      enlaceExterno: 'https://proempleo.org.mx/inicio/programas#programas',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Auxiliar de Operaciones y Logística Junior',
      entidad: 'Distribuidora Central (Red Aliada ProEmpleo)',
      tipo: 'empleo',
      tipoLabel: 'Primer Empleo',
      modalidad: 'Presencial · CDMX (Zona Miguel Hidalgo)',
      duracion: 'Tiempo Completo · Contrato Indefinido',
      salario: '$9,800 MXN mensuales + Prestaciones de Ley',
      requisitos: '18 a 29 años · Bachillerato concluido · Manejo básico de Excel',
      descripcion: 'Oportunidad para jóvenes que buscan su primer empleo formal. Apoyo en control de inventarios, recepción de pedidos y coordinación de entregas. Capacitación pagada.',
      enlaceExterno: '#',
      destacado: true
    },
    {
      id: 3,
      titulo: 'Taller ReEmprende Digital: Comercio Electrónico y Redes',
      entidad: 'Fundación ProEmpleo',
      tipo: 'curso',
      tipoLabel: 'Habilidades Digitales',
      modalidad: '100% En línea',
      duracion: '30 horas · A tu propio ritmo',
      requisitos: 'Mayor de 18 años · Dispositivo con conexión a internet',
      descripcion: 'Aprende a crear tu tienda en línea, gestionar campañas digitales en redes sociales y procesar pagos electrónicos de forma segura.',
      enlaceExterno: 'https://proempleo.org.mx/inicio/programas',
      destacado: false
    },
    {
      id: 4,
      titulo: 'Servicio Social y Prácticas en Vinculación Social',
      entidad: 'Fundación ProEmpleo Productivo, A.C.',
      tipo: 'practicas',
      tipoLabel: 'Servicio Social / Prácticas',
      modalidad: 'Híbrido · Oficinas Anzures (Herschel 131, CDMX)',
      duracion: '4 a 6 meses (Liberación oficial)',
      requisitos: 'Estudiantes de Licenciatura (Administración, Mercadotecnia, Psicología, Sistemas)',
      descripcion: 'Libera tu servicio social apoyando en el seguimiento a emprendedores y en la operación digital de los programas de capacitación comunitaria.',
      enlaceExterno: 'https://proempleo.org.mx/inicio/programas',
      destacado: false
    },
    {
      id: 5,
      titulo: 'Soporte Administrativo y Gestión Documental',
      entidad: 'ST Capital Family Office (Empresa Aliada)',
      tipo: 'empleo',
      tipoLabel: 'Empleo Junior',
      modalidad: 'Híbrido · CDMX',
      duracion: 'Tiempo Completo',
      salario: '$11,500 MXN mensuales + Seguro de Gastos Médicos',
      requisitos: '18 a 29 años · Egresados o estudiantes de últimos semestres · Interés en administración',
      descripcion: 'Gestión de expedientes digitales, captura de información financiera y atención a proveedores. Excelente ambiente de aprendizaje corporativo.',
      enlaceExterno: '#',
      destacado: false
    },
    {
      id: 6,
      titulo: 'Certificación en Fundamentos Digitales y Productividad en la Nube',
      entidad: 'Iniciativa Aliada (Google for Nonprofits × ProEmpleo)',
      tipo: 'curso',
      tipoLabel: 'Certificación Aliada',
      modalidad: 'En línea · Gratuito',
      duracion: '20 horas · Certificado oficial con validez',
      requisitos: 'Jóvenes inscritos en el Talent Hub',
      descripcion: 'Capacitación en herramientas colaborativas en la nube, gestión de datos, automatizaciones básicas y ciberseguridad personal para el trabajo.',
      enlaceExterno: '#',
      destacado: false
    }
  ],
  questions: [
    {
      categoria: '1. Competencias Sociolaborales',
      pregunta: 'Cuando enfrentas una tarea o reto laboral que nunca antes habías realizado, ¿cuál es tu primera reacción habitual?',
      opciones: [
        { texto: 'Investigo por mi cuenta, organizo los pasos y pregunto dudas puntuales a un compañero o mentor.', valor: { blandas: 90, adaptabilidad: 85 } },
        { texto: 'Prefiero que alguien me explique paso a paso antes de comenzar para no cometer equivocaciones.', valor: { blandas: 65, adaptabilidad: 60 } },
        { texto: 'Propongo una forma creativa y distinta de resolverlo, asumiendo la iniciativa del proyecto.', valor: { blandas: 85, adaptabilidad: 95 } },
        { texto: 'Me causa incertidumbre, pero busco adaptarme a lo que el equipo decida.', valor: { blandas: 70, adaptabilidad: 70 } }
      ]
    },
    {
      categoria: '2. Habilidades Digitales y Herramientas',
      pregunta: '¿Cuál es tu nivel de familiaridad actual utilizando herramientas digitales para trabajo o estudio?',
      opciones: [
        { texto: 'Manejo fluido de hojas de cálculo (fórmulas), documentos colaborativos y plataformas en la nube.', valor: { digitales: 90, cv: 80 } },
        { texto: 'Nivel básico: correo electrónico, redes sociales y navegación en internet para trámites.', valor: { digitales: 55, cv: 50 } },
        { texto: 'Experiencia con diseño digital, tiendas en línea o creación de contenido multimedia.', valor: { digitales: 95, cv: 75 } },
        { texto: 'Solo utilizo el celular para mensajería y búsqueda de información esencial.', valor: { digitales: 40, cv: 35 } }
      ]
    },
    {
      categoria: '3. Meta Profesional Inmediata',
      pregunta: '¿Qué tipo de oportunidad estás buscando como tu prioridad número uno en este momento?',
      opciones: [
        { texto: 'Mi primer empleo formal o mejorar mis condiciones laborales actuales.', perfil: 'Inserción Laboral Acelerada (Empleo Junior)', valor: { cv: 70, disponibilidad: 90 } },
        { texto: 'Iniciar o hacer crecer mi propio negocio o proyecto de autoempleo.', perfil: 'Emprendimiento Sostenible (Taller Emprende)', valor: { blandas: 90, adaptabilidad: 90 } },
        { texto: 'Prácticas profesionales o servicio social que complemente mi carrera.', perfil: 'Vinculación Universitaria y Pasantías', valor: { cv: 60, disponibilidad: 70 } },
        { texto: 'Aprender habilidades prácticas y certificarme antes de postular a vacantes.', perfil: 'Capacitación y Fortalecimiento de Perfil', valor: { digitales: 85, adaptabilidad: 80 } }
      ]
    },
    {
      categoria: '4. Tiempo y Disponibilidad',
      pregunta: '¿Con qué disponibilidad de tiempo y movilidad cuentas para iniciar actividades?',
      opciones: [
        { texto: 'Tiempo completo disponible de inmediato (Presencial o Híbrido en CDMX/Edomex).', valor: { disponibilidad: 100 } },
        { texto: 'Medio tiempo (Turno matutino o vespertino) porque continúo estudiando.', valor: { disponibilidad: 75 } },
        { texto: 'Prioritariamente en modalidad remota / trabajo desde casa.', valor: { disponibilidad: 65, digitales: 85 } },
        { texto: 'Fines de semana o capacitación en horarios flexibles autogestionados.', valor: { disponibilidad: 50 } }
      ]
    },
    {
      categoria: '5. Barreras y Retos para el Empleo',
      pregunta: '¿Cuál consideras que es hoy tu mayor reto o barrera para integrarte al empleo formal o emprender?',
      opciones: [
        { texto: 'Falta de experiencia previa comprobable o cartas de recomendación.', valor: { cv: 50, adaptabilidad: 80 } },
        { texto: 'Dificultad para estructurar un CV profesional y desenvolverme en entrevistas.', valor: { cv: 40, blandas: 75 } },
        { texto: 'Tiempos de traslado, transporte o lejanía de las zonas con vacantes.', valor: { disponibilidad: 60, adaptabilidad: 85 } },
        { texto: 'Necesidad de capacitación técnica y habilidades digitales que exigen las empresas.', valor: { digitales: 60, cv: 60 } }
      ]
    }
  ],
  adminYouths: [
    { nombre: 'Mariana Hernández', edad: 22, perfil: 'Inserción Laboral Junior', ruta: 'Paso 1: Diagnóstico (40%)', status: 'En diagnóstico' },
    { nombre: 'Carlos Eduardo Peña', edad: 17, perfil: 'Taller Emprende (Menor)', ruta: 'Paso 1: Diagnóstico', status: 'Consentimiento Validado' },
    { nombre: 'Valeria Montserrat Gómez', edad: 25, perfil: 'Operaciones y Logística', ruta: 'Paso 3: Vinculación', status: 'Entrevista Agendada' },
    { nombre: 'Jorge Luis Morales', edad: 19, perfil: 'ReEmprende Digital', ruta: 'Paso 2: Cursos Aliados', status: 'En capacitación' },
    { nombre: 'Ana Sofía Rincón', edad: 21, perfil: 'Servicio Social ProEmpleo', ruta: 'Paso 3: Vinculación', status: 'Postulación Activa' }
  ]
};

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initNavEvents();
  renderDiagnosticQuestion();
  renderOpportunities('all');
  renderAdminTable();
  if (typeof renderUserApplications === 'function') renderUserApplications();
  if (typeof renderAdminPostulations === 'function') renderAdminPostulations();
  if (typeof renderAdminCartera === 'function') renderAdminCartera();
});

// Reloj digital en vivo en la barra del teléfono
function initClock() {
  const timeElem = document.getElementById('live-time');
  if (!timeElem) return;
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElem.textContent = `${hours}:${minutes}`;
  };
  updateTime();
  setInterval(updateTime, 30000);
}

// Configuración de Navegación y Eventos
function initNavEvents() {
  // Tabs de la barra de navegación (Sidebar vertical)
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetView = tab.getAttribute('data-view');
      switchView(targetView);
    });
  });

  // Toggle de dispositivo (Móvil vs Escritorio)
  const toggleBtn = document.getElementById('btn-device-toggle');
  const viewport = document.getElementById('app-viewport');
  const label = document.getElementById('device-label');

  if (toggleBtn && viewport) {
    toggleBtn.addEventListener('click', () => {
      AppState.isMobileFrame = !AppState.isMobileFrame;
      if (AppState.isMobileFrame) {
        viewport.classList.remove('desktop-frame');
        viewport.classList.add('mobile-frame');
        label.textContent = 'Marco Celular (Mobile-First)';
        showToast('Vista ajustada a teléfono móvil (390px)');
      } else {
        viewport.classList.remove('mobile-frame');
        viewport.classList.add('desktop-frame');
        label.textContent = 'Pantalla Completa (Desktop)';
        showToast('Vista ajustada a escritorio completo');
      }
    });
  }
}

// ==========================================================================
// CONTROLADOR DE VISTAS
// ==========================================================================
window.switchView = function(viewId) {
  AppState.currentView = viewId;

  // Actualizar paneles visibles
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const targetPanel = document.getElementById(`view-${viewId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Actualizar pestañas del selector vertical
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-view') === viewId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Actualizar botones de la barra inferior móvil
  document.querySelectorAll('.phone-bottom-nav .bnav-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Scroll al inicio del contenedor
  const scrollContainer = document.getElementById('mobile-content-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // Acciones específicas según la vista
  if (viewId === 'diagnostico' && AppState.currentQuestionIndex >= AppState.questions.length) {
    drawRadarChart();
  }
  if (viewId === 'ruta') {
    if (typeof updateUserRouteUI === 'function') updateUserRouteUI();
    if (typeof renderUserApplications === 'function') renderUserApplications();
  }
  if (viewId === 'admin') {
    if (typeof renderAdminTable === 'function') renderAdminTable();
    if (typeof renderAdminPostulations === 'function') renderAdminPostulations();
    if (typeof renderAdminCartera === 'function') renderAdminCartera();
  }
};

// ==========================================================================
// VISTA 1: ONBOARDING & LFPDPPP
// ==========================================================================
window.handleAgeChange = function(type) {
  AppState.user.edadTipo = type;
  const lfpdpppBox = document.getElementById('lfpdppp-box');
  const cardMinor = document.getElementById('card-age-minor');
  const cardAdult = document.getElementById('card-age-adult');

  if (type === 'minor') {
    cardMinor.classList.add('selected');
    cardAdult.classList.remove('selected');
    lfpdpppBox.style.display = 'block';
    showToast('Aviso: Activado protocolo de protección de datos para menores (LFPDPPP).');
  } else {
    cardAdult.classList.add('selected');
    cardMinor.classList.remove('selected');
    lfpdpppBox.style.display = 'none';
  }
};

// Control del componente Select Custom Mobile-First (contenido en el mockup)
window.toggleCustomSelect = function(id) {
  const dropdown = document.getElementById(`custom-${id}-dropdown`);
  const trigger = document.getElementById(`custom-${id}-trigger`);
  if (!dropdown || !trigger) return;

  const isOpen = dropdown.style.display === 'block';
  if (isOpen) {
    dropdown.style.display = 'none';
    trigger.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
  } else {
    dropdown.style.display = 'block';
    trigger.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
  }
};

window.selectCustomOption = function(id, value, label) {
  // 1. Actualizar el select nativo oculto
  const nativeSelect = document.getElementById(`select-${id}`);
  if (nativeSelect) {
    nativeSelect.value = value;
    nativeSelect.dispatchEvent(new Event('change'));
  }

  // 2. Actualizar el texto visible en el trigger
  const labelElem = document.getElementById(`custom-${id}-label`);
  if (labelElem) labelElem.textContent = label;

  // 3. Actualizar clase selected en opciones
  const dropdown = document.getElementById(`custom-${id}-dropdown`);
  if (dropdown) {
    dropdown.querySelectorAll('.custom-option').forEach(opt => {
      if (opt.getAttribute('data-value') === value) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });
    dropdown.style.display = 'none';
  }

  const trigger = document.getElementById(`custom-${id}-trigger`);
  if (trigger) {
    trigger.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
  }
};

// Cerrar select custom al hacer clic fuera
document.addEventListener('click', function(e) {
  const wrapper = document.getElementById('custom-situacion-wrapper');
  if (wrapper && !wrapper.contains(e.target)) {
    const dropdown = document.getElementById('custom-situacion-dropdown');
    const trigger = document.getElementById('custom-situacion-trigger');
    if (dropdown) dropdown.style.display = 'none';
    if (trigger) {
      trigger.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  }
});

window.startDiagnosticoFromForm = function() {
  const nombreInput = document.getElementById('input-nombre');
  const situacionInput = document.getElementById('select-situacion');
  const tutorInput = document.getElementById('input-tutor');

  if (nombreInput && nombreInput.value.trim() !== '') {
    AppState.user.nombre = nombreInput.value.trim();
    const firstName = AppState.user.nombre.split(' ')[0];
    
    // Actualizar nombre en cabecera y dashboard
    const usernameHeader = document.getElementById('header-username');
    const dashUsername = document.getElementById('dash-username');
    if (usernameHeader) usernameHeader.textContent = firstName;
    if (dashUsername) dashUsername.textContent = firstName;
  }

  if (AppState.user.edadTipo === 'minor' && tutorInput && tutorInput.value.trim() !== '') {
    AppState.user.tutor = tutorInput.value.trim();
  }

  // Preconfigurar ruta si seleccionó emprendimiento o prácticas en el registro
  if (situacionInput) {
    const sit = situacionInput.value;
    if (sit === 'emprendimiento') {
      AppState.user.perfilAsignado = 'Emprendimiento Sostenible (Taller Emprende)';
    } else if (sit === 'practicas') {
      AppState.user.perfilAsignado = 'Vinculación Universitaria y Pasantías';
    } else {
      AppState.user.perfilAsignado = 'Inserción Laboral Acelerada (Empleo Junior)';
    }
  }

  AppState.user.enrolledWorkshop = false;
  showToast(`¡Bienvenida(o), ${AppState.user.nombre.split(' ')[0]}! Iniciando diagnóstico oficial.`);
  switchView('diagnostico');
};

// ==========================================================================
// VISTA 2: DIAGNÓSTICO INTERACTIVO & CANVAS RADAR
// ==========================================================================
function renderDiagnosticQuestion() {
  const qIndex = AppState.currentQuestionIndex;
  const totalQ = AppState.questions.length;

  const counterElem = document.getElementById('diag-step-counter');
  const barElem = document.getElementById('diag-progress-bar');
  const catElem = document.getElementById('q-category');
  const titleElem = document.getElementById('q-title');
  const optionsContainer = document.getElementById('q-options');

  if (qIndex >= totalQ) {
    // Diagnóstico finalizado: mostrar resultados
    showDiagnosticResults();
    return;
  }

  const q = AppState.questions[qIndex];
  if (counterElem) counterElem.textContent = `Pregunta ${qIndex + 1} de ${totalQ}`;
  if (barElem) barElem.style.width = `${((qIndex + 1) / totalQ) * 100}%`;
  if (catElem) catElem.textContent = q.categoria;
  if (titleElem) titleElem.textContent = q.pregunta;

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    q.opciones.forEach((opt, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="opt-badge">${letter}</span>
        <span>${opt.texto}</span>
      `;
      btn.onclick = () => handleAnswerSelected(opt);
      optionsContainer.appendChild(btn);
    });
  }
}

function handleAnswerSelected(option) {
  // Acumular valores en AppState
  if (option.valor) {
    Object.keys(option.valor).forEach(key => {
      if (AppState.user.scores[key] !== undefined) {
        AppState.user.scores[key] = Math.min(100, Math.round((AppState.user.scores[key] + option.valor[key]) / 2));
      }
    });
  }

  if (option.perfil) {
    AppState.user.perfilAsignado = option.perfil;
  }

  AppState.currentQuestionIndex++;
  renderDiagnosticQuestion();
}

function showDiagnosticResults() {
  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('diagnostic-results');
  const headerElem = document.querySelector('.diagnostic-header');

  if (quizContainer) quizContainer.style.display = 'none';
  if (headerElem) headerElem.style.display = 'none';
  if (resultsContainer) {
    resultsContainer.style.display = 'block';

    const profileName = document.getElementById('res-profile-name');
    const profileDesc = document.getElementById('res-profile-desc');

    if (AppState.user.perfilAsignado) {
      if (profileName) profileName.textContent = AppState.user.perfilAsignado;
      if (AppState.user.perfilAsignado.includes('Emprende')) {
        if (profileDesc) profileDesc.textContent = 'Muestras una fuerte inclinación a la resolución autónoma de problemas y liderazgo. Tu ruta sugerida se centra en el modelo de incubación y talleres de gestión de microempresas de Fundación ProEmpleo.';
      } else {
        if (profileDesc) profileDesc.textContent = 'Muestras sólida adaptabilidad y perfil de comunicación. Tu ruta se enfocará en formalizar tu CV, afinar técnicas de entrevista y canalizarte con las empresas aliadas de la Fundación.';
      }
    }

    setTimeout(drawRadarChart, 50);
    if (typeof updateUserRouteUI === 'function') updateUserRouteUI();
    if (typeof window.fireConfetti === 'function') window.fireConfetti();
    if (typeof window.triggerPushNotification === 'function') {
      window.triggerPushNotification('Diagnóstico Completado 🎉 (+100 Pts)', 'Tu radar vocacional fue procesado. ¡Ruta personalizada activa en Mi Ruta!');
    }
  }

  // Sumar puntos de gamificación por completar diagnóstico
  AppState.user.puntos += 100;
  const pointsElem = document.querySelector('.level-points');
  if (pointsElem) pointsElem.textContent = `${AppState.user.puntos} Puntos TH`;
}

// Dibujo del Gráfico Radar con Canvas HTML5 (Estética ProEmpleo Oficial)
function drawRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const cX = width / 2;
  const cY = height / 2;
  const radius = 78;

  ctx.clearRect(0, 0, width, height);

  const axes = [
    { label: 'Sociolaboral', val: AppState.user.scores.blandas },
    { label: 'Digital', val: AppState.user.scores.digitales },
    { label: 'CV / Experiencia', val: AppState.user.scores.cv },
    { label: 'Adaptabilidad', val: AppState.user.scores.adaptabilidad },
    { label: 'Disponibilidad', val: AppState.user.scores.disponibilidad }
  ];
  const numAxes = axes.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Dibujar mallas de fondo concéntricas
  const levels = 4;
  for (let l = 1; l <= levels; l++) {
    const levelRadius = (radius / levels) * l;
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = cX + levelRadius * Math.cos(angle);
      const y = cY + levelRadius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#e3dacd';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Dibujar ejes radiales y etiquetas
  ctx.font = '500 11px "Plus Jakarta Sans", "BwModelica", sans-serif';
  ctx.fillStyle = '#4a453e';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = cX + radius * Math.cos(angle);
    const y = cY + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(cX, cY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#d4c7b8';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Etiqueta
    const labelX = cX + (radius + 20) * Math.cos(angle);
    const labelY = cY + (radius + 14) * Math.sin(angle);
    ctx.fillText(axes[i].label, labelX, labelY);
  }

  // Polígono de datos del usuario (Naranja ProEmpleo #f68b2c)
  ctx.beginPath();
  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const normVal = (axes[i].val / 100) * radius;
    const x = cX + normVal * Math.cos(angle);
    const y = cY + normVal * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  // Relleno Naranja ProEmpleo translúcido
  ctx.fillStyle = 'rgba(246, 139, 44, 0.25)';
  ctx.fill();
  ctx.strokeStyle = '#f68b2c';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Nodos circulares en Turquesa ProEmpleo (#2db4bc)
  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const normVal = (axes[i].val / 100) * radius;
    const x = cX + normVal * Math.cos(angle);
    const y = cY + normVal * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2db4bc';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

// ==========================================================================
// VISTA 4: CATÁLOGO DE OPORTUNIDADES & FILTROS & BÚSQUEDA
// ==========================================================================
window.filterOpportunities = function(type, buttonElem) {
  AppState.opportunitiesFilter = type;

  // Cambiar clases activas en botones
  document.querySelectorAll('.filter-chips-row .filter-chip').forEach(btn => {
    btn.classList.remove('active');
  });
  const targetBtn = buttonElem || document.querySelector(`.filter-chips-row .filter-chip[data-filter="${type}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  renderOpportunities(type);
};

// Navegación contextual inteligente desde Mi Ruta hacia Catálogo
window.goToCatalogWithFilter = function(filterType, specificId, toastMsg) {
  // 1. Cambiar a la vista del catálogo
  window.switchView('catalogo');

  // 2. Limpiar campo de búsqueda para ver la categoría completa limpia
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  AppState.catalogSearchQuery = '';

  // 3. Activar el filtro deseado (curso, empleo, practicas)
  window.filterOpportunities(filterType);

  // 4. Si se especificó un ID de oportunidad, abrir directamente su modal tras el render
  if (specificId) {
    setTimeout(() => {
      window.openOpportunityModal(specificId);
    }, 180);
  } else if (toastMsg) {
    showToast(toastMsg);
  } else {
    const labelMap = { curso: 'Cursos y Talleres ProEmpleo', empleo: 'Vacantes de Empleo Junior', practicas: 'Prácticas y Servicio Social' };
    showToast(`📂 Filtro activo: ${labelMap[filterType] || filterType}`);
  }
};

window.handleSearchCatalog = function(query) {
  AppState.catalogSearchQuery = (query || '').toLowerCase().trim();
  const clearBtn = document.getElementById('catalog-search-clear');
  if (clearBtn) clearBtn.style.display = AppState.catalogSearchQuery ? 'block' : 'none';
  renderOpportunities(AppState.opportunitiesFilter);
};

window.clearCatalogSearch = function() {
  const input = document.getElementById('catalog-search-input');
  if (input) input.value = '';
  window.handleSearchCatalog('');
};

function renderOpportunities(filter) {
  const container = document.getElementById('opportunities-list');
  if (!container) return;

  const typeFilter = filter || AppState.opportunitiesFilter || 'all';
  const query = AppState.catalogSearchQuery || '';

  const filtered = AppState.opportunities.filter(op => {
    const matchesType = (typeFilter === 'all') || (op.tipo === typeFilter);
    if (!matchesType) return false;

    if (!query) return true;
    const haystack = `${op.titulo} ${op.entidad} ${op.descripcion} ${op.modalidad} ${op.requisitos} ${op.tipoLabel}`.toLowerCase();
    return haystack.includes(query);
  });

  const countBadge = document.getElementById('cat-count-all');
  if (countBadge) {
    countBadge.textContent = AppState.opportunities.length;
  }

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 28px 16px; background: #ffffff; border: 1px dashed var(--pe-border-line); border-radius: var(--pe-radius-sm); color: var(--pe-text-dim);">
        <span style="font-size: 24px; display: block; margin-bottom: 6px;">🔍</span>
        <strong style="color: var(--pe-text-main); font-size: 13px;">No se encontraron resultados</strong>
        <p style="font-size: 11.5px; margin-top: 4px;">Prueba buscando otra palabra clave o limpia el filtro.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'opp-card';
    card.onclick = () => window.openOpportunityModal(item.id);

    card.innerHTML = `
      <div class="opp-header">
        <span class="opp-type-badge ${item.tipo}">${item.tipoLabel}</span>
        <span class="opp-company">${item.entidad}</span>
      </div>
      <h4 class="opp-title">${item.titulo}</h4>
      <div class="opp-meta">
        <span>📍 ${item.modalidad}</span>
        <span>⏱️ ${item.duracion}</span>
        ${item.salario ? `<span>💰 ${item.salario}</span>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

// Modal de Detalle
window.openOpportunityModal = function(id) {
  const item = AppState.opportunities.find(o => o.id === id);
  if (!item) return;

  const modal = document.getElementById('opportunity-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const safeTitle = item.titulo.replace(/'/g, "\\'");
  const safeEntidad = item.entidad.replace(/'/g, "\\'");

  content.innerHTML = `
    <span class="bp-eyebrow" style="margin-bottom: 2px;">CONVOCATORIA VERIFICADA PROEMPLEO</span>
    <h3 style="font-size: 15px; margin-bottom: 3px; color: var(--pe-text-main); font-weight: 600; line-height: 1.25;">${item.titulo}</h3>
    <p style="font-size: 11px; color: var(--pe-teal); margin-bottom: 10px; font-weight: 600;">Publicado por: ${item.entidad}</p>
    
    <div style="background: var(--pe-bg-phone); border: 1px solid var(--pe-border-line); border-radius: var(--pe-radius-sm); padding: 10px; margin-bottom: 10px; font-size: 11.5px; line-height: 1.45; color: var(--pe-text-muted);">
      ${item.descripcion}
    </div>

    <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; font-size: 11px; color: var(--pe-text-dim);">
      <div><strong style="color: var(--pe-text-main);">Modalidad:</strong> ${item.modalidad}</div>
      <div><strong style="color: var(--pe-text-main);">Requisitos:</strong> ${item.requisitos}</div>
      ${item.salario ? `<div><strong style="color: var(--pe-text-main);">Compensación:</strong> ${item.salario}</div>` : ''}
    </div>

    <div style="display: flex; gap: 8px;">
      <button class="bp-btn bp-btn-primary w-full" style="padding: 8px 12px; font-size: 11.5px;" onclick="window.applyToOpportunity('${safeTitle}', '${safeEntidad}')">
        Postularme / Solicitar Registro
      </button>
      <button class="bp-btn bp-btn-outline" style="padding: 8px 12px; font-size: 11.5px;" onclick="window.closeModal()">
        Cerrar
      </button>
    </div>
  `;

  modal.style.display = 'flex';
};

window.closeModal = function() {
  const modal = document.getElementById('opportunity-modal');
  if (modal) modal.style.display = 'none';
};

// Confirmación de postulación interactiva y suma de XP
window.applyToOpportunity = function(title, entidad) {
  const content = document.getElementById('modal-content');
  if (!content) return;

  const appObj = {
    id: Date.now(),
    titulo: title,
    entidad: entidad || 'Empresa Aliada ProEmpleo',
    fecha: 'Hoy (' + new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }) + ')',
    tipo: title.toLowerCase().includes('taller') || title.toLowerCase().includes('curso') || title.toLowerCase().includes('certificación') ? 'curso' : 'empleo',
    estado: 'revision',
    entrevistaFecha: 'Jueves 22 oct · 11:00 hrs',
    entrevistaLugar: 'Videollamada Google Meet (Reclutamiento)',
    salario: title.toLowerCase().includes('auxiliar') ? '$9,800 MXN mensuales + Prestaciones' : 'Prestaciones de Ley'
  };

  if (!AppState.user.postulaciones) AppState.user.postulaciones = [];
  AppState.user.postulaciones.unshift(appObj);

  // Sumar 25 XP
  AppState.user.puntos += 25;
  const pointsElem = document.querySelector('.level-points');
  if (pointsElem) pointsElem.textContent = `${AppState.user.puntos} Puntos TH`;

  // Renderizar estado de éxito en el modal
  content.innerHTML = `
    <div class="modal-success-state">
      <div class="success-icon-wrap">✓</div>
      <h3 style="font-size: 17.5px; margin-bottom: 6px; color: var(--pe-text-main); font-weight: 600;">¡Postulación Registrada!</h3>
      <p style="font-size: 12px; color: var(--pe-text-muted); line-height: 1.5; margin-bottom: 14px;">
        Tu expediente y perfil validado han sido canalizados a <strong>${appObj.entidad}</strong> conforme a tu autorización de privacidad (LFPDPPP).
      </p>
      <div class="success-alert-tip">
        🎉 <strong>+25 Puntos TH ganados.</strong> Te notificaremos cuando la empresa revise tu expediente o agende entrevista.
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="bp-btn bp-btn-primary w-full" onclick="window.closeModal(); window.switchView('ruta');">
          Ver en Mi Ruta
        </button>
        <button class="bp-btn bp-btn-outline" onclick="window.closeModal();">
          Seguir Explorando
        </button>
      </div>
    </div>
  `;

  renderUserApplications();
  if (typeof window.renderAdminPostulations === 'function') window.renderAdminPostulations();

  if (typeof window.triggerPushNotification === 'function') {
    window.triggerPushNotification('Postulación Canalizada 📋', `Tu perfil fue compartido con ${appObj.entidad}. ¡Revisa tu avance en Mi Ruta!`);
  }
  showToast(`🎉 ¡Postulación registrada para "${title}"! +25 Puntos TH.`);
};

window.renderUserApplications = function() {
  const card = document.getElementById('my-apps-card');
  const countBadge = document.getElementById('my-apps-count');
  const list = document.getElementById('my-apps-list');
  if (!card || !list || !AppState.user.postulaciones) return;

  if (AppState.user.postulaciones.length > 0) {
    card.style.display = 'block';
    if (countBadge) countBadge.textContent = `${AppState.user.postulaciones.length} activa(s)`;
    list.innerHTML = '';

    const labels = {
      revision: { label: 'En Revisión', class: 'status-revision', icon: '🟡' },
      entrevista: { label: 'Entrevista Agendada', class: 'status-entrevista', icon: '📅' },
      aceptado: { label: '¡Aceptado(a)!', class: 'status-aceptado', icon: '🎉' },
      cartera: { label: 'En Cartera', class: 'status-cartera', icon: '📁' }
    };

    AppState.user.postulaciones.forEach(app => {
      const st = labels[app.estado] || labels.revision;
      const item = document.createElement('div');
      item.className = 'app-postulation-item';

      let detailsHtml = '';
      if (app.estado === 'entrevista') {
        detailsHtml = `
          <div class="app-post-subtext highlight-blue">
            <div><strong>📅 Cita Confirmada:</strong> ${app.entrevistaFecha || 'Jueves 22 oct · 11:00 hrs'}</div>
            <div style="font-size: 10px; color: #3b82f6; margin-top: 2px;">📍 ${app.entrevistaLugar || 'Entrevista virtual (Google Meet)'}</div>
            <button type="button" class="btn-subaction-pill blue" onclick="window.openInterviewModal(${app.id})">
              📲 Ver Enlace y Tips de Entrevista ↗
            </button>
          </div>
        `;
      } else if (app.estado === 'aceptado') {
        detailsHtml = `
          <div class="app-post-subtext highlight-green">
            <div><strong>🎉 ¡Felicidades! Seleccionado(a) formalmente</strong></div>
            <div style="font-size: 10px; color: #047857; margin-top: 2px;">💼 ${app.salario || 'Contrato formal asignado'}</div>
            <button type="button" class="btn-subaction-pill green" onclick="window.openOfferModal(${app.id})">
              📋 Ver Carta Oferta y Puesto ↗
            </button>
          </div>
        `;
      } else if (app.estado === 'cartera') {
        detailsHtml = `
          <div class="app-post-subtext highlight-gray">
            <div><strong>📁 En Banco de Talento Prioritario</strong></div>
            <div style="font-size: 10px; color: #475569; margin-top: 2px;">
              Tu expediente y perfil IMPATH™ están validados. Cuando la empresa o la red aliada abran nuevas plazas, serás convocado(a) con prioridad.
            </div>
            <button type="button" class="btn-subaction-pill gray" onclick="window.openCarteraInfoModal()">
              ℹ️ ¿Cómo funciona la Cartera de Talento? ↗
            </button>
          </div>
        `;
      } else {
        // En revisión
        detailsHtml = `
          <div class="app-post-subtext highlight-amber">
            <div><span style="opacity: 0.85;">⏳ Expediente y competencias IMPATH™ en evaluación por Reclutamiento.</span></div>
          </div>
        `;
      }

      item.innerHTML = `
        <div class="app-post-top-row">
          <div>
            <strong>${app.titulo}</strong>
            <span>${app.entidad} · ${app.fecha}</span>
          </div>
          <span class="app-status-pill ${st.class}">${st.icon} ${st.label}</span>
        </div>
        ${detailsHtml}
      `;
      list.appendChild(item);
    });
  } else {
    card.style.display = 'none';
  }
};

// ==========================================================================
// GESTIÓN Y DICTAMEN DE POSTULACIONES DESDE EL ADMIN (BACKOFFICE)
// ==========================================================================
window.renderAdminPostulations = function() {
  const container = document.getElementById('admin-post-items-list');
  const countBadge = document.getElementById('admin-post-count-badge');
  if (!container) return;

  if (!AppState.user.postulaciones || AppState.user.postulaciones.length === 0) {
    container.innerHTML = '<p style="font-size: 11px; color: var(--pe-text-dim); text-align: center; padding: 12px;">No hay postulaciones activas.</p>';
    if (countBadge) countBadge.textContent = '0 activas';
    return;
  }

  if (countBadge) countBadge.textContent = `${AppState.user.postulaciones.length} activas`;
  container.innerHTML = '';

  const statusMap = {
    revision: { label: '🟡 En Revisión', class: 'status-revision' },
    entrevista: { label: '📅 Entrevista', class: 'status-entrevista' },
    aceptado: { label: '🎉 Aceptado(a)', class: 'status-aceptado' },
    cartera: { label: '📁 Cartera', class: 'status-cartera' }
  };

  AppState.user.postulaciones.forEach(app => {
    const item = document.createElement('div');
    item.className = 'admin-post-item';

    const currentSt = statusMap[app.estado] || statusMap.revision;

    item.innerHTML = `
      <div class="admin-post-item-top">
        <div>
          <div class="admin-post-item-title">${app.titulo}</div>
          <div class="admin-post-item-meta">${app.entidad} · ${app.fecha}</div>
        </div>
        <span class="app-status-pill ${currentSt.class}">
          ${currentSt.label}
        </span>
      </div>
      <div class="admin-post-controls">
        <button type="button" class="btn-stage-mini ${app.estado === 'revision' ? 'active status-revision' : ''}" 
                onclick="window.setPostulationState(${app.id}, 'revision')" title="Poner en revisión">
          🟡 Revisión
        </button>
        <button type="button" class="btn-stage-mini ${app.estado === 'entrevista' ? 'active status-entrevista' : ''}" 
                onclick="window.setPostulationState(${app.id}, 'entrevista')" title="Agendar entrevista con empresa">
          📅 Entrevista
        </button>
        <button type="button" class="btn-stage-mini ${app.estado === 'aceptado' ? 'active status-aceptado' : ''}" 
                onclick="window.setPostulationState(${app.id}, 'aceptado')" title="Aceptar candidato">
          ✅ Aceptar
        </button>
        <button type="button" class="btn-stage-mini ${app.estado === 'cartera' ? 'active status-cartera' : ''}" 
                onclick="window.setPostulationState(${app.id}, 'cartera')" title="Conservar en cartera">
          📁 Cartera
        </button>
      </div>
    `;
    container.appendChild(item);
  });
};

window.setPostulationState = function(id, newStatus, showNotif = true) {
  const app = AppState.user.postulaciones.find(p => p.id === id);
  if (!app) return;

  app.estado = newStatus;

  // Actualizar ambas vistas de inmediato
  renderUserApplications();
  renderAdminPostulations();

  const statusNames = {
    revision: 'En Revisión (Evaluación de CV)',
    entrevista: 'Entrevista Agendada',
    aceptado: 'Aceptado(a) / Empleo Otorgado',
    cartera: 'En Cartera de Talento'
  };

  if (newStatus === 'aceptado') {
    if (typeof window.fireConfetti === 'function') {
      window.fireConfetti();
    }
  }

  if (showNotif && typeof window.triggerPushNotification === 'function') {
    const title = `Postulación Actualizada 📋`;
    const body = `"${app.titulo.slice(0, 26)}..." pasó a: ${statusNames[newStatus] || newStatus}`;
    window.triggerPushNotification(title, body);
  } else {
    showToast(`Estado actualizado: ${statusNames[newStatus]}`);
  }

  // Sincronización inteligente con la barra de progreso si es la vacante laboral principal
  if (app.id === 2 || app.tipo === 'empleo') {
    if (newStatus === 'entrevista' && AppState.user.stage !== 'aceptado' && AppState.user.stage !== 'finalizado') {
      window.setParticipantStage('aceptado', false);
    } else if (newStatus === 'aceptado' && AppState.user.stage !== 'finalizado') {
      window.setParticipantStage('finalizado', false);
    }
  }
};

window.advanceMainPostulation = function(targetState) {
  const mainApp = AppState.user.postulaciones.find(p => p.tipo === 'empleo' || p.id === 2);
  if (mainApp) {
    window.setPostulationState(mainApp.id, targetState, true);
  } else if (AppState.user.postulaciones.length > 0) {
    window.setPostulationState(AppState.user.postulaciones[0].id, targetState, true);
  }
};

window.openInterviewModal = function(id) {
  const app = AppState.user.postulaciones.find(p => p.id === id) || AppState.user.postulaciones[0];
  const modal = document.getElementById('opportunity-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="padding: 6px 0;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 24px;">📅</span>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.05em;">Entrevista Laboral Confirmada</span>
          <h3 style="font-size: 15px; font-weight: 700; color: var(--pe-text-main); margin: 0;">${app.titulo}</h3>
        </div>
      </div>

      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #1e3a8a;">🏢 Empresa / Institución:</strong> <span style="color: #1e40af;">${app.entidad}</span>
        </div>
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #1e3a8a;">🗓️ Fecha y Hora:</strong> <span style="color: #1e40af;">${app.entrevistaFecha || 'Jueves 22 oct · 11:00 hrs'}</span>
        </div>
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #1e3a8a;">💻 Modalidad / Sede:</strong> <span style="color: #1e40af;">${app.entrevistaLugar || 'Google Meet (Enlace de sala privado)'}</span>
        </div>
        <div style="font-size: 11px;">
          <strong style="color: #1e3a8a;">👤 Entrevistador(a):</strong> <span style="color: #1e40af;">Lic. Claudia Morales (Coordinación de Talento ProEmpleo)</span>
        </div>
      </div>

      <div style="background: #fff8e8; border: 1px solid #fde68a; border-radius: 8px; padding: 10px; font-size: 11px; color: #92400e; margin-bottom: 14px;">
        💡 <strong>Recomendación ProEmpleo:</strong> Ten listo tu pitch de 2 minutos desarrollado en el Taller de Fortalecimiento. Conéctate 5 minutos antes.
      </div>

      <div style="display: flex; gap: 8px;">
        <button type="button" class="bp-btn bp-btn-primary btn-sm w-full" onclick="window.showToast('Simulador: Conectando a sala virtual Google Meet...'); window.closeModal();">
          Unirse a la Entrevista (Simulación)
        </button>
        <button type="button" class="bp-btn bp-btn-outline btn-sm" onclick="window.closeModal()">
          Cerrar
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
};

window.openOfferModal = function(id) {
  const app = AppState.user.postulaciones.find(p => p.id === id) || AppState.user.postulaciones[0];
  const modal = document.getElementById('opportunity-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="padding: 6px 0;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 24px;">🎉</span>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 0.05em;">Carta Oferta Formal Emitida</span>
          <h3 style="font-size: 15px; font-weight: 700; color: var(--pe-text-main); margin: 0;">¡Contratación Aprobada!</h3>
        </div>
      </div>

      <div style="background: #f0fdf4; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #065f46;">💼 Puesto Asignado:</strong> <span style="color: #047857;">${app.titulo}</span>
        </div>
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #065f46;">🏢 Empleador:</strong> <span style="color: #047857;">${app.entidad}</span>
        </div>
        <div style="font-size: 11px; margin-bottom: 6px;">
          <strong style="color: #065f46;">💵 Remuneración:</strong> <span style="color: #047857;">${app.salario || '$9,800 MXN mensuales + Prestaciones'}</span>
        </div>
        <div style="font-size: 11px;">
          <strong style="color: #065f46;">🛡️ Esquema:</strong> <span style="color: #047857;">Contrato formal por tiempo indeterminado con Seguro Social (IMSS)</span>
        </div>
      </div>

      <p style="font-size: 11px; color: var(--pe-text-muted); line-height: 1.4; margin-bottom: 14px;">
        Al aceptar esta oferta, se activa automáticamente tu <strong>Constancia Digital</strong> y tu <strong>Mentoría de Permanencia (90 Días)</strong> con Fundación ProEmpleo.
      </p>

      <div style="display: flex; gap: 8px;">
        <button type="button" class="bp-btn bp-btn-primary btn-sm w-full" onclick="window.acceptOfferAndFinish(${app.id})">
          ✓ Aceptar Oferta y Formalizar Empleo
        </button>
        <button type="button" class="bp-btn bp-btn-outline btn-sm" onclick="window.closeModal()">
          Revisar después
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
};

window.acceptOfferAndFinish = function(id) {
  window.closeModal();
  window.setPostulationState(id, 'aceptado', false);
  window.setParticipantStage('finalizado', true);
  window.switchView('ruta');
  if (typeof window.fireConfetti === 'function') window.fireConfetti();
};

// ==========================================================================
// MÓDULO DE CARTERA DE TALENTO Y BANCO DE CANDIDATOS (ADMIN - OPCIÓN B)
// ==========================================================================
AppState.carteraCandidates = [
  {
    key: 'mariana',
    nombre: 'Mariana Hernández',
    edad: 22,
    categoria: 'operaciones',
    perfil: 'Auxiliar de Operaciones y Logística Junior',
    skills: '🎯 IMPATH: 85% Blandas · 90% Adaptabilidad · 70% Digital',
    matchLabel: 'Match prioritario con vacante aliada reciente:',
    matchTitle: 'Soporte Administrativo y Gestión Documental',
    matchMeta: 'ST Capital Family Office · $11,500 MXN mensuales · Híbrido CDMX',
    actionBtnText: '⚡ Canalizar Mariana a ST Capital ($11,500 MXN) ↗',
    isAssigned: false
  },
  {
    key: 'valeria',
    nombre: 'Valeria Montserrat Gómez',
    edad: 25,
    categoria: 'admin',
    perfil: 'Gestión Documental y Operaciones',
    skills: '🎯 IMPATH: 90% Digital · 80% CV · 85% Disponibilidad',
    matchLabel: 'Match prioritario con vacante aliada:',
    matchTitle: 'Auxiliar de Logística y Almacén',
    matchMeta: 'Distribuidora Central · $9,500 MXN mensuales · Presencial CDMX',
    actionBtnText: '⚡ Agendar Entrevista con Empresa ↗',
    isAssigned: false
  },
  {
    key: 'jorge',
    nombre: 'Jorge Luis Morales',
    edad: 19,
    categoria: 'digital',
    perfil: 'Comercio Electrónico y Redes Sociales',
    skills: '🎯 IMPATH: 95% Habilidades Digitales · 75% CV',
    matchLabel: 'Match formativo con programa oficial:',
    matchTitle: 'Taller ReEmprende Digital Avanzado',
    matchMeta: 'Fundación ProEmpleo · Cohorte Noviembre 2026 · Aula Virtual',
    actionBtnText: '⚡ Asignar Cohorte Formativa ↗',
    isAssigned: false
  }
];

AppState.carteraFilter = 'all';

window.filterCartera = function(cat) {
  AppState.carteraFilter = cat;
  document.querySelectorAll('.cartera-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-cartera-${cat}`);
  if (activeBtn) activeBtn.classList.add('active');
  renderAdminCartera(cat);
};

window.renderAdminCartera = function(filter = AppState.carteraFilter || 'all') {
  const container = document.getElementById('admin-cartera-items-list');
  const countBadge = document.getElementById('cartera-count-badge');
  if (!container) return;

  const list = AppState.carteraCandidates.filter(c => filter === 'all' || c.categoria === filter);

  if (countBadge) {
    const activeCount = AppState.carteraCandidates.filter(c => !c.isAssigned).length;
    countBadge.textContent = `${activeCount} en cartera`;
  }

  container.innerHTML = '';
  list.forEach(c => {
    const card = document.createElement('div');
    card.className = 'admin-cartera-card';
    card.id = `cartera-card-${c.key}`;

    const statusTag = c.isAssigned 
      ? '<span class="cartera-status-tag assigned">✓ Canalizado(a)</span>' 
      : '<span class="cartera-status-tag">En Cartera</span>';

    const btnHtml = c.isAssigned
      ? `<button type="button" class="bp-btn btn-sm btn-reassign success" disabled>✓ Asignación en Proceso (Entrevista Martes 27)</button>`
      : `<button type="button" class="bp-btn bp-btn-primary btn-sm btn-reassign" onclick="window.reassignFromCartera('${c.key}')">${c.actionBtnText}</button>`;

    card.innerHTML = `
      <div class="cartera-card-header">
        <div>
          <div class="cartera-cand-name">${c.nombre} · ${c.edad} años</div>
          <div class="cartera-cand-skills">${c.skills}</div>
        </div>
        ${statusTag}
      </div>
      <div class="cartera-match-box">
        <div class="cartera-match-label">⚡ ${c.matchLabel}</div>
        <div class="cartera-match-title">${c.matchTitle}</div>
        <div class="cartera-match-meta">${c.matchMeta}</div>
      </div>
      <div class="cartera-actions-row">
        ${btnHtml}
      </div>
    `;
    container.appendChild(card);
  });
};

window.reassignFromCartera = function(candKey) {
  const cand = AppState.carteraCandidates.find(c => c.key === candKey);
  if (!cand) return;

  cand.isAssigned = true;
  renderAdminCartera();

  if (candKey === 'mariana') {
    // 1. Agregar o actualizar vacante ST Capital en las postulaciones de Mariana
    const existingSt = AppState.user.postulaciones.find(p => p.id === 5 || p.titulo.includes('ST Capital') || p.titulo.includes('Soporte Administrativo'));
    if (existingSt) {
      existingSt.estado = 'entrevista';
      existingSt.entrevistaFecha = 'Martes 27 oct · 12:00 hrs';
      existingSt.entrevistaLugar = 'Oficinas ST Capital (Polanco, CDMX)';
    } else {
      AppState.user.postulaciones.unshift({
        id: 5,
        titulo: 'Soporte Administrativo y Gestión Documental',
        entidad: 'ST Capital Family Office (Red Aliada ProEmpleo)',
        fecha: 'Hoy (' + new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }) + ')',
        tipo: 'empleo',
        estado: 'entrevista',
        entrevistaFecha: 'Martes 27 oct · 12:00 hrs',
        entrevistaLugar: 'Oficinas ST Capital (Polanco, CDMX)',
        salario: '$11,500 MXN mensuales + Seguro de Gastos Médicos'
      });
    }

    // 2. Sincronizar estado global de Mariana a Aceptado / Vinculación (85%)
    window.setParticipantStage('aceptado', false);

    // 3. Actualizar vistas
    renderUserApplications();
    renderAdminPostulations();

    // 4. Notificación push y feedback
    if (typeof window.triggerPushNotification === 'function') {
      window.triggerPushNotification(
        '¡Perfil en Cartera Asignado! 💼 (+50 Pts)', 
        'Mariana convocada a entrevista en ST Capital Family Office ($11,500 MXN mensuales).'
      );
    }
    showToast('🎉 Mariana canalizada con éxito a ST Capital desde la Cartera de Talento.');
  } else {
    showToast(`✓ ${cand.nombre} canalizado(a) exitosamente a nueva oportunidad.`);
  }
};

window.openCarteraInfoModal = function() {
  const modal = document.getElementById('opportunity-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="padding: 6px 0;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 24px;">📁</span>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Banco de Talento Prioritario</span>
          <h3 style="font-size: 15px; font-weight: 700; color: var(--pe-text-main); margin: 0;">¿Cómo funciona tu Cartera de Talento?</h3>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 11px; margin-bottom: 8px; color: var(--pe-text-muted); line-height: 1.45;">
          ✅ <strong>Tu perfil está pre-calificado:</strong> Al haber completado tu diagnóstico de competencias IMPATH™ y tus talleres en Fundación ProEmpleo, ya eres parte de la lista prioritaria de colocación.
        </div>
        <div style="font-size: 11px; margin-bottom: 8px; color: var(--pe-text-muted); line-height: 1.45;">
          🏢 <strong>Vinculación directa sin intermediarios:</strong> Nuestros coordinadores de empleo consultan este banco cuando las empresas aliadas abren plazas exclusivas que no se publican abiertamente.
        </div>
        <div style="font-size: 11px; color: #0f766e; font-weight: 600;">
          📈 <strong>Dato de Impacto:</strong> Más del 70% de los jóvenes en Cartera de Talento son reasignados y colocados formalmente en menos de 3 semanas.
        </div>
      </div>

      <button type="button" class="bp-btn bp-btn-primary btn-sm w-full" onclick="window.closeModal()">
        Entendido
      </button>
    </div>
  `;

  modal.style.display = 'flex';
};

// Adaptación dinámica de la Ruta según diagnóstico
window.updateUserRouteUI = function() {
  const perfil = AppState.user.perfilAsignado || 'Inserción Laboral Acelerada (Empleo Junior)';
  const nextTitle = document.getElementById('route-next-title');
  const nextDesc = document.getElementById('route-next-desc');
  const nextMeta = document.getElementById('route-next-meta');
  const step2Title = document.getElementById('route-step2-title');
  const step2Desc = document.getElementById('route-step2-desc');
  const pillsContainer = document.getElementById('route-pills-container');
  const routeBadge = document.getElementById('dash-route-badge');

  if (routeBadge) {
    if (perfil.includes('Emprende')) {
      routeBadge.textContent = 'Ruta: Emprendimiento Sostenible';
      routeBadge.style.color = 'var(--pe-orange-dark)';
      routeBadge.style.background = 'var(--pe-orange-light)';
      routeBadge.style.borderColor = 'var(--pe-orange-border)';
    } else if (perfil.includes('Pasantías') || perfil.includes('Universitaria')) {
      routeBadge.textContent = 'Ruta: Prácticas y Servicio Social';
      routeBadge.style.color = '#1a7a80';
      routeBadge.style.background = 'var(--pe-teal-light)';
      routeBadge.style.borderColor = 'var(--pe-teal-border)';
    } else if (perfil.includes('Capacitación')) {
      routeBadge.textContent = 'Ruta: Habilidades Digitales';
      routeBadge.style.color = '#1a7a80';
      routeBadge.style.background = 'var(--pe-teal-light)';
      routeBadge.style.borderColor = 'var(--pe-teal-border)';
    } else {
      routeBadge.textContent = 'Ruta: Inserción Laboral Junior';
      routeBadge.style.color = '#1a7a80';
      routeBadge.style.background = 'var(--pe-teal-light)';
      routeBadge.style.borderColor = 'var(--pe-teal-border)';
    }
  }

  if (perfil.includes('Emprende')) {
    if (nextTitle) nextTitle.textContent = 'Taller Emprende: De la Idea a tu Empresa Sostenible';
    if (nextDesc) nextDesc.textContent = 'Programa insignia de Fundación ProEmpleo (80 hrs). Valida tu idea, aprende finanzas, costos y ventas.';
    if (nextMeta) nextMeta.innerHTML = '<span>⏱️ 80 horas</span><span>🎓 100% Becado</span><span>🟢 Próximo: Lunes 10:00 h</span>';
    if (step2Title) step2Title.textContent = '2. Formación en Modelo de Negocios y Finanzas';
    if (step2Desc) step2Desc.textContent = 'Módulos prácticos de ProEmpleo para tu plan de negocio:';
    if (pillsContainer) {
      pillsContainer.innerHTML = `
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso', 1); return false;">
          💡 Taller Emprende (Fundación ProEmpleo) ↗
        </a>
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso', 3); return false;">
          📊 Taller ReEmprende Digital y Comercio Electrónico ↗
        </a>
      `;
    }
  } else if (perfil.includes('Pasantías') || perfil.includes('Universitaria')) {
    if (nextTitle) nextTitle.textContent = 'Servicio Social y Prácticas en Vinculación Comunitaria';
    if (nextDesc) nextDesc.textContent = 'Acredita tu servicio social o prácticas con proyectos de impacto social en Fundación ProEmpleo.';
    if (nextMeta) nextMeta.innerHTML = '<span>⏱️ 4 a 6 meses</span><span>🎓 Constancia Oficial</span><span>🟢 Convocatoria Abierta</span>';
    if (step2Title) step2Title.textContent = '2. Acreditación de Prácticas y Liderazgo';
    if (step2Desc) step2Desc.textContent = 'Actividades formativas con valor curricular:';
    if (pillsContainer) {
      pillsContainer.innerHTML = `
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('practicas', 4); return false;">
          📑 Servicio Social en ProEmpleo Productivo ↗
        </a>
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('practicas'); return false;">
          🤝 Ver Plazas de Prácticas y Vinculación ↗
        </a>
      `;
    }
  } else if (perfil.includes('Capacitación')) {
    if (nextTitle) nextTitle.textContent = 'Certificación en Fundamentos Digitales y Productividad';
    if (nextDesc) nextDesc.textContent = 'Programa en alianza Google for Nonprofits × ProEmpleo. Herramientas en la nube y trabajo remoto.';
    if (nextMeta) nextMeta.innerHTML = '<span>⏱️ 20 horas</span><span>🎓 Certificado Oficial</span><span>🟢 A tu propio ritmo</span>';
    if (step2Title) step2Title.textContent = '2. Adquisición de Competencias Digitales';
    if (step2Desc) step2Desc.textContent = 'Cursos con insignia digital verificada:';
    if (pillsContainer) {
      pillsContainer.innerHTML = `
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso', 6); return false;">
          💻 Productividad en la Nube y Hojas de Cálculo ↗
        </a>
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso'); return false;">
          📚 Ver Todos los Cursos de Capacitación ↗
        </a>
      `;
    }
  } else {
    // Inserción laboral acelerada (Default)
    if (nextTitle) nextTitle.textContent = 'Taller: Armadura de CV y Simulación de Entrevistas';
    if (nextDesc) nextDesc.textContent = 'Taller virtual en vivo de 2 horas con mentores corporativos de ProEmpleo.';
    if (nextMeta) nextMeta.innerHTML = '<span>⏱️ 2 horas</span><span>🎓 Certificado</span><span>🟢 Próximo: Jueves 17:00 h</span>';
    if (step2Title) step2Title.textContent = '2. Fortalecimiento de Habilidades Clave';
    if (step2Desc) step2Desc.textContent = 'Cursos y talleres formativos en ProEmpleo:';
    if (pillsContainer) {
      pillsContainer.innerHTML = `
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso', 6); return false;">
          💻 Certificación en Productividad Digital (Google) ↗
        </a>
        <a href="#catalogo" class="resource-pill" onclick="window.goToCatalogWithFilter('curso', 1); return false;">
          💡 Taller Emprende (Fundación ProEmpleo) ↗
        </a>
      `;
    }
  }

  // Reactividad del estado del participante según su etapa (40%, 65%, 85%, 100%)
  const stage = AppState.user.stage || (AppState.user.enrolledWorkshop ? 'capacitacion' : 'diagnostico');
  const progFill = document.getElementById('dash-progress-fill');
  const progPercent = document.getElementById('dash-progress-percent');
  const stepTag = document.getElementById('route-step-tag');
  const banner = document.getElementById('enrolled-status-box');
  const ctaContainer = document.getElementById('route-cta-container');
  const nextStepCard = document.getElementById('next-step-box');
  const completionCard = document.getElementById('route-completion-card');
  const step2Status = document.getElementById('step-2-status');
  const step2Marker = document.getElementById('step-2-marker');
  const step3Status = document.getElementById('step-3-status');
  const step3Marker = document.getElementById('step-3-marker');
  const step3Interview = document.getElementById('step-3-interview-box');
  const levelName = document.querySelector('.level-name');
  const levelPoints = document.querySelectorAll('.level-points');

  // Limpiar clases de 100%
  if (progFill) progFill.classList.remove('completed-100');
  if (progPercent) progPercent.classList.remove('completed-100');

  if (stage === 'finalizado') {
    // ======================================================================
    // ESTADO 4: 100% FINALIZADO / EMPLEO EXITOSO
    // ======================================================================
    if (progFill) {
      progFill.style.width = '100%';
      progFill.classList.add('completed-100');
    }
    if (progPercent) {
      progPercent.textContent = '100%';
      progPercent.classList.add('completed-100');
    }
    if (levelName) levelName.textContent = '🏆 Nivel 3: Graduado(a)';
    levelPoints.forEach(el => el.textContent = '500 Puntos TH');

    if (nextStepCard) nextStepCard.style.display = 'none';
    if (completionCard) completionCard.style.display = 'flex';

    if (step2Status) {
      step2Status.className = 'step-status completed';
      step2Status.textContent = '✓ Concluido';
    }
    if (step2Marker) {
      step2Marker.textContent = '✓';
      step2Marker.style.background = '#10b981';
      step2Marker.style.color = '#ffffff';
    }
    if (step3Status) {
      step3Status.className = 'step-status completed';
      step3Status.textContent = '✓ Colocación Exitosa';
    }
    if (step3Marker) {
      step3Marker.textContent = '✓';
      step3Marker.style.background = '#10b981';
      step3Marker.style.color = '#ffffff';
    }
    if (step3Interview) step3Interview.style.display = 'block';

  } else if (stage === 'aceptado') {
    // ======================================================================
    // ESTADO 3: 85% ACEPTADO / EN VINCULACIÓN ACTIVA
    // ======================================================================
    if (progFill) progFill.style.width = '85%';
    if (progPercent) progPercent.textContent = '85%';
    if (levelName) levelName.textContent = 'Nivel 2: Candidato';
    levelPoints.forEach(el => el.textContent = '380 Puntos TH');

    if (nextStepCard) nextStepCard.style.display = 'block';
    if (completionCard) completionCard.style.display = 'none';

    if (stepTag) {
      stepTag.className = 'next-step-tag enrolled';
      stepTag.innerHTML = '<span>🟢</span> VINCULACIÓN Y ENTREVISTAS';
    }
    if (banner) banner.style.display = 'none';
    if (ctaContainer) {
      ctaContainer.innerHTML = `
        <button class="bp-btn bp-btn-primary btn-sm" onclick="window.showToast('Entrevista confirmada. Revisa los detalles en el Paso 3.')">
          Ver Entrevista Agendada ↗
        </button>
      `;
    }

    if (step2Status) {
      step2Status.className = 'step-status completed';
      step2Status.textContent = '✓ Acreditado';
    }
    if (step2Marker) {
      step2Marker.textContent = '✓';
      step2Marker.style.background = '#10b981';
      step2Marker.style.color = '#ffffff';
    }
    if (step3Status) {
      step3Status.className = 'step-status in-progress';
      step3Status.textContent = 'Entrevista en curso';
    }
    if (step3Marker) {
      step3Marker.textContent = '3';
      step3Marker.style.background = 'var(--pe-orange)';
      step3Marker.style.color = '#ffffff';
    }
    if (step3Interview) step3Interview.style.display = 'block';

  } else if (stage === 'capacitacion') {
    // ======================================================================
    // ESTADO 2: 65% EN CAPACITACIÓN / COHORTE ACTIVA
    // ======================================================================
    if (progFill) progFill.style.width = '65%';
    if (progPercent) progPercent.textContent = '65%';
    if (levelName) levelName.textContent = 'Nivel 1: Explorador';
    levelPoints.forEach(el => el.textContent = '230 Puntos TH');

    if (nextStepCard) nextStepCard.style.display = 'block';
    if (completionCard) completionCard.style.display = 'none';

    if (stepTag) {
      stepTag.className = 'next-step-tag enrolled';
      stepTag.innerHTML = '<span>🟢</span> EN CURSO · COHORTE ASIGNADA';
    }
    if (banner) banner.style.display = 'flex';
    if (ctaContainer) {
      ctaContainer.innerHTML = `
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="bp-btn btn-sm btn-enrolled-active" id="btn-next-step" disabled>
            <span>✓</span> Inscrito(a) · Acceso Activo
          </button>
          <button class="bp-btn bp-btn-outline btn-sm" onclick="window.goToCatalogWithFilter('curso')" style="font-size: 11px; padding: 6px 10px;">
            Ver Cursos ↗
          </button>
        </div>
      `;
    }
    if (step2Status) {
      step2Status.className = 'step-status enrolled-badge';
      step2Status.textContent = '✓ Cohorte Confirmada';
    }
    if (step2Marker) {
      step2Marker.textContent = '2';
      step2Marker.style.background = '';
      step2Marker.style.color = '';
    }
    if (step3Status) {
      step3Status.className = 'step-status';
      step3Status.textContent = 'Próximo paso';
    }
    if (step3Marker) {
      step3Marker.textContent = '3';
      step3Marker.style.background = 'var(--pe-teal)';
      step3Marker.style.color = '#ffffff';
    }
    if (step3Interview) step3Interview.style.display = 'none';

  } else {
    // ======================================================================
    // ESTADO 1: 40% DIAGNÓSTICO CONCLUIDO / PENDIENTE TALLER
    // ======================================================================
    if (progFill) progFill.style.width = '40%';
    if (progPercent) progPercent.textContent = '40%';
    if (levelName) levelName.textContent = 'Nivel 1: Explorador';
    levelPoints.forEach(el => el.textContent = '180 Puntos TH');

    if (nextStepCard) nextStepCard.style.display = 'block';
    if (completionCard) completionCard.style.display = 'none';

    if (stepTag) {
      stepTag.className = 'next-step-tag';
      stepTag.textContent = 'SIGUIENTE PASO RECOMENDADO';
    }
    if (banner) banner.style.display = 'none';
    if (ctaContainer) {
      ctaContainer.innerHTML = `
        <button class="bp-btn bp-btn-primary btn-sm" id="btn-next-step" onclick="window.enrollNextStepWorkshop()">
          Inscribirme al Taller Gratuito
        </button>
      `;
    }
    if (step2Status) {
      step2Status.className = 'step-status in-progress';
      step2Status.textContent = 'En curso';
    }
    if (step2Marker) {
      step2Marker.textContent = '2';
      step2Marker.style.background = '';
      step2Marker.style.color = '';
    }
    if (step3Status) {
      step3Status.className = 'step-status';
      step3Status.textContent = 'Próximo paso';
    }
    if (step3Marker) {
      step3Marker.textContent = '3';
      step3Marker.style.background = 'var(--pe-teal)';
      step3Marker.style.color = '#ffffff';
    }
    if (step3Interview) step3Interview.style.display = 'none';
  }
};

// Acción reactiva al inscribirse a la certificación / taller
window.enrollNextStepWorkshop = function() {
  if (AppState.user.enrolledWorkshop) {
    showToast('Ya estás inscrito(a) a este programa formativo.');
    return;
  }

  // Avanzar a etapa de capacitación (65%)
  window.setParticipantStage('capacitacion', false);

  const currentTitleElem = document.getElementById('route-next-title');
  const currentTitle = currentTitleElem ? currentTitleElem.textContent : 'Taller Oficial';

  // 1. Estallido de confeti digital en la pantalla del celular
  if (typeof window.fireConfetti === 'function') {
    window.fireConfetti();
  }

  // 2. Notificación push interactiva simulada (exclusiva para evitar colisión)
  if (typeof window.triggerPushNotification === 'function') {
    window.triggerPushNotification('Inscripción Confirmada 🎓 (+50 Pts)', `Te asignamos a la cohorte activa de "${currentTitle.slice(0, 30)}...". Progreso: 65%`);
  }
};

// Moderación reactiva en vivo en el Backoffice
window.approvePendingVacancy = function() {
  const pendingItem = document.getElementById('pending-vacante-item');
  const clearedBox = document.getElementById('mod-cleared-box');
  const badgeCount = document.getElementById('mod-badge-count');
  const kpiCount = document.getElementById('kpi-vacantes-num');

  const newVacancy = {
    id: 101,
    titulo: 'Auxiliar de Logística y Almacén',
    entidad: 'Distribuidora Central (Empresa Aliada)',
    tipo: 'empleo',
    tipoLabel: 'Aprobada Reciente',
    modalidad: 'Presencial · CDMX (Central)',
    duracion: 'Tiempo Completo · Inmediato',
    salario: '$9,500 MXN mensuales + Vales',
    requisitos: '18 a 29 años · Secundaria concluida · Actitud de servicio',
    descripcion: 'Vacante validada por Fundación ProEmpleo. Control de entradas, clasificación de paquetes y apoyo en inventarios.',
    enlaceExterno: '#',
    destacado: true
  };

  if (!AppState.opportunities.some(o => o.id === newVacancy.id)) {
    AppState.opportunities.unshift(newVacancy);
  }

  if (pendingItem) {
    pendingItem.style.opacity = '0';
    pendingItem.style.transform = 'translateY(-10px)';
    pendingItem.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      pendingItem.style.display = 'none';
      if (clearedBox) clearedBox.style.display = 'flex';
    }, 300);
  }

  if (badgeCount) {
    badgeCount.textContent = '0 pendientes';
    badgeCount.style.background = 'var(--pe-teal-light)';
    badgeCount.style.color = '#1a7a80';
    badgeCount.style.borderColor = 'var(--pe-teal-border)';
  }

  if (kpiCount) {
    kpiCount.textContent = '46';
    kpiCount.classList.add('kpi-pulse-active');
    setTimeout(() => kpiCount.classList.remove('kpi-pulse-active'), 800);
  }

  const allCountElem = document.getElementById('cat-count-all');
  if (allCountElem) allCountElem.textContent = AppState.opportunities.length;

  renderOpportunities(AppState.opportunitiesFilter);
  showToast('✅ Vacante "Auxiliar de Logística" aprobada y publicada en el catálogo.');
};

// ==========================================================================
// VISTA 5: BACKOFFICE ADMIN PROEMPLEO & EXPORTACIÓN CSV
// ==========================================================================
// ==========================================================================
// VISTA 5: BACKOFFICE ADMIN PROEMPLEO & GESTIÓN DE ETAPAS
// ==========================================================================

// Control del ciclo de vida del participante (Mariana / Usuario activo)
window.setParticipantStage = function(stageKey, showNotif = true) {
  AppState.user.stage = stageKey;
  AppState.user.enrolledWorkshop = (stageKey !== 'diagnostico');

  // Actualizar tabla admin con el estatus de Mariana
  if (AppState.adminYouths && AppState.adminYouths.length > 0) {
    if (stageKey === 'diagnostico') {
      AppState.adminYouths[0].status = 'En diagnóstico';
      AppState.adminYouths[0].ruta = 'Paso 1: Diagnóstico (40%)';
    } else if (stageKey === 'capacitacion') {
      AppState.adminYouths[0].status = 'En capacitación';
      AppState.adminYouths[0].ruta = 'Paso 2: Fortalecimiento (65%)';
    } else if (stageKey === 'aceptado') {
      AppState.adminYouths[0].status = 'Aceptada para empleo';
      AppState.adminYouths[0].ruta = 'Paso 3: Vinculación Activa (85%)';
    } else if (stageKey === 'finalizado') {
      AppState.adminYouths[0].status = 'Contratada formalmente';
      AppState.adminYouths[0].ruta = 'Ruta Concluida (100%)';
    }
  }

  // Actualizar botones de la barra de simulación en Admin
  const stages = ['diagnostico', 'capacitacion', 'aceptado', 'finalizado'];
  stages.forEach(st => {
    const btn = document.getElementById(`btn-stage-${st}`);
    if (btn) {
      if (st === stageKey) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  const tagElem = document.getElementById('admin-current-stage-tag');
  if (tagElem) {
    tagElem.className = `stage-tag-pill stage-${stageKey}`;
    const labels = {
      diagnostico: '40% En Diagnóstico',
      capacitacion: '65% En Capacitación',
      aceptado: '85% Aceptado / Vinculación',
      finalizado: '100% Finalizado / Empleo Exitoso'
    };
    tagElem.textContent = labels[stageKey] || stageKey;
  }

  // Sincronizar postulación laboral principal de Mariana con la etapa global
  if (AppState.user.postulaciones && AppState.user.postulaciones.length > 0) {
    const mainApp = AppState.user.postulaciones.find(p => p.id === 2 || p.tipo === 'empleo');
    if (mainApp) {
      if (stageKey === 'aceptado') {
        mainApp.estado = 'entrevista';
      } else if (stageKey === 'finalizado') {
        mainApp.estado = 'aceptado';
      }
    }
  }

  // Actualizar UI de Mi Ruta, Tabla Admin y Postulaciones Admin
  updateUserRouteUI();
  renderAdminTable();
  if (typeof renderUserApplications === 'function') renderUserApplications();
  if (typeof renderAdminPostulations === 'function') renderAdminPostulations();

  if (stageKey === 'finalizado' && typeof window.fireConfetti === 'function') {
    window.fireConfetti();
  }

  if (showNotif && typeof window.triggerPushNotification === 'function') {
    const pushMsgs = {
      diagnostico: { title: 'Fase 1: Diagnóstico (40%) 📋', body: 'Mariana en revisión diagnóstica inicial.' },
      capacitacion: { title: 'Fase 2: Capacitación (65%) 🎓', body: 'Mariana asignada a cohorte activa de formación.' },
      aceptado: { title: 'Fase 3: Aceptada para Empleo (85%) 🤝', body: 'Taller acreditado. Perfil canalizado a entrevista con empresa aliada.' },
      finalizado: { title: '¡Meta 100% Alcanzada! 🏆', body: 'Mariana contratada formalmente en Distribuidora Central. Constancia emitida.' }
    };
    const info = pushMsgs[stageKey] || { title: 'Estatus Actualizado', body: 'Cambio de etapa registrado.' };
    window.triggerPushNotification(info.title, info.body);
  }
};

// Descarga de Constancia Oficial de Acreditación Digital (100%)
window.downloadConstanciaDigital = function() {
  const content = `========================================================================
FUNDACIÓN PROEMPLEO PRODUCTIVO, A.C. × TALENT HUB
CONSTANCIA OFICIAL DE ACREDITACIÓN Y VINCULACIÓN LABORAL
========================================================================

FOLIO OFICIAL: FPE-TH-2026-9821
FECHA DE EMISIÓN: 17 de Octubre de 2026
ESTATUS: ACREDITADO AL 100% · CASO DE ÉXITO

Se hace constar que:
NOMBRE: ${AppState.user.nombre.toUpperCase()}
CORREO: ${AppState.user.correo}
PROGRAMA: Talent Hub Juventudes ProEmpleo 2026
RUTA ASIGNADA: ${AppState.user.perfilAsignado || 'Inserción Laboral Acelerada (Empleo Junior)'}

HA CUMPLIDO SATISFACTORIAMENTE CON LAS SIGUIENTES ETAPAS:
1. Diagnóstico Inicial de Competencias Sociolaborales (Radar Vocacional IMPATH™).
2. Programa Formativo y Fortalecimiento de Habilidades (80 horas acreditadas).
3. Vinculación Efectiva y Colocación Laboral en Red Aliada:
   - Puesto: Auxiliar de Operaciones Junior
   - Empresa: Distribuidora Central (Red Aliada ProEmpleo)
   - Contrato: Formal / Tiempo Completo con Prestaciones de Ley.

PUNTOS TALENT HUB ALCANZADOS: 500 PUNTOS TH (Nivel 3: Graduado)

------------------------------------------------------------------------
Fundación ProEmpleo Productivo, A.C.
Herschel 131, Col. Anzures, Miguel Hidalgo, CDMX.
Dirección de Empleabilidad y Vinculación Comunitaria
========================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Constancia_ProEmpleo_${AppState.user.nombre.replace(/\s+/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  if (typeof window.triggerPushNotification === 'function') {
    window.triggerPushNotification('Constancia Emitida 📄', 'Descarga completada: Folio oficial FPE-TH-2026-9821.');
  }
};

function renderAdminTable() {
  const tbody = document.getElementById('admin-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  AppState.adminYouths.forEach((y, i) => {
    const tr = document.createElement('tr');
    
    let actionHtml = '';
    let statusBadge = '';

    if (y.nombre === AppState.user.nombre || i === 0) {
      const currentStage = AppState.user.stage || 'capacitacion';
      const stageMap = {
        diagnostico: { label: '40% Diagnóstico', next: 'capacitacion', nextBtn: 'Avanzar a Capacitación (65%)' },
        capacitacion: { label: '65% Capacitación', next: 'aceptado', nextBtn: 'Aceptar para Empleo (85%) ↗' },
        aceptado: { label: '85% Aceptada', next: 'finalizado', nextBtn: 'Finalizar al 100% 🏆' },
        finalizado: { label: '100% Colocada', next: 'diagnostico', nextBtn: 'Reiniciar Ciclo ↺' }
      };
      const info = stageMap[currentStage] || stageMap.capacitacion;
      statusBadge = `<span class="stage-tag-pill stage-${currentStage}">${y.status} (${info.label.split(' ')[0]})</span>`;
      
      actionHtml = `
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button type="button" class="bp-btn bp-btn-primary btn-sm" onclick="window.setParticipantStage('${info.next}')" style="font-size: 11px; padding: 4px 8px;">
            ${info.nextBtn}
          </button>
          <button type="button" class="bp-btn bp-btn-outline btn-sm" onclick="window.switchView('ruta')" style="font-size: 11px; padding: 4px 8px;" title="Ver cambios en la pantalla del celular">
            Ver Mi Ruta ↗
          </button>
        </div>
      `;
    } else {
      statusBadge = `<span style="font-weight: 500; font-size: 11.5px;">${y.status}</span>`;
      actionHtml = `
        <button type="button" class="bp-btn bp-btn-outline btn-sm" onclick="window.showToast('Expediente de ${y.nombre} consultado.')">
          Ver Ficha
        </button>
      `;
    }

    tr.innerHTML = `
      <td><strong>${y.nombre}</strong></td>
      <td>${y.edad} años</td>
      <td><span style="color: var(--pe-teal); font-weight: 600;">${y.perfil}</span></td>
      <td>${statusBadge}</td>
      <td>${actionHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Descarga real de reporte para donantes (ONU-Hábitat / Cemefi) con UTF-8 BOM
window.exportDonorCSV = function() {
  const headers = ['ID', 'Nombre Completo', 'Edad', 'Perfil Asignado', 'Fase de Ruta', 'Estatus Vinculacion', 'Fecha Registro', 'Consentimiento LFPDPPP'];
  const rows = AppState.adminYouths.map((y, index) => [
    `TH-${1000 + index}`,
    `"${y.nombre}"`,
    y.edad,
    `"${y.perfil}"`,
    `"${y.ruta}"`,
    `"${y.status}"`,
    '2026-10-15',
    y.edad < 18 ? '"Validado (Tutor Legal)"' : '"Titular Mayor de Edad"'
  ]);

  // \uFEFF asegura que Microsoft Excel reconozca acentos y caracteres UTF-8 en Windows
  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `TalentHub_Reporte_Cohorte_ProEmpleo_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('📊 Reporte CSV descargado con éxito (Formato Excel con BOM UTF-8).');
};

// ==========================================================================
// SIMULADOR DE NOTIFICACIONES PUSH (ETAPA 2 TDR)
// ==========================================================================
window.triggerPushNotification = function(title, message, duration = 4200) {
  const banner = document.getElementById('push-banner');
  const titleElem = document.getElementById('push-title');
  const bodyElem = document.getElementById('push-body');
  if (!banner || !titleElem || !bodyElem) return;

  titleElem.textContent = title;
  bodyElem.textContent = message;
  banner.style.display = 'flex';
  banner.style.opacity = '1';
  banner.style.transform = 'translateY(0)';

  if (window.pushTimeout) clearTimeout(window.pushTimeout);
  window.pushTimeout = setTimeout(() => {
    window.dismissPushNotification();
  }, duration);
};

window.dismissPushNotification = function() {
  const banner = document.getElementById('push-banner');
  if (!banner) return;
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(-120%)';
  setTimeout(() => {
    banner.style.display = 'none';
    banner.style.opacity = '1';
    banner.style.transform = '';
  }, 250);
};

// ==========================================================================
// MICRO-CELEBRACIÓN: CONFETI EN CANVAS (GAMIFICACIÓN DIAGNÓSTICO)
// ==========================================================================
window.fireConfetti = function() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const shell = document.getElementById('phone-shell');
  if (!shell) return;

  canvas.width = shell.clientWidth || 350;
  canvas.height = shell.clientHeight || 670;
  canvas.style.display = 'block';

  // Paleta oficial de ProEmpleo + Acentos festivos
  const colors = ['#f68b2c', '#2db4bc', '#cf620f', '#ffd166', '#ffffff', '#269fa6'];
  const confettiCount = 70;
  const particles = [];

  for (let i = 0; i < confettiCount; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 90 - 45),
      y: canvas.height * 0.32 + (Math.random() * 50 - 25),
      w: Math.random() * 8 + 4,
      h: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 9,
      vy: (Math.random() - 1.25) * 10,
      gravity: 0.19 + Math.random() * 0.05,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 14,
      opacity: 1
    });
  }

  let startTime = null;
  const duration = 2500; // 2.5 segundos

  function render(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      if (elapsed > duration * 0.6) {
        p.opacity = Math.max(0, 1 - (elapsed - duration * 0.6) / (duration * 0.4));
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }

  requestAnimationFrame(render);
};

// ==========================================================================
// CASOS DE USO DEMO (1-CLIC) PARA EVALUADORES Y PRESENTACIONES
// ==========================================================================
window.loadDemoPersona = function(key) {
  // Cerrar menú móvil si está desplegado
  const mobileMenu = document.getElementById('persona-dropdown-menu');
  if (mobileMenu) mobileMenu.style.display = 'none';

  // Actualizar estado activo en botones del sidebar
  document.querySelectorAll('.persona-quick-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-persona-${key}`);
  if (activeBtn) activeBtn.classList.add('active');

  const headerUser = document.getElementById('header-username');
  const dashUser = document.getElementById('dash-username');
  const nombreInput = document.getElementById('input-nombre');
  const tutorInput = document.getElementById('input-tutor');

  // Reiniciar estado de inscripción para permitir probar la acción interactiva
  AppState.user.enrolledWorkshop = false;

  if (key === 'mariana') {
    AppState.user.nombre = 'Mariana Hernández';
    AppState.user.edadTipo = 'adult';
    AppState.user.perfilAsignado = 'Inserción Laboral Acelerada (Empleo Junior)';
    window.setParticipantStage('diagnostico', false);
    if (headerUser) headerUser.textContent = 'Mariana';
    if (dashUser) dashUser.textContent = 'Mariana';
    if (nombreInput) nombreInput.value = 'Mariana Hernández';
    handleAgeChange('adult');
    selectCustomOption('situacion', 'egresado', 'Recién egresada(o) · Busco 1er empleo');
    updateUserRouteUI();
    switchView('ruta');
    triggerPushNotification('Caso 1: Mariana (22a) 📋', 'Ruta activada al 40%. Lista para inscribirse al taller recomendado.');
  } else if (key === 'carlos') {
    AppState.user.nombre = 'Carlos Eduardo Peña';
    AppState.user.edadTipo = 'minor';
    AppState.user.tutor = 'Roberto Peña Gómez (Padre/Tutor)';
    AppState.user.perfilAsignado = 'Emprendimiento Sostenible (Taller Emprende)';
    if (headerUser) headerUser.textContent = 'Carlos';
    if (dashUser) dashUser.textContent = 'Carlos';
    if (nombreInput) nombreInput.value = 'Carlos Eduardo Peña';
    if (tutorInput) tutorInput.value = 'Roberto Peña Gómez (Padre / Tutor)';
    handleAgeChange('minor');
    selectCustomOption('situacion', 'estudiando', 'Estudiando (Bachillerato / Universidad)');
    switchView('onboarding');
    triggerPushNotification('Caso 2: Carlos (16a) 🛡️', 'Protocolo activado: Menor de edad con validación de tutor legal (LFPDPPP).');
  } else if (key === 'rodrigo') {
    AppState.user.nombre = 'Rodrigo Morales';
    AppState.user.edadTipo = 'adult';
    AppState.user.perfilAsignado = 'Emprendimiento Sostenible (Taller Emprende)';
    if (headerUser) headerUser.textContent = 'Rodrigo';
    if (dashUser) dashUser.textContent = 'Rodrigo';
    if (nombreInput) nombreInput.value = 'Rodrigo Morales';
    handleAgeChange('adult');
    selectCustomOption('situacion', 'emprendimiento', 'Emprendimiento o negocio propio');
    updateUserRouteUI();
    switchView('ruta');
    triggerPushNotification('Caso 3: Rodrigo (24a) 💡', 'Ruta de Emprendimiento Sostenible (Taller Emprende 80 hrs) activada.');
  } else if (key === 'admin') {
    switchView('admin');
    triggerPushNotification('Caso 4: ProEmpleo Backoffice 🏢', 'Panel de Supervisión activado: Moderación de vacantes y métricas.');
  }
};

window.togglePersonaDropdown = function(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('persona-dropdown-menu');
  if (!menu) return;
  menu.style.display = (menu.style.display === 'none' || !menu.style.display) ? 'block' : 'none';
};

document.addEventListener('click', (e) => {
  const menu = document.getElementById('persona-dropdown-menu');
  const pill = document.getElementById('user-header-pill');
  if (menu && menu.style.display !== 'none' && pill && !pill.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// ==========================================================================
// TOAST NOTIFICATIONS (Con guardián anti-colisión)
// ==========================================================================
window.showToast = function(msg) {
  // Evitar colisión si la notificación push del sistema ya está visible en pantalla
  const pushBanner = document.getElementById('push-banner');
  if (pushBanner && pushBanner.style.display !== 'none' && pushBanner.style.opacity !== '0') {
    return;
  }

  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
};
