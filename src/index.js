import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCUmk6xDSddw51wXbVLlCKcS10qG2p9hEI";

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
