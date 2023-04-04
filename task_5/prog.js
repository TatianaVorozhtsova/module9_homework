// Ищем div для вставки результата запроса
const resultNode = document.querySelector('.result');

//Находим кнопку, которую надо нажать для выполнения запроса
  const btnNode = document.querySelector('.btn');

// функция 
const showResultRequest = function(data) {
        let cards = '';
            data.forEach(item => {
              const cardBlock = `
              <div class="card">
              <img src="${item.download_url}" class="card-image" width=50% />
              <p>${item.author}</p>
              </div>
              `;
            cards = cards + cardBlock;
            });  ///// for each
  resultNode.innerHTML = cards;
  };  //// function


// Берём данные из localStorage
let string = localStorage.getItem('myKey');
if(string != ''){
  showResultRequest(JSON.parse(string))
}
              
// Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {  
    //Получение значений, введённых в инпут, ширина и высота
   const page = document.querySelector('.inp1').value;
   const limit = document.querySelector('.inp2').value;
    
    if ((isNaN(page) || page < 1 || page > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
      resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
      return;
    }
    if (isNaN(page) || page < 1 || page > 10) {
      resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
      return;
    } 
    if (isNaN(limit) || limit < 1 || limit > 10) {
      resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
      return;
    }
     else {     
       // Делаем запрос данных
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)   
       //Читаем данные:
          .then((response) => {                          
          // Объект ответа на запрос превращаем объект в JSON.
          const result = response.json();
          //console.log('result', result);
          return result;
          })
        .then((data) => {
          showResultRequest(data)
         localStorage.setItem('myKey', JSON.stringify(data));
          });  ////// then
       }    //// else
   });   ////обработчик