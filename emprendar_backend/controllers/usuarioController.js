
    function saludar(req,res,next) {
        res.json('funcionando desde controlador')
    }

    
    module.exports = {
        saludar
    }