import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Button from '../components/buttonComponent';
import Image from '../components/imageComponent';
import FormInput from '../components/formInput';
import Select from '../components/selectComponent';
import { SHAPES, historySwitch } from '../metaComponents';

class DrawImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shape: 'circle',
      color: ['#e61610'],
      changingColor: '#e61610',
      poped: [],
    };
  }

  updateColor(label) {
    switch(label) {
      case 'Undo':
      const COLOR = this.state.color;
      const COLOR_LEN = COLOR.length;
        if(COLOR_LEN > 1) {
          const POPED = this.state.color.pop(this.state.changingColor);
          this.state.poped.push(POPED);
          this.setState({ changingColor: COLOR[COLOR_LEN -1] })
        }
        break;
      case 'Redo':
        const UNDO_DATA = this.state.poped;
        const LEN = this.state.poped.length - 1;
        if(LEN > -1) {
          const LAST_UNDO = UNDO_DATA[LEN];
          this.state.color.push(LAST_UNDO);
        }
        break;
      default:
        this.state.color.push(this.state.changingColor);
    }
    this.setState({ color: this.state.color })
  }

  historyButton() {
    return(
      historySwitch.map((data, id) => (
        <div key={id} className="pointer" onClick={() => this.updateColor(data.label)}>
          <span>{data.label}</span>
        </div>
      ))
    )
  }

  render() {
    const COLOR = this.state.color;
    const ACTIVE_COLOR = COLOR.length - 1;
    const ACTIVE = COLOR[ACTIVE_COLOR];
    return (
      <div className="pad_5">
        <div className="col-md-2">
          <Select options={SHAPES} defaultVal="circle" />
          <FormInput
            label="Color Code:"
            value={this.state.changingColor}
            onChange={(e) => this.setState({changingColor: e})}
          />
          <Button
            label="Update Color"
            onClick={() => this.updateColor()}
            className="pointer"
            />
          {this.historyButton()}
        </div>
        <div>
          <div
            className={`${this.state.shape} center`}
            style={{backgroundColor: ACTIVE}} >
            <span>{ACTIVE}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(DrawImage);
