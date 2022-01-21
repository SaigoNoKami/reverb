"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 8991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./types/player.ts
var player = __webpack_require__(6716);
;// CONCATENATED MODULE: ./store/reducers/playerReducer.ts

const initialState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 50,
    pause: true
};
const playerReducer = (state = initialState, action)=>{
    switch(action.type){
        case player/* PlayerActionTypes.PAUSE */.N.PAUSE:
            return {
                ...state,
                pause: true
            };
        case player/* PlayerActionTypes.PLAY */.N.PLAY:
            return {
                ...state,
                pause: false
            };
        case player/* PlayerActionTypes.SET_CURRENT_TIME */.N.SET_CURRENT_TIME:
            return {
                ...state,
                currentTime: action.payload
            };
        case player/* PlayerActionTypes.SET_VOLUME */.N.SET_VOLUME:
            return {
                ...state,
                volume: action.payload
            };
        case player/* PlayerActionTypes.SET_DURATION */.N.SET_DURATION:
            return {
                ...state,
                duration: action.payload
            };
        case player/* PlayerActionTypes.SET_ACTIVE */.N.SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
                duration: 0,
                currentTime: 0
            };
        default:
            return state;
    }
};

// EXTERNAL MODULE: ./types/track.ts
var track = __webpack_require__(4665);
;// CONCATENATED MODULE: ./store/reducers/trackReducer.ts

const trackReducer_initialState = {
    tracks: [],
    error: ''
};
const trackReducer = (state = trackReducer_initialState, action)=>{
    switch(action.type){
        case track/* TrackActionTypes.FETCH_TRACKS_ERROR */.i.FETCH_TRACKS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case track/* TrackActionTypes.FETCH_TRACKS */.i.FETCH_TRACKS:
            return {
                error: '',
                tracks: action.payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/index.ts




const rootReducer = (0,external_redux_.combineReducers)({
    player: playerReducer,
    track: trackReducer
});
const reducer = (state, action)=>{
    if (action.type === external_next_redux_wrapper_.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        ;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./store/index.ts
// create a makeStore function




const makeStore = (context)=>(0,external_redux_.createStore)(reducer, (0,external_redux_.applyMiddleware)((external_redux_thunk_default())))
;
// export an assembled wrapper
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
    debug: true
});


/***/ }),

/***/ 4665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ TrackActionTypes1)
/* harmony export */ });
var TrackActionTypes1;

(function(TrackActionTypes) {
    TrackActionTypes["FETCH_TRACKS"] = "FETCH_TRACKS";
    TrackActionTypes["FETCH_TRACKS_ERROR"] = "FETCH_TRACKS_ERROR";
})(TrackActionTypes1 || (TrackActionTypes1 = {
}));


/***/ })

};
;