require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/App.styl');

import React from 'react';
import ReactDOM from 'react-dom';

//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数,将图片名信息转化成图片URL路径信息
imageDatas = (function (imageDatasArr) {
	return imageDatasArr.map((item) => {
		item.imageUrl = require(`../images/${item.fileName}`);
		return item;
	})
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
         <section className="img-sec">
         </section>
         <nav className="controller-nav">
         </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
