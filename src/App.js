import './App.css';
import CardContainer from "./pages/cardContainer";
import AddCardContainer from "./pages/addCardContainer";

function App(props) {
  return (
    <div className={"main_page"}>
      <div className={"main_board"}>
        <div className={"board_execute"}><h1>Сделать</h1><CardContainer boardNum={0} /><AddCardContainer/></div>
        <div className={"board_doing"}><h1>Выполняются</h1><CardContainer boardNum={1} /></div>
        <div className={"board_completed"}><h1>Готовые</h1><CardContainer boardNum={2} /></div>
      </div>
    </div>
  );
}

export default App;
