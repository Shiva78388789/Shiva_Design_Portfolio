// Components bundle — 20 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:102 dolby sound
function DolbySound(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13.333,
    viewBox: "0 0 12 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1.333,
      width: 12,
      height: 13.333,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 13.333 C 6.367 13.333 6.667 13.033 6.667 12.667 L 6.667 0.667 C 6.667 0.3 6.367 0 6 0 C 5.633 0 5.333 0.3 5.333 0.667 L 5.333 12.667 C 5.333 13.033 5.633 13.333 6 13.333 Z M 3.333 10.667 C 3.7 10.667 4 10.367 4 10 L 4 3.333 C 4 2.967 3.7 2.667 3.333 2.667 C 2.967 2.667 2.667 2.967 2.667 3.333 L 2.667 10 C 2.667 10.367 2.967 10.667 3.333 10.667 Z M 1.333 7.333 C 1.333 7.7 1.033 8 0.667 8 C 0.3 8 0 7.7 0 7.333 L 0 6 C 0 5.633 0.3 5.333 0.667 5.333 C 1.033 5.333 1.333 5.633 1.333 6 L 1.333 7.333 Z M 8.667 10.667 C 9.033 10.667 9.333 10.367 9.333 10 L 9.333 3.333 C 9.333 2.967 9.033 2.667 8.667 2.667 C 8.3 2.667 8 2.967 8 3.333 L 8 10 C 8 10.367 8.3 10.667 8.667 10.667 Z M 10.667 7.333 L 10.667 6 C 10.667 5.633 10.967 5.333 11.333 5.333 C 11.7 5.333 12 5.633 12 6 L 12 7.333 C 12 7.7 11.7 8 11.333 8 C 10.967 8 10.667 7.7 10.667 7.333 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:19 Logos / chrome-fill
function LogosChromeFill(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.827 19.763 C 3.35 18.771 0 14.777 0 10 C 0 8.178 0.487 6.47 1.339 4.998 L 5.622 12.417 C 6.103 13.289 6.834 13.998 7.721 14.452 C 8.607 14.906 9.609 15.084 10.598 14.965 L 7.828 19.763 L 7.827 19.763 Z M 10 20 L 14.287 12.575 C 14.755 11.798 15.001 10.907 15 10 C 15.002 8.918 14.651 7.865 14 7 L 19.542 7 C 19.84 7.947 20 8.955 20 10 C 20 15.523 15.523 20 10 20 Z M 12.572 11.545 C 12.303 11.993 11.922 12.363 11.467 12.618 C 11.011 12.874 10.496 13.006 9.974 13.001 C 9.452 12.997 8.94 12.856 8.489 12.592 C 8.037 12.329 7.663 11.953 7.402 11.5 L 7.373 11.45 C 7.12 10.991 6.991 10.474 7 9.95 C 7.009 9.426 7.155 8.913 7.423 8.463 C 7.692 8.013 8.074 7.641 8.531 7.385 C 8.988 7.128 9.504 6.996 10.028 7.001 C 10.552 7.006 11.066 7.148 11.518 7.413 C 11.97 7.679 12.345 8.058 12.605 8.513 C 12.865 8.968 13.001 9.483 13 10.007 C 12.998 10.531 12.86 11.046 12.598 11.5 L 12.572 11.545 Z M 2.632 3.239 C 3.568 2.217 4.706 1.401 5.975 0.843 C 7.243 0.286 8.614 -0.002 10 0 C 11.756 -0.001 13.481 0.461 15.001 1.339 C 16.522 2.217 17.784 3.479 18.662 5 L 10 5 C 9.02 5 8.062 5.287 7.245 5.827 C 6.427 6.367 5.786 7.134 5.401 8.035 L 2.632 3.239 L 2.632 3.239 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 1:23 Media / hd-line
function MediaHdLine(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18,
    viewBox: "0 0 20 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 20,
      height: 18,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 2 L 2 16 L 18 16 L 18 2 L 2 2 Z M 1 0 L 19 0 C 19.265 0 19.52 0.105 19.707 0.293 C 19.895 0.48 20 0.735 20 1 L 20 17 C 20 17.265 19.895 17.52 19.707 17.707 C 19.52 17.895 19.265 18 19 18 L 1 18 C 0.735 18 0.48 17.895 0.293 17.707 C 0.105 17.52 0 17.265 0 17 L 0 1 C 0 0.735 0.105 0.48 0.293 0.293 C 0.48 0.105 0.735 0 1 0 L 1 0 Z M 5.5 8.25 L 7.5 8.25 L 7.5 6 L 9 6 L 9 12 L 7.5 12 L 7.5 9.75 L 5.5 9.75 L 5.5 12 L 4 12 L 4 6 L 5.5 6 L 5.5 8.25 Z M 12.5 7.5 L 12.5 10.5 L 14 10.5 C 14.133 10.5 14.26 10.447 14.354 10.354 C 14.447 10.26 14.5 10.133 14.5 10 L 14.5 8 C 14.5 7.867 14.447 7.74 14.354 7.646 C 14.26 7.553 14.133 7.5 14 7.5 L 12.5 7.5 Z M 11 6 L 14 6 C 14.53 6 15.039 6.211 15.414 6.586 C 15.789 6.961 16 7.47 16 8 L 16 10 C 16 10.53 15.789 11.039 15.414 11.414 C 15.039 11.789 14.53 12 14 12 L 11 12 L 11 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 1:30540 BOX
function BOX(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 836,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 130,
      width: 360,
      height: 510,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(151,151,151)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 360,
      height: 110,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 360,
    height: 110,
    viewBox: "0 0 360 110",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 110,
      color: "rgb(243,243,243)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 110 L 0 110 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 110,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 110,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d84d53ca01adbc5d-b5b1d71f",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,312,-30)",
      transformOrigin: "0 0",
      width: 402,
      height: 507
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-59c823025f6d4ece-7ea5040d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,468.984,-4.500)",
      transformOrigin: "0 0",
      width: 488,
      height: 268
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,360,0)",
      transformOrigin: "0 0",
      width: 360,
      height: 110,
      opacity: 0.716,
      background: "linear-gradient(270deg, rgba(3,3,3,0.8) 5.93%, rgba(0,0,0,0.7079) 93.12%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 634,
      width: 72,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 72,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 75,
      height: 17,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "rgb(57,57,57)"
    }
  }, "Postpaid "))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 574,
      width: 32,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 17,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "rgb(57,57,57)"
    }
  }, "DTH")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 504,
      width: 153,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 153,
      height: 36,
      borderRadius: 3,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.500px rgb(234,234,234), 0px 0px 3.500px 0px rgba(0,0,0,0.22)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11,
      width: 103,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "9977779330_DSL"), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 131,
      top: 16,
      width: 10,
      height: 5,
      color: "rgb(109,114,120)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.944 0.054 C 9.869 -0.018 9.747 -0.018 9.672 0.054 L 5 4.554 L 0.328 0.054 C 0.253 -0.018 0.131 -0.018 0.056 0.054 C -0.019 0.126 -0.019 0.243 0.056 0.315 L 4.864 4.946 C 4.9 4.981 4.949 5 5 5 C 5.051 5 5.1 4.981 5.136 4.946 L 9.944 0.315 C 10.019 0.243 10.019 0.126 9.944 0.054 Z",
    fill: "rgb(109,114,120)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.672 0.054 L 9.395 -0.234 L 9.395 -0.234 L 9.672 0.054 Z M 5 4.554 L 4.723 4.842 L 5 5.109 L 5.278 4.842 L 5 4.554 Z M 0.328 0.054 L 0.05 0.342 L 0.05 0.342 L 0.328 0.054 Z M 0.056 0.315 L -0.221 0.604 L -0.221 0.604 L 0.056 0.315 Z M 4.864 4.946 L 5.142 4.658 L 5.142 4.658 L 4.864 4.946 Z M 5.136 4.946 L 5.413 5.234 L 5.413 5.234 L 5.136 4.946 Z M 9.944 0.315 L 9.666 0.027 L 9.666 0.027 L 9.944 0.315 Z M 10.221 -0.234 C 9.991 -0.455 9.625 -0.455 9.395 -0.234 L 9.95 0.342 C 9.87 0.419 9.746 0.419 9.666 0.342 L 10.221 -0.234 Z M 9.395 -0.234 L 4.723 4.266 L 5.278 4.842 L 9.95 0.342 L 9.395 -0.234 Z M 5.278 4.266 L 0.605 -0.234 L 0.05 0.342 L 4.723 4.842 L 5.278 4.266 Z M 0.605 -0.234 C 0.375 -0.455 0.009 -0.455 -0.221 -0.234 L 0.334 0.342 C 0.254 0.419 0.13 0.419 0.05 0.342 L 0.605 -0.234 Z M -0.221 -0.234 C -0.46 -0.004 -0.46 0.374 -0.221 0.604 L 0.334 0.027 C 0.422 0.112 0.422 0.257 0.334 0.342 L -0.221 -0.234 Z M -0.221 0.604 L 4.587 5.234 L 5.142 4.658 L 0.334 0.027 L -0.221 0.604 Z M 4.587 5.234 C 4.699 5.342 4.848 5.4 5 5.4 L 5 4.6 C 5.051 4.6 5.102 4.619 5.142 4.658 L 4.587 5.234 Z M 5 5.4 C 5.153 5.4 5.301 5.342 5.413 5.234 L 4.858 4.658 C 4.898 4.619 4.95 4.6 5 4.6 L 5 5.4 Z M 5.413 5.234 L 10.221 0.604 L 9.666 0.027 L 4.858 4.658 L 5.413 5.234 Z M 10.221 0.604 C 10.46 0.374 10.46 -0.004 10.221 -0.234 L 9.666 0.342 C 9.578 0.257 9.578 0.112 9.666 0.027 L 10.221 0.604 Z",
    fill: "rgb(57,57,57)",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 564,
      width: 153,
      height: 36,
      borderRadius: 3,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.500px rgb(234,234,234), 0px 0px 3.500px 0px rgba(0,0,0,0.22)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 195,
      top: 575,
      width: 103,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "Add DTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 624,
      width: 153,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 153,
      height: 36,
      borderRadius: 3,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.500px rgb(234,234,234), 0px 0px 3.500px 0px rgba(0,0,0,0.22)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11,
      width: 103,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "8000000000"), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 131,
      top: 16,
      width: 10,
      height: 5,
      color: "rgb(109,114,120)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.944 0.054 C 9.869 -0.018 9.747 -0.018 9.672 0.054 L 5 4.554 L 0.328 0.054 C 0.253 -0.018 0.131 -0.018 0.056 0.054 C -0.019 0.126 -0.019 0.243 0.056 0.315 L 4.864 4.946 C 4.9 4.981 4.949 5 5 5 C 5.051 5 5.1 4.981 5.136 4.946 L 9.944 0.315 C 10.019 0.243 10.019 0.126 9.944 0.054 Z",
    fill: "rgb(109,114,120)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.672 0.054 L 9.395 -0.234 L 9.395 -0.234 L 9.672 0.054 Z M 5 4.554 L 4.723 4.842 L 5 5.109 L 5.278 4.842 L 5 4.554 Z M 0.328 0.054 L 0.05 0.342 L 0.05 0.342 L 0.328 0.054 Z M 0.056 0.315 L -0.221 0.604 L -0.221 0.604 L 0.056 0.315 Z M 4.864 4.946 L 5.142 4.658 L 5.142 4.658 L 4.864 4.946 Z M 5.136 4.946 L 5.413 5.234 L 5.413 5.234 L 5.136 4.946 Z M 9.944 0.315 L 9.666 0.027 L 9.666 0.027 L 9.944 0.315 Z M 10.221 -0.234 C 9.991 -0.455 9.625 -0.455 9.395 -0.234 L 9.95 0.342 C 9.87 0.419 9.746 0.419 9.666 0.342 L 10.221 -0.234 Z M 9.395 -0.234 L 4.723 4.266 L 5.278 4.842 L 9.95 0.342 L 9.395 -0.234 Z M 5.278 4.266 L 0.605 -0.234 L 0.05 0.342 L 4.723 4.842 L 5.278 4.266 Z M 0.605 -0.234 C 0.375 -0.455 0.009 -0.455 -0.221 -0.234 L 0.334 0.342 C 0.254 0.419 0.13 0.419 0.05 0.342 L 0.605 -0.234 Z M -0.221 -0.234 C -0.46 -0.004 -0.46 0.374 -0.221 0.604 L 0.334 0.027 C 0.422 0.112 0.422 0.257 0.334 0.342 L -0.221 -0.234 Z M -0.221 0.604 L 4.587 5.234 L 5.142 4.658 L 0.334 0.027 L -0.221 0.604 Z M 4.587 5.234 C 4.699 5.342 4.848 5.4 5 5.4 L 5 4.6 C 5.051 4.6 5.102 4.619 5.142 4.658 L 4.587 5.234 Z M 5 5.4 C 5.153 5.4 5.301 5.342 5.413 5.234 L 4.858 4.658 C 4.898 4.619 4.95 4.6 5 4.6 L 5 5.4 Z M 5.413 5.234 L 10.221 0.604 L 9.666 0.027 L 4.858 4.658 L 5.413 5.234 Z M 10.221 0.604 C 10.46 0.374 10.46 -0.004 10.221 -0.234 L 9.666 0.342 C 9.578 0.257 9.578 0.112 9.666 0.027 L 10.221 0.604 Z",
    fill: "rgb(57,57,57)",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 514,
      width: 123,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 135,
      height: 17,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "rgb(57,57,57)"
    }
  }, "Fiber + Landline")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 92,
      width: 329,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Four Services. One Plan. One Bill."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 54,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 360,
    height: 54,
    viewBox: "0 0 360 54",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 54,
      color: "rgb(216,216,216)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 54 L 0 54 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 54,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4cacb4e5c5a212db-622a60d2",
    style: {
      position: "absolute",
      left: -1,
      top: -2,
      width: 362.88,
      height: 60.414
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 462,
      width: 142,
      height: 36,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "18px",
      color: "rgb(57,57,57)",
      textTransform: "uppercase"
    }
  }, "Your connections"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 274,
      top: 459,
      width: 62,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "right",
      whiteSpace: "pre-wrap",
      lineHeight: "16px",
      color: "rgb(34,141,200)",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(34,141,200)",
      fontSize: 20
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "rgb(105,105,105)",
      fontSize: 20
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "rgb(105,105,105)",
      fontSize: 16
    }
  }, "5")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 94,
      top: 74,
      width: 173,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "14px",
      letterSpacing: "0.286px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      display: "inline-block"
    }
  }, "Introducin", "g One Airtel Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 170,
      top: 463,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.333,
    height: 13.333,
    viewBox: "0 0 13.333 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.332,
      top: 1.333,
      width: 13.333,
      height: 13.333,
      color: "rgb(34,141,200)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.667 0 C 2.987 0 0 2.987 0 6.667 C 0 10.347 2.987 13.333 6.667 13.333 C 10.347 13.333 13.333 10.347 13.333 6.667 C 13.333 2.987 10.347 0 6.667 0 Z M 6 3.333 L 6 4.667 L 7.333 4.667 L 7.333 3.333 L 6 3.333 Z M 6 6 L 6 10 L 7.333 10 L 7.333 6 L 6 6 Z M 1.332 6.667 C 1.332 9.607 3.725 12 6.665 12 C 9.605 12 11.999 9.607 11.999 6.667 C 11.999 3.727 9.605 1.333 6.665 1.333 C 3.725 1.333 1.332 3.727 1.332 6.667 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 124,
      width: 312,
      height: 290,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 312,
    height: 290,
    viewBox: "0 0 312 290",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 312,
      height: 290,
      borderRadius: 8,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 304 0 C 308.418 0 312 3.582 312 8 L 312 282 C 312 286.418 308.418 290 304 290 L 8 290 C 3.582 290 0 286.418 0 282 L 0 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 116,
      top: 260,
      width: 80.65,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(204,0,0)",
      textTransform: "uppercase"
    }
  }, "View More"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 139,
      height: 30,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "30px",
      color: "rgb(57,57,57)"
    }
  }, "All in One Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 190,
      width: 232,
      height: 46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 85,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,105,105)",
      textTransform: "uppercase"
    }
  }, "Postpaid"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28,
      width: 240,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(0,0,0)"
    }
  }, "95 GB \u2022 Unlimited calls (Local/STD) "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 0,
      width: 92,
      height: 20,
      borderRadius: 8,
      backgroundColor: "rgb(246,246,246)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 88,
      top: 2,
      width: 85,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(228,0,0)",
      textTransform: "uppercase"
    }
  }, "3 Connections")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 4,
      height: 30,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 70,
      width: 168,
      height: 46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 152,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,105,105)",
      textTransform: "uppercase"
    }
  }, "FibER + Landline"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28,
      width: 170,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(0,0,0)"
    }
  }, "500 GB \u2022 Upto 100 mbps  ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 130,
      width: 239,
      height: 46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,105,105)",
      textTransform: "uppercase"
    }
  }, "DTH"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28,
      width: 255,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "pre-wrap",
      lineHeight: "18px",
      color: "rgb(0,0,0)",
      display: "inline-block"
    }
  }, "Xstream box • ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "D"), "500 HD/SD channels ")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 223,
      top: 16,
      width: 73,
      height: 30,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "right",
      lineHeight: "30px",
      color: "rgb(57,57,57)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "1899")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 238,
      top: 45,
      width: 58,
      height: 16,
      opacity: 0.8,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(85,85,85)"
    }
  }, "GST Extra")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 312,
      top: 576,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 0.750,
    viewBox: "0 0 9 0.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 5.625,
      width: 9,
      height: 0.75,
      color: "rgb(228,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.125 C -0.276 -0.125 -0.5 0.099 -0.5 0.375 C -0.5 0.651 -0.276 0.875 0 0.875 L 0 -0.125 Z M 9 0.875 C 9.276 0.875 9.5 0.651 9.5 0.375 C 9.5 0.099 9.276 -0.125 9 -0.125 L 9 0.875 Z M 0 0.875 L 9 0.875 L 9 -0.125 L 0 -0.125 L 0 0.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.750,
    height: 9,
    viewBox: "0 0 0.750 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.625,
      top: 1.5,
      width: 0.75,
      height: 9,
      color: "rgb(228,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.125 9 C -0.125 9.276 0.099 9.5 0.375 9.5 C 0.651 9.5 0.875 9.276 0.875 9 L -0.125 9 Z M 0.875 0 C 0.875 -0.276 0.651 -0.5 0.375 -0.5 C 0.099 -0.5 -0.125 -0.276 -0.125 0 L 0.875 0 Z M 0.875 9 L 0.875 0 L -0.125 0 L -0.125 9 L 0.875 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 694,
      width: 76,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 76,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 76,
      height: 17,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "rgb(57,57,57)"
    }
  }, "Add  on 1 "))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 754,
      width: 72,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 72,
      height: 17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 79,
      height: 17,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "17px",
      color: "rgb(57,57,57)"
    }
  }, "Add  on 2"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 804,
      width: 312,
      height: 32,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "-0.060px",
      color: "rgb(0,142,205)"
    }
  }, "Note: To edit connections, go to Airtel app after plan is activated. "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 684,
      width: 153,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 153,
      height: 36,
      borderRadius: 3,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.500px rgb(234,234,234), 0px 0px 3.500px 0px rgba(0,0,0,0.22)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11,
      width: 103,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "9873762570")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 744,
      width: 153,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 153,
      height: 36,
      borderRadius: 3,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 0.500px rgb(234,234,234), 0px 0px 3.500px 0px rgba(0,0,0,0.22)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11,
      width: 103,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "9087365281"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 591,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 802,
    viewBox: "0 0 375 802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 802,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 802 L 0 802 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 460,
      top: 562,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Dolby Surround Sound"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 460,
      top: 536,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "4K Quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 460,
      top: 588,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Chromecast built-in for smart tv"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 460,
      top: 614,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "550+ SD/HD Channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 598,
      top: 438,
      width: 70,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 32,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 0.500px rgb(2,123,252), 0 0 0 0.500px rgb(2,123,252)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 7,
      width: 43,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(2,123,252)"
    }
  }, "Select")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 460,
      top: 640,
      width: 200,
      height: 32,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Amazon Prime, ZEE 5, Airtel Xstream App & more"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 212,
      width: 333,
      height: 230,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 230,
      borderRadius: 4,
      background: "linear-gradient(125.121deg, rgb(255,87,188) -0.00%, rgb(43,43,255) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.471,
      width: 311,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.200px",
      color: "rgb(255,255,255)"
    }
  }, "Includes HD box features + watch content of 14 OTT Apps"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 24,
      width: 327,
      height: 206,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 211,
      top: 186,
      width: 100,
      borderRadius: 4,
      backgroundColor: "rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Selected")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 66,
      width: 168,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px"
    }
  }, "Watch favourite TV shows & more"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 40,
      width: 107,
      height: 22,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(57,57,57)"
    }
  }, "Xstream Box"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 186,
      width: 54,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B92000"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 40,
      width: 3,
      height: 22,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 158,
      width: 90,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)"
    }
  }, "View all features"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 94,
      width: 142,
      height: 56,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 40,
      width: 88,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "4K video quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      width: 122,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "dolby surround sound"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 0,
      width: 109,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Chromecast built in"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(151,151,151)"
    }
  }, /*#__PURE__*/React.createElement(LogosChromeFill, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(151,151,151)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 40,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.333,
    height: 14.667,
    viewBox: "0 0 9.333 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.332,
      top: 0.667,
      width: 9.333,
      height: 14.667,
      color: "rgb(151,151,151)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.333 0 L 2 0 C 0.893 0 0 0.893 0 2 L 0 12.667 C 0 13.773 0.893 14.667 2 14.667 L 7.333 14.667 C 8.44 14.667 9.333 13.773 9.333 12.667 L 9.333 2 C 9.333 0.893 8.44 0 7.333 0 Z M 8 11.333 L 1.333 11.333 L 1.333 2 L 8 2 L 8 11.333 Z M 6 13.333 L 3.333 13.333 L 3.333 12.667 L 6 12.667 L 6 13.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement(DolbySound, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(151,151,151)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 244,
      top: 41,
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 272.59,
      top: 422,
      width: 749.41,
      height: 306,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 238,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 427.41,
      top: 0,
      width: 322,
      height: 306,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 520.41,
      top: 76,
      width: 157,
      height: 18,
      opacity: 0.1,
      borderRadius: 4,
      backgroundColor: "rgb(22,178,126)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 518.41,
      top: 77,
      width: 161,
      height: 16,
      fontFamily: "\"TondoW01-Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "16px",
      color: "rgb(22,178,126)",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "Ordered "), "100 times", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, " in last 3 days!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 192,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 12,
    viewBox: "0 0 14.667 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.668,
      top: 2,
      width: 14.667,
      height: 12,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.333 0 L 1.333 0 C 0.6 0 0 0.6 0 1.333 L 0 9.333 C 0 10.067 0.6 10.667 1.333 10.667 L 4.667 10.667 L 4.667 12 L 10 12 L 10 10.667 L 13.333 10.667 C 14.067 10.667 14.66 10.067 14.66 9.333 L 14.667 1.333 C 14.667 0.6 14.067 0 13.333 0 Z M 13.333 9.333 L 1.333 9.333 L 1.333 1.333 L 13.333 1.333 L 13.333 9.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 5,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 5,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 8,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 8,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 11,
      top: 8,
      width: 2,
      height: 2,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.75 0 L 0.25 0 C 0.112 0 0 0.112 0 0.25 L 0 1.75 C 0 1.888 0.112 2 0.25 2 L 1.75 2 C 1.888 2 2 1.888 2 1.75 L 2 0.25 C 2 0.112 1.888 0 1.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 167,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.672,
    height: 8.840,
    viewBox: "0 0 7.672 8.840",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.668,
      top: 3.581,
      width: 7.672,
      height: 8.84,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.501 0.045 L 7.507 4.132 C 7.557 4.161 7.599 4.204 7.627 4.254 C 7.656 4.304 7.672 4.362 7.672 4.42 C 7.672 4.478 7.656 4.535 7.627 4.586 C 7.599 4.636 7.557 4.678 7.507 4.707 L 0.501 8.794 C 0.451 8.824 0.393 8.839 0.334 8.84 C 0.275 8.84 0.218 8.824 0.167 8.795 C 0.116 8.766 0.074 8.723 0.044 8.672 C 0.015 8.621 0 8.564 0 8.505 L 0 0.333 C 0 0.275 0.015 0.217 0.045 0.166 C 0.074 0.116 0.116 0.074 0.167 0.044 C 0.218 0.015 0.276 0 0.334 0 C 0.393 0 0.451 0.016 0.501 0.045 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.501 0.045 L 0.375 0.261 L 0.375 0.261 L 0.501 0.045 Z M 7.507 4.132 L 7.633 3.916 L 7.633 3.916 L 7.507 4.132 Z M 7.507 4.707 L 7.633 4.923 L 7.633 4.923 L 7.507 4.707 Z M 0.501 8.794 L 0.375 8.578 L 0.375 8.578 L 0.501 8.794 Z M 0 8.505 L 0.25 8.506 L 0.25 8.505 L 0 8.505 Z M 0 0.333 L 0.25 0.333 L 0.25 0.333 L 0 0.333 Z M 0.375 0.261 L 7.381 4.348 L 7.633 3.916 L 0.627 -0.171 L 0.375 0.261 Z M 7.38 4.348 C 7.393 4.355 7.403 4.366 7.411 4.378 L 7.844 4.13 C 7.794 4.041 7.721 3.968 7.633 3.916 L 7.38 4.348 Z M 7.411 4.378 C 7.418 4.391 7.422 4.405 7.422 4.42 L 7.922 4.42 C 7.922 4.318 7.895 4.218 7.844 4.13 L 7.411 4.378 Z M 7.422 4.42 C 7.422 4.434 7.418 4.449 7.411 4.461 L 7.844 4.71 C 7.895 4.622 7.922 4.522 7.922 4.42 L 7.422 4.42 Z M 7.411 4.461 C 7.403 4.474 7.393 4.484 7.38 4.492 L 7.633 4.923 C 7.721 4.872 7.794 4.798 7.844 4.71 L 7.411 4.461 Z M 7.381 4.491 L 0.375 8.578 L 0.627 9.01 L 7.633 4.923 L 7.381 4.491 Z M 0.375 8.578 C 0.363 8.586 0.348 8.589 0.334 8.59 L 0.335 9.09 C 0.438 9.089 0.539 9.062 0.627 9.01 L 0.375 8.578 Z M 0.334 8.59 C 0.319 8.59 0.304 8.586 0.292 8.578 L 0.042 9.011 C 0.131 9.063 0.232 9.09 0.335 9.09 L 0.334 8.59 Z M 0.292 8.578 C 0.279 8.571 0.268 8.56 0.261 8.548 L -0.172 8.797 C -0.121 8.886 -0.047 8.96 0.042 9.011 L 0.292 8.578 Z M 0.261 8.548 C 0.254 8.535 0.25 8.521 0.25 8.506 L -0.25 8.504 C -0.25 8.607 -0.224 8.708 -0.172 8.797 L 0.261 8.548 Z M 0.25 8.505 L 0.25 0.333 L -0.25 0.333 L -0.25 8.505 L 0.25 8.505 Z M 0.25 0.333 C 0.25 0.319 0.254 0.304 0.261 0.292 L -0.172 0.041 C -0.223 0.13 -0.25 0.231 -0.25 0.334 L 0.25 0.333 Z M 0.261 0.292 C 0.269 0.279 0.279 0.268 0.292 0.261 L 0.043 -0.172 C -0.046 -0.121 -0.12 -0.048 -0.172 0.041 L 0.261 0.292 Z M 0.292 0.261 C 0.305 0.254 0.319 0.25 0.334 0.25 L 0.335 -0.25 C 0.233 -0.25 0.132 -0.224 0.043 -0.172 L 0.292 0.261 Z M 0.334 0.25 C 0.348 0.25 0.363 0.254 0.375 0.261 L 0.627 -0.17 C 0.539 -0.222 0.438 -0.25 0.335 -0.25 L 0.334 0.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 140,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.001,
    height: 13.333,
    viewBox: "0 0 12.001 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1.333,
      width: 12.001,
      height: 13.333,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.999 13.333 C 6.365 13.333 6.665 13.033 6.665 12.667 L 6.665 0.667 C 6.665 0.3 6.365 0 5.999 0 C 5.632 0 5.332 0.3 5.332 0.667 L 5.332 12.667 C 5.332 13.033 5.632 13.333 5.999 13.333 Z M 3.335 10.667 C 3.701 10.667 4.001 10.367 4.001 10 L 4.001 3.333 C 4.001 2.967 3.701 2.667 3.335 2.667 C 2.968 2.667 2.668 2.967 2.668 3.333 L 2.668 10 C 2.668 10.367 2.968 10.667 3.335 10.667 Z M 1.333 7.333 C 1.333 7.7 1.033 8 0.667 8 C 0.3 8 0 7.7 0 7.333 L 0 6 C 0 5.633 0.3 5.333 0.667 5.333 C 1.033 5.333 1.333 5.633 1.333 6 L 1.333 7.333 Z M 8.667 10.667 C 9.033 10.667 9.333 10.367 9.333 10 L 9.333 3.333 C 9.333 2.967 9.033 2.667 8.667 2.667 C 8.3 2.667 8 2.967 8 3.333 L 8 10 C 8 10.367 8.3 10.667 8.667 10.667 Z M 10.668 7.333 L 10.668 6 C 10.668 5.633 10.968 5.333 11.335 5.333 C 11.701 5.333 12.001 5.633 12.001 6 L 12.001 7.333 C 12.001 7.7 11.701 8 11.335 8 C 10.968 8 10.668 7.7 10.668 7.333 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 114,
      width: 16,
      height: 16,
      color: "rgb(105,105,105)"
    }
  }, /*#__PURE__*/React.createElement(MediaHdLine, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(105,105,105)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 467.41,
      top: 166,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Record & Play"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 467.41,
      top: 192,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "More Channels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 467.41,
      top: 140,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Dolby Digital sound"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 467.41,
      top: 114,
      width: 200,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "Premium Video Quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 16,
      width: 180,
      height: 22,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(57,57,57)"
    }
  }, "HD- High Definition"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 54,
      width: 27,
      height: 16,
      fontFamily: "\"Tondo Corp\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "pre-wrap",
      lineHeight: "16px",
      color: "rgb(151,151,151)",
      textDecoration: "line-through",
      display: "inline-block"
    }
  }, "`", "599"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 477.41,
      top: 54,
      width: 58,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "pre-wrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      display: "inline-block"
    }
  }, "Save ", "`", "100"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 443.41,
      top: 70,
      width: 63,
      height: 28,
      fontFamily: "\"Tondo Corp\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 22,
      whiteSpace: "pre-wrap",
      lineHeight: "28px",
      color: "rgb(57,57,57)",
      display: "inline-block"
    }
  }, "`", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "1300")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 427.41,
      top: 16,
      width: 3,
      height: 22,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 663.41,
      top: 16,
      width: 70,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 32,
      opacity: 0,
      borderRadius: 4,
      background: "radial-gradient(45.652px 20.870px at 50.00% 50.00%, rgb(228,0,0) 0.00%, rgba(228,0,0,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18.5,
      top: 7,
      width: 32,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Buy"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 467.41,
      top: 222,
      width: 98,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)"
    }
  }, "View all features")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 570,
      top: 367.652,
      width: 70,
      height: 38.957,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 70,
    height: 38.957,
    viewBox: "0 0 70 38.957",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 38.957,
      borderRadius: 2.5,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.5 0.31 L 67.5 0.31 L 67.5 -0.31 L 2.5 -0.31 L 2.5 0.31 Z M 69.69 2.5 L 69.69 36.457 L 70.31 36.457 L 70.31 2.5 L 69.69 2.5 Z M 67.5 38.647 L 2.5 38.647 L 2.5 39.267 L 67.5 39.267 L 67.5 38.647 Z M 0.31 36.457 L 0.31 2.5 L -0.31 2.5 L -0.31 36.457 L 0.31 36.457 Z M 2.5 38.647 C 1.29 38.647 0.31 37.666 0.31 36.457 L -0.31 36.457 C -0.31 38.008 0.948 39.267 2.5 39.267 L 2.5 38.647 Z M 69.69 36.457 C 69.69 37.666 68.71 38.647 67.5 38.647 L 67.5 39.267 C 69.052 39.267 70.31 38.008 70.31 36.457 L 69.69 36.457 Z M 67.5 0.31 C 68.71 0.31 69.69 1.29 69.69 2.5 L 70.31 2.5 C 70.31 0.948 69.052 -0.31 67.5 -0.31 L 67.5 0.31 Z M 2.5 -0.31 C 0.948 -0.31 -0.31 0.948 -0.31 2.5 L 0.31 2.5 C 0.31 1.29 1.29 0.31 2.5 0.31 L 2.5 -0.31 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 10,
      width: 43,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "Select")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44.5,
      top: 99.375,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 197,
      top: 152,
      width: 154,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 154,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 154,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 6,
      width: 32,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,48,79)"
    }
  }, "Delhi"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 128,
      top: 11,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,14,0)",
      transformOrigin: "0 0",
      width: 14,
      height: 14,
      backgroundColor: "rgba(255,255,255,0.0001)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 12.250,
    height: 7,
    viewBox: "0 0 12.250 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.875,
      top: 3.5,
      width: 12.25,
      height: 7,
      color: "rgb(228,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.158 0.977 C 0.12 0.886 0.084 0.803 0.05 0.726 C 0.017 0.649 0 0.574 0 0.502 C 0 0.348 0.074 0.226 0.223 0.136 C 0.371 0.045 0.537 0 0.719 0 C 0.939 0 1.102 0.127 1.208 0.38 L 6.147 5.508 L 11.1 0.353 C 11.157 0.226 11.22 0.136 11.287 0.081 C 11.354 0.027 11.445 0 11.56 0 C 11.732 0 11.891 0.041 12.034 0.122 C 12.178 0.203 12.25 0.321 12.25 0.475 C 12.25 0.538 12.233 0.608 12.2 0.685 C 12.166 0.762 12.13 0.841 12.092 0.922 L 6.794 6.647 C 6.746 6.756 6.671 6.842 6.571 6.905 C 6.47 6.968 6.314 7 6.103 7 C 5.893 7 5.737 6.968 5.636 6.905 C 5.536 6.842 5.461 6.756 5.413 6.647 L 0.158 0.977 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 158,
      width: 157,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "1. Select a DTH box"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 80,
      width: 375,
      height: 48,
      backgroundColor: "rgb(229,242,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 88,
      width: 332,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 62,
      height: 32,
      fontFamily: "\"Tondo Corp\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.200px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      textTransform: "uppercase",
      fontVariant: "normal"
    }
  }, "STEP 1"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 12
    }
  }, "Select box")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 240,
      top: 0,
      width: 92,
      height: 32,
      fontFamily: "\"Tondo Corp\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.200px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "STEP 3"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 12
    }
  }, "Address details")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 127,
      top: 0,
      width: 69,
      height: 32,
      fontFamily: "\"Tondo Corp\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.200px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "STEP 2"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 12
    }
  }, "Select pack")), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,96,11.500)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 2.828 3.536 C 3.024 3.731 3.34 3.731 3.536 3.536 C 3.731 3.34 3.731 3.024 3.536 2.828 L 0.707 0 L 3.536 -2.828 C 3.731 -3.024 3.731 -3.34 3.536 -3.536 C 3.34 -3.731 3.024 -3.731 2.828 -3.536 L -0.354 -0.354 Z M 0 0.5 L 1 0.5 L 1 -0.5 L 0 -0.5 L 0 0.5 Z M 3 0.5 L 5 0.5 L 5 -0.5 L 3 -0.5 L 3 0.5 Z M 7 0.5 L 9 0.5 L 9 -0.5 L 7 -0.5 L 7 0.5 Z M 11 0.5 L 13 0.5 L 13 -0.5 L 11 -0.5 L 11 0.5 Z M 15 0.5 L 16 0.5 L 16 -0.5 L 15 -0.5 L 15 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1,
    viewBox: "0 -0.500 12 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,233,11.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 2.828 3.536 C 3.024 3.731 3.34 3.731 3.536 3.536 C 3.731 3.34 3.731 3.024 3.536 2.828 L 0.707 0 L 3.536 -2.828 C 3.731 -3.024 3.731 -3.34 3.536 -3.536 C 3.34 -3.731 3.024 -3.731 2.828 -3.536 L -0.354 -0.354 Z M 0 0.5 L 1 0.5 L 1 -0.5 L 0 -0.5 L 0 0.5 Z M 3 0.5 L 5 0.5 L 5 -0.5 L 3 -0.5 L 3 0.5 Z M 7 0.5 L 9 0.5 L 9 -0.5 L 7 -0.5 L 7 0.5 Z M 11 0.5 L 12 0.5 L 12 -0.5 L 11 -0.5 L 11 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 458,
      width: 327,
      height: 206,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 206,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 206,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 211,
      top: 16,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      clipPath: "inset(0px 0px 0px 0px round 4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: -62.027,
      top: -2,
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,-62.027,247)",
      transformOrigin: "0 0",
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -52.027,
      top: -32,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1b2d1d662e01ed21",
    style: {
      position: "absolute",
      left: 10,
      top: 77,
      width: 80,
      height: 30,
      boxShadow: "0px 6px 8px 0px rgba(255,255,255,0.3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-359c20c3364ad49c-3da852bf",
    style: {
      position: "absolute",
      left: 6,
      top: 27,
      width: 89,
      height: 49
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 212,
      top: 162,
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Select")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 42,
      width: 170,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px"
    }
  }, "Enjoy cinema like picture & sound"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 110,
      width: 86,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "record and play"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 90,
      width: 122,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "dolby surround sound"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 40,
      top: 70,
      width: 125,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,105,105)"
    }
  }, "premium video quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 165,
      height: 22,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(57,57,57)"
    }
  }, "High Definition Box"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 3,
      height: 22,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 134,
      width: 90,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)"
    }
  }, "View all features"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 70,
      width: 16,
      height: 16,
      color: "rgb(151,151,151)"
    }
  }, /*#__PURE__*/React.createElement(MediaHdLine, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(151,151,151)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 110,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.672,
    height: 8.840,
    viewBox: "0 0 7.672 8.840",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.666,
      top: 3.578,
      width: 7.672,
      height: 8.84,
      color: "rgb(151,151,151)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.501 0.045 L 7.507 4.132 C 7.557 4.161 7.599 4.204 7.627 4.254 C 7.656 4.304 7.672 4.362 7.672 4.42 C 7.672 4.478 7.656 4.535 7.627 4.586 C 7.599 4.636 7.557 4.678 7.507 4.707 L 0.501 8.794 C 0.451 8.824 0.393 8.839 0.334 8.84 C 0.275 8.84 0.218 8.824 0.167 8.795 C 0.116 8.766 0.074 8.723 0.044 8.672 C 0.015 8.621 0 8.564 0 8.505 L 0 0.333 C 0 0.275 0.015 0.217 0.045 0.166 C 0.074 0.116 0.116 0.074 0.167 0.044 C 0.218 0.015 0.276 0 0.334 0 C 0.393 0 0.451 0.016 0.501 0.045 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.501 0.045 L 0.375 0.261 L 0.375 0.261 L 0.501 0.045 Z M 7.507 4.132 L 7.633 3.916 L 7.633 3.916 L 7.507 4.132 Z M 7.507 4.707 L 7.633 4.923 L 7.633 4.923 L 7.507 4.707 Z M 0.501 8.794 L 0.375 8.578 L 0.375 8.578 L 0.501 8.794 Z M 0 8.505 L 0.25 8.506 L 0.25 8.505 L 0 8.505 Z M 0 0.333 L 0.25 0.333 L 0.25 0.333 L 0 0.333 Z M 0.375 0.261 L 7.381 4.348 L 7.633 3.916 L 0.627 -0.171 L 0.375 0.261 Z M 7.38 4.348 C 7.393 4.355 7.403 4.366 7.411 4.378 L 7.844 4.13 C 7.794 4.041 7.721 3.968 7.633 3.916 L 7.38 4.348 Z M 7.411 4.378 C 7.418 4.391 7.422 4.405 7.422 4.42 L 7.922 4.42 C 7.922 4.318 7.895 4.218 7.844 4.13 L 7.411 4.378 Z M 7.422 4.42 C 7.422 4.434 7.418 4.449 7.411 4.461 L 7.844 4.71 C 7.895 4.622 7.922 4.522 7.922 4.42 L 7.422 4.42 Z M 7.411 4.461 C 7.403 4.474 7.393 4.484 7.38 4.492 L 7.633 4.923 C 7.721 4.872 7.794 4.798 7.844 4.71 L 7.411 4.461 Z M 7.381 4.491 L 0.375 8.578 L 0.627 9.01 L 7.633 4.923 L 7.381 4.491 Z M 0.375 8.578 C 0.363 8.586 0.348 8.589 0.334 8.59 L 0.335 9.09 C 0.438 9.089 0.539 9.062 0.627 9.01 L 0.375 8.578 Z M 0.334 8.59 C 0.319 8.59 0.304 8.586 0.292 8.578 L 0.042 9.011 C 0.131 9.063 0.232 9.09 0.335 9.09 L 0.334 8.59 Z M 0.292 8.578 C 0.279 8.571 0.268 8.56 0.261 8.548 L -0.172 8.797 C -0.121 8.886 -0.047 8.96 0.042 9.011 L 0.292 8.578 Z M 0.261 8.548 C 0.254 8.535 0.25 8.521 0.25 8.506 L -0.25 8.504 C -0.25 8.607 -0.224 8.708 -0.172 8.797 L 0.261 8.548 Z M 0.25 8.505 L 0.25 0.333 L -0.25 0.333 L -0.25 8.505 L 0.25 8.505 Z M 0.25 0.333 C 0.25 0.319 0.254 0.304 0.261 0.292 L -0.172 0.041 C -0.223 0.13 -0.25 0.231 -0.25 0.334 L 0.25 0.333 Z M 0.261 0.292 C 0.269 0.279 0.279 0.268 0.292 0.261 L 0.043 -0.172 C -0.046 -0.121 -0.12 -0.048 -0.172 0.041 L 0.261 0.292 Z M 0.292 0.261 C 0.305 0.254 0.319 0.25 0.334 0.25 L 0.335 -0.25 C 0.233 -0.25 0.132 -0.224 0.043 -0.172 L 0.292 0.261 Z M 0.334 0.25 C 0.348 0.25 0.363 0.254 0.375 0.261 L 0.627 -0.17 C 0.539 -0.222 0.438 -0.25 0.335 -0.25 L 0.334 0.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement(DolbySound, {
    style: {
      position: "absolute",
      left: 16,
      top: 90,
      width: 16,
      height: 16,
      color: "rgb(151,151,151)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 162,
      width: 49,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B91850")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 235.001,
      top: 252,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ecdf8c0d1e5cddcc-a3845fe5",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 235,
      top: 252,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      clipPath: "inset(0px 0px 0px 0px round 4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: -62.027,
      top: -2,
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,-62.027,247)",
      transformOrigin: "0 0",
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -52.027,
      top: -32,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 27,
      width: 89,
      height: 49
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 28,
      width: 88,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0a748414db8635d4",
    style: {
      position: "absolute",
      left: 10,
      top: 66,
      width: 76,
      height: 45,
      boxShadow: "0px 6px 8px 0px rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3f028974396bbb21-6e082f36",
    style: {
      position: "absolute",
      left: 11,
      top: 31,
      width: 17,
      height: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 28,
      width: 88,
      height: 21
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3f028974396bbb21-6e082f36",
    style: {
      position: "absolute",
      left: 9,
      top: 32,
      width: 25,
      height: 11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 235,
      top: 252,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 134,
      clipPath: "inset(0px 0px 0px 0px round 4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: -62.027,
      top: -2,
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-79abbea4228408db-3d79c9b8",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,-62.027,247)",
      transformOrigin: "0 0",
      width: 227.884,
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -52.027,
      top: -32,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 27,
      width: 89,
      height: 49
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 28,
      width: 88,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0a748414db8635d4",
    style: {
      position: "absolute",
      left: 10,
      top: 66,
      width: 76,
      height: 45,
      boxShadow: "0px 6px 8px 0px rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3f028974396bbb21-6e082f36",
    style: {
      position: "absolute",
      left: 11,
      top: 31,
      width: 17,
      height: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 28,
      width: 89,
      height: 21
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 28,
      width: 31,
      height: 21
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3f028974396bbb21-6e082f36",
    style: {
      position: "absolute",
      left: 9,
      top: 32,
      width: 25,
      height: 11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 70,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 70,
    viewBox: "0 0 375 70",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 70,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 70 L 0 70 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 375,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 87,
      top: 20,
      width: 201,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "New DTH connection"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}

// figma node: 1:7 arrow-left
function ArrowLeft(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(23,23,37)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.750,
    height: 10,
    viewBox: "0 0 10.750 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 2.75,
      width: 10.75,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.53 9.78 C 5.237 10.073 4.763 10.073 4.47 9.78 L 0.22 5.53 C -0.073 5.237 -0.073 4.763 0.22 4.47 L 4.47 0.22 C 4.763 -0.073 5.237 -0.073 5.53 0.22 C 5.823 0.513 5.823 0.987 5.53 1.28 L 2.561 4.25 L 10 4.25 C 10.414 4.25 10.75 4.586 10.75 5 C 10.75 5.414 10.414 5.75 10 5.75 L 2.561 5.75 L 5.53 8.72 C 5.823 9.013 5.823 9.487 5.53 9.78 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:2 Outline / Arrow Right
function OutlineArrowRight(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(23,23,37)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 7,
    viewBox: "0 0 12 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9,18)",
      transformOrigin: "0 0",
      width: 12,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.586 L 10.293 0.293 C 10.683 -0.098 11.317 -0.098 11.707 0.293 C 12.098 0.683 12.098 1.317 11.707 1.707 L 6.707 6.707 C 6.317 7.098 5.683 7.098 5.293 6.707 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 6 4.586 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:9 24px/Check
function PxCheck24(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(85,85,85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.054,
    height: 10.222,
    viewBox: "0 0 14.054 10.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.978,
      top: 6.914,
      width: 14.054,
      height: 10.222
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.732 0.296 C 13.639 0.202 13.528 0.128 13.406 0.077 C 13.285 0.026 13.154 0 13.022 0 C 12.89 0 12.759 0.026 12.637 0.077 C 12.515 0.128 12.405 0.202 12.312 0.296 L 4.862 7.756 L 1.732 4.616 C 1.635 4.523 1.521 4.449 1.397 4.4 C 1.272 4.351 1.138 4.327 1.004 4.329 C 0.87 4.331 0.738 4.36 0.615 4.414 C 0.491 4.467 0.38 4.544 0.287 4.641 C 0.194 4.737 0.12 4.851 0.071 4.976 C 0.022 5.101 -0.002 5.234 0 5.368 C 0.002 5.503 0.031 5.635 0.085 5.758 C 0.138 5.881 0.215 5.993 0.312 6.086 L 4.152 9.926 C 4.245 10.02 4.355 10.094 4.477 10.145 C 4.599 10.195 4.73 10.222 4.862 10.222 C 4.994 10.222 5.125 10.195 5.246 10.145 C 5.368 10.094 5.479 10.02 5.572 9.926 L 13.732 1.766 C 13.833 1.672 13.914 1.559 13.97 1.432 C 14.025 1.306 14.054 1.169 14.054 1.031 C 14.054 0.893 14.025 0.756 13.97 0.63 C 13.914 0.503 13.833 0.389 13.732 0.296 L 13.732 0.296 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 1:30441 BASE PACKS
function BASEPACKS(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 812,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 802,
      borderRadius: "4px 0px 0px 0px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 802,
    viewBox: "0 0 375 802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 802,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 802 L 0 802 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 134,
      width: 329,
      height: 60,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Urdu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59,
      top: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Telegu")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 128,
      top: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Marathi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 203,
      top: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Gujrati")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 272,
      top: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Tamil")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 296,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Hindi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 63,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Marathi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Punjabi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 211,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(216,216,216)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Assamese")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Hindi")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 692,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1,
    viewBox: "0 -0.500 375 1",
    fill: "none",
    style: {
      position: "relative",
      width: 375,
      height: 1,
      flexShrink: 0,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 375 0.5 L 375 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1,
    viewBox: "0 -0.500 375 1",
    fill: "none",
    style: {
      position: "relative",
      width: 375,
      height: 1,
      flexShrink: 0,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 375 0.5 L 375 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 575,
      width: 16,
      height: 16,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(PxCheck24, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 214,
      width: 327,
      height: 152,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 152,
      borderRadius: 4,
      background: "linear-gradient(114.931deg, rgb(255,87,188) -0.00%, rgb(43,43,255) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 89,
      top: 4.471,
      width: 165,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.200px",
      color: "rgb(255,255,255)"
    }
  }, "Includes all hindi HD channels"))), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 70,
    viewBox: "0 0 375 70",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 70,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 70 L 0 70 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 375,
      height: 57,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 87,
      top: 20,
      width: 201,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "New DTH connection"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1,
    viewBox: "0 -0.500 375 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 57,
      width: 375,
      height: 1,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 375 0.5 L 375.5 0.5 L 375.5 -0.5 L 375 -0.5 L 375 0.5 Z M 0 0.5 L 375 0.5 L 375 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 248,
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "180 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,134,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Mega pack"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Includes all value pack channels + english entertainment/movies, premium sports.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B9550/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-17c4941e894cbd97",
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      backgroundColor: "rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Selected")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 99,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      textAlign: "center",
      lineHeight: "14px",
      color: "rgb(151,151,151)",
      flexShrink: 0
    }
  }, "customisable"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 392,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "150 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,134,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Value pack"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Includes all entertainment, sports, news, movies, music, kids & more.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B9350/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-509cc2dafa869378",
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Select")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 99,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      textAlign: "center",
      lineHeight: "14px",
      color: "rgb(151,151,151)",
      flexShrink: 0
    }
  }, "customisable"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 104,
      width: 315,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "pre-wrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      display: "inline-block"
    }
  }, "2. Select exclusive airtel black pack ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "(2)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 702,
      width: 375,
      height: 36,
      overflow: "hidden",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 10,
      width: 189,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "Xstream Definition box \u2022 \u20B92000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 313,
      top: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.948 0.352 L 5.595 -0.002 L 5.595 -0.002 L 5.948 0.352 Z M 6.798 0 L 6.798 -0.5 L 6.798 0 Z M 7.648 2.052 L 7.294 1.698 L 7.294 1.698 L 7.648 2.052 Z M 2.266 7.433 L 2.387 7.919 C 2.475 7.897 2.556 7.851 2.62 7.787 L 2.266 7.433 Z M 0 8 L -0.485 7.879 C -0.528 8.049 -0.478 8.229 -0.354 8.354 C -0.229 8.478 -0.049 8.528 0.121 8.485 L 0 8 Z M 0.567 5.734 L 0.213 5.38 C 0.149 5.444 0.103 5.525 0.081 5.613 L 0.567 5.734 Z M 6.302 0.706 C 6.434 0.574 6.612 0.5 6.798 0.5 L 6.798 -0.5 C 6.347 -0.5 5.914 -0.321 5.595 -0.002 L 6.302 0.706 Z M 6.798 0.5 C 6.984 0.5 7.163 0.574 7.294 0.706 L 8.002 -0.002 C 7.682 -0.321 7.25 -0.5 6.798 -0.5 L 6.798 0.5 Z M 7.294 0.706 C 7.426 0.837 7.5 1.016 7.5 1.202 L 8.5 1.202 C 8.5 0.75 8.321 0.318 8.002 -0.002 L 7.294 0.706 Z M 7.5 1.202 C 7.5 1.388 7.426 1.566 7.294 1.698 L 8.002 2.405 C 8.321 2.086 8.5 1.653 8.5 1.202 L 7.5 1.202 Z M 7.294 1.698 L 1.913 7.08 L 2.62 7.787 L 8.002 2.405 L 7.294 1.698 Z M 2.145 6.948 L -0.121 7.515 L 0.121 8.485 L 2.387 7.919 L 2.145 6.948 Z M 0.485 8.121 L 1.052 5.855 L 0.081 5.613 L -0.485 7.879 L 0.485 8.121 Z M 0.92 6.087 L 6.302 0.706 L 5.595 -0.002 L 0.213 5.38 L 0.92 6.087 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Edit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 738,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 327,
      height: 42,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 78.049,
      top: 12,
      width: 170.901,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Proceed to addons")))));
}

