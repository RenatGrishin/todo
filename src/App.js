import './App.css';
import CardContainer from "./pages/cardContainer";
import AddCardContainer from "./pages/addCardContainer";

function App(props) {
  return (
    <div>
      <div className={"main_board"}>
        <div className={"board_execute"}><CardContainer boardNum={0} /><AddCardContainer/></div>
        <div className={"board_doing"}><CardContainer boardNum={1} /></div>
        <div className={"board_completed"}><CardContainer boardNum={2} /></div>
      </div>
    </div>
  );
}

export default App;
