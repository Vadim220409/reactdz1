import React from 'react';
import "./App.css";


// Домашнє завдання

// function App() {
//   const name = "Vadim";
//   const text = "Ласкаво просимо до нашого сайту!";
//   const favoriteSite = { url: "https://www.google.com" };
//   const number1 = 8;
//   const number2 = 10;
//   const sum = number1 + number2;
//   const colors = ["Червоний", "Синій", "Зелений"];
//   const imgSrc = "https://via.placeholder.com/150";
//   const imgAlt = "Placeholder Image"; 

//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{text}</p>
//       <img src={imgSrc} alt={imgAlt} />
//       <p>Мій улюблений сайт: <a href={favoriteSite.url}>Google</a></p>
//       <p>Сума чисел {number1} і {number2} дорівнює {sum}</p>
//       <ul>
//         {colors.map((color, index) => (
//           <li key={index}>{color}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// додаткові завдання

// function  Dz(temperature) {
//   return (
//     <div>
//       <h1>Вітаю на моїй сторінці</h1>
//       <p>Це перший параграф мого документа</p>
//       <img src='https://static.vecteezy.com/system/resources/thumbnails/025/181/412/small/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg'></img>
//       <ul>
//         <li>Фіолетовий</li>
//         <li>Зелений</li>
//         <li>Білий</li>
//       </ul>
//       <a href='https://www.google.com'>Перейти</a>
//       <div>
//         {temperature > 20 ? 'На вулиці тепло' : 'На вулиці холодно'}
//       </div>
//     </div>
//   )
// }

// export default Dz

// творчі завдання

function App() {
  const textForButton = 'Натисни мене'
  const firstName = 'Петро'
  const lastName = 'Петренко'
  const num1 = 14
  const num2 = 8
  const sum = num1 + num2
  const users = [
    {
      name: "Вадим",
      age: 15
    },
    {
      name: "Артем",
      age: 15
    },
    {
      name: "Богдан",
      age: 15
    }
  ]


  return (
    <div>
      <button>{textForButton}</button>
      <p>Привіт, {firstName} {lastName}!</p>
      <p>Сума чисел {num1} і {num2} є <span>{sum}</span></p>
      <ul>
        {users.map((user, index) => {
          <li key={index}>Ім'я: {user.name}, Вік:{user.age}</li>
        })}
      </ul>
    </div>
  )
}

export default App