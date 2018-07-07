(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('redux'), require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'redux', 'react', 'react-dom'], factory) :
	(factory((global['video-react'] = {}),global.Redux,global.React,global.ReactDOM));
}(this, (function (exports,redux,React,reactDom) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	function emptyFunction() {}

	var factoryWithThrowingShims = function factoryWithThrowingShims() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */

	  {
	    // By explicitly using `prop-types` you are opting into new production behavior.
	    // http://fb.me/prop-types-in-prod
	    module.exports = factoryWithThrowingShims();
	  }
	});

	var classnames = createCommonjsModule(function (module) {
		/*!
	   Copyright (c) 2017 Jed Watson.
	   Licensed under the MIT License (MIT), see
	   http://jedwatson.github.io/classnames
	 */
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames() {
				var classes = [];

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;

					var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg) && arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}

				return classes.join(' ');
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		})();
	});

	var LOAD_START = 'video-react/LOAD_START';
	var CAN_PLAY = 'video-react/CAN_PLAY';
	var WAITING = 'video-react/WAITING';
	var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
	var PLAYING = 'video-react/PLAYING';
	var PLAY = 'video-react/PLAY';
	var PAUSE = 'video-react/PAUSE';
	var END = 'video-react/END';
	var SEEKING = 'video-react/SEEKING';
	var SEEKED = 'video-react/SEEKED';
	var SEEKING_TIME = 'video-react/SEEKING_TIME';
	var END_SEEKING = 'video-react/END_SEEKING';
	var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
	var TIME_UPDATE = 'video-react/TIME_UPDATE';
	var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
	var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
	var RATE_CHANGE = 'video-react/RATE_CHANGE';
	var SUSPEND = 'video-react/SUSPEND';
	var ABORT = 'video-react/ABORT';
	var EMPTIED = 'video-react/EMPTIED';
	var STALLED = 'video-react/STALLED';
	var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
	var LOADED_DATA = 'video-react/LOADED_DATA';
	var RESIZE = 'video-react/RESIZE';
	var ERROR = 'video-react/ERROR';

	function handleLoadStart(videoProps) {
	  return {
	    type: LOAD_START,
	    videoProps: videoProps
	  };
	}

	function handleCanPlay(videoProps) {
	  return {
	    type: CAN_PLAY,
	    videoProps: videoProps
	  };
	}

	function handleWaiting(videoProps) {
	  return {
	    type: WAITING,
	    videoProps: videoProps
	  };
	}

	function handleCanPlayThrough(videoProps) {
	  return {
	    type: CAN_PLAY_THROUGH,
	    videoProps: videoProps
	  };
	}

	function handlePlaying(videoProps) {
	  return {
	    type: PLAYING,
	    videoProps: videoProps
	  };
	}

	function handlePlay(videoProps) {
	  return {
	    type: PLAY,
	    videoProps: videoProps
	  };
	}

	function handlePause(videoProps) {
	  return {
	    type: PAUSE,
	    videoProps: videoProps
	  };
	}

	function handleEnd(videoProps) {
	  return {
	    type: END,
	    videoProps: videoProps
	  };
	}

	function handleSeeking(videoProps) {
	  return {
	    type: SEEKING,
	    videoProps: videoProps
	  };
	}

	function handleSeeked(videoProps) {
	  return {
	    type: SEEKED,
	    videoProps: videoProps
	  };
	}

	function handleDurationChange(videoProps) {
	  return {
	    type: DURATION_CHANGE,
	    videoProps: videoProps
	  };
	}

	function handleTimeUpdate(videoProps) {
	  return {
	    type: TIME_UPDATE,
	    videoProps: videoProps
	  };
	}

	function handleVolumeChange(videoProps) {
	  return {
	    type: VOLUME_CHANGE,
	    videoProps: videoProps
	  };
	}

	function handleProgressChange(videoProps) {
	  return {
	    type: PROGRESS_CHANGE,
	    videoProps: videoProps
	  };
	}

	function handleRateChange(videoProps) {
	  return {
	    type: RATE_CHANGE,
	    videoProps: videoProps
	  };
	}

	function handleSuspend(videoProps) {
	  return {
	    type: SUSPEND,
	    videoProps: videoProps
	  };
	}

	function handleAbort(videoProps) {
	  return {
	    type: ABORT,
	    videoProps: videoProps
	  };
	}

	function handleEmptied(videoProps) {
	  return {
	    type: EMPTIED,
	    videoProps: videoProps
	  };
	}

	function handleStalled(videoProps) {
	  return {
	    type: STALLED,
	    videoProps: videoProps
	  };
	}

	function handleLoadedMetaData(videoProps) {
	  return {
	    type: LOADED_META_DATA,
	    videoProps: videoProps
	  };
	}

	function handleLoadedData(videoProps) {
	  return {
	    type: LOADED_DATA,
	    videoProps: videoProps
	  };
	}

	function handleResize(videoProps) {
	  return {
	    type: RESIZE,
	    videoProps: videoProps
	  };
	}

	function handleError(videoProps) {
	  return {
	    type: ERROR,
	    videoProps: videoProps
	  };
	}

	function handleSeekingTime(time) {
	  return {
	    type: SEEKING_TIME,
	    time: time
	  };
	}

	function handleEndSeeking(time) {
	  return {
	    type: END_SEEKING,
	    time: time
	  };
	}

	var videoActions = /*#__PURE__*/Object.freeze({
		LOAD_START: LOAD_START,
		CAN_PLAY: CAN_PLAY,
		WAITING: WAITING,
		CAN_PLAY_THROUGH: CAN_PLAY_THROUGH,
		PLAYING: PLAYING,
		PLAY: PLAY,
		PAUSE: PAUSE,
		END: END,
		SEEKING: SEEKING,
		SEEKED: SEEKED,
		SEEKING_TIME: SEEKING_TIME,
		END_SEEKING: END_SEEKING,
		DURATION_CHANGE: DURATION_CHANGE,
		TIME_UPDATE: TIME_UPDATE,
		VOLUME_CHANGE: VOLUME_CHANGE,
		PROGRESS_CHANGE: PROGRESS_CHANGE,
		RATE_CHANGE: RATE_CHANGE,
		SUSPEND: SUSPEND,
		ABORT: ABORT,
		EMPTIED: EMPTIED,
		STALLED: STALLED,
		LOADED_META_DATA: LOADED_META_DATA,
		LOADED_DATA: LOADED_DATA,
		RESIZE: RESIZE,
		ERROR: ERROR,
		handleLoadStart: handleLoadStart,
		handleCanPlay: handleCanPlay,
		handleWaiting: handleWaiting,
		handleCanPlayThrough: handleCanPlayThrough,
		handlePlaying: handlePlaying,
		handlePlay: handlePlay,
		handlePause: handlePause,
		handleEnd: handleEnd,
		handleSeeking: handleSeeking,
		handleSeeked: handleSeeked,
		handleDurationChange: handleDurationChange,
		handleTimeUpdate: handleTimeUpdate,
		handleVolumeChange: handleVolumeChange,
		handleProgressChange: handleProgressChange,
		handleRateChange: handleRateChange,
		handleSuspend: handleSuspend,
		handleAbort: handleAbort,
		handleEmptied: handleEmptied,
		handleStalled: handleStalled,
		handleLoadedMetaData: handleLoadedMetaData,
		handleLoadedData: handleLoadedData,
		handleResize: handleResize,
		handleError: handleError,
		handleSeekingTime: handleSeekingTime,
		handleEndSeeking: handleEndSeeking
	});

	var Fullscreen = function () {
	  function Fullscreen() {
	    classCallCheck(this, Fullscreen);
	  }

	  createClass(Fullscreen, [{
	    key: 'request',
	    value: function request(elm) {
	      if (elm.requestFullscreen) {
	        elm.requestFullscreen();
	      } else if (elm.webkitRequestFullscreen) {
	        elm.webkitRequestFullscreen();
	      } else if (elm.mozRequestFullScreen) {
	        elm.mozRequestFullScreen();
	      } else if (elm.msRequestFullscreen) {
	        elm.msRequestFullscreen();
	      }
	    }
	  }, {
	    key: 'exit',
	    value: function exit() {
	      if (document.exitFullscreen) {
	        document.exitFullscreen();
	      } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	      } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	      } else if (document.msExitFullscreen) {
	        document.msExitFullscreen();
	      }
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(handler) {
	      document.addEventListener('fullscreenchange', handler);
	      document.addEventListener('webkitfullscreenchange', handler);
	      document.addEventListener('mozfullscreenchange', handler);
	      document.addEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(handler) {
	      document.removeEventListener('fullscreenchange', handler);
	      document.removeEventListener('webkitfullscreenchange', handler);
	      document.removeEventListener('mozfullscreenchange', handler);
	      document.removeEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'isFullscreen',
	    get: function get$$1() {
	      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
	    }
	  }, {
	    key: 'enabled',
	    get: function get$$1() {
	      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
	    }
	  }]);
	  return Fullscreen;
	}();

	var fullscreen = new Fullscreen();

	var OPERATE = 'video-react/OPERATE';
	var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
	var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
	var USER_ACTIVATE = 'video-react/USER_ACTIVATE';

	function handleFullscreenChange(isFullscreen) {
	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: isFullscreen
	  };
	}

	function activate(activity) {
	  return {
	    type: PLAYER_ACTIVATE,
	    activity: activity
	  };
	}

	function userActivate(activity) {
	  return {
	    type: USER_ACTIVATE,
	    activity: activity
	  };
	}

	function play() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'play',
	    source: ''
	  };

	  this.video.play();

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function pause() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'pause',
	    source: ''
	  };

	  this.video.pause();

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function togglePlay() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'toggle-play',
	    source: ''
	  };

	  this.video.togglePlay();

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	// seek video by time
	function seek(time) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'seek',
	    source: ''
	  };

	  this.video.seek(time);

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	// jump forward x seconds
	function forward(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'forward-' + seconds,
	    source: ''
	  };

	  this.video.forward(seconds);

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	// jump back x seconds
	function replay(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'replay-' + seconds,
	    source: ''
	  };

	  this.video.replay(seconds);

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function changeRate(rate) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-rate',
	    source: ''
	  };

	  this.video.playbackRate = rate;

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function changeVolume(volume) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-volume',
	    source: ''
	  };

	  var v = volume;
	  if (volume < 0) {
	    v = 0;
	  }
	  if (volume > 1) {
	    v = 1;
	  }
	  this.video.volume = v;

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function mute(muted) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: muted ? 'muted' : 'unmuted',
	    source: ''
	  };

	  this.video.muted = muted;

	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}

	function toggleFullscreen(player) {
	  if (fullscreen.enabled) {
	    if (fullscreen.isFullscreen) {
	      fullscreen.exit();
	    } else {
	      fullscreen.request(this.rootElement);
	    }
	    return {
	      type: OPERATE,
	      operation: {
	        action: 'toggle-fullscreen',
	        source: ''
	      }
	    };
	  }

	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: !player.isFullscreen
	  };
	}

	var playerActions = /*#__PURE__*/Object.freeze({
		OPERATE: OPERATE,
		FULLSCREEN_CHANGE: FULLSCREEN_CHANGE,
		PLAYER_ACTIVATE: PLAYER_ACTIVATE,
		USER_ACTIVATE: USER_ACTIVATE,
		handleFullscreenChange: handleFullscreenChange,
		activate: activate,
		userActivate: userActivate,
		play: play,
		pause: pause,
		togglePlay: togglePlay,
		seek: seek,
		forward: forward,
		replay: replay,
		changeRate: changeRate,
		changeVolume: changeVolume,
		mute: mute,
		toggleFullscreen: toggleFullscreen
	});

	var initialState = {
	  currentSrc: null,
	  duration: 0,
	  currentTime: 0,
	  seekingTime: 0,
	  buffered: null,
	  waiting: false,
	  seeking: false,
	  paused: true,
	  autoPaused: false,
	  ended: false,
	  playbackRate: 1,
	  muted: false,
	  volume: 1,
	  readyState: 0,
	  networkState: 0,
	  videoWidth: 0,
	  videoHeight: 0,
	  hasStarted: false,
	  userActivity: false, //todo different with original
	  isActive: false,
	  isFullscreen: false
	};

	function player() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case USER_ACTIVATE:
	      return _extends({}, state, {
	        userActivity: action.activity
	      });
	    case PLAYER_ACTIVATE:
	      return _extends({}, state, {
	        isActive: action.activity
	      });
	    case FULLSCREEN_CHANGE:
	      return _extends({}, state, {
	        isFullscreen: !!action.isFullscreen
	      });
	    case SEEKING_TIME:
	      return _extends({}, state, {
	        seekingTime: action.time
	      });
	    case END_SEEKING:
	      return _extends({}, state, {
	        seekingTime: 0
	      });
	    case LOAD_START:
	      return _extends({}, state, action.videoProps, {
	        hasStarted: false,
	        ended: false
	      });
	    case CAN_PLAY:
	      return _extends({}, state, action.videoProps, {
	        waiting: false
	      });
	    case WAITING:
	      return _extends({}, state, action.videoProps, {
	        waiting: true
	      });
	    case CAN_PLAY_THROUGH:
	    case PLAYING:
	      return _extends({}, state, action.videoProps, {
	        waiting: false
	      });
	    case PLAY:
	      return _extends({}, state, action.videoProps, {
	        ended: false,
	        paused: false,
	        autoPaused: false,
	        waiting: false,
	        hasStarted: true
	      });
	    case PAUSE:
	      return _extends({}, state, action.videoProps, {
	        paused: true
	      });
	    case END:
	      return _extends({}, state, action.videoProps, {
	        ended: true
	      });
	    case SEEKING:
	      return _extends({}, state, action.videoProps, {
	        seeking: true
	      });
	    case SEEKED:
	      return _extends({}, state, action.videoProps, {
	        seeking: false
	      });
	    case ERROR:
	      return _extends({}, state, action.videoProps, {
	        error: 'UNKNOWN ERROR',
	        ended: true
	      });
	    case DURATION_CHANGE:
	    case TIME_UPDATE:
	    case VOLUME_CHANGE:
	    case PROGRESS_CHANGE:
	    case RATE_CHANGE:
	    case SUSPEND:
	    case ABORT:
	    case EMPTIED:
	    case STALLED:
	    case LOADED_META_DATA:
	    case LOADED_DATA:
	    case RESIZE:
	      var newState = _extends({}, state, action.videoProps);
	      if (action.videoProps.paused === false) {
	        newState.hasStarted = true;
	        newState.waiting = false;
	      }
	      return newState;
	    default:
	      return state;
	  }
	}

	var initialState$1 = {
	  count: 0,
	  operation: {
	    action: '',
	    source: ''
	  }
	};

	function operation() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
	  var action = arguments[1];

	  switch (action.type) {
	    case OPERATE:
	      return _extends({}, state, {
	        count: state.count + 1,
	        operation: _extends({}, state.operation, action.operation)
	      });
	    default:
	      return state;
	  }
	}

	function reducer () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  return {
	    player: player(state.player, action),
	    operation: operation(state.operation, action)
	  };
	}

	var Manager = function () {
	  function Manager(store) {
	    classCallCheck(this, Manager);

	    this.store = store || redux.createStore(reducer);

	    this.video = null;
	    this.rootElement = null;
	  }

	  createClass(Manager, [{
	    key: 'getActions',
	    value: function getActions() {
	      var manager = this;
	      var dispatch = this.store.dispatch;

	      var actions = _extends({}, playerActions, videoActions);

	      function bindActionCreator(actionCreator) {
	        return function bindAction() {
	          // eslint-disable-next-line prefer-rest-params
	          var action = actionCreator.apply(manager, arguments);
	          if (typeof action !== 'undefined') {
	            dispatch(action);
	          }
	        };
	      }

	      return Object.keys(actions).filter(function (key) {
	        return typeof actions[key] === 'function';
	      }).reduce(function (boundActions, key) {
	        boundActions[key] = bindActionCreator(actions[key]);
	        return boundActions;
	      }, {});
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.store.getState();
	    }

	    // subscribe state change

	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener, getState) {
	      if (!getState) {
	        getState = this.getState.bind(this);
	      }

	      var prevState = getState();

	      var handleChange = function handleChange() {
	        var state = getState();
	        if (state === prevState) {
	          return;
	        }
	        var prevStateCopy = prevState;
	        prevState = state;
	        listener(state, prevStateCopy);
	      };

	      return this.store.subscribe(handleChange);
	    }

	    // subscribe to operation state change

	  }, {
	    key: 'subscribeToOperationStateChange',
	    value: function subscribeToOperationStateChange(listener) {
	      var _this = this;

	      return this.subscribeToStateChange(listener, function () {
	        return _this.getState().operation;
	      });
	    }

	    // subscribe to player state change

	  }, {
	    key: 'subscribeToPlayerStateChange',
	    value: function subscribeToPlayerStateChange(listener) {
	      var _this2 = this;

	      return this.subscribeToStateChange(listener, function () {
	        return _this2.getState().player;
	      });
	    }
	  }]);
	  return Manager;
	}();

	/**
	 * @file format-time.js
	 *
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 *
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 * @private
	 * @function formatTime
	 */
	function formatTime() {
	  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;

	  var s = Math.floor(seconds % 60);
	  var m = Math.floor(seconds / 60 % 60);
	  var h = Math.floor(seconds / 3600);
	  var gm = Math.floor(guide / 60 % 60);
	  var gh = Math.floor(guide / 3600);

	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }

	  // Check if we need to show hours
	  h = h > 0 || gh > 0 ? h + ':' : '';

	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

	  // Check if leading zero is need for seconds
	  s = s < 10 ? '0' + s : s;

	  return h + m + s;
	}

	// Check if the element belongs to a video element
	// only accept <source />, <track />,
	// <MyComponent isVideoChild />
	// elements
	function isVideoChild(c) {
	  if (c.props && c.props.isVideoChild) {
	    return true;
	  }
	  return c.type === 'source' || c.type === 'track';
	}

	var find = function find(elements, func) {
	  return elements.filter(func)[0];
	};

	// check if two components are the same type
	var isTypeEqual = function isTypeEqual(component1, component2) {
	  var type1 = component1.type;
	  var type2 = component2.type;

	  if (typeof type1 === 'string' || typeof type2 === 'string') {
	    return type1 === type2;
	  }

	  if (typeof type1 === 'function' && typeof type2 === 'function') {
	    return type1.displayName === type2.displayName;
	  }

	  return false;
	};

	// merge default children
	// sort them by `order` property
	// filter them by `disabled` property
	function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
	  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	  var children = React__default.Children.toArray(_children);
	  var parentProps = _extends({}, _parentProps);
	  return children.filter(function (e) {
	    return !e.props.disabled;
	  }) // filter the disabled components
	  .concat(defaultChildren.filter(function (c) {
	    return !find(children, function (component) {
	      return isTypeEqual(component, c);
	    });
	  })).map(function (element) {
	    var defaultComponent = find(defaultChildren, function (c) {
	      return isTypeEqual(c, element);
	    });
	    delete parentProps.order;
	    var defaultProps = defaultComponent ? defaultComponent.props : {};
	    var props = _extends({}, parentProps, defaultProps, element.props);
	    var e = React__default.cloneElement(element, props, element.props.children);
	    return e;
	  }).sort(function (a, b) {
	    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
	  });
	}

	function throttle(callback, limit) {
	  var _arguments = arguments;

	  var wait = false;
	  return function () {
	    if (!wait) {
	      callback.apply(null, _arguments);
	      wait = true;
	      setTimeout(function () {
	        wait = false;
	      }, limit);
	    }
	  };
	}

	var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];

	var propTypes$1 = {
	  actions: propTypes.object,
	  player: propTypes.object,
	  children: propTypes.any,
	  startTime: propTypes.number,
	  loop: propTypes.bool,
	  muted: propTypes.bool,
	  autoPlay: propTypes.bool,
	  playsInline: propTypes.bool,
	  src: propTypes.string,
	  poster: propTypes.string,
	  className: propTypes.string,
	  preload: propTypes.oneOf(['auto', 'metadata', 'none']),
	  crossOrigin: propTypes.string,

	  onLoadStart: propTypes.func,
	  onWaiting: propTypes.func,
	  onCanPlay: propTypes.func,
	  onCanPlayThrough: propTypes.func,
	  onPlaying: propTypes.func,
	  onEnded: propTypes.func,
	  onSeeking: propTypes.func,
	  onSeeked: propTypes.func,
	  onPlay: propTypes.func,
	  onPause: propTypes.func,
	  onProgress: propTypes.func,
	  onDurationChange: propTypes.func,
	  onError: propTypes.func,
	  onSuspend: propTypes.func,
	  onAbort: propTypes.func,
	  onEmptied: propTypes.func,
	  onStalled: propTypes.func,
	  onLoadedMetadata: propTypes.func,
	  onLoadedData: propTypes.func,
	  onTimeUpdate: propTypes.func,
	  onRateChange: propTypes.func,
	  onVolumeChange: propTypes.func,
	  onResize: propTypes.func
	};

	var defaultProps = {
	  preload: 'auto'
	};

	var Video = function (_Component) {
	  inherits(Video, _Component);

	  function Video(props) {
	    classCallCheck(this, Video);

	    var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

	    _this.video = null; // the html5 video
	    _this.play = _this.play.bind(_this);
	    _this.pause = _this.pause.bind(_this);
	    _this.seek = _this.seek.bind(_this);
	    _this.forward = _this.forward.bind(_this);
	    _this.replay = _this.replay.bind(_this);
	    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
	    _this.getProperties = _this.getProperties.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
	    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
	    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
	    _this.handlePlay = _this.handlePlay.bind(_this);
	    _this.handlePlaying = _this.handlePlaying.bind(_this);
	    _this.handlePause = _this.handlePause.bind(_this);
	    _this.handleEnded = _this.handleEnded.bind(_this);
	    _this.handleWaiting = _this.handleWaiting.bind(_this);
	    _this.handleSeeking = _this.handleSeeking.bind(_this);
	    _this.handleSeeked = _this.handleSeeked.bind(_this);
	    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
	    _this.handleError = _this.handleError.bind(_this);
	    _this.handleSuspend = _this.handleSuspend.bind(_this);
	    _this.handleAbort = _this.handleAbort.bind(_this);
	    _this.handleEmptied = _this.handleEmptied.bind(_this);
	    _this.handleStalled = _this.handleStalled.bind(_this);
	    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
	    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
	    _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
	    _this.handleRateChange = _this.handleRateChange.bind(_this);
	    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
	    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
	    _this.handleProgress = throttle(_this.handleProgress.bind(_this), 250);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }

	  createClass(Video, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.forceUpdate(); // make sure the children can get the video property
	    }

	    // get all video properties

	  }, {
	    key: 'getProperties',
	    value: function getProperties() {
	      var _this2 = this;

	      if (!this.video) {
	        return null;
	      }

	      return mediaProperties.reduce(function (properties, key) {
	        properties[key] = _this2.video[key];
	        return properties;
	      }, {});
	    }

	    // get playback rate

	  }, {
	    key: 'play',


	    // play the video
	    value: function play() {
	      var promise = this.video.play();
	      if (promise !== undefined) {
	        promise.catch(function (error) {}).then(function () {});
	      }
	    }

	    // pause the video

	  }, {
	    key: 'pause',
	    value: function pause() {
	      var promise = this.video.pause();
	      if (promise !== undefined) {
	        promise.catch(function (error) {}).then(function () {});
	      }
	    }

	    // Change the video source and re-load the video:

	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }

	    // Add a new text track to the video

	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;

	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }

	    // Check if your browser can play different types of video:

	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;

	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }

	    // toggle play

	  }, {
	    key: 'togglePlay',
	    value: function togglePlay() {
	      if (this.video.paused) {
	        this.play();
	      } else {
	        this.pause();
	      }
	    }

	    // seek video by time

	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      try {
	        this.video.currentTime = time;
	      } catch (e) {
	        // console.log(e, 'Video is not ready.')
	      }
	    }

	    // jump forward x seconds

	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.seek(this.video.currentTime + seconds);
	    }

	    // jump back x seconds

	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.forward(-seconds);
	    }

	    // enter or exist full screen

	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;

	      actions.toggleFullscreen(player);
	    }

	    // Fired when the user agent
	    // begins looking for media data

	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props2 = this.props,
	          actions = _props2.actions,
	          onLoadStart = _props2.onLoadStart;

	      actions.handleLoadStart(this.getProperties());
	      if (onLoadStart) {
	        onLoadStart.apply(undefined, arguments);
	      }
	    }

	    // A handler for events that
	    // signal that waiting has ended

	  }, {
	    key: 'handleCanPlay',
	    value: function handleCanPlay() {
	      var _props3 = this.props,
	          actions = _props3.actions,
	          onCanPlay = _props3.onCanPlay;


	      actions.handleCanPlay(this.getProperties());

	      if (onCanPlay) {
	        onCanPlay.apply(undefined, arguments);
	      }
	    }

	    // A handler for events that
	    // signal that waiting has ended

	  }, {
	    key: 'handleCanPlayThrough',
	    value: function handleCanPlayThrough() {
	      var _props4 = this.props,
	          actions = _props4.actions,
	          onCanPlayThrough = _props4.onCanPlayThrough;

	      actions.handleCanPlayThrough(this.getProperties());

	      if (onCanPlayThrough) {
	        onCanPlayThrough.apply(undefined, arguments);
	      }
	    }

	    // A handler for events that
	    // signal that waiting has ended

	  }, {
	    key: 'handlePlaying',
	    value: function handlePlaying() {
	      var _props5 = this.props,
	          actions = _props5.actions,
	          onPlaying = _props5.onPlaying;

	      actions.handlePlaying(this.getProperties());

	      if (onPlaying) {
	        onPlaying.apply(undefined, arguments);
	      }
	    }

	    // Fired whenever the media has been started

	  }, {
	    key: 'handlePlay',
	    value: function handlePlay() {
	      var _props6 = this.props,
	          actions = _props6.actions,
	          onPlay = _props6.onPlay;

	      actions.handlePlay(this.getProperties());

	      if (onPlay) {
	        onPlay.apply(undefined, arguments);
	      }
	    }

	    // Fired whenever the media has been paused

	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      var _props7 = this.props,
	          actions = _props7.actions,
	          onPause = _props7.onPause;

	      actions.handlePause(this.getProperties());

	      if (onPause) {
	        onPause.apply(undefined, arguments);
	      }
	    }

	    // Fired when the duration of
	    // the media resource is first known or changed

	  }, {
	    key: 'handleDurationChange',
	    value: function handleDurationChange() {
	      var _props8 = this.props,
	          actions = _props8.actions,
	          onDurationChange = _props8.onDurationChange;

	      actions.handleDurationChange(this.getProperties());

	      if (onDurationChange) {
	        onDurationChange.apply(undefined, arguments);
	      }
	    }

	    // Fired while the user agent
	    // is downloading media data

	  }, {
	    key: 'handleProgress',
	    value: function handleProgress() {
	      var _props9 = this.props,
	          actions = _props9.actions,
	          onProgress = _props9.onProgress;

	      if (this.video) {
	        actions.handleProgressChange(this.getProperties());
	      }

	      if (onProgress) {
	        onProgress.apply(undefined, arguments);
	      }
	    }

	    // Fired when the end of the media resource
	    // is reached (currentTime == duration)

	  }, {
	    key: 'handleEnded',
	    value: function handleEnded() {
	      var _props10 = this.props,
	          loop = _props10.loop,
	          player = _props10.player,
	          actions = _props10.actions,
	          onEnded = _props10.onEnded;

	      if (loop) {
	        this.seek(0);
	        this.play();
	      } else if (!player.paused) {
	        this.pause();
	      }
	      actions.handleEnd(this.getProperties());

	      if (onEnded) {
	        onEnded.apply(undefined, arguments);
	      }
	    }

	    // Fired whenever the media begins waiting

	  }, {
	    key: 'handleWaiting',
	    value: function handleWaiting() {
	      var _props11 = this.props,
	          actions = _props11.actions,
	          onWaiting = _props11.onWaiting;

	      actions.handleWaiting(this.getProperties());

	      if (onWaiting) {
	        onWaiting.apply(undefined, arguments);
	      }
	    }

	    // Fired whenever the player
	    // is jumping to a new time

	  }, {
	    key: 'handleSeeking',
	    value: function handleSeeking() {
	      var _props12 = this.props,
	          actions = _props12.actions,
	          onSeeking = _props12.onSeeking;

	      actions.handleSeeking(this.getProperties());

	      if (onSeeking) {
	        onSeeking.apply(undefined, arguments);
	      }
	    }

	    // Fired when the player has
	    // finished jumping to a new time

	  }, {
	    key: 'handleSeeked',
	    value: function handleSeeked() {
	      var _props13 = this.props,
	          actions = _props13.actions,
	          onSeeked = _props13.onSeeked;

	      actions.handleSeeked(this.getProperties());

	      if (onSeeked) {
	        onSeeked.apply(undefined, arguments);
	      }
	    }

	    // Handle Fullscreen Change

	  }, {
	    key: 'handleFullscreenChange',
	    value: function handleFullscreenChange() {}

	    // Fires when the browser is
	    // intentionally not getting media data

	  }, {
	    key: 'handleSuspend',
	    value: function handleSuspend() {
	      var _props14 = this.props,
	          actions = _props14.actions,
	          onSuspend = _props14.onSuspend;

	      actions.handleSuspend(this.getProperties());
	      if (onSuspend) {
	        onSuspend.apply(undefined, arguments);
	      }
	    }

	    // Fires when the loading of an audio/video is aborted

	  }, {
	    key: 'handleAbort',
	    value: function handleAbort() {
	      var _props15 = this.props,
	          actions = _props15.actions,
	          onAbort = _props15.onAbort;

	      actions.handleAbort(this.getProperties());
	      if (onAbort) {
	        onAbort.apply(undefined, arguments);
	      }
	    }

	    // Fires when the current playlist is empty

	  }, {
	    key: 'handleEmptied',
	    value: function handleEmptied() {
	      var _props16 = this.props,
	          actions = _props16.actions,
	          onEmptied = _props16.onEmptied;

	      actions.handleEmptied(this.getProperties());
	      if (onEmptied) {
	        onEmptied.apply(undefined, arguments);
	      }
	    }

	    // Fires when the browser is trying to
	    // get media data, but data is not available

	  }, {
	    key: 'handleStalled',
	    value: function handleStalled() {
	      var _props17 = this.props,
	          actions = _props17.actions,
	          onStalled = _props17.onStalled;

	      actions.handleStalled(this.getProperties());

	      if (onStalled) {
	        onStalled.apply(undefined, arguments);
	      }
	    }

	    // Fires when the browser has loaded
	    // meta data for the audio/video

	  }, {
	    key: 'handleLoadedMetaData',
	    value: function handleLoadedMetaData() {
	      var _props18 = this.props,
	          actions = _props18.actions,
	          onLoadedMetadata = _props18.onLoadedMetadata,
	          startTime = _props18.startTime;


	      if (startTime && startTime > 0) {
	        this.video.currentTime = startTime;
	      }

	      actions.handleLoadedMetaData(this.getProperties());

	      if (onLoadedMetadata) {
	        onLoadedMetadata.apply(undefined, arguments);
	      }
	    }

	    // Fires when the browser has loaded
	    // the current frame of the audio/video

	  }, {
	    key: 'handleLoadedData',
	    value: function handleLoadedData() {
	      var _props19 = this.props,
	          actions = _props19.actions,
	          onLoadedData = _props19.onLoadedData;

	      actions.handleLoadedData(this.getProperties());

	      if (onLoadedData) {
	        onLoadedData.apply(undefined, arguments);
	      }
	    }

	    // Fires when the current
	    // playback position has changed

	  }, {
	    key: 'handleTimeUpdate',
	    value: function handleTimeUpdate() {
	      var _props20 = this.props,
	          actions = _props20.actions,
	          onTimeUpdate = _props20.onTimeUpdate;

	      actions.handleTimeUpdate(this.getProperties());

	      if (onTimeUpdate) {
	        onTimeUpdate.apply(undefined, arguments);
	      }
	    }

	    /**
	     * Fires when the playing speed of the audio/video is changed
	     */

	  }, {
	    key: 'handleRateChange',
	    value: function handleRateChange() {
	      var _props21 = this.props,
	          actions = _props21.actions,
	          onRateChange = _props21.onRateChange;

	      actions.handleRateChange(this.getProperties());

	      if (onRateChange) {
	        onRateChange.apply(undefined, arguments);
	      }
	    }

	    // Fires when the volume has been changed

	  }, {
	    key: 'handleVolumeChange',
	    value: function handleVolumeChange() {
	      var _props22 = this.props,
	          actions = _props22.actions,
	          onVolumeChange = _props22.onVolumeChange;

	      actions.handleVolumeChange(this.getProperties());

	      if (onVolumeChange) {
	        onVolumeChange.apply(undefined, arguments);
	      }
	    }

	    // Fires when an error occurred
	    // during the loading of an audio/video

	  }, {
	    key: 'handleError',
	    value: function handleError() {
	      var _props23 = this.props,
	          actions = _props23.actions,
	          onError = _props23.onError;

	      actions.handleError(this.getProperties());
	      if (onError) {
	        onError.apply(undefined, arguments);
	      }
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {
	      var _props24 = this.props,
	          actions = _props24.actions,
	          onResize = _props24.onResize;

	      actions.handleResize(this.getProperties());
	      if (onResize) {
	        onResize.apply(undefined, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress() {}
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this3 = this;

	      var props = _extends({}, this.props, {
	        video: this.video

	        // to make sure the children can get video property
	      });if (!this.video) {
	        return null;
	      }

	      // only keep <source />, <track />, <MyComponent isVideoChild /> elements
	      return React__default.Children.toArray(this.props.children).filter(isVideoChild).map(function (c) {
	        var cprops = void 0;
	        if (typeof c.type === 'string') {
	          // add onError to <source />
	          if (c.type === 'source') {
	            cprops = _extends({}, c.props);
	            var preOnError = cprops.onError;
	            cprops.onError = function () {
	              if (preOnError) {
	                preOnError.apply(undefined, arguments);
	              }
	              _this3.handleError.apply(_this3, arguments);
	            };
	          }
	        } else {
	          cprops = props;
	        }
	        return React__default.cloneElement(c, cprops);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props25 = this.props,
	          loop = _props25.loop,
	          poster = _props25.poster,
	          preload = _props25.preload,
	          src = _props25.src,
	          autoPlay = _props25.autoPlay,
	          playsInline = _props25.playsInline,
	          muted = _props25.muted,
	          crossOrigin = _props25.crossOrigin,
	          videoId = _props25.videoId;

	      return React__default.createElement(
	        'video',
	        {
	          className: 'video',
	          id: videoId,
	          crossOrigin: crossOrigin,
	          ref: function ref(c) {
	            _this4.video = c;
	          },
	          muted: muted,
	          preload: preload,
	          loop: loop,
	          playsInline: playsInline,
	          autoPlay: autoPlay,
	          poster: poster,
	          src: src,
	          onLoadStart: this.handleLoadStart,
	          onWaiting: this.handleWaiting,
	          onCanPlay: this.handleCanPlay,
	          onCanPlayThrough: this.handleCanPlayThrough,
	          onPlaying: this.handlePlaying,
	          onEnded: this.handleEnded,
	          onSeeking: this.handleSeeking,
	          onSeeked: this.handleSeeked,
	          onPlay: this.handlePlay,
	          onPause: this.handlePause,
	          onProgress: this.handleProgress,
	          onDurationChange: this.handleDurationChange,
	          onError: this.handleError,
	          onSuspend: this.handleSuspend,
	          onAbort: this.handleAbort,
	          onEmptied: this.handleEmptied,
	          onStalled: this.handleStalled,
	          onLoadedMetadata: this.handleLoadedMetaData,
	          onLoadedData: this.handleLoadedData,
	          onTimeUpdate: this.handleTimeUpdate,
	          onRateChange: this.handleRateChange,
	          onVolumeChange: this.handleVolumeChange
	        },
	        this.renderChildren()
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get$$1() {
	      return this.video.playbackRate;
	    }

	    // set playback rate
	    // speed of video
	    ,
	    set: function set$$1(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get$$1() {
	      return this.video.muted;
	    },
	    set: function set$$1(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get$$1() {
	      return this.video.volume;
	    },
	    set: function set$$1(val) {
	      if (val > 1) {
	        val = 1;
	      }
	      if (val < 0) {
	        val = 0;
	      }
	      this.video.volume = val;
	    }

	    // video width

	  }, {
	    key: 'videoWidth',
	    get: function get$$1() {
	      return this.video.videoWidth;
	    }

	    // video height

	  }, {
	    key: 'videoHeight',
	    get: function get$$1() {
	      return this.video.videoHeight;
	    }
	  }]);
	  return Video;
	}(React.Component);


	Video.propTypes = propTypes$1;
	Video.defaultProps = defaultProps;
	Video.displayName = 'Video';

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES = {
	  tr: {
	    regexp: /[\u0069]/g,
	    map: {
	      'i': '\u0130'
	    }
	  },
	  az: {
	    regexp: /[\u0069]/g,
	    map: {
	      'i': '\u0130'
	    }
	  },
	  lt: {
	    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
	    map: {
	      'i\u0307': 'I',
	      'j\u0307': 'J',
	      '\u012F\u0307': '\u012E',
	      'i\u0307\u0300': '\xCC',
	      'i\u0307\u0301': '\xCD',
	      'i\u0307\u0303': '\u0128'
	    }
	  }

	  /**
	   * Upper case a string.
	   *
	   * @param  {String} str
	   * @return {String}
	   */
	};var upperCase = function upperCase(str, locale) {
	  var lang = LANGUAGES[locale];

	  str = str == null ? '' : String(str);

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) {
	      return lang.map[m];
	    });
	  }

	  return str.toUpperCase();
	};

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES$1 = {
	  tr: {
	    regexp: /\u0130|\u0049|\u0049\u0307/g,
	    map: {
	      '\u0130': 'i',
	      'I': '\u0131',
	      'I\u0307': 'i'
	    }
	  },
	  az: {
	    regexp: /[\u0130]/g,
	    map: {
	      '\u0130': 'i',
	      'I': '\u0131',
	      'I\u0307': 'i'
	    }
	  },
	  lt: {
	    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
	    map: {
	      'I': 'i\u0307',
	      'J': 'j\u0307',
	      '\u012E': '\u012F\u0307',
	      '\xCC': 'i\u0307\u0300',
	      '\xCD': 'i\u0307\u0301',
	      '\u0128': 'i\u0307\u0303'
	    }
	  }

	  /**
	   * Lowercase a string.
	   *
	   * @param  {String} str
	   * @return {String}
	   */
	};var lowerCase = function lowerCase(str, locale) {
	  var lang = LANGUAGES$1[locale];

	  str = str == null ? '' : String(str);

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) {
	      return lang.map[m];
	    });
	  }

	  return str.toLowerCase();
	};

	var nonWordRegexp = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g;

	var camelCaseRegexp = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g;

	var camelCaseUpperRegexp = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g;

	/**
	 * Sentence case a string.
	 *
	 * @param  {string} str
	 * @param  {string} locale
	 * @param  {string} replacement
	 * @return {string}
	 */
	var noCase = function noCase(str, locale, replacement) {
	  if (str == null) {
	    return '';
	  }

	  replacement = typeof replacement !== 'string' ? ' ' : replacement;

	  function replace(match, index, value) {
	    if (index === 0 || index === value.length - match.length) {
	      return '';
	    }

	    return replacement;
	  }

	  str = String(str)
	  // Support camel case ("camelCase" -> "camel Case").
	  .replace(camelCaseRegexp, '$1 $2')
	  // Support odd camel case ("CAMELCase" -> "CAMEL Case").
	  .replace(camelCaseUpperRegexp, '$1 $2')
	  // Remove all non-word characters and replace with a single space.
	  .replace(nonWordRegexp, replace);

	  // Lower case the entire string.
	  return lowerCase(str, locale);
	};

	/**
	 * Camel case a string.
	 *
	 * @param  {string} value
	 * @param  {string} [locale]
	 * @return {string}
	 */
	var camelCase = function camelCase(value, locale, mergeNumbers) {
	  var result = noCase(value, locale);

	  // Replace periods between numeric entities with an underscore.
	  if (!mergeNumbers) {
	    result = result.replace(/ (?=\d)/g, '_');
	  }

	  // Replace spaces between words with an upper cased character.
	  return result.replace(/ (.)/g, function (m, $1) {
	    return upperCase($1, locale);
	  });
	};

	var SvgIcon_1 = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.SvgIcon = undefined;

	    var _extends = Object.assign || function (target) {
	        for (var i = 1; i < arguments.length; i++) {
	            var source = arguments[i];for (var key in source) {
	                if (Object.prototype.hasOwnProperty.call(source, key)) {
	                    target[key] = source[key];
	                }
	            }
	        }return target;
	    };

	    var _react2 = _interopRequireDefault(React__default);

	    var _propTypes2 = _interopRequireDefault(propTypes);

	    var _camelCase2 = _interopRequireDefault(camelCase);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	    }

	    var walkChildren = function walkChildren(children) {
	        return children.map(function (child, idx) {
	            var name = child.name,
	                attribsMap = child.attribs,
	                _child$children = child.children,
	                gchildren = _child$children === undefined ? null : _child$children;

	            //fill, stroke

	            var attribs = Object.keys(attribsMap).filter(function (key) {
	                return key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none';
	            }).reduce(function (partial, key) {

	                partial[(0, _camelCase2.default)(key)] = attribsMap[key];
	                return partial;
	            }, {});
	            //special case, it has fill and stroke at the same time
	            var merge = {};
	            if (attribsMap.fill === 'none' && attribsMap.stroke) {
	                merge = { fill: 'none', stroke: 'currentColor' };
	            }
	            return (0, React__default.createElement)(name, _extends({ key: idx }, attribs, merge), gchildren === null ? gchildren : walkChildren(gchildren));
	        });
	    };

	    var SvgIcon = exports.SvgIcon = function SvgIcon(props) {
	        var size = props.size;
	        var _props$icon = props.icon,
	            children = _props$icon.children,
	            viewBox = _props$icon.viewBox,
	            _props$icon$attribs = _props$icon.attribs,
	            svgAttribs = _props$icon$attribs === undefined ? {} : _props$icon$attribs;

	        var camelCasedAttribs = Object.keys(svgAttribs).reduce(function (partial, key) {
	            partial[(0, _camelCase2.default)(key)] = svgAttribs[key];
	            return partial;
	        }, {});
	        return _react2.default.createElement('svg', _extends({ fill: 'currentColor', style: { display: 'inline-block', verticalAlign: 'middle' }, height: size, width: size, viewBox: viewBox
	        }, camelCasedAttribs), props.title && _react2.default.createElement('title', null, props.title), walkChildren(children));
	    };

	    SvgIcon.defaultProps = {
	        size: 16
	    };

	    SvgIcon.propTypes = {
	        icon: _propTypes2.default.object.isRequired,
	        size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	        title: _propTypes2.default.string
	    };

	    exports.default = SvgIcon;
	});

	unwrapExports(SvgIcon_1);
	var SvgIcon_2 = SvgIcon_1.SvgIcon;

	var Icon_1 = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.withBaseIcon = exports.Icon = undefined;

	    var _extends = Object.assign || function (target) {
	        for (var i = 1; i < arguments.length; i++) {
	            var source = arguments[i];for (var key in source) {
	                if (Object.prototype.hasOwnProperty.call(source, key)) {
	                    target[key] = source[key];
	                }
	            }
	        }return target;
	    };

	    var _react2 = _interopRequireDefault(React__default);

	    var _propTypes2 = _interopRequireDefault(propTypes);

	    var _SvgIcon2 = _interopRequireDefault(SvgIcon_1);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	    }

	    function _objectWithoutProperties(obj, keys) {
	        var target = {};for (var i in obj) {
	            if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	        }return target;
	    }

	    var Icon = function Icon(props) {
	        var style = props.style,
	            className = props.className,
	            icon = props.icon,
	            others = _objectWithoutProperties(props, ['style', 'className', 'icon']); //eslint-disable-line

	        return _react2.default.createElement('div', _extends({}, others, { style: _extends({ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }, style), className: className }), _react2.default.createElement(_SvgIcon2.default, { size: props.size, icon: props.icon, title: props.title }));
	    };

	    exports.Icon = Icon;
	    var withBaseIcon = exports.withBaseIcon = function withBaseIcon(defaultProps) {
	        return function (props) {
	            var propsToUse = _extends({}, defaultProps);

	            return _react2.default.createElement(Icon, _extends({}, propsToUse, props));
	        };
	    };

	    Icon.defaultProps = {
	        size: 16,
	        fill: 'currentColor'
	    };

	    Icon.propTypes = {
	        icon: _propTypes2.default.object.isRequired,
	        size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	        style: _propTypes2.default.object,
	        className: _propTypes2.default.string
	    };

	    exports.default = Icon;
	});

	unwrapExports(Icon_1);
	var Icon_2 = Icon_1.withBaseIcon;
	var Icon_3 = Icon_1.Icon;

	var horizontalCenter_1 = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.horizontalCenter = undefined;

	    var _react2 = _interopRequireDefault(React__default);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : { default: obj };
	    }

	    function _defineProperty(obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	        } else {
	            obj[key] = value;
	        }return obj;
	    }

	    var horizontalCenter = exports.horizontalCenter = function horizontalCenter(Component) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            _ref$rAlign = _ref.rAlign,
	            rAlign = _ref$rAlign === undefined ? false : _ref$rAlign,
	            _ref$space = _ref.space,
	            space = _ref$space === undefined ? 4 : _ref$space;

	        return function (props) {

	            return _react2.default.createElement(Component, props, _react2.default.createElement('div', { style: { display: 'inline-flex', justifyContent: 'center', 'alignItems': 'center' } }, React__default.Children.toArray(props.children).map(function (child, idx) {
	                var spacerField = rAlign ? 'paddingLeft' : 'paddingRight';
	                return _react2.default.createElement('div', { key: idx, style: _defineProperty({ display: 'inline-block' }, spacerField, space) }, child);
	            })));
	        };
	    };

	    exports.default = horizontalCenter;
	});

	unwrapExports(horizontalCenter_1);
	var horizontalCenter_2 = horizontalCenter_1.horizontalCenter;

	var reactIconsKit = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.horizontalCenter = exports.Icon = exports.withBaseIcon = undefined;

	  exports.withBaseIcon = Icon_1.withBaseIcon;
	  exports.Icon = Icon_1.Icon;
	  exports.horizontalCenter = horizontalCenter_1.horizontalCenter;
	  exports.default = Icon_1.Icon;
	});

	unwrapExports(reactIconsKit);
	var reactIconsKit_1 = reactIconsKit.horizontalCenter;
	var reactIconsKit_2 = reactIconsKit.Icon;
	var reactIconsKit_3 = reactIconsKit.withBaseIcon;

	var md = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var ic_3d_rotation = exports.ic_3d_rotation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z" } }] };

	  var ic_accessibility = exports.ic_accessibility = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" } }] };

	  var ic_accessible = exports.ic_accessible = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "4", "r": "2" } }, { "name": "path", "attribs": { "d": "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" } }] };

	  var ic_account_balance = exports.ic_account_balance = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" } }] };

	  var ic_account_balance_wallet = exports.ic_account_balance_wallet = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_account_box = exports.ic_account_box = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" } }] };

	  var ic_account_circle = exports.ic_account_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" } }] };

	  var ic_add_shopping_cart = exports.ic_add_shopping_cart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" } }] };

	  var ic_alarm = exports.ic_alarm = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_alarm_add = exports.ic_alarm_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z" } }] };

	  var ic_alarm_off = exports.ic_alarm_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z" } }] };

	  var ic_alarm_on = exports.ic_alarm_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z" } }] };

	  var ic_all_out = exports.ic_all_out = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z", "fill": "#010101" } }] };

	  var ic_android = exports.ic_android = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" } }] };

	  var ic_announcement = exports.ic_announcement = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" } }] };

	  var ic_aspect_ratio = exports.ic_aspect_ratio = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" } }] };

	  var ic_assessment = exports.ic_assessment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" } }] };

	  var ic_assignment = exports.ic_assignment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" } }] };

	  var ic_assignment_ind = exports.ic_assignment_ind = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" } }] };

	  var ic_assignment_late = exports.ic_assignment_late = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" } }] };

	  var ic_assignment_return = exports.ic_assignment_return = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z" } }] };

	  var ic_assignment_returned = exports.ic_assignment_returned = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z" } }] };

	  var ic_assignment_turned_in = exports.ic_assignment_turned_in = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" } }] };

	  var ic_autorenew = exports.ic_autorenew = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" } }] };

	  var ic_backup = exports.ic_backup = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" } }] };

	  var ic_book = exports.ic_book = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" } }] };

	  var ic_bookmark = exports.ic_bookmark = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_bookmark_border = exports.ic_bookmark_border = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" } }] };

	  var ic_bug_report = exports.ic_bug_report = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" } }] };

	  var ic_build = exports.ic_build = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" } }] };

	  var ic_cached = exports.ic_cached = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" } }] };

	  var ic_camera_enhance = exports.ic_camera_enhance = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z" } }] };

	  var ic_card_giftcard = exports.ic_card_giftcard = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" } }] };

	  var ic_card_membership = exports.ic_card_membership = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" } }] };

	  var ic_card_travel = exports.ic_card_travel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z" } }] };

	  var ic_change_history = exports.ic_change_history = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" } }] };

	  var ic_check_circle = exports.ic_check_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] };

	  var ic_chrome_reader_mode = exports.ic_chrome_reader_mode = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" } }] };

	  var ic_class = exports.ic_class = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" } }] };

	  var ic_code = exports.ic_code = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" } }] };

	  var ic_compare_arrows = exports.ic_compare_arrows = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" } }] };

	  var ic_copyright = exports.ic_copyright = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_credit_card = exports.ic_credit_card = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" } }] };

	  var ic_dashboard = exports.ic_dashboard = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" } }] };

	  var ic_date_range = exports.ic_date_range = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" } }] };

	  var ic_delete = exports.ic_delete = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" } }] };

	  var ic_delete_forever = exports.ic_delete_forever = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] };

	  var ic_description = exports.ic_description = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" } }] };

	  var ic_dns = exports.ic_dns = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_done = exports.ic_done = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" } }] };

	  var ic_done_all = exports.ic_done_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" } }] };

	  var ic_donut_large = exports.ic_donut_large = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z" } }] };

	  var ic_donut_small = exports.ic_donut_small = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z" } }] };

	  var ic_eject = exports.ic_eject = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 17h14v2H5zm7-12L5.33 15h13.34z" } }] };

	  var ic_euro_symbol = exports.ic_euro_symbol = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z" } }] };

	  var ic_event = exports.ic_event = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" } }] };

	  var ic_event_seat = exports.ic_event_seat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z" } }] };

	  var ic_exit_to_app = exports.ic_exit_to_app = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_explore = exports.ic_explore = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" } }] };

	  var ic_extension = exports.ic_extension = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" } }] };

	  var ic_face = exports.ic_face = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" } }] };

	  var ic_favorite = exports.ic_favorite = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" } }] };

	  var ic_favorite_border = exports.ic_favorite_border = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" } }] };

	  var ic_feedback = exports.ic_feedback = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" } }] };

	  var ic_find_in_page = exports.ic_find_in_page = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" } }] };

	  var ic_find_replace = exports.ic_find_replace = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] };

	  var ic_fingerprint = exports.ic_fingerprint = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" } }] };

	  var ic_flight_land = exports.ic_flight_land = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z" } }] };

	  var ic_flight_takeoff = exports.ic_flight_takeoff = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" } }] };

	  var ic_flip_to_back = exports.ic_flip_to_back = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z" } }] };

	  var ic_flip_to_front = exports.ic_flip_to_front = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z" } }] };

	  var ic_g_translate = exports.ic_g_translate = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z" } }] };

	  var ic_gavel = exports.ic_gavel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z" } }] };

	  var ic_get_app = exports.ic_get_app = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" } }] };

	  var ic_gif = exports.ic_gif = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z" } }] };

	  var ic_grade = exports.ic_grade = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" } }] };

	  var ic_group_work = exports.ic_group_work = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" } }] };

	  var ic_help = exports.ic_help = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" } }] };

	  var ic_help_outline = exports.ic_help_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" } }] };

	  var ic_highlight_off = exports.ic_highlight_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_history = exports.ic_history = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" } }] };

	  var ic_home = exports.ic_home = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" } }] };

	  var ic_hourglass_empty = exports.ic_hourglass_empty = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" } }] };

	  var ic_hourglass_full = exports.ic_hourglass_full = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" } }] };

	  var ic_http = exports.ic_http = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z" } }] };

	  var ic_https = exports.ic_https = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" } }] };

	  var ic_important_devices = exports.ic_important_devices = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" } }] };

	  var ic_info = exports.ic_info = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] };

	  var ic_info_outline = exports.ic_info_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" } }] };

	  var ic_input = exports.ic_input = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" } }] };

	  var ic_invert_colors = exports.ic_invert_colors = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z" } }] };

	  var ic_label = exports.ic_label = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" } }] };

	  var ic_label_outline = exports.ic_label_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" } }] };

	  var ic_language = exports.ic_language = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" } }] };

	  var ic_launch = exports.ic_launch = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" } }] };

	  var ic_lightbulb_outline = exports.ic_lightbulb_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" } }] };

	  var ic_line_style = exports.ic_line_style = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z" } }] };

	  var ic_line_weight = exports.ic_line_weight = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" } }] };

	  var ic_list = exports.ic_list = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" } }] };

	  var ic_lock = exports.ic_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" } }] };

	  var ic_lock_open = exports.ic_lock_open = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" } }] };

	  var ic_lock_outline = exports.ic_lock_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" } }] };

	  var ic_loyalty = exports.ic_loyalty = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z" } }] };

	  var ic_markunread_mailbox = exports.ic_markunread_mailbox = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" } }] };

	  var ic_motorcycle = exports.ic_motorcycle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" } }] };

	  var ic_note_add = exports.ic_note_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z" } }] };

	  var ic_offline_pin = exports.ic_offline_pin = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z" } }] };

	  var ic_opacity = exports.ic_opacity = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z" } }] };

	  var ic_open_in_browser = exports.ic_open_in_browser = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" } }] };

	  var ic_open_in_new = exports.ic_open_in_new = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" } }] };

	  var ic_open_with = exports.ic_open_with = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" } }] };

	  var ic_pageview = exports.ic_pageview = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z" } }] };

	  var ic_pan_tool = exports.ic_pan_tool = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" } }] };

	  var ic_payment = exports.ic_payment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" } }] };

	  var ic_perm_camera_mic = exports.ic_perm_camera_mic = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z" } }] };

	  var ic_perm_contact_calendar = exports.ic_perm_contact_calendar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" } }] };

	  var ic_perm_data_setting = exports.ic_perm_data_setting = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_perm_device_information = exports.ic_perm_device_information = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" } }] };

	  var ic_perm_identity = exports.ic_perm_identity = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" } }] };

	  var ic_perm_media = exports.ic_perm_media = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z" } }] };

	  var ic_perm_phone_msg = exports.ic_perm_phone_msg = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z" } }] };

	  var ic_perm_scan_wifi = exports.ic_perm_scan_wifi = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z" } }] };

	  var ic_pets = exports.ic_pets = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "4.5", "cy": "9.5", "r": "2.5" } }, { "name": "circle", "attribs": { "cx": "9", "cy": "5.5", "r": "2.5" } }, { "name": "circle", "attribs": { "cx": "15", "cy": "5.5", "r": "2.5" } }, { "name": "circle", "attribs": { "cx": "19.5", "cy": "9.5", "r": "2.5" } }, { "name": "path", "attribs": { "d": "M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" } }] };

	  var ic_picture_in_picture = exports.ic_picture_in_picture = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z" } }] };

	  var ic_picture_in_picture_alt = exports.ic_picture_in_picture_alt = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" } }] };

	  var ic_play_for_work = exports.ic_play_for_work = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z" } }] };

	  var ic_polymer = exports.ic_polymer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" } }] };

	  var ic_power_settings_new = exports.ic_power_settings_new = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" } }] };

	  var ic_pregnant_woman = exports.ic_pregnant_woman = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z" } }] };

	  var ic_print = exports.ic_print = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" } }] };

	  var ic_query_builder = exports.ic_query_builder = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" } }] };

	  var ic_question_answer = exports.ic_question_answer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" } }] };

	  var ic_receipt = exports.ic_receipt = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" } }] };

	  var ic_record_voice_over = exports.ic_record_voice_over = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "9", "cy": "9", "r": "4" } }, { "name": "path", "attribs": { "d": "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" } }] };

	  var ic_redeem = exports.ic_redeem = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" } }] };

	  var ic_remove_shopping_cart = exports.ic_remove_shopping_cart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_reorder = exports.ic_reorder = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" } }] };

	  var ic_report_problem = exports.ic_report_problem = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] };

	  var ic_restore = exports.ic_restore = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" } }] };

	  var ic_restore_page = exports.ic_restore_page = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z" } }] };

	  var ic_room = exports.ic_room = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" } }] };

	  var ic_rounded_corner = exports.ic_rounded_corner = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z" } }] };

	  var ic_rowing = exports.ic_rowing = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z" } }] };

	  var ic_schedule = exports.ic_schedule = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" } }] };

	  var ic_search = exports.ic_search = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" } }] };

	  var ic_settings = exports.ic_settings = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" } }] };

	  var ic_settings_applications = exports.ic_settings_applications = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z" } }] };

	  var ic_settings_backup_restore = exports.ic_settings_backup_restore = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" } }] };

	  var ic_settings_bluetooth = exports.ic_settings_bluetooth = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z" } }] };

	  var ic_settings_brightness = exports.ic_settings_brightness = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z" } }] };

	  var ic_settings_cell = exports.ic_settings_cell = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z" } }] };

	  var ic_settings_ethernet = exports.ic_settings_ethernet = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" } }] };

	  var ic_settings_input_antenna = exports.ic_settings_input_antenna = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z" } }] };

	  var ic_settings_input_component = exports.ic_settings_input_component = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z" } }] };

	  var ic_settings_input_composite = exports.ic_settings_input_composite = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z" } }] };

	  var ic_settings_input_hdmi = exports.ic_settings_input_hdmi = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z" } }] };

	  var ic_settings_input_svideo = exports.ic_settings_input_svideo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" } }] };

	  var ic_settings_overscan = exports.ic_settings_overscan = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" } }] };

	  var ic_settings_phone = exports.ic_settings_phone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z" } }] };

	  var ic_settings_power = exports.ic_settings_power = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z" } }] };

	  var ic_settings_remote = exports.ic_settings_remote = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z" } }] };

	  var ic_settings_voice = exports.ic_settings_voice = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z" } }] };

	  var ic_shop = exports.ic_shop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z" } }] };

	  var ic_shop_two = exports.ic_shop_two = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z" } }] };

	  var ic_shopping_basket = exports.ic_shopping_basket = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_shopping_cart = exports.ic_shopping_cart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_speaker_notes = exports.ic_speaker_notes = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z" } }] };

	  var ic_speaker_notes_off = exports.ic_speaker_notes_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z" } }] };

	  var ic_spellcheck = exports.ic_spellcheck = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z" } }] };

	  var ic_stars = exports.ic_stars = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" } }] };

	  var ic_store = exports.ic_store = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" } }] };

	  var ic_subject = exports.ic_subject = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" } }] };

	  var ic_supervisor_account = exports.ic_supervisor_account = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" } }] };

	  var ic_swap_horiz = exports.ic_swap_horiz = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" } }] };

	  var ic_swap_vert = exports.ic_swap_vert = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" } }] };

	  var ic_swap_vertical_circle = exports.ic_swap_vertical_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z" } }] };

	  var ic_system_update_alt = exports.ic_system_update_alt = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z" } }] };

	  var ic_tab = exports.ic_tab = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z" } }] };

	  var ic_tab_unselected = exports.ic_tab_unselected = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z" } }] };

	  var ic_theaters = exports.ic_theaters = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" } }] };

	  var ic_thumb_down = exports.ic_thumb_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" } }] };

	  var ic_thumb_up = exports.ic_thumb_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" } }] };

	  var ic_thumbs_up_down = exports.ic_thumbs_up_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z" } }] };

	  var ic_timeline = exports.ic_timeline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" } }] };

	  var ic_toc = exports.ic_toc = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" } }] };

	  var ic_today = exports.ic_today = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" } }] };

	  var ic_toll = exports.ic_toll = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z" } }] };

	  var ic_touch_app = exports.ic_touch_app = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" } }] };

	  var ic_track_changes = exports.ic_track_changes = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z" } }] };

	  var ic_translate = exports.ic_translate = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" } }] };

	  var ic_trending_down = exports.ic_trending_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" } }] };

	  var ic_trending_flat = exports.ic_trending_flat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 12l-4-4v3H3v2h15v3z" } }] };

	  var ic_trending_up = exports.ic_trending_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" } }] };

	  var ic_turned_in = exports.ic_turned_in = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_turned_in_not = exports.ic_turned_in_not = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" } }] };

	  var ic_update = exports.ic_update = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" } }] };

	  var ic_verified_user = exports.ic_verified_user = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" } }] };

	  var ic_view_agenda = exports.ic_view_agenda = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z" } }] };

	  var ic_view_array = exports.ic_view_array = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" } }] };

	  var ic_view_carousel = exports.ic_view_carousel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" } }] };

	  var ic_view_column = exports.ic_view_column = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" } }] };

	  var ic_view_day = exports.ic_view_day = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z" } }] };

	  var ic_view_headline = exports.ic_view_headline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" } }] };

	  var ic_view_list = exports.ic_view_list = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" } }] };

	  var ic_view_module = exports.ic_view_module = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" } }] };

	  var ic_view_quilt = exports.ic_view_quilt = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" } }] };

	  var ic_view_stream = exports.ic_view_stream = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 18h17v-6H4v6zM4 5v6h17V5H4z" } }] };

	  var ic_view_week = exports.ic_view_week = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z" } }] };

	  var ic_visibility = exports.ic_visibility = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" } }] };

	  var ic_visibility_off = exports.ic_visibility_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" } }] };

	  var ic_watch_later = exports.ic_watch_later = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" } }] };

	  var ic_work = exports.ic_work = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" } }] };

	  var ic_youtube_searched_for = exports.ic_youtube_searched_for = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z" } }] };

	  var ic_zoom_in = exports.ic_zoom_in = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z" } }] };

	  var ic_zoom_out = exports.ic_zoom_out = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" } }] };

	  var ic_add_alert = exports.ic_add_alert = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z" } }] };

	  var ic_error = exports.ic_error = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] };

	  var ic_error_outline = exports.ic_error_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] };

	  var ic_warning = exports.ic_warning = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] };

	  var ic_add_to_queue = exports.ic_add_to_queue = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z" } }] };

	  var ic_airplay = exports.ic_airplay = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_album = exports.ic_album = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" } }] };

	  var ic_art_track = exports.ic_art_track = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#010101", "d": "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" } }] };

	  var ic_av_timer = exports.ic_av_timer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" } }] };

	  var ic_branding_watermark = exports.ic_branding_watermark = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z" } }] };

	  var ic_call_to_action = exports.ic_call_to_action = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z" } }] };

	  var ic_closed_caption = exports.ic_closed_caption = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" } }] };

	  var ic_equalizer = exports.ic_equalizer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" } }] };

	  var ic_explicit = exports.ic_explicit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" } }] };

	  var ic_fast_forward = exports.ic_fast_forward = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" } }] };

	  var ic_fast_rewind = exports.ic_fast_rewind = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" } }] };

	  var ic_featured_play_list = exports.ic_featured_play_list = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z" } }] };

	  var ic_featured_video = exports.ic_featured_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z" } }] };

	  var ic_fiber_dvr = exports.ic_fiber_dvr = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z" } }] };

	  var ic_fiber_manual_record = exports.ic_fiber_manual_record = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "fill": "#010101", "cx": "12", "cy": "12", "r": "8" } }] };

	  var ic_fiber_new = exports.ic_fiber_new = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z" } }] };

	  var ic_fiber_pin = exports.ic_fiber_pin = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z" } }] };

	  var ic_fiber_smart_record = exports.ic_fiber_smart_record = { "viewBox": "0 0 24 24", "children": [{ "name": "g", "attribs": { "fill": "#010101" } }] };

	  var ic_forward_10 = exports.ic_forward_10 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z" } }] };

	  var ic_forward_30 = exports.ic_forward_30 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z" } }] };

	  var ic_forward_5 = exports.ic_forward_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z" } }] };

	  var ic_games = exports.ic_games = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" } }] };

	  var ic_hd = exports.ic_hd = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z" } }] };

	  var ic_hearing = exports.ic_hearing = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z" } }] };

	  var ic_high_quality = exports.ic_high_quality = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z" } }] };

	  var ic_library_add = exports.ic_library_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" } }] };

	  var ic_library_books = exports.ic_library_books = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" } }] };

	  var ic_library_music = exports.ic_library_music = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" } }] };

	  var ic_loop = exports.ic_loop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" } }] };

	  var ic_mic = exports.ic_mic = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" } }] };

	  var ic_mic_none = exports.ic_mic_none = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" } }] };

	  var ic_mic_off = exports.ic_mic_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" } }] };

	  var ic_movie = exports.ic_movie = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" } }] };

	  var ic_music_video = exports.ic_music_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" } }] };

	  var ic_new_releases = exports.ic_new_releases = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" } }] };

	  var ic_not_interested = exports.ic_not_interested = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" } }] };

	  var ic_note = exports.ic_note = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z" } }] };

	  var ic_pause = exports.ic_pause = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 19h4V5H6v14zm8-14v14h4V5h-4z" } }] };

	  var ic_pause_circle_filled = exports.ic_pause_circle_filled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" } }] };

	  var ic_pause_circle_outline = exports.ic_pause_circle_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" } }] };

	  var ic_play_arrow = exports.ic_play_arrow = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 5v14l11-7z" } }] };

	  var ic_play_circle_filled = exports.ic_play_circle_filled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" } }] };

	  var ic_play_circle_outline = exports.ic_play_circle_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_playlist_add = exports.ic_playlist_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" } }] };

	  var ic_playlist_add_check = exports.ic_playlist_add_check = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z" } }] };

	  var ic_playlist_play = exports.ic_playlist_play = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z" } }] };

	  var ic_queue = exports.ic_queue = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" } }] };

	  var ic_queue_music = exports.ic_queue_music = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" } }] };

	  var ic_queue_play_next = exports.ic_queue_play_next = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z" } }] };

	  var ic_radio = exports.ic_radio = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z" } }] };

	  var ic_recent_actors = exports.ic_recent_actors = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z" } }] };

	  var ic_remove_from_queue = exports.ic_remove_from_queue = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z" } }] };

	  var ic_repeat = exports.ic_repeat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" } }] };

	  var ic_repeat_one = exports.ic_repeat_one = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z" } }] };

	  var ic_replay_10 = exports.ic_replay_10 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z" } }] };

	  var ic_replay = exports.ic_replay = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" } }] };

	  var ic_replay_30 = exports.ic_replay_30 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z" } }] };

	  var ic_replay_5 = exports.ic_replay_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z" } }] };

	  var ic_shuffle = exports.ic_shuffle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" } }] };

	  var ic_skip_next = exports.ic_skip_next = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" } }] };

	  var ic_skip_previous = exports.ic_skip_previous = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 6h2v12H6zm3.5 6l8.5 6V6z" } }] };

	  var ic_slow_motion_video = exports.ic_slow_motion_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" } }] };

	  var ic_snooze = exports.ic_snooze = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z" } }] };

	  var ic_sort_by_alpha = exports.ic_sort_by_alpha = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z" } }] };

	  var ic_stop = exports.ic_stop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 6h12v12H6z" } }] };

	  var ic_subscriptions = exports.ic_subscriptions = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z" } }] };

	  var ic_subtitles = exports.ic_subtitles = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" } }] };

	  var ic_surround_sound = exports.ic_surround_sound = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_video_call = exports.ic_video_call = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" } }] };

	  var ic_video_label = exports.ic_video_label = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z" } }] };

	  var ic_video_library = exports.ic_video_library = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" } }] };

	  var ic_videocam = exports.ic_videocam = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" } }] };

	  var ic_videocam_off = exports.ic_videocam_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" } }] };

	  var ic_volume_down = exports.ic_volume_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" } }] };

	  var ic_volume_mute = exports.ic_volume_mute = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 9v6h4l5 5V4l-5 5H7z" } }] };

	  var ic_volume_off = exports.ic_volume_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" } }] };

	  var ic_volume_up = exports.ic_volume_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" } }] };

	  var ic_web = exports.ic_web = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" } }] };

	  var ic_web_asset = exports.ic_web_asset = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#010101", "d": "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" } }] };

	  var ic_business = exports.ic_business = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" } }] };

	  var ic_call = exports.ic_call = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" } }] };

	  var ic_call_end = exports.ic_call_end = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" } }] };

	  var ic_call_made = exports.ic_call_made = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" } }] };

	  var ic_call_merge = exports.ic_call_merge = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" } }] };

	  var ic_call_missed = exports.ic_call_missed = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z" } }] };

	  var ic_call_missed_outgoing = exports.ic_call_missed_outgoing = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" } }] };

	  var ic_call_received = exports.ic_call_received = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" } }] };

	  var ic_call_split = exports.ic_call_split = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z" } }] };

	  var ic_chat = exports.ic_chat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" } }] };

	  var ic_chat_bubble = exports.ic_chat_bubble = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" } }] };

	  var ic_chat_bubble_outline = exports.ic_chat_bubble_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" } }] };

	  var ic_clear_all = exports.ic_clear_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" } }] };

	  var ic_comment = exports.ic_comment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" } }] };

	  var ic_contact_mail = exports.ic_contact_mail = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z" } }] };

	  var ic_contact_phone = exports.ic_contact_phone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z" } }] };

	  var ic_contacts = exports.ic_contacts = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" } }] };

	  var ic_dialer_sip = exports.ic_dialer_sip = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" } }] };

	  var ic_dialpad = exports.ic_dialpad = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_email = exports.ic_email = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" } }] };

	  var ic_forum = exports.ic_forum = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" } }] };

	  var ic_import_contacts = exports.ic_import_contacts = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" } }] };

	  var ic_import_export = exports.ic_import_export = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" } }] };

	  var ic_invert_colors_off = exports.ic_invert_colors_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z" } }] };

	  var ic_live_help = exports.ic_live_help = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" } }] };

	  var ic_location_off = exports.ic_location_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z" } }] };

	  var ic_location_on = exports.ic_location_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" } }] };

	  var ic_mail_outline = exports.ic_mail_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" } }] };

	  var ic_message = exports.ic_message = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" } }] };

	  var ic_no_sim = exports.ic_no_sim = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z" } }] };

	  var ic_phone = exports.ic_phone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" } }] };

	  var ic_phonelink_erase = exports.ic_phonelink_erase = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" } }] };

	  var ic_phonelink_lock = exports.ic_phonelink_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z" } }] };

	  var ic_phonelink_ring = exports.ic_phonelink_ring = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z" } }] };

	  var ic_phonelink_setup = exports.ic_phonelink_setup = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" } }] };

	  var ic_portable_wifi_off = exports.ic_portable_wifi_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z" } }] };

	  var ic_present_to_all = exports.ic_present_to_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" } }] };

	  var ic_ring_volume = exports.ic_ring_volume = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z" } }] };

	  var ic_rss_feed = exports.ic_rss_feed = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "6.18", "cy": "17.82", "r": "2.18" } }, { "name": "path", "attribs": { "d": "M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" } }] };

	  var ic_screen_share = exports.ic_screen_share = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z" } }] };

	  var ic_speaker_phone = exports.ic_speaker_phone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z" } }] };

	  var ic_stay_current_landscape = exports.ic_stay_current_landscape = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" } }] };

	  var ic_stay_current_portrait = exports.ic_stay_current_portrait = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" } }] };

	  var ic_stay_primary_landscape = exports.ic_stay_primary_landscape = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" } }] };

	  var ic_stay_primary_portrait = exports.ic_stay_primary_portrait = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" } }] };

	  var ic_stop_screen_share = exports.ic_stop_screen_share = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z" } }] };

	  var ic_swap_calls = exports.ic_swap_calls = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z" } }] };

	  var ic_textsms = exports.ic_textsms = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" } }] };

	  var ic_voicemail = exports.ic_voicemail = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z" } }] };

	  var ic_vpn_key = exports.ic_vpn_key = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_add = exports.ic_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" } }] };

	  var ic_add_box = exports.ic_add_box = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" } }] };

	  var ic_add_circle = exports.ic_add_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" } }] };

	  var ic_add_circle_outline = exports.ic_add_circle_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_archive = exports.ic_archive = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" } }] };

	  var ic_backspace = exports.ic_backspace = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z" } }] };

	  var ic_block = exports.ic_block = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" } }] };

	  var ic_clear = exports.ic_clear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] };

	  var ic_content_copy = exports.ic_content_copy = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" } }] };

	  var ic_content_cut = exports.ic_content_cut = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" } }] };

	  var ic_content_paste = exports.ic_content_paste = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" } }] };

	  var ic_create = exports.ic_create = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] };

	  var ic_delete_sweep = exports.ic_delete_sweep = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" } }] };

	  var ic_drafts = exports.ic_drafts = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" } }] };

	  var ic_filter_list = exports.ic_filter_list = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" } }] };

	  var ic_flag = exports.ic_flag = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" } }] };

	  var ic_font_download = exports.ic_font_download = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" } }] };

	  var ic_forward = exports.ic_forward = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8V4l8 8-8 8v-4H4V8z" } }] };

	  var ic_gesture = exports.ic_gesture = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z" } }] };

	  var ic_inbox = exports.ic_inbox = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" } }] };

	  var ic_link = exports.ic_link = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" } }] };

	  var ic_low_priority = exports.ic_low_priority = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" } }] };

	  var ic_mail = exports.ic_mail = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" } }] };

	  var ic_markunread = exports.ic_markunread = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" } }] };

	  var ic_move_to_inbox = exports.ic_move_to_inbox = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z" } }] };

	  var ic_next_week = exports.ic_next_week = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#010101", "d": "M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z" } }] };

	  var ic_redo = exports.ic_redo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" } }] };

	  var ic_remove = exports.ic_remove = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 13H5v-2h14v2z" } }] };

	  var ic_remove_circle = exports.ic_remove_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" } }] };

	  var ic_remove_circle_outline = exports.ic_remove_circle_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_reply = exports.ic_reply = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" } }] };

	  var ic_reply_all = exports.ic_reply_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" } }] };

	  var ic_report = exports.ic_report = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" } }] };

	  var ic_save = exports.ic_save = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" } }] };

	  var ic_select_all = exports.ic_select_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" } }] };

	  var ic_send = exports.ic_send = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" } }] };

	  var ic_sort = exports.ic_sort = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" } }] };

	  var ic_text_format = exports.ic_text_format = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z" } }] };

	  var ic_unarchive = exports.ic_unarchive = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z" } }] };

	  var ic_undo = exports.ic_undo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" } }] };

	  var ic_weekend = exports.ic_weekend = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z", "fill": "#010101" } }] };

	  var ic_access_alarm = exports.ic_access_alarm = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_access_alarms = exports.ic_access_alarms = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" } }] };

	  var ic_access_time = exports.ic_access_time = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" } }] };

	  var ic_add_alarm = exports.ic_add_alarm = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z" } }] };

	  var ic_airplanemode_active = exports.ic_airplanemode_active = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.18 9" } }, { "name": "path", "attribs": { "d": "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" } }] };

	  var ic_airplanemode_inactive = exports.ic_airplanemode_inactive = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z" } }] };

	  var ic_battery_20 = exports.ic_battery_20 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" } }, { "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z" } }] };

	  var ic_battery_30 = exports.ic_battery_30 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z" } }, { "name": "path", "attribs": { "d": "M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z" } }] };

	  var ic_battery_50 = exports.ic_battery_50 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z" } }, { "name": "path", "attribs": { "d": "M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z" } }] };

	  var ic_battery_60 = exports.ic_battery_60 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z" } }, { "name": "path", "attribs": { "d": "M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z" } }] };

	  var ic_battery_80 = exports.ic_battery_80 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z" } }, { "name": "path", "attribs": { "d": "M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z" } }] };

	  var ic_battery_90 = exports.ic_battery_90 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z" } }, { "name": "path", "attribs": { "d": "M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z" } }] };

	  var ic_battery_alert = exports.ic_battery_alert = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z" } }] };

	  var ic_battery_charging_20 = exports.ic_battery_charging_20 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z" } }, { "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z" } }] };

	  var ic_battery_charging_30 = exports.ic_battery_charging_30 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z" } }, { "name": "path", "attribs": { "d": "M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z" } }] };

	  var ic_battery_charging_50 = exports.ic_battery_charging_50 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z" } }, { "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z" } }] };

	  var ic_battery_charging_60 = exports.ic_battery_charging_60 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z" } }, { "name": "path", "attribs": { "d": "M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z" } }] };

	  var ic_battery_charging_80 = exports.ic_battery_charging_80 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z" } }, { "name": "path", "attribs": { "d": "M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z" } }] };

	  var ic_battery_charging_90 = exports.ic_battery_charging_90 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z" } }, { "name": "path", "attribs": { "d": "M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z" } }] };

	  var ic_battery_charging_full = exports.ic_battery_charging_full = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z" } }] };

	  var ic_battery_full = exports.ic_battery_full = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" } }] };

	  var ic_battery_std = exports.ic_battery_std = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" } }] };

	  var ic_battery_unknown = exports.ic_battery_unknown = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z" } }] };

	  var ic_bluetooth = exports.ic_bluetooth = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" } }] };

	  var ic_bluetooth_connected = exports.ic_bluetooth_connected = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z" } }] };

	  var ic_bluetooth_disabled = exports.ic_bluetooth_disabled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z" } }] };

	  var ic_bluetooth_searching = exports.ic_bluetooth_searching = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z" } }] };

	  var ic_brightness_auto = exports.ic_brightness_auto = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z" } }] };

	  var ic_brightness_high = exports.ic_brightness_high = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" } }] };

	  var ic_brightness_low = exports.ic_brightness_low = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" } }] };

	  var ic_brightness_medium = exports.ic_brightness_medium = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" } }] };

	  var ic_data_usage = exports.ic_data_usage = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" } }] };

	  var ic_developer_mode = exports.ic_developer_mode = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" } }] };

	  var ic_devices = exports.ic_devices = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" } }] };

	  var ic_dvr = exports.ic_dvr = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z" } }] };

	  var ic_gps_fixed = exports.ic_gps_fixed = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_gps_not_fixed = exports.ic_gps_not_fixed = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_gps_off = exports.ic_gps_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z" } }] };

	  var ic_graphic_eq = exports.ic_graphic_eq = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" } }] };

	  var ic_location_disabled = exports.ic_location_disabled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z" } }] };

	  var ic_location_searching = exports.ic_location_searching = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_network_cell = exports.ic_network_cell = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M2 22h20V2z" } }, { "name": "path", "attribs": { "d": "M17 7L2 22h15z" } }] };

	  var ic_network_wifi = exports.ic_network_wifi = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }, { "name": "path", "attribs": { "d": "M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" } }] };

	  var ic_nfc = exports.ic_nfc = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z" } }] };

	  var ic_screen_lock_landscape = exports.ic_screen_lock_landscape = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z" } }] };

	  var ic_screen_lock_portrait = exports.ic_screen_lock_portrait = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" } }] };

	  var ic_screen_lock_rotation = exports.ic_screen_lock_rotation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z" } }] };

	  var ic_screen_rotation = exports.ic_screen_rotation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z" } }] };

	  var ic_sd_storage = exports.ic_sd_storage = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" } }] };

	  var ic_settings_system_daydream = exports.ic_settings_system_daydream = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" } }] };

	  var ic_signal_cellular_0_bar = exports.ic_signal_cellular_0_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M2 22h20V2z" } }] };

	  var ic_signal_cellular_1_bar = exports.ic_signal_cellular_1_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M2 22h20V2z" } }, { "name": "path", "attribs": { "d": "M12 12L2 22h10z" } }] };

	  var ic_signal_cellular_2_bar = exports.ic_signal_cellular_2_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M2 22h20V2z" } }, { "name": "path", "attribs": { "d": "M14 10L2 22h12z" } }] };

	  var ic_signal_cellular_3_bar = exports.ic_signal_cellular_3_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M2 22h20V2z" } }, { "name": "path", "attribs": { "d": "M17 7L2 22h15z" } }] };

	  var ic_signal_cellular_4_bar = exports.ic_signal_cellular_4_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 22h20V2z" } }] };

	  var ic_signal_cellular_connected_no_internet_0_bar = exports.ic_signal_cellular_connected_no_internet_0_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M22 8V2L2 22h16V8z" } }, { "name": "path", "attribs": { "d": "M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" } }] };

	  var ic_signal_cellular_connected_no_internet_1_bar = exports.ic_signal_cellular_connected_no_internet_1_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M22 8V2L2 22h16V8z" } }, { "name": "path", "attribs": { "d": "M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" } }] };

	  var ic_signal_cellular_connected_no_internet_2_bar = exports.ic_signal_cellular_connected_no_internet_2_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M22 8V2L2 22h16V8z" } }, { "name": "path", "attribs": { "d": "M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" } }] };

	  var ic_signal_cellular_connected_no_internet_3_bar = exports.ic_signal_cellular_connected_no_internet_3_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M22 8V2L2 22h16V8z" } }, { "name": "path", "attribs": { "d": "M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z" } }] };

	  var ic_signal_cellular_connected_no_internet_4_bar = exports.ic_signal_cellular_connected_no_internet_4_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" } }] };

	  var ic_signal_cellular_no_sim = exports.ic_signal_cellular_no_sim = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z" } }] };

	  var ic_signal_cellular_null = exports.ic_signal_cellular_null = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" } }] };

	  var ic_signal_cellular_off = exports.ic_signal_cellular_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z" } }] };

	  var ic_signal_wifi_0_bar = exports.ic_signal_wifi_0_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }] };

	  var ic_signal_wifi_1_bar = exports.ic_signal_wifi_1_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }, { "name": "path", "attribs": { "d": "M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z" } }] };

	  var ic_signal_wifi_1_bar_lock = exports.ic_signal_wifi_1_bar_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z" } }, { "name": "path", "attribs": { "d": "M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z", "opacity": ".3" } }, { "name": "path", "attribs": { "d": "M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z" } }] };

	  var ic_signal_wifi_2_bar = exports.ic_signal_wifi_2_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }, { "name": "path", "attribs": { "d": "M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z" } }] };

	  var ic_signal_wifi_2_bar_lock = exports.ic_signal_wifi_2_bar_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z" } }, { "name": "path", "attribs": { "d": "M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z", "opacity": ".3" } }, { "name": "path", "attribs": { "d": "M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z" } }] };

	  var ic_signal_wifi_3_bar = exports.ic_signal_wifi_3_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".3", "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }, { "name": "path", "attribs": { "d": "M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" } }] };

	  var ic_signal_wifi_3_bar_lock = exports.ic_signal_wifi_3_bar_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "opacity": ".3", "d": "M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z" } }, { "name": "path", "attribs": { "d": "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9" } }] };

	  var ic_signal_wifi_4_bar = exports.ic_signal_wifi_4_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" } }] };

	  var ic_signal_wifi_4_bar_lock = exports.ic_signal_wifi_4_bar_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z" } }] };

	  var ic_signal_wifi_off = exports.ic_signal_wifi_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z" } }] };

	  var ic_storage = exports.ic_storage = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" } }] };

	  var ic_usb = exports.ic_usb = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z" } }] };

	  var ic_wallpaper = exports.ic_wallpaper = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z" } }] };

	  var ic_widgets = exports.ic_widgets = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" } }] };

	  var ic_wifi_lock = exports.ic_wifi_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" } }] };

	  var ic_wifi_tethering = exports.ic_wifi_tethering = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z" } }] };

	  var ic_attach_file = exports.ic_attach_file = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" } }] };

	  var ic_attach_money = exports.ic_attach_money = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" } }] };

	  var ic_border_all = exports.ic_border_all = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" } }] };

	  var ic_border_bottom = exports.ic_border_bottom = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z" } }] };

	  var ic_border_clear = exports.ic_border_clear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z" } }] };

	  var ic_border_color = exports.ic_border_color = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z" } }, { "name": "path", "attribs": { "fill-opacity": ".36", "d": "M0 20h24v4H0z" } }] };

	  var ic_border_horizontal = exports.ic_border_horizontal = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z" } }] };

	  var ic_border_inner = exports.ic_border_inner = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z" } }] };

	  var ic_border_left = exports.ic_border_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z" } }] };

	  var ic_border_outer = exports.ic_border_outer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z" } }] };

	  var ic_border_right = exports.ic_border_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z" } }] };

	  var ic_border_style = exports.ic_border_style = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z" } }] };

	  var ic_border_top = exports.ic_border_top = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z" } }] };

	  var ic_border_vertical = exports.ic_border_vertical = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z" } }] };

	  var ic_bubble_chart = exports.ic_bubble_chart = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "7.2", "cy": "14.4", "r": "3.2" } }, { "name": "circle", "attribs": { "cx": "14.8", "cy": "18", "r": "2" } }, { "name": "circle", "attribs": { "cx": "15.2", "cy": "8.8", "r": "4.8" } }] };

	  var ic_drag_handle = exports.ic_drag_handle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 9H4v2h16V9zM4 15h16v-2H4v2z" } }] };

	  var ic_format_align_center = exports.ic_format_align_center = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" } }] };

	  var ic_format_align_justify = exports.ic_format_align_justify = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" } }] };

	  var ic_format_align_left = exports.ic_format_align_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" } }] };

	  var ic_format_align_right = exports.ic_format_align_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" } }] };

	  var ic_format_bold = exports.ic_format_bold = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" } }] };

	  var ic_format_clear = exports.ic_format_clear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z" } }] };

	  var ic_format_color_fill = exports.ic_format_color_fill = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z" } }, { "name": "path", "attribs": { "fill-opacity": ".36", "d": "M0 20h24v4H0z" } }] };

	  var ic_format_color_reset = exports.ic_format_color_reset = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z" } }] };

	  var ic_format_color_text = exports.ic_format_color_text = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill-opacity": ".36", "d": "M0 20h24v4H0z" } }, { "name": "path", "attribs": { "d": "M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" } }] };

	  var ic_format_indent_decrease = exports.ic_format_indent_decrease = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" } }] };

	  var ic_format_indent_increase = exports.ic_format_indent_increase = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z" } }] };

	  var ic_format_italic = exports.ic_format_italic = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" } }] };

	  var ic_format_line_spacing = exports.ic_format_line_spacing = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" } }] };

	  var ic_format_list_bulleted = exports.ic_format_list_bulleted = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" } }] };

	  var ic_format_list_numbered = exports.ic_format_list_numbered = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" } }] };

	  var ic_format_paint = exports.ic_format_paint = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" } }] };

	  var ic_format_quote = exports.ic_format_quote = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" } }] };

	  var ic_format_shapes = exports.ic_format_shapes = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z" } }] };

	  var ic_format_size = exports.ic_format_size = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" } }] };

	  var ic_format_strikethrough = exports.ic_format_strikethrough = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" } }] };

	  var ic_format_textdirection_l_to_r = exports.ic_format_textdirection_l_to_r = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z" } }] };

	  var ic_format_textdirection_r_to_l = exports.ic_format_textdirection_r_to_l = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" } }] };

	  var ic_format_underlined = exports.ic_format_underlined = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" } }] };

	  var ic_functions = exports.ic_functions = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" } }] };

	  var ic_highlight = exports.ic_highlight = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z" } }] };

	  var ic_insert_chart = exports.ic_insert_chart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" } }] };

	  var ic_insert_comment = exports.ic_insert_comment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" } }] };

	  var ic_insert_drive_file = exports.ic_insert_drive_file = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" } }] };

	  var ic_insert_emoticon = exports.ic_insert_emoticon = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" } }] };

	  var ic_insert_invitation = exports.ic_insert_invitation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" } }] };

	  var ic_insert_link = exports.ic_insert_link = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" } }] };

	  var ic_insert_photo = exports.ic_insert_photo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" } }] };

	  var ic_linear_scale = exports.ic_linear_scale = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" } }] };

	  var ic_merge_type = exports.ic_merge_type = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" } }] };

	  var ic_mode_comment = exports.ic_mode_comment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" } }] };

	  var ic_mode_edit = exports.ic_mode_edit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] };

	  var ic_monetization_on = exports.ic_monetization_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" } }] };

	  var ic_money_off = exports.ic_money_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z" } }] };

	  var ic_multiline_chart = exports.ic_multiline_chart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z" } }] };

	  var ic_pie_chart = exports.ic_pie_chart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" } }] };

	  var ic_pie_chart_outlined = exports.ic_pie_chart_outlined = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" } }] };

	  var ic_publish = exports.ic_publish = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" } }] };

	  var ic_short_text = exports.ic_short_text = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 9h16v2H4zm0 4h10v2H4z" } }] };

	  var ic_show_chart = exports.ic_show_chart = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" } }] };

	  var ic_space_bar = exports.ic_space_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 9v4H6V9H4v6h16V9z" } }] };

	  var ic_strikethrough_s = exports.ic_strikethrough_s = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#010101", "d": "M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z" } }] };

	  var ic_text_fields = exports.ic_text_fields = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" } }] };

	  var ic_title = exports.ic_title = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 4v3h5.5v12h3V7H19V4z" } }] };

	  var ic_vertical_align_bottom = exports.ic_vertical_align_bottom = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" } }] };

	  var ic_vertical_align_center = exports.ic_vertical_align_center = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" } }] };

	  var ic_vertical_align_top = exports.ic_vertical_align_top = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" } }] };

	  var ic_wrap_text = exports.ic_wrap_text = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" } }] };

	  var ic_attachment = exports.ic_attachment = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z" } }] };

	  var ic_cloud = exports.ic_cloud = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" } }] };

	  var ic_cloud_circle = exports.ic_cloud_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z" } }] };

	  var ic_cloud_done = exports.ic_cloud_done = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z" } }] };

	  var ic_cloud_download = exports.ic_cloud_download = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" } }] };

	  var ic_cloud_off = exports.ic_cloud_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z" } }] };

	  var ic_cloud_queue = exports.ic_cloud_queue = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" } }] };

	  var ic_cloud_upload = exports.ic_cloud_upload = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" } }] };

	  var ic_create_new_folder = exports.ic_create_new_folder = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" } }] };

	  var ic_file_download = exports.ic_file_download = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" } }] };

	  var ic_file_upload = exports.ic_file_upload = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" } }] };

	  var ic_folder = exports.ic_folder = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" } }] };

	  var ic_folder_open = exports.ic_folder_open = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" } }] };

	  var ic_folder_shared = exports.ic_folder_shared = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" } }] };

	  var ic_cast = exports.ic_cast = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" } }] };

	  var ic_cast_connected = exports.ic_cast_connected = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_computer = exports.ic_computer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" } }] };

	  var ic_desktop_mac = exports.ic_desktop_mac = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" } }] };

	  var ic_desktop_windows = exports.ic_desktop_windows = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" } }] };

	  var ic_developer_board = exports.ic_developer_board = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" } }] };

	  var ic_device_hub = exports.ic_device_hub = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" } }] };

	  var ic_devices_other = exports.ic_devices_other = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z" } }] };

	  var ic_dock = exports.ic_dock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" } }] };

	  var ic_gamepad = exports.ic_gamepad = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" } }] };

	  var ic_headset = exports.ic_headset = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" } }] };

	  var ic_headset_mic = exports.ic_headset_mic = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" } }] };

	  var ic_keyboard = exports.ic_keyboard = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" } }] };

	  var ic_keyboard_arrow_down = exports.ic_keyboard_arrow_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" } }] };

	  var ic_keyboard_arrow_left = exports.ic_keyboard_arrow_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" } }] };

	  var ic_keyboard_arrow_right = exports.ic_keyboard_arrow_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" } }] };

	  var ic_keyboard_arrow_up = exports.ic_keyboard_arrow_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" } }] };

	  var ic_keyboard_backspace = exports.ic_keyboard_backspace = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" } }] };

	  var ic_keyboard_capslock = exports.ic_keyboard_capslock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" } }] };

	  var ic_keyboard_hide = exports.ic_keyboard_hide = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z" } }] };

	  var ic_keyboard_return = exports.ic_keyboard_return = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" } }] };

	  var ic_keyboard_tab = exports.ic_keyboard_tab = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" } }] };

	  var ic_keyboard_voice = exports.ic_keyboard_voice = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" } }] };

	  var ic_laptop = exports.ic_laptop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" } }] };

	  var ic_laptop_chromebook = exports.ic_laptop_chromebook = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" } }] };

	  var ic_laptop_mac = exports.ic_laptop_mac = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" } }] };

	  var ic_laptop_windows = exports.ic_laptop_windows = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" } }] };

	  var ic_memory = exports.ic_memory = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" } }] };

	  var ic_mouse = exports.ic_mouse = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" } }] };

	  var ic_phone_android = exports.ic_phone_android = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" } }] };

	  var ic_phone_iphone = exports.ic_phone_iphone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" } }] };

	  var ic_phonelink = exports.ic_phonelink = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" } }] };

	  var ic_phonelink_off = exports.ic_phonelink_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" } }] };

	  var ic_power_input = exports.ic_power_input = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" } }] };

	  var ic_router = exports.ic_router = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z" } }] };

	  var ic_scanner = exports.ic_scanner = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z" } }] };

	  var ic_security = exports.ic_security = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" } }] };

	  var ic_sim_card = exports.ic_sim_card = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z" } }] };

	  var ic_smartphone = exports.ic_smartphone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" } }] };

	  var ic_speaker = exports.ic_speaker = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" } }] };

	  var ic_speaker_group = exports.ic_speaker_group = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" } }, { "name": "circle", "attribs": { "cx": "14", "cy": "12.5", "r": "2.5" } }, { "name": "path", "attribs": { "d": "M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z" } }] };

	  var ic_tablet = exports.ic_tablet = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z" } }] };

	  var ic_tablet_android = exports.ic_tablet_android = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z" } }] };

	  var ic_tablet_mac = exports.ic_tablet_mac = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" } }] };

	  var ic_toys = exports.ic_toys = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z" } }] };

	  var ic_tv = exports.ic_tv = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" } }] };

	  var ic_videogame_asset = exports.ic_videogame_asset = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_watch = exports.ic_watch = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" } }] };

	  var ic_add_a_photo = exports.ic_add_a_photo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z" } }] };

	  var ic_add_to_photos = exports.ic_add_to_photos = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" } }] };

	  var ic_adjust = exports.ic_adjust = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" } }] };

	  var ic_assistant = exports.ic_assistant = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z" } }] };

	  var ic_assistant_photo = exports.ic_assistant_photo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" } }] };

	  var ic_audiotrack = exports.ic_audiotrack = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" } }] };

	  var ic_blur_circular = exports.ic_blur_circular = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" } }] };

	  var ic_blur_linear = exports.ic_blur_linear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" } }] };

	  var ic_blur_off = exports.ic_blur_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" } }] };

	  var ic_blur_on = exports.ic_blur_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" } }] };

	  var ic_brightness_1 = exports.ic_brightness_1 = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "12", "r": "10" } }] };

	  var ic_brightness_2 = exports.ic_brightness_2 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" } }] };

	  var ic_brightness_3 = exports.ic_brightness_3 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" } }] };

	  var ic_brightness_4 = exports.ic_brightness_4 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" } }] };

	  var ic_brightness_5 = exports.ic_brightness_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" } }] };

	  var ic_brightness_6 = exports.ic_brightness_6 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" } }] };

	  var ic_brightness_7 = exports.ic_brightness_7 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" } }] };

	  var ic_broken_image = exports.ic_broken_image = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" } }] };

	  var ic_brush = exports.ic_brush = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" } }] };

	  var ic_burst_mode = exports.ic_burst_mode = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z" } }] };

	  var ic_camera = exports.ic_camera = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z" } }] };

	  var ic_camera_alt = exports.ic_camera_alt = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "12", "r": "3.2" } }, { "name": "path", "attribs": { "d": "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" } }] };

	  var ic_camera_front = exports.ic_camera_front = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z" } }] };

	  var ic_camera_rear = exports.ic_camera_rear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z" } }] };

	  var ic_camera_roll = exports.ic_camera_roll = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z" } }] };

	  var ic_center_focus_strong = exports.ic_center_focus_strong = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" } }] };

	  var ic_center_focus_weak = exports.ic_center_focus_weak = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_collections = exports.ic_collections = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" } }] };

	  var ic_collections_bookmark = exports.ic_collections_bookmark = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" } }] };

	  var ic_color_lens = exports.ic_color_lens = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_colorize = exports.ic_colorize = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z" } }] };

	  var ic_compare = exports.ic_compare = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_control_point = exports.ic_control_point = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_control_point_duplicate = exports.ic_control_point_duplicate = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" } }] };

	  var ic_crop_16_9 = exports.ic_crop_16_9 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" } }] };

	  var ic_crop = exports.ic_crop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" } }] };

	  var ic_crop_3_2 = exports.ic_crop_3_2 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" } }] };

	  var ic_crop_5_4 = exports.ic_crop_5_4 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" } }] };

	  var ic_crop_7_5 = exports.ic_crop_7_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" } }] };

	  var ic_crop_din = exports.ic_crop_din = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" } }] };

	  var ic_crop_free = exports.ic_crop_free = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_crop_landscape = exports.ic_crop_landscape = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" } }] };

	  var ic_crop_original = exports.ic_crop_original = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" } }] };

	  var ic_crop_portrait = exports.ic_crop_portrait = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z" } }] };

	  var ic_crop_rotate = exports.ic_crop_rotate = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z" } }] };

	  var ic_crop_square = exports.ic_crop_square = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" } }] };

	  var ic_dehaze = exports.ic_dehaze = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" } }] };

	  var ic_details = exports.ic_details = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" } }] };

	  var ic_edit = exports.ic_edit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] };

	  var ic_exposure = exports.ic_exposure = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z" } }] };

	  var ic_exposure_neg_1 = exports.ic_exposure_neg_1 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" } }] };

	  var ic_exposure_neg_2 = exports.ic_exposure_neg_2 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z" } }] };

	  var ic_exposure_plus_1 = exports.ic_exposure_plus_1 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z" } }] };

	  var ic_exposure_plus_2 = exports.ic_exposure_plus_2 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z" } }] };

	  var ic_exposure_zero = exports.ic_exposure_zero = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z" } }] };

	  var ic_filter_1 = exports.ic_filter_1 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" } }] };

	  var ic_filter = exports.ic_filter = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" } }] };

	  var ic_filter_2 = exports.ic_filter_2 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z" } }] };

	  var ic_filter_3 = exports.ic_filter_3 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z" } }] };

	  var ic_filter_4 = exports.ic_filter_4 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" } }] };

	  var ic_filter_5 = exports.ic_filter_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z" } }] };

	  var ic_filter_6 = exports.ic_filter_6 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z" } }] };

	  var ic_filter_7 = exports.ic_filter_7 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z" } }] };

	  var ic_filter_8 = exports.ic_filter_8 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z" } }] };

	  var ic_filter_9 = exports.ic_filter_9 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z" } }] };

	  var ic_filter_9_plus = exports.ic_filter_9_plus = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z" } }] };

	  var ic_filter_b_and_w = exports.ic_filter_b_and_w = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z" } }] };

	  var ic_filter_center_focus = exports.ic_filter_center_focus = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" } }] };

	  var ic_filter_drama = exports.ic_filter_drama = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z" } }] };

	  var ic_filter_frames = exports.ic_filter_frames = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12" } }] };

	  var ic_filter_hdr = exports.ic_filter_hdr = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" } }] };

	  var ic_filter_none = exports.ic_filter_none = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" } }] };

	  var ic_filter_tilt_shift = exports.ic_filter_tilt_shift = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z" } }] };

	  var ic_filter_vintage = exports.ic_filter_vintage = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" } }] };

	  var ic_flare = exports.ic_flare = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z" } }] };

	  var ic_flash_auto = exports.ic_flash_auto = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z" } }] };

	  var ic_flash_off = exports.ic_flash_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z" } }] };

	  var ic_flash_on = exports.ic_flash_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 2v11h3v9l7-12h-4l4-8z" } }] };

	  var ic_flip = exports.ic_flip = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z" } }] };

	  var ic_gradient = exports.ic_gradient = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z" } }] };

	  var ic_grain = exports.ic_grain = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_grid_off = exports.ic_grid_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z" } }] };

	  var ic_grid_on = exports.ic_grid_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" } }] };

	  var ic_hdr_off = exports.ic_hdr_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z" } }] };

	  var ic_hdr_on = exports.ic_hdr_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z" } }] };

	  var ic_hdr_strong = exports.ic_hdr_strong = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_hdr_weak = exports.ic_hdr_weak = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" } }] };

	  var ic_healing = exports.ic_healing = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z" } }] };

	  var ic_image = exports.ic_image = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" } }] };

	  var ic_image_aspect_ratio = exports.ic_image_aspect_ratio = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" } }] };

	  var ic_iso = exports.ic_iso = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z" } }] };

	  var ic_landscape = exports.ic_landscape = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" } }] };

	  var ic_leak_add = exports.ic_leak_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z" } }] };

	  var ic_leak_remove = exports.ic_leak_remove = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z" } }] };

	  var ic_lens = exports.ic_lens = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" } }] };

	  var ic_linked_camera = exports.ic_linked_camera = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "14", "r": "3.2" } }, { "name": "path", "attribs": { "d": "M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6" } }, { "name": "path", "attribs": { "d": "M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" } }] };

	  var ic_looks = exports.ic_looks = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z" } }] };

	  var ic_looks_3 = exports.ic_looks_3 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z" } }] };

	  var ic_looks_4 = exports.ic_looks_4 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z" } }] };

	  var ic_looks_5 = exports.ic_looks_5 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z" } }] };

	  var ic_looks_6 = exports.ic_looks_6 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z" } }] };

	  var ic_looks_one = exports.ic_looks_one = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" } }] };

	  var ic_looks_two = exports.ic_looks_two = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z" } }] };

	  var ic_loupe = exports.ic_loupe = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_monochrome_photos = exports.ic_monochrome_photos = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z" } }] };

	  var ic_movie_creation = exports.ic_movie_creation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" } }] };

	  var ic_movie_filter = exports.ic_movie_filter = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z" } }] };

	  var ic_music_note = exports.ic_music_note = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" } }] };

	  var ic_nature = exports.ic_nature = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z" } }] };

	  var ic_nature_people = exports.ic_nature_people = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z" } }] };

	  var ic_navigate_before = exports.ic_navigate_before = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" } }] };

	  var ic_navigate_next = exports.ic_navigate_next = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" } }] };

	  var ic_palette = exports.ic_palette = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_panorama = exports.ic_panorama = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" } }] };

	  var ic_panorama_fish_eye = exports.ic_panorama_fish_eye = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" } }] };

	  var ic_panorama_horizontal = exports.ic_panorama_horizontal = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z" } }] };

	  var ic_panorama_vertical = exports.ic_panorama_vertical = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z" } }] };

	  var ic_panorama_wide_angle = exports.ic_panorama_wide_angle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z" } }] };

	  var ic_photo = exports.ic_photo = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" } }] };

	  var ic_photo_album = exports.ic_photo_album = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z" } }] };

	  var ic_photo_camera = exports.ic_photo_camera = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "12", "r": "3.2" } }, { "name": "path", "attribs": { "d": "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" } }] };

	  var ic_photo_filter = exports.ic_photo_filter = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z" } }] };

	  var ic_photo_library = exports.ic_photo_library = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" } }] };

	  var ic_photo_size_select_actual = exports.ic_photo_size_select_actual = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" } }] };

	  var ic_photo_size_select_large = exports.ic_photo_size_select_large = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z" } }] };

	  var ic_photo_size_select_small = exports.ic_photo_size_select_small = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z" } }] };

	  var ic_picture_as_pdf = exports.ic_picture_as_pdf = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" } }] };

	  var ic_portrait = exports.ic_portrait = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" } }] };

	  var ic_remove_red_eye = exports.ic_remove_red_eye = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" } }] };

	  var ic_rotate_90_degrees_ccw = exports.ic_rotate_90_degrees_ccw = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z" } }] };

	  var ic_rotate_left = exports.ic_rotate_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z" } }] };

	  var ic_rotate_right = exports.ic_rotate_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z" } }] };

	  var ic_slideshow = exports.ic_slideshow = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" } }] };

	  var ic_straighten = exports.ic_straighten = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" } }] };

	  var ic_style = exports.ic_style = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" } }] };

	  var ic_switch_camera = exports.ic_switch_camera = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z" } }] };

	  var ic_switch_video = exports.ic_switch_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z" } }] };

	  var ic_tag_faces = exports.ic_tag_faces = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" } }] };

	  var ic_texture = exports.ic_texture = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z" } }] };

	  var ic_timelapse = exports.ic_timelapse = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] };

	  var ic_timer_10 = exports.ic_timer_10 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z" } }] };

	  var ic_timer = exports.ic_timer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_timer_3 = exports.ic_timer_3 = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z" } }] };

	  var ic_timer_off = exports.ic_timer_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z" } }] };

	  var ic_tonality = exports.ic_tonality = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" } }] };

	  var ic_transform = exports.ic_transform = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z" } }] };

	  var ic_tune = exports.ic_tune = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" } }] };

	  var ic_view_comfy = exports.ic_view_comfy = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z" } }] };

	  var ic_view_compact = exports.ic_view_compact = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" } }] };

	  var ic_vignette = exports.ic_vignette = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z" } }] };

	  var ic_wb_auto = exports.ic_wb_auto = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z" } }] };

	  var ic_wb_cloudy = exports.ic_wb_cloudy = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" } }] };

	  var ic_wb_incandescent = exports.ic_wb_incandescent = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z" } }] };

	  var ic_wb_iridescent = exports.ic_wb_iridescent = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z" } }] };

	  var ic_wb_sunny = exports.ic_wb_sunny = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" } }] };

	  var ic_add_location = exports.ic_add_location = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" } }] };

	  var ic_beenhere = exports.ic_beenhere = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z" } }] };

	  var ic_directions = exports.ic_directions = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" } }] };

	  var ic_directions_bike = exports.ic_directions_bike = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" } }] };

	  var ic_directions_boat = exports.ic_directions_boat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" } }] };

	  var ic_directions_bus = exports.ic_directions_bus = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" } }] };

	  var ic_directions_car = exports.ic_directions_car = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" } }] };

	  var ic_directions_railway = exports.ic_directions_railway = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z" } }] };

	  var ic_directions_run = exports.ic_directions_run = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" } }] };

	  var ic_directions_subway = exports.ic_directions_subway = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z" } }] };

	  var ic_directions_transit = exports.ic_directions_transit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z" } }] };

	  var ic_directions_walk = exports.ic_directions_walk = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" } }] };

	  var ic_edit_location = exports.ic_edit_location = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z" } }] };

	  var ic_ev_station = exports.ic_ev_station = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z" } }] };

	  var ic_flight = exports.ic_flight = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10.18 9" } }, { "name": "path", "attribs": { "d": "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" } }] };

	  var ic_hotel = exports.ic_hotel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" } }] };

	  var ic_layers = exports.ic_layers = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" } }] };

	  var ic_layers_clear = exports.ic_layers_clear = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" } }] };

	  var ic_local_activity = exports.ic_local_activity = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z" } }] };

	  var ic_local_airport = exports.ic_local_airport = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" } }] };

	  var ic_local_atm = exports.ic_local_atm = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z" } }] };

	  var ic_local_bar = exports.ic_local_bar = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" } }] };

	  var ic_local_cafe = exports.ic_local_cafe = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" } }] };

	  var ic_local_car_wash = exports.ic_local_car_wash = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z" } }] };

	  var ic_local_convenience_store = exports.ic_local_convenience_store = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z" } }] };

	  var ic_local_dining = exports.ic_local_dining = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" } }] };

	  var ic_local_drink = exports.ic_local_drink = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z" } }] };

	  var ic_local_florist = exports.ic_local_florist = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z" } }] };

	  var ic_local_gas_station = exports.ic_local_gas_station = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" } }] };

	  var ic_local_grocery_store = exports.ic_local_grocery_store = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_local_hospital = exports.ic_local_hospital = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" } }] };

	  var ic_local_hotel = exports.ic_local_hotel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" } }] };

	  var ic_local_laundry_service = exports.ic_local_laundry_service = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" } }] };

	  var ic_local_library = exports.ic_local_library = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" } }] };

	  var ic_local_mall = exports.ic_local_mall = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" } }] };

	  var ic_local_movies = exports.ic_local_movies = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" } }] };

	  var ic_local_offer = exports.ic_local_offer = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" } }] };

	  var ic_local_parking = exports.ic_local_parking = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" } }] };

	  var ic_local_pharmacy = exports.ic_local_pharmacy = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" } }] };

	  var ic_local_phone = exports.ic_local_phone = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" } }] };

	  var ic_local_pizza = exports.ic_local_pizza = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_local_play = exports.ic_local_play = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z" } }] };

	  var ic_local_post_office = exports.ic_local_post_office = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" } }] };

	  var ic_local_printshop = exports.ic_local_printshop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" } }] };

	  var ic_local_see = exports.ic_local_see = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "12", "r": "3.2" } }, { "name": "path", "attribs": { "d": "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" } }] };

	  var ic_local_shipping = exports.ic_local_shipping = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_local_taxi = exports.ic_local_taxi = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" } }] };

	  var ic_map = exports.ic_map = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" } }] };

	  var ic_my_location = exports.ic_my_location = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" } }] };

	  var ic_navigation = exports.ic_navigation = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" } }] };

	  var ic_near_me = exports.ic_near_me = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" } }] };

	  var ic_person_pin = exports.ic_person_pin = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z" } }] };

	  var ic_person_pin_circle = exports.ic_person_pin_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z" } }] };

	  var ic_pin_drop = exports.ic_pin_drop = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z" } }] };

	  var ic_place = exports.ic_place = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" } }] };

	  var ic_rate_review = exports.ic_rate_review = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" } }] };

	  var ic_restaurant = exports.ic_restaurant = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" } }] };

	  var ic_restaurant_menu = exports.ic_restaurant_menu = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" } }] };

	  var ic_satellite = exports.ic_satellite = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z" } }] };

	  var ic_store_mall_directory = exports.ic_store_mall_directory = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" } }] };

	  var ic_streetview = exports.ic_streetview = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z" } }, { "name": "circle", "attribs": { "cx": "18", "cy": "6", "r": "5" } }, { "name": "path", "attribs": { "d": "M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z" } }] };

	  var ic_subway = exports.ic_subway = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "15.5", "cy": "16", "r": "1" } }, { "name": "circle", "attribs": { "cx": "8.5", "cy": "16", "r": "1" } }, { "name": "path", "attribs": { "d": "M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z" } }] };

	  var ic_terrain = exports.ic_terrain = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" } }] };

	  var ic_traffic = exports.ic_traffic = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z" } }] };

	  var ic_train = exports.ic_train = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_tram = exports.ic_tram = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z" } }] };

	  var ic_transfer_within_a_station = exports.ic_transfer_within_a_station = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75" } }] };

	  var ic_zoom_out_map = exports.ic_zoom_out_map = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" } }] };

	  var ic_apps = exports.ic_apps = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" } }] };

	  var ic_arrow_back = exports.ic_arrow_back = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" } }] };

	  var ic_arrow_downward = exports.ic_arrow_downward = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#010101", "d": "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" } }] };

	  var ic_arrow_drop_down = exports.ic_arrow_drop_down = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 10l5 5 5-5z" } }] };

	  var ic_arrow_drop_down_circle = exports.ic_arrow_drop_down_circle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" } }] };

	  var ic_arrow_drop_up = exports.ic_arrow_drop_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 14l5-5 5 5z" } }] };

	  var ic_arrow_forward = exports.ic_arrow_forward = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" } }] };

	  var ic_arrow_upward = exports.ic_arrow_upward = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" } }] };

	  var ic_cancel = exports.ic_cancel = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" } }] };

	  var ic_check = exports.ic_check = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" } }] };

	  var ic_chevron_left = exports.ic_chevron_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" } }] };

	  var ic_chevron_right = exports.ic_chevron_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" } }] };

	  var ic_close = exports.ic_close = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] };

	  var ic_expand_less = exports.ic_expand_less = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" } }] };

	  var ic_expand_more = exports.ic_expand_more = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" } }] };

	  var ic_first_page = exports.ic_first_page = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" } }] };

	  var ic_fullscreen = exports.ic_fullscreen = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" } }] };

	  var ic_fullscreen_exit = exports.ic_fullscreen_exit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" } }] };

	  var ic_last_page = exports.ic_last_page = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" } }] };

	  var ic_menu = exports.ic_menu = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" } }] };

	  var ic_more_horiz = exports.ic_more_horiz = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_more_vert = exports.ic_more_vert = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] };

	  var ic_refresh = exports.ic_refresh = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" } }] };

	  var ic_subdirectory_arrow_left = exports.ic_subdirectory_arrow_left = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" } }] };

	  var ic_subdirectory_arrow_right = exports.ic_subdirectory_arrow_right = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" } }] };

	  var ic_unfold_less = exports.ic_unfold_less = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" } }] };

	  var ic_unfold_more = exports.ic_unfold_more = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" } }] };

	  var ic_adb = exports.ic_adb = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" } }] };

	  var ic_airline_seat_flat = exports.ic_airline_seat_flat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9c1.16-1.19 1.14-3.08-.04-4.24-1.19-1.16-3.08-1.14-4.24.04-1.16 1.19-1.14 3.08.04 4.24 1.19 1.16 3.08 1.14 4.24-.04z" } }] };

	  var ic_airline_seat_flat_angled = exports.ic_airline_seat_flat_angled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09c2.1.76 3.18 3.06 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94c1.49-.72 2.12-2.51 1.41-4C7.99 4.71 6.2 4.08 4.7 4.8c-1.49.71-2.12 2.5-1.4 4 .71 1.49 2.5 2.12 4 1.4z" } }] };

	  var ic_airline_seat_individual_suite = exports.ic_airline_seat_individual_suite = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" } }] };

	  var ic_airline_seat_legroom_extra = exports.ic_airline_seat_legroom_extra = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z" } }] };

	  var ic_airline_seat_legroom_normal = exports.ic_airline_seat_legroom_normal = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" } }] };

	  var ic_airline_seat_legroom_reduced = exports.ic_airline_seat_legroom_reduced = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z" } }] };

	  var ic_airline_seat_recline_extra = exports.ic_airline_seat_recline_extra = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76C4.37 19.2 6.47 21 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38-.32-.09-.66-.12-.99-.06h-.02c-1.23.22-2.05 1.39-1.84 2.61l1.35 5.92C7.16 16.98 8.39 18 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z" } }] };

	  var ic_airline_seat_recline_normal = exports.ic_airline_seat_recline_normal = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z" } }] };

	  var ic_bluetooth_audio = exports.ic_bluetooth_audio = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z" } }] };

	  var ic_confirmation_number = exports.ic_confirmation_number = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z" } }] };

	  var ic_disc_full = exports.ic_disc_full = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" } }] };

	  var ic_do_not_disturb = exports.ic_do_not_disturb = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" } }] };

	  var ic_do_not_disturb_alt = exports.ic_do_not_disturb_alt = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z" } }] };

	  var ic_do_not_disturb_off = exports.ic_do_not_disturb_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z" } }] };

	  var ic_do_not_disturb_on = exports.ic_do_not_disturb_on = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" } }] };

	  var ic_drive_eta = exports.ic_drive_eta = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z" } }] };

	  var ic_enhanced_encryption = exports.ic_enhanced_encryption = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z" } }] };

	  var ic_event_available = exports.ic_event_available = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" } }] };

	  var ic_event_busy = exports.ic_event_busy = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" } }] };

	  var ic_event_note = exports.ic_event_note = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z" } }] };

	  var ic_folder_special = exports.ic_folder_special = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z" } }] };

	  var ic_live_tv = exports.ic_live_tv = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" } }] };

	  var ic_mms = exports.ic_mms = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z" } }] };

	  var ic_more = exports.ic_more = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" } }] };

	  var ic_network_check = exports.ic_network_check = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z" } }] };

	  var ic_network_locked = exports.ic_network_locked = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z" } }] };

	  var ic_no_encryption = exports.ic_no_encryption = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z" } }] };

	  var ic_ondemand_video = exports.ic_ondemand_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" } }] };

	  var ic_personal_video = exports.ic_personal_video = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" } }] };

	  var ic_phone_bluetooth_speaker = exports.ic_phone_bluetooth_speaker = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" } }] };

	  var ic_phone_forwarded = exports.ic_phone_forwarded = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" } }] };

	  var ic_phone_in_talk = exports.ic_phone_in_talk = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" } }] };

	  var ic_phone_locked = exports.ic_phone_locked = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z" } }] };

	  var ic_phone_missed = exports.ic_phone_missed = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z" } }] };

	  var ic_phone_paused = exports.ic_phone_paused = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z" } }] };

	  var ic_power = exports.ic_power = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z" } }] };

	  var ic_priority_high = exports.ic_priority_high = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "12", "cy": "19", "r": "2" } }, { "name": "path", "attribs": { "d": "M10 3h4v12h-4z" } }] };

	  var ic_rv_hookup = exports.ic_rv_hookup = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z" } }] };

	  var ic_sd_card = exports.ic_sd_card = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z" } }] };

	  var ic_sim_card_alert = exports.ic_sim_card_alert = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z" } }] };

	  var ic_sms = exports.ic_sms = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" } }] };

	  var ic_sms_failed = exports.ic_sms_failed = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" } }] };

	  var ic_sync = exports.ic_sync = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" } }] };

	  var ic_sync_disabled = exports.ic_sync_disabled = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z" } }] };

	  var ic_sync_problem = exports.ic_sync_problem = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z" } }] };

	  var ic_system_update = exports.ic_system_update = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z" } }] };

	  var ic_tap_and_play = exports.ic_tap_and_play = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z" } }] };

	  var ic_time_to_leave = exports.ic_time_to_leave = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z" } }] };

	  var ic_vibration = exports.ic_vibration = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z" } }] };

	  var ic_voice_chat = exports.ic_voice_chat = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z" } }] };

	  var ic_vpn_lock = exports.ic_vpn_lock = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z" } }] };

	  var ic_wc = exports.ic_wc = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" } }] };

	  var ic_wifi = exports.ic_wifi = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" } }] };

	  var ic_ac_unit = exports.ic_ac_unit = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z" } }] };

	  var ic_airport_shuttle = exports.ic_airport_shuttle = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z" } }] };

	  var ic_all_inclusive = exports.ic_all_inclusive = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" } }] };

	  var ic_beach_access = exports.ic_beach_access = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z" } }] };

	  var ic_business_center = exports.ic_business_center = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" } }] };

	  var ic_casino = exports.ic_casino = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z" } }] };

	  var ic_child_care = exports.ic_child_care = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "14.5", "cy": "10.5", "r": "1.25" } }, { "name": "circle", "attribs": { "cx": "9.5", "cy": "10.5", "r": "1.25" } }, { "name": "path", "attribs": { "d": "M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z" } }] };

	  var ic_child_friendly = exports.ic_child_friendly = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z" } }] };

	  var ic_fitness_center = exports.ic_fitness_center = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" } }] };

	  var ic_free_breakfast = exports.ic_free_breakfast = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" } }] };

	  var ic_golf_course = exports.ic_golf_course = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "19.5", "cy": "19.5", "r": "1.5" } }, { "name": "path", "attribs": { "d": "M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" } }] };

	  var ic_hot_tub = exports.ic_hot_tub = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "7", "cy": "6", "r": "2" } }, { "name": "path", "attribs": { "d": "M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z" } }] };

	  var ic_kitchen = exports.ic_kitchen = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z" } }] };

	  var ic_pool = exports.ic_pool = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z" } }, { "name": "circle", "attribs": { "cx": "16.5", "cy": "5.5", "r": "2.5" } }] };

	  var ic_room_service = exports.ic_room_service = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" } }] };

	  var ic_smoke_free = exports.ic_smoke_free = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35zm2.5 7.23V13h-2.93z" } }] };

	  var ic_smoking_rooms = exports.ic_smoking_rooms = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z" } }] };

	  var ic_spa = exports.ic_spa = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "fill": "#607D8B", "d": "M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z" } }, { "name": "path", "attribs": { "d": "M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z" } }] };

	  var ic_cake = exports.ic_cake = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z" } }] };

	  var ic_domain = exports.ic_domain = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" } }] };

	  var ic_group = exports.ic_group = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" } }] };

	  var ic_group_add = exports.ic_group_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z" } }] };

	  var ic_location_city = exports.ic_location_city = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" } }] };

	  var ic_mood = exports.ic_mood = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" } }] };

	  var ic_mood_bad = exports.ic_mood_bad = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" } }] };

	  var ic_notifications = exports.ic_notifications = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" } }] };

	  var ic_notifications_active = exports.ic_notifications_active = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" } }] };

	  var ic_notifications_none = exports.ic_notifications_none = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" } }] };

	  var ic_notifications_off = exports.ic_notifications_off = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z" } }] };

	  var ic_notifications_paused = exports.ic_notifications_paused = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z" } }] };

	  var ic_pages = exports.ic_pages = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_party_mode = exports.ic_party_mode = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z" } }] };

	  var ic_people = exports.ic_people = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" } }] };

	  var ic_people_outline = exports.ic_people_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" } }] };

	  var ic_person = exports.ic_person = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" } }] };

	  var ic_person_add = exports.ic_person_add = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" } }] };

	  var ic_person_outline = exports.ic_person_outline = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" } }] };

	  var ic_plus_one = exports.ic_plus_one = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z" } }] };

	  var ic_poll = exports.ic_poll = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" } }] };

	  var ic_public = exports.ic_public = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" } }] };

	  var ic_school = exports.ic_school = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" } }] };

	  var ic_sentiment_dissatisfied = exports.ic_sentiment_dissatisfied = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "15.5", "cy": "9.5", "r": "1.5" } }, { "name": "circle", "attribs": { "cx": "8.5", "cy": "9.5", "r": "1.5" } }, { "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z" } }] };

	  var ic_sentiment_neutral = exports.ic_sentiment_neutral = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M9 14h6v1.5H9z" } }, { "name": "circle", "attribs": { "cx": "15.5", "cy": "9.5", "r": "1.5" } }, { "name": "circle", "attribs": { "cx": "8.5", "cy": "9.5", "r": "1.5" } }, { "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] };

	  var ic_sentiment_satisfied = exports.ic_sentiment_satisfied = { "viewBox": "0 0 24 24", "children": [{ "name": "circle", "attribs": { "cx": "15.5", "cy": "9.5", "r": "1.5" } }, { "name": "circle", "attribs": { "cx": "8.5", "cy": "9.5", "r": "1.5" } }, { "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z" } }] };

	  var ic_sentiment_very_dissatisfied = exports.ic_sentiment_very_dissatisfied = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" } }] };

	  var ic_sentiment_very_satisfied = exports.ic_sentiment_very_satisfied = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" } }] };

	  var ic_share = exports.ic_share = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" } }] };

	  var ic_whatshot = exports.ic_whatshot = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" } }] };

	  var ic_check_box = exports.ic_check_box = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] };

	  var ic_check_box_outline_blank = exports.ic_check_box_outline_blank = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] };

	  var ic_indeterminate_check_box = exports.ic_indeterminate_check_box = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" } }] };

	  var ic_radio_button_checked = exports.ic_radio_button_checked = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] };

	  var ic_radio_button_unchecked = exports.ic_radio_button_unchecked = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] };

	  var ic_star = exports.ic_star = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" } }] };

	  var ic_star_border = exports.ic_star_border = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" } }] };

	  var ic_star_half = exports.ic_star_half = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" } }] };
	});

	unwrapExports(md);
	var md_1 = md.ic_3d_rotation;
	var md_2 = md.ic_accessibility;
	var md_3 = md.ic_accessible;
	var md_4 = md.ic_account_balance;
	var md_5 = md.ic_account_balance_wallet;
	var md_6 = md.ic_account_box;
	var md_7 = md.ic_account_circle;
	var md_8 = md.ic_add_shopping_cart;
	var md_9 = md.ic_alarm;
	var md_10 = md.ic_alarm_add;
	var md_11 = md.ic_alarm_off;
	var md_12 = md.ic_alarm_on;
	var md_13 = md.ic_all_out;
	var md_14 = md.ic_android;
	var md_15 = md.ic_announcement;
	var md_16 = md.ic_aspect_ratio;
	var md_17 = md.ic_assessment;
	var md_18 = md.ic_assignment;
	var md_19 = md.ic_assignment_ind;
	var md_20 = md.ic_assignment_late;
	var md_21 = md.ic_assignment_return;
	var md_22 = md.ic_assignment_returned;
	var md_23 = md.ic_assignment_turned_in;
	var md_24 = md.ic_autorenew;
	var md_25 = md.ic_backup;
	var md_26 = md.ic_book;
	var md_27 = md.ic_bookmark;
	var md_28 = md.ic_bookmark_border;
	var md_29 = md.ic_bug_report;
	var md_30 = md.ic_build;
	var md_31 = md.ic_cached;
	var md_32 = md.ic_camera_enhance;
	var md_33 = md.ic_card_giftcard;
	var md_34 = md.ic_card_membership;
	var md_35 = md.ic_card_travel;
	var md_36 = md.ic_change_history;
	var md_37 = md.ic_check_circle;
	var md_38 = md.ic_chrome_reader_mode;
	var md_39 = md.ic_class;
	var md_40 = md.ic_code;
	var md_41 = md.ic_compare_arrows;
	var md_42 = md.ic_copyright;
	var md_43 = md.ic_credit_card;
	var md_44 = md.ic_dashboard;
	var md_45 = md.ic_date_range;
	var md_46 = md.ic_delete;
	var md_47 = md.ic_delete_forever;
	var md_48 = md.ic_description;
	var md_49 = md.ic_dns;
	var md_50 = md.ic_done;
	var md_51 = md.ic_done_all;
	var md_52 = md.ic_donut_large;
	var md_53 = md.ic_donut_small;
	var md_54 = md.ic_eject;
	var md_55 = md.ic_euro_symbol;
	var md_56 = md.ic_event;
	var md_57 = md.ic_event_seat;
	var md_58 = md.ic_exit_to_app;
	var md_59 = md.ic_explore;
	var md_60 = md.ic_extension;
	var md_61 = md.ic_face;
	var md_62 = md.ic_favorite;
	var md_63 = md.ic_favorite_border;
	var md_64 = md.ic_feedback;
	var md_65 = md.ic_find_in_page;
	var md_66 = md.ic_find_replace;
	var md_67 = md.ic_fingerprint;
	var md_68 = md.ic_flight_land;
	var md_69 = md.ic_flight_takeoff;
	var md_70 = md.ic_flip_to_back;
	var md_71 = md.ic_flip_to_front;
	var md_72 = md.ic_g_translate;
	var md_73 = md.ic_gavel;
	var md_74 = md.ic_get_app;
	var md_75 = md.ic_gif;
	var md_76 = md.ic_grade;
	var md_77 = md.ic_group_work;
	var md_78 = md.ic_help;
	var md_79 = md.ic_help_outline;
	var md_80 = md.ic_highlight_off;
	var md_81 = md.ic_history;
	var md_82 = md.ic_home;
	var md_83 = md.ic_hourglass_empty;
	var md_84 = md.ic_hourglass_full;
	var md_85 = md.ic_http;
	var md_86 = md.ic_https;
	var md_87 = md.ic_important_devices;
	var md_88 = md.ic_info;
	var md_89 = md.ic_info_outline;
	var md_90 = md.ic_input;
	var md_91 = md.ic_invert_colors;
	var md_92 = md.ic_label;
	var md_93 = md.ic_label_outline;
	var md_94 = md.ic_language;
	var md_95 = md.ic_launch;
	var md_96 = md.ic_lightbulb_outline;
	var md_97 = md.ic_line_style;
	var md_98 = md.ic_line_weight;
	var md_99 = md.ic_list;
	var md_100 = md.ic_lock;
	var md_101 = md.ic_lock_open;
	var md_102 = md.ic_lock_outline;
	var md_103 = md.ic_loyalty;
	var md_104 = md.ic_markunread_mailbox;
	var md_105 = md.ic_motorcycle;
	var md_106 = md.ic_note_add;
	var md_107 = md.ic_offline_pin;
	var md_108 = md.ic_opacity;
	var md_109 = md.ic_open_in_browser;
	var md_110 = md.ic_open_in_new;
	var md_111 = md.ic_open_with;
	var md_112 = md.ic_pageview;
	var md_113 = md.ic_pan_tool;
	var md_114 = md.ic_payment;
	var md_115 = md.ic_perm_camera_mic;
	var md_116 = md.ic_perm_contact_calendar;
	var md_117 = md.ic_perm_data_setting;
	var md_118 = md.ic_perm_device_information;
	var md_119 = md.ic_perm_identity;
	var md_120 = md.ic_perm_media;
	var md_121 = md.ic_perm_phone_msg;
	var md_122 = md.ic_perm_scan_wifi;
	var md_123 = md.ic_pets;
	var md_124 = md.ic_picture_in_picture;
	var md_125 = md.ic_picture_in_picture_alt;
	var md_126 = md.ic_play_for_work;
	var md_127 = md.ic_polymer;
	var md_128 = md.ic_power_settings_new;
	var md_129 = md.ic_pregnant_woman;
	var md_130 = md.ic_print;
	var md_131 = md.ic_query_builder;
	var md_132 = md.ic_question_answer;
	var md_133 = md.ic_receipt;
	var md_134 = md.ic_record_voice_over;
	var md_135 = md.ic_redeem;
	var md_136 = md.ic_remove_shopping_cart;
	var md_137 = md.ic_reorder;
	var md_138 = md.ic_report_problem;
	var md_139 = md.ic_restore;
	var md_140 = md.ic_restore_page;
	var md_141 = md.ic_room;
	var md_142 = md.ic_rounded_corner;
	var md_143 = md.ic_rowing;
	var md_144 = md.ic_schedule;
	var md_145 = md.ic_search;
	var md_146 = md.ic_settings;
	var md_147 = md.ic_settings_applications;
	var md_148 = md.ic_settings_backup_restore;
	var md_149 = md.ic_settings_bluetooth;
	var md_150 = md.ic_settings_brightness;
	var md_151 = md.ic_settings_cell;
	var md_152 = md.ic_settings_ethernet;
	var md_153 = md.ic_settings_input_antenna;
	var md_154 = md.ic_settings_input_component;
	var md_155 = md.ic_settings_input_composite;
	var md_156 = md.ic_settings_input_hdmi;
	var md_157 = md.ic_settings_input_svideo;
	var md_158 = md.ic_settings_overscan;
	var md_159 = md.ic_settings_phone;
	var md_160 = md.ic_settings_power;
	var md_161 = md.ic_settings_remote;
	var md_162 = md.ic_settings_voice;
	var md_163 = md.ic_shop;
	var md_164 = md.ic_shop_two;
	var md_165 = md.ic_shopping_basket;
	var md_166 = md.ic_shopping_cart;
	var md_167 = md.ic_speaker_notes;
	var md_168 = md.ic_speaker_notes_off;
	var md_169 = md.ic_spellcheck;
	var md_170 = md.ic_stars;
	var md_171 = md.ic_store;
	var md_172 = md.ic_subject;
	var md_173 = md.ic_supervisor_account;
	var md_174 = md.ic_swap_horiz;
	var md_175 = md.ic_swap_vert;
	var md_176 = md.ic_swap_vertical_circle;
	var md_177 = md.ic_system_update_alt;
	var md_178 = md.ic_tab;
	var md_179 = md.ic_tab_unselected;
	var md_180 = md.ic_theaters;
	var md_181 = md.ic_thumb_down;
	var md_182 = md.ic_thumb_up;
	var md_183 = md.ic_thumbs_up_down;
	var md_184 = md.ic_timeline;
	var md_185 = md.ic_toc;
	var md_186 = md.ic_today;
	var md_187 = md.ic_toll;
	var md_188 = md.ic_touch_app;
	var md_189 = md.ic_track_changes;
	var md_190 = md.ic_translate;
	var md_191 = md.ic_trending_down;
	var md_192 = md.ic_trending_flat;
	var md_193 = md.ic_trending_up;
	var md_194 = md.ic_turned_in;
	var md_195 = md.ic_turned_in_not;
	var md_196 = md.ic_update;
	var md_197 = md.ic_verified_user;
	var md_198 = md.ic_view_agenda;
	var md_199 = md.ic_view_array;
	var md_200 = md.ic_view_carousel;
	var md_201 = md.ic_view_column;
	var md_202 = md.ic_view_day;
	var md_203 = md.ic_view_headline;
	var md_204 = md.ic_view_list;
	var md_205 = md.ic_view_module;
	var md_206 = md.ic_view_quilt;
	var md_207 = md.ic_view_stream;
	var md_208 = md.ic_view_week;
	var md_209 = md.ic_visibility;
	var md_210 = md.ic_visibility_off;
	var md_211 = md.ic_watch_later;
	var md_212 = md.ic_work;
	var md_213 = md.ic_youtube_searched_for;
	var md_214 = md.ic_zoom_in;
	var md_215 = md.ic_zoom_out;
	var md_216 = md.ic_add_alert;
	var md_217 = md.ic_error;
	var md_218 = md.ic_error_outline;
	var md_219 = md.ic_warning;
	var md_220 = md.ic_add_to_queue;
	var md_221 = md.ic_airplay;
	var md_222 = md.ic_album;
	var md_223 = md.ic_art_track;
	var md_224 = md.ic_av_timer;
	var md_225 = md.ic_branding_watermark;
	var md_226 = md.ic_call_to_action;
	var md_227 = md.ic_closed_caption;
	var md_228 = md.ic_equalizer;
	var md_229 = md.ic_explicit;
	var md_230 = md.ic_fast_forward;
	var md_231 = md.ic_fast_rewind;
	var md_232 = md.ic_featured_play_list;
	var md_233 = md.ic_featured_video;
	var md_234 = md.ic_fiber_dvr;
	var md_235 = md.ic_fiber_manual_record;
	var md_236 = md.ic_fiber_new;
	var md_237 = md.ic_fiber_pin;
	var md_238 = md.ic_fiber_smart_record;
	var md_239 = md.ic_forward_10;
	var md_240 = md.ic_forward_30;
	var md_241 = md.ic_forward_5;
	var md_242 = md.ic_games;
	var md_243 = md.ic_hd;
	var md_244 = md.ic_hearing;
	var md_245 = md.ic_high_quality;
	var md_246 = md.ic_library_add;
	var md_247 = md.ic_library_books;
	var md_248 = md.ic_library_music;
	var md_249 = md.ic_loop;
	var md_250 = md.ic_mic;
	var md_251 = md.ic_mic_none;
	var md_252 = md.ic_mic_off;
	var md_253 = md.ic_movie;
	var md_254 = md.ic_music_video;
	var md_255 = md.ic_new_releases;
	var md_256 = md.ic_not_interested;
	var md_257 = md.ic_note;
	var md_258 = md.ic_pause;
	var md_259 = md.ic_pause_circle_filled;
	var md_260 = md.ic_pause_circle_outline;
	var md_261 = md.ic_play_arrow;
	var md_262 = md.ic_play_circle_filled;
	var md_263 = md.ic_play_circle_outline;
	var md_264 = md.ic_playlist_add;
	var md_265 = md.ic_playlist_add_check;
	var md_266 = md.ic_playlist_play;
	var md_267 = md.ic_queue;
	var md_268 = md.ic_queue_music;
	var md_269 = md.ic_queue_play_next;
	var md_270 = md.ic_radio;
	var md_271 = md.ic_recent_actors;
	var md_272 = md.ic_remove_from_queue;
	var md_273 = md.ic_repeat;
	var md_274 = md.ic_repeat_one;
	var md_275 = md.ic_replay_10;
	var md_276 = md.ic_replay;
	var md_277 = md.ic_replay_30;
	var md_278 = md.ic_replay_5;
	var md_279 = md.ic_shuffle;
	var md_280 = md.ic_skip_next;
	var md_281 = md.ic_skip_previous;
	var md_282 = md.ic_slow_motion_video;
	var md_283 = md.ic_snooze;
	var md_284 = md.ic_sort_by_alpha;
	var md_285 = md.ic_stop;
	var md_286 = md.ic_subscriptions;
	var md_287 = md.ic_subtitles;
	var md_288 = md.ic_surround_sound;
	var md_289 = md.ic_video_call;
	var md_290 = md.ic_video_label;
	var md_291 = md.ic_video_library;
	var md_292 = md.ic_videocam;
	var md_293 = md.ic_videocam_off;
	var md_294 = md.ic_volume_down;
	var md_295 = md.ic_volume_mute;
	var md_296 = md.ic_volume_off;
	var md_297 = md.ic_volume_up;
	var md_298 = md.ic_web;
	var md_299 = md.ic_web_asset;
	var md_300 = md.ic_business;
	var md_301 = md.ic_call;
	var md_302 = md.ic_call_end;
	var md_303 = md.ic_call_made;
	var md_304 = md.ic_call_merge;
	var md_305 = md.ic_call_missed;
	var md_306 = md.ic_call_missed_outgoing;
	var md_307 = md.ic_call_received;
	var md_308 = md.ic_call_split;
	var md_309 = md.ic_chat;
	var md_310 = md.ic_chat_bubble;
	var md_311 = md.ic_chat_bubble_outline;
	var md_312 = md.ic_clear_all;
	var md_313 = md.ic_comment;
	var md_314 = md.ic_contact_mail;
	var md_315 = md.ic_contact_phone;
	var md_316 = md.ic_contacts;
	var md_317 = md.ic_dialer_sip;
	var md_318 = md.ic_dialpad;
	var md_319 = md.ic_email;
	var md_320 = md.ic_forum;
	var md_321 = md.ic_import_contacts;
	var md_322 = md.ic_import_export;
	var md_323 = md.ic_invert_colors_off;
	var md_324 = md.ic_live_help;
	var md_325 = md.ic_location_off;
	var md_326 = md.ic_location_on;
	var md_327 = md.ic_mail_outline;
	var md_328 = md.ic_message;
	var md_329 = md.ic_no_sim;
	var md_330 = md.ic_phone;
	var md_331 = md.ic_phonelink_erase;
	var md_332 = md.ic_phonelink_lock;
	var md_333 = md.ic_phonelink_ring;
	var md_334 = md.ic_phonelink_setup;
	var md_335 = md.ic_portable_wifi_off;
	var md_336 = md.ic_present_to_all;
	var md_337 = md.ic_ring_volume;
	var md_338 = md.ic_rss_feed;
	var md_339 = md.ic_screen_share;
	var md_340 = md.ic_speaker_phone;
	var md_341 = md.ic_stay_current_landscape;
	var md_342 = md.ic_stay_current_portrait;
	var md_343 = md.ic_stay_primary_landscape;
	var md_344 = md.ic_stay_primary_portrait;
	var md_345 = md.ic_stop_screen_share;
	var md_346 = md.ic_swap_calls;
	var md_347 = md.ic_textsms;
	var md_348 = md.ic_voicemail;
	var md_349 = md.ic_vpn_key;
	var md_350 = md.ic_add;
	var md_351 = md.ic_add_box;
	var md_352 = md.ic_add_circle;
	var md_353 = md.ic_add_circle_outline;
	var md_354 = md.ic_archive;
	var md_355 = md.ic_backspace;
	var md_356 = md.ic_block;
	var md_357 = md.ic_clear;
	var md_358 = md.ic_content_copy;
	var md_359 = md.ic_content_cut;
	var md_360 = md.ic_content_paste;
	var md_361 = md.ic_create;
	var md_362 = md.ic_delete_sweep;
	var md_363 = md.ic_drafts;
	var md_364 = md.ic_filter_list;
	var md_365 = md.ic_flag;
	var md_366 = md.ic_font_download;
	var md_367 = md.ic_forward;
	var md_368 = md.ic_gesture;
	var md_369 = md.ic_inbox;
	var md_370 = md.ic_link;
	var md_371 = md.ic_low_priority;
	var md_372 = md.ic_mail;
	var md_373 = md.ic_markunread;
	var md_374 = md.ic_move_to_inbox;
	var md_375 = md.ic_next_week;
	var md_376 = md.ic_redo;
	var md_377 = md.ic_remove;
	var md_378 = md.ic_remove_circle;
	var md_379 = md.ic_remove_circle_outline;
	var md_380 = md.ic_reply;
	var md_381 = md.ic_reply_all;
	var md_382 = md.ic_report;
	var md_383 = md.ic_save;
	var md_384 = md.ic_select_all;
	var md_385 = md.ic_send;
	var md_386 = md.ic_sort;
	var md_387 = md.ic_text_format;
	var md_388 = md.ic_unarchive;
	var md_389 = md.ic_undo;
	var md_390 = md.ic_weekend;
	var md_391 = md.ic_access_alarm;
	var md_392 = md.ic_access_alarms;
	var md_393 = md.ic_access_time;
	var md_394 = md.ic_add_alarm;
	var md_395 = md.ic_airplanemode_active;
	var md_396 = md.ic_airplanemode_inactive;
	var md_397 = md.ic_battery_20;
	var md_398 = md.ic_battery_30;
	var md_399 = md.ic_battery_50;
	var md_400 = md.ic_battery_60;
	var md_401 = md.ic_battery_80;
	var md_402 = md.ic_battery_90;
	var md_403 = md.ic_battery_alert;
	var md_404 = md.ic_battery_charging_20;
	var md_405 = md.ic_battery_charging_30;
	var md_406 = md.ic_battery_charging_50;
	var md_407 = md.ic_battery_charging_60;
	var md_408 = md.ic_battery_charging_80;
	var md_409 = md.ic_battery_charging_90;
	var md_410 = md.ic_battery_charging_full;
	var md_411 = md.ic_battery_full;
	var md_412 = md.ic_battery_std;
	var md_413 = md.ic_battery_unknown;
	var md_414 = md.ic_bluetooth;
	var md_415 = md.ic_bluetooth_connected;
	var md_416 = md.ic_bluetooth_disabled;
	var md_417 = md.ic_bluetooth_searching;
	var md_418 = md.ic_brightness_auto;
	var md_419 = md.ic_brightness_high;
	var md_420 = md.ic_brightness_low;
	var md_421 = md.ic_brightness_medium;
	var md_422 = md.ic_data_usage;
	var md_423 = md.ic_developer_mode;
	var md_424 = md.ic_devices;
	var md_425 = md.ic_dvr;
	var md_426 = md.ic_gps_fixed;
	var md_427 = md.ic_gps_not_fixed;
	var md_428 = md.ic_gps_off;
	var md_429 = md.ic_graphic_eq;
	var md_430 = md.ic_location_disabled;
	var md_431 = md.ic_location_searching;
	var md_432 = md.ic_network_cell;
	var md_433 = md.ic_network_wifi;
	var md_434 = md.ic_nfc;
	var md_435 = md.ic_screen_lock_landscape;
	var md_436 = md.ic_screen_lock_portrait;
	var md_437 = md.ic_screen_lock_rotation;
	var md_438 = md.ic_screen_rotation;
	var md_439 = md.ic_sd_storage;
	var md_440 = md.ic_settings_system_daydream;
	var md_441 = md.ic_signal_cellular_0_bar;
	var md_442 = md.ic_signal_cellular_1_bar;
	var md_443 = md.ic_signal_cellular_2_bar;
	var md_444 = md.ic_signal_cellular_3_bar;
	var md_445 = md.ic_signal_cellular_4_bar;
	var md_446 = md.ic_signal_cellular_connected_no_internet_0_bar;
	var md_447 = md.ic_signal_cellular_connected_no_internet_1_bar;
	var md_448 = md.ic_signal_cellular_connected_no_internet_2_bar;
	var md_449 = md.ic_signal_cellular_connected_no_internet_3_bar;
	var md_450 = md.ic_signal_cellular_connected_no_internet_4_bar;
	var md_451 = md.ic_signal_cellular_no_sim;
	var md_452 = md.ic_signal_cellular_null;
	var md_453 = md.ic_signal_cellular_off;
	var md_454 = md.ic_signal_wifi_0_bar;
	var md_455 = md.ic_signal_wifi_1_bar;
	var md_456 = md.ic_signal_wifi_1_bar_lock;
	var md_457 = md.ic_signal_wifi_2_bar;
	var md_458 = md.ic_signal_wifi_2_bar_lock;
	var md_459 = md.ic_signal_wifi_3_bar;
	var md_460 = md.ic_signal_wifi_3_bar_lock;
	var md_461 = md.ic_signal_wifi_4_bar;
	var md_462 = md.ic_signal_wifi_4_bar_lock;
	var md_463 = md.ic_signal_wifi_off;
	var md_464 = md.ic_storage;
	var md_465 = md.ic_usb;
	var md_466 = md.ic_wallpaper;
	var md_467 = md.ic_widgets;
	var md_468 = md.ic_wifi_lock;
	var md_469 = md.ic_wifi_tethering;
	var md_470 = md.ic_attach_file;
	var md_471 = md.ic_attach_money;
	var md_472 = md.ic_border_all;
	var md_473 = md.ic_border_bottom;
	var md_474 = md.ic_border_clear;
	var md_475 = md.ic_border_color;
	var md_476 = md.ic_border_horizontal;
	var md_477 = md.ic_border_inner;
	var md_478 = md.ic_border_left;
	var md_479 = md.ic_border_outer;
	var md_480 = md.ic_border_right;
	var md_481 = md.ic_border_style;
	var md_482 = md.ic_border_top;
	var md_483 = md.ic_border_vertical;
	var md_484 = md.ic_bubble_chart;
	var md_485 = md.ic_drag_handle;
	var md_486 = md.ic_format_align_center;
	var md_487 = md.ic_format_align_justify;
	var md_488 = md.ic_format_align_left;
	var md_489 = md.ic_format_align_right;
	var md_490 = md.ic_format_bold;
	var md_491 = md.ic_format_clear;
	var md_492 = md.ic_format_color_fill;
	var md_493 = md.ic_format_color_reset;
	var md_494 = md.ic_format_color_text;
	var md_495 = md.ic_format_indent_decrease;
	var md_496 = md.ic_format_indent_increase;
	var md_497 = md.ic_format_italic;
	var md_498 = md.ic_format_line_spacing;
	var md_499 = md.ic_format_list_bulleted;
	var md_500 = md.ic_format_list_numbered;
	var md_501 = md.ic_format_paint;
	var md_502 = md.ic_format_quote;
	var md_503 = md.ic_format_shapes;
	var md_504 = md.ic_format_size;
	var md_505 = md.ic_format_strikethrough;
	var md_506 = md.ic_format_textdirection_l_to_r;
	var md_507 = md.ic_format_textdirection_r_to_l;
	var md_508 = md.ic_format_underlined;
	var md_509 = md.ic_functions;
	var md_510 = md.ic_highlight;
	var md_511 = md.ic_insert_chart;
	var md_512 = md.ic_insert_comment;
	var md_513 = md.ic_insert_drive_file;
	var md_514 = md.ic_insert_emoticon;
	var md_515 = md.ic_insert_invitation;
	var md_516 = md.ic_insert_link;
	var md_517 = md.ic_insert_photo;
	var md_518 = md.ic_linear_scale;
	var md_519 = md.ic_merge_type;
	var md_520 = md.ic_mode_comment;
	var md_521 = md.ic_mode_edit;
	var md_522 = md.ic_monetization_on;
	var md_523 = md.ic_money_off;
	var md_524 = md.ic_multiline_chart;
	var md_525 = md.ic_pie_chart;
	var md_526 = md.ic_pie_chart_outlined;
	var md_527 = md.ic_publish;
	var md_528 = md.ic_short_text;
	var md_529 = md.ic_show_chart;
	var md_530 = md.ic_space_bar;
	var md_531 = md.ic_strikethrough_s;
	var md_532 = md.ic_text_fields;
	var md_533 = md.ic_title;
	var md_534 = md.ic_vertical_align_bottom;
	var md_535 = md.ic_vertical_align_center;
	var md_536 = md.ic_vertical_align_top;
	var md_537 = md.ic_wrap_text;
	var md_538 = md.ic_attachment;
	var md_539 = md.ic_cloud;
	var md_540 = md.ic_cloud_circle;
	var md_541 = md.ic_cloud_done;
	var md_542 = md.ic_cloud_download;
	var md_543 = md.ic_cloud_off;
	var md_544 = md.ic_cloud_queue;
	var md_545 = md.ic_cloud_upload;
	var md_546 = md.ic_create_new_folder;
	var md_547 = md.ic_file_download;
	var md_548 = md.ic_file_upload;
	var md_549 = md.ic_folder;
	var md_550 = md.ic_folder_open;
	var md_551 = md.ic_folder_shared;
	var md_552 = md.ic_cast;
	var md_553 = md.ic_cast_connected;
	var md_554 = md.ic_computer;
	var md_555 = md.ic_desktop_mac;
	var md_556 = md.ic_desktop_windows;
	var md_557 = md.ic_developer_board;
	var md_558 = md.ic_device_hub;
	var md_559 = md.ic_devices_other;
	var md_560 = md.ic_dock;
	var md_561 = md.ic_gamepad;
	var md_562 = md.ic_headset;
	var md_563 = md.ic_headset_mic;
	var md_564 = md.ic_keyboard;
	var md_565 = md.ic_keyboard_arrow_down;
	var md_566 = md.ic_keyboard_arrow_left;
	var md_567 = md.ic_keyboard_arrow_right;
	var md_568 = md.ic_keyboard_arrow_up;
	var md_569 = md.ic_keyboard_backspace;
	var md_570 = md.ic_keyboard_capslock;
	var md_571 = md.ic_keyboard_hide;
	var md_572 = md.ic_keyboard_return;
	var md_573 = md.ic_keyboard_tab;
	var md_574 = md.ic_keyboard_voice;
	var md_575 = md.ic_laptop;
	var md_576 = md.ic_laptop_chromebook;
	var md_577 = md.ic_laptop_mac;
	var md_578 = md.ic_laptop_windows;
	var md_579 = md.ic_memory;
	var md_580 = md.ic_mouse;
	var md_581 = md.ic_phone_android;
	var md_582 = md.ic_phone_iphone;
	var md_583 = md.ic_phonelink;
	var md_584 = md.ic_phonelink_off;
	var md_585 = md.ic_power_input;
	var md_586 = md.ic_router;
	var md_587 = md.ic_scanner;
	var md_588 = md.ic_security;
	var md_589 = md.ic_sim_card;
	var md_590 = md.ic_smartphone;
	var md_591 = md.ic_speaker;
	var md_592 = md.ic_speaker_group;
	var md_593 = md.ic_tablet;
	var md_594 = md.ic_tablet_android;
	var md_595 = md.ic_tablet_mac;
	var md_596 = md.ic_toys;
	var md_597 = md.ic_tv;
	var md_598 = md.ic_videogame_asset;
	var md_599 = md.ic_watch;
	var md_600 = md.ic_add_a_photo;
	var md_601 = md.ic_add_to_photos;
	var md_602 = md.ic_adjust;
	var md_603 = md.ic_assistant;
	var md_604 = md.ic_assistant_photo;
	var md_605 = md.ic_audiotrack;
	var md_606 = md.ic_blur_circular;
	var md_607 = md.ic_blur_linear;
	var md_608 = md.ic_blur_off;
	var md_609 = md.ic_blur_on;
	var md_610 = md.ic_brightness_1;
	var md_611 = md.ic_brightness_2;
	var md_612 = md.ic_brightness_3;
	var md_613 = md.ic_brightness_4;
	var md_614 = md.ic_brightness_5;
	var md_615 = md.ic_brightness_6;
	var md_616 = md.ic_brightness_7;
	var md_617 = md.ic_broken_image;
	var md_618 = md.ic_brush;
	var md_619 = md.ic_burst_mode;
	var md_620 = md.ic_camera;
	var md_621 = md.ic_camera_alt;
	var md_622 = md.ic_camera_front;
	var md_623 = md.ic_camera_rear;
	var md_624 = md.ic_camera_roll;
	var md_625 = md.ic_center_focus_strong;
	var md_626 = md.ic_center_focus_weak;
	var md_627 = md.ic_collections;
	var md_628 = md.ic_collections_bookmark;
	var md_629 = md.ic_color_lens;
	var md_630 = md.ic_colorize;
	var md_631 = md.ic_compare;
	var md_632 = md.ic_control_point;
	var md_633 = md.ic_control_point_duplicate;
	var md_634 = md.ic_crop_16_9;
	var md_635 = md.ic_crop;
	var md_636 = md.ic_crop_3_2;
	var md_637 = md.ic_crop_5_4;
	var md_638 = md.ic_crop_7_5;
	var md_639 = md.ic_crop_din;
	var md_640 = md.ic_crop_free;
	var md_641 = md.ic_crop_landscape;
	var md_642 = md.ic_crop_original;
	var md_643 = md.ic_crop_portrait;
	var md_644 = md.ic_crop_rotate;
	var md_645 = md.ic_crop_square;
	var md_646 = md.ic_dehaze;
	var md_647 = md.ic_details;
	var md_648 = md.ic_edit;
	var md_649 = md.ic_exposure;
	var md_650 = md.ic_exposure_neg_1;
	var md_651 = md.ic_exposure_neg_2;
	var md_652 = md.ic_exposure_plus_1;
	var md_653 = md.ic_exposure_plus_2;
	var md_654 = md.ic_exposure_zero;
	var md_655 = md.ic_filter_1;
	var md_656 = md.ic_filter;
	var md_657 = md.ic_filter_2;
	var md_658 = md.ic_filter_3;
	var md_659 = md.ic_filter_4;
	var md_660 = md.ic_filter_5;
	var md_661 = md.ic_filter_6;
	var md_662 = md.ic_filter_7;
	var md_663 = md.ic_filter_8;
	var md_664 = md.ic_filter_9;
	var md_665 = md.ic_filter_9_plus;
	var md_666 = md.ic_filter_b_and_w;
	var md_667 = md.ic_filter_center_focus;
	var md_668 = md.ic_filter_drama;
	var md_669 = md.ic_filter_frames;
	var md_670 = md.ic_filter_hdr;
	var md_671 = md.ic_filter_none;
	var md_672 = md.ic_filter_tilt_shift;
	var md_673 = md.ic_filter_vintage;
	var md_674 = md.ic_flare;
	var md_675 = md.ic_flash_auto;
	var md_676 = md.ic_flash_off;
	var md_677 = md.ic_flash_on;
	var md_678 = md.ic_flip;
	var md_679 = md.ic_gradient;
	var md_680 = md.ic_grain;
	var md_681 = md.ic_grid_off;
	var md_682 = md.ic_grid_on;
	var md_683 = md.ic_hdr_off;
	var md_684 = md.ic_hdr_on;
	var md_685 = md.ic_hdr_strong;
	var md_686 = md.ic_hdr_weak;
	var md_687 = md.ic_healing;
	var md_688 = md.ic_image;
	var md_689 = md.ic_image_aspect_ratio;
	var md_690 = md.ic_iso;
	var md_691 = md.ic_landscape;
	var md_692 = md.ic_leak_add;
	var md_693 = md.ic_leak_remove;
	var md_694 = md.ic_lens;
	var md_695 = md.ic_linked_camera;
	var md_696 = md.ic_looks;
	var md_697 = md.ic_looks_3;
	var md_698 = md.ic_looks_4;
	var md_699 = md.ic_looks_5;
	var md_700 = md.ic_looks_6;
	var md_701 = md.ic_looks_one;
	var md_702 = md.ic_looks_two;
	var md_703 = md.ic_loupe;
	var md_704 = md.ic_monochrome_photos;
	var md_705 = md.ic_movie_creation;
	var md_706 = md.ic_movie_filter;
	var md_707 = md.ic_music_note;
	var md_708 = md.ic_nature;
	var md_709 = md.ic_nature_people;
	var md_710 = md.ic_navigate_before;
	var md_711 = md.ic_navigate_next;
	var md_712 = md.ic_palette;
	var md_713 = md.ic_panorama;
	var md_714 = md.ic_panorama_fish_eye;
	var md_715 = md.ic_panorama_horizontal;
	var md_716 = md.ic_panorama_vertical;
	var md_717 = md.ic_panorama_wide_angle;
	var md_718 = md.ic_photo;
	var md_719 = md.ic_photo_album;
	var md_720 = md.ic_photo_camera;
	var md_721 = md.ic_photo_filter;
	var md_722 = md.ic_photo_library;
	var md_723 = md.ic_photo_size_select_actual;
	var md_724 = md.ic_photo_size_select_large;
	var md_725 = md.ic_photo_size_select_small;
	var md_726 = md.ic_picture_as_pdf;
	var md_727 = md.ic_portrait;
	var md_728 = md.ic_remove_red_eye;
	var md_729 = md.ic_rotate_90_degrees_ccw;
	var md_730 = md.ic_rotate_left;
	var md_731 = md.ic_rotate_right;
	var md_732 = md.ic_slideshow;
	var md_733 = md.ic_straighten;
	var md_734 = md.ic_style;
	var md_735 = md.ic_switch_camera;
	var md_736 = md.ic_switch_video;
	var md_737 = md.ic_tag_faces;
	var md_738 = md.ic_texture;
	var md_739 = md.ic_timelapse;
	var md_740 = md.ic_timer_10;
	var md_741 = md.ic_timer;
	var md_742 = md.ic_timer_3;
	var md_743 = md.ic_timer_off;
	var md_744 = md.ic_tonality;
	var md_745 = md.ic_transform;
	var md_746 = md.ic_tune;
	var md_747 = md.ic_view_comfy;
	var md_748 = md.ic_view_compact;
	var md_749 = md.ic_vignette;
	var md_750 = md.ic_wb_auto;
	var md_751 = md.ic_wb_cloudy;
	var md_752 = md.ic_wb_incandescent;
	var md_753 = md.ic_wb_iridescent;
	var md_754 = md.ic_wb_sunny;
	var md_755 = md.ic_add_location;
	var md_756 = md.ic_beenhere;
	var md_757 = md.ic_directions;
	var md_758 = md.ic_directions_bike;
	var md_759 = md.ic_directions_boat;
	var md_760 = md.ic_directions_bus;
	var md_761 = md.ic_directions_car;
	var md_762 = md.ic_directions_railway;
	var md_763 = md.ic_directions_run;
	var md_764 = md.ic_directions_subway;
	var md_765 = md.ic_directions_transit;
	var md_766 = md.ic_directions_walk;
	var md_767 = md.ic_edit_location;
	var md_768 = md.ic_ev_station;
	var md_769 = md.ic_flight;
	var md_770 = md.ic_hotel;
	var md_771 = md.ic_layers;
	var md_772 = md.ic_layers_clear;
	var md_773 = md.ic_local_activity;
	var md_774 = md.ic_local_airport;
	var md_775 = md.ic_local_atm;
	var md_776 = md.ic_local_bar;
	var md_777 = md.ic_local_cafe;
	var md_778 = md.ic_local_car_wash;
	var md_779 = md.ic_local_convenience_store;
	var md_780 = md.ic_local_dining;
	var md_781 = md.ic_local_drink;
	var md_782 = md.ic_local_florist;
	var md_783 = md.ic_local_gas_station;
	var md_784 = md.ic_local_grocery_store;
	var md_785 = md.ic_local_hospital;
	var md_786 = md.ic_local_hotel;
	var md_787 = md.ic_local_laundry_service;
	var md_788 = md.ic_local_library;
	var md_789 = md.ic_local_mall;
	var md_790 = md.ic_local_movies;
	var md_791 = md.ic_local_offer;
	var md_792 = md.ic_local_parking;
	var md_793 = md.ic_local_pharmacy;
	var md_794 = md.ic_local_phone;
	var md_795 = md.ic_local_pizza;
	var md_796 = md.ic_local_play;
	var md_797 = md.ic_local_post_office;
	var md_798 = md.ic_local_printshop;
	var md_799 = md.ic_local_see;
	var md_800 = md.ic_local_shipping;
	var md_801 = md.ic_local_taxi;
	var md_802 = md.ic_map;
	var md_803 = md.ic_my_location;
	var md_804 = md.ic_navigation;
	var md_805 = md.ic_near_me;
	var md_806 = md.ic_person_pin;
	var md_807 = md.ic_person_pin_circle;
	var md_808 = md.ic_pin_drop;
	var md_809 = md.ic_place;
	var md_810 = md.ic_rate_review;
	var md_811 = md.ic_restaurant;
	var md_812 = md.ic_restaurant_menu;
	var md_813 = md.ic_satellite;
	var md_814 = md.ic_store_mall_directory;
	var md_815 = md.ic_streetview;
	var md_816 = md.ic_subway;
	var md_817 = md.ic_terrain;
	var md_818 = md.ic_traffic;
	var md_819 = md.ic_train;
	var md_820 = md.ic_tram;
	var md_821 = md.ic_transfer_within_a_station;
	var md_822 = md.ic_zoom_out_map;
	var md_823 = md.ic_apps;
	var md_824 = md.ic_arrow_back;
	var md_825 = md.ic_arrow_downward;
	var md_826 = md.ic_arrow_drop_down;
	var md_827 = md.ic_arrow_drop_down_circle;
	var md_828 = md.ic_arrow_drop_up;
	var md_829 = md.ic_arrow_forward;
	var md_830 = md.ic_arrow_upward;
	var md_831 = md.ic_cancel;
	var md_832 = md.ic_check;
	var md_833 = md.ic_chevron_left;
	var md_834 = md.ic_chevron_right;
	var md_835 = md.ic_close;
	var md_836 = md.ic_expand_less;
	var md_837 = md.ic_expand_more;
	var md_838 = md.ic_first_page;
	var md_839 = md.ic_fullscreen;
	var md_840 = md.ic_fullscreen_exit;
	var md_841 = md.ic_last_page;
	var md_842 = md.ic_menu;
	var md_843 = md.ic_more_horiz;
	var md_844 = md.ic_more_vert;
	var md_845 = md.ic_refresh;
	var md_846 = md.ic_subdirectory_arrow_left;
	var md_847 = md.ic_subdirectory_arrow_right;
	var md_848 = md.ic_unfold_less;
	var md_849 = md.ic_unfold_more;
	var md_850 = md.ic_adb;
	var md_851 = md.ic_airline_seat_flat;
	var md_852 = md.ic_airline_seat_flat_angled;
	var md_853 = md.ic_airline_seat_individual_suite;
	var md_854 = md.ic_airline_seat_legroom_extra;
	var md_855 = md.ic_airline_seat_legroom_normal;
	var md_856 = md.ic_airline_seat_legroom_reduced;
	var md_857 = md.ic_airline_seat_recline_extra;
	var md_858 = md.ic_airline_seat_recline_normal;
	var md_859 = md.ic_bluetooth_audio;
	var md_860 = md.ic_confirmation_number;
	var md_861 = md.ic_disc_full;
	var md_862 = md.ic_do_not_disturb;
	var md_863 = md.ic_do_not_disturb_alt;
	var md_864 = md.ic_do_not_disturb_off;
	var md_865 = md.ic_do_not_disturb_on;
	var md_866 = md.ic_drive_eta;
	var md_867 = md.ic_enhanced_encryption;
	var md_868 = md.ic_event_available;
	var md_869 = md.ic_event_busy;
	var md_870 = md.ic_event_note;
	var md_871 = md.ic_folder_special;
	var md_872 = md.ic_live_tv;
	var md_873 = md.ic_mms;
	var md_874 = md.ic_more;
	var md_875 = md.ic_network_check;
	var md_876 = md.ic_network_locked;
	var md_877 = md.ic_no_encryption;
	var md_878 = md.ic_ondemand_video;
	var md_879 = md.ic_personal_video;
	var md_880 = md.ic_phone_bluetooth_speaker;
	var md_881 = md.ic_phone_forwarded;
	var md_882 = md.ic_phone_in_talk;
	var md_883 = md.ic_phone_locked;
	var md_884 = md.ic_phone_missed;
	var md_885 = md.ic_phone_paused;
	var md_886 = md.ic_power;
	var md_887 = md.ic_priority_high;
	var md_888 = md.ic_rv_hookup;
	var md_889 = md.ic_sd_card;
	var md_890 = md.ic_sim_card_alert;
	var md_891 = md.ic_sms;
	var md_892 = md.ic_sms_failed;
	var md_893 = md.ic_sync;
	var md_894 = md.ic_sync_disabled;
	var md_895 = md.ic_sync_problem;
	var md_896 = md.ic_system_update;
	var md_897 = md.ic_tap_and_play;
	var md_898 = md.ic_time_to_leave;
	var md_899 = md.ic_vibration;
	var md_900 = md.ic_voice_chat;
	var md_901 = md.ic_vpn_lock;
	var md_902 = md.ic_wc;
	var md_903 = md.ic_wifi;
	var md_904 = md.ic_ac_unit;
	var md_905 = md.ic_airport_shuttle;
	var md_906 = md.ic_all_inclusive;
	var md_907 = md.ic_beach_access;
	var md_908 = md.ic_business_center;
	var md_909 = md.ic_casino;
	var md_910 = md.ic_child_care;
	var md_911 = md.ic_child_friendly;
	var md_912 = md.ic_fitness_center;
	var md_913 = md.ic_free_breakfast;
	var md_914 = md.ic_golf_course;
	var md_915 = md.ic_hot_tub;
	var md_916 = md.ic_kitchen;
	var md_917 = md.ic_pool;
	var md_918 = md.ic_room_service;
	var md_919 = md.ic_smoke_free;
	var md_920 = md.ic_smoking_rooms;
	var md_921 = md.ic_spa;
	var md_922 = md.ic_cake;
	var md_923 = md.ic_domain;
	var md_924 = md.ic_group;
	var md_925 = md.ic_group_add;
	var md_926 = md.ic_location_city;
	var md_927 = md.ic_mood;
	var md_928 = md.ic_mood_bad;
	var md_929 = md.ic_notifications;
	var md_930 = md.ic_notifications_active;
	var md_931 = md.ic_notifications_none;
	var md_932 = md.ic_notifications_off;
	var md_933 = md.ic_notifications_paused;
	var md_934 = md.ic_pages;
	var md_935 = md.ic_party_mode;
	var md_936 = md.ic_people;
	var md_937 = md.ic_people_outline;
	var md_938 = md.ic_person;
	var md_939 = md.ic_person_add;
	var md_940 = md.ic_person_outline;
	var md_941 = md.ic_plus_one;
	var md_942 = md.ic_poll;
	var md_943 = md.ic_public;
	var md_944 = md.ic_school;
	var md_945 = md.ic_sentiment_dissatisfied;
	var md_946 = md.ic_sentiment_neutral;
	var md_947 = md.ic_sentiment_satisfied;
	var md_948 = md.ic_sentiment_very_dissatisfied;
	var md_949 = md.ic_sentiment_very_satisfied;
	var md_950 = md.ic_share;
	var md_951 = md.ic_whatshot;
	var md_952 = md.ic_check_box;
	var md_953 = md.ic_check_box_outline_blank;
	var md_954 = md.ic_indeterminate_check_box;
	var md_955 = md.ic_radio_button_checked;
	var md_956 = md.ic_radio_button_unchecked;
	var md_957 = md.ic_star;
	var md_958 = md.ic_star_border;
	var md_959 = md.ic_star_half;

	var IconPlay = function IconPlay(_ref) {
	  var size = _ref.size;
	  return React__default.createElement(reactIconsKit_2, { size: size, icon: md_261 });
	};
	var IconPause = function IconPause(_ref2) {
	  var size = _ref2.size;
	  return React__default.createElement(reactIconsKit_2, { size: size, icon: md_258 });
	};

	var propTypes$2 = {
	  actions: propTypes.object,
	  player: propTypes.object
	};

	var PlayToggle = function (_React$Component) {
	  inherits(PlayToggle, _React$Component);

	  function PlayToggle(props) {
	    classCallCheck(this, PlayToggle);
	    return possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props));
	  }

	  createClass(PlayToggle, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;

	      if (player.paused) {
	        actions.play();
	      } else {
	        actions.pause();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React__default.createElement(
	        'div',
	        { onClick: function onClick() {
	            return _this2.handleClick();
	          } },
	        !this.props.player.paused ? React__default.createElement(IconPause, { size: 20 }) : React__default.createElement(IconPlay, { size: 20 })
	      );
	    }
	  }]);
	  return PlayToggle;
	}(React__default.Component);

	var propTypes$3 = {
	  tagName: propTypes.string.isRequired,
	  onClick: propTypes.func.isRequired,
	  onFocus: propTypes.func,
	  onBlur: propTypes.func,
	  className: propTypes.string
	};

	var defaultProps$1 = {
	  tagName: 'div'
	};

	var ClickableComponent = function (_Component) {
	  inherits(ClickableComponent, _Component);

	  function ClickableComponent(props, context) {
	    classCallCheck(this, ClickableComponent);

	    var _this = possibleConstructorReturn(this, (ClickableComponent.__proto__ || Object.getPrototypeOf(ClickableComponent)).call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }

	  createClass(ClickableComponent, [{
	    key: 'handleKeypress',
	    value: function handleKeypress(event) {
	      // Support Space (32) or Enter (13) key operation to fire a click event
	      if (event.which === 32 || event.which === 13) {
	        event.preventDefault();
	        this.handleClick(event);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var onClick = this.props.onClick;

	      onClick(event);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeypress);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeypress);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Tag = this.props.tagName;
	      var props = _extends({}, this.props);
	      delete props.tagName;
	      delete props.className;
	      return React__default.createElement(Tag, _extends({
	        className: classnames(this.props.className),
	        role: 'button',
	        tabIndex: '0',
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur
	      }, props));
	    }
	  }]);
	  return ClickableComponent;
	}(React.Component);


	ClickableComponent.propTypes = propTypes$3;
	ClickableComponent.defaultProps = defaultProps$1;
	ClickableComponent.displayName = 'ClickableComponent';

	var propTypes$4 = {
	  player: propTypes.object,
	  children: propTypes.any
	};

	var Popup = function (_Component) {
	  inherits(Popup, _Component);

	  function Popup(props, context) {
	    classCallCheck(this, Popup);

	    var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  createClass(Popup, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      // event.stopPropagation();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return React__default.createElement(
	        'div',
	        {
	          className: 'video-react-menu',
	          onClick: this.handleClick
	        },
	        React__default.createElement(
	          'div',
	          { className: 'video-react-menu-content' },
	          children
	        )
	      );
	    }
	  }]);
	  return Popup;
	}(React.Component);


	Popup.propTypes = propTypes$4;
	Popup.displayName = 'Popup';

	var propTypes$5 = {
	  inline: propTypes.bool,
	  onClick: propTypes.func.isRequired,
	  onFocus: propTypes.func,
	  onBlur: propTypes.func,
	  className: propTypes.string
	};

	var defaultProps$2 = {
	  inline: true
	};

	function PopupButton(props) {
	  var inline = props.inline,
	      className = props.className;

	  var ps = _extends({}, props);
	  delete ps.children;
	  delete ps.inline;
	  delete ps.className;
	  return React__default.createElement(
	    ClickableComponent,
	    _extends({
	      className: classnames(className, {
	        'video-react-menu-button-inline': !!inline,
	        'video-react-menu-button-popup': !inline
	      }, 'video-react-control video-react-button video-react-menu-button')
	    }, ps),
	    React__default.createElement(IconPause, null),
	    React__default.createElement(Popup, props)
	  );
	}

	PopupButton.propTypes = propTypes$5;
	PopupButton.defaultProps = defaultProps$2;
	PopupButton.displayName = 'PopupButton';

	/**
	 * Offset Left
	 * getBoundingClientRect technique from
	 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	 *
	 * @function findElPosition
	 * @param {Element} el Element from which to get offset
	 * @return {Object}
	 */
	function findElPosition(el) {
	  var box = void 0;

	  if (el.getBoundingClientRect && el.parentNode) {
	    box = el.getBoundingClientRect();
	  }

	  if (!box) {
	    return {
	      left: 0,
	      top: 0
	    };
	  }

	  var docEl = document.documentElement;
	  var body = document.body;

	  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  var scrollLeft = window.pageXOffset || body.scrollLeft;
	  var left = box.left + scrollLeft - clientLeft;

	  var clientTop = docEl.clientTop || body.clientTop || 0;
	  var scrollTop = window.pageYOffset || body.scrollTop;
	  var top = box.top + scrollTop - clientTop;

	  // Android sometimes returns slightly off decimal values, so need to round
	  return {
	    left: Math.round(left),
	    top: Math.round(top)
	  };
	}

	/**
	 * Get pointer position in element
	 * Returns an object with x and y coordinates.
	 * The base on the coordinates are the bottom left of the element.
	 *
	 * @function getPointerPosition
	 * @param {Element} el Element on which to get the pointer position on
	 * @param {Event} event Event object
	 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
	 */
	function getPointerPosition(el, event) {
	  var position = {};
	  var box = findElPosition(el);
	  var boxW = el.offsetWidth;
	  var boxH = el.offsetHeight;

	  var boxY = box.top;
	  var boxX = box.left;
	  var pageY = event.pageY;
	  var pageX = event.pageX;

	  if (event.changedTouches) {
	    pageX = event.changedTouches[0].pageX;
	    pageY = event.changedTouches[0].pageY;
	  }

	  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
	  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

	  return position;
	}

	// check if an element has a class name
	function hasClass(elm, cls) {
	  var classes = elm.className.split(' ');
	  for (var i = 0; i < classes.length; i++) {
	    if (classes[i].toLowerCase() === cls.toLowerCase()) {
	      return true;
	    }
	  }
	  return false;
	}

	var propTypes$6 = {
	  className: propTypes.string,
	  onMouseDown: propTypes.func,
	  onMouseMove: propTypes.func,
	  stepForward: propTypes.func,
	  stepBack: propTypes.func,
	  sliderActive: propTypes.func,
	  sliderInactive: propTypes.func,
	  onMouseUp: propTypes.func,
	  onFocus: propTypes.func,
	  onBlur: propTypes.func,
	  onClick: propTypes.func,
	  getPercent: propTypes.func,
	  vertical: propTypes.bool,
	  children: propTypes.node,
	  label: propTypes.string,
	  valuenow: propTypes.string,
	  valuetext: propTypes.string
	};

	var Slider = function (_Component) {
	  inherits(Slider, _Component);

	  function Slider(props, context) {
	    classCallCheck(this, Slider);

	    var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.calculateDistance = _this.calculateDistance.bind(_this);
	    _this.getProgress = _this.getProgress.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);

	    _this.state = {
	      active: false
	    };
	    return _this;
	  }

	  createClass(Slider, [{
	    key: 'getProgress',
	    value: function getProgress() {
	      var getPercent = this.props.getPercent;

	      if (!getPercent) {
	        return 0;
	      }
	      var progress = getPercent();

	      // Protect against no duration and other division issues
	      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
	        progress = 0;
	      }
	      return progress;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(event) {
	      var onMouseDown = this.props.onMouseDown;
	      // event.preventDefault();
	      // event.stopPropagation();

	      document.addEventListener('mousemove', this.handleMouseMove, true);
	      document.addEventListener('mouseup', this.handleMouseUp, true);
	      document.addEventListener('touchmove', this.handleMouseMove, true);
	      document.addEventListener('touchend', this.handleMouseUp, true);

	      this.setState({
	        active: true,
	        distance: 0
	      });

	      if (this.props.sliderActive) {
	        this.props.sliderActive(event);
	      }

	      this.handleMouseMove(event);

	      if (onMouseDown) {
	        onMouseDown(event);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var onMouseMove = this.props.onMouseMove;


	      if (onMouseMove) {
	        onMouseMove(event);
	      }
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var onMouseUp = this.props.onMouseUp;


	      document.removeEventListener('mousemove', this.handleMouseMove, true);
	      document.removeEventListener('mouseup', this.handleMouseUp, true);
	      document.removeEventListener('touchmove', this.handleMouseMove, true);
	      document.removeEventListener('touchend', this.handleMouseUp, true);

	      this.setState({
	        active: false
	      });

	      if (this.props.sliderInactive) {
	        this.props.sliderInactive(event);
	      }

	      if (onMouseUp) {
	        onMouseUp(event);
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      // event.stopPropagation();
	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      if (event.which === 37 || event.which === 40) {
	        // Left and Down Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepBack();
	      } else if (event.which === 38 || event.which === 39) {
	        // Up and Right Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepForward();
	      }
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      if (this.props.stepForward) {
	        this.props.stepForward();
	      }
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      if (this.props.stepBack) {
	        this.props.stepBack();
	      }
	    }
	  }, {
	    key: 'calculateDistance',
	    value: function calculateDistance(event) {
	      var node = reactDom.findDOMNode(this);
	      var position = getPointerPosition(node, event);
	      if (this.props.vertical) {
	        return position.y;
	      }
	      return position.x;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var progress = this.getProgress();
	      var percentage = (progress * 100).toFixed(2) + '%';
	      return React__default.Children.map(this.props.children, function (child) {
	        return React__default.cloneElement(child, { progress: progress, percentage: percentage });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          vertical = _props.vertical,
	          label = _props.label,
	          valuenow = _props.valuenow,
	          valuetext = _props.valuetext;


	      return React__default.createElement(
	        'div',
	        {
	          className: classnames(this.props.className, {
	            'video-react-slider-vertical': vertical,
	            'video-react-slider-horizontal': !vertical,
	            'video-react-sliding': this.state.active
	          }, 'video-react-slider'),
	          tabIndex: '0',
	          onMouseDown: this.handleMouseDown,
	          onTouchStart: this.handleMouseDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          'aria-label': label || '',
	          'aria-valuenow': valuenow || '',
	          'aria-valuetext': valuetext || '',
	          'aria-valuemin': 0,
	          'aria-valuemax': 100
	        },
	        this.renderChildren()
	      );
	    }
	  }]);
	  return Slider;
	}(React.Component);


	Slider.propTypes = propTypes$6;
	Slider.displayName = 'Slider';

	var propTypes$7 = {
	  percentage: propTypes.string,
	  vertical: propTypes.bool,
	  className: propTypes.string
	};

	var defaultProps$3 = {
	  percentage: '100%',
	  vertical: false
	};

	function VolumeLevel(_ref) {
	  var percentage = _ref.percentage,
	      vertical = _ref.vertical,
	      className = _ref.className;

	  var style = {};
	  if (vertical) {
	    style.height = percentage;
	  } else {
	    style.width = percentage;
	  }

	  return React__default.createElement(
	    'div',
	    {
	      className: classnames(className, 'video-react-volume-level'),
	      style: style
	    },
	    React__default.createElement('span', { className: 'video-react-control-text' })
	  );
	}

	VolumeLevel.propTypes = propTypes$7;
	VolumeLevel.defaultProps = defaultProps$3;
	VolumeLevel.displayName = 'VolumeLevel';

	var propTypes$8 = {
	  actions: propTypes.object,
	  player: propTypes.object,
	  className: propTypes.string,
	  onFocus: propTypes.func,
	  onBlur: propTypes.func
	};

	var VolumeBar = function (_Component) {
	  inherits(VolumeBar, _Component);

	  function VolumeBar(props, context) {
	    classCallCheck(this, VolumeBar);

	    var _this = possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));

	    _this.state = {
	      percentage: '0%'
	    };

	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
	    _this.checkMuted = _this.checkMuted.bind(_this);
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  createClass(VolumeBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var player = this.props.player;

	      if (player.muted) {
	        return 0;
	      }
	      return player.volume;
	    }
	  }, {
	    key: 'checkMuted',
	    value: function checkMuted() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;

	      if (player.muted) {
	        actions.mute(false);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;

	      this.checkMuted();
	      var distance = this.slider.calculateDistance(event);
	      actions.changeVolume(distance);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;

	      this.checkMuted();
	      actions.changeVolume(player.volume + 0.1);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;

	      this.checkMuted();
	      actions.changeVolume(player.volume - 0.1);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handlePercentageChange',
	    value: function handlePercentageChange(percentage) {
	      if (percentage !== this.state.percentage) {
	        this.setState({
	          percentage: percentage
	        });
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.stopPropagation();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props4 = this.props,
	          player = _props4.player,
	          className = _props4.className;


	      var volume = (player.volume * 100).toFixed(2);
	      return React__default.createElement(
	        Slider,
	        _extends({
	          ref: function ref(c) {
	            _this2.slider = c;
	          },
	          label: 'volume level',
	          valuenow: volume,
	          valuetext: volume + '%',
	          onMouseMove: this.handleMouseMove,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          sliderActive: this.handleFocus,
	          sliderInactive: this.handleBlur,
	          getPercent: this.getPercent,
	          onPercentageChange: this.handlePercentageChange,
	          stepForward: this.stepForward,
	          stepBack: this.stepBack
	        }, this.props, {
	          className: classnames(className, 'video-react-volume-bar video-react-slider-bar')
	        }),
	        React__default.createElement(VolumeLevel, this.props)
	      );
	    }
	  }]);
	  return VolumeBar;
	}(React.Component);

	VolumeBar.propTypes = propTypes$8;
	VolumeBar.displayName = 'VolumeBar';

	var propTypes$9 = {
	  player: propTypes.object,
	  actions: propTypes.object,
	  className: propTypes.string,
	  alwaysShowVolume: propTypes.bool
	};

	var VolumeMenuButton = function (_Component) {
	  inherits(VolumeMenuButton, _Component);

	  function VolumeMenuButton(props, context) {
	    classCallCheck(this, VolumeMenuButton);

	    var _this = possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));

	    _this.state = {
	      active: false
	    };

	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }

	  createClass(VolumeMenuButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;

	      actions.mute(!player.muted);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.setState({
	        active: true
	      });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.setState({
	        active: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          vertical = _props2.vertical,
	          player = _props2.player,
	          className = _props2.className;

	      var inline = !vertical;
	      var level = this.volumeLevel;
	      return React__default.createElement(
	        PopupButton,
	        {
	          className: classnames(className, {
	            'video-vol-muted': player.muted,
	            'video-vol-0': level === 0 && !player.muted,
	            'video-vol-1': level === 1,
	            'video-vol-2': level === 2,
	            'video-vol-3': level === 3,
	            'video-slider-active': this.props.alwaysShowVolume || this.state.active,
	            'video-lock-showing': this.props.alwaysShowVolume || this.state.active
	          }, 'video-volume-menu-button'),
	          onClick: this.handleClick,
	          inline: inline
	        },
	        React__default.createElement(VolumeBar, _extends({
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur
	        }, this.props))
	      );
	    }
	  }, {
	    key: 'volumeLevel',
	    get: function get$$1() {
	      var _props$player = this.props.player,
	          volume = _props$player.volume,
	          muted = _props$player.muted;

	      var level = 3;
	      if (volume === 0 || muted) {
	        level = 0;
	      } else if (volume < 0.33) {
	        level = 1;
	      } else if (volume < 0.67) {
	        level = 2;
	      }
	      return level;
	    }
	  }]);
	  return VolumeMenuButton;
	}(React.Component);

	VolumeMenuButton.propTypes = propTypes$9;
	VolumeMenuButton.displayName = 'VolumeMenuButton';

	var ControlBar = function ControlBar(props) {

	  var children = [React__default.createElement(PlayToggle, _extends({ key: 'toggle-play' }, props)), React__default.createElement(VolumeMenuButton, _extends({ key: 'volume-menu-button' }, props))];
	  return React__default.createElement(
	    'div',
	    { className: classnames('control-bar', 'control-bar-auto-hide') },
	    children
	  );
	};

	var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
	// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
	// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

	/*
	 * Device is an iPhone
	 *
	 * @type {Boolean}
	 * @constant
	 * @private
	 */
	var IS_IPAD = /iPad/i.test(USER_AGENT);

	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

	var propTypes$a = {
	  clickable: propTypes.bool,
	  dblclickable: propTypes.bool,
	  manager: propTypes.object,
	  actions: propTypes.object,
	  player: propTypes.object,
	  shortcuts: propTypes.array
	};

	var defaultProps$4 = {
	  clickable: true,
	  dblclickable: true
	};

	var Shortcut = function (_Component) {
	  inherits(Shortcut, _Component);

	  function Shortcut(props, context) {
	    classCallCheck(this, Shortcut);

	    var _this = possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));

	    _this.defaultShortcuts = [{
	      keyCode: 32, // spacebar
	      handle: _this.togglePlay
	    }, {
	      keyCode: 75, // k
	      handle: _this.togglePlay
	    }, {
	      keyCode: 70, // f
	      handle: _this.toggleFullscreen
	    }, {
	      keyCode: 37, // Left arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(5, {
	          action: 'replay-5',
	          source: 'shortcut'
	        }); // Go back 5 seconds
	      }
	    }, {
	      keyCode: 74, // j
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(10, {
	          action: 'replay-10',
	          source: 'shortcut'
	        }); // Go back 10 seconds
	      }
	    }, {
	      keyCode: 39, // Right arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(5, {
	          action: 'forward-5',
	          source: 'shortcut'
	        }); // Go forward 5 seconds
	      }
	    }, {
	      keyCode: 76, // l
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(10, {
	          action: 'forward-10',
	          source: 'shortcut'
	        }); // Go forward 10 seconds
	      }
	    }, {
	      keyCode: 36, // Home
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.seek(0); // Go to beginning of video
	      }
	    }, {
	      keyCode: 35, // End
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        // Go to end of video
	        actions.seek(player.duration);
	      }
	    }, {
	      keyCode: 38, // Up arrow
	      handle: function handle(player, actions) {
	        // Increase volume 5%
	        var v = player.volume + 0.05;
	        if (v > 1) {
	          v = 1;
	        }
	        actions.changeVolume(v, {
	          action: 'volume-up',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 40, // Down arrow
	      handle: function handle(player, actions) {
	        // Decrease volume 5%
	        var v = player.volume - 0.05;
	        if (v < 0) {
	          v = 0;
	        }
	        var action = v > 0 ? 'volume-down' : 'volume-off';
	        actions.changeVolume(v, {
	          action: action,
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 190, // Shift + >
	      shift: true,
	      handle: function handle(player, actions) {
	        // Increase speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate >= 1.5) {
	          playbackRate = 2;
	        } else if (playbackRate >= 1.25) {
	          playbackRate = 1.5;
	        } else if (playbackRate >= 1.0) {
	          playbackRate = 1.25;
	        } else if (playbackRate >= 0.5) {
	          playbackRate = 1.0;
	        } else if (playbackRate >= 0.25) {
	          playbackRate = 0.5;
	        } else if (playbackRate >= 0) {
	          playbackRate = 0.25;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-forward',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 188, // Shift + <
	      shift: true,
	      handle: function handle(player, actions) {
	        // Decrease speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate <= 0.5) {
	          playbackRate = 0.25;
	        } else if (playbackRate <= 1.0) {
	          playbackRate = 0.5;
	        } else if (playbackRate <= 1.25) {
	          playbackRate = 1.0;
	        } else if (playbackRate <= 1.5) {
	          playbackRate = 1.25;
	        } else if (playbackRate <= 2) {
	          playbackRate = 1.5;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-rewind',
	          source: 'shortcut'
	        });
	      }
	    }];

	    _this.shortcuts = [].concat(toConsumableArray(_this.defaultShortcuts));

	    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
	    return _this;
	  }

	  createClass(Shortcut, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mergeShortcuts();
	      document.addEventListener('keydown', this.handleKeyPress);
	      document.addEventListener('click', this.handleClick);
	      document.addEventListener('dblclick', this.handleDoubleClick);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.shortcuts !== this.props.shortcuts) {
	        this.mergeShortcuts();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('keydown', this.handleKeyPress);
	      document.removeEventListener('click', this.handleClick);
	      document.removeEventListener('dblclick', this.handleDoubleClick);
	    }

	    // merge the shortcuts from props

	  }, {
	    key: 'mergeShortcuts',
	    value: function mergeShortcuts() {
	      var gradeShortcut = function gradeShortcut(s) {
	        var score = 0;
	        var ps = ['ctrl', 'shift', 'alt'];
	        ps.forEach(function (key) {
	          if (s[key]) {
	            score++;
	          }
	        });
	        return score;
	      };

	      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
	        return s.keyCode && s.handle && typeof s.handle === 'function';
	      });

	      this.shortcuts = [].concat(toConsumableArray(shortcuts), toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
	        return gradeShortcut(b) - gradeShortcut(a);
	      });
	    }
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay(player, actions) {
	      if (player.paused) {
	        actions.play({
	          action: 'play',
	          source: 'shortcut'
	        });
	      } else {
	        actions.pause({
	          action: 'pause',
	          source: 'shortcut'
	        });
	      }
	    }
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen(player, actions) {
	      actions.toggleFullscreen(player);
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;

	      if (!player.isActive) {
	        return;
	      }
	      if (document.activeElement && (hasClass(document.activeElement, 'video-react-control') || hasClass(document.activeElement, 'video-react-menu-button-active')
	      // || hasClass(document.activeElement, 'video-react-slider')
	      || hasClass(document.activeElement, 'video-react-big-play-button'))) {
	        return;
	      }

	      var keyCode = e.keyCode || e.which;
	      var ctrl = e.ctrlKey || e.metaKey;
	      var shift = e.shiftKey;
	      var alt = e.altKey;

	      var shortcut = this.shortcuts.filter(function (s) {
	        if (!s.keyCode || s.keyCode - keyCode !== 0) {
	          return false;
	        }
	        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
	          return false;
	        }
	        return true;
	      })[0];

	      if (shortcut) {
	        shortcut.handle(player, actions);
	        e.preventDefault();
	      }
	    }

	    // only if player is active and player is ready

	  }, {
	    key: 'canBeClicked',
	    value: function canBeClicked(player, e) {
	      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions,
	          clickable = _props2.clickable;

	      if (!this.canBeClicked(player, e) || !clickable) {
	        return;
	      }
	      this.togglePlay(player, actions);
	      // e.preventDefault();
	    }
	  }, {
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick(e) {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions,
	          dblclickable = _props3.dblclickable;

	      if (!this.canBeClicked(player, e) || !dblclickable) {
	        return;
	      }
	      this.toggleFullscreen(player, actions);
	      // e.preventDefault();
	    }

	    // this component dose not render anything
	    // it's just for the key down event

	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return Shortcut;
	}(React.Component);


	Shortcut.propTypes = propTypes$a;
	Shortcut.defaultProps = defaultProps$4;
	Shortcut.displayName = 'Shortcut';

	var propTypes$b = {
	  children: propTypes.any,
	  muted: propTypes.bool,
	  playsInline: propTypes.bool,
	  aspectRatio: propTypes.string,
	  className: propTypes.string,
	  videoId: propTypes.string,
	  startTime: propTypes.number,
	  loop: propTypes.bool,
	  autoPlay: propTypes.bool,
	  src: propTypes.string,
	  poster: propTypes.string,
	  preload: propTypes.oneOf(['auto', 'metadata', 'none']),

	  onLoadStart: propTypes.func,
	  onWaiting: propTypes.func,
	  onCanPlay: propTypes.func,
	  onCanPlayThrough: propTypes.func,
	  onPlaying: propTypes.func,
	  onEnded: propTypes.func,
	  onSeeking: propTypes.func,
	  onSeeked: propTypes.func,
	  onPlay: propTypes.func,
	  onPause: propTypes.func,
	  onProgress: propTypes.func,
	  onDurationChange: propTypes.func,
	  onError: propTypes.func,
	  onSuspend: propTypes.func,
	  onAbort: propTypes.func,
	  onEmptied: propTypes.func,
	  onStalled: propTypes.func,
	  onLoadedMetadata: propTypes.func,
	  onLoadedData: propTypes.func,
	  onTimeUpdate: propTypes.func,
	  onRateChange: propTypes.func,
	  onVolumeChange: propTypes.func,

	  store: propTypes.object
	};

	var defaultProps$5 = {
	  muted: false,
	  playsInline: false,
	  aspectRatio: 'auto'
	};

	var Player = function (_Component) {
	  inherits(Player, _Component);

	  function Player(props) {
	    classCallCheck(this, Player);

	    var _this = possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

	    _this.state = {
	      subVI: false
	    };
	    _this.controlsHideTimer = null;
	    _this.video = null; // the Video component
	    _this.manager = new Manager(props.store);
	    _this.actions = _this.manager.getActions();
	    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));

	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.getChildren = _this.getChildren.bind(_this);
	    _this.handleMouseMove = throttle(_this.handleMouseMove.bind(_this), 250);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.startControlsTimer = _this.startControlsTimer.bind(_this);
	    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.switchSub = _this.switchSub.bind(_this);
	    return _this;
	  }

	  createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleResize();
	      window.addEventListener('resize', this.handleResize);

	      fullscreen.addEventListener(this.handleFullScreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove event listener
	      window.removeEventListener('resize', this.handleResize);
	      fullscreen.removeEventListener(this.handleFullScreenChange);
	      if (this.controlsHideTimer) {
	        window.clearTimeout(this.controlsHideTimer);
	      }
	    }
	  }, {
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren(props, fullProps) {
	      var _this2 = this;

	      return [React__default.createElement(Video, _extends({
	        ref: function ref(c) {
	          _this2.video = c;
	          _this2.manager.video = _this2.video;
	        },
	        key: 'video'
	      }, fullProps)), React__default.createElement(ControlBar, _extends({ key: 'control-bar'
	      }, props)), React__default.createElement(Shortcut, _extends({ key: 'short-cut'
	      }, props))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren(props) {
	      var propsWithoutChildren = _extends({}, props, {
	        children: null
	      });
	      var children = React__default.Children.toArray(this.props.children).filter(function (e) {
	        return !isVideoChild(e);
	      });
	      var defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
	      return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
	    }

	    // get redux state
	    // { player, operation }

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.manager.getState();
	    }

	    // get playback rate

	  }, {
	    key: 'play',


	    // play the video
	    value: function play() {
	      this.video.play();
	    }

	    // pause the video

	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }

	    // Change the video source and re-load the video:

	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }

	    // Add a new text track to the video

	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;

	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }

	    // Check if your browser can play different types of video:

	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;

	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }

	    // seek video by time

	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      this.video.seek(time);
	    }

	    // jump forward x seconds

	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.video.forward(seconds);
	    }

	    // jump back x seconds

	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.video.replay(seconds);
	    }

	    // enter or exist full screen

	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      this.video.toggleFullscreen();
	    }

	    // subscribe to player state change

	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener) {
	      return this.manager.subscribeToPlayerStateChange(listener);
	    }

	    // player resize

	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleFullScreenChange',
	    value: function handleFullScreenChange() {
	      this.actions.handleFullscreenChange(fullscreen.isFullscreen);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'startControlsTimer',
	    value: function startControlsTimer() {
	      var _this3 = this;

	      this.actions.userActivate(true);
	      clearTimeout(this.controlsHideTimer);
	      this.controlsHideTimer = setTimeout(function () {
	        _this3.actions.userActivate(false);
	      }, 3000);
	    }
	  }, {
	    key: 'handleStateChange',
	    value: function handleStateChange(state, prevState) {
	      if (state.isFullscreen !== prevState.isFullscreen) {
	        this.handleResize();
	      }
	      this.forceUpdate(); // re-render
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.actions.activate(true);
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.actions.activate(false);
	    }
	  }, {
	    key: 'switchSub',
	    value: function switchSub() {
	      var _this4 = this;

	      var currentTime = this.getState().player.currentTime;
	      this.setState({ subVI: !this.state.subVI }, function () {
	        _this4.seek(currentTime);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var fluid = this.props.fluid;

	      var _manager$getState = this.manager.getState(),
	          player = _manager$getState.player;

	      var paused = player.paused,
	          hasStarted = player.hasStarted,
	          waiting = player.waiting,
	          seeking = player.seeking,
	          isFullscreen = player.isFullscreen,
	          userActivity = player.userActivity;


	      var props = _extends({}, this.props, {
	        player: player,
	        src: this.props.src[!this.state.subVI ? 'en' : 'vi'],
	        switchSub: this.switchSub,
	        actions: this.actions,
	        manager: this.manager,
	        store: this.manager.store,
	        video: this.video ? this.video.video : null
	      });
	      var children = this.getChildren(props);

	      return React__default.createElement(
	        'div',
	        {
	          className: classnames({
	            'video-react-controls-enabled': true,
	            'video-has-started': hasStarted,
	            'video-react-paused': paused,
	            'video-playing': !paused,
	            'video-react-waiting': waiting,
	            'video-react-seeking': seeking,
	            'video-react-fluid': fluid,
	            'video-react-fullscreen': isFullscreen,
	            'video-user-inactive': !userActivity,
	            'video-user-active': userActivity,
	            'video-react-workinghover': !IS_IOS
	          }, 'ekiio-video-player', this.props.className),
	          ref: function ref(c) {
	            _this5.manager.rootElement = c;
	          },
	          onTouchStart: this.handleMouseDown,
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onKeyDown: this.handleKeyDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          tabIndex: '-1'
	        },
	        children
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get$$1() {
	      return this.video.playbackRate;
	    }

	    // set playback rate
	    // speed of video
	    ,
	    set: function set$$1(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get$$1() {
	      return this.video.muted;
	    },
	    set: function set$$1(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get$$1() {
	      return this.video.volume;
	    },
	    set: function set$$1(val) {
	      this.video.volume = val;
	    }

	    // video width

	  }, {
	    key: 'videoWidth',
	    get: function get$$1() {
	      return this.video.videoWidth;
	    }

	    // video height

	  }, {
	    key: 'videoHeight',
	    get: function get$$1() {
	      return this.video.videoHeight;
	    }
	  }]);
	  return Player;
	}(React.Component);


	Player.contextTypes = { store: propTypes.object };
	Player.propTypes = propTypes$b;
	Player.defaultProps = defaultProps$5;
	Player.displayName = 'Player';

	var propTypes$c = {
	  player: propTypes.object
	};

	function CurrentTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration;

	  var formattedTime = formatTime(currentTime, duration);
	  return React__default.createElement(
	    'div',
	    null,
	    React__default.createElement(
	      'div',
	      null,
	      React__default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Current Time '
	      ),
	      formattedTime
	    )
	  );
	}

	CurrentTimeDisplay.propTypes = propTypes$c;
	CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';

	var propTypes$d = {
	  actions: propTypes.object,
	  player: propTypes.object
	};

	var ChangeSubVi = function (_React$Component) {
	  inherits(ChangeSubVi, _React$Component);

	  function ChangeSubVi(props, context) {
	    classCallCheck(this, ChangeSubVi);
	    return possibleConstructorReturn(this, (ChangeSubVi.__proto__ || Object.getPrototypeOf(ChangeSubVi)).call(this, props, context));
	  }

	  createClass(ChangeSubVi, [{
	    key: 'handleSwitchSub',
	    value: function handleSwitchSub() {
	      this.props.switchSub();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React__default.createElement(
	        'button',
	        { className: 'btn-switch-sub', type: 'button',
	          style: { zIndex: 2, position: 'absolute' },
	          onClick: function onClick() {
	            return _this2.handleSwitchSub();
	          } },
	        'VI/EN'
	      );
	    }
	  }]);
	  return ChangeSubVi;
	}(React__default.Component);

	exports.Player = Player;
	exports.Video = Video;
	exports.TogglePlay = PlayToggle;
	exports.CurrentTime = CurrentTimeDisplay;
	exports.ChangeSubVi = ChangeSubVi;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ekiio-video-react.js.map
