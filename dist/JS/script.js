window.onload = () => {
    // création de la palette de couleurs
    document.querySelectorAll("#palette div").forEach( element => {
        
        element.style.backgroundColor = element.dataset.color

        element.addEventListener("click", () => {
            canvas.setColor(element.dataset.color)
        })
        
    })

    // chargement du canva

    let canvas = new Dessin("#feuille")

    document.querySelector("#plus").addEventListener("click", () => {
        canvas.biggerStrock()
    })
    document.querySelector("#moins").addEventListener("click", () => {
        canvas.littleStrock()
    })
    document.querySelector("#gomme").addEventListener("click", () => {
        canvas.setColor("white")
    })
    document.querySelector("#eraser").addEventListener("click", () => {
        canvas.eraser()
    })
}
