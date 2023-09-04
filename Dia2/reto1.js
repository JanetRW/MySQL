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

async function main()
{
    try
    {
        let connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Codenotch',
            database: 'registro'
        });

        console.log('Conexión correcta');

//--calcular la nota media de los alumnos de la asignatura 1.
        let media_notas = "SELECT AVG(mark) FROM marks WHERE subject_id = 23001;"
        let [result] = await connection.query(media_notas);
        console.log('nota media de los alumnos de la asignatura 23001');
        console.log(result);
        console.log(`----------------------------------------------`);
        

        //-----Calcular el número total de alumnos que hay en el bootcamp.
        let total_students = `SELECT COUNT(*) FROM students;`;
        let [resultado2] = await connection.query(total_students);
        console.log('número total de alumnos');
        console.log(resultado2);
        console.log(`----------------------------------------------`);

        // Listar todos los campos de la tabla “groups”.
        let todo_grupos = `SELECT * FROM grupo;`;
        let [resultado3] = await connection.query(todo_grupos);
        console.log('Todos los campos de grupo');
        console.log(resultado3);
        console.log(`----------------------------------------------`);

        //Eliminar todas las notas > 5 del año pasado-FALTA
        //  let eliminar_notas5 = `DELETE FROM marks WHERE (mark > 5) AND  ( date >= '2022/01/01' AND date <= '2022/12/31')`;
        //  let [resultado4] = await connection.query(eliminar_notas5);
        //  console.log('Eliminar todas las notas > 5 del año pasado');
        //  console.log(`----------------------------------------------`);
        //  console.log(resultado4);

        //Listar estudiantes del año en curso--
       
        let students_year = "SELECT * FROM students WHERE year = 2023;"
        let [resultado5] = await connection.query(students_year);
        console.log('Listar estudiantes del año en curso');
        console.log(`----------------------------------------------`);
        console.log(resultado5);

        //Calcular el número de profes por asignatura
        let nro_teachers_subject= `SELECT subject_id, COUNT(*) FROM subject_teacher GROUP BY subject_id;`;
        let [resultado6] = await connection.query(nro_teachers_subject);
        console.log('Total de profes por asignatura');
        console.log(resultado6);
        console.log(`----------------------------------------------`);

}catch(err){
        console.log(err);
        await connection.end();
    }
    };
    
    main();


    // let mysql = require("mysql2");
    // let connection = mysql.createConnection(
    //     {
    //         host : "localhost",
    //         user : "root",
    //         password : "",
    //         database : "dia3"
    //     }
    // );
    
    
    // connection.connect(function(error){
    //     if(error){
    //         console.log(error);
    //     }else{
    //         console.log("Conexión correcta.")
    //     }
    // });
    // let params =['Prestamo'];
    // let sql = "SELECT Piezas.NombrePieza, Localizacion.nombreLocalizacion, Prestamos.FechaDevolucion, PropietarioPiezas.Nombre, PropietarioPiezas.Apellidos, PropietarioPiezas.Email, Prestamos.TipoPrestamo FROM Piezas JOIN Prestamos ON (Piezas.idPrestamo = Prestamos.idPrestamos) JOIN PropietarioPiezas ON (Prestamos.idPropietario = PropietarioPiezas.idPropietarioPiezas) JOIN Localizacion ON (Piezas.idLocalizacion = Localizacion.idLocalizacion) WHERE Prestamos.TipoPrestamo = ?";
    // connection.query(sql,params, function (err, result){
    //             if(err) {
    //                 console.log(err);
    //             }
    //             else {
    //                 console.log('Listado de objetos:');
    //                 console.log(result);
    
    //             }
    //         });