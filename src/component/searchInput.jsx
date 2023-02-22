import React, { Component } from 'react'



class SearchInput extends Component {
    state={
        entry: ''
    }

    
    inSubmit=(event)=> {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.inSubmit} className="ui form">
            <div className="field">
                <div className="input_div">
                    <input type="text" placeholder='Search for movie...' onChange={(event)=>this.setState({entry: event.target.value})}
                    value={this.state.entry}/>
                    <select onChange={ (event) => this.props.onSelectChange(event.target.value)} name="movie_filter" className="movie_filter" id="">
                      <option value="">select genre</option>
                      {this.props.genres.map( (data,idx) => {
                        return (
                        <option value={data.name}>{data.name}</option>
                        )
                      }

                      )}
                    </select>
                </div>
                {/* <span className='mdi mdi-search-web mdi-24px'></span> */}
            </div>
        </form>
      </div>
    )
  }
};

export default SearchInput;