// figma node: 1:43 Checkbox/default
function CheckboxDefault(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4 1 L 16 1 L 16 -1 L 4 -1 L 4 1 Z M 19 4 L 19 16 L 21 16 L 21 4 L 19 4 Z M 16 19 L 4 19 L 4 21 L 16 21 L 16 19 Z M 1 16 L 1 4 L -1 4 L -1 16 L 1 16 Z M 4 19 C 2.343 19 1 17.657 1 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 19 Z M 19 16 C 19 17.657 17.657 19 16 19 L 16 21 C 18.761 21 21 18.761 21 16 L 19 16 Z M 16 1 C 17.657 1 19 2.343 19 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 1 Z M 4 -1 C 1.239 -1 -1 1.239 -1 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 -1 Z",
    fill: "rgb(160,162,164)",
    fillRule: "nonzero"
  })));
}

// figma node: 1:4 plus
function Plus(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(23,23,37)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.500,
    height: 11.500,
    viewBox: "0 0 11.500 11.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 11.5,
      height: 11.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.75 0 C 5.949 0 6.14 0.079 6.28 0.22 C 6.421 0.36 6.5 0.551 6.5 0.75 L 6.5 5 L 10.75 5 C 10.949 5 11.14 5.079 11.28 5.22 C 11.421 5.36 11.5 5.551 11.5 5.75 C 11.5 5.949 11.421 6.14 11.28 6.28 C 11.14 6.421 10.949 6.5 10.75 6.5 L 6.5 6.5 L 6.5 10.75 C 6.5 10.949 6.421 11.14 6.28 11.28 C 6.14 11.421 5.949 11.5 5.75 11.5 C 5.551 11.5 5.36 11.421 5.22 11.28 C 5.079 11.14 5 10.949 5 10.75 L 5 6.5 L 0.75 6.5 C 0.551 6.5 0.36 6.421 0.22 6.28 C 0.079 6.14 0 5.949 0 5.75 C 0 5.551 0.079 5.36 0.22 5.22 C 0.36 5.079 0.551 5 0.75 5 L 5 5 L 5 0.75 C 5 0.551 5.079 0.36 5.22 0.22 C 5.36 0.079 5.551 0 5.75 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:30315 LANGUAGE PACKS
function LANGUAGEPACKS(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 812,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 802
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 802,
    viewBox: "0 0 375 802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 802,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 802 L 0 802 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 169,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 68,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 130,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "30 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,130,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Marathi Pack")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B9100/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7adc96c65f632a01",
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 68,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 126,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "15 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,126,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Gujarati Pack")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B980/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c06e6b69da664dbc",
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 68,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 126,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "12 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,126,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Tamil Pack")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B950/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9e680ddfa815c073",
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 68,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 126,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "21 SD + HD channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,126,1)",
      transformOrigin: "0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.583, 0.583)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Punjabi Pack")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B950/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d02a66827502d06e",
    style: {
      position: "relative",
      width: 99,
      height: 55,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      flexShrink: 0,
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    style: {
      transform: "scale(0.625, 0.625)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 84.488,
      width: 75,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 75,
      top: 84.488,
      width: 75,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 150,
      top: 84.488,
      width: 75,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 225,
      top: 84.488,
      width: 75,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 300,
      top: 84.488,
      width: 75,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 147,
      width: 327,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "3. Select other language packs ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "(8)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 857,
      width: 327,
      height: 73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 73,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      top: 17,
      width: 159,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 159,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "English Pack Sports")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 239,
      top: 17,
      width: 72,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9100/mo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 41,
      width: 77,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      textDecoration: "underline"
    }
  }, "Channels list"), /*#__PURE__*/React.createElement(CheckboxDefault, {
    style: {
      position: "absolute",
      left: 12,
      top: 13,
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 946,
      width: 327,
      height: 73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 73,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      top: 17,
      width: 179,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 179,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "English Pack Regional")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 239,
      top: 17,
      width: 72,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9100/mo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 41,
      width: 77,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      textDecoration: "underline"
    }
  }, "Channels list"), /*#__PURE__*/React.createElement(CheckboxDefault, {
    style: {
      position: "absolute",
      left: 12,
      top: 13,
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 702,
      width: 375,
      height: 36,
      overflow: "hidden",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 36,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 10,
      width: 73,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "Total: \u20B92550"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 267,
      top: 10,
      width: 90,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "View Details"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      transform: "matrix(0,-1,1,0,74,16)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowRight, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0",
      color: "rgb(2,123,252)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 738,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 143,
      top: 16,
      width: 208,
      height: 42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 208,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 32.973,
      top: 12,
      width: 142,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Proceed to address")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 111,
      height: 42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 111,
      height: 42,
      borderRadius: 2.496000051498413,
      boxShadow: "inset 0 0 0 0.500px rgb(57,57,57), 0 0 0 0.500px rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38.456,
      top: 11,
      width: 32,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "Skip"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 113,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 113,
    viewBox: "0 0 375 113",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 113,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 113 L 0 113 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 375,
      height: 101,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1,
    viewBox: "0 -0.500 375 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 101,
      width: 375,
      height: 1,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 375 0.5 L 375.5 0.5 L 375.5 -0.5 L 375 -0.5 L 375 0.5 Z M 0 0.5 L 375 0.5 L 375 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 70,
      width: 302,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "Language Packs"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 29,
      width: 94,
      height: 2,
      backgroundColor: "rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 126,
      top: 0,
      width: 33,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "OTT\u2019s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 189,
      top: 0,
      width: 24,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "VAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 244,
      top: 0,
      width: 58,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "A la Carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 71,
      top: 20,
      width: 232,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Select Addons (optional)"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })));
}

// figma node: 1:51 airtel-icons/info-circle
function AirtelIconsInfoCircle(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(41,44,49)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,21,21)",
      transformOrigin: "0 0",
      width: 18,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 0.800px rgb(41,44,49), 0 0 0 0.800px rgb(41,44,49)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 0,
    viewBox: "0 0 5 0",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,1,0,9,5)",
      transformOrigin: "0 0",
      width: 5,
      height: 2.1855839804629795e-7,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.8 C -0.442 -0.8 -0.8 -0.442 -0.8 0 C -0.8 0.442 -0.442 0.8 0 0.8 L 0 -0.8 Z M 5 0.8 C 5.442 0.8 5.8 0.442 5.8 0 C 5.8 -0.442 5.442 -0.8 5 -0.8 L 5 0.8 Z M 0 0.8 L 5 0.8 L 5 -0.8 L 0 -0.8 L 0 0.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.010,
    height: 0,
    viewBox: "0 0 0.010 0",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,1,0,9,13)",
      transformOrigin: "0 0",
      width: 0.01,
      height: 2.1855839804629795e-7,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.8 C -0.442 -0.8 -0.8 -0.442 -0.8 0 C -0.8 0.442 -0.442 0.8 0 0.8 L 0 -0.8 Z M 0.01 0.8 C 0.452 0.8 0.81 0.442 0.81 0 C 0.81 -0.442 0.452 -0.8 0.01 -0.8 L 0.01 0.8 Z M 0 0.8 L 0.01 0.8 L 0.01 -0.8 L 0 -0.8 L 0 0.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// figma node: 1:7193 OTT
