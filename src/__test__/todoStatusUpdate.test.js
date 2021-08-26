import localStorageMock from '../__mocks__/mockLocalStorage.js';
import todoStatusUpdate from '../__mocks__/mockStatusUpdate.js';

describe('todoStatusUpdate', () => {
  const tasks = [
    {
      index: 1,
      completed: false,
    },
    {
      index: 2,
      completed: true,
    },
    {
      index: 3,
      completed: false,
    },
  ];

  test('should return false if task is completed', () => {
    expect(todoStatusUpdate(tasks, 0)).toEqual([
      { completed: true, index: 1 },
      { completed: true, index: 2 },
      { completed: false, index: 3 },
    ]);
    expect(todoStatusUpdate(tasks, 1)).toEqual([
      { completed: true, index: 1 },
      { completed: false, index: 2 },
      { completed: false, index: 3 },
    ]);
    expect(todoStatusUpdate(tasks, 2)).toEqual([
      { completed: true, index: 1 },
      { completed: false, index: 2 },
      { completed: true, index: 3 },
    ]);
  });

  test('localStorage should update after status change', () => {
    expect(localStorageMock.getItem('data')[0].completed).toBe(true);
  });
});
