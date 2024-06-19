let tareasSecretaria = [
    { nombre: 'Completar informe de ventas', estado: 'incompleto', activo: true },
    { nombre: 'Realizar investigación de mercado', estado: 'completo', activo: false },
    { nombre: 'Enviar propuesta de proyecto', estado: 'incompleto', activo: true },
    { nombre: 'Organizar reunión con equipo de desarrollo', estado: 'completo', activo: true },
    { nombre: 'Revisar contrato con proveedor', estado: 'incompleto', activo: true },
    { nombre: 'Actualizar base de datos de clientes', estado: 'completo', activo: true },
    { nombre: 'Capacitar a nuevos empleados', estado: 'incompleto', activo: true },
    { nombre: 'Resolver problemas de servicio al cliente', estado: 'completo', activo: true },
    { nombre: 'Crear campaña publicitaria', estado: 'incompleto', activo: true },
    { nombre: 'Preparar informe financiero trimestral', estado: 'completo', activo: false },
    { nombre: 'Implementar mejoras en el sistema de producción', estado: 'incompleto', activo: true },
    { nombre: 'Diseñar nueva línea de productos', estado: 'completo', activo: true },
    { nombre: 'Coordinar envío de mercancía', estado: 'incompleto', activo: true },
    { nombre: 'Evaluar desempeño de empleados', estado: 'completo', activo: true },
    { nombre: 'Planificar estrategias de marketing', estado: 'incompleto', activo: true },
    { nombre: 'Realizar mantenimiento de equipos', estado: 'completo', activo: true },
    { nombre: 'Analizar tendencias de mercado', estado: 'incompleto', activo: true },
    { nombre: 'Revisar políticas de seguridad', estado: 'completo', activo: true },
    { nombre: 'Solicitar cotizaciones a proveedores', estado: 'incompleto', activo: true },
    { nombre: 'Crear contenido para redes sociales', estado: 'completo', activo: false }

    
  ];
  // Función para mostrar las tareas
function mostrarTareas() {
    let tareas_activas = tareasSecretaria.filter(tarea => tarea.activo === true);
    let listaTareas = document.getElementById('lista-tareas');
    
    listaTareas.innerHTML = '';
  
    tareas_activas.forEach(tarea => {
        let col = document.createElement('div');
        col.classList.add('col-sm-4', 'col-md-4', 'col-lg-4', 'col-xl-4');
        
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        cardBody.textContent = tarea.nombre;

         // botón de eliminar
         let botonEliminar = document.createElement('button');
         botonEliminar.textContent = 'Eliminar';
         botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
 
         botonEliminar.addEventListener('click', function() {
             eliminarTarea(tarea.nombre);
         });
         cardBody.appendChild(botonEliminar);

        // checkbox 
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.estado === 'completado';
        checkbox.addEventListener('change', function() {
            tarea.estado = checkbox.checked ? 'completado' : 'incompleto';
        });
        //acomoda las tarjetas
        cardBody.appendChild(checkbox);
        card.appendChild(cardBody);
        col.appendChild(card);
        listaTareas.appendChild(col);
    });

}

// Función para agregar una nueva tarea
function agregarTarea(nombreTarea) {
    let nuevaTarea = {
        nombre: nombreTarea,
        estado: "incompleto", 
        activo: true 
    };
    tareasSecretaria.push(nuevaTarea);
    mostrarTareas();


 // Limpiar la caja de texto
    document.getElementById("tarea").value = "";
}

function ObtenerTarea() {
 let tarea = document.getElementById("tarea").value;
 agregarTarea(tarea);
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarTareas();
 });
 


// Función para eliminar una tarea
function eliminarTarea(nombreTarea) {
    let tarea = tareasSecretaria.find(tarea => tarea.nombre === nombreTarea);
    if (tarea && tarea.estado === 'incompleto') {
        alert('No puedes eliminar una tarea incompleta.');
        return; // Abort deletion
    }

    tareasSecretaria = tareasSecretaria.filter(tarea => tarea.nombre !== nombreTarea);
    mostrarTareas();
}