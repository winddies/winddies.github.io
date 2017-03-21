webpackJsonp([3],{

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

/***/ },

/***/ 287:
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

	var _redux = __webpack_require__(189);

	var _reactRedux = __webpack_require__(178);

	var _ContentList = __webpack_require__(288);

	var _ContentList2 = _interopRequireDefault(_ContentList);

	var _actionCreator = __webpack_require__(291);

	var action = _interopRequireWildcard(_actionCreator);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var category = function category() {
		var Category = function (_Component) {
			_inherits(Category, _Component);

			function Category(props) {
				_classCallCheck(this, Category);

				var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

				_this.tagData = _this.props.tag;
				//console.log(props)

				return _this;
			}

			_createClass(Category, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.props.ajax();
				}
			}, {
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
					console.log("category卸载");
				}
			}, {
				key: 'render',
				value: function render() {
					var item = this.props.item;

					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Header2.default, { page: this.props.location.pathname }),
						_react2.default.createElement(
							'div',
							{ className: 'mainContent' },
							_react2.default.createElement(
								'div',
								{ className: 'category_tags' },
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
							),
							_react2.default.createElement(
								'div',
								{ className: 'category_content' },
								_react2.default.createElement(_ContentList2.default, null)
							)
						)
					);
				}
			}]);

			return Category;
		}(_react.Component);

		return Category;
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
		//console.log(action)
		return (0, _redux.bindActionCreators)(action, dispatch);
	};
	exports.default = (0, _reactRedux.connect)(function (state) {
		console.log(state);return { tag: state.fetchData.tags, item: state.fetchData.item };
	}, mapDispatchToProps)(category());

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Section = __webpack_require__(289);

	var _Section2 = _interopRequireDefault(_Section);

	var _reactRedux = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContentList = function (_Component) {
		_inherits(ContentList, _Component);

		function ContentList(props) {
			_classCallCheck(this, ContentList);

			var _this = _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).call(this, props));

			_this.data = '';
			return _this;
		}

		_createClass(ContentList, [{
			key: 'render',
			value: function render() {
				this.data = this.props.item.length ? this.props.item.map(function (value, index) {
					return _react2.default.createElement(_Section2.default, { item: value, key: index });
				}) : "";
				return _react2.default.createElement(
					'div',
					{ className: 'contentList' },
					this.data
				);
			}
		}]);

		return ContentList;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return { item: state.fetchData.items };
	})(ContentList);

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Article = __webpack_require__(290);

	var _Article2 = _interopRequireDefault(_Article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Section = function (_Component) {
		_inherits(Section, _Component);

		function Section(props) {
			_classCallCheck(this, Section);

			var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

			_this.data = '';
			return _this;
		}

		_createClass(Section, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'render',
			value: function render() {
				var info = this.props.item.data;
				info = info.length ? info.map(function (value, index) {
					return _react2.default.createElement(_Article2.default, { data: value, key: index });
				}) : "";
				return _react2.default.createElement(
					'div',
					{ className: 'section' },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h3',
							null,
							_react2.default.createElement(
								'span',
								null,
								'#'
							),
							this.props.item.topic
						)
					),
					_react2.default.createElement(
						'div',
						null,
						info
					)
				);
			}
		}]);

		return Section;
	}(_react.Component);

	exports.default = Section;

/***/ },

/***/ 290:
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

	var Article = function (_Component) {
		_inherits(Article, _Component);

		function Article(props) {
			_classCallCheck(this, Article);

			var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

			_this.data = '';
			return _this;
		}

		_createClass(Article, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'article' },
					_react2.default.createElement(
						'div',
						{ className: 'title' },
						_react2.default.createElement(
							'h4',
							null,
							this.props.data.title
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'introduces' },
						this.props.data.introduces
					)
				);
			}
		}]);

		return Article;
	}(_react.Component);

	exports.default = Article;

/***/ },

/***/ 291:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function ajax(params) {
		//console.log(params)
		return function (dispatch, getState) {
			if (shouldSendUrl(getState())) {
				return dispatch(fetchUrl(params));
			} else {
				return Promise.resolve();
			}
		};
	}

	function initial() {
		return {
			type: 'ajax',
			post: [{ topic: "前端小记",
				url: './category/front-end',
				data: [{ title: "前端的核心竞争力到底是什么？", introduces: "前端其实不是很那么简单" }, { title: "2017年我应该做点什么了吧", introduces: "有时候不是我们失去了目标，而是失去了方向" }]
			}, { topic: "这个标签留给你",
				url: './category/front-end',
				data: [{ title: "一周年", introduces: "和黄黄同学的一周年要到了。。" }]
			}]
		};
	}

	function fetchUrl(params) {

		return function (dispatch) {
			if (true) {
				return dispatch(initial());
			}
			return fetch(url).then(function (response) {
				return response.json();
			}).then(function (json) {
				return dispatch(receiveData(json));
			}).catch(function (e) {
				window.location.href = href;
			});
		};
	}
	function receiveData(json) {
		return {
			type: "receiveData",
			post: json
		};
	}
	function shouldSendUrl(state) {
		if (!state) {
			return true;
		}
		console.log(state);
		return !state.fetchData.items.length;
	}

	exports.ajax = ajax;

/***/ }

});