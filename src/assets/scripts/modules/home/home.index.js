import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addMessage, removeMessage } from './home.actions';
//import { bindActionCreators } from 'redux';
import HelloWorld from '../common/components/helloworld';
import List from '../common/components/list';
import _ from 'lodash';

class Home extends React.Component {

  constructor ( props ) {
    super ( props );
    this.state = {
      submitted: false,
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillMount () {
    //debugger;
  }

  handleChange ( e ) {
    this.setState({ userInput: e.target.value });
  }

  emptyInput () {
    return this.state.userInput != '';
  }

  wasSubmitted () {
    return this.state.submitted;
  }

  buttonClick ( e ) {
    const username = 'Shelton';
    if ( _.has(e,'keyCode') && e.keyCode == 13 || e.type == 'click' ) {
      if ( this.emptyInput() ) {
        this.props.add( this._input.value );
        this.setState({
          userInput: ''
        }, () => {
          this._input.focus();   // Boom! Focused!
        })
      } else { alert(`no go my man ${username}!`); }
    }
  }

  removeItem ( idx ) {
    console.log('i ran a remove', idx);
    this.props.remove( idx );
  }
 
  render () {
    return(
      <div className="row">
        <div className="col-md-4"> 
          <HelloWorld />
          <h3>Greetings to all the world!</h3>
          <Link to="/about">About Us</Link>
          <div className="row">
            <div className="col-xs-9">
              <input className="form-control" type="text" ref={(el) => this._input = el} onKeyDown={this.buttonClick} value={this.state.userInput}
            onChange={this.handleChange} />
            </div>
            <div className="col-xs-3">
              <button className="btn btn-primary" onClick={this.buttonClick}>Add</button>
            </div>
          </div>
          <List messages={this.props.messages} onListItemClick={this.removeItem} />
        </div>
      </div>
    );
  }

};

Home.propTypes = {
  messages: React.PropTypes.array.isRequired,
  add: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired
};

const mapStateToProps = ( state ) => {
  console.log( 'tell me about the state now: ', state.home );
  return {
    messages: state.home.messages
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    add: message => dispatch( addMessage( message ) ),
    remove: id => dispatch ( removeMessage ( id ) )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Home );
