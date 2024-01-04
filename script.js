    // Отображение текущего времени в навигационном меню
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
        document.getElementById('current-time').textContent = timeString;
      }
      
      updateTime();
      setInterval(updateTime, 60000); // Обновление времени каждую минуту



// Счетчики лайков
const likeCounters = {};

// Функция для обработки лайков
function like(photoId) {
  if (!likeCounters[photoId]) {
    likeCounters[photoId] = 0;
  }

  likeCounters[photoId]++;
  updateLikes(photoId);
}

// Функция для обновления отображения лайков
function updateLikes(photoId) {
  const likesElement = document.getElementById(photoId).getElementsByClassName('likes')[0];
  likesElement.textContent = likeCounters[photoId] + ' Likes';
}

// Функция для добавления комментариев
function comment(photoId) {
  const commentInput = document.getElementById('commentInput' + photoId.slice(-1));
  const commentsList = document.getElementById('commentsList' + photoId.slice(-1));

  if (commentInput.value.trim() !== '') {
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentsList.appendChild(newComment);
    commentInput.value = '';
  }
}



// // Массив для хранения каналов
// var channels = [];

// // Функция для добавления канала
// function addChannel(channelName) {
//   var channelItem = document.createElement('li');
//   var channelLink = document.createElement('a');
//   channelLink.href = '#';
//   channelLink.textContent = channelName;
//   channelItem.appendChild(channelLink);
//   document.getElementById('channel-list').appendChild(channelItem);
//   channels.push(channelName);
//   saveChannels(); // Сохраняем каналы после добавления
// }

// // Функция для удаления канала
// function removeChannel(channelName) {
//   var channelItems = document.getElementById('channel-list').getElementsByTagName('li');
//   for (var i = 0; i < channelItems.length; i++) {
//     var link = channelItems[i].getElementsByTagName('a')[0];
//     if (link.textContent === channelName) {
//       channelItems[i].parentNode.removeChild(channelItems[i]);
//       channels.splice(i, 1);
//       saveChannels(); // Сохраняем каналы после удаления
//       break;
//     }
//   }
// }

// // Функция для сохранения каналов в локальном хранилище
// function saveChannels() {
//   localStorage.setItem('channels', JSON.stringify(channels));
// }

// // Функция для восстановления каналов из локального хранилища
// function restoreChannels() {
//   var savedChannels = localStorage.getItem('channels');
//   if (savedChannels) {
//     channels = JSON.parse(savedChannels);
//     for (var i = 0; i < channels.length; i++) {
//       addChannel(channels[i]);
//     }
//   }
// }

// // Обработчик клика на кнопку "Создать канал"
// document.getElementById('create-channel-btn').addEventListener('click', function() {
//   var channelName = prompt('Введите имя канала:');
//   if (channelName) {
//     addChannel(channelName);
//   }
// });

// // Пример добавления и удаления каналов при загрузке страницы
// restoreChannels(); // Восстанавливаем каналы после обновления страницы
// removeChannel('Канал 2');