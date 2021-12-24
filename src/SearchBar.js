import React from 'react';

class SearchBar extends React.Component {

    state = {
        term : ''
    }

    onInputChange = (event) =>{
        this.setState ({term:event.target.value})
        // console.log(event.target.value);
    }

    onFormSubmit = (e) =>{
        e.preventDefault();

        // TODO : make sure we call callback fromparent component
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                  <form onSubmit = {this.onFormSubmit} className="ui form">
                         <div className="field">
                               <label>Nikhil Youtube</label>
                               <input
                                   onChange = {this.onInputChange} 
                                   value = {this.state.term} 
                                   type="text" />
                         </div>
                  </form>
            </div>
        )
    }
}

export default SearchBar;