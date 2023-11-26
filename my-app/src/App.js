import React from 'react'

// function App() {
//   return <div>
//     <h1>hello world "h1"</h1>
//     hello world "empty"
//     <p>hello world "p"</p>
//     </div>
// }

// export default App;


// function App() {
//   return <div class='eee'>
//     text
//   </div>;
// }
// export default App;


// function App(){
//   return <div>
//     hello world

//     hello world
//   </div>
// }
// export default App;

// function App(){
//   const elem = <div>Hello world1</div>;
//   const elem3 = <div>Hello world3</div>;
//   const elem2 = (<div>Hello world2</div>);
//   return elem, elem2, elem3
// }
// export default App;

// function App(){
//   return <div>
//     <h1>Hello world</h1>
//     <p class='classe_one'></p>
//     <p class='class_two'></p>
//     hello world
//   </div>
// }
// export default App;

// function App(){
//   return <ul>
//     Определение неупорядоченного (маркированного списка) - ul
//     <li>Элемент списка 1 li</li>
//     <li>Элемент списка 2 li</li>
//     <li>Элемент списка 3 li</li>
//     <li>Элемент списка 4 li</li>
//     <li>Элемент списка 5 li</li>
//     <li>Элемент списка 6 li</li>
//     <li>Элемент списка 7 li</li>
//     <li>Элемент списка 8 li</li>
//     <li>Элемент списка 9 li</li>
//     <li>Элемент списка 10 li</li>
//   </ul>
// }
// export default App;

// function App(){
//   return (
//     <ul>
//     root ul:
//       <li>ul 1</li>
//       <li>ul 2</li>
//       <li>ul 3</li>
//       <li>ul 4</li>
//     </ul>
//   );
// }
// export default App;

// function App(){
//   return (
//     <dev>
//     <p>Main "dev" tag</p>
//       <dev>
//         <p>p1  dev1</p>
//         <p>p2 dev1</p>
//       </dev>
//       <dev>
//         <p>p1 dev2</p>
//         <p>p2 dev2</p>
//       </dev>
//     </dev>
//   );
// }
// export default App;

// function App(){
//   return (
//     <>
//     <p>Main empty tag</p>
//       <div>
//         <p>p1 dev1</p>
//         <p>p1 dev1</p>
//       </div>
//       <div>
//         <p>p1 dev2</p>
//         <p>p2 dev2</p>
//       </div>
//     </>
//   );
// }
// export default App;


// ####################################################### Realization task for correct output
//################### 1 realization
// function App(){
//   return <dev>
//     <dev>
//       <ul>
//         <li>li 1</li>
//         <li>li 2</li>
//       </ul>
//       <ul>
//         <li>li 1</li>
//         <li>li 1</li>
//       </ul>
//     </dev>
//   </dev>
// }
// export default App;
//################### 2 realization
//
// function App(){
//   return (
//     <>
//       <ul>
//         <li>li1</li>
//         <li>li1</li>
//       </ul>
//       <ul>
//         <li>li1</li>
//         <li>li1</li>
//       </ul>
//     </>
//   );
// }
// export default App;
//################### 3 realization
// function App(){
//   return (
//     <>
//       <ul>
//       <li>li1</li>
//       <li>li2</li>        
//       </ul>
//       <ul>
//         <li>li1</li>
//         <li>li2</li>
//       </ul>
//     </>
//   );
// }
// export default App;
//################### 4 realization
// function App(){
//   return <>
//       <ul>
//         <li>p1</li>
//         <li>p2</li>
//       </ul>
//       <ul>
//         <li>p1</li>
//         <li>p2</li>
//       </ul>  
//   </>   
// }
// export default App;
// // ####################################################### Realization task for correct outpu

function App(){
  return <input />;
}
export default App;