const deleteOne = (tasks) => {
  const trashIcon = document.querySelectorAll('.fa-trash-alt');

  trashIcon.forEach((icon) => icon.addEventListener('click', () => {
    const id = icon.parentNode.id;

    tasks.splice(id, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }

    localStorage.setItem('items', JSON.stringify(tasks));
    location.reload();
  }));
};

export default deleteOne