import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

class Specialty extends Component {


    render() {
        return (
            <div>specialty</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => { //tác dụng hàm này là để truyền đc kiểu this.props
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
