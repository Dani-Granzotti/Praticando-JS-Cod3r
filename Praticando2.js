function triangulos (ladoA, LadoB, LadoC) {

    if (ladoA === LadoB && LadoB === LadoC) {
        return "Triângulo Equilátero"
    } else if (ladoA === LadoB || LadoB === LadoC || ladoA === LadoC) {
        return "Triângulo Isósceles"
    } else {
        return "Triângulo Escaleno"
    }
}

    console.log(triangulos(3, 3, 3))
    console.log(triangulos(5, 5, 7))
    console.log(triangulos(4,7,8))