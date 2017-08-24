/**
 * Created by MEHMET on 23.8.2017.
 */
import  React, {Component} from 'react';
//Class Based component ...  you can use state
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;