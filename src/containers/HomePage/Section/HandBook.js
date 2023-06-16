import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import './HandBook.scss';
class HandBook extends Component {
    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook1' />
                                <div className='handbook-content'>Phòng khám Tai Mũi Họng uy tín tại quận Hai Bà Trưng</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook2' />
                                <div className='handbook-content'>Lưu ngay 5 địa chỉ khám Tai mũi họng tốt nhất!</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook3' />
                                <div className='handbook-content'>5 địa chỉ khám Nam khoa tin cậy</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook4' />
                                <div className='handbook-content'>Đi ngoài ra máu có nguy hiểm không?</div>
                            </div>

                        </Slider>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
