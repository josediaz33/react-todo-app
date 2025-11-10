import type { Task } from '../types';

const getTasksFromStorage = (): Task[] => {
    const storedTasks = localStorage.getItem('react-ts-todo-tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
};

export default function Stats() {
    const tasks = getTasksFromStorage();

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.done).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <main>
            <h1> Estadísticas de Tareas </h1>
            <ul>
                <li>Total de Tareas Creadas: {totalTasks}</li>
                <li>Tareas Completadas: {completedTasks}</li>
                <li>Tareas Pendientes: {pendingTasks}</li>
            </ul>

        </main>
    );
}