exports.mostrarTrabajos = (req, res) => {
    res.render('home'), {
        nombrePagina: 'devJobs',
        tagline: 'Encuentra y publica Trabajo para devs web',
        barra: true,
        boton: true
    }
}