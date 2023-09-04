// ---------------------------------------Reto 1- DIA 2
// • Usando el ejemplo de base de datos que tenemos ya implementado desde unidades anteriores,
// calcular la nota media de los alumnos de la asignatura 1.
// • Calcular el número total de alumnos que hay en el bootcamp.
// • Listar todos los campos de la tabla “groups”.
// • Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año
// pasado (no utilices BETWEEN).
// • Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla
// de estudiantes debe tener un campo que sea el año de ingreso.
// • Calcular el numero de profesores que hay por cada asignatura.
// • El desarrollo de estas consultas se tiene que hacer tanto en Workbench como en Node.js
const mysql = require('mysql2/promise');

const connect = async()=>{
    try{
        const registro = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Codenotch',
            database: 'registro'
        });

        console.log('Conexión correcta');


        //--calcular la nota media de los alumnos de la asignatura 1.
        // let sql = "SELECT subject_id, AVG(mark) FROM codenotch.mark WHERE subject_id = 23001;"

// connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })


        //-----Calcular el número total de alumnos que hay en el bootcamp.
        // let sql = `SELECT COUNT(*) FROM students;`;
        // connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

        // Listar todos los campos de la tabla “groups”.
        // let sql = `SELECT * FROM grupo;`;
       

// connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

        //-- Eliminar todas las notas > 5 del año pasado-FALTA
        // let sql = `DELETE FROM marks WHERE (mark > 5) AND  ( date >= '2022/01/01' AND date < '2023/01/01')`;
       // connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

        //-- Listar estudiantes del año en curso--FALTA
       
        // let sql = "SELECT * FROM student WHERE year = 2022;"
        // connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

        //-- Calcular el número de profes por asignatura
        // let sql= `SELECT subject_id, COUNT(*) FROM subject_teacher GROUP BY subject_id;`;

// connection.query(sql, (error, result) => {
//     if (!error) {
//         console.log('Operación correcta');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

connect();

// codenotchDB.connect((error) => {
//     if (!error) {
//         console.log('Conectado a la bbdd codenotch')
//     }else {
//         console.log(error)
//     }
// })