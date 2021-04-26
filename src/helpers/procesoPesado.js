export const procesoPesado = (iteraciones) => {

    for (let i = 0; i < iteraciones; i++) {
        console.log(`iteración ${i + 1}`);
    }

    return `${iteraciones} iteraciones realizadas.`;

}