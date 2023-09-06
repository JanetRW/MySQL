const {pool} = require("../database");


const getStudents =async(req,res)=>
{
    try{
        let sql;
        if(req.query.id ==null)
            sql = `SELECT * FROM students;`;    
        else
            sql = `SELECT * FROM students WHERE student_id=?` + res.query.id;

        let [resultado1] = await pool.query(sql);
        res.send(resultado1); 
        
    }
    catch(err)
    {
        console.log(err);
    }
}

  async function getStudentsbyId(req, res) {
    try {
        let { student_id } = req.query;
        let params = [student_id];
        let mostrarAlumnosbyId = `SELECT * FROM students WHERE student_id=?`;
        let [resultado2] = await pool.query(mostrarAlumnosbyId, params);     

        if (resultado2.length > 0) {
            res.send(resultado2);
        } else {
            res.send("No existe el alumno ");
        }
        } catch (error) {
        res.send(error);
        }

}
async function addStudents(req,res){
    //-- Obtenemos los datos del nuevo alumno por el body.
    const{student_id,first_name,last_name,grupo_id,year} = req.body;
    //-- IMPORTANTE: Los parámetros deben ir colocados en el orden en el que se deben insertar en la
    //-- peticion sql.
    // let params = [student_id,first_name,last_name,grupo_id,year];
    let params = [req.body.student_id,req.body.first_name, req.body.last_name, req.body.grupo_id,req.body.year];
    let sql = `INSERT INTO students (student_id,first_name,last_name,grupo_id,year) VALUES (?,?,?,?,?);`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}



async function editStudents(req,res){
    const{student_id,first_name,last_name,grupo_id,year} = req.body;
    //-- IMPORTANTE: Los parámetros deben ir colocados en el orden en el que se deben insertar en la
    //-- peticion sql.
    const params = [
        first_name? first_name: null,
        last_name? last_name:   null,
        grupo_id? grupo_id:     null,
        year? year:             null,
        student_id
    ];
    let sql = `UPDATE students SET first_name = COALESCE(?,first_name),
                                    last_name = COALESCE(?,last_name),
                                    grupo_id = COALESCE(?,grupo_id),
                                    year = COALESCE(?,year)
                                    WHERE student_id = ?;`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function delStudents(req,res){ /// NO ME SALE
    //const {student_id} = req.body;
    // let params = [student_id];
    let params = [req.body.student_id];
    let sql = `DELETE FROM students WHERE student_id = ?;`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getStudents,getStudentsbyId, addStudents, editStudents, delStudents };