function OTT(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 667,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 802
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 847,
    viewBox: "0 0 375 847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 847,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 847 L 0 847 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 728,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Pack Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "₹3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(57,57,57)",
      fontSize: 12
    }
  }, "/m"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243,
      height: 42,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 243,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 51,
      top: 12,
      width: 142,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Proceed to address"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 229,
      width: 327,
      height: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 112,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      width: 180,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Amazon Prime"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 44,
      width: 180,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)"
    }
  }, "Access movies, series & more"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 76,
      width: 180,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9800 \u2022 6 Months"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 216,
      top: 12,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-69923ca5869c600e",
    style: {
      position: "relative",
      height: 56,
      borderRadius: 4,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 349,
      width: 327,
      height: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 112,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      width: 180,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Disney + Hotstar"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 44,
      width: 180,
      height: 28,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)"
    }
  }, "Access live sports, movies, TV series & more"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 76,
      width: 180,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9600 \u2022 1 Year"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 216,
      top: 12,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-08af89bef9c5bf75",
    style: {
      position: "relative",
      height: 56,
      borderRadius: 4,
      boxShadow: "0 0 0 0.500px rgb(244,245,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      backgroundColor: "rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Added")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 469,
      width: 327,
      height: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 112,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      width: 180,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Xstream Premium"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 44,
      width: 180,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)"
    }
  }, "Access 12+ OTT apps"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 76,
      width: 180,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B91,000 \u2022 1 Year"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 216,
      top: 12,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      borderRadius: 4,
      backgroundColor: "rgb(33,33,33)",
      boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-df997c6fd1fa5c20-bc521371",
    style: {
      position: "absolute",
      left: 21,
      top: 15,
      width: 58,
      height: 28
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 857,
      width: 327,
      height: 73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 73,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      top: 17,
      width: 159,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 159,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "English Pack Sports")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 239,
      top: 17,
      width: 72,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9100/mo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 41,
      width: 77,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      textDecoration: "underline"
    }
  }, "Channels list"), /*#__PURE__*/React.createElement(CheckboxDefault, {
    style: {
      position: "absolute",
      left: 12,
      top: 13,
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 946,
      width: 327,
      height: 73,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 73,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      top: 17,
      width: 179,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 179,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "English Pack Regional")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 239,
      top: 17,
      width: 72,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9100/mo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 41,
      width: 77,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      textDecoration: "underline"
    }
  }, "Channels list"), /*#__PURE__*/React.createElement(CheckboxDefault, {
    style: {
      position: "absolute",
      left: 12,
      top: 13,
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 702,
      width: 375,
      backgroundColor: "rgb(2,123,252)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(AirtelIconsInfoCircle, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "OTT subscription to be paid at the time of DTH installation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 173,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 173,
    viewBox: "0 0 375 173",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 173,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 173 L 0 173 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 375,
      height: 161,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 116,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 130,
      width: 301,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "Language Packs"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 123,
      top: 29,
      width: 33,
      height: 2,
      backgroundColor: "rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 123,
      top: 0,
      width: 35,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "OTT\u2019s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 188,
      top: 0,
      width: 24,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "VAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 243,
      top: 0,
      width: 58,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "A la Carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 59,
      top: 20,
      width: 257,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Buy a new DTH connection"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 70,
      width: 330,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 290,
    height: 1,
    viewBox: "0 -0.500 290 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 8,
      width: 290,
      height: 1,
      color: "rgb(216,216,216)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 290 0.5 L 290 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 93,
    height: 1,
    viewBox: "0 -0.500 93 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 8,
      width: 93,
      height: 1,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 93 0.5 L 93 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 53,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Select Box")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      top: 0,
      width: 85,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 85,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Create your pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171,
      top: 0,
      width: 78,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 32,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 78,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Address Details")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 269,
      top: 0,
      width: 61,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 23,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 61,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Review DTH"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 207,
      width: 327,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "3.2 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Select "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(57,57,57)",
      fontSize: 16
    }
  }, "online streaming apps")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 812,
      opacity: 0.5,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 294,
      width: 375,
      height: 518,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 518,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 518,
    viewBox: "0 0 375 518",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 518,
      borderRadius: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 510 C 375 514.418 371.418 518 367 518 L 8 518 C 3.582 518 0 514.418 0 510 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 209,
      width: 180,
      height: 48,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "XStream Premium"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 237,
      width: 120,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(135,136,138)"
    }
  }, "Access 8+ OTT Apps"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 476,
      width: 130,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(2,98,202)"
    }
  }, "Terms and conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17,
      top: 450,
      width: 166,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(2,98,202)"
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 242,
      top: 201,
      width: 92,
      height: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 274,
      width: 322,
      height: 153,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 50,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bac7b8284f991def-f4f7dc11",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      top: 54,
      width: 39,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Sonyliv")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 66,
      top: 0,
      width: 55,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-18cda6650ab4a478-928b348e",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 55,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Lionsgate")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 132,
      top: 0,
      width: 53,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c39591a01ac4c4b4",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      top: 54,
      width: 51,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Eros now")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 198,
      top: 0,
      width: 50,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-08e20fd89e32a40a",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6.5,
      top: 54,
      width: 43,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Hoichoi")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 262,
      top: 0,
      width: 60,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-330f2aa981d81a27",
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 60,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Manorama")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 85,
      width: 58,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(218,218,218)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6a9c04886faff624-f2f5c922",
    style: {
      position: "absolute",
      left: 1,
      top: 5,
      width: 48,
      height: 39,
      borderRadius: 20.5
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 58,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Shemaroo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 66,
      top: 84,
      width: 56,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-60ee71d7e8c550b5",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 54,
      width: 56,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Hungama")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 132,
      top: 84,
      width: 53,
      height: 68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c83b7cf28463e650",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50,
      height: 50,
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3,
      top: 54,
      width: 50,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Docubay")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 0,
      width: 374,
      height: 185,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 374,
      height: 185,
      borderRadius: 12,
      backgroundColor: "rgb(33,33,33)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-df997c6fd1fa5c20-bc521371",
    style: {
      position: "absolute",
      left: 128,
      top: 64,
      width: 120,
      height: 58
    }
  })));
}

