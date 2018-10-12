import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row3 extends Component {
	
	
	
	
		handleCapsClick = () => {
		this.props.capsClicked();
		console.log(this.props)
			
	}
	
	displayValue = (e) => {
	
		this.props.capsOnOff || this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
	
	
	render() {
		let capOnoff = this.props.capsOnOff ? 'doubleKeyandAbitOn' : 'doubleKeyandAbit'
		return (
			<div className="row3">
			<div className={capOnoff} onClick={this.handleCapsClick}>
			 <br />
			caps 
			</div>
			<div className="mainKey" val="a" secval="A" onClick={this.displayValue}>
			A<br />
			  <br />
			</div>
			<div className="mainKey" val="w" secval="W" onClick={this.displayValue}>
			W<br/>
			 <br />	 	
			</div>
			<div className="mainKey" val="s" secval="S" onClick={this.displayValue}>
			S<br/>
			<br />
			</div>
			<div className="mainKey" val="d" secval="D" onClick={this.displayValue}>
			D<br/>
			<br />
			</div>
			<div className="mainKey" val="f" secval="F" onClick={this.displayValue}>
			F<br/>
			<br />
			</div>
			<div className="mainKey" val="g" secval="G" onClick={this.displayValue}>
			G<br/>
			<br />
			</div>
			<div className="mainKey" val="h" secval="H" onClick={this.displayValue}>
			H<br/>
			<br />
			</div>
			<div className="mainKey" val="j" secval="J" onClick={this.displayValue}>
			J<br/>
			<br />
			</div>
			<div className="mainKey" val="k" secval="K" onClick={this.displayValue}>
			K<br/>
			<br />
			</div>
			<div className="mainKey" val=";" secval=":" onClick={this.displayValue}>
			:<br/>
			;
			</div>
			<div className="mainKey" val="'" secval="@" onClick={this.displayValue}>
			@<br/>
			'
			</div>
			<div className="mainKey specialKeyRule" val="#" secval="~" onClick={this.displayValue}>
			~<br/>
			{'#'}
			</div>
			
			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff,
		shiftOnOff: state.shiftOnOff
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        capsClicked: () => {dispatch({type: 'CAPSCLICKED'})},
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row3);