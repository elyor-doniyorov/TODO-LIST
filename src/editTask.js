const edit = (tasks) => {
  const todoTextSpan = document.querySelectorAll('.text');

  todoTextSpan.forEach((span) => {
    span.contentEditable = true;
  });

  for (let i = 0; i < todoTextSpan.length; i += 1) {
    todoTextSpan[i].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        tasks[i].description = todoTextSpan[i].textContent;
        localStorage.setItem('items', JSON.stringify(tasks));
      }
    });
  }
};

export default edit;