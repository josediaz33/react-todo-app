Parte 1: Realizar dos mejoras
1. Persistencia de datos con LocalStorage
La primera mejora fue persistir las tareas en local storage, con nuestra variable de getInitialTask, obtenemos el estado inicial del local, y luego inicializamos con useState y se comprueba si existen tareas o no, si hay se carga o sino inicializa vacio, luego con useEffect se escucha cualquier cambio en el arreglo de tareas, con el JSON.stringify se guarda cualquier cambio que haya.

```
// Función para obtener el estado inicial desde localStorage
const getInitialTasks = (): Task[] => {
    const storedTasks = localStorage.getItem('react-ts-todo-tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
};
//Inicializamos useState
    const [tasks, setTasks] = useState<Task[]>(getInitialTasks);
//utilización de useEffect
useEffect(() => {
        localStorage.setItem('react-ts-todo-tasks', JSON.stringify(tasks));
    }, [tasks]);
```
3. Contador de tareas pendientes
La otra mejora que considere más sencilla era calcular las tareas, con un contador en tiempo real. Simplemente utilizamos filter sobre el array de tareas, y contamos unicamente aquellas donde el valor de “done” sea false, esto se recalcula automáticamente en cada render.
```const pendingTasksCount = tasks.filter(task => !task.done).length;```

Parte 2: Integración Avanzada - Multi-Página
Para la segunda parte elegí la opción de hacer multi-página nuestro todo app.
Instale primero react-router-dom

>>npm install react-router-dom

Cambiamos todo lo que estaba en App.tsx a un nuevo componente Home.tsx, y toca refactorizar. en Home va albergar toda la funcionalidad principal, luego el App.tsx va quedar como un enrutador, ahi encapsulamos en un BrowserRouter y defino las rutas con Routes y Route.
En el nuevo componente stat probamos también la funcionalidad de compartir datos entre vistas, cargando la lista de tareas directamente desde el local storage al montar la vista. En esta página use las métricas de tareas completadas, tareas pendientes y el total de tareas.
También creamos un nuevo componente NavBar, sencillo, agregamos simplemente unos estilos a nuestro link (Link de React Router).
