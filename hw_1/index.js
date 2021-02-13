const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];

  const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];
  
  const lodash = require('lodash')
/**
* task 1
Нужно найти и сохранить в переменную индекс пользователя в массиве data1, у которого возраст равен 23 года.
*/

let index = lodash.findIndex(data1,item => item.age === 23)

console.log(index);

/**
 * task 2
 * Объединить два массива data1 и data2 в один и записать этот результат в новую переменную ( ожидаемый результат тут - новый массив длиной 6 элементов)
 */

 let concatArr = lodash.concat(data1,data2)

 console.log(concatArr);

 /**
  * task 3
  * Взять любой объект из любого массива и на его основе создать новый объект, но выкинув из него поле “age”. Опять же нужно использовать функцию из библиотеки lodash. 
  */

  const obj2 = lodash.omit(lodash.create(Object.prototype, data1[1]),'age')

  console.log(obj2);
  /**
   * task 4
   * Суперзадание - как выполнить задачу 3 без библиотек, а только средствами javascript ? ( Иммутабельно, не используя delete )
   */

   function UserObject(obj) {
     for(key in obj) {
       if(key != 'age') {
        this[key] = obj[key]
       }
     }
   }

   let firstObject = new UserObject(data2[1])

   let {age, ...secondObject} = data2[1]//верное решение
 
   console.log(firstObject);
   console.log(secondObject);