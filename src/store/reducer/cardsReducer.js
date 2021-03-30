import {ADD_CARD, DELETE_CARD} from "../action/cardsAction";
let initialState = [
	{id: 1, text: "Создать todo приложение"},
	{id: 2, text: "Использовать в приложении Redux"},
	{id: 3, text: "Узнать рецепт скумы"},
	{id: 4, text: "Не мочить водой кота и не кормить после полуночи!"},
	{id: 5, text: "Тут могла быть ваша задача"}
];

function cardsTodo (state=initialState, action){
	switch (action.type) {
		case(ADD_CARD):
			return state;
		case(DELETE_CARD):
			console.log(state);
			let copyState = state.map(key => {
				if(key.id !== action.id) return key;
			});
			console.log(copyState);
			return  copyState;

		default: return state;
	}
}export default cardsTodo;