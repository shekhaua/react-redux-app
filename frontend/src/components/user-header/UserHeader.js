import React  from 'react';
import {connect} from 'react-redux';

const UserHeader = (props) => {
  return (<h5 className="font-normal mb-1">{props.userName}</h5>);
};

function mapStateToProps(state, ownProps) {
    const {userId} = ownProps;
    const user = state.users.find((user) => {
      return user.id === userId;
    });

    return {
      userName: (user && user.name) || ''
    };
}

export default connect(mapStateToProps)(UserHeader);
