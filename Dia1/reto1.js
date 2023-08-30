//RETO 1 DIA1
//• Realizar los siguientes puntos en MysqlWorkbench y luego en Node.js
//• Modifica la tabla dirección para añadir una columna y para borrar otra columna.
//• Elimina la tabla dirección de forma permanente.
//• Setear todas las notas de los alumnos a ‘0’
//• Obtener el nombre y el primer apellido de todos los estudiantes.
//• Obtener todos los datos de los profesores.
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
//• Modifica la tabla dirección para añadir una columna y para borrar otra columna.

        // console.log(`--------Añadir una columna--------`);
        // let columna = "ALTER TABLE direccion ADD COLUMN pais VARCHAR(45) NULL";
        // let [result] =  await connection.query(columna);
        // console.log('Columna añadida');
        // console.log(`----------------------------------------------`);
        // console.log(result);
        // await connection.end();

        // console.log(`--------Borrar una columna--------`);
        // let borrarColumna = "ALTER TABLE direccion DROP COLUMN codigo_postal";
        // let [result] = await connection.query(borrarColumna);
        // console.log('Columna eliminada');
        // console.log(`----------------------------------------------`);
        // console.log(result);
        // await connection.end();

//• Elimina la tabla dirección de forma permanente.
        // console.log(`------------Borrar Tabla direccion------------`);
        // const borrarDireccion = "DROP TABLE direccion";
        // const [result] = await connection.query(borrarDireccion);
        // console.log('Tabla Eliminada');
        // console.log(`----------------------------------------------`);
        // console.log(result);
        
        //Crear tabla dirección otra vez

        // console.log(`------------Crear Tabla direccion------------`);
        // let sql ="CREATE TABLE direccion(id_direccion INT AUTO_INCREMENT PRIMARY KEY," +
        //          "nombre_direccion VARCHAR(45),"+"ciudad VARCHAR(45),"+"pais VARCHAR(45))";
        // let [result] = await connection.query(sql);
        // console.log('Tabla Creada desde node');
        // console.log(`----------------------------------------------`);
        // console.log(result);
        
           

        //Insertar datos en los campos de tabla  dirección
        // console.log('--------------Insertar valores en la tabla dirección-----------')
        // let datos = [
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (1, 'calle Rosa Negra', 'Navalmoral de la Mata', 'España')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (2, 'calle Claveles Amarillos', 'Mexico DF', 'Mexico')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (3, 'calle Camino Blanco', 'Manaos', 'Brasil')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (4, 'calle Victorioso', 'Lima', 'Perú')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (5, 'calle El portal de la luz', 'Buenos Aires', 'Argentina')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (6, 'calle Del Escritor', 'Talavera', 'España')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (7, 'calle El geranio azul', 'Toledo', 'España')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (8, 'calle Louvre', 'París', 'Francia')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (9, 'calle La semilla', 'Badajoz', 'España')",
        //     "INSERT INTO direccion (id_direccion, nombre_direccion, ciudad, pais) VALUES (10, 'calle La Higuera', 'Cáceres', 'España')"
        // ];

        // for (const dato of datos) {
        //     await connection.query(dato);
        //     console.log(`Consulta ejecutada: ${dato}`);
        // }
        // console.log('Datos Insertados');
        // console.log(`----------------------------------------------`);

// Insertar datos en los campos de tabla  grupo
        // console.log('--------------Insertar valores en la tabla grupo-----------')
        // let grupos = [
        //     "INSERT INTO grupo (grupo_id, name) VALUES (11, 'grupo11')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (12, 'grupo12')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (13, 'grupo13')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (14, 'grupo14')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (15, 'grupo15')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (16, 'grupo16')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (17, 'grupo17')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (18, 'grupo18')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (19, 'grupo19')",
        //     "INSERT INTO grupo (grupo_id, name) VALUES (20, 'grupo20')",
        // ];

        // for (const grupo of grupos) {
        //     await connection.query(grupo);
        //     console.log(`Consulta ejecutada: ${grupo}`);
        // }
        // console.log('Grupos Insertados');
        // console.log(`----------------------------------------------`); 

