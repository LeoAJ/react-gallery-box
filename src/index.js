// @flow
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import clx from 'classnames';
import './style.css';

type Props = {
  visibleImageIndex: number,
  images: Array<string>,
  delay: number,
  containerClassnName: ?string,
  itemClassnName: ?string
};

type State = { visibleImageIndex: number };

class ReactGalleryBox extends PureComponent<Props, State> {
  
  static propTypes = {
    visibleImageIndex: PropTypes.number,
    images: PropTypes.array,
    delay: PropTypes.number,
    containerClassnName: PropTypes.string,
    itemClassnName: PropTypes.string
  };

  static defaultProps = {
    visibleImageIndex: 0,
    images: [],
    delay: 1000
  };

  timer: any = null;
  props: Props;
  state: State = { visibleImageIndex: this.props.visibleImageIndex };
  
  clearTimer = (): void => window.clearTimeout(this.timer);

  update = (): void => {
    this.setState(({ visibleImageIndex }) => ({
      visibleImageIndex: visibleImageIndex === this.props.images.length - 1 ? 0 : visibleImageIndex + 1
    }));
    this.clearTimer();
    this.timer = window.setTimeout(this.update, this.props.delay);
  };

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { visibleImageIndex } = this.state;
    const {
      images,
      containerClassnName,
      itemClassnName
    } = this.props;
    return (
      <div
        className={clx('container', containerClassnName)}
        onMouseEnter={this.update}
        onMouseLeave={this.clearTimer}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={clx('item'), itemClassnName}
            style={{
              opacity: visibleImageIndex === i ? 1 : 0
            }}
          >
            <img src={src} alt={src} />
          </div>
        ))}
      </div>
    );
  }
}

export default ReactGalleryBox;
