import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Image from '../components/imageComponent';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.randomNO = [];
  }

  componentWillMount() {
    this.props.dispatch({ type: 'PHOTOS' });
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.photos) {
      const SELF = this;
      const ARRAY = _.times(10, String);
      this.randomNO = [];
      _.each(ARRAY, function () {
        (SELF.randomNO).push(_.random(0, (nextprops.photos.length - 1)));
      });
    }
  }

  mapGallery(images) {
    const NUMBER = this.randomNO;
    return images.map((image, id) => (
      (NUMBER.indexOf(id) > -1) ?
        <Image
          key={image.id}
          src={image.url}
          alt={image.title}
          className="galleryImg"
        /> : null
    ))
  }

  gallery() {
    const PICS = this.props.photos;
    return PICS ? this.mapGallery(PICS) : null;
  }

  render() {
    return (
      <div className="pad_5">
        {this.gallery()}
        <Link to="/drawImage"> Draw Image</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.pics,
});

export default connect(mapStateToProps)(Gallery);
