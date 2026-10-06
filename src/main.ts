const tasks = [
  () => import("./task-1"),
  () => import("./task-2"),
  () => import("./task-3"),
  () => import("./task-4"),
  () => import("./task-5"),
  () => import("./task-6"),
  () => import("./task-7"),
  () => import("./task-8"),
];

const delay = (ms: number): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

for (const [index, loadTask] of tasks.entries()) {
  const taskNumber = index + 1;
  console.log(
    `%c===== Завдання ${taskNumber} =====`,
    "color: #646cff; font-weight: bold",
  );
  await loadTask();

  // Проміс у task-7 виконується через 1 с — чекаємо, щоб його вивід
  // з'явився під своїм заголовком, а не під заголовком завдання 8.
  if (taskNumber === 7) {
    await delay(1100);
  }
}
