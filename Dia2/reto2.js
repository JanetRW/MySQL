// Reto 2
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
// • Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
// mayor de 8 y la nota tenga fecha del año pasado.
        let sql1 = " SELECT student_id, mark FROM marks WHERE ( student_id BETWEEN 202301 AND 202320 ) OR ( mark > 8 AND date BETWEEN '2022-01-01' AND '2022-12-31' )";
        let [resultado7] = await connection.query(sql1);
        console.log('ID y nota de los estudiantes');
        console.log(resultado7);
        console.log(`----------------------------------------------`);




// • Obtén la media de las notas que se han dado en el último año por asignatura.

        let sql2 = `SELECT subject_id,AVG(mark) FROM marks WHERE (date BETWEEN DATE_SUB(NOW(),INTERVAL 1 YEAR) AND curdate()) GROUP BY subject_id;`;
        let [resultado8] = await connection.query(sql2);
        console.log('Media de notas ultimo año/asignatura');
        console.log(resultado8);
        console.log(`----------------------------------------------`);


// • Obtén la media aritmética de las notas que se han dado en el último año por alumno.

        // let sql3=`SELECT AVG(mark), student_id FROM marks WHERE (date BETWEEN '2021-12-31' AND '2022-12-31') GROUP BY student_id;`;
        let sql3 = `SELECT student_id,AVG(mark) FROM marks WHERE (date BETWEEN DATE_SUB(NOW(),INTERVAL 1 YEAR) AND curdate()) GROUP BY student_id;`;
        let [resultado9] = await connection.query(sql3);
        console.log('Media aritmética de notas ultimo año/alumnos');
        console.log(resultado9);
        console.log(`----------------------------------------------`);


    }catch(err){
        console.log(err);
        await connection.end();
    }
    };
    
    main();