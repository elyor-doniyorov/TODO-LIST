import localStorageMock from '../__mocks__/mockLocalStorage.js';
import editTodo from '../__mocks__/mockEditTask.js';

describe('editTodo', () => {
  const tasks = [
    {
      index: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Task 2',
      completed: true,
    },
    {
      index: 3,
      description: 'Task 3',
      completed: false,
    },
  ];

  test('It should check if a task is editable', () => {
    expect(editTodo(tasks, 2, 'Okay')).toEqual([
      { completed: false, description: 'Task 1', index: 1 },
      { completed: true, description: 'Task 2', index: 2 },
      { completed: false, description: 'Okay', index: 3 },
    ]);
  });

  test('Local storage should update after edit', () => {
    expect(localStorageMock.getItem('data')[2].description).toBe('Okay');
  });
});
