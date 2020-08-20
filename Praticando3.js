function exp (base, expoente) {
    resultado = Math.pow(base, expoente)

    return resultado
}

console.log(exp(2, 2))

// novo método

function expnovo (base, expoente) {
    resultado = base ** expoente

    return resultado
}

console.log(expnovo(5, 3))