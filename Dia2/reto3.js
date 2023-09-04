
// NOTA: Para que no aparezcan notas repetidas solo debe haber un profesor por asignatura y un grupo
// por asignatura y profesor. Todos los retos hay que hacerlos en Workbench y en Node.js con sentencias
// preparadas.
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
// ---------------------------------------Reto 3
// • Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
// están apuntados.
        console.log("-------------------RETO 3-------------------------------------")
        let sql4 = " SELECT first_name, last_name, title FROM students JOIN marks ON ( students.student_id = marks.student_id ) JOIN subjects ON ( marks.subject_id = subjects.subject_id )";
        let [resultado10] = await connection.query(sql4);
        console.log('Nombres y apellidos de alumnos y nombres asignaturas');
        console.log(resultado10);
        console.log(`----------------------------------------------`);

        
// Reto 4
// • Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que
// imparten.
        console.log("-------------------RETO 4-------------------------------------")
    
        let sql5 = " SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON ( subject_teacher.teacher_id = teachers.teacher_id ) JOIN subjects ON ( subject_teacher.subject_id = subjects.subject_id ) ";
        let [resultado11] = await connection.query(sql5);
        console.log('Nombres y apellidos de los profesores y los nombres de las asignaturas');
        console.log(resultado11);
        console.log(`----------------------------------------------`);

// Reto 5
// • Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y
// apellidos del profesor que la imparte.
                      
        // Numero total alumnos por asignatura, nombre asignatura + nombre y apellido de docente 
        // let sqlSerch = " SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT(students.id_students) FROM students JOIN subject_teacher ON (students.grupo_id = subject_teacher.grupo_id) JOIN subjects ON (subject_teacher.subject_id = subjects.id_subjects) JOIN teachers ON (subject_teacher.teacher_id = teachers.id_teachers) GROUP BY subjects.title";
        console.log("-------------------RETO 5-------------------------------------")
        // let sql6 = " SELECT subjects.title, COUNT(students.student_id), teachers.first_name, teachers.last_name FROM students JOIN subject_teacher ON (students.grupo_id = subject_teacher.grupo_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY subjects.title"; 
        // let [resultado12] = await connection.query(sql6);
        // console.log("Total de alumnos por asignatura y nombre y apellidos de profesor");
        // console.log(resultado12);
      
        let sql6 = `SELECT COUNT(*) AS students_num, title AS subjects, t.first_name AS teacher_name, t.last_name AS teacher_lastname FROM subjects AS sub
        JOIN subject_teacher AS st ON sub.subject_id=st.subject_id
        JOIN teachers AS t ON st.teacher_id=t.teacher_id
        JOIN grupo AS g ON st.grupo_id=g.grupo_id
        JOIN students AS stu ON g.grupo_id=stu.grupo_id
        GROUP BY title,t.first_name,t.last_name;`
        let [resultado12] = await connection.query(sql6);
        console.log("Total de alumnos por asignatura y nombre y apellidos de profesor");
        console.log(resultado12);
        

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();