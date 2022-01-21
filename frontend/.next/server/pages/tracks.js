(() => {
var exports = {};
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 350:
/***/ ((module) => {

// Exports
module.exports = {
	"track": "TrackItem_track__Cl8gW"
};


/***/ }),

/***/ 3637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tracks),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layout/MainLayout.tsx + 3 modules
var MainLayout = __webpack_require__(9382);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/TrackItem.module.scss
var TrackItem_module = __webpack_require__(350);
var TrackItem_module_default = /*#__PURE__*/__webpack_require__.n(TrackItem_module);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: ./hooks/useActions.ts + 2 modules
var useActions = __webpack_require__(1780);
;// CONCATENATED MODULE: ./components/TrackItem.tsx







const TrackItem = ({ track , active =false  })=>{
    const router = (0,router_.useRouter)();
    const { playTrack , pauseTrack , setActiveTrack  } = (0,useActions/* useActions */.o)();
    const play = (e)=>{
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
        className: (TrackItem_module_default()).track,
        onClick: ()=>router.push('/tracks/' + track._id)
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                onClick: play,
                children: !active ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.PlayArrow, {
                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.Pause, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                width: 70,
                height: 70,
                src: 'http://diw4nk35u3ll.cloudfront.net/' + track.picture
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                container: true,
                direction: "column",
                style: {
                    width: 200,
                    margin: '0 20px'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: track.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            fontSize: 12,
                            color: 'gray'
                        },
                        children: track.artist
                    })
                ]
            }),
            active && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "02:42 / 03:22"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                onClick: (e)=>e.stopPropagation()
                ,
                style: {
                    marginLeft: 'auto'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Delete, {
                })
            })
        ]
    }));
};
/* harmony default export */ const components_TrackItem = (TrackItem);

;// CONCATENATED MODULE: ./components/TrackList.tsx




const TrackList = ({ tracks  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
        container: true,
        direction: "column",
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
            p: 2,
            children: tracks.map((track)=>/*#__PURE__*/ jsx_runtime_.jsx(components_TrackItem, {
                    track: track
                }, track._id)
            )
        })
    }));
};
/* harmony default export */ const components_TrackList = (TrackList);

// EXTERNAL MODULE: ./hooks/useTypedSelector.ts
var useTypedSelector = __webpack_require__(5062);
// EXTERNAL MODULE: ./store/index.ts + 3 modules
var store = __webpack_require__(8991);
// EXTERNAL MODULE: ./types/track.ts
var track = __webpack_require__(4665);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./store/actions-creators/track.ts


const fetchTracks = ()=>{
    return async (dispatch)=>{
        try {
            const response = await external_axios_default().get('http://localhost:5000/tracks');
            dispatch({
                type: track/* TrackActionTypes.FETCH_TRACKS */.i.FETCH_TRACKS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: track/* TrackActionTypes.FETCH_TRACKS_ERROR */.i.FETCH_TRACKS_ERROR,
                payload: 'Помилка завантаження'
            });
        }
    };
};

;// CONCATENATED MODULE: ./pages/tracks/index.tsx









const Index = ()=>{
    const router = (0,router_.useRouter)();
    const { tracks , error  } = (0,useTypedSelector/* useTypedSelector */.i)((state)=>state.track
    );
    if (error) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(MainLayout/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: error
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(MainLayout/* default */.Z, {
        title: "Список треков - музыкальная площадка",
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
            container: true,
            justifyContent: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                style: {
                    width: 900
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        p: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Список треков"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    onClick: ()=>router.push('/tracks/create')
                                    ,
                                    children: "Завантажити"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_TrackList, {
                        tracks: tracks
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const tracks = (Index);
const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(async ({ store  })=>{
    const dispatch = store.dispatch;
    await dispatch(await fetchTracks());
});


/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 8736:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 3033:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ 5555:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ 3974:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 5031:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 6256:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ 3181:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ 5168:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ 5722:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 4104:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 2105:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ 4992:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ 9746:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ 4176:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 3737:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [382,991], () => (__webpack_exec__(3637)));
module.exports = __webpack_exports__;

})();