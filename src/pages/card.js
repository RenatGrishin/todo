import React from "react";
import '../App.css';


//Преобразовать в классовую компоненту.
function updateText(event) {
	console.log(event);
}

function Card(props) {
	console.log(props)
	return<div className={"card_todo"}>
		{props.cardInfo.edit
			? <input onBlur={()=>{props.statusInput(props.cardInfo.id)}}
			         type={"text"}
			         onChange={(e)=>{props.editCard(e.target.value, props.cardInfo.id)}}
			         value={props.cardInfo.text}
			         autoFocus={true}/>
			: <p onClick={()=>{props.statusInput(props.cardInfo.id)}} >{props.cardInfo.text}</p> }
		<div className={"submit_place"}>
			<input type={"submit"} onClick={()=>{console.log("Сделать")}} value={"Сделать"} />
			<input type={"submit"} onClick={()=>{console.log("Выполняю")}} value={"Выполняю"} />
			<input type={"submit"} onClick={()=>{console.log("Готово")}} value={"Готово"} />
			<input type={"submit"} onClick={()=>{props.deleteCard(props.cardInfo.id)}} value={"X"} />
		</div>
	</div>
}

export default Card;