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
            database: 'museo'
        });

        console.log('Conexión correcta');
    
// async function connect(){
//     const connection = mysql.createConnection({
//                     host: 'localhost',
//                     user: 'root',
//                     password: 'Codenotch',
//                     database: 'museo'
// });
// try {
    
//     console.log("conexion correcta");
// }
// catch(error){
//     console.error("error de conexión:", error);

// } 
// }
// async function main(){
//     try{
//         await connect();
//     } 
//     catch(error){
//         console.error("error en la función principal" , error);
//     }
// }
// main();

// const connect = async()=>{
   
//     try{
//             const connection = await mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: 'Codenotch',
//             database: 'museo'
//         });

//         console.log('Conexión correcta');


// // Obtener un listado de todos los objetos que el museo tiene en préstamo,
// su localización dentro de la exposición, la fecha de expiración de este, 
//la información básica (nombre, apellidos y email) de la persona que los ha prestado.

let sql1 = `SELECT piezas.NombrePieza AS pieza, piezas.id_localizacion, 
prestamos.FechaDevolucion AS fecha_devolucion, propietariopiezas.Nombre AS prop_nombre,
propietariopiezas.Apellidos AS prop_apellido , propietariopiezas.Email AS prop_email 
FROM piezas JOIN prestamos ON piezas.id_Prestamos = prestamos.id_Prestamos 
JOIN propietariopiezas ON prestamos.id_PropietarioPiezas = propietariopiezas.id_PropietarioPiezas 
WHERE prestamos.TipoPrestamo = ? ORDER BY fecha_devolucion`;
let params1 = ["En Prestamo de otros museos"];
connection.query(sql1, params1, function(error, resultado1){

    if (!error) {
        console.log('------Obtener listado de todos los objetos------');
        console.log(resultado1);
    } else {
        console.log(error);
    }
    

 });
// otra forma
// const [resultado1] = await connection.query(sql1, params1);
// console.log('------Obtener listado de todos los objetos------');
// console.log(resultado1);

// let sql1 = `SELECT piezas.NombrePieza AS pieza, piezas.id_localizacion, 
// prestamos.FechaDevolucion AS fecha_devolucion, propietariopiezas.Nombre AS prop_nombre,
// propietariopiezas.Apellidos AS prop_apellido , propietariopiezas.Email AS prop_email 
// FROM piezas JOIN prestamos ON piezas.id_Prestamos = prestamos.id_Prestamos 
// JOIN propietariopiezas ON prestamos.id_PropietarioPiezas = propietariopiezas.id_PropietarioPiezas 
// WHERE prestamos.TipoPrestamo = 'En prestamo de otros museos' ORDER BY fecha_devolucion`;
// let [resultado1] = await connection.query(sql1);
// console.log('------Obtener listado de todos los objetos------');
// console.log(resultado1);

// Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas
// agrupados por su situación dentro de la organización, esto es, 
//cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados.

// let sql2 = `SELECT COUNT(*) AS num_piezas, colecciones.tipoExposicion 
// FROM piezas JOIN colecciones ON piezas.id_colecciones = colecciones.id_colecciones 
// GROUP BY colecciones.tipoExposicion ORDER BY num_piezas DESC`;
// let [resultado2] = await connection.query(sql2);
// console.log('------Obtener de forma ordenada descendente------');
// console.log(resultado2);



    

//Conectar a la base de datos codenotch
// .connect((error) => {
//     if (!error) {
//         console.log('Conectado a la bbdd museo')
//     }else {
//         console.log(error)
//     }
// })
}catch(error){
    console.log(error);
    await connection.end();
}
};
main();

// } catch (error) {
//     console.log(error);
    
// }
// };

// connect();
