export const EDIT_POSITION = "EDIT_POSITION";

export function editPositionInBoard(position) {
	return{
		type: EDIT_POSITION,
		position: position
	}
}