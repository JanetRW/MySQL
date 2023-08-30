// Reto 2
// • Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.

// • Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los
// profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5.

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
// • Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.

        // console.log(`---------Borrar notas de más de 10 años--------`);
//La función timestampdiff es una función de SQL calcula la diferencia 
//entre dos marcas de tiempo (timestamps) y devuelve el resultado en una unidad de tiempo específica
        // let marks10 = `DELETE FROM marks WHERE timestampdiff(YEAR, date, curdate()) > 10;`;
        // let marks10 = `DELETE FROM marks WHERE date<'2013-01-01'`; 
        // let [result] = await connection.query(marks10);
        // console.log('Notas Actualizadas');
        // console.log(`-----------------------------------------------`);
        // console.log(result)

// • Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los
// profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5.
        console.log(`--------Todas las notas menores a 5-------`);
        let marksTo5 = `UPDATE marks SET mark = 5 WHERE mark < 5;`;
        let [result] = await connection.query(marksTo5);
        console.log('Notas Actualizadas');
        console.log(`----------------------------------------------`);
        console.log(result)

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();