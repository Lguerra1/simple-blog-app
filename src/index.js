import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = function () {
    const getTime = function () {
        return (new Date()).toLocaleTimeString()
    }


    return (
        <div className="ui container comments">
            <ApprovalCard>
              <div>
                  <h2>Hello</h2>
              </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    comment="Odoyle Rules!!"
                    time={getTime()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    comment="Nope"
                    time={getTime()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="James"
                    comment="So childish..."
                    time={getTime()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />
    , document.querySelector('#root'));


