function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Тип кожної змінної збігається з типом елементів переданого масиву.
// Якби функція повертала інший тип, TypeScript повідомив би про помилку.
const firstNumber: number = getFirstElement<number>([1, 2, 3]); // 1
const firstString: string = getFirstElement<string>(["a", "b", "c"]); // "a"
const firstBoolean: boolean = getFirstElement<boolean>([true, false, true]); // true

console.log(`First number: ${firstNumber} (${typeof firstNumber})`);
console.log(`First string: ${firstString} (${typeof firstString})`);
console.log(`First boolean: ${firstBoolean} (${typeof firstBoolean})`);

// Контрольна перевірка: TypeScript повідомляє про помилку
// Type 'string' is not assignable to type 'number'.
// getFirstElement<number>([1, 2, "3"]);
