'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactGalleryBox = function (_Component) {
  _inherits(ReactGalleryBox, _Component);

  function ReactGalleryBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactGalleryBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.timer = null, _this.state = { visibleImageIndex: _this.props.visibleImageIndex }, _this.clearTimer = function () {
      return window.clearTimeout(_this.timer);
    }, _this.update = function () {
      _this.setState(function (_ref) {
        var visibleImageIndex = _ref.visibleImageIndex;
        return {
          visibleImageIndex: visibleImageIndex === _this.props.images.length - 1 ? 0 : visibleImageIndex + 1
        };
      });
      _this.clearTimer();
      _this.timer = window.setTimeout(_this.update, _this.props.delay);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactGalleryBox.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearTimer();
  };

  ReactGalleryBox.prototype.render = function render() {
    var visibleImageIndex = this.state.visibleImageIndex;
    var _props = this.props,
        images = _props.images,
        containerClassnName = _props.containerClassnName,
        itemClassnName = _props.itemClassnName;

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('container', containerClassnName),
        onMouseEnter: this.update,
        onMouseLeave: this.clearTimer
      },
      images.map(function (src, i) {
        return _react2.default.createElement(
          'div',
          {
            key: i,
            className: (0, _classnames2.default)('item', itemClassnName),
            style: {
              opacity: visibleImageIndex === i ? 1 : 0
            }
          },
          _react2.default.createElement('img', { src: src, alt: src })
        );
      })
    );
  };

  return ReactGalleryBox;
}(_react.Component);

ReactGalleryBox.propTypes = {
  visibleImageIndex: _propTypes2.default.number,
  images: _propTypes2.default.array,
  delay: _propTypes2.default.number,
  containerClassnName: _propTypes2.default.string,
  itemClassnName: _propTypes2.default.string
};
ReactGalleryBox.defaultProps = {
  visibleImageIndex: 0,
  images: [],
  delay: 1500
};
exports.default = ReactGalleryBox;