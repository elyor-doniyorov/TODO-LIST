import addToStorage from './addToStorage.js';

/* eslint-disable no-unused-vars, no-restricted-globals */
const addTodoTextToBox = (tasks, createList) => {
  const inputText = document.getElementById('input-text');
  inputText.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const newItem = {
        index: Number(`${tasks.length}`),
        description: `${inputText.value}`,
        completed: false,
      };

      tasks.push(newItem);
      addToStorage(tasks);
      inputText.value = '';
      location.reload();
    }
  });
};

export default addTodoTextToBox;
/* eslint-enable no-unused-vars, no-restricted-globals */
