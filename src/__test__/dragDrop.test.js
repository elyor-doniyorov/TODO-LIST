import dragDrop from '../__mocks__/mockDragDrop.js';
import localStorageMock  from '../__mocks__/mockLocalStorage.js';
import { expect } from '@jest/globals';

describe('dragDrop', () => {
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
          completed: true,
        },
        {
          index: 4,
          description: 'Task 4',
          completed: false,
        },
      ];

      test('it checks if index are being changed', () => {
          expect(dragDrop(tasks,0,3)[3].description).toBe('Task 1');
          expect(dragDrop(tasks,1,2)[2].description).toBe('Task 2');
      })

     test('check if localstorage is updating the index', () => {
         expect(localStorageMock.getItem('data')[0].description).toBe('Task 4');
         expect(localStorageMock.getItem('data')[1].description).toBe('Task 3');
     })
})

