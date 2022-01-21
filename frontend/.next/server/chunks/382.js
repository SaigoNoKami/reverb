exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 5239:
/***/ ((module) => {

// Exports
module.exports = {
	"player": "Player_player__H5WBX"
};


/***/ }),

/***/ 1780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ useActions)
});

// NAMESPACE OBJECT: ./store/actions-creators/player.ts
var player_namespaceObject = {};
__webpack_require__.r(player_namespaceObject);
__webpack_require__.d(player_namespaceObject, {
  "pauseTrack": () => (pauseTrack),
  "playTrack": () => (playTrack),
  "setActiveTrack": () => (setActiveTrack),
  "setCurrentTime": () => (setCurrentTime),
  "setDuration": () => (setDuration),
  "setVolume": () => (setVolume)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./types/player.ts
var player = __webpack_require__(6716);
;// CONCATENATED MODULE: ./store/actions-creators/player.ts

const playTrack = ()=>{
    return {
        type: player/* PlayerActionTypes.PLAY */.N.PLAY
    };
};
const pauseTrack = ()=>{
    return {
        type: player/* PlayerActionTypes.PAUSE */.N.PAUSE
    };
};
const setDuration = (payload)=>{
    return {
        type: player/* PlayerActionTypes.SET_DURATION */.N.SET_DURATION,
        payload
    };
};
const setVolume = (payload)=>{
    return {
        type: player/* PlayerActionTypes.SET_VOLUME */.N.SET_VOLUME,
        payload
    };
};
const setCurrentTime = (payload)=>{
    return {
        type: player/* PlayerActionTypes.SET_CURRENT_TIME */.N.SET_CURRENT_TIME,
        payload
    };
};
const setActiveTrack = (payload)=>{
    return {
        type: player/* PlayerActionTypes.SET_ACTIVE */.N.SET_ACTIVE,
        payload
    };
};

;// CONCATENATED MODULE: ./store/actions-creators/index.ts

/* harmony default export */ const actions_creators = ({
    ...player_namespaceObject
});

;// CONCATENATED MODULE: ./hooks/useActions.ts



const useActions = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    return (0,external_redux_.bindActionCreators)(actions_creators, dispatch);
};


/***/ }),

/***/ 5062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTypedSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 9382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(5555);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(3033);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(8736);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(5722);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(4104);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(4176);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__(4992);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3181);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(5168);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@material-ui/icons/MoveToInbox"
var MoveToInbox_ = __webpack_require__(3737);
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(9746);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Navbar.tsx

















const menuItems = [
    {
        text: 'Головна',
        href: '/'
    },
    {
        text: 'Треки',
        href: '/tracks'
    },
    {
        text: 'Альбоми',
        href: '/albums'
    }, 
];
function Navbar() {
    const [open, setOpen] = external_react_.useState(false);
    const router = (0,router_.useRouter)();
    const handleDrawerOpen = ()=>{
        setOpen(true);
    };
    const handleDrawerClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerOpen,
                            edge: "start",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            children: "Reverb"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                variant: "persistent",
                anchor: "left",
                open: open,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            onClick: handleDrawerClose,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                        children: menuItems.map(({ text , href  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                button: true,
                                onClick: ()=>router.push(href)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: text
                                    })
                                ]
                            }, href)
                        )
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: ./styles/Player.module.scss
var Player_module = __webpack_require__(5239);
var Player_module_default = /*#__PURE__*/__webpack_require__.n(Player_module);
;// CONCATENATED MODULE: ./components/TrackProgress.tsx


const TrackProgress = ({ left , right , onChange  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: 'flex'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "range",
                min: 0,
                max: right,
                value: left,
                onChange: onChange
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    left,
                    " / ",
                    right
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_TrackProgress = (TrackProgress);

// EXTERNAL MODULE: ./hooks/useTypedSelector.ts
var useTypedSelector = __webpack_require__(5062);
// EXTERNAL MODULE: ./hooks/useActions.ts + 2 modules
var useActions = __webpack_require__(1780);
;// CONCATENATED MODULE: ./components/Player.tsx








let audio;
const Player = ()=>{
    const { pause , volume , active , duration , currentTime  } = (0,useTypedSelector/* useTypedSelector */.i)((state)=>state.player
    );
    const { pauseTrack , playTrack , setVolume , setCurrentTime , setDuration , setActiveTrack  } = (0,useActions/* useActions */.o)();
    (0,external_react_.useEffect)(()=>{
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [
        active
    ]);
    const setAudio = ()=>{
        if (active) {
            audio.src = 'http://diw4nk35u3ll.cloudfront.net/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = ()=>{
                setDuration(Math.ceil(audio.duration));
            };
            audio.ontimeupdate = ()=>{
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };
    const play = ()=>{
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };
    const changeVolume = (e)=>{
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };
    const changeCurrentTime = (e)=>{
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };
    if (!active) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Player_module_default()).player,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                onClick: play,
                children: pause ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.PlayArrow, {
                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.Pause, {
                })
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
                        children: active === null || active === void 0 ? void 0 : active.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            fontSize: 12,
                            color: 'gray'
                        },
                        children: active === null || active === void 0 ? void 0 : active.artist
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_TrackProgress, {
                left: currentTime,
                right: duration,
                onChange: changeCurrentTime
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(icons_.VolumeUp, {
                style: {
                    marginLeft: 'auto'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_TrackProgress, {
                left: volume,
                right: 100,
                onChange: changeVolume
            })
        ]
    }));
};
/* harmony default export */ const components_Player = (Player);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layout/MainLayout.tsx






const MainLayout = ({ children , title , description , keywords  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title || 'Музична платформа'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `Музична платформа. Відправ свій трек у вічність.` + description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: keywords || "Музика, треки, виконавці"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Security-Policy",
                        content: "upgrade-insecure-requests"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
                style: {
                    margin: '90px 0'
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Player, {
            })
        ]
    }));
};
/* harmony default export */ const layout_MainLayout = (MainLayout);


/***/ }),

/***/ 6716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PlayerActionTypes1)
/* harmony export */ });
var PlayerActionTypes1;

(function(PlayerActionTypes) {
    PlayerActionTypes["PLAY"] = "PLAY";
    PlayerActionTypes["PAUSE"] = "PAUSE";
    PlayerActionTypes["SET_ACTIVE"] = "SET_ACTIVE";
    PlayerActionTypes["SET_DURATION"] = "SET_DURATION";
    PlayerActionTypes["SET_CURRENT_TIME"] = "SET_CURRENT_TIME";
    PlayerActionTypes["SET_VOLUME"] = "SET_VOLUME";
})(PlayerActionTypes1 || (PlayerActionTypes1 = {
}));


/***/ })

};
;