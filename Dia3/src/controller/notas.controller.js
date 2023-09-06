const {pool} = require("../database");

// GET /media?id=5, o /media:5. Obtiene la nota media del id del alumno pasado por parámetro,
// elegir cualquiera de los dos formatos.
async function getMedia(req, res) {
        try{
            let {student_id} = req.query;
            let params = [student_id];
            let nota_media = `SELECT marks.student_id, AVG(marks.mark) AS nota_media
                        FROM marks
                        WHERE marks.student_id = ?
                        GROUP BY marks.student_id, marks.mark`;
            let [resultado1] = await pool.query(nota_media, params);
    
                if (resultado1.length > 0) {
                    res.send(resultado1);
                    } 
                else {
                    res.send("No existe student, lo siento");
                    }
            } 
        catch (error) {
                        res.send(error);
                    }
    
    }

// GET /apuntadas?id=5 o /apuntadas:5. La lista de las asignaturas a la que están apuntadas el
// alumno del id pasado por parámetro, elegir cualquiera de los dos formatos.

async function getApuntadasById(req, res) {
    try {
            let {student_id}= req.query;
            let params = [student_id];
            let asig_apuntadas_byId = `SELECT subjects.subject_id, subjects.title
                    FROM students
                    INNER JOIN marks ON students.student_id = marks.student_id
                    INNER JOIN subjects ON marks.subject_id = subjects.subject_id
                    WHERE students.student_id = ?`;

            let [resultado2] = await pool.query(asig_apuntadas_byId, params);

        if (resultado2.length > 0){
            res.send(resultado2);
        }else {
            res.send("No hay ninguna asignatura apuntada por el alumno");
        }
        }
    catch (error) {
        console.error(error);
        res.send("Error");
    }
}

//GET /apuntadas. Devuelve los nombres y apellidos de todos los alumnos y los nombres de las
//asignaturas a la que están apuntadas.
async function getApuntadas(req, res){

    try{
        let asignatura_apuntadas = 
        
        `SELECT students.first_name, students.last_name, subjects.title AS asignatura
      FROM students
      INNER JOIN marks ON students.student_id = marks.student_id
      INNER JOIN subjects ON marks.subject_id = subjects.subject_id`
        
        let [resultado3] = await pool.query(asignatura_apuntadas);
    
        res.send(resultado3);
      } 
    catch (error) {
        console.error(error);
        res.send(error);
      }
    }


// GET /impartidas?id=5 o /impartidas:5. La lista de las asignaturas que imparte el profesor cuyo
// id es pasado por parámetro, elegir cualquiera de los dos formatos.

async function getImpartidasById(req, res) {
    try {
        let {teacher_id} =req.query;
        let params = [teacher_id];
        let impartidas_teacher_byId = `SELECT subjects.subject_id, subjects.title
        FROM subjects, subject_teacher, teachers
        WHERE teachers.teacher_id = subject_teacher.teacher_id
        AND subject_teacher.subject_id = subjects.subject_id
        AND teachers.teacher_id = ?
            `;

        let [resultado4] = await pool.query(impartidas_teacher_byId, params);

        if (resultado4.length > 0){
            res.send(resultado4);
        } else{
            res.send("No hay ninguna asignatura que imparta el profesor");
            }
    } 
    catch (error) {
                console.error(error);
                res.send("Error");
            }
}
// GET /impartidas. Devuelve los nombres y apellidos de todos los profesores y los nombres de las
// asignaturas a la que imparten.

async function getImpartidas(req, res) {
    try {
        
        let impartidas_teacher = `SELECT teachers.first_name, teachers.last_name, subjects.title AS asignatura
        FROM teachers
        INNER JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
        INNER JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;
  
        
        

        let [resultado5] = await pool.query(impartidas_teacher);
    
                res.send(resultado5);
    }
    catch (error) {
        res.send(error)
    }
}

module.exports = { getMedia, getApuntadasById, getApuntadas,getImpartidasById, getImpartidas};