import logo from './logo.svg';
import './App.css';
let stu = {
  name: 'nam',
  age: "34",
  point: "9"
}
function App() {
  return (
    <div className="App">
      <h1>Chào mứnginh viên: {stu.name}</h1>
      <h1>tuoior: {stu.age}</h1>
      <h1>Chào mứnginh viên: {stu.name}</h1>
    </div>
  );
}

export default App;
