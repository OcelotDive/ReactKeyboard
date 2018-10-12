import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row4 extends Component {
	
	
	displayValue = (e) => {
	
		this.props.capsOnOff || this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
		
		handleShiftClick = () => {
		this.props.shiftClicked();
		console.log(this.props)
			
	}
	
	
	
	
	render() {
		
		let shiftHalfOnoff = this.props.shiftOnOff ? 'shiftHalfOn' : 'shiftHalf'
		let shiftFullOnoff = this.props.shiftOnOff ? 'shiftFullOn' : 'shiftFull'
		return (
			<div className="row4">
			<div className={shiftHalfOnoff} onClick={this.handleShiftClick}>
			 <br />
			shift 
			</div>
			<div className="mainKey" val="\" secval="|" onClick={this.displayValue}>
			|<br />
			\<br />
			</div>
			<div className="mainKey" val="z" secval="Z" onClick={this.displayValue}>
			Z<br/>
			 <br />	 	
			</div>
			<div className="mainKey" val="x" secval="X" onClick={this.displayValue}>
			X<br/>
			<br />
			</div>
			<div className="mainKey" val="c" secval="C" onClick={this.displayValue}>
			C<br/>
			<br />
			</div>
			<div className="mainKey" val="v" secval="V" onClick={this.displayValue}>
			V<br/>
			<br />
			</div>
			<div className="mainKey" val="b" secval="B" onClick={this.displayValue}>
			B<br/>
			<br />
			</div>
			<div className="mainKey" val="n" secval="N" onClick={this.displayValue}>
			N<br/>
			<br />
			</div>
			<div className="mainKey" val="m" secval="M" onClick={this.displayValue}>
			M<br/>
			<br />
			</div>
			<div className="mainKey" val="," secval="<" onClick={this.displayValue}>
			{'<'}<br/>
			 ,<br />
			</div>
			<div className="mainKey" val="." secval=">" onClick={this.displayValue}>
			{'>'}<br/>
			.
			</div>
			<div className="mainKey" val="/" secval="?" onClick={this.displayValue}>
			?<br/>
			/
			</div>
			<div className={shiftFullOnoff} onClick={this.handleShiftClick}>
			<br/>
			shift
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
		shiftClicked: () => {dispatch({type: 'SHIFTCLICKED'})},
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row4);