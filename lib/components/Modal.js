"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var propTypes = {
  className: _propTypes["default"].string
};

var Modal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Modal, _Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Modal).call(this, props));
    _this.getChildren = _this.getChildren.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "getChildren",
    value: function getChildren() {
      var modalChildren = this.props.modalChildren;

      if (!modalChildren || !modalChildren[0]) {
        return _react["default"].createElement("div", null, "Please add content through modalChildren props on Player Component");
      }

      return modalChildren.map(function (child) {
        return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          hasModal = _this$props.hasModal;
      if (!hasModal) return null;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('video-react-modal', className)
      }, _react["default"].createElement("div", {
        className: "video-react-modal-content"
      }, this.getChildren()));
    }
  }]);
  return Modal;
}(_react.Component);

exports["default"] = Modal;
Modal.propTypes = propTypes;
Modal.displayName = 'Modal';