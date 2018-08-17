import _ from 'lodash';
import React, { Component } from 'react';
import Button from '../components/buttonComponent';
import Image from '../components/imageComponent';
import FormInput from '../components/formInput';
import Select from '../components/selectComponent';
import Shapes from '../components/shapesComponent';
import {
  SHAPES, historySwitch, TABS,
  DOWNLOAD, UPLOAD, UNDO, REDO,
} from '../metaComponents';

class DrawImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shape: 'circle',
      color: ['#e61610'],
      changingColor: '#e61610',
      poped: [],
      tab: 1,
    };
  }

  updateColor(label) {
    switch(label) {
      case 'Undo':
      const COLOR = this.state.color;
      const COLOR_LEN = COLOR.length;
        if(COLOR_LEN > 1) {
          const POPED = this.state.color.pop();
          this.state.poped.push(POPED);
          this.setState({ changingColor: COLOR[COLOR_LEN -1] })
        }
        break;
      case 'Redo':
        const UNDO_DATA = this.state.poped;
        const LEN = this.state.poped.length - 1;
        if(LEN > -1) {
          const LAST_UNDO = UNDO_DATA[LEN];
          this.state.poped.pop();
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
      <ul className="pad_15_5">
        {historySwitch.map((data, id) => (
          <li key={id} className="pointer boxBtn" onClick={() => this.updateColor(data.label)}>
            <Image src={data.img} />
            <span>{data.label}</span>
          </li>
        ))}
      </ul>
    )
  }

  shape(classname, color, child, id) {
    return(
      <Shapes
        classname={classname}
        color={color}
        key={id}
      >
        <span>{child}</span>
      </Shapes>
    )
  }

  lastUsedColors() {
    return (
      <ul className="pdlt_28">
        {this.state.color.map((data, i) => (
          (i < 3) ? this.shape('square lastUsed flt_lt', data, '', i) : null
        ))}
      </ul>
    )
  }

  tabData() {
    const COLOR = this.state.color;
    const ACTIVE_COLOR = COLOR.length - 1;
    const ACTIVE = COLOR[ACTIVE_COLOR];
    return (
      <ul className="projectWrap" id="pdfContent">
        <li className="flt_lt wd_50">
          <Select
            options={SHAPES}
            defaultVal="circle"
            onChange={(e) => this.setState({ shape: e.target.value })}
          />
          <FormInput
            label="Color Code:"
            value={this.state.changingColor}
            wrapClass="inputWrap"
            onChange={(e) => this.setState({changingColor: e})}
          />
          <Button
            label="Update Color"
            onClick={() => this.updateColor()}
            className="pointer"
            />
          {this.historyButton()}
        </li>
        <li className="flt_lt wd_50">
          {this.shape(`${this.state.shape} center`, ACTIVE, ACTIVE)}
          {this.lastUsedColors()}
        </li>
      </ul>
    )
  }

  download() {
    const CANVAS = document.getElementById('pdfContent');
  }

  upload() {

  }

  downloadUpload(label, img, onClick) {
    return(
      <div onClick={() => onClick()}>
        <Image src={img} />
        <span>{label}</span>
      </div>
    )
  }

  tabs() {
    return(
      <ul className="flt_lt mgtp_30">
        {TABS.map(data => (
          <li
            key={data}
            className={`tab ${(data === this.state.tab) && 'active'}`}
            onClick={() => this.setState({ tab: data })}
          >
            Project {data}
          </li>
        ))}
      </ul>
    )
  }

  displayContent() {
    switch (this.state.tab) {
      case 1:
        return this.tabData();
      case 1:
        return this.tabData();
      case 1:
        return this.tabData();
      default:
        return this.tabData();
    }
  }

  render() {
    return (
      <div className='pad_15 bg_gray'>
        <div className='pad_5 bg_white'>
          <div>
            <h3>Project {this.state.tab}</h3>
            {this.displayContent()}
            <div>
              {this.tabs()}
              <div className="flt_lt mglt_20">
                {this.downloadUpload('Load Project', UPLOAD, () => this.upload())}
                {this.downloadUpload("Save Project", DOWNLOAD, () => this.download())}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawImage;
