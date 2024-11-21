// Obter elementos DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const difficultySelect = document.getElementById('difficulty');

// Função para adicionar uma tarefa
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const difficulty = difficultySelect.value;

    // Se o campo de tarefa estiver vazio, não faz nada
    if (taskText === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    // Criar um item de lista para a tarefa
    const li = document.createElement('li');
    li.classList.add(difficulty); // Adiciona a classe com base na dificuldade

    // Adiciona o texto da tarefa ao item da lista
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="doneBtn">Concluída</button>
        <button class="deleteBtn">Excluir</button>
    `;

    // Adicionar evento para marcar tarefa como concluída
    const doneBtn = li.querySelector('.doneBtn');
    doneBtn.addEventListener('click', function() {
        li.classList.toggle('done'); // Alterna o estado de conclusão
    });

    // Adicionar evento para excluir tarefa
    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li); // Remove a tarefa da lista
    });

    // Adiciona a tarefa na lista
    taskList.appendChild(li);

    // Ordena as tarefas com base na dificuldade
    sortTasksByDifficulty();

    // Limpar o campo de input
    taskInput.value = "";
});

// Função para ordenar as tarefas
function sortTasksByDifficulty() {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
        // Define a ordem de dificuldade (dificil > medio > facil)
        const difficultyOrder = { 'dificil': 1, 'medio': 2, 'facil': 3 };
        return difficultyOrder[a.classList[0]] - difficultyOrder[b.classList[0]];
    });

    // Reorganiza as tarefas na lista
    tasks.forEach(task => taskList.appendChild(task));
}
