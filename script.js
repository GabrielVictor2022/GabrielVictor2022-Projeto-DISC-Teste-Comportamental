document.getElementById('startTest').addEventListener('click', startTest);
let startTime; // Armazena o tempo de início do teste
let endTime;   // Armazena o tempo de término do teste


const questions = [
    { id: 1, options: { D: "Dominante", I: "Influente", S: "Estável", C: "Conformado" } },
    { id: 2, options: { D: "Decidido", I: "Persuasivo", S: "Paciente", C: "Detalhista" } },
    { id: 3, options: { D: "Competitivo", I: "Entusiasmado", S: "Apoiante", C: "Preciso" } },
    { id: 4, options: { D: "Direto", I: "Expressivo", S: "Leal", C: "Metódico" } },
    { id: 5, options: { D: "Líder", I: "Inspirador", S: "Confiável", C: "Cauteloso" } },
    { id: 6, options: { D: "Corajoso", I: "Encantador", S: "Amigável", C: "Organizado" } },
    { id: 7, options: { D: "Determinado", I: "Sociável", S: "Tranquilo", C: "Minucioso" } },
    { id: 8, options: { D: "Assertivo", I: "Espontâneo", S: "Cooperativo", C: "Disciplinado" } },
    { id: 9, options: { D: "Proativo", I: "Otimista", S: "Harmônico", C: "Perfeccionista" } },
    { id: 10, options: { D: "Independente", I: "Amigável", S: "Atencioso", C: "Concentrado" } },
    { id: 11, options: { D: "Persistente", I: "Carismático", S: "Paciente", C: "Analítico" } },
    { id: 12, options: { D: "Agressivo", I: "Cativante", S: "Gentil", C: "Racional" } },
    { id: 13, options: { D: "Prático", I: "Comunicativo", S: "Simpático", C: "Crítico" } },
    { id: 14, options: { D: "Ambicioso", I: "Expressivo", S: "Solidário", C: "Precavido" } },
    { id: 15, options: { D: "Visionário", I: "Engraçado", S: "Moderado", C: "Planejador" } },
    { id: 16, options: { D: "Competente", I: "Conversador", S: "Tolerante", C: "Rigoroso" } },
    { id: 17, options: { D: "Resiliente", I: "Confiável", S: "Adaptável", C: "Esquemático" } },
    { id: 18, options: { D: "Estratégico", I: "Motivador", S: "Calmo", C: "Reservado" } },
    { id: 19, options: { D: "Arrojado", I: "Alegre", S: "Cuidadoso", C: "Detalhista" } },
    { id: 20, options: { D: "Direto", I: "Extrovertido", S: "Tolerante", C: "Observador" } },
    { id: 21, options: { D: "Desafiador", I: "Amável", S: "Dedicado", C: "Persistente" } },
    { id: 22, options: { D: "Inovador", I: "Amigável", S: "Diplomático", C: "Exato" } },
    { id: 23, options: { D: "Arriscado", I: "Divertido", S: "Estável", C: "Sistemático" } },
    { id: 24, options: { D: "Competitivo", I: "Inspirador", S: "Generoso", C: "Ordenado" } },
    { id: 25, options: { D: "Energetico", I: "Entusiasta", S: "Tranquilo", C: "Controlado" } },
    { id: 26, options: { D: "Persistente", I: "Vibrante", S: "Equilibrado", C: "Determinista" } },
    { id: 27, options: { D: "Atrevido", I: "Influente", S: "Apoiante", C: "Discreto" } },
    { id: 28, options: { D: "Focado", I: "Encantador", S: "Paciente", C: "Responsável" } },
    { id: 29, options: { D: "Pragmático", I: "Simpático", S: "Amigo", C: "Calculista" } },
    { id: 30, options: { D: "Ágil", I: "Animado", S: "Tolerante", C: "Conservador" } },
    { id: 31, options: { D: "Autoritário", I: "Enérgico", S: "Generoso", C: "Criterioso" } },
    { id: 32, options: { D: "Áspero", I: "Afetuoso", S: "Sereno", C: "Prudente" } },
    { id: 33, options: { D: "Eficiente", I: "Simpatizante", S: "Cordial", C: "Respeitoso" } },
    { id: 34, options: { D: "Convincente", I: "Conversador", S: "Coeso", C: "Minucioso" } },
    { id: 35, options: { D: "Ávido", I: "Vibrante", S: "Sereno", C: "Metódico" } },
    { id: 36, options: { D: "Direto", I: "Criativo", S: "Ponderado", C: "Objetivo" } },
    { id: 37, options: { D: "Independente", I: "Inspirador", S: "Harmonioso", C: "Controlado" } },
    { id: 38, options: { D: "Determinado", I: "Afável", S: "Conectado", C: "Crítico" } },
    { id: 39, options: { D: "Inflexível", I: "Sociável", S: "Moderado", C: "Minucioso" } },
    { id: 40, options: { D: "Autoritário", I: "Espontâneo", S: "Fiel", C: "Cuidadoso" } }, 
];

let scores = { D: 0, I: 0, S: 0, C: 0 };

function startTest() {
    startTime = new Date(); // Inicia o cronômetro
    const app = document.getElementById('app');
    app.innerHTML = `
        <div id="timer" style="font-size: 16px; margin-bottom: 10px;">Tempo: 0:00</div>
        <div id="questions"></div>
    `;
    startTimer();
    loadQuestion(0);
}

