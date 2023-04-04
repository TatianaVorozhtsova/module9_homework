//Функция-обёртка, внутри экземпляр запроса, инициализация запроса, 
//обработчик загрузки, обработчик ошибки и отправка запроса

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
        } 
        else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
     xhr.send();
    
  };
  
  // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.result');
  
  //Находим кнопку, которую надо нажать для выполнения запроса
  const btnNode = document.querySelector('.btn');
  
  
  //Функция обработки полученного результата
  //apiData - объект с результатом запроса
   
  function displayResult(apiData) {
    let cards = '';
      
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image" width=50%
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
  // Полученный и обработанный результат вставляем в html    
    resultNode.innerHTML = cards;
  }
  
  // Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {  
      //Получение значения, введённого в инпут, limit
      const value = document.querySelector('.inp').value;
      if (value < 1 || value > 10) {
        resultNode.innerHTML = "Число вне диапазона от 1 до 10!";
      } else {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
      }
    
  });
  