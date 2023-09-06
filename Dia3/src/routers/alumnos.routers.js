const { Router } = require("express");
const router = Router();
const studentsCtrl = require("../controller/alumnos.controller");

router.get('/students/:id', studentsCtrl.getStudentsbyId);
router.get('/students', studentsCtrl.getStudents);
router.post('/students', studentsCtrl.addStudents);
router.put('/students', studentsCtrl.editStudents);
router.delete('/students', studentsCtrl.delStudents);

module.exports = router;