let timerInterval; // Variável para armazenar o intervalo do cronômetro

function startTimer() {
    timerInterval = setInterval(() => {
        const now = new Date();
        const timeTaken = Math.floor((now - startTime) / 1000); // Tempo em segundos
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;

        document.getElementById('timer').innerText = `Tempo: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}


function loadQuestion(index) {
    if (index >= questions.length) return showResults();
    const question = questions[index];
    const questionDiv = document.getElementById('questions');

    questionDiv.innerHTML = `
        <p>Escolha a opção que mais se descreve você: </p>
        ${Object.entries(shuffleOptions(question.options))
            .map(
                ([key, value]) =>
                    `<button onclick="selectOption('${key}', ${index})">${value}</button>`
            )
            .join('')}
    `;
}

function shuffleOptions(options) {
    const entries = Object.entries(options);
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return Object.fromEntries(entries);
}

function selectOption(option, index) {
    scores[option]++;
    loadQuestion(index + 1);
}

function showResults() {
    clearInterval(timerInterval); // Para o cronômetro
    endTime = new Date(); // Marca o tempo de término
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    const total = Object.values(scores).reduce((sum, val) => sum + val, 0);
    const percentages = Object.keys(scores).reduce(
        (acc, key) => ({ ...acc, [key]: ((scores[key] / total) * 100).toFixed(2) }),
        {}
    );

    const predominantFactor = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const factorTexts = {
        D: {
            title: "Fator predominante: DOMINÂNCIA",
            description:
                "Esta dimensão enfatiza a habilidade de resolver problemas e superar desafios.",
            strengths: "confiante, determinado, ousado, direto, ambicioso e competitivo.",
            weaknesses: "impaciente, insensível, teimoso, controlador, agressivo e autoritário.",
        },
        I: {
            title: "Fator predominante: INFLUÊNCIA",
            description:
                "Esta dimensão enfatiza a habilidade de se comunicar e influenciar outras pessoas.",
            strengths: "sociável, otimista, persuasivo, carismático, entusiasmado e empático.",
            weaknesses: "superficial, impulsivo, desorganizado, distraído, dependente e exagerado.",
        },
        S: {
            title: "Fator predominante: ESTABILIDADE",
            description:
                "Esta dimensão enfatiza a habilidade de manter a harmonia e a consistência.",
            strengths: "paciente, leal, confiável, previsível, amigável e calmo.",
            weaknesses: "teimoso, passivo, indeciso, resistente a mudanças, reservado e lento.",
        },
        C: {
            title: "Fator predominante: CONFORMIDADE",
            description:
                "Esta dimensão enfatiza a possibilidade de trabalhar para assegurar a qualidade e a precisão em todas as tarefas.",
            strengths: "digno de confiança, prático, diplomata, objetivo, organizado e eficiente.",
            weaknesses: "egoísta, avarento, indeciso, desmotivado, preguiçoso e preocupado.",
        },
    };

    const resultText = factorTexts[predominantFactor];

    document.getElementById('app').innerHTML = `
        <h2>${resultText.title}</h2>
        <p><strong>Porcentagem:</strong> ${percentages[predominantFactor]}%</p>
        <p>${resultText.description}</p>
        <p><strong>Pontos Fortes:</strong> ${resultText.strengths}</p>
        <p><strong>Pontos Fracos:</strong> ${resultText.weaknesses}</p>
        <h3>Porcentagens de Todos os Fatores:</h3>
        <ul>
            <li><strong>Dominância (D):</strong> ${percentages.D}%</li>
            <li><strong>Influência (I):</strong> ${percentages.I}%</li>
            <li><strong>Estabilidade (S):</strong> ${percentages.S}%</li>
            <li><strong>Conformidade (C):</strong> ${percentages.C}%</li>
        </ul>
        <p><strong>Tempo total:</strong> ${minutes} minutos e ${seconds} segundos.</p>
        <button id="generatePDF">Baixar Relatório</button>
    `;

    document.getElementById('generatePDF').addEventListener('click', () =>
        generatePDF(resultText, percentages, predominantFactor, minutes, seconds)
    );
}


function generatePDF(resultText, percentages, predominantFactor, minutes, seconds) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('Relatório DISC', 105, 20, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Resultados do Teste Comportamental', 105, 30, { align: 'center' });

    doc.setFontSize(14);
    doc.text(resultText.title, 20, 50);
    doc.setFontSize(12);
    doc.text(`Porcentagem: ${percentages[predominantFactor]}%`, 20, 60);
    doc.text(resultText.description, 20, 70, { maxWidth: 170 });

    doc.text(`Pontos Fortes: ${resultText.strengths}`, 20, 90, { maxWidth: 170 });
    doc.text(`Pontos Fracos: ${resultText.weaknesses}`, 20, 110, { maxWidth: 170 });

    doc.text(`Porcentagens:`, 20, 140);
    Object.entries(percentages).forEach(([key, value], index) => {
        doc.text(`${key}: ${value}%`, 20, 150 + index * 10);
    });

    doc.text(`Tempo total: ${minutes} minutos e ${seconds} segundos.`, 20, 200);

    doc.setFontSize(10);
    doc.text('Obrigado por participar do teste!', 105, 280, { align: 'center' });

    doc.save('relatorio_disc.pdf');
}

