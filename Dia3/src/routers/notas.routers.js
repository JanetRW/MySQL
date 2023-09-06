const { Router } = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");

router.get('/media/:id', notasCtrl.getMedia);
router.get('/apuntadas/:id', notasCtrl.getApuntadasById);
router.get('/apuntadas', notasCtrl.getApuntadas);
router.get('/impartidas/:id', notasCtrl.getImpartidasById);
router.get('/impartidas', notasCtrl.getImpartidas);

module.exports = router;