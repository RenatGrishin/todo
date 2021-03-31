import {ADD_CARD, DELETE_CARD, EDIT_CARD, STATUS_INPUT} from "../action/cardsAction";
let initialState = [
	{id: 1, text: "Создать todo приложение", edit:false},
	{id: 2, text: "Использовать в приложении Redux", edit:false},
	{id: 3, text: "Узнать рецепт скумы", edit:false},
	{id: 4, text: "Не мочить водой кота и не кормить после полуночи!", edit:false},
	{id: 5, text: "Тут могла быть ваша задача", edit:false}
];

function cardsTodo (state=initialState, action){
	let copyState = undefined;
	let elementIndex;
	let element;
	switch (action.type) {
		case ADD_CARD:
			return state;
		case DELETE_CARD:
			return  state.filter(key => key.id !== action.id);
		case EDIT_CARD:
			copyState = [...state];
			console.log(copyState)
			elementIndex = copyState.findIndex(key => key.id === action.id);
			element = copyState[elementIndex];
			element.text = action.text;
			copyState[elementIndex] = element;
			return copyState;
		case STATUS_INPUT:
			copyState = [...state];
			elementIndex = copyState.findIndex(key => key.id === action.id);
			element = copyState[elementIndex];
			element.edit = !element.edit;
			console.log(copyState);
			return copyState;

		default: return state;
	}
}export default cardsTodo;