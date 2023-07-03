const os = require("os") // carregando modulo os

setInterval(() => {
    /* desestruturação do freemem e totalmem */
    const { freemem, totalmem } = os

    /* pegando os mb e porcentagem */
    const total = parseInt(totalmem / 1024 / 1024)
    const free = parseInt(freemem / 1024 / 1024)
    const porcents = parseInt((free / total) * 100)
    
    /* template literals para formatar com MB */
    const stats = {
        free: `${free} MB`,
        total: `${total} MB`,
        porcents: `${porcents}%`
    }

    /* console para imprimir na tela */
    console.clear()
    console.log("========= Memory =========");
    console.table(stats)    
}, 1000);
