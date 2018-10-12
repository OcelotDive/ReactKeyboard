import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
class Keyboard extends Component {
	
	
	render() {
			let capOnoff = this.props.capsOnOff ? 'capsLight1On' : 'capsLight1'
		
		return (
		 <div className="keyboard">
			<hr/>
			<hr/>
			<h7>FILCO</h7>
			<div className={capOnoff} id="capsLight1"></div>
			<div className="capsLight2" id="capsLight2"></div>
			<Row1 />
			<Row2 />
			<Row3 />
			<Row4 />
			<Row5 />
			<hr/>
		 </div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        submitSearch: (combinedArray) => {dispatch({type: 'SUBMITSEARCH', combinedArray: combinedArray})}
	
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);