// figma node: 1:66 airtel-icons/funnel-filter
function AirtelIconsFunnelFilter(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(41,44,49)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 18.608 0.52 C 18.811 0.283 18.857 -0.051 18.727 -0.334 C 18.596 -0.618 18.312 -0.8 18 -0.8 L 18 0 Z M 0 0 L 0 -0.8 C -0.312 -0.8 -0.596 -0.618 -0.727 -0.334 C -0.857 -0.051 -0.811 0.283 -0.608 0.52 L 0 0 Z M 7.2 8.409 L 8 8.409 C 8 8.218 7.932 8.034 7.808 7.889 L 7.2 8.409 Z M 7.2 14.222 L 6.4 14.222 C 6.4 14.527 6.573 14.805 6.846 14.94 L 7.2 14.222 Z M 10.8 16 L 10.446 16.717 C 10.694 16.84 10.987 16.825 11.222 16.679 C 11.457 16.534 11.6 16.277 11.6 16 L 10.8 16 Z M 10.8 8.409 L 10.192 7.889 C 10.068 8.034 10 8.218 10 8.409 L 10.8 8.409 Z M 18 -0.8 L 0 -0.8 L 0 0.8 L 18 0.8 L 18 -0.8 Z M -0.608 0.52 L 6.592 8.929 L 7.808 7.889 L 0.608 -0.52 L -0.608 0.52 Z M 6.4 8.409 L 6.4 14.222 L 8 14.222 L 8 8.409 L 6.4 8.409 Z M 6.846 14.94 L 10.446 16.717 L 11.154 15.283 L 7.554 13.505 L 6.846 14.94 Z M 11.6 16 L 11.6 8.409 L 10 8.409 L 10 16 L 11.6 16 Z M 11.408 8.929 L 18.608 0.52 L 17.392 -0.52 L 10.192 7.889 L 11.408 8.929 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 1:60 airtel-icons/search
function AirtelIconsSearch(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(41,44,49)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,24,24)",
      transformOrigin: "0 0",
      width: 24,
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.714,
    height: 13.714,
    viewBox: "0 0 13.714 13.714",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.714,
      height: 13.714,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.914 6.857 C 12.914 10.202 10.202 12.914 6.857 12.914 L 6.857 14.514 C 11.086 14.514 14.514 11.086 14.514 6.857 L 12.914 6.857 Z M 6.857 12.914 C 3.512 12.914 0.8 10.202 0.8 6.857 L -0.8 6.857 C -0.8 11.086 2.628 14.514 6.857 14.514 L 6.857 12.914 Z M 0.8 6.857 C 0.8 3.512 3.512 0.8 6.857 0.8 L 6.857 -0.8 C 2.628 -0.8 -0.8 2.628 -0.8 6.857 L 0.8 6.857 Z M 6.857 0.8 C 10.202 0.8 12.914 3.512 12.914 6.857 L 14.514 6.857 C 14.514 2.628 11.086 -0.8 6.857 -0.8 L 6.857 0.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 4,
      height: 4,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.434 4.566 C 3.747 4.878 4.253 4.878 4.566 4.566 C 4.878 4.253 4.878 3.747 4.566 3.434 L 3.434 4.566 Z M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0.566 -0.566 Z M 4.566 3.434 L 0.566 -0.566 L -0.566 0.566 L 3.434 4.566 L 4.566 3.434 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}

