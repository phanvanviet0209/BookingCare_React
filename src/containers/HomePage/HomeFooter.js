import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2023 Booking Care Online. More Infomation, please visit my facebook office.<a target='_blank' href='https://www.facebook.com/profile.php?id=100063100556943'> Click here</a></p>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
