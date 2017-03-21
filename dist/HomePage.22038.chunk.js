webpackJsonp([1],{

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(218);

	var _Header = __webpack_require__(284);

	var _Header2 = _interopRequireDefault(_Header);

	var _Tag = __webpack_require__(285);

	var _Tag2 = _interopRequireDefault(_Tag);

	var _reactRedux = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var homes = function homes() {
		var Home = function (_Component) {
			_inherits(Home, _Component);

			function Home(props) {
				_classCallCheck(this, Home);

				var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

				_this.tagData = _this.props.tag;
				return _this;
			}

			_createClass(Home, [{
				key: 'componentWillMount',
				value: function componentWillMount() {

					console.log("123");
					this.tagData = this.tagData.map(function (item, index) {
						return _react2.default.createElement(_Tag2.default, { value: item, key: index, indexValue: index });
					});
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					console.log("home卸载");
				}
			}, {
				key: 'render',
				value: function render() {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Header2.default, { page: this.props.location.pathname }),
						_react2.default.createElement(
							'div',
							{ className: 'mainContent' },
							_react2.default.createElement(
								'div',
								{ className: 'content' },
								_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										'h2',
										null,
										'introduces\uFF1A'
									)
								),
								_react2.default.createElement(
									'p',
									null,
									'\xA0\xA0\xA0\xA0\u8FD9\u4E2A\u535A\u5BA2\u7684\u9996\u9875\u5927\u6982\u5C31\u662F\u8FD9\u6837\u5B50\uFF0C\u5927\u6982\u524D\u7AEF\u5DE5\u4F5C\u8005\u90FD\u4F1A\u6709\u81EA\u5DF1\u60F3\u5EFA\u4E00\u4E2A\u535A\u5BA2\u7684\u60F3\u6CD5\uFF0C\u73B0\u6709\u7684\u535A\u5BA2\u7CFB\u7EDF\u5982wordpress\u7B49\u53EF\u4EE5\u63D0\u4F9B\u5F88\u591A\u7684\u4E2A\u4EBA\u535A\u5BA2\u5EFA\u7ACB\u529F\u80FD\uFF0C\u4F46\u662F\u6700\u8FD1\u5728\u5B66react\uFF0C\u5C31\u60F3\u8FD8\u662F\u81EA\u5DF1\u52A8\u624B\u5EFA\u7ACB\u4E00\u4E2A\u7F51\u7AD9\u5427\uFF0C\u4E8E\u662Fmy blog\u5C31\u8BDE\u751F\u4E86\uFF0C\u8BBE\u8BA1\u7684\u5F88\u7C97\u7CD9\uFF0C\u505A\u4E86\u7B80\u5355\u7684\u624B\u673A\u9002\u914D'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'right' },
								_react2.default.createElement(
									'div',
									{ className: 'rightMenu' },
									_react2.default.createElement(
										'div',
										{ className: 'tagContent' },
										_react2.default.createElement(
											'h3',
											null,
											'Tags'
										),
										this.tagData
									)
								)
							)
						)
					);
				}
			}]);

			return Home;
		}(_react.Component);

		return Home;
	};
	exports.default = (0, _reactRedux.connect)(function (state) {
		console.log(state);return { tag: state.fetchData.tags };
	})(homes());

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(218);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header(props) {
			_classCallCheck(this, Header);

			var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

			_this.styleClass = '';
			return _this;
		}

		_createClass(Header, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				//console.log(this.props)
				switch (this.props.page) {
					case '/category':
						this.styleClass = 'category';break;
					case '/':
						this.styleClass = 'header';break;
					case '/expand':
						this.styleClass = 'expand';break;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: this.styleClass, ref: 'head' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/' },
									'Home'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/category' },
									'category'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/expand' },
									'expand'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'title' },
							_react2.default.createElement(
								'h1',
								null,
								'My Blog'
							),
							_react2.default.createElement(
								'span',
								null,
								'\u4E00\u5FC3\u60F3\u8FC7\u81EA\u7531\u751F\u6D3B'
							)
						)
					)
				);
			}
		}]);

		return Header;
	}(_react.Component);

	exports.default = Header;

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tag = function (_Component) {
		_inherits(Tag, _Component);

		function Tag(props) {
			_classCallCheck(this, Tag);

			return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));
			//console.log(props)	    
		}

		_createClass(Tag, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'a',
					{ className: 'tag', href: '#' },
					this.props.value
				);
			}
		}]);

		return Tag;
	}(_react.Component);

	exports.default = Tag;

/***/ }

});