// figma node: 1:48 Outline / Arrow Up
function OutlineArrowUp(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(23,23,37)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 7,
    viewBox: "0 0 12 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 12,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.586 L 10.293 0.293 C 10.683 -0.098 11.317 -0.098 11.707 0.293 C 12.098 0.683 12.098 1.317 11.707 1.707 L 6.707 6.707 C 6.317 7.098 5.683 7.098 5.293 6.707 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 6 4.586 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:34 Radio/default
function RadioDefault(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(160,162,164)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      borderRadius: 100,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 C 0 4.477 4.477 0 10 0 L 10 0 C 15.523 0 20 4.477 20 10 L 20 10 C 20 15.523 15.523 20 10 20 L 10 20 C 4.477 20 0 15.523 0 10 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 18.7 C 14.805 18.7 18.7 14.805 18.7 10 C 18.7 5.195 14.805 1.3 10 1.3 C 5.195 1.3 1.3 5.195 1.3 10 C 1.3 14.805 5.195 18.7 10 18.7 Z M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 1:10048 ALACARTE
function ALACARTE(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 667,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 1055
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1136,
    viewBox: "0 0 375 1136",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 1136,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 1136 L 0 1136 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 691,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Special ", "(8)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 759,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Entertainment ", "(3)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 827,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Music ", "(12)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 229,
      width: 279,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(AirtelIconsSearch, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(2,123,252)",
      flexGrow: 1
    }
  }, "Search a favourite tv channel")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 307,
      width: 129,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "pre-wrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      display: "inline-block"
    }
  }, "Entertainment ", "(3)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      transform: "matrix(-1,0,0,-1,351,327)",
      transformOrigin: "0 0"
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 343,
      width: 155,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 131,
      height: 44,
      backgroundColor: "rgba(196,196,196,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      width: 98,
      height: 44,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-684218a5f1419afb",
    style: {
      position: "absolute",
      left: 16,
      top: 3,
      width: 67,
      height: 38,
      mixBlendMode: "darken"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 38,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "And Flix")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "\u20B930/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      backgroundColor: "rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Added"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 196,
      top: 343,
      width: 155,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 131,
      height: 44,
      backgroundColor: "rgba(196,196,196,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9e250e046ad137e8",
    style: {
      position: "absolute",
      left: 47,
      top: 0,
      width: 37,
      height: 44,
      mixBlendMode: "darken"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 38,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Sony Pix")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "\u20B930/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 497,
      width: 155,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 131,
      height: 44,
      backgroundColor: "rgba(196,196,196,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3d9a71e301f92218",
    style: {
      position: "absolute",
      left: 30,
      top: 5,
      width: 71,
      height: 34
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 38,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Star Movies")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "\u20B930/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      backgroundColor: "rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Added"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 196,
      top: 497,
      width: 155,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 131,
      height: 44,
      backgroundColor: "rgba(196,196,196,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 44,
      top: 2,
      width: 40,
      height: 40,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      backgroundColor: "rgb(51,51,51)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8db104c9286c81a3",
    style: {
      position: "absolute",
      left: 0,
      top: 11.999,
      width: 40,
      height: 16.667
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 38,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "MNX")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "\u20B930/mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 315,
      top: 229,
      width: 36,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(AirtelIconsFunnelFilter, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.624,
      width: 375,
      height: 175.376,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 131.902,
    viewBox: "0 0 375 131.902",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 131.902,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 131.902 L 0 131.902 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.376,
      width: 375,
      height: 161,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 116,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 130,
      width: 302,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "Language Packs"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 241,
      top: 29,
      width: 56,
      height: 2,
      backgroundColor: "rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 123,
      top: 0,
      width: 33,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "OTT\u2019s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 186,
      top: 0,
      width: 24,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "VAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 241,
      top: 0,
      width: 61,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "A la Carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 59,
      top: 20,
      width: 257,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Buy a new DTH connection"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 70,
      width: 330,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 290,
    height: 1,
    viewBox: "0 -0.500 290 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 8,
      width: 290,
      height: 1,
      color: "rgb(216,216,216)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 290 0.5 L 290 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 93,
    height: 1,
    viewBox: "0 -0.500 93 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 8,
      width: 93,
      height: 1,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 93 0.5 L 93 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 53,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Select Box")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      top: 0,
      width: 85,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 85,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Create your pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171,
      top: 0,
      width: 78,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 32,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 78,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Address Details")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 269,
      top: 0,
      width: 61,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 23,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 61,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Review DTH"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 207,
      width: 327,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "3.4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Select "), "A la carte channels ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "(240)")), /*#__PURE__*/React.createElement("svg", {
    width: 376,
    height: 2,
    viewBox: "0 -1 376 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 677,
      width: 376,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 376 1 L 376 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 376,
    height: 2,
    viewBox: "0 -1 376 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 745,
      width: 376,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 376 1 L 376 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 376,
    height: 2,
    viewBox: "0 -1 376 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 813,
      width: 376,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 376 1 L 376 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 738,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Pack Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "₹3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(57,57,57)",
      fontSize: 12
    }
  }, "/m"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243,
      height: 42,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 243,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 51,
      top: 12,
      width: 142,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Proceed to address"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 812,
      opacity: 0.5,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 416,
      width: 375,
      height: 396
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 396,
      borderRadius: "12px 12px 0px 0px",
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 160,
      top: 24,
      width: 59,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 68,
      width: 110,
      height: 326,
      backgroundColor: "rgb(246,246,246)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 92,
      width: 43,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Brand"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 136,
      width: 72,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Language"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 180,
      width: 36,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Type"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 224,
      width: 36,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 322,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Clear All")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243,
      height: 42,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 243,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 76,
      top: 12,
      width: 93,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Apply Filters"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96.5,
      top: 56,
      width: 131,
      height: 44,
      backgroundColor: "rgba(196,196,196,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 134,
      top: 492,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 35,
    viewBox: "0 0 20 35",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 35
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 20 0 L 20 35 L 10 27.364 L 0 35 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      borderRadius: 100
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.667,
      height: 16.667,
      color: "rgb(246,246,246)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 16.667 C 12.936 16.667 16.667 12.936 16.667 8.333 C 16.667 3.731 12.936 0 8.333 0 C 3.731 0 0 3.731 0 8.333 C 0 12.936 3.731 16.667 8.333 16.667 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.833,
      top: 5.833,
      width: 8.333,
      height: 8.333,
      borderRadius: 100,
      backgroundColor: "rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 15.583 C 12.337 15.583 15.583 12.337 15.583 8.333 C 15.583 4.329 12.337 1.083 8.333 1.083 C 4.329 1.083 1.083 4.329 1.083 8.333 C 1.083 12.337 4.329 15.583 8.333 15.583 Z M 8.333 16.667 C 12.936 16.667 16.667 12.936 16.667 8.333 C 16.667 3.731 12.936 0 8.333 0 C 3.731 0 0 3.731 0 8.333 C 0 12.936 3.731 16.667 8.333 16.667 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "All Channels")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 134,
      top: 532,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(RadioDefault, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Free Channels")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 134,
      top: 572,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(RadioDefault, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Paid Channels")));
}

// figma node: 1:7046 VAS
function VAS(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 667,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 1055
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 1136,
    viewBox: "0 0 375 1136",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 1136,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 1136 L 0 1136 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 274,
      width: 375,
      height: 572,
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 249,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Education ", "(4)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 281,
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 180,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Vedantu Masterclass"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Vas explanation will come here in two lines")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "\u20B930/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      opacity: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46868e0a7ec320a3",
    style: {
      position: "absolute",
      left: 5,
      top: 15,
      width: 89,
      height: 27,
      mixBlendMode: "multiply"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 401,
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 192,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "iGames"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Vas explanation will come here in two lines")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B950/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      opacity: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-5bffd374d6ef4b90",
    style: {
      position: "absolute",
      left: 5,
      top: 13,
      width: 89,
      height: 31,
      mixBlendMode: "darken"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      backgroundColor: "rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Added"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 521,
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 192,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Akash Edu TV"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Vas explanation will come here in two lines")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B945/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      opacity: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a1a100274d2c4ec9",
    style: {
      position: "absolute",
      left: 3,
      top: 8,
      width: 92.222,
      height: 40,
      mixBlendMode: "darken"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,98,202)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 641,
      width: 327,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 192,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 168,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 156,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Airtel Digital TV"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 191,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "14px",
      color: "rgb(135,136,138)",
      flexShrink: 0
    }
  }, "Vas explanation will come here in two lines")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\u20B940/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      height: 56,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 99,
      height: 56,
      opacity: 0,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4a53f03368818368",
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 91,
      height: 27
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 99,
      borderRadius: 4,
      backgroundColor: "rgb(2,98,202)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Added"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 801,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Devotional ", "(4)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 869,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Special ", "(5)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 937,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 307,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 192,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "Music ", "(8)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OutlineArrowUp, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 -1 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 777,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 375 1 L 375 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 373,
    height: 2,
    viewBox: "0 -1 373 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 845,
      width: 373,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 373 1 L 373 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 -1 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 913,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 375 1 L 375 -1 L 0 -1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.624,
      width: 375,
      height: 175.376,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 131.902,
    viewBox: "0 0 375 131.902",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 131.902,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 131.902 L 0 131.902 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.376,
      width: 375,
      height: 161,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 116,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 130,
      width: 298,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "Language Packs"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 186,
      top: 29,
      width: 22,
      height: 2,
      backgroundColor: "rgb(57,57,57)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 123,
      top: 0,
      width: 33,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "OTT\u2019s"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 186,
      top: 0,
      width: 26,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "VAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 240,
      top: 0,
      width: 58,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(151,151,151)"
    }
  }, "A la Carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 0,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 59,
      top: 20,
      width: 257,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Buy a new DTH connection"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 70,
      width: 330,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 290,
    height: 1,
    viewBox: "0 -0.500 290 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 8,
      width: 290,
      height: 1,
      color: "rgb(216,216,216)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 290 0.5 L 290 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 93,
    height: 1,
    viewBox: "0 -0.500 93 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 8,
      width: 93,
      height: 1,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 93 0.5 L 93 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 53,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Select Box")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      top: 0,
      width: 85,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(0,172,70)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 18 C 13.523 18 18 13.523 18 8 L 14 8 C 14 11.314 11.314 14 8 14 L 8 18 Z M 18 8 C 18 2.477 13.523 -2 8 -2 L 8 2 C 11.314 2 14 4.686 14 8 L 18 8 Z M 8 -2 C 2.477 -2 -2 2.477 -2 8 L 2 8 C 2 4.686 4.686 2 8 2 L 8 -2 Z M -2 8 C -2 13.523 2.477 18 8 18 L 8 14 C 4.686 14 2 11.314 2 8 L -2 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 6,
    viewBox: "0 0 8 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 8,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 C 4.58 2.591 5.805 1.393 7.026 0.189 C 7.289 -0.07 7.597 -0.032 7.786 0.119 C 8.067 0.343 8.071 0.734 7.798 1.003 C 7.367 1.427 6.934 1.85 6.502 2.273 C 5.3 3.452 4.098 4.631 2.897 5.81 C 2.766 5.939 2.617 6.011 2.431 5.999 C 2.274 5.988 2.151 5.914 2.048 5.798 C 1.844 5.569 1.639 5.339 1.435 5.108 C 1.026 4.648 0.619 4.186 0.21 3.727 C 0.094 3.598 0 3.463 0 3.279 C 0 3.046 0.099 2.872 0.303 2.768 C 0.518 2.658 0.734 2.678 0.91 2.844 C 1.081 3.006 1.232 3.191 1.389 3.368 C 1.749 3.771 2.107 4.175 2.465 4.578 C 2.477 4.591 2.486 4.607 2.502 4.628 C 2.795 4.341 3.075 4.066 3.356 3.791 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.356 3.791 L 3.531 3.969 L 3.531 3.969 L 3.356 3.791 Z M 7.026 0.189 L 6.85 0.011 L 6.85 0.011 L 7.026 0.189 Z M 7.786 0.119 L 7.942 -0.076 L 7.942 -0.076 L 7.786 0.119 Z M 7.798 1.003 L 7.973 1.181 L 7.973 1.181 L 7.798 1.003 Z M 6.502 2.273 L 6.327 2.095 L 6.327 2.095 L 6.502 2.273 Z M 2.897 5.81 L 3.072 5.989 L 3.072 5.989 L 2.897 5.81 Z M 2.431 5.999 L 2.448 5.749 L 2.448 5.749 L 2.431 5.999 Z M 2.048 5.798 L 1.862 5.965 L 1.862 5.965 L 2.048 5.798 Z M 1.435 5.108 L 1.248 5.274 L 1.248 5.274 L 1.435 5.108 Z M 0.21 3.727 L 0.023 3.894 L 0.023 3.894 L 0.21 3.727 Z M 0 3.279 L -0.25 3.278 L -0.25 3.278 L 0 3.279 Z M 0.303 2.768 L 0.417 2.99 L 0.417 2.99 L 0.303 2.768 Z M 0.91 2.844 L 1.081 2.662 L 1.081 2.662 L 0.91 2.844 Z M 1.389 3.368 L 1.576 3.202 L 1.576 3.202 L 1.389 3.368 Z M 2.465 4.578 L 2.652 4.412 L 2.465 4.578 Z M 2.502 4.628 L 2.299 4.775 L 2.469 5.01 L 2.677 4.807 L 2.502 4.628 Z M 3.531 3.969 C 4.755 2.77 5.98 1.571 7.201 0.368 L 6.85 0.011 C 5.63 1.214 4.405 2.412 3.181 3.612 L 3.531 3.969 Z M 7.201 0.368 C 7.292 0.279 7.376 0.252 7.441 0.25 C 7.511 0.248 7.578 0.273 7.63 0.314 L 7.942 -0.076 C 7.661 -0.301 7.21 -0.343 6.85 0.011 L 7.201 0.368 Z M 7.63 0.314 C 7.779 0.433 7.803 0.647 7.623 0.824 L 7.973 1.181 C 8.339 0.821 8.355 0.254 7.942 -0.076 L 7.63 0.314 Z M 7.623 0.824 C 7.191 1.248 6.76 1.671 6.327 2.095 L 6.678 2.452 C 7.109 2.029 7.542 1.605 7.973 1.181 L 7.623 0.824 Z M 6.327 2.095 C 5.125 3.274 3.923 4.453 2.722 5.632 L 3.072 5.989 C 4.273 4.809 5.475 3.631 6.678 2.452 L 6.327 2.095 Z M 2.722 5.632 C 2.629 5.723 2.546 5.756 2.448 5.749 L 2.415 6.248 C 2.687 6.267 2.903 6.154 3.072 5.989 L 2.722 5.632 Z M 2.448 5.749 C 2.371 5.744 2.305 5.71 2.235 5.632 L 1.862 5.965 C 1.997 6.117 2.178 6.232 2.415 6.248 L 2.448 5.749 Z M 2.235 5.632 C 2.03 5.402 1.826 5.173 1.622 4.943 L 1.248 5.274 C 1.452 5.505 1.657 5.735 1.862 5.965 L 2.235 5.632 Z M 1.622 4.943 C 1.214 4.483 0.806 4.02 0.396 3.561 L 0.023 3.894 C 0.433 4.352 0.839 4.813 1.248 5.274 L 1.622 4.943 Z M 0.396 3.561 C 0.29 3.441 0.25 3.367 0.25 3.279 L -0.25 3.278 C -0.251 3.56 -0.101 3.754 0.023 3.894 L 0.396 3.561 Z M 0.25 3.279 C 0.25 3.199 0.267 3.142 0.291 3.102 C 0.314 3.062 0.352 3.023 0.417 2.99 L 0.189 2.545 C 0.05 2.616 -0.063 2.717 -0.14 2.849 C -0.217 2.979 -0.25 3.126 -0.25 3.278 L 0.25 3.279 Z M 0.417 2.99 C 0.489 2.954 0.547 2.945 0.592 2.95 C 0.636 2.956 0.685 2.975 0.738 3.025 L 1.081 2.662 C 0.959 2.546 0.812 2.473 0.65 2.454 C 0.49 2.435 0.332 2.472 0.189 2.545 L 0.417 2.99 Z M 0.738 3.025 C 0.899 3.178 1.034 3.346 1.203 3.535 L 1.576 3.202 C 1.429 3.037 1.263 2.834 1.081 2.662 L 0.738 3.025 Z M 1.203 3.535 C 1.562 3.937 1.92 4.341 2.278 4.744 L 2.652 4.412 C 2.294 4.009 1.935 3.605 1.576 3.202 L 1.203 3.535 Z M 2.278 4.744 C 2.274 4.739 2.273 4.737 2.277 4.743 C 2.28 4.747 2.281 4.749 2.285 4.755 C 2.289 4.761 2.294 4.767 2.299 4.775 L 2.704 4.482 C 2.698 4.473 2.696 4.47 2.687 4.457 C 2.68 4.447 2.668 4.43 2.652 4.412 L 2.278 4.744 Z M 2.677 4.807 C 2.97 4.52 3.25 4.245 3.531 3.969 L 3.181 3.612 C 2.9 3.888 2.62 4.162 2.327 4.45 L 2.677 4.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 85,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(57,57,57)"
    }
  }, "Create your pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171,
      top: 0,
      width: 78,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 32,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 78,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Address Details")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 269,
      top: 0,
      width: 61,
      height: 34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 23,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(216,216,216)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 61,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(105,105,105)"
    }
  }, "Review DTH"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 207,
      width: 327,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "3.3 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Select "), "value added services ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "(40)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 42,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 738,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Pack Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "pre-wrap",
      lineHeight: "20px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "₹1120"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(57,57,57)",
      fontSize: 12
    }
  }, "/m"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243,
      height: 42,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 243,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 51,
      top: 12,
      width: 142,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Proceed to address"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 812,
      opacity: 0.5,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 385,
      width: 375,
      height: 427,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 427,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 427,
    viewBox: "0 0 375 427",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 427,
      borderRadius: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 419 C 375 423.418 371.418 427 367 427 L 8 427 C 3.582 427 0 423.418 0 419 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 209,
      width: 218,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Vedantu Masterclass"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 237,
      width: 186,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(135,136,138)"
    }
  }, "Vas explanation will come here"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 385,
      width: 130,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(2,98,202)"
    }
  }, "Terms and conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17,
      top: 359,
      width: 166,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(2,98,202)"
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 267,
      width: 317,
      height: 60,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "30px",
      color: "rgb(0,0,0)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "• ", "One lines description about the base pack", "\n", "• ", "One liner description about the channels"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 242,
      top: 201,
      width: 92,
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 185,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 185,
      borderRadius: 12,
      backgroundColor: "rgb(232,99,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d35043527820fd82",
    style: {
      position: "absolute",
      left: 102,
      top: 7,
      width: 172,
      height: 172
    }
  }))));
}

