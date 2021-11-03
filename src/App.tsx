import Button from "./components/Button";
function App() {
  return (
    <div className="App container">
      <Button>按钮文字</Button>
      <Button btnType="primary">主要按钮</Button>
      <Button btnType="secondary">主要按钮</Button>
      <Button size="lg">大号按钮</Button>
      <Button size="sm">小号按钮</Button>
      {/* <Button disabled>禁用按钮</Button>
      <Button btnType="link" href="www.baidu.com">
        Link按钮
      </Button> */}
    </div>
  );
}

export default App;
