import "./App.css";

function App() {
  return (
    <div>
      <div>App</div>
    </div>
  );
}

export default App;

// redux 는 store로 컴포넌트 전역에 props를 내려주기는 하지만 모든 일이 동기적으로 처리가 되어있다.
// 이를 비동기적인 처리를 해 주기 위해 redux middle wear를 사용한다.
