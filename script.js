function criarJogo(time1, horas, time2) {
    return `
        <li>
            <img src="assets/icon-${time1}.svg" alt="Bandeira da Suiça">
            <strong>${horas}</strong>
            <img src="assets/icon-${time2}.svg" alt="Bandeira de Camarões">
        </li>
    `
}

/** 0 delay negativo é para quando a função executar o delay do primeiro card ser igual a 0, portanto ele não vai ter a animação da opacity(opacidade) */
let delay = -0.4

function criarCard(data, dia, jogos) {
    delay += 0.4

    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${data}<span>${dia}</span></h2>
    <ul>
        ${jogos}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML =

    criarCard("24/11", "quinta",
        criarJogo("switzerland", "07:00", "cameroon") +
        criarJogo("portugal", "13:00", "ghana") +
        criarJogo("brazil", "16:00", "serbia")
    ) +
    criarCard("28/11", "segunda",
        criarJogo("southkorea", "10:00", "ghana") +
        criarJogo("brazil", "13:00", "switzerland") +
        criarJogo("portugal", "13:00", "uruguay")
    ) +
    criarCard("28/11", "segunda",
        criarJogo("southkorea", "10:00", "ghana") +
        criarJogo("brazil", "13:00", "switzerland") +
        criarJogo("portugal", "13:00", "uruguay")
    ) +
    criarCard("28/11", "segunda",
        criarJogo("southkorea", "10:00", "ghana") +
        criarJogo("brazil", "13:00", "switzerland") +
        criarJogo("portugal", "13:00", "uruguay")
    )
