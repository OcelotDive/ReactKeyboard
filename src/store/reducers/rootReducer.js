const initState = {
	capsOnOff: false,
	shiftOnOff: false,
	textString: ''
	
	
}


const rootReducer = (state = initState, action) => {

	switch(action.type) {
		case 'CAPSCLICKED':
			return {
				capsOnOff: !state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				textString: state.textString
			}
			break;
		case 'SHIFTCLICKED':
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: !state.shiftOnOff,
				textString: state.textString
			}
			break;
		case 'TYPEADD':
			state.textString += action.value;
			state.shiftOnOff = false;
			return {
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				textString: state.textString
			}
			break;
		case 'DELETE':
			let str = state.textString;
			str = str.substring(0, str.length - 1);
			return {
				
				capsOnOff: state.capsOnOff,
				shiftOnOff: state.shiftOnOff,
				textString: str
			}
			break;
	}
    

    
	return state;
}

export default rootReducer;