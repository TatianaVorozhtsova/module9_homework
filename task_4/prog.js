// Ищем div для вставки результата запроса
const resultNode = document.querySelector('.result');

//Находим кнопку, которую надо нажать для выполнения запроса
  const btnNode = document.querySelector('.btn');

// Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {  
    //Получение значений, введённых в инпут, ширина и высота
   const valueOne = document.querySelector('.inp1').value;
   const valueTwo = document.querySelector('.inp2').value;
    
    if (isNaN(valueOne) || isNaN(valueTwo) || valueOne < 100 || valueOne > 300 || valueTwo < 100 || valueTwo > 300) {
      resultNode.innerHTML = "Одно из чисел вне диапазона от 100 до 300!";
    }      
     else {     
        fetch(`https://picsum.photos/${valueOne}/${valueTwo}`)   // Делаем запрос данных
          .then((response) => {                          //Что делать с данными
            urlImg = response.url
            let image = ''
            const card = `
                <div class="card">
                <img
                src="${urlImg}"
                class="card-image"
               />`;
                image += card
            resultNode.innerHTML = image; 
        });
     }
  });