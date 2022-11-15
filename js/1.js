// 1. Дан массив [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6](может быть любым числовым)
var arr_1 = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
console.log(arr_1);

// - Удалить все повторяющиеся элементы из массива, используя Set
const num = new Set(arr_1);
// - Вывести новый массив без повторяющихся элементов в консоль
console.log(num);
// - Использовать Array.from
console.log(Array.from(Set));

// 2. Есть строка “abracadabra”
var string = "abracadabra";
// - поместить каждый символ в элемент нового массива(создать массив)
var arr_letter = Array.from("abracadabra");
// - Вывести результат в консолм
console.log(arr_letter);

// 3. Дан массив ['spaghetti','pizza', 'risotto', ‘lasagna’];
const arr_dishes = ["spaghetti", "pizza", "risotto", "lasagna"];
// - Добавить посередине элемент ‘carbonara’ и вывести в консоль (console.log) результат
const new_dish = arr_dishes.splice(2, 0, "carbonara");
console.log(arr_dishes);

//4 Есть массив ['apple pie', ‘texas barbecue’, ‘tacos’, ‘hot dogs’]
let myArray = ["apple pie", "texas barbecue", "tacos", "hot dogs"];
let del = myArray.splice(1, 3);

// - Сделать из него новый массив
// ['apple pie', ‘fish’, ‘chips’, ‘churros’, ‘bbq ribs’, ‘meatloaf’, ‘hot dogs’, ‘hamburger’ ]
myArray.push(
  "fish",
  "chips",
  "churros",
  "bbq ribs",
  "meatloaf",
  "hot dogs",
  "hamburger"
);
console.log(myArray);
// - Вывести в консоль все удаленные элементы (!Одним массивом)
console.log(del);

// 5. Дана строка “ННе ттттолльккккко лишшшшььььь всссссе могуттттт сделллллать этттто”
// - Удалить из строки все все повторяющиеся символы
// - Объединить все символы в строку чтобы получилось: “Н е т о л ь к и ш в с м г у д а э”
// - Вывести результат в консоль

// 6 Дана строка “Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню”
var string_2 = "Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню";

// - Заменить подстроку 'Мама' строкой ‘Маша’ метод replace
console.log(string_2.replace("Мама", "Маша"));
// - Заменить Все вхождения подстроки ‘мыла’ на строку ‘ела’,
console.log(string_2.replaceAll("мыла", "ела"));
// - Заменить Все вхождения подстроки ‘мыло’ на строку ‘кошку’
console.log(string_2.replaceAll("мыло", "кошку"));
// - Вывести результат в консоль

// 7. Создать переменную person и поместить туда объект
// {
// name: "Igor",
// children: ['Maxim', 'Ira']
// }
var person = {
  name: "Igor",
  children: ["Maxim", "Ira"],
};
// - Вывести в консоль person.children
console.log(person.children);
// - Новой переменной individ присвоить значение первой переменной
// - Изменить свойство children у переменной individ
// напрмер: individ.children = ['Egor', 'Nastya']
individ.children = ["Egor", "Nastya"];
// - Снова вывести в консоль person.children
console.log(person.children);
// - Задуматься - что произошло? (разберем в будущем подробнее ссылочные типы)