// figma node: 1:30817 Review Order
function ReviewOrder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 667,
      opacity: 0.9,
      backgroundColor: "rgba(0,0,0,0.8)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 802,
    viewBox: "0 0 375 802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 802,
      filter: "drop-shadow(0px 4px 12px rgba(216,216,216,0.5))",
      color: "rgb(250,250,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 802 L 0 802 L 0 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 509,
      width: 479,
      height: 124,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 124,
      backgroundColor: "rgb(235,235,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 174,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "Frequently bought add-ons"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 48,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 19,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d98cd9e359d788eb",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "Language packs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "8 packs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(151,151,151)",
      flexShrink: 0
    }
  }, "1 Added")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 273,
      top: 48,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 19,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d98cd9e359d788eb",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      borderRadius: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      flexShrink: 0
    }
  }, "OTT apps"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "3 apps"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(2,123,252)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 32px 4px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)",
      flexShrink: 0
    }
  }, "Add"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 294,
      width: 343,
      height: 88
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 444,
      width: 343,
      height: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 271,
      width: null,
      height: null,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 100,
      width: 327,
      height: 385,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 385,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 0px rgba(105,105,105,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 317,
      width: 295,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 214,
      top: 0,
      width: 81,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      color: "rgb(105,105,105)",
      textDecoration: "line-through",
      display: "inline-block"
    }
  }, "₹2499", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(57,57,57)"
    }
  }, "₹2000"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(57,57,57)"
    }
  }, " ")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 181,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "Hardware/Installation charges"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 180,
      height: 28,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "14px",
      color: "rgb(151,151,151)"
    }
  }, "This includes the box, dish, wiring & installation charges.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 235,
      width: 327,
      height: 1,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 296,
      width: 327,
      height: 1,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 327,
      height: 1,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 256,
      width: 295,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 253,
      top: 0,
      width: 42,
      height: 20,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9550"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 149,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "Total monthly rental")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 20,
      width: 295,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 114,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)",
      textTransform: "uppercase"
    }
  }, "ORDER SUMMARY"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 270,
      top: 0,
      width: 25,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(2,123,252)"
    }
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 73,
      width: 108,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 20 L 20 20 L 20 0 L 0 0 L 0 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.571,
      top: 6.903,
      width: 16,
      height: 7.131,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 1,
    viewBox: "0 0 1.500 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.114,
      top: 6.131,
      width: 1.5,
      height: 1,
      color: "rgb(228,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 0.645 L -0.315 0.645 L -0.315 1.335 L 0.375 1.335 L 0.375 0.645 Z M 1.125 0.645 L 1.125 1.335 L 1.815 1.335 L 1.815 0.645 L 1.125 0.645 Z M 0.375 0.291 L 0.375 -0.399 L -0.315 -0.399 L -0.315 0.291 L 0.375 0.291 Z M 1.125 0.291 L 1.815 0.291 L 1.815 -0.399 L 1.125 -0.399 L 1.125 0.291 Z M 1.313 0.31 L 0.188 0.31 L 0.188 1.69 L 1.313 1.69 L 1.313 0.31 Z M 0.81 0.823 C 0.81 0.504 1.072 0.31 1.313 0.31 L 1.313 1.69 C 1.76 1.69 2.19 1.337 2.19 0.823 L 0.81 0.823 Z M 0.81 0.113 L 0.81 0.823 L 2.19 0.823 L 2.19 0.113 L 0.81 0.113 Z M 1.313 0.69 C 1.324 0.69 1.315 0.69 1.294 0.688 C 1.276 0.685 1.22 0.676 1.149 0.643 C 1.072 0.606 0.974 0.538 0.9 0.42 C 0.828 0.303 0.81 0.189 0.81 0.113 L 2.19 0.113 C 2.19 -0.012 2.162 -0.164 2.07 -0.311 C 1.978 -0.459 1.852 -0.55 1.741 -0.603 C 1.554 -0.692 1.366 -0.69 1.313 -0.69 L 1.313 0.69 Z M 0.188 0.69 L 1.313 0.69 L 1.313 -0.69 L 0.188 -0.69 L 0.188 0.69 Z M 0.69 0.113 C 0.69 0.189 0.672 0.303 0.6 0.42 C 0.526 0.538 0.428 0.606 0.351 0.643 C 0.28 0.676 0.224 0.685 0.206 0.688 C 0.185 0.69 0.176 0.69 0.188 0.69 L 0.188 -0.69 C 0.134 -0.69 -0.054 -0.692 -0.241 -0.603 C -0.352 -0.55 -0.478 -0.459 -0.57 -0.311 C -0.662 -0.164 -0.69 -0.012 -0.69 0.113 L 0.69 0.113 Z M 0.69 0.823 L 0.69 0.113 L -0.69 0.113 L -0.69 0.823 L 0.69 0.823 Z M 0.188 0.31 C 0.428 0.31 0.69 0.503 0.69 0.823 L -0.69 0.823 C -0.69 1.338 -0.259 1.69 0.188 1.69 L 0.188 0.31 Z M 0.375 1.335 L 1.125 1.335 L 1.125 -0.044 L 0.375 -0.044 L 0.375 1.335 Z M -0.315 0.291 L -0.315 0.645 L 1.065 0.645 L 1.065 0.291 L -0.315 0.291 Z M 1.125 -0.399 L 0.375 -0.399 L 0.375 0.98 L 1.125 0.98 L 1.125 -0.399 Z M 1.815 0.645 L 1.815 0.291 L 0.435 0.291 L 0.435 0.645 L 1.815 0.645 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 1,
    viewBox: "0 0 1.500 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.629,
      top: 6.131,
      width: 1.5,
      height: 1,
      color: "rgb(228,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.375 0.647 L -0.315 0.647 L -0.315 1.337 L 0.375 1.337 L 0.375 0.647 Z M 1.125 0.647 L 1.125 1.337 L 1.815 1.337 L 1.815 0.647 L 1.125 0.647 Z M 0.375 0.295 L 0.375 -0.395 L -0.315 -0.395 L -0.315 0.295 L 0.375 0.295 Z M 1.125 0.295 L 1.815 0.295 L 1.815 -0.395 L 1.125 -0.395 L 1.125 0.295 Z M 1.313 0.31 L 0.188 0.31 L 0.188 1.69 L 1.313 1.69 L 1.313 0.31 Z M 0.81 0.824 C 0.81 0.501 1.076 0.31 1.313 0.31 L 1.313 1.69 C 1.756 1.69 2.19 1.341 2.19 0.824 L 0.81 0.824 Z M 0.81 0.118 L 0.81 0.824 L 2.19 0.824 L 2.19 0.118 L 0.81 0.118 Z M 1.313 0.69 C 1.345 0.69 1.251 0.698 1.13 0.636 C 1.055 0.598 0.964 0.529 0.896 0.417 C 0.828 0.305 0.81 0.196 0.81 0.118 L 2.19 0.118 C 2.19 -0.008 2.161 -0.156 2.075 -0.299 C 1.988 -0.442 1.869 -0.535 1.761 -0.59 C 1.572 -0.688 1.383 -0.69 1.313 -0.69 L 1.313 0.69 Z M 0.188 0.69 L 1.313 0.69 L 1.313 -0.69 L 0.188 -0.69 L 0.188 0.69 Z M 0.69 0.118 C 0.69 0.196 0.672 0.306 0.604 0.418 C 0.536 0.529 0.445 0.598 0.37 0.636 C 0.25 0.698 0.155 0.69 0.188 0.69 L 0.188 -0.69 C 0.117 -0.69 -0.072 -0.688 -0.26 -0.591 C -0.369 -0.535 -0.487 -0.443 -0.574 -0.3 C -0.661 -0.157 -0.69 -0.008 -0.69 0.118 L 0.69 0.118 Z M 0.69 0.824 L 0.69 0.118 L -0.69 0.118 L -0.69 0.824 L 0.69 0.824 Z M 0.188 0.31 C 0.424 0.31 0.69 0.5 0.69 0.824 L -0.69 0.824 C -0.69 1.342 -0.255 1.69 0.188 1.69 L 0.188 0.31 Z M 0.375 1.337 L 1.125 1.337 L 1.125 -0.042 L 0.375 -0.042 L 0.375 1.337 Z M -0.315 0.295 L -0.315 0.647 L 1.065 0.647 L 1.065 0.295 L -0.315 0.295 Z M 1.125 -0.395 L 0.375 -0.395 L 0.375 0.984 L 1.125 0.984 L 1.125 -0.395 Z M 1.815 0.647 L 1.815 0.295 L 0.435 0.295 L 0.435 0.647 L 1.815 0.647 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 6,
      borderRadius: 1,
      boxShadow: "inset 0 0 0 0.268px rgb(228,0,0), 0 0 0 0.268px rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 4,
      height: 2,
      boxShadow: "inset 0 0 0 0.250px rgb(228,0,0), 0 0 0 0.250px rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.8,
      top: 2.958,
      width: 0.743,
      height: 0.739,
      borderRadius: "50%",
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.286,
      top: 2.958,
      width: 0.743,
      height: 0.739,
      borderRadius: "50%",
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.771,
      top: 2.958,
      width: 0.743,
      height: 0.739,
      borderRadius: "50%",
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.257,
      top: 2.958,
      width: 1.486,
      height: 0.739,
      backgroundColor: "rgb(228,0,0)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 28,
      top: 2,
      width: 80,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "Xstream Box")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 179,
      width: 230,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 96,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(151,151,151)",
      textTransform: "uppercase"
    }
  }, "ADDRESS details"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18,
      width: 230,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(57,57,57)"
    }
  }, "123 APJ Apartments, New Delhi-110032")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 77,
      width: 295,
      height: 86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 295,
      height: 86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 264,
      top: 50,
      width: 31,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9430"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 262,
      top: 0,
      width: 33,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,172,70)"
    }
  }, "FREE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 267,
      top: 71,
      width: 28,
      height: 15,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(57,57,57)"
    }
  }, "\u20B9120"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 32,
      width: 62,
      height: 14,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(151,151,151)",
      textTransform: "uppercase"
    }
  }, "Mega Pack"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 50,
      width: 133,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "180 SD + HD Channels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 70,
      width: 127,
      height: 16,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(57,57,57)"
    }
  }, "Network capacity fee")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 740,
      width: 375,
      height: 74,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 20px 0px rgba(41,44,79,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 327,
      height: 42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 327,
      height: 42,
      borderRadius: 2.496000051498413,
      backgroundColor: "rgb(228,0,0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 46.077,
      top: 12,
      width: 234.845,
      height: 18,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(255,255,255)"
    }
  }, "Confirm New DTH order"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 375,
      height: 70,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 70,
    viewBox: "0 0 375 70",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 70,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 363 0 C 369.627 0 375 5.373 375 12 L 375 70 L 0 70 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 12,
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 106,
      top: 32,
      width: 162,
      height: 24,
      fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(57,57,57)"
    }
  }, "Review New DTH"), /*#__PURE__*/React.createElement("svg", {
    width: 375,
    height: 2,
    viewBox: "0 0 375 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 68,
      width: 375,
      height: 2,
      color: "rgb(238,238,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L -0.5 0.5 L -0.5 1.5 L 0 1.5 L 0 0.5 Z M 375 1.5 L 375.5 1.5 L 375.5 0.5 L 375 0.5 L 375 1.5 Z M 0 1.5 L 375 1.5 L 375 0.5 L 0 0.5 L 0 1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 32,
      width: 24,
      height: 24,
      color: "rgb(57,57,57)"
    }
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0",
      color: "rgb(57,57,57)"
    }
  }))));
}

// Globals for scripts loaded after this file.
window.DolbySound = DolbySound;
window.LogosChromeFill = LogosChromeFill;
window.MediaHdLine = MediaHdLine;
window.BOX = BOX;
window.ArrowLeft = ArrowLeft;
window.OutlineArrowRight = OutlineArrowRight;
window.PxCheck24 = PxCheck24;
window.BASEPACKS = BASEPACKS;
window.CheckboxDefault = CheckboxDefault;
window.Plus = Plus;
window.LANGUAGEPACKS = LANGUAGEPACKS;
window.AirtelIconsInfoCircle = AirtelIconsInfoCircle;
window.OTT = OTT;
window.AirtelIconsFunnelFilter = AirtelIconsFunnelFilter;
window.AirtelIconsSearch = AirtelIconsSearch;
window.OutlineArrowUp = OutlineArrowUp;
window.RadioDefault = RadioDefault;
window.ALACARTE = ALACARTE;
window.VAS = VAS;
window.ReviewOrder = ReviewOrder;