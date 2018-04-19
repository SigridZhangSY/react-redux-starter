import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/counterAction'

const mapStateToProps = (state) => ({
  counterValue: state.counter.counterValue
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounterValue: () => dispatch(increase()),
  decreaseCounterValue: () => dispatch(decrease())
})

class Counter extends Component {
  render() {
    const { counterValue, increaseCounterValue, decreaseCounterValue} = this.props

    return (
      <div>
        <h4>Value: {counterValue} </h4>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '250px'}}>
          <button
            style={{width: '100px', height: '40px', borderRadius: '10px', background: '#bdbcbc'}}
            onClick={() => increaseCounterValue()}>+
          </button>
          <button
            style={{width: '100px', height: '40px', borderRadius: '10px', background: '#bdbcbc'}}
            onClick={() => decreaseCounterValue()}>-
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);