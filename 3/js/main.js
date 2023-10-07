const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const name = ['Вера', 'Коля', 'Андрей', 'Иван', 'Дима', 'Ольга', 'Максим', 'Олег', 'Ярополк'];

const description = [
  'Мои выходные',
  'На прогулке с собакой',
  'Это был худший день в моей жизни!',
  'Сегодня радую вас красивой фотографией',
  'Настроение пообщаться в комментариях',
  'Просто фоточки)'
];


const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function createRandom(min, max) {
  const number = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    while (number.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    number.push(currentValue);
    return currentValue;
  };
}

const generate = createRandom(1, 25);

const createComment = () => ({
  id: generate(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}svg`,
  message: messages[getRandomNumber(0, messages.length-1)],
  name: name[getRandomNumber(0, name.length - 1)]
});

const createPhoto = () => ({
  id: generate(),
  url: `photos/${generate()}.jpg`,
  description: description[getRandomNumber(0, description.length - 1)],
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(0, 30)}, createComment)
});

const getPhoto = () => {
  const photo = Array.from({length: 25}, createPhoto);
  return photo;
};

getPhoto();