//Insertar datos en los campos de tabla  students
        // console.log('--------------Insertar valores en la tabla students-----------')
        // let students = [
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202311, 'Carlota', 'Perez', 11) ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202312, 'Marcela', 'Reynolds', 12)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202313, 'Margot', 'Pacheco', 13)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202314, 'Juan', 'Pascal', 14)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202315, 'Yeni','Paz', 15)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202316, 'Nora', 'Huizar', 16)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202317, 'Sandra', 'Cruz', 17)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202318, 'Rodrigo', 'Rosas', 18)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202319, 'Korina', 'Mendoza', 19)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
        //     "INSERT INTO students (student_id, first_name, last_name, grupo_id) VALUES (202320, 'Beatriz', 'Solano', 20)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",


        // ];

        // for (const student of students) {
        //     await connection.query(student);
        //     console.log(`Consulta ejecutada: ${student}`);
        // }
        // console.log('Students Insertados');
        // console.log(`----------------------------------------------`);  

//Insertar datos en los campos de tabla  teachers
        // console.log('--------------Insertar valores en la tabla teachers-----------')
        // let teachers = [
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023111, 'Mariano', 'Romero')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023112, 'Bruno', 'Pinasco')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023113, 'Francesca', 'Gonzalez')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023114, 'Neli','Collaso')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023115, 'Rosario', 'Flores')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023116, 'Francisco', 'Lara')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023117, 'Manuel', 'Llanos')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023118, 'Diego', 'Montalban')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023119, 'Alesia', 'Trigoso')",
        //     "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (2023120, 'Marco', 'Solis')",
        // ];  


        // for (const teacher of teachers) {
        //     await connection.query(teacher);
        //     console.log(`Consulta ejecutada: ${teacher}`);
        // }
        // console.log('Teachers Agregados');
        // console.log(`----------------------------------------------`);

//Insertar datos en los campos de tabla  teachers
        // console.log('--------------Insertar valores en la tabla subjects-----------')
        // let subjects = [
        //     "INSERT INTO subjects (subject_id, title) VALUES (23011, 'Anatomía')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23012, 'Geometría')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23013, 'Trigonometría')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23014, 'Algebra')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23015, 'Aritmética')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23016, 'Informática')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23017, 'Estadística')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23018, 'Economía')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23019, 'Lógica')",
        //     "INSERT INTO subjects (subject_id, title) VALUES (23020, 'Ética')",
        // ];  


        // for (const subject of subjects) {
        //     await connection.query(subject);
        //     console.log(`Consulta ejecutada: ${subject}`);
        // }
        // console.log('Subjects Agregados');
        // console.log(`----------------------------------------------`);
//Insertar 10 datos en los campos de tabla  subject teacher
        // console.log('--------------Insertar valores en la tabla subject_teacher-----------')
        // let subjects_teachers = [
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23011, 2023111, 11, 111)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23012, 2023112, 12, 112)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23013, 2023113, 13, 113)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23014, 2023114, 14, 114)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23015, 2023115, 15, 115)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23016, 2023116, 16, 116)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23017, 2023117, 17, 117)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23018, 2023118, 18, 118)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23019, 2023119, 19, 119)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
        //     "INSERT INTO subject_teacher (subject_id, teacher_id,grupo_id,subject_teacher_id) VALUES (23020, 2023120, 20, 120)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",


        // ];

        // for (const subject_teacher of subjects_teachers) {
        //     await connection.query(subject_teacher);
        //     console.log(`Consulta ejecutada: ${subject_teacher}`);
        // }
        // console.log('Students Insertados');
        // console.log(`----------------------------------------------`);  


//• Setear todas las notas de los alumnos a ‘0’
        //  console.log(`-------------Setear Todas las notas a 0--------------`);
        // const marksTo0 = `UPDATE marks SET mark = 0`;
        // const [result] = await connection.query(marksTo0);
        // console.log('Notas Actualizadas');
        // console.log(`----------------------------------------------`);
        // console.log(result);

//• Obtener el nombre y el primer apellido de todos los estudiantes.
        // console.log(`--------Nombre y Apellido de todos los estudiantes------`);
        // let students = `SELECT first_name,last_name FROM students;`;
        // let [result] = await connection.query(students);
        // console.log(`----------------------------------------------`);
        // console.log(result);

//• Obtener todos los datos de los profesores.
        // console.log(`--------Todos los datos de los profesores------`);
        // let teachers = `SELECT * FROM teachers;`;
        // let [result] = await connection.query(teachers);
        // console.log(`-----------------------------------------------`);
        // console.log(result);

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();