require('normalize.css/normalize.css');
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
})(imageDatas);

let ImgFigures = React.createClass({
   render() {
    return(
      <figure className="img-figure">
          <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
          <figcaption>
              <h2 className="img-title">{this.props.data.title}</h2>
          </figcaption>
      </figure>
    );
   }
});

let AppComponent = React.createClass({
   render() {
    let controllerUnits = [];
    let imgFigures = [];

   imageDatas.forEach(function(value) {
    imgFigures.push(<imgFigures data={value}/>);
   });

   return(
     <section className="stage">
        <section className="img-sec">
           {imgFigures}
        </section>
        <nav className="controller-nav">
           {controllerUnits}
        </nav>
     </section>
   );
  }
});

AppComponent.defaultProps = {};

export default AppComponent;
