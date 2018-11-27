import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = function () {
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" comment="Odoyle Rules!!" time={getTime()} />
            <CommentDetail author="Alex" comment="Nope" time={getTime()} />
            <CommentDetail author="James" comment="So childish..." time={getTime()} />
        </div>


    )
};

ReactDOM.render(<App />
    , document.querySelector('#root'));


