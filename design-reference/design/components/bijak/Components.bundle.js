// Components bundle — 42 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 9:548  date
function Component(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 20,
    viewBox: "0 0 18 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1,
      width: 18,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 2 L 15 2 L 15 1 C 15 0.45 14.55 0 14 0 C 13.45 0 13 0.45 13 1 L 13 2 L 5 2 L 5 1 C 5 0.45 4.55 0 4 0 C 3.45 0 3 0.45 3 1 L 3 2 L 2 2 C 0.89 2 0.01 2.9 0.01 4 L 0 18 C 0 19.1 0.89 20 2 20 L 16 20 C 17.1 20 18 19.1 18 18 L 18 4 C 18 2.9 17.1 2 16 2 Z M 15 18 L 3 18 C 2.45 18 2 17.55 2 17 L 2 7 L 16 7 L 16 17 C 16 17.55 15.55 18 15 18 Z M 5 9 L 8 9 C 8.55 9 9 9.45 9 10 L 9 13 C 9 13.55 8.55 14 8 14 L 5 14 C 4.45 14 4 13.55 4 13 L 4 10 C 4 9.45 4.45 9 5 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 14:269  back
function Back(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.582,
    height: 15.175,
    viewBox: "0 0 15.582 15.175",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.418,
      top: 4.407,
      width: 15.582,
      height: 15.175
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.582 6.593 L 3.412 6.593 L 8.292 1.713 C 8.682 1.323 8.682 0.683 8.292 0.292 C 7.902 -0.097 7.273 -0.097 6.883 0.292 L 0.292 6.883 C -0.097 7.273 -0.097 7.902 0.292 8.292 L 6.883 14.883 C 7.273 15.273 7.902 15.273 8.292 14.883 C 8.682 14.493 8.682 13.862 8.292 13.472 L 3.412 8.592 L 14.582 8.592 C 15.132 8.592 15.582 8.142 15.582 7.593 C 15.582 7.043 15.132 6.593 14.582 6.593 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 14:281 Placeholder (13 variants)
const __venc_Placeholder = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Placeholder = p => "property1=" + __venc_Placeholder(p.property1);
function Placeholder(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "avatar"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
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
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Back, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
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
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(241,244,247), 0 0 0 1px rgb(241,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(25,133,72), 0 0 0 1px rgb(25,133,72)"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
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
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 11.167,
    viewBox: "0 0 14.667 11.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.833,
      top: 4.667,
      width: 14.667,
      height: 11.167
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.667 8.833 L 1.167 5.333 L 0 6.5 L 4.667 11.167 L 14.667 1.167 L 13.5 0 L 4.667 8.833 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
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
      color: "rgba(0,0,0,0.16)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.667,
    height: 11.167,
    viewBox: "0 0 14.667 11.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.833,
      top: 4.667,
      width: 14.667,
      height: 11.167,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.667 8.833 L 1.167 5.333 L 0 6.5 L 4.667 11.167 L 14.667 1.167 L 13.5 0 L 4.667 8.833 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 7.29 14.29 L 3.7 10.7 C 3.31 10.31 3.31 9.68 3.7 9.29 C 4.09 8.9 4.72 8.9 5.11 9.29 L 8 12.17 L 14.88 5.29 C 15.27 4.9 15.9 4.9 16.29 5.29 C 16.68 5.68 16.68 6.31 16.29 6.7 L 8.7 14.29 C 8.32 14.68 7.68 14.68 7.29 14.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgba(0,0,0,0.56)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.24 5.76 C 13.07 4.59 11.54 4 10 4 L 10 10 L 5.76 14.24 C 8.1 16.58 11.9 16.58 14.25 14.24 C 16.59 11.9 16.59 8.1 14.24 5.76 L 14.24 5.76 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 16.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 0 C 3.725 0 0 3.725 0 8.333 C 0 12.942 3.725 16.667 8.333 16.667 C 12.942 16.667 16.667 12.942 16.667 8.333 C 16.667 3.725 12.942 0 8.333 0 Z M 12.5 11.325 L 11.325 12.5 L 8.333 9.508 L 5.342 12.5 L 4.167 11.325 L 7.158 8.333 L 4.167 5.342 L 5.342 4.167 L 8.333 7.158 L 11.325 4.167 L 12.5 5.342 L 9.508 8.333 L 12.5 11.325 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 10,
      width: 10,
      height: 5,
      color: "rgba(0,0,0,0.54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
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
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29,
    height: 39.470,
    viewBox: "0 0 29 39.470",
    fill: "none",
    style: {
      position: "absolute",
      left: 19,
      top: 8.53,
      width: 29,
      height: 39.47
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27 0 L 3.24 0 L 0 38.98 C 0.568 39.291 1.203 39.459 1.85 39.47 L 27 39.47 C 27.53 39.47 28.039 39.259 28.414 38.884 C 28.789 38.509 29 38 29 37.47 L 29 2 C 29 1.47 28.789 0.961 28.414 0.586 C 28.039 0.211 27.53 0 27 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.460,
    height: 9.270,
    viewBox: "0 0 10.460 9.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.93,
      top: 38.24,
      width: 10.46,
      height: 9.27,
      color: "rgb(232,232,232)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.74 6.06 C 0.841 6.743 1.105 7.392 1.511 7.951 C 1.916 8.51 2.451 8.963 3.07 9.27 C 5.8 6.33 3.97 8.21 10.46 1.27 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.168,
    height: 39.470,
    viewBox: "0 0 27.168 39.470",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 27.168,
      height: 39.47,
      color: "rgb(251,175,24)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.4 39.47 C 26.86 38.94 27.26 38.59 27.15 37.87 L 22.65 1.75 C 22.589 1.264 22.351 0.817 21.983 0.495 C 21.614 0.172 21.14 -0.004 20.65 0 L 2 0 C 1.47 0 0.961 0.211 0.586 0.586 C 0.211 0.961 0 1.47 0 2 L 0 37.47 C 0 38 0.211 38.509 0.586 38.884 C 0.961 39.259 1.47 39.47 2 39.47 L 26.4 39.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.295,
    height: 16.963,
    viewBox: "0 0 11.295 16.963",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.102,
      top: 9.94,
      width: 11.295,
      height: 16.963,
      color: "rgba(255,255,255,0.88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.438 1.13 C 8.373 0.811 8.2 0.525 7.949 0.319 C 7.697 0.113 7.383 0 7.058 0 L 4.238 0 C 3.918 0.006 3.611 0.121 3.367 0.327 C 3.123 0.533 2.957 0.816 2.898 1.13 L 0.048 15.19 C -0.002 15.376 -0.013 15.571 0.015 15.761 C 0.044 15.952 0.111 16.135 0.213 16.298 C 0.315 16.462 0.449 16.603 0.608 16.713 C 0.766 16.822 0.945 16.898 1.134 16.936 C 1.323 16.974 1.518 16.972 1.707 16.932 C 1.895 16.891 2.073 16.812 2.23 16.7 C 2.387 16.588 2.519 16.445 2.618 16.28 C 2.718 16.115 2.782 15.931 2.808 15.74 L 3.708 11.25 L 7.588 11.25 L 8.488 15.74 C 8.513 15.931 8.578 16.115 8.677 16.28 C 8.776 16.445 8.908 16.588 9.065 16.7 C 9.222 16.812 9.4 16.891 9.589 16.932 C 9.777 16.972 9.972 16.974 10.161 16.936 C 10.35 16.898 10.529 16.822 10.687 16.713 C 10.846 16.603 10.98 16.462 11.082 16.298 C 11.184 16.135 11.251 15.952 11.28 15.761 C 11.308 15.571 11.297 15.376 11.248 15.19 L 8.438 1.13 Z M 4.268 8.43 L 5.398 2.81 L 5.898 2.81 L 7.028 8.43 L 4.268 8.43 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.757,
    height: 13.889,
    viewBox: "0 0 16.757 13.889",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.433,
      top: 20.421,
      width: 16.757,
      height: 13.889,
      color: "rgba(255,255,255,0.88)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.747 9.129 C 9.775 9.567 9.7 10.006 9.526 10.409 C 9.352 10.812 9.085 11.169 8.747 11.449 C 7.996 12.01 7.073 12.289 6.137 12.239 C 5.297 12.243 4.47 12.04 3.727 11.649 C 2.898 11.166 2.184 10.507 1.637 9.719 C 1.031 8.866 0.512 7.955 0.087 6.999 C 0.033 6.886 0.004 6.763 0 6.638 C -0.003 6.514 0.019 6.389 0.066 6.274 C 0.113 6.158 0.184 6.053 0.274 5.966 C 0.363 5.879 0.47 5.812 0.587 5.769 L 0.727 5.709 C 0.939 5.631 1.172 5.636 1.38 5.723 C 1.588 5.81 1.755 5.973 1.847 6.179 C 2.296 7.214 2.874 8.188 3.567 9.079 C 3.847 9.465 4.211 9.783 4.632 10.009 C 5.053 10.234 5.52 10.36 5.997 10.379 C 6.434 10.4 6.866 10.277 7.227 10.029 C 7.395 9.886 7.527 9.706 7.612 9.502 C 7.697 9.299 7.733 9.079 7.717 8.859 C 7.707 8.401 7.565 7.957 7.307 7.579 C 7.131 7.284 6.919 7.012 6.677 6.769 C 6.574 6.679 6.453 6.614 6.321 6.577 C 6.189 6.541 6.051 6.535 5.917 6.559 C 5.585 6.599 5.251 6.622 4.917 6.629 L 4.917 5.729 C 4.905 5.503 4.979 5.28 5.123 5.106 C 5.268 4.932 5.473 4.819 5.697 4.789 C 6.113 4.747 6.511 4.603 6.857 4.369 C 7.048 4.234 7.203 4.054 7.306 3.844 C 7.409 3.635 7.458 3.402 7.447 3.169 C 7.467 2.963 7.432 2.756 7.344 2.57 C 7.256 2.383 7.119 2.224 6.947 2.109 C 6.609 1.905 6.221 1.801 5.827 1.809 C 5.335 1.802 4.845 1.876 4.377 2.029 C 4.227 2.029 4.067 2.129 3.897 2.189 C 3.786 2.235 3.666 2.258 3.546 2.257 C 3.425 2.256 3.306 2.23 3.196 2.182 C 3.085 2.133 2.986 2.063 2.904 1.974 C 2.821 1.886 2.758 1.782 2.717 1.669 L 2.717 1.669 C 2.635 1.448 2.642 1.205 2.738 0.99 C 2.833 0.775 3.009 0.606 3.227 0.519 L 3.897 0.289 C 4.545 0.093 5.22 -0.001 5.897 0.009 C 6.877 -0.058 7.845 0.258 8.597 0.889 C 8.903 1.172 9.145 1.518 9.307 1.903 C 9.469 2.287 9.548 2.702 9.537 3.119 C 9.557 3.641 9.44 4.159 9.198 4.622 C 8.956 5.085 8.597 5.477 8.157 5.759 L 8.507 6.109 C 9.024 6.182 9.545 6.219 10.067 6.219 C 10.603 6.219 11.139 6.173 11.667 6.079 C 11.876 6.043 12.066 5.934 12.201 5.77 C 12.337 5.607 12.41 5.401 12.407 5.189 L 12.407 2.189 C 12.407 2.154 12.393 2.121 12.369 2.097 C 12.345 2.072 12.312 2.059 12.277 2.059 L 11.777 2.059 C 11.538 2.059 11.309 1.964 11.141 1.795 C 10.972 1.626 10.877 1.397 10.877 1.159 L 10.877 1.159 C 10.877 0.92 10.972 0.691 11.141 0.522 C 11.309 0.354 11.538 0.259 11.777 0.259 L 15.857 0.259 C 16.096 0.259 16.325 0.354 16.493 0.522 C 16.662 0.691 16.757 0.92 16.757 1.159 L 16.757 1.159 C 16.757 1.397 16.662 1.626 16.493 1.795 C 16.325 1.964 16.096 2.059 15.857 2.059 L 14.637 2.059 C 14.603 2.059 14.57 2.072 14.545 2.097 C 14.521 2.121 14.507 2.154 14.507 2.189 L 14.507 12.989 C 14.507 13.227 14.412 13.456 14.243 13.625 C 14.075 13.794 13.846 13.889 13.607 13.889 L 13.277 13.889 C 13.039 13.886 12.812 13.791 12.644 13.622 C 12.475 13.454 12.38 13.227 12.377 12.989 L 12.377 7.789 C 12.048 7.872 11.714 7.935 11.377 7.979 C 11.047 7.979 10.697 8.029 10.377 8.029 C 10.057 8.029 9.897 8.029 9.587 7.979 C 9.713 8.348 9.767 8.739 9.747 9.129 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=📍Button Icons
    "property1=📍button icons": __body0,
    // figma: Property 1=Tapable Icon
    "property1=tapable icon": __body1,
    // figma: Property 1=TapableIconDefault
    "property1=tapableicondefault": __body1,
    // figma: Property 1=Spinner
    "property1=spinner": __body2,
    // figma: Property 1=Avatar
    "property1=avatar": __body3,
    // figma: Property 1=Check
    "property1=check": __body4,
    // figma: Property 1=Avatar Selected
    "property1=avatar selected": __body5,
    // figma: Property 1=Check-Circle
    "property1=check-circle": __body6,
    // figma: Property 1=IconContainer
    "property1=iconcontainer": __body7,
    // figma: Property 1=Close
    "property1=close": __body8,
    // figma: Property 1=📍Icon
    "property1=📍icon": __body9,
    // figma: Property 1=IconArroDropDown
    "property1=iconarrodropdown": __body10,
    // figma: Property 1=Language
    "property1=language": __body11
  };
  return (__impls[__vkey_Placeholder(props)] ?? __body3)();
}

// figma node: 9:10724 Button (30 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "type=" + __venc_Button(p.type) + '|' + "state=" + __venc_Button(p.state) + '|' + "icon=" + __venc_Button(p.icon) + '|' + "iconPosition=" + __venc_Button(p.iconPosition);
function Button(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    state: _p.state ?? "disabled",
    icon: _p.icon ?? true,
    iconPosition: _p.iconPosition ?? "left"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgba(255,255,255,0.88)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Placeholder, {
    property1: "spinner"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgba(255,255,255,0.88)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgba(255,255,255,0.88)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(160,164,168)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgba(255,255,255,0.88)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgba(255,255,255,0.88)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Placeholder, {
    property1: "spinner"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(25,133,72)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(160,164,168)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(160,164,168)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Placeholder, {
    property1: "spinner"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(160,164,168)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(25,133,72,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Placeholder, {
    property1: "spinner"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(25,133,72,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 166,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(25,133,72,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(25,133,72,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(25,133,72)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(232,232,232)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 32px 8px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "1.250px",
      color: "rgb(160,164,168)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component, null)));
  const __impls = {
    // figma: Type=Default, State=Enabled, Icon=Yes, Icon Position=Left
    "type=default|state=enabled|icon=true|iconPosition=left": __body0,
    // figma: Type=Square, State=Enabled, Icon=Yes, Icon Position=Left
    "type=square|state=enabled|icon=true|iconPosition=left": __body1,
    // figma: Type=Square, State=Disabled, Icon=Yes, Icon Position=Left
    "type=square|state=disabled|icon=true|iconPosition=left": __body1,
    // figma: Type=Default, State=Loading, Icon=Yes, Icon Position=Left
    "type=default|state=loading|icon=true|iconPosition=left": __body2,
    // figma: Type=Default, State=Enabled, Icon=Yes, Icon Position=Right
    "type=default|state=enabled|icon=true|iconPosition=right": __body3,
    // figma: Type=Default, State=Enabled, Icon=No, Icon Position=Left
    "type=default|state=enabled|icon=false|iconPosition=left": __body4,
    // figma: Type=Default, State=Disabled, Icon=No, Icon Position=Left
    "type=default|state=disabled|icon=false|iconPosition=left": __body4,
    // figma: Type=Type8, State=Disabled, Icon=Yes, Icon Position=Left
    "type=type8|state=disabled|icon=true|iconPosition=left": __body0,
    // figma: Type=Type8, State=Disabled, Icon=Yes, Icon Position=Right
    "type=type8|state=disabled|icon=true|iconPosition=right": __body5,
    // figma: Type=Stroke, State=Enabled, Icon=Yes, Icon Position=Left
    "type=stroke|state=enabled|icon=true|iconPosition=left": __body6,
    // figma: Type=Stroke, State=Loading, Icon=Yes, Icon Position=Left
    "type=stroke|state=loading|icon=true|iconPosition=left": __body7,
    // figma: Type=Stroke, State=Enabled, Icon=Yes, Icon Position=Right
    "type=stroke|state=enabled|icon=true|iconPosition=right": __body8,
    // figma: Type=Stroke, State=Enabled, Icon=No, Icon Position=Left
    "type=stroke|state=enabled|icon=false|iconPosition=left": __body9,
    // figma: Type=Stroke, State=Disabled, Icon=No, Icon Position=Left
    "type=stroke|state=disabled|icon=false|iconPosition=left": __body9,
    // figma: Type=Type7, State=Disabled, Icon=Yes, Icon Position=Left
    "type=type7|state=disabled|icon=true|iconPosition=left": __body10,
    // figma: Type=Type7, State=Disabled, Icon=Yes, Icon Position=Right
    "type=type7|state=disabled|icon=true|iconPosition=right": __body11,
    // figma: Type=Nude, State=Enabled, Icon=Yes, Icon Position=Left
    "type=nude|state=enabled|icon=true|iconPosition=left": __body12,
    // figma: Type=Nude, State=Loading, Icon=Yes, Icon Position=Left
    "type=nude|state=loading|icon=true|iconPosition=left": __body13,
    // figma: Type=Nude, State=Enabled, Icon=Yes, Icon Position=Right
    "type=nude|state=enabled|icon=true|iconPosition=right": __body14,
    // figma: Type=Nude, State=Enabled, Icon=No, Icon Position=Left
    "type=nude|state=enabled|icon=false|iconPosition=left": __body15,
    // figma: Type=Nude, State=Disabled, Icon=No, Icon Position=Left
    "type=nude|state=disabled|icon=false|iconPosition=left": __body15,
    // figma: Type=Type6, State=Disabled, Icon=Yes, Icon Position=Left
    "type=type6|state=disabled|icon=true|iconPosition=left": __body12,
    // figma: Type=Type6, State=Disabled, Icon=Yes, Icon Position=Right
    "type=type6|state=disabled|icon=true|iconPosition=right": __body16,
    // figma: Type=Hover, State=Enabled, Icon=Yes, Icon Position=Left
    "type=hover|state=enabled|icon=true|iconPosition=left": __body17,
    // figma: Type=Hover, State=Loading, Icon=Yes, Icon Position=Left
    "type=hover|state=loading|icon=true|iconPosition=left": __body18,
    // figma: Type=Hover, State=Enabled, Icon=Yes, Icon Position=Right
    "type=hover|state=enabled|icon=true|iconPosition=right": __body19,
    // figma: Type=Hover, State=Enabled, Icon=No, Icon Position=Left
    "type=hover|state=enabled|icon=false|iconPosition=left": __body20,
    // figma: Type=Hover, State=Disabled, Icon=No, Icon Position=Left
    "type=hover|state=disabled|icon=false|iconPosition=left": __body20,
    // figma: Type=Type5, State=Disabled, Icon=Yes, Icon Position=Left
    "type=type5|state=disabled|icon=true|iconPosition=left": __body21,
    // figma: Type=Type5, State=Disabled, Icon=Yes, Icon Position=Right
    "type=type5|state=disabled|icon=true|iconPosition=right": __body22
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 111:19135 CheckBox (5 variants)
const __venc_CheckBox = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_CheckBox = p => "state=" + __venc_CheckBox(p.state) + '|' + "status=" + __venc_CheckBox(p.status);
function CheckBox(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "check",
    status: _p.status ?? "active"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 6.88 12.54 L 4.05 9.71 C 3.957 9.617 3.884 9.508 3.834 9.387 C 3.784 9.266 3.758 9.136 3.758 9.005 C 3.758 8.874 3.784 8.744 3.834 8.623 C 3.884 8.502 3.957 8.393 4.05 8.3 C 4.143 8.207 4.252 8.134 4.373 8.084 C 4.494 8.034 4.624 8.008 4.755 8.008 C 4.886 8.008 5.016 8.034 5.137 8.084 C 5.258 8.134 5.367 8.207 5.46 8.3 L 7.58 10.42 L 12.53 5.47 C 12.717 5.283 12.971 5.178 13.235 5.178 C 13.499 5.178 13.753 5.283 13.94 5.47 C 14.127 5.657 14.232 5.911 14.232 6.175 C 14.232 6.439 14.127 6.693 13.94 6.88 L 8.28 12.54 C 8.188 12.633 8.079 12.706 7.959 12.756 C 7.839 12.807 7.71 12.832 7.58 12.832 C 7.45 12.832 7.321 12.807 7.201 12.756 C 7.081 12.706 6.972 12.633 6.88 12.54 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(25,133,72)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 6.88 12.54 L 4.05 9.71 C 3.957 9.617 3.884 9.508 3.834 9.387 C 3.784 9.266 3.758 9.136 3.758 9.005 C 3.758 8.874 3.784 8.744 3.834 8.623 C 3.884 8.502 3.957 8.393 4.05 8.3 C 4.143 8.207 4.252 8.134 4.373 8.084 C 4.494 8.034 4.624 8.008 4.755 8.008 C 4.886 8.008 5.016 8.034 5.137 8.084 C 5.258 8.134 5.367 8.207 5.46 8.3 L 7.58 10.42 L 12.53 5.47 C 12.717 5.283 12.971 5.178 13.235 5.178 C 13.499 5.178 13.753 5.283 13.94 5.47 C 14.127 5.657 14.232 5.911 14.232 6.175 C 14.232 6.439 14.127 6.693 13.94 6.88 L 8.28 12.54 C 8.188 12.633 8.079 12.706 7.959 12.756 C 7.839 12.807 7.71 12.832 7.58 12.832 C 7.45 12.832 7.321 12.807 7.201 12.756 C 7.081 12.706 6.972 12.633 6.88 12.54 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.7 0 C 1.984 0 1.297 0.284 0.791 0.791 C 0.284 1.297 0 1.984 0 2.7 L 0 15.3 C 0 16.016 0.284 16.703 0.791 17.209 C 1.297 17.716 1.984 18 2.7 18 L 15.3 18 C 16.016 18 16.703 17.716 17.209 17.209 C 17.716 16.703 18 16.016 18 15.3 L 18 2.7 C 18 1.984 17.716 1.297 17.209 0.791 C 16.703 0.284 16.016 0 15.3 0 L 2.7 0 Z M 2.7 1.8 L 15.3 1.8 C 15.539 1.8 15.768 1.895 15.936 2.064 C 16.105 2.232 16.2 2.461 16.2 2.7 L 16.2 15.3 C 16.2 15.539 16.105 15.768 15.936 15.936 C 15.768 16.105 15.539 16.2 15.3 16.2 L 2.7 16.2 C 2.461 16.2 2.232 16.105 2.064 15.936 C 1.895 15.768 1.8 15.539 1.8 15.3 L 1.8 2.7 C 1.8 2.461 1.895 2.232 2.064 2.064 C 2.232 1.895 2.461 1.8 2.7 1.8 L 2.7 1.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 13 10 L 5 10 C 4.45 10 4 9.55 4 9 C 4 8.45 4.45 8 5 8 L 13 8 C 13.55 8 14 8.45 14 9 C 14 9.55 13.55 10 13 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(25,133,72)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 C 0 17.1 0.9 18 2 18 L 16 18 C 17.1 18 18 17.1 18 16 L 18 2 C 18 0.9 17.1 0 16 0 Z M 13 10 L 5 10 C 4.45 10 4 9.55 4 9 C 4 8.45 4.45 8 5 8 L 13 8 C 13.55 8 14 8.45 14 9 C 14 9.55 13.55 10 13 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: State=Check, Status=Active
    "state=check|status=active": __body0,
    // figma: State=Check, Status=Inactive
    "state=check|status=inactive": __body1,
    // figma: State=Uncheck, Status=Active
    "state=uncheck|status=active": __body2,
    // figma: State=Indeterminate, Status=Active
    "state=indeterminate|status=active": __body3,
    // figma: State=Indeterminate, Status=Inactive
    "state=indeterminate|status=inactive": __body4
  };
  return (__impls[__vkey_CheckBox(props)] ?? __body0)();
}

// figma node: 190:33271 Component 3 (2 variants)
const __venc_Component3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component3 = p => "property1=" + __venc_Component3(p.property1) + '|' + "property2=" + __venc_Component3(p.property2);
function Component3(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? ".baseadornment",
    property2: _p.property2 ?? ".baselabel"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 41,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41,
      height: 24,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "0.500px",
      color: "rgba(0,0,0,0.56)"
    }
  }, props.text1 ?? "Label"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "0.500px",
      color: "rgba(0,0,0,0.56)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label")));
  const __impls = {
    // figma: Property 1=.baseAdornment
    "property1=.baseadornment|property2=": __body0,
    // figma: Property 1=Component 2, Property 2=.baseLabel
    "property1=component 2|property2=.baselabel": __body1
  };
  return (__impls[__vkey_Component3(props)] ?? __body0)();
}

// figma node: 93:867 Cursor (13 variants)
const __venc_Cursor = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Cursor = p => "cursorType=" + __venc_Cursor(p.cursorType);
function Cursor(_p = {}) {
  const props = {
    ..._p,
    cursorType: _p.cursorType ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(54,59,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 11,
    viewBox: "0 0 10 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 6,
      width: 10,
      height: 11,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.279 6.766 L 10 5.454 L 0 0 L 2.915 10.945 L 5.099 7.681 L 7.712 11 L 8.893 10.085 L 6.279 6.766 L 6.279 6.766 Z",
    fill: "rgb(54,59,62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 5.454 L 10.333 6.397 L 12.449 5.651 L 10.479 4.576 L 10 5.454 Z M 0 0 L 0.479 -0.878 L -1.566 -1.993 L -0.966 0.257 L 0 0 Z M 2.915 10.945 L 1.949 11.203 L 2.518 13.338 L 3.747 11.501 L 2.915 10.945 Z M 5.099 7.681 L 5.884 7.062 L 5.033 5.981 L 4.267 7.125 L 5.099 7.681 Z M 7.712 11 L 6.927 11.619 L 7.541 12.398 L 8.325 11.79 L 7.712 11 Z M 8.893 10.085 L 9.506 10.875 L 10.302 10.258 L 9.679 9.466 L 8.893 10.085 Z M 6.612 7.709 L 10.333 6.397 L 9.667 4.511 L 5.947 5.823 L 6.612 7.709 Z M 10.479 4.576 L 0.479 -0.878 L -0.479 0.878 L 9.521 6.332 L 10.479 4.576 Z M -0.966 0.257 L 1.949 11.203 L 3.882 10.688 L 0.966 -0.257 L -0.966 0.257 Z M 3.747 11.501 L 5.93 8.237 L 4.267 7.125 L 2.084 10.389 L 3.747 11.501 Z M 4.313 8.3 L 6.927 11.619 L 8.498 10.381 L 5.884 7.062 L 4.313 8.3 Z M 8.325 11.79 L 9.506 10.875 L 8.281 9.294 L 7.1 10.21 L 8.325 11.79 Z M 9.679 9.466 L 7.065 6.147 L 5.494 7.385 L 8.107 10.704 L 9.679 9.466 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 16,
    viewBox: "0 0 13 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 13,
      height: 16,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.2))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.599 9.412 L 2.767 8.137 C 2.199 7.266 0.989 6.949 0.064 7.426 L 0.279 7.315 C 0.049 7.433 -0.061 7.728 0.034 7.974 L 1.186 10.962 C 1.368 11.436 1.834 12.106 2.221 12.443 C 2.221 12.443 4.538 14.366 4.538 15.087 L 4.538 16 L 8.291 16 L 9.318 16 L 10.168 16 L 11.106 16 L 11.106 15.087 C 11.106 14.366 12.522 12.095 12.522 12.095 C 12.783 11.653 13 10.876 13 10.359 L 13 6.562 C 12.983 5.721 12.27 5.04 11.391 5.04 C 10.951 5.04 10.595 5.38 10.595 5.801 L 10.595 6.105 C 10.595 5.264 9.883 4.583 9.003 4.583 C 8.564 4.583 8.207 4.924 8.207 5.344 L 8.207 5.648 C 8.207 4.808 7.495 4.126 6.615 4.126 C 6.176 4.126 5.819 4.467 5.819 4.887 L 5.819 5.192 C 5.819 5.057 5.805 4.949 5.777 4.864 L 5.534 0.942 C 5.501 0.412 5.056 0 4.538 0 C 4.016 0 3.599 0.421 3.599 0.941 L 3.599 4.706 L 3.599 9.412 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.599 9.412 L 2.594 10.068 L 4.799 13.447 L 4.799 9.412 L 3.599 9.412 Z M 2.767 8.137 L 3.772 7.481 L 3.772 7.481 L 2.767 8.137 Z M 0.034 7.974 L -1.086 8.405 L -1.086 8.405 L 0.034 7.974 Z M 1.186 10.962 L 2.305 10.531 L 2.305 10.531 L 1.186 10.962 Z M 2.221 12.443 L 1.433 13.347 L 1.443 13.357 L 1.454 13.366 L 2.221 12.443 Z M 4.538 16 L 3.338 16 L 3.338 17.2 L 4.538 17.2 L 4.538 16 Z M 11.106 16 L 11.106 17.2 L 12.306 17.2 L 12.306 16 L 11.106 16 Z M 12.522 12.095 L 13.54 12.73 L 13.548 12.717 L 13.555 12.705 L 12.522 12.095 Z M 13 6.562 L 14.2 6.562 L 14.2 6.55 L 14.2 6.537 L 13 6.562 Z M 5.777 4.864 L 4.579 4.938 L 4.589 5.091 L 4.637 5.237 L 5.777 4.864 Z M 5.534 0.942 L 4.337 1.016 L 5.534 0.942 Z M 3.599 0.941 L 2.399 0.941 L 3.599 0.941 Z M 4.604 8.756 L 3.772 7.481 L 1.762 8.793 L 2.594 10.068 L 4.604 8.756 Z M 3.772 7.481 C 2.866 6.093 0.984 5.601 -0.486 6.359 L 0.613 8.492 C 0.995 8.296 1.532 8.44 1.762 8.793 L 3.772 7.481 Z M 0.613 8.492 L 0.829 8.381 L -0.271 6.248 L -0.486 6.359 L 0.613 8.492 Z M -0.271 6.248 C -1.058 6.654 -1.395 7.602 -1.086 8.405 L 1.154 7.542 C 1.221 7.717 1.208 7.885 1.159 8.015 C 1.111 8.145 1.008 8.289 0.829 8.381 L -0.271 6.248 Z M -1.086 8.405 L 0.066 11.394 L 2.305 10.531 L 1.154 7.542 L -1.086 8.405 Z M 0.066 11.394 C 0.318 12.048 0.897 12.881 1.433 13.347 L 3.009 11.538 C 2.772 11.331 2.418 10.824 2.305 10.531 L 0.066 11.394 Z M 2.221 12.443 C 1.454 13.366 1.454 13.366 1.454 13.366 C 1.454 13.366 1.454 13.366 1.454 13.366 C 1.454 13.366 1.454 13.366 1.454 13.366 C 1.454 13.366 1.454 13.366 1.455 13.366 C 1.455 13.367 1.456 13.368 1.458 13.369 C 1.462 13.372 1.467 13.377 1.475 13.383 C 1.49 13.396 1.512 13.415 1.542 13.44 C 1.601 13.49 1.686 13.564 1.789 13.654 C 1.996 13.837 2.268 14.084 2.537 14.349 C 2.811 14.619 3.056 14.883 3.225 15.102 C 3.31 15.213 3.355 15.285 3.374 15.321 C 3.405 15.38 3.338 15.284 3.338 15.087 L 5.738 15.087 C 5.738 14.71 5.598 14.396 5.502 14.212 C 5.394 14.005 5.258 13.808 5.126 13.637 C 4.86 13.293 4.527 12.941 4.222 12.64 C 3.911 12.334 3.604 12.055 3.377 11.854 C 3.262 11.754 3.167 11.671 3.099 11.613 C 3.065 11.585 3.038 11.562 3.019 11.546 C 3.009 11.538 3.002 11.532 2.997 11.527 C 2.994 11.525 2.992 11.523 2.99 11.522 C 2.99 11.521 2.989 11.521 2.988 11.52 C 2.988 11.52 2.988 11.52 2.988 11.52 C 2.988 11.52 2.988 11.52 2.987 11.52 C 2.987 11.519 2.987 11.519 2.221 12.443 Z M 3.338 15.087 L 3.338 16 L 5.738 16 L 5.738 15.087 L 3.338 15.087 Z M 4.538 17.2 L 8.291 17.2 L 8.291 14.8 L 4.538 14.8 L 4.538 17.2 Z M 8.291 17.2 L 9.318 17.2 L 9.318 14.8 L 8.291 14.8 L 8.291 17.2 Z M 9.318 17.2 L 10.168 17.2 L 10.168 14.8 L 9.318 14.8 L 9.318 17.2 Z M 10.168 17.2 L 11.106 17.2 L 11.106 14.8 L 10.168 14.8 L 10.168 17.2 Z M 12.306 16 L 12.306 15.087 L 9.906 15.087 L 9.906 16 L 12.306 16 Z M 12.306 15.087 C 12.306 15.179 12.295 15.108 12.433 14.782 C 12.545 14.517 12.702 14.203 12.871 13.889 C 13.038 13.579 13.206 13.287 13.333 13.072 C 13.397 12.965 13.45 12.878 13.486 12.818 C 13.504 12.789 13.518 12.766 13.528 12.75 C 13.532 12.743 13.536 12.737 13.538 12.734 C 13.539 12.732 13.54 12.731 13.54 12.73 C 13.54 12.73 13.541 12.73 13.541 12.729 C 13.541 12.729 13.541 12.729 13.541 12.729 C 13.541 12.729 13.541 12.729 13.541 12.729 C 13.541 12.73 13.54 12.73 12.522 12.095 C 11.504 11.46 11.504 11.46 11.504 11.46 C 11.504 11.46 11.504 11.46 11.504 11.46 C 11.503 11.46 11.503 11.461 11.503 11.461 C 11.503 11.461 11.503 11.462 11.502 11.463 C 11.501 11.464 11.5 11.466 11.498 11.469 C 11.495 11.474 11.491 11.481 11.485 11.49 C 11.473 11.509 11.457 11.535 11.437 11.569 C 11.396 11.636 11.338 11.732 11.268 11.85 C 11.13 12.083 10.945 12.404 10.757 12.752 C 10.572 13.096 10.376 13.485 10.222 13.848 C 10.094 14.151 9.906 14.635 9.906 15.087 L 12.306 15.087 Z M 13.555 12.705 C 13.756 12.365 13.911 11.953 14.015 11.575 C 14.12 11.197 14.2 10.761 14.2 10.359 L 11.8 10.359 C 11.8 10.474 11.772 10.684 11.702 10.935 C 11.633 11.185 11.549 11.383 11.489 11.485 L 13.555 12.705 Z M 14.2 10.359 L 14.2 6.562 L 11.8 6.562 L 11.8 10.359 L 14.2 10.359 Z M 14.2 6.537 C 14.169 5.008 12.888 3.84 11.391 3.84 L 11.391 6.24 C 11.653 6.24 11.797 6.434 11.8 6.586 L 14.2 6.537 Z M 11.391 3.84 C 10.34 3.84 9.395 4.667 9.395 5.801 L 11.795 5.801 C 11.795 6.093 11.563 6.24 11.391 6.24 L 11.391 3.84 Z M 9.395 5.801 L 9.395 6.105 L 11.795 6.105 L 11.795 5.801 L 9.395 5.801 Z M 11.795 6.105 C 11.795 4.551 10.494 3.383 9.003 3.383 L 9.003 5.783 C 9.271 5.783 9.395 5.977 9.395 6.105 L 11.795 6.105 Z M 9.003 3.383 C 7.952 3.383 7.007 4.211 7.007 5.344 L 9.407 5.344 C 9.407 5.636 9.175 5.783 9.003 5.783 L 9.003 3.383 Z M 7.007 5.344 L 7.007 5.648 L 9.407 5.648 L 9.407 5.344 L 7.007 5.344 Z M 9.407 5.648 C 9.407 4.095 8.106 2.926 6.615 2.926 L 6.615 5.326 C 6.883 5.326 7.007 5.52 7.007 5.648 L 9.407 5.648 Z M 6.615 2.926 C 5.564 2.926 4.619 3.754 4.619 4.887 L 7.019 4.887 C 7.019 5.18 6.787 5.326 6.615 5.326 L 6.615 2.926 Z M 4.619 4.887 L 4.619 5.192 L 7.019 5.192 L 7.019 4.887 L 4.619 4.887 Z M 7.019 5.192 C 7.019 4.98 6.998 4.737 6.918 4.491 L 4.637 5.237 C 4.623 5.197 4.62 5.17 4.619 5.164 C 4.618 5.158 4.619 5.166 4.619 5.192 L 7.019 5.192 Z M 6.975 4.79 L 6.732 0.868 L 4.337 1.016 L 4.579 4.938 L 6.975 4.79 Z M 6.732 0.868 C 6.66 -0.296 5.689 -1.2 4.538 -1.2 L 4.538 1.2 C 4.475 1.2 4.426 1.175 4.397 1.147 C 4.366 1.118 4.34 1.072 4.337 1.016 L 6.732 0.868 Z M 4.538 -1.2 C 3.347 -1.2 2.399 -0.235 2.399 0.941 L 4.799 0.941 C 4.799 1.078 4.685 1.2 4.538 1.2 L 4.538 -1.2 Z M 2.399 0.941 L 2.399 4.706 L 4.799 4.706 L 4.799 0.941 L 2.399 0.941 Z M 2.399 4.706 L 2.399 9.412 L 4.799 9.412 L 4.799 4.706 L 2.399 4.706 Z",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(54,59,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 8 L 10 4 L 8 4 L 8 8 L 4 8 L 4 10 L 8 10 L 8 14 L 10 14 L 10 10 L 14 10 L 14 8 L 10 8 L 10 8 Z M 9 0 L 12 4 L 6 4 L 9 0 L 9 0 Z M 0 9 L 4 6 L 4 12 L 0 9 L 0 9 Z M 18 9 L 14 12 L 14 6 L 18 9 L 18 9 Z M 9 18 L 12 14 L 6 14 L 9 18 L 9 18 Z",
    fill: "rgb(54,59,62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 4 L 11 4 C 11 3.448 10.552 3 10 3 L 10 4 Z M 8 4 L 8 3 C 7.448 3 7 3.448 7 4 L 8 4 Z M 8 8 L 8 9 C 8.552 9 9 8.552 9 8 L 8 8 Z M 4 8 L 4 7 C 3.448 7 3 7.448 3 8 L 4 8 Z M 4 10 L 3 10 C 3 10.552 3.448 11 4 11 L 4 10 Z M 8 10 L 9 10 C 9 9.448 8.552 9 8 9 L 8 10 Z M 8 14 L 7 14 C 7 14.552 7.448 15 8 15 L 8 14 Z M 10 14 L 10 15 C 10.552 15 11 14.552 11 14 L 10 14 Z M 10 10 L 10 9 C 9.448 9 9 9.448 9 10 L 10 10 Z M 14 10 L 14 11 C 14.552 11 15 10.552 15 10 L 14 10 Z M 14 8 L 15 8 C 15 7.448 14.552 7 14 7 L 14 8 Z M 10 7 C 9.448 7 9 7.448 9 8 C 9 8.552 9.448 9 10 9 L 10 7 Z M 12 4 L 12 5 C 12.379 5 12.725 4.786 12.894 4.447 C 13.064 4.108 13.027 3.703 12.8 3.4 L 12 4 Z M 6 4 L 5.2 3.4 C 4.973 3.703 4.936 4.108 5.106 4.447 C 5.275 4.786 5.621 5 6 5 L 6 4 Z M 4 6 L 5 6 C 5 5.621 4.786 5.275 4.447 5.106 C 4.108 4.936 3.703 4.973 3.4 5.2 L 4 6 Z M 4 12 L 3.4 12.8 C 3.703 13.027 4.108 13.064 4.447 12.894 C 4.786 12.725 5 12.379 5 12 L 4 12 Z M 14 12 L 13 12 C 13 12.379 13.214 12.725 13.553 12.894 C 13.892 13.064 14.297 13.027 14.6 12.8 L 14 12 Z M 14 6 L 14.6 5.2 C 14.297 4.973 13.892 4.936 13.553 5.106 C 13.214 5.275 13 5.621 13 6 L 14 6 Z M 12 14 L 12.8 14.6 C 13.027 14.297 13.064 13.892 12.894 13.553 C 12.725 13.214 12.379 13 12 13 L 12 14 Z M 6 14 L 6 13 C 5.621 13 5.275 13.214 5.106 13.553 C 4.936 13.892 4.973 14.297 5.2 14.6 L 6 14 Z M 11 8 L 11 4 L 9 4 L 9 8 L 11 8 Z M 10 3 L 8 3 L 8 5 L 10 5 L 10 3 Z M 7 4 L 7 8 L 9 8 L 9 4 L 7 4 Z M 8 7 L 4 7 L 4 9 L 8 9 L 8 7 Z M 3 8 L 3 10 L 5 10 L 5 8 L 3 8 Z M 4 11 L 8 11 L 8 9 L 4 9 L 4 11 Z M 7 10 L 7 14 L 9 14 L 9 10 L 7 10 Z M 8 15 L 10 15 L 10 13 L 8 13 L 8 15 Z M 11 14 L 11 10 L 9 10 L 9 14 L 11 14 Z M 10 11 L 14 11 L 14 9 L 10 9 L 10 11 Z M 15 10 L 15 8 L 13 8 L 13 10 L 15 10 Z M 14 7 L 10 7 L 10 9 L 14 9 L 14 7 Z M 8.2 0.6 L 11.2 4.6 L 12.8 3.4 L 9.8 -0.6 L 8.2 0.6 Z M 12 3 L 6 3 L 6 5 L 12 5 L 12 3 Z M 6.8 4.6 L 9.8 0.6 L 8.2 -0.6 L 5.2 3.4 L 6.8 4.6 Z M 0.6 9.8 L 4.6 6.8 L 3.4 5.2 L -0.6 8.2 L 0.6 9.8 Z M 3 6 L 3 12 L 5 12 L 5 6 L 3 6 Z M 4.6 11.2 L 0.6 8.2 L -0.6 9.8 L 3.4 12.8 L 4.6 11.2 Z M 17.4 8.2 L 13.4 11.2 L 14.6 12.8 L 18.6 9.8 L 17.4 8.2 Z M 15 12 L 15 6 L 13 6 L 13 12 L 15 12 Z M 13.4 6.8 L 17.4 9.8 L 18.6 8.2 L 14.6 5.2 L 13.4 6.8 Z M 9.8 18.6 L 12.8 14.6 L 11.2 13.4 L 8.2 17.4 L 9.8 18.6 Z M 12 13 L 6 13 L 6 15 L 12 15 L 12 13 Z M 5.2 14.6 L 8.2 18.6 L 9.8 17.4 L 6.8 13.4 L 5.2 14.6 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(54,59,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 4,
      width: 10.024,
      height: 15.935,
      overflow: "hidden",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.024,
    height: 10.633,
    viewBox: "0 0 10.024 10.633",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.024,
      height: 10.633
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.664 1.11 C 2.645 0.416 3.812 0.032 5.013 0.01 C 6.413 -0.082 7.783 0.444 8.762 1.447 C 9.639 2.187 10.105 3.304 10.012 4.447 C 10.015 5.262 9.752 6.056 9.262 6.709 C 8.843 7.222 8.355 7.677 7.813 8.058 L 7.15 8.596 C 6.811 8.862 6.551 9.216 6.4 9.621 C 6.321 9.858 6.27 10.244 6.288 10.633 L 3.789 10.633 C 3.737 9.877 3.754 9.254 3.889 8.508 C 4.026 7.971 4.513 7.596 5.213 7.046 L 5.926 6.484 C 6.209 6.275 6.465 6.032 6.688 5.759 C 6.943 5.389 7.094 4.958 7.125 4.509 C 7.136 4.055 6.986 3.612 6.7 3.26 C 6.287 2.667 5.581 2.351 4.863 2.435 C 4.227 2.47 3.628 2.747 3.189 3.21 C 2.77 3.689 2.532 4.298 2.514 4.934 L 0.014 4.934 C -0.101 3.505 0.481 2.109 1.577 1.185",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.013 0.01 L 5.032 1.01 L 5.055 1.01 L 5.079 1.008 L 5.013 0.01 Z M 8.762 1.447 L 8.047 2.146 L 8.081 2.181 L 8.118 2.212 L 8.762 1.447 Z M 10.012 4.447 L 9.015 4.366 L 9.012 4.408 L 9.012 4.45 L 10.012 4.447 Z M 9.262 6.709 L 10.037 7.341 L 10.05 7.325 L 10.062 7.309 L 9.262 6.709 Z M 7.813 8.058 L 7.237 7.241 L 7.209 7.26 L 7.183 7.282 L 7.813 8.058 Z M 7.15 8.596 L 7.767 9.383 L 7.773 9.378 L 7.78 9.372 L 7.15 8.596 Z M 6.4 9.621 L 5.463 9.272 L 5.458 9.287 L 5.452 9.303 L 6.4 9.621 Z M 6.288 10.633 L 6.288 11.633 L 7.335 11.633 L 7.287 10.587 L 6.288 10.633 Z M 3.789 10.633 L 2.791 10.7 L 2.854 11.633 L 3.789 11.633 L 3.789 10.633 Z M 3.889 8.508 L 2.92 8.261 L 2.911 8.296 L 2.904 8.331 L 3.889 8.508 Z M 5.213 7.046 L 5.831 7.833 L 5.833 7.831 L 5.213 7.046 Z M 5.926 6.484 L 5.333 5.678 L 5.319 5.688 L 5.306 5.699 L 5.926 6.484 Z M 6.688 5.759 L 7.463 6.391 L 7.488 6.36 L 7.511 6.328 L 6.688 5.759 Z M 7.125 4.509 L 8.123 4.578 L 8.124 4.556 L 8.125 4.534 L 7.125 4.509 Z M 6.7 3.26 L 5.881 3.832 L 5.901 3.861 L 5.923 3.888 L 6.7 3.26 Z M 4.863 2.435 L 4.919 3.433 L 4.949 3.432 L 4.98 3.428 L 4.863 2.435 Z M 3.189 3.21 L 2.463 2.521 L 2.449 2.536 L 2.436 2.552 L 3.189 3.21 Z M 2.514 4.934 L 2.514 5.934 L 3.486 5.934 L 3.513 4.962 L 2.514 4.934 Z M 0.014 4.934 L -0.982 5.015 L -0.908 5.934 L 0.014 5.934 L 0.014 4.934 Z M 2.242 1.926 C 3.059 1.348 4.031 1.029 5.032 1.01 L 4.995 -0.99 C 3.593 -0.964 2.231 -0.516 1.086 0.294 L 2.242 1.926 Z M 5.079 1.008 C 6.187 0.935 7.271 1.351 8.047 2.146 L 9.478 0.749 C 8.294 -0.464 6.639 -1.099 4.948 -0.988 L 5.079 1.008 Z M 8.118 2.212 C 8.747 2.743 9.082 3.545 9.015 4.366 L 11.009 4.527 C 11.127 3.062 10.531 1.63 9.407 0.683 L 8.118 2.212 Z M 9.012 4.45 C 9.014 5.048 8.821 5.63 8.462 6.109 L 10.062 7.309 C 10.682 6.482 11.016 5.476 11.012 4.443 L 9.012 4.45 Z M 8.488 6.076 C 8.126 6.519 7.705 6.911 7.237 7.241 L 8.388 8.876 C 9.005 8.442 9.56 7.925 10.037 7.341 L 8.488 6.076 Z M 7.183 7.282 L 6.52 7.819 L 7.78 9.372 L 8.443 8.835 L 7.183 7.282 Z M 6.534 7.808 C 6.049 8.188 5.678 8.694 5.463 9.272 L 7.338 9.97 C 7.424 9.738 7.572 9.535 7.767 9.383 L 6.534 7.808 Z M 5.452 9.303 C 5.324 9.684 5.267 10.199 5.289 10.678 L 7.287 10.587 C 7.281 10.449 7.287 10.309 7.301 10.186 C 7.316 10.057 7.337 9.973 7.349 9.938 L 5.452 9.303 Z M 6.288 9.633 L 3.789 9.633 L 3.789 11.633 L 6.288 11.633 L 6.288 9.633 Z M 4.786 10.565 C 4.74 9.873 4.756 9.335 4.873 8.685 L 2.904 8.331 C 2.753 9.174 2.735 9.88 2.791 10.7 L 4.786 10.565 Z M 4.857 8.756 C 4.866 8.722 4.894 8.644 5.052 8.484 C 5.224 8.31 5.462 8.123 5.831 7.832 L 4.595 6.26 C 4.265 6.519 3.909 6.795 3.628 7.08 C 3.333 7.379 3.049 7.757 2.92 8.261 L 4.857 8.756 Z M 5.833 7.831 L 6.545 7.269 L 5.306 5.699 L 4.594 6.261 L 5.833 7.831 Z M 6.518 7.289 C 6.869 7.031 7.187 6.729 7.463 6.391 L 5.913 5.127 C 5.744 5.334 5.549 5.52 5.333 5.678 L 6.518 7.289 Z M 7.511 6.328 C 7.868 5.81 8.08 5.206 8.123 4.578 L 6.128 4.441 C 6.109 4.71 6.019 4.969 5.865 5.19 L 7.511 6.328 Z M 8.125 4.534 C 8.142 3.843 7.913 3.168 7.478 2.631 L 5.923 3.888 C 6.059 4.057 6.131 4.268 6.126 4.485 L 8.125 4.534 Z M 7.52 2.687 C 6.895 1.793 5.83 1.314 4.747 1.442 L 4.98 3.428 C 5.332 3.387 5.678 3.542 5.881 3.832 L 7.52 2.687 Z M 4.808 1.436 C 3.917 1.486 3.078 1.874 2.463 2.521 L 3.914 3.898 C 4.177 3.621 4.537 3.454 4.919 3.433 L 4.808 1.436 Z M 2.436 2.552 C 1.864 3.206 1.538 4.038 1.514 4.906 L 3.513 4.962 C 3.525 4.559 3.676 4.172 3.942 3.868 L 2.436 2.552 Z M 2.514 3.934 L 0.014 3.934 L 0.014 5.934 L 2.514 5.934 L 2.514 3.934 Z M 1.011 4.854 C 0.922 3.747 1.372 2.665 2.221 1.95 L 0.932 0.421 C -0.411 1.553 -1.124 3.264 -0.982 5.015 L 1.011 4.854 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 13.436,
      width: 2.499,
      height: 2.499,
      backgroundColor: "rgb(54,59,62)",
      boxShadow: "0 0 0 1px rgb(255,255,255)"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 3,
      width: 16.241,
      height: 18.465,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.038,
    height: 12.038,
    viewBox: "0 0 12.038 12.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.203,
      top: 6.427,
      width: 12.038,
      height: 12.038,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.019 12.038 C 9.343 12.038 12.038 9.343 12.038 6.019 C 12.038 2.695 9.343 0 6.019 0 C 2.695 0 0 2.695 0 6.019 C 0 9.343 2.695 12.038 6.019 12.038 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.019 13.038 C 9.895 13.038 13.038 9.895 13.038 6.019 L 11.038 6.019 C 11.038 8.791 8.791 11.038 6.019 11.038 L 6.019 13.038 Z M 13.038 6.019 C 13.038 2.142 9.895 -1 6.019 -1 L 6.019 1 C 8.791 1 11.038 3.247 11.038 6.019 L 13.038 6.019 Z M 6.019 -1 C 2.142 -1 -1 2.142 -1 6.019 L 1 6.019 C 1 3.247 3.247 1 6.019 1 L 6.019 -1 Z M -1 6.019 C -1 9.895 2.142 13.038 6.019 13.038 L 6.019 11.038 C 3.247 11.038 1 8.791 1 6.019 L -1 6.019 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.038,
    height: 12.038,
    viewBox: "0 0 12.038 12.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.203,
      top: 6.427,
      width: 12.038,
      height: 12.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.038 6.019 L 6.019 6.019 L 6.019 0 C 9.343 0 12.038 2.695 12.038 6.019 L 12.038 6.019 Z M 6.019 12.038 L 6.019 6.019 L 0 6.019 C 0 9.343 2.695 12.038 6.019 12.038 L 6.019 12.038 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.028,
    height: 9.781,
    viewBox: "0 0 9.028 9.781",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.028,
      height: 9.781,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(196,196,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.963 9.781 L 0 0 L 9.028 4.304 L 4.71 5.868 L 1.963 9.781 Z",
    fill: "rgb(196,196,196)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.215 -0.451 L -0.687 -0.881 L -0.49 0.098 L 0 0 Z M 1.963 9.781 L 1.472 9.879 L 1.702 11.022 L 2.372 10.068 L 1.963 9.781 Z M 4.71 5.868 L 4.54 5.398 L 4.392 5.452 L 4.301 5.581 L 4.71 5.868 Z M 9.028 4.304 L 9.199 4.774 L 10.322 4.366 L 9.244 3.852 L 9.028 4.304 Z M -0.49 0.098 L 1.472 9.879 L 2.453 9.682 L 0.49 -0.098 L -0.49 0.098 Z M 2.372 10.068 L 5.12 6.156 L 4.301 5.581 L 1.554 9.493 L 2.372 10.068 Z M 4.881 6.339 L 9.199 4.774 L 8.858 3.833 L 4.54 5.398 L 4.881 6.339 Z M 9.244 3.852 L 0.215 -0.451 L -0.215 0.451 L 8.813 4.755 L 9.244 3.852 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(54,59,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 16,
    viewBox: "0 0 8 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 4,
      width: 8,
      height: 16,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 1 L 5 1 L 5 15 L 3 15 L 3 1 L 3 1 Z M 5 0 L 8 0 L 8 2 L 5 2 L 5 0 L 5 0 Z M 5 14 L 8 14 L 8 16 L 5 16 L 5 14 L 5 14 Z M 0 0 L 3 0 L 3 2 L 0 2 L 0 0 L 0 0 Z M 0 14 L 3 14 L 3 16 L 0 16 L 0 14 L 0 14 Z",
    fill: "rgb(54,59,62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 1 L 6 1 L 6 0 L 5 0 L 5 1 Z M 5 15 L 5 16 L 6 16 L 6 15 L 5 15 Z M 3 15 L 2 15 L 2 16 L 3 16 L 3 15 Z M 8 0 L 9 0 L 9 -1 L 8 -1 L 8 0 Z M 8 2 L 8 3 L 9 3 L 9 2 L 8 2 Z M 5 2 L 4 2 L 4 3 L 5 3 L 5 2 Z M 8 14 L 9 14 L 9 13 L 8 13 L 8 14 Z M 8 16 L 8 17 L 9 17 L 9 16 L 8 16 Z M 5 16 L 4 16 L 4 17 L 5 17 L 5 16 Z M 3 0 L 4 0 L 4 -1 L 3 -1 L 3 0 Z M 3 2 L 3 3 L 4 3 L 4 2 L 3 2 Z M 0 2 L -1 2 L -1 3 L 0 3 L 0 2 Z M 3 14 L 4 14 L 4 13 L 3 13 L 3 14 Z M 3 16 L 3 17 L 4 17 L 4 16 L 3 16 Z M 0 16 L -1 16 L -1 17 L 0 17 L 0 16 Z M 3 2 L 5 2 L 5 0 L 3 0 L 3 2 Z M 4 1 L 4 15 L 6 15 L 6 1 L 4 1 Z M 5 14 L 3 14 L 3 16 L 5 16 L 5 14 Z M 4 15 L 4 1 L 2 1 L 2 15 L 4 15 Z M 5 1 L 8 1 L 8 -1 L 5 -1 L 5 1 Z M 7 0 L 7 2 L 9 2 L 9 0 L 7 0 Z M 8 1 L 5 1 L 5 3 L 8 3 L 8 1 Z M 6 2 L 6 0 L 4 0 L 4 2 L 6 2 Z M 5 15 L 8 15 L 8 13 L 5 13 L 5 15 Z M 7 14 L 7 16 L 9 16 L 9 14 L 7 14 Z M 8 15 L 5 15 L 5 17 L 8 17 L 8 15 Z M 6 16 L 6 14 L 4 14 L 4 16 L 6 16 Z M 0 1 L 3 1 L 3 -1 L 0 -1 L 0 1 Z M 2 0 L 2 2 L 4 2 L 4 0 L 2 0 Z M 3 1 L 0 1 L 0 3 L 3 3 L 3 1 Z M 1 2 L 1 0 L -1 0 L -1 2 L 1 2 Z M 0 15 L 3 15 L 3 13 L 0 13 L 0 15 Z M 2 14 L 2 16 L 4 16 L 4 14 L 2 14 Z M 3 15 L 0 15 L 0 17 L 3 17 L 3 15 Z M 1 16 L 1 14 L -1 14 L -1 16 L 1 16 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
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
      left: 4,
      top: 3,
      width: 16,
      height: 18.286,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.190,
    height: 12.190,
    viewBox: "0 0 12.190 12.190",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.81,
      top: 6.095,
      width: 12.19,
      height: 12.19,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.095 12.19 C 9.462 12.19 12.19 9.462 12.19 6.095 C 12.19 2.729 9.462 0 6.095 0 C 2.729 0 0 2.729 0 6.095 C 0 9.462 2.729 12.19 6.095 12.19 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.095 13.19 C 10.014 13.19 13.19 10.014 13.19 6.095 L 11.19 6.095 C 11.19 8.909 8.909 11.19 6.095 11.19 L 6.095 13.19 Z M 13.19 6.095 C 13.19 2.177 10.014 -1 6.095 -1 L 6.095 1 C 8.909 1 11.19 3.281 11.19 6.095 L 13.19 6.095 Z M 6.095 -1 C 2.177 -1 -1 2.177 -1 6.095 L 1 6.095 C 1 3.281 3.281 1 6.095 1 L 6.095 -1 Z M -1 6.095 C -1 10.014 2.177 13.19 6.095 13.19 L 6.095 11.19 C 3.281 11.19 1 8.909 1 6.095 L -1 6.095 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.619,
    height: 7.619,
    viewBox: "0 0 7.619 7.619",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.095,
      top: 8.381,
      width: 7.619,
      height: 7.619,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.571 3.048 L 4.571 0 L 3.048 0 L 3.048 3.048 L 0 3.048 L 0 4.571 L 3.048 4.571 L 3.048 7.619 L 4.571 7.619 L 4.571 4.571 L 7.619 4.571 L 7.619 3.048 L 4.571 3.048 L 4.571 3.048 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.381,
    height: 9.143,
    viewBox: "0 0 8.381 9.143",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.381,
      height: 9.143,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(37,40,43)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.822 9.143 L 0 0 L 8.381 4.023 L 4.373 5.486 L 1.822 9.143 Z",
    fill: "rgb(37,40,43)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.216 -0.451 L -0.686 -0.884 L -0.49 0.098 L 0 0 Z M 1.822 9.143 L 1.332 9.241 L 1.561 10.391 L 2.232 9.429 L 1.822 9.143 Z M 4.373 5.486 L 4.201 5.016 L 4.053 5.07 L 3.963 5.2 L 4.373 5.486 Z M 8.381 4.023 L 8.552 4.493 L 9.667 4.086 L 8.597 3.572 L 8.381 4.023 Z M -0.49 0.098 L 1.332 9.241 L 2.312 9.045 L 0.49 -0.098 L -0.49 0.098 Z M 2.232 9.429 L 4.783 5.772 L 3.963 5.2 L 1.412 8.857 L 2.232 9.429 Z M 4.544 5.955 L 8.552 4.493 L 8.21 3.553 L 4.201 5.016 L 4.544 5.955 Z M 8.597 3.572 L 0.216 -0.451 L -0.216 0.451 L 8.165 4.474 L 8.597 3.572 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
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
      left: 4,
      top: 3,
      width: 16,
      height: 18.511,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.308,
    height: 12.308,
    viewBox: "0 0 12.308 12.308",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.692,
      top: 6.203,
      width: 12.308,
      height: 12.308,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(54,59,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.828 9.916 C 8.074 10.453 7.151 10.769 6.154 10.769 C 3.605 10.769 1.539 8.703 1.539 6.154 C 1.539 5.157 1.855 4.234 2.392 3.479 L 8.828 9.916 L 8.828 9.916 Z M 9.916 8.828 C 10.453 8.074 10.769 7.151 10.769 6.154 C 10.769 3.605 8.703 1.538 6.154 1.538 C 5.157 1.538 4.234 1.854 3.48 2.392 L 9.916 8.828 L 9.916 8.828 Z M 6.154 12.308 C 9.553 12.308 12.308 9.553 12.308 6.154 C 12.308 2.755 9.553 0 6.154 0 C 2.755 0 0 2.755 0 6.154 C 0 9.553 2.755 12.308 6.154 12.308 L 6.154 12.308 Z",
    fill: "rgb(54,59,62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.392 3.479 L 3.099 2.772 L 2.263 1.936 L 1.577 2.899 L 2.392 3.479 Z M 3.48 2.392 L 2.9 1.577 L 1.937 2.263 L 2.773 3.099 L 3.48 2.392 Z M 8.248 9.101 C 7.657 9.522 6.936 9.769 6.154 9.769 L 6.154 11.769 C 7.365 11.769 8.49 11.384 9.408 10.73 L 8.248 9.101 Z M 6.154 9.769 C 4.157 9.769 2.539 8.15 2.539 6.154 L 0.539 6.154 C 0.539 9.255 3.053 11.769 6.154 11.769 L 6.154 9.769 Z M 2.539 6.154 C 2.539 5.371 2.786 4.65 3.206 4.059 L 1.577 2.899 C 0.923 3.817 0.539 4.942 0.539 6.154 L 2.539 6.154 Z M 1.685 4.186 L 8.121 10.623 L 9.535 9.209 L 3.099 2.772 L 1.685 4.186 Z M 10.731 9.408 C 11.385 8.49 11.769 7.365 11.769 6.154 L 9.769 6.154 C 9.769 6.936 9.522 7.657 9.102 8.248 L 10.731 9.408 Z M 11.769 6.154 C 11.769 3.052 9.255 0.538 6.154 0.538 L 6.154 2.538 C 8.151 2.538 9.769 4.157 9.769 6.154 L 11.769 6.154 Z M 6.154 0.538 C 4.942 0.538 3.818 0.923 2.9 1.577 L 4.06 3.206 C 4.65 2.785 5.372 2.538 6.154 2.538 L 6.154 0.538 Z M 2.773 3.099 L 9.209 9.535 L 10.623 8.121 L 4.187 1.684 L 2.773 3.099 Z M 6.154 13.308 C 10.105 13.308 13.308 10.105 13.308 6.154 L 11.308 6.154 C 11.308 9 9 11.308 6.154 11.308 L 6.154 13.308 Z M 13.308 6.154 C 13.308 2.203 10.105 -1 6.154 -1 L 6.154 1 C 9 1 11.308 3.307 11.308 6.154 L 13.308 6.154 Z M 6.154 -1 C 2.203 -1 -1 2.203 -1 6.154 L 1 6.154 C 1 3.307 3.307 1 6.154 1 L 6.154 -1 Z M -1 6.154 C -1 10.105 2.203 13.308 6.154 13.308 L 6.154 11.308 C 3.307 11.308 1 9 1 6.154 L -1 6.154 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.271,
    height: 9.305,
    viewBox: "0 0 8.271 9.305",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.271,
      height: 9.305,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(37,40,43)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.798 9.305 L 0 0 L 8.271 4.094 L 4.315 5.583 L 1.798 9.305 Z",
    fill: "rgb(37,40,43)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.222 -0.448 L -0.682 -0.896 L -0.491 0.095 L 0 0 Z M 1.798 9.305 L 1.307 9.399 L 1.536 10.584 L 2.212 9.585 L 1.798 9.305 Z M 4.315 5.583 L 4.139 5.115 L 3.99 5.171 L 3.901 5.303 L 4.315 5.583 Z M 8.271 4.094 L 8.447 4.562 L 9.524 4.157 L 8.493 3.646 L 8.271 4.094 Z M -0.491 0.095 L 1.307 9.399 L 2.289 9.21 L 0.491 -0.095 L -0.491 0.095 Z M 2.212 9.585 L 4.729 5.863 L 3.901 5.303 L 1.384 9.024 L 2.212 9.585 Z M 4.491 6.051 L 8.447 4.562 L 8.095 3.626 L 4.139 5.115 L 4.491 6.051 Z M 8.493 3.646 L 0.222 -0.448 L -0.222 0.448 L 8.049 4.542 L 8.493 3.646 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
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
      left: 4,
      top: 4,
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
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(54,59,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 C 10.866 0 14 3.134 14 7 C 14 8.568 13.484 10.016 12.613 11.183 L 16 14.57 L 14.57 16 L 11.183 12.613 C 10.016 13.484 8.568 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.613 11.183 L 11.812 10.585 L 11.294 11.279 L 11.906 11.891 L 12.613 11.183 Z M 16 14.57 L 16.707 15.278 L 17.414 14.57 L 16.707 13.863 L 16 14.57 Z M 14.57 16 L 13.863 16.707 L 14.57 17.414 L 15.278 16.707 L 14.57 16 Z M 11.183 12.613 L 11.891 11.906 L 11.279 11.294 L 10.585 11.812 L 11.183 12.613 Z M 15 7 C 15 2.582 11.418 -1 7 -1 L 7 1 C 10.314 1 13 3.686 13 7 L 15 7 Z M 13.414 11.782 C 14.41 10.448 15 8.791 15 7 L 13 7 C 13 8.346 12.558 9.585 11.812 10.585 L 13.414 11.782 Z M 11.906 11.891 L 15.293 15.278 L 16.707 13.863 L 13.32 10.476 L 11.906 11.891 Z M 15.293 13.863 L 13.863 15.293 L 15.278 16.707 L 16.707 15.278 L 15.293 13.863 Z M 15.278 15.293 L 11.891 11.906 L 10.476 13.32 L 13.863 16.707 L 15.278 15.293 Z M 7 15 C 8.791 15 10.448 14.41 11.782 13.414 L 10.585 11.812 C 9.585 12.558 8.346 13 7 13 L 7 15 Z M -1 7 C -1 11.418 2.582 15 7 15 L 7 13 C 3.686 13 1 10.314 1 7 L -1 7 Z M 7 -1 C 2.582 -1 -1 2.582 -1 7 L 1 7 C 1 3.686 3.686 1 7 1 L 7 -1 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.978,
    height: 9.978,
    viewBox: "0 0 9.978 9.978",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.022,
      top: 2.022,
      width: 9.978,
      height: 9.978,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.989 9.978 C 7.745 9.978 9.978 7.745 9.978 4.989 C 9.978 2.234 7.745 0 4.989 0 C 2.234 0 0 2.234 0 4.989 C 0 7.745 2.234 9.978 4.989 9.978 Z M 3.978 1.978 L 5.978 1.978 L 5.978 3.978 L 7.978 3.978 L 7.978 5.978 L 5.978 5.978 L 5.978 7.978 L 3.978 7.978 L 3.978 5.978 L 1.978 5.978 L 1.978 3.978 L 3.978 3.978 L 3.978 1.978 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
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
      left: 4,
      top: 4,
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
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))",
      color: "rgb(54,59,62)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 C 10.866 0 14 3.134 14 7 C 14 8.568 13.484 10.016 12.613 11.183 L 16 14.57 L 14.57 16 L 11.183 12.613 C 10.016 13.484 8.568 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 Z",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.613 11.183 L 11.812 10.585 L 11.294 11.279 L 11.906 11.891 L 12.613 11.183 Z M 16 14.57 L 16.707 15.278 L 17.414 14.57 L 16.707 13.863 L 16 14.57 Z M 14.57 16 L 13.863 16.707 L 14.57 17.414 L 15.278 16.707 L 14.57 16 Z M 11.183 12.613 L 11.891 11.906 L 11.279 11.294 L 10.585 11.812 L 11.183 12.613 Z M 15 7 C 15 2.582 11.418 -1 7 -1 L 7 1 C 10.314 1 13 3.686 13 7 L 15 7 Z M 13.414 11.782 C 14.41 10.448 15 8.791 15 7 L 13 7 C 13 8.346 12.558 9.585 11.812 10.585 L 13.414 11.782 Z M 11.906 11.891 L 15.293 15.278 L 16.707 13.863 L 13.32 10.476 L 11.906 11.891 Z M 15.293 13.863 L 13.863 15.293 L 15.278 16.707 L 16.707 15.278 L 15.293 13.863 Z M 15.278 15.293 L 11.891 11.906 L 10.476 13.32 L 13.863 16.707 L 15.278 15.293 Z M 7 15 C 8.791 15 10.448 14.41 11.782 13.414 L 10.585 11.812 C 9.585 12.558 8.346 13 7 13 L 7 15 Z M -1 7 C -1 11.418 2.582 15 7 15 L 7 13 C 3.686 13 1 10.314 1 7 L -1 7 Z M 7 -1 C 2.582 -1 -1 2.582 -1 7 L 1 7 C 1 3.686 3.686 1 7 1 L 7 -1 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.978,
    height: 9.978,
    viewBox: "0 0 9.978 9.978",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.022,
      top: 2.022,
      width: 9.978,
      height: 9.978,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.978 4.989 C 9.978 7.745 7.745 9.978 4.989 9.978 C 2.234 9.978 0 7.745 0 4.989 C 0 2.234 2.234 0 4.989 0 C 7.745 0 9.978 2.234 9.978 4.989 Z M 7.978 5.978 L 7.978 3.978 L 1.978 3.978 L 1.978 5.978 L 7.978 5.978 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.765,
    height: 18.048,
    viewBox: "0 0 13.765 18.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 13.765,
      height: 18.048,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.2))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.836 11.048 L 2.949 9.693 C 2.344 8.768 1.054 8.431 0.068 8.938 L 0.298 8.82 C 0.053 8.945 -0.065 9.259 0.036 9.52 L 1.263 12.695 C 1.458 13.199 1.955 13.911 2.367 14.268 C 2.367 14.268 4.836 16.312 4.836 17.078 L 4.836 18.048 L 8.836 18.048 L 9.929 18.048 L 10.836 18.048 L 11.836 18.048 L 11.836 17.078 C 11.836 16.312 13.344 13.899 13.344 13.899 C 13.622 13.429 13.765 12.565 13.765 12.017 L 13.685 7.969 C 13.68 7.737 13.685 4.244 13.685 4.001 C 13.685 3.332 13.083 3.072 12.632 3.026 C 11.996 2.962 11.599 3.305 11.599 3.752 C 11.599 4.199 11.599 7.534 11.599 7.534 L 10.89 7.534 C 10.89 7.534 10.89 2.329 10.89 2.271 C 10.89 1.48 10.427 1.27 9.997 1.27 C 9.529 1.27 9.022 1.472 9.022 2.271 L 9.022 6.926 L 8.305 6.926 C 8.305 6.926 8.305 1.067 8.305 0.929 C 8.305 0.385 7.925 0 7.399 0 C 6.825 0 6.429 0.338 6.429 0.929 L 6.461 6.478 L 5.814 6.478 L 5.775 1.916 C 5.74 1.353 5.388 1.048 4.836 1.048 C 4.279 1.048 3.836 1.495 3.836 2.048 L 3.836 6.048 L 3.836 11.048 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.836 11.048 L 2.831 11.705 L 5.036 15.073 L 5.036 11.048 L 3.836 11.048 Z M 2.949 9.693 L 1.945 10.35 L 1.945 10.35 L 2.949 9.693 Z M 0.036 9.52 L 1.155 9.087 L 1.155 9.087 L 0.036 9.52 Z M 1.263 12.695 L 2.383 12.263 L 1.263 12.695 Z M 2.367 14.268 L 1.58 15.174 L 1.59 15.183 L 1.601 15.193 L 2.367 14.268 Z M 4.836 18.048 L 3.636 18.048 L 3.636 19.248 L 4.836 19.248 L 4.836 18.048 Z M 11.836 18.048 L 11.836 19.248 L 13.036 19.248 L 13.036 18.048 L 11.836 18.048 Z M 13.344 13.899 L 14.362 14.535 L 14.37 14.522 L 14.377 14.51 L 13.344 13.899 Z M 13.765 12.017 L 14.965 12.017 L 14.965 12.005 L 14.965 11.993 L 13.765 12.017 Z M 13.685 7.969 L 14.885 7.945 L 14.885 7.945 L 13.685 7.969 Z M 12.632 3.026 L 12.511 4.22 L 12.632 3.026 Z M 11.599 7.534 L 11.599 8.734 L 12.799 8.734 L 12.799 7.534 L 11.599 7.534 Z M 9.022 6.926 L 9.022 8.126 L 10.222 8.126 L 10.222 6.926 L 9.022 6.926 Z M 6.429 0.929 L 5.229 0.929 L 5.229 0.936 L 6.429 0.929 Z M 6.461 6.478 L 6.461 7.678 L 7.668 7.678 L 7.661 6.471 L 6.461 6.478 Z M 5.814 6.478 L 4.614 6.488 L 4.624 7.678 L 5.814 7.678 L 5.814 6.478 Z M 5.775 1.916 L 6.975 1.906 L 6.974 1.874 L 6.972 1.842 L 5.775 1.916 Z M 3.836 2.048 L 2.636 2.048 L 3.836 2.048 Z M 8.305 6.926 L 7.105 6.926 L 7.105 8.126 L 8.305 8.126 L 8.305 6.926 Z M 10.89 7.534 L 9.69 7.534 L 9.69 8.734 L 10.89 8.734 L 10.89 7.534 Z M 4.84 10.391 L 3.953 9.036 L 1.945 10.35 L 2.831 11.705 L 4.84 10.391 Z M 3.953 9.036 C 3.009 7.594 1.048 7.085 -0.481 7.871 L 0.616 10.005 C 1.06 9.777 1.678 9.943 1.945 10.35 L 3.953 9.036 Z M 0.616 10.005 L 0.846 9.887 L -0.251 7.752 L -0.481 7.871 L 0.616 10.005 Z M -0.251 7.752 C -1.053 8.165 -1.4 9.132 -1.083 9.953 L 1.155 9.087 C 1.22 9.255 1.207 9.416 1.161 9.539 C 1.115 9.662 1.017 9.799 0.846 9.887 L -0.251 7.752 Z M -1.083 9.953 L 0.144 13.128 L 2.383 12.263 L 1.155 9.087 L -1.083 9.953 Z M 0.144 13.128 C 0.408 13.812 1.019 14.687 1.58 15.174 L 3.153 13.362 C 2.891 13.134 2.507 12.585 2.383 12.263 L 0.144 13.128 Z M 2.367 14.268 C 1.601 15.193 1.601 15.193 1.601 15.192 C 1.601 15.192 1.601 15.192 1.601 15.192 C 1.601 15.192 1.601 15.192 1.601 15.192 C 1.601 15.192 1.602 15.193 1.602 15.193 C 1.603 15.194 1.604 15.195 1.606 15.196 C 1.61 15.199 1.616 15.204 1.624 15.211 C 1.64 15.225 1.664 15.245 1.696 15.272 C 1.759 15.325 1.85 15.404 1.96 15.501 C 2.181 15.695 2.472 15.959 2.76 16.242 C 3.053 16.53 3.318 16.813 3.5 17.05 C 3.593 17.169 3.643 17.25 3.666 17.293 C 3.701 17.36 3.636 17.27 3.636 17.078 L 6.036 17.078 C 6.036 16.694 5.893 16.373 5.793 16.181 C 5.681 15.966 5.538 15.762 5.399 15.582 C 5.119 15.22 4.766 14.848 4.442 14.53 C 4.113 14.206 3.787 13.911 3.545 13.698 C 3.423 13.591 3.322 13.504 3.25 13.443 C 3.214 13.412 3.185 13.388 3.165 13.372 C 3.155 13.363 3.147 13.357 3.142 13.352 C 3.139 13.35 3.137 13.348 3.135 13.346 C 3.134 13.346 3.133 13.345 3.133 13.345 C 3.133 13.344 3.132 13.344 3.132 13.344 C 3.132 13.344 3.132 13.344 3.132 13.344 C 3.132 13.344 3.132 13.344 2.367 14.268 Z M 3.636 17.078 L 3.636 18.048 L 6.036 18.048 L 6.036 17.078 L 3.636 17.078 Z M 4.836 19.248 L 8.836 19.248 L 8.836 16.848 L 4.836 16.848 L 4.836 19.248 Z M 8.836 19.248 L 9.929 19.248 L 9.929 16.848 L 8.836 16.848 L 8.836 19.248 Z M 9.929 19.248 L 10.836 19.248 L 10.836 16.848 L 9.929 16.848 L 9.929 19.248 Z M 10.836 19.248 L 11.836 19.248 L 11.836 16.848 L 10.836 16.848 L 10.836 19.248 Z M 13.036 18.048 L 13.036 17.078 L 10.636 17.078 L 10.636 18.048 L 13.036 18.048 Z M 13.036 17.078 C 13.036 17.159 13.03 17.072 13.176 16.726 C 13.297 16.441 13.466 16.105 13.646 15.771 C 13.824 15.44 14.004 15.129 14.14 14.9 C 14.208 14.786 14.264 14.693 14.303 14.63 C 14.323 14.598 14.338 14.573 14.348 14.557 C 14.353 14.549 14.357 14.543 14.359 14.539 C 14.36 14.537 14.361 14.536 14.361 14.535 C 14.362 14.535 14.362 14.535 14.362 14.535 C 14.362 14.535 14.362 14.534 14.362 14.535 C 14.362 14.535 14.362 14.535 14.362 14.535 C 14.362 14.535 14.362 14.535 13.344 13.899 C 12.327 13.262 12.327 13.262 12.327 13.262 C 12.327 13.263 12.327 13.263 12.327 13.263 C 12.327 13.263 12.326 13.263 12.326 13.263 C 12.326 13.264 12.326 13.264 12.325 13.265 C 12.324 13.267 12.323 13.269 12.321 13.272 C 12.318 13.277 12.313 13.285 12.307 13.294 C 12.295 13.314 12.278 13.342 12.256 13.378 C 12.212 13.449 12.151 13.551 12.077 13.675 C 11.93 13.922 11.733 14.263 11.534 14.631 C 11.337 14.996 11.129 15.406 10.966 15.79 C 10.83 16.112 10.636 16.614 10.636 17.078 L 13.036 17.078 Z M 14.377 14.51 C 14.615 14.108 14.753 13.625 14.835 13.229 C 14.919 12.815 14.965 12.381 14.965 12.017 L 12.565 12.017 C 12.565 12.201 12.54 12.473 12.484 12.746 C 12.424 13.036 12.352 13.22 12.312 13.287 L 14.377 14.51 Z M 14.965 11.993 L 14.885 7.945 L 12.485 7.993 L 12.566 12.04 L 14.965 11.993 Z M 12.752 1.832 C 12.202 1.777 11.627 1.886 11.158 2.236 C 10.677 2.596 10.399 3.15 10.399 3.752 L 12.799 3.752 C 12.799 3.82 12.783 3.9 12.744 3.979 C 12.704 4.058 12.65 4.118 12.596 4.158 C 12.485 4.241 12.425 4.212 12.511 4.22 L 12.752 1.832 Z M 10.399 3.752 C 10.399 3.753 10.399 3.754 10.399 3.755 C 10.399 3.755 10.399 3.756 10.399 3.757 C 10.399 3.758 10.399 3.759 10.399 3.76 C 10.399 3.761 10.399 3.762 10.399 3.763 C 10.399 3.764 10.399 3.765 10.399 3.766 C 10.399 3.767 10.399 3.768 10.399 3.769 C 10.399 3.77 10.399 3.771 10.399 3.772 C 10.399 3.773 10.399 3.774 10.399 3.775 C 10.399 3.776 10.399 3.777 10.399 3.778 C 10.399 3.779 10.399 3.78 10.399 3.781 C 10.399 3.782 10.399 3.784 10.399 3.785 C 10.399 3.786 10.399 3.787 10.399 3.788 C 10.399 3.789 10.399 3.79 10.399 3.791 C 10.399 3.793 10.399 3.794 10.399 3.795 C 10.399 3.796 10.399 3.797 10.399 3.798 C 10.399 3.8 10.399 3.801 10.399 3.802 C 10.399 3.803 10.399 3.804 10.399 3.806 C 10.399 3.807 10.399 3.808 10.399 3.809 C 10.399 3.811 10.399 3.812 10.399 3.813 C 10.399 3.815 10.399 3.816 10.399 3.817 C 10.399 3.818 10.399 3.82 10.399 3.821 C 10.399 3.822 10.399 3.824 10.399 3.825 C 10.399 3.826 10.399 3.828 10.399 3.829 C 10.399 3.83 10.399 3.832 10.399 3.833 C 10.399 3.835 10.399 3.836 10.399 3.837 C 10.399 3.839 10.399 3.84 10.399 3.841 C 10.399 3.843 10.399 3.844 10.399 3.846 C 10.399 3.847 10.399 3.849 10.399 3.85 C 10.399 3.852 10.399 3.853 10.399 3.854 C 10.399 3.856 10.399 3.857 10.399 3.859 C 10.399 3.86 10.399 3.862 10.399 3.863 C 10.399 3.865 10.399 3.866 10.399 3.868 C 10.399 3.87 10.399 3.871 10.399 3.873 C 10.399 3.874 10.399 3.876 10.399 3.877 C 10.399 3.879 10.399 3.88 10.399 3.882 C 10.399 3.884 10.399 3.885 10.399 3.887 C 10.399 3.888 10.399 3.89 10.399 3.892 C 10.399 3.893 10.399 3.895 10.399 3.897 C 10.399 3.898 10.399 3.9 10.399 3.902 C 10.399 3.903 10.399 3.905 10.399 3.907 C 10.399 3.908 10.399 3.91 10.399 3.912 C 10.399 3.913 10.399 3.915 10.399 3.917 C 10.399 3.918 10.399 3.92 10.399 3.922 C 10.399 3.924 10.399 3.925 10.399 3.927 C 10.399 3.929 10.399 3.931 10.399 3.932 C 10.399 3.934 10.399 3.936 10.399 3.938 C 10.399 3.94 10.399 3.941 10.399 3.943 C 10.399 3.945 10.399 3.947 10.399 3.949 C 10.399 3.95 10.399 3.952 10.399 3.954 C 10.399 3.956 10.399 3.958 10.399 3.96 C 10.399 3.962 10.399 3.963 10.399 3.965 C 10.399 3.967 10.399 3.969 10.399 3.971 C 10.399 3.973 10.399 3.975 10.399 3.977 C 10.399 3.979 10.399 3.98 10.399 3.982 C 10.399 3.984 10.399 3.986 10.399 3.988 C 10.399 3.99 10.399 3.992 10.399 3.994 C 10.399 3.996 10.399 3.998 10.399 4 C 10.399 4.002 10.399 4.004 10.399 4.006 C 10.399 4.008 10.399 4.01 10.399 4.012 C 10.399 4.014 10.399 4.016 10.399 4.018 C 10.399 4.02 10.399 4.022 10.399 4.024 C 10.399 4.026 10.399 4.028 10.399 4.03 C 10.399 4.032 10.399 4.034 10.399 4.036 C 10.399 4.039 10.399 4.041 10.399 4.043 C 10.399 4.045 10.399 4.047 10.399 4.049 C 10.399 4.051 10.399 4.053 10.399 4.055 C 10.399 4.058 10.399 4.06 10.399 4.062 C 10.399 4.064 10.399 4.066 10.399 4.068 C 10.399 4.07 10.399 4.073 10.399 4.075 C 10.399 4.077 10.399 4.079 10.399 4.081 C 10.399 4.083 10.399 4.086 10.399 4.088 C 10.399 4.09 10.399 4.092 10.399 4.094 C 10.399 4.097 10.399 4.099 10.399 4.101 C 10.399 4.103 10.399 4.106 10.399 4.108 C 10.399 4.11 10.399 4.112 10.399 4.115 C 10.399 4.117 10.399 4.119 10.399 4.121 C 10.399 4.124 10.399 4.126 10.399 4.128 C 10.399 4.131 10.399 4.133 10.399 4.135 C 10.399 4.138 10.399 4.14 10.399 4.142 C 10.399 4.145 10.399 4.147 10.399 4.149 C 10.399 4.152 10.399 4.154 10.399 4.156 C 10.399 4.159 10.399 4.161 10.399 4.163 C 10.399 4.166 10.399 4.168 10.399 4.17 C 10.399 4.173 10.399 4.175 10.399 4.178 C 10.399 4.18 10.399 4.182 10.399 4.185 C 10.399 4.187 10.399 4.19 10.399 4.192 C 10.399 4.195 10.399 4.197 10.399 4.199 C 10.399 4.202 10.399 4.204 10.399 4.207 C 10.399 4.209 10.399 4.212 10.399 4.214 C 10.399 4.217 10.399 4.219 10.399 4.222 C 10.399 4.224 10.399 4.226 10.399 4.229 C 10.399 4.231 10.399 4.234 10.399 4.236 C 10.399 4.239 10.399 4.242 10.399 4.244 C 10.399 4.247 10.399 4.249 10.399 4.252 C 10.399 4.254 10.399 4.257 10.399 4.259 C 10.399 4.262 10.399 4.264 10.399 4.267 C 10.399 4.269 10.399 4.272 10.399 4.275 C 10.399 4.277 10.399 4.28 10.399 4.282 C 10.399 4.285 10.399 4.288 10.399 4.29 C 10.399 4.293 10.399 4.295 10.399 4.298 C 10.399 4.301 10.399 4.303 10.399 4.306 C 10.399 4.308 10.399 4.311 10.399 4.314 C 10.399 4.316 10.399 4.319 10.399 4.322 C 10.399 4.324 10.399 4.327 10.399 4.33 C 10.399 4.332 10.399 4.335 10.399 4.338 C 10.399 4.34 10.399 4.343 10.399 4.346 C 10.399 4.348 10.399 4.351 10.399 4.354 C 10.399 4.356 10.399 4.359 10.399 4.362 C 10.399 4.365 10.399 4.367 10.399 4.37 C 10.399 4.373 10.399 4.375 10.399 4.378 C 10.399 4.381 10.399 4.384 10.399 4.386 C 10.399 4.389 10.399 4.392 10.399 4.395 C 10.399 4.397 10.399 4.4 10.399 4.403 C 10.399 4.406 10.399 4.409 10.399 4.411 C 10.399 4.414 10.399 4.417 10.399 4.42 C 10.399 4.422 10.399 4.425 10.399 4.428 C 10.399 4.431 10.399 4.434 10.399 4.437 C 10.399 4.439 10.399 4.442 10.399 4.445 C 10.399 4.448 10.399 4.451 10.399 4.453 C 10.399 4.456 10.399 4.459 10.399 4.462 C 10.399 4.465 10.399 4.468 10.399 4.471 C 10.399 4.473 10.399 4.476 10.399 4.479 C 10.399 4.482 10.399 4.485 10.399 4.488 C 10.399 4.491 10.399 4.494 10.399 4.496 C 10.399 4.499 10.399 4.502 10.399 4.505 C 10.399 4.508 10.399 4.511 10.399 4.514 C 10.399 4.517 10.399 4.52 10.399 4.523 C 10.399 4.526 10.399 4.529 10.399 4.531 C 10.399 4.534 10.399 4.537 10.399 4.54 C 10.399 4.543 10.399 4.546 10.399 4.549 C 10.399 4.552 10.399 4.555 10.399 4.558 C 10.399 4.561 10.399 4.564 10.399 4.567 C 10.399 4.57 10.399 4.573 10.399 4.576 C 10.399 4.579 10.399 4.582 10.399 4.585 C 10.399 4.588 10.399 4.591 10.399 4.594 C 10.399 4.597 10.399 4.6 10.399 4.603 C 10.399 4.606 10.399 4.609 10.399 4.612 C 10.399 4.615 10.399 4.618 10.399 4.621 C 10.399 4.624 10.399 4.627 10.399 4.63 C 10.399 4.633 10.399 4.636 10.399 4.639 C 10.399 4.642 10.399 4.645 10.399 4.648 C 10.399 4.651 10.399 4.654 10.399 4.658 C 10.399 4.661 10.399 4.664 10.399 4.667 C 10.399 4.67 10.399 4.673 10.399 4.676 C 10.399 4.679 10.399 4.682 10.399 4.685 C 10.399 4.688 10.399 4.691 10.399 4.695 C 10.399 4.698 10.399 4.701 10.399 4.704 C 10.399 4.707 10.399 4.71 10.399 4.713 C 10.399 4.716 10.399 4.719 10.399 4.723 C 10.399 4.726 10.399 4.729 10.399 4.732 C 10.399 4.735 10.399 4.738 10.399 4.741 C 10.399 4.745 10.399 4.748 10.399 4.751 C 10.399 4.754 10.399 4.757 10.399 4.76 C 10.399 4.763 10.399 4.767 10.399 4.77 C 10.399 4.773 10.399 4.776 10.399 4.779 C 10.399 4.782 10.399 4.786 10.399 4.789 C 10.399 4.792 10.399 4.795 10.399 4.798 C 10.399 4.802 10.399 4.805 10.399 4.808 C 10.399 4.811 10.399 4.814 10.399 4.818 C 10.399 4.821 10.399 4.824 10.399 4.827 C 10.399 4.83 10.399 4.834 10.399 4.837 C 10.399 4.84 10.399 4.843 10.399 4.847 C 10.399 4.85 10.399 4.853 10.399 4.856 C 10.399 4.859 10.399 4.863 10.399 4.866 C 10.399 4.869 10.399 4.872 10.399 4.876 C 10.399 4.879 10.399 4.882 10.399 4.885 C 10.399 4.889 10.399 4.892 10.399 4.895 C 10.399 4.898 10.399 4.902 10.399 4.905 C 10.399 4.908 10.399 4.911 10.399 4.915 C 10.399 4.918 10.399 4.921 10.399 4.925 C 10.399 4.928 10.399 4.931 10.399 4.934 C 10.399 4.938 10.399 4.941 10.399 4.944 C 10.399 4.948 10.399 4.951 10.399 4.954 C 10.399 4.957 10.399 4.961 10.399 4.964 C 10.399 4.967 10.399 4.971 10.399 4.974 C 10.399 4.977 10.399 4.981 10.399 4.984 C 10.399 4.987 10.399 4.991 10.399 4.994 C 10.399 4.997 10.399 5.001 10.399 5.004 C 10.399 5.007 10.399 5.011 10.399 5.014 C 10.399 5.017 10.399 5.021 10.399 5.024 C 10.399 5.027 10.399 5.031 10.399 5.034 C 10.399 5.037 10.399 5.041 10.399 5.044 C 10.399 5.047 10.399 5.051 10.399 5.054 C 10.399 5.057 10.399 5.061 10.399 5.064 C 10.399 5.067 10.399 5.071 10.399 5.074 C 10.399 5.077 10.399 5.081 10.399 5.084 C 10.399 5.088 10.399 5.091 10.399 5.094 C 10.399 5.098 10.399 5.101 10.399 5.104 C 10.399 5.108 10.399 5.111 10.399 5.115 C 10.399 5.118 10.399 5.121 10.399 5.125 C 10.399 5.128 10.399 5.132 10.399 5.135 C 10.399 5.138 10.399 5.142 10.399 5.145 C 10.399 5.148 10.399 5.152 10.399 5.155 C 10.399 5.159 10.399 5.162 10.399 5.165 C 10.399 5.169 10.399 5.172 10.399 5.176 C 10.399 5.179 10.399 5.183 10.399 5.186 C 10.399 5.189 10.399 5.193 10.399 5.196 C 10.399 5.2 10.399 5.203 10.399 5.206 C 10.399 5.21 10.399 5.213 10.399 5.217 C 10.399 5.22 10.399 5.224 10.399 5.227 C 10.399 5.23 10.399 5.234 10.399 5.237 C 10.399 5.241 10.399 5.244 10.399 5.248 C 10.399 5.251 10.399 5.254 10.399 5.258 C 10.399 5.261 10.399 5.265 10.399 5.268 C 10.399 5.272 10.399 5.275 10.399 5.278 C 10.399 5.282 10.399 5.285 10.399 5.289 C 10.399 5.292 10.399 5.296 10.399 5.299 C 10.399 5.303 10.399 5.306 10.399 5.309 C 10.399 5.313 10.399 5.316 10.399 5.32 C 10.399 5.323 10.399 5.327 10.399 5.33 C 10.399 5.334 10.399 5.337 10.399 5.341 C 10.399 5.344 10.399 5.347 10.399 5.351 C 10.399 5.354 10.399 5.358 10.399 5.361 C 10.399 5.365 10.399 5.368 10.399 5.372 C 10.399 5.375 10.399 5.379 10.399 5.382 C 10.399 5.386 10.399 5.389 10.399 5.393 C 10.399 5.396 10.399 5.399 10.399 5.403 C 10.399 5.406 10.399 5.41 10.399 5.413 C 10.399 5.417 10.399 5.42 10.399 5.424 C 10.399 5.427 10.399 5.431 10.399 5.434 C 10.399 5.438 10.399 5.441 10.399 5.445 C 10.399 5.448 10.399 5.452 10.399 5.455 C 10.399 5.459 10.399 5.462 10.399 5.466 C 10.399 5.469 10.399 5.472 10.399 5.476 C 10.399 5.479 10.399 5.483 10.399 5.486 C 10.399 5.49 10.399 5.493 10.399 5.497 C 10.399 5.5 10.399 5.504 10.399 5.507 C 10.399 5.511 10.399 5.514 10.399 5.518 C 10.399 5.521 10.399 5.525 10.399 5.528 C 10.399 5.532 10.399 5.535 10.399 5.539 C 10.399 5.542 10.399 5.546 10.399 5.549 C 10.399 5.553 10.399 5.556 10.399 5.56 C 10.399 5.563 10.399 5.567 10.399 5.57 C 10.399 5.574 10.399 5.577 10.399 5.581 C 10.399 5.584 10.399 5.588 10.399 5.591 C 10.399 5.595 10.399 5.598 10.399 5.602 C 10.399 5.605 10.399 5.609 10.399 5.612 C 10.399 5.616 10.399 5.619 10.399 5.622 C 10.399 5.626 10.399 5.629 10.399 5.633 C 10.399 5.636 10.399 5.64 10.399 5.643 C 10.399 5.647 10.399 5.65 10.399 5.654 C 10.399 5.657 10.399 5.661 10.399 5.664 C 10.399 5.668 10.399 5.671 10.399 5.675 C 10.399 5.678 10.399 5.682 10.399 5.685 C 10.399 5.689 10.399 5.692 10.399 5.696 C 10.399 5.699 10.399 5.703 10.399 5.706 C 10.399 5.71 10.399 5.713 10.399 5.717 C 10.399 5.72 10.399 5.724 10.399 5.727 C 10.399 5.731 10.399 5.734 10.399 5.738 C 10.399 5.741 10.399 5.745 10.399 5.748 C 10.399 5.752 10.399 5.755 10.399 5.759 C 10.399 5.762 10.399 5.766 10.399 5.769 C 10.399 5.772 10.399 5.776 10.399 5.779 C 10.399 5.783 10.399 5.786 10.399 5.79 C 10.399 5.793 10.399 5.797 10.399 5.8 C 10.399 5.804 10.399 5.807 10.399 5.811 C 10.399 5.814 10.399 5.818 10.399 5.821 C 10.399 5.825 10.399 5.828 10.399 5.832 C 10.399 5.835 10.399 5.839 10.399 5.842 C 10.399 5.845 10.399 5.849 10.399 5.852 C 10.399 5.856 10.399 5.859 10.399 5.863 C 10.399 5.866 10.399 5.87 10.399 5.873 C 10.399 5.877 10.399 5.88 10.399 5.884 C 10.399 5.887 10.399 5.891 10.399 5.894 C 10.399 5.897 10.399 5.901 10.399 5.904 C 10.399 5.908 10.399 5.911 10.399 5.915 C 10.399 5.918 10.399 5.922 10.399 5.925 C 10.399 5.929 10.399 5.932 10.399 5.935 C 10.399 5.939 10.399 5.942 10.399 5.946 C 10.399 5.949 10.399 5.953 10.399 5.956 C 10.399 5.96 10.399 5.963 10.399 5.966 C 10.399 5.97 10.399 5.973 10.399 5.977 C 10.399 5.98 10.399 5.984 10.399 5.987 C 10.399 5.99 10.399 5.994 10.399 5.997 C 10.399 6.001 10.399 6.004 10.399 6.008 C 10.399 6.011 10.399 6.014 10.399 6.018 C 10.399 6.021 10.399 6.025 10.399 6.028 C 10.399 6.032 10.399 6.035 10.399 6.038 C 10.399 6.042 10.399 6.045 10.399 6.049 C 10.399 6.052 10.399 6.055 10.399 6.059 C 10.399 6.062 10.399 6.066 10.399 6.069 C 10.399 6.072 10.399 6.076 10.399 6.079 C 10.399 6.083 10.399 6.086 10.399 6.089 C 10.399 6.093 10.399 6.096 10.399 6.1 C 10.399 6.103 10.399 6.106 10.399 6.11 C 10.399 6.113 10.399 6.117 10.399 6.12 C 10.399 6.123 10.399 6.127 10.399 6.13 C 10.399 6.134 10.399 6.137 10.399 6.14 C 10.399 6.144 10.399 6.147 10.399 6.15 C 10.399 6.154 10.399 6.157 10.399 6.16 C 10.399 6.164 10.399 6.167 10.399 6.171 C 10.399 6.174 10.399 6.177 10.399 6.181 C 10.399 6.184 10.399 6.187 10.399 6.191 C 10.399 6.194 10.399 6.197 10.399 6.201 C 10.399 6.204 10.399 6.207 10.399 6.211 C 10.399 6.214 10.399 6.217 10.399 6.221 C 10.399 6.224 10.399 6.227 10.399 6.231 C 10.399 6.234 10.399 6.237 10.399 6.241 C 10.399 6.244 10.399 6.247 10.399 6.251 C 10.399 6.254 10.399 6.257 10.399 6.261 C 10.399 6.264 10.399 6.267 10.399 6.271 C 10.399 6.274 10.399 6.277 10.399 6.28 C 10.399 6.284 10.399 6.287 10.399 6.29 C 10.399 6.294 10.399 6.297 10.399 6.3 C 10.399 6.303 10.399 6.307 10.399 6.31 C 10.399 6.313 10.399 6.317 10.399 6.32 C 10.399 6.323 10.399 6.326 10.399 6.33 C 10.399 6.333 10.399 6.336 10.399 6.339 C 10.399 6.343 10.399 6.346 10.399 6.349 C 10.399 6.353 10.399 6.356 10.399 6.359 C 10.399 6.362 10.399 6.366 10.399 6.369 C 10.399 6.372 10.399 6.375 10.399 6.378 C 10.399 6.382 10.399 6.385 10.399 6.388 C 10.399 6.391 10.399 6.395 10.399 6.398 C 10.399 6.401 10.399 6.404 10.399 6.407 C 10.399 6.411 10.399 6.414 10.399 6.417 C 10.399 6.42 10.399 6.424 10.399 6.427 C 10.399 6.43 10.399 6.433 10.399 6.436 C 10.399 6.44 10.399 6.443 10.399 6.446 C 10.399 6.449 10.399 6.452 10.399 6.455 C 10.399 6.459 10.399 6.462 10.399 6.465 C 10.399 6.468 10.399 6.471 10.399 6.474 C 10.399 6.478 10.399 6.481 10.399 6.484 C 10.399 6.487 10.399 6.49 10.399 6.493 C 10.399 6.497 10.399 6.5 10.399 6.503 C 10.399 6.506 10.399 6.509 10.399 6.512 C 10.399 6.515 10.399 6.518 10.399 6.522 C 10.399 6.525 10.399 6.528 10.399 6.531 C 10.399 6.534 10.399 6.537 10.399 6.54 C 10.399 6.543 10.399 6.546 10.399 6.55 C 10.399 6.553 10.399 6.556 10.399 6.559 C 10.399 6.562 10.399 6.565 10.399 6.568 C 10.399 6.571 10.399 6.574 10.399 6.577 C 10.399 6.58 10.399 6.583 10.399 6.586 C 10.399 6.59 10.399 6.593 10.399 6.596 C 10.399 6.599 10.399 6.602 10.399 6.605 C 10.399 6.608 10.399 6.611 10.399 6.614 C 10.399 6.617 10.399 6.62 10.399 6.623 C 10.399 6.626 10.399 6.629 10.399 6.632 C 10.399 6.635 10.399 6.638 10.399 6.641 C 10.399 6.644 10.399 6.647 10.399 6.65 C 10.399 6.653 10.399 6.656 10.399 6.659 C 10.399 6.662 10.399 6.665 10.399 6.668 C 10.399 6.671 10.399 6.674 10.399 6.677 C 10.399 6.68 10.399 6.683 10.399 6.686 C 10.399 6.689 10.399 6.692 10.399 6.695 C 10.399 6.698 10.399 6.701 10.399 6.703 C 10.399 6.706 10.399 6.709 10.399 6.712 C 10.399 6.715 10.399 6.718 10.399 6.721 C 10.399 6.724 10.399 6.727 10.399 6.73 C 10.399 6.733 10.399 6.736 10.399 6.738 C 10.399 6.741 10.399 6.744 10.399 6.747 C 10.399 6.75 10.399 6.753 10.399 6.756 C 10.399 6.759 10.399 6.762 10.399 6.764 C 10.399 6.767 10.399 6.77 10.399 6.773 C 10.399 6.776 10.399 6.779 10.399 6.781 C 10.399 6.784 10.399 6.787 10.399 6.79 C 10.399 6.793 10.399 6.796 10.399 6.798 C 10.399 6.801 10.399 6.804 10.399 6.807 C 10.399 6.81 10.399 6.813 10.399 6.815 C 10.399 6.818 10.399 6.821 10.399 6.824 C 10.399 6.826 10.399 6.829 10.399 6.832 C 10.399 6.835 10.399 6.838 10.399 6.84 C 10.399 6.843 10.399 6.846 10.399 6.849 C 10.399 6.851 10.399 6.854 10.399 6.857 C 10.399 6.86 10.399 6.862 10.399 6.865 C 10.399 6.868 10.399 6.87 10.399 6.873 C 10.399 6.876 10.399 6.879 10.399 6.881 C 10.399 6.884 10.399 6.887 10.399 6.889 C 10.399 6.892 10.399 6.895 10.399 6.897 C 10.399 6.9 10.399 6.903 10.399 6.905 C 10.399 6.908 10.399 6.911 10.399 6.913 C 10.399 6.916 10.399 6.919 10.399 6.921 C 10.399 6.924 10.399 6.927 10.399 6.929 C 10.399 6.932 10.399 6.935 10.399 6.937 C 10.399 6.94 10.399 6.942 10.399 6.945 C 10.399 6.948 10.399 6.95 10.399 6.953 C 10.399 6.955 10.399 6.958 10.399 6.961 C 10.399 6.963 10.399 6.966 10.399 6.968 C 10.399 6.971 10.399 6.973 10.399 6.976 C 10.399 6.978 10.399 6.981 10.399 6.984 C 10.399 6.986 10.399 6.989 10.399 6.991 C 10.399 6.994 10.399 6.996 10.399 6.999 C 10.399 7.001 10.399 7.004 10.399 7.006 C 10.399 7.009 10.399 7.011 10.399 7.014 C 10.399 7.016 10.399 7.019 10.399 7.021 C 10.399 7.024 10.399 7.026 10.399 7.029 C 10.399 7.031 10.399 7.033 10.399 7.036 C 10.399 7.038 10.399 7.041 10.399 7.043 C 10.399 7.046 10.399 7.048 10.399 7.05 C 10.399 7.053 10.399 7.055 10.399 7.058 C 10.399 7.06 10.399 7.062 10.399 7.065 C 10.399 7.067 10.399 7.07 10.399 7.072 C 10.399 7.074 10.399 7.077 10.399 7.079 C 10.399 7.081 10.399 7.084 10.399 7.086 C 10.399 7.088 10.399 7.091 10.399 7.093 C 10.399 7.095 10.399 7.098 10.399 7.1 C 10.399 7.102 10.399 7.105 10.399 7.107 C 10.399 7.109 10.399 7.112 10.399 7.114 C 10.399 7.116 10.399 7.118 10.399 7.121 C 10.399 7.123 10.399 7.125 10.399 7.128 C 10.399 7.13 10.399 7.132 10.399 7.134 C 10.399 7.136 10.399 7.139 10.399 7.141 C 10.399 7.143 10.399 7.145 10.399 7.148 C 10.399 7.15 10.399 7.152 10.399 7.154 C 10.399 7.156 10.399 7.159 10.399 7.161 C 10.399 7.163 10.399 7.165 10.399 7.167 C 10.399 7.169 10.399 7.172 10.399 7.174 C 10.399 7.176 10.399 7.178 10.399 7.18 C 10.399 7.182 10.399 7.184 10.399 7.186 C 10.399 7.189 10.399 7.191 10.399 7.193 C 10.399 7.195 10.399 7.197 10.399 7.199 C 10.399 7.201 10.399 7.203 10.399 7.205 C 10.399 7.207 10.399 7.209 10.399 7.211 C 10.399 7.213 10.399 7.216 10.399 7.218 C 10.399 7.22 10.399 7.222 10.399 7.224 C 10.399 7.226 10.399 7.228 10.399 7.23 C 10.399 7.232 10.399 7.234 10.399 7.236 C 10.399 7.238 10.399 7.24 10.399 7.242 C 10.399 7.244 10.399 7.245 10.399 7.247 C 10.399 7.249 10.399 7.251 10.399 7.253 C 10.399 7.255 10.399 7.257 10.399 7.259 C 10.399 7.261 10.399 7.263 10.399 7.265 C 10.399 7.267 10.399 7.269 10.399 7.27 C 10.399 7.272 10.399 7.274 10.399 7.276 C 10.399 7.278 10.399 7.28 10.399 7.282 C 10.399 7.283 10.399 7.285 10.399 7.287 C 10.399 7.289 10.399 7.291 10.399 7.293 C 10.399 7.294 10.399 7.296 10.399 7.298 C 10.399 7.3 10.399 7.302 10.399 7.303 C 10.399 7.305 10.399 7.307 10.399 7.309 C 10.399 7.31 10.399 7.312 10.399 7.314 C 10.399 7.316 10.399 7.317 10.399 7.319 C 10.399 7.321 10.399 7.322 10.399 7.324 C 10.399 7.326 10.399 7.328 10.399 7.329 C 10.399 7.331 10.399 7.333 10.399 7.334 C 10.399 7.336 10.399 7.338 10.399 7.339 C 10.399 7.341 10.399 7.343 10.399 7.344 C 10.399 7.346 10.399 7.347 10.399 7.349 C 10.399 7.351 10.399 7.352 10.399 7.354 C 10.399 7.355 10.399 7.357 10.399 7.359 C 10.399 7.36 10.399 7.362 10.399 7.363 C 10.399 7.365 10.399 7.366 10.399 7.368 C 10.399 7.369 10.399 7.371 10.399 7.372 C 10.399 7.374 10.399 7.376 10.399 7.377 C 10.399 7.378 10.399 7.38 10.399 7.381 C 10.399 7.383 10.399 7.384 10.399 7.386 C 10.399 7.387 10.399 7.389 10.399 7.39 C 10.399 7.392 10.399 7.393 10.399 7.394 C 10.399 7.396 10.399 7.397 10.399 7.399 C 10.399 7.4 10.399 7.402 10.399 7.403 C 10.399 7.404 10.399 7.406 10.399 7.407 C 10.399 7.408 10.399 7.41 10.399 7.411 C 10.399 7.412 10.399 7.414 10.399 7.415 C 10.399 7.416 10.399 7.418 10.399 7.419 C 10.399 7.42 10.399 7.422 10.399 7.423 C 10.399 7.424 10.399 7.425 10.399 7.427 C 10.399 7.428 10.399 7.429 10.399 7.43 C 10.399 7.432 10.399 7.433 10.399 7.434 C 10.399 7.435 10.399 7.437 10.399 7.438 C 10.399 7.439 10.399 7.44 10.399 7.441 C 10.399 7.442 10.399 7.444 10.399 7.445 C 10.399 7.446 10.399 7.447 10.399 7.448 C 10.399 7.449 10.399 7.45 10.399 7.452 C 10.399 7.453 10.399 7.454 10.399 7.455 C 10.399 7.456 10.399 7.457 10.399 7.458 C 10.399 7.459 10.399 7.46 10.399 7.461 C 10.399 7.462 10.399 7.463 10.399 7.464 C 10.399 7.465 10.399 7.467 10.399 7.468 C 10.399 7.469 10.399 7.47 10.399 7.471 C 10.399 7.471 10.399 7.472 10.399 7.473 C 10.399 7.474 10.399 7.475 10.399 7.476 C 10.399 7.477 10.399 7.478 10.399 7.479 C 10.399 7.48 10.399 7.481 10.399 7.482 C 10.399 7.483 10.399 7.484 10.399 7.484 C 10.399 7.485 10.399 7.486 10.399 7.487 C 10.399 7.488 10.399 7.489 10.399 7.49 C 10.399 7.49 10.399 7.491 10.399 7.492 C 10.399 7.493 10.399 7.494 10.399 7.495 C 10.399 7.495 10.399 7.496 10.399 7.497 C 10.399 7.498 10.399 7.498 10.399 7.499 C 10.399 7.5 10.399 7.501 10.399 7.501 C 10.399 7.502 10.399 7.503 10.399 7.503 C 10.399 7.504 10.399 7.505 10.399 7.505 C 10.399 7.506 10.399 7.507 10.399 7.507 C 10.399 7.508 10.399 7.509 10.399 7.509 C 10.399 7.51 10.399 7.511 10.399 7.511 C 10.399 7.512 10.399 7.512 10.399 7.513 C 10.399 7.514 10.399 7.514 10.399 7.515 C 10.399 7.515 10.399 7.516 10.399 7.516 C 10.399 7.517 10.399 7.517 10.399 7.518 C 10.399 7.519 10.399 7.519 10.399 7.52 C 10.399 7.52 10.399 7.52 10.399 7.521 C 10.399 7.521 10.399 7.522 10.399 7.522 C 10.399 7.523 10.399 7.523 10.399 7.524 C 10.399 7.524 10.399 7.524 10.399 7.525 C 10.399 7.525 10.399 7.526 10.399 7.526 C 10.399 7.526 10.399 7.527 10.399 7.527 C 10.399 7.527 10.399 7.528 10.399 7.528 C 10.399 7.528 10.399 7.529 10.399 7.529 C 10.399 7.529 10.399 7.53 10.399 7.53 C 10.399 7.53 10.399 7.53 10.399 7.531 C 10.399 7.531 10.399 7.531 10.399 7.531 C 10.399 7.532 10.399 7.532 10.399 7.532 C 10.399 7.532 10.399 7.532 10.399 7.533 C 10.399 7.533 10.399 7.533 10.399 7.533 C 10.399 7.533 10.399 7.533 10.399 7.533 C 10.399 7.534 10.399 7.534 10.399 7.534 C 10.399 7.534 10.399 7.534 10.399 7.534 C 10.399 7.534 10.399 7.534 10.399 7.534 C 10.399 7.534 10.399 7.534 10.399 7.534 C 10.399 7.534 10.399 7.534 11.599 7.534 C 12.799 7.534 12.799 7.534 12.799 7.534 C 12.799 7.534 12.799 7.534 12.799 7.534 C 12.799 7.534 12.799 7.534 12.799 7.534 C 12.799 7.534 12.799 7.534 12.799 7.534 C 12.799 7.534 12.799 7.534 12.799 7.533 C 12.799 7.533 12.799 7.533 12.799 7.533 C 12.799 7.533 12.799 7.533 12.799 7.533 C 12.799 7.532 12.799 7.532 12.799 7.532 C 12.799 7.532 12.799 7.532 12.799 7.531 C 12.799 7.531 12.799 7.531 12.799 7.531 C 12.799 7.53 12.799 7.53 12.799 7.53 C 12.799 7.53 12.799 7.529 12.799 7.529 C 12.799 7.529 12.799 7.528 12.799 7.528 C 12.799 7.528 12.799 7.527 12.799 7.527 C 12.799 7.527 12.799 7.526 12.799 7.526 C 12.799 7.526 12.799 7.525 12.799 7.525 C 12.799 7.524 12.799 7.524 12.799 7.524 C 12.799 7.523 12.799 7.523 12.799 7.522 C 12.799 7.522 12.799 7.521 12.799 7.521 C 12.799 7.52 12.799 7.52 12.799 7.52 C 12.799 7.519 12.799 7.519 12.799 7.518 C 12.799 7.517 12.799 7.517 12.799 7.516 C 12.799 7.516 12.799 7.515 12.799 7.515 C 12.799 7.514 12.799 7.514 12.799 7.513 C 12.799 7.512 12.799 7.512 12.799 7.511 C 12.799 7.511 12.799 7.51 12.799 7.509 C 12.799 7.509 12.799 7.508 12.799 7.507 C 12.799 7.507 12.799 7.506 12.799 7.505 C 12.799 7.505 12.799 7.504 12.799 7.503 C 12.799 7.503 12.799 7.502 12.799 7.501 C 12.799 7.501 12.799 7.5 12.799 7.499 C 12.799 7.498 12.799 7.498 12.799 7.497 C 12.799 7.496 12.799 7.495 12.799 7.495 C 12.799 7.494 12.799 7.493 12.799 7.492 C 12.799 7.491 12.799 7.49 12.799 7.49 C 12.799 7.489 12.799 7.488 12.799 7.487 C 12.799 7.486 12.799 7.485 12.799 7.484 C 12.799 7.484 12.799 7.483 12.799 7.482 C 12.799 7.481 12.799 7.48 12.799 7.479 C 12.799 7.478 12.799 7.477 12.799 7.476 C 12.799 7.475 12.799 7.474 12.799 7.473 C 12.799 7.472 12.799 7.471 12.799 7.471 C 12.799 7.47 12.799 7.469 12.799 7.468 C 12.799 7.467 12.799 7.465 12.799 7.464 C 12.799 7.463 12.799 7.462 12.799 7.461 C 12.799 7.46 12.799 7.459 12.799 7.458 C 12.799 7.457 12.799 7.456 12.799 7.455 C 12.799 7.454 12.799 7.453 12.799 7.452 C 12.799 7.45 12.799 7.449 12.799 7.448 C 12.799 7.447 12.799 7.446 12.799 7.445 C 12.799 7.444 12.799 7.442 12.799 7.441 C 12.799 7.44 12.799 7.439 12.799 7.438 C 12.799 7.437 12.799 7.435 12.799 7.434 C 12.799 7.433 12.799 7.432 12.799 7.43 C 12.799 7.429 12.799 7.428 12.799 7.427 C 12.799 7.425 12.799 7.424 12.799 7.423 C 12.799 7.422 12.799 7.42 12.799 7.419 C 12.799 7.418 12.799 7.416 12.799 7.415 C 12.799 7.414 12.799 7.412 12.799 7.411 C 12.799 7.41 12.799 7.408 12.799 7.407 C 12.799 7.406 12.799 7.404 12.799 7.403 C 12.799 7.402 12.799 7.4 12.799 7.399 C 12.799 7.397 12.799 7.396 12.799 7.394 C 12.799 7.393 12.799 7.392 12.799 7.39 C 12.799 7.389 12.799 7.387 12.799 7.386 C 12.799 7.384 12.799 7.383 12.799 7.381 C 12.799 7.38 12.799 7.378 12.799 7.377 C 12.799 7.376 12.799 7.374 12.799 7.372 C 12.799 7.371 12.799 7.369 12.799 7.368 C 12.799 7.366 12.799 7.365 12.799 7.363 C 12.799 7.362 12.799 7.36 12.799 7.359 C 12.799 7.357 12.799 7.355 12.799 7.354 C 12.799 7.352 12.799 7.351 12.799 7.349 C 12.799 7.347 12.799 7.346 12.799 7.344 C 12.799 7.343 12.799 7.341 12.799 7.339 C 12.799 7.338 12.799 7.336 12.799 7.334 C 12.799 7.333 12.799 7.331 12.799 7.329 C 12.799 7.328 12.799 7.326 12.799 7.324 C 12.799 7.322 12.799 7.321 12.799 7.319 C 12.799 7.317 12.799 7.316 12.799 7.314 C 12.799 7.312 12.799 7.31 12.799 7.309 C 12.799 7.307 12.799 7.305 12.799 7.303 C 12.799 7.302 12.799 7.3 12.799 7.298 C 12.799 7.296 12.799 7.294 12.799 7.293 C 12.799 7.291 12.799 7.289 12.799 7.287 C 12.799 7.285 12.799 7.283 12.799 7.282 C 12.799 7.28 12.799 7.278 12.799 7.276 C 12.799 7.274 12.799 7.272 12.799 7.27 C 12.799 7.269 12.799 7.267 12.799 7.265 C 12.799 7.263 12.799 7.261 12.799 7.259 C 12.799 7.257 12.799 7.255 12.799 7.253 C 12.799 7.251 12.799 7.249 12.799 7.247 C 12.799 7.245 12.799 7.244 12.799 7.242 C 12.799 7.24 12.799 7.238 12.799 7.236 C 12.799 7.234 12.799 7.232 12.799 7.23 C 12.799 7.228 12.799 7.226 12.799 7.224 C 12.799 7.222 12.799 7.22 12.799 7.218 C 12.799 7.216 12.799 7.213 12.799 7.211 C 12.799 7.209 12.799 7.207 12.799 7.205 C 12.799 7.203 12.799 7.201 12.799 7.199 C 12.799 7.197 12.799 7.195 12.799 7.193 C 12.799 7.191 12.799 7.189 12.799 7.186 C 12.799 7.184 12.799 7.182 12.799 7.18 C 12.799 7.178 12.799 7.176 12.799 7.174 C 12.799 7.172 12.799 7.169 12.799 7.167 C 12.799 7.165 12.799 7.163 12.799 7.161 C 12.799 7.159 12.799 7.156 12.799 7.154 C 12.799 7.152 12.799 7.15 12.799 7.148 C 12.799 7.145 12.799 7.143 12.799 7.141 C 12.799 7.139 12.799 7.136 12.799 7.134 C 12.799 7.132 12.799 7.13 12.799 7.128 C 12.799 7.125 12.799 7.123 12.799 7.121 C 12.799 7.118 12.799 7.116 12.799 7.114 C 12.799 7.112 12.799 7.109 12.799 7.107 C 12.799 7.105 12.799 7.102 12.799 7.1 C 12.799 7.098 12.799 7.095 12.799 7.093 C 12.799 7.091 12.799 7.088 12.799 7.086 C 12.799 7.084 12.799 7.081 12.799 7.079 C 12.799 7.077 12.799 7.074 12.799 7.072 C 12.799 7.07 12.799 7.067 12.799 7.065 C 12.799 7.062 12.799 7.06 12.799 7.058 C 12.799 7.055 12.799 7.053 12.799 7.05 C 12.799 7.048 12.799 7.046 12.799 7.043 C 12.799 7.041 12.799 7.038 12.799 7.036 C 12.799 7.033 12.799 7.031 12.799 7.029 C 12.799 7.026 12.799 7.024 12.799 7.021 C 12.799 7.019 12.799 7.016 12.799 7.014 C 12.799 7.011 12.799 7.009 12.799 7.006 C 12.799 7.004 12.799 7.001 12.799 6.999 C 12.799 6.996 12.799 6.994 12.799 6.991 C 12.799 6.989 12.799 6.986 12.799 6.984 C 12.799 6.981 12.799 6.978 12.799 6.976 C 12.799 6.973 12.799 6.971 12.799 6.968 C 12.799 6.966 12.799 6.963 12.799 6.961 C 12.799 6.958 12.799 6.955 12.799 6.953 C 12.799 6.95 12.799 6.948 12.799 6.945 C 12.799 6.942 12.799 6.94 12.799 6.937 C 12.799 6.935 12.799 6.932 12.799 6.929 C 12.799 6.927 12.799 6.924 12.799 6.921 C 12.799 6.919 12.799 6.916 12.799 6.913 C 12.799 6.911 12.799 6.908 12.799 6.905 C 12.799 6.903 12.799 6.9 12.799 6.897 C 12.799 6.895 12.799 6.892 12.799 6.889 C 12.799 6.887 12.799 6.884 12.799 6.881 C 12.799 6.879 12.799 6.876 12.799 6.873 C 12.799 6.87 12.799 6.868 12.799 6.865 C 12.799 6.862 12.799 6.86 12.799 6.857 C 12.799 6.854 12.799 6.851 12.799 6.849 C 12.799 6.846 12.799 6.843 12.799 6.84 C 12.799 6.838 12.799 6.835 12.799 6.832 C 12.799 6.829 12.799 6.826 12.799 6.824 C 12.799 6.821 12.799 6.818 12.799 6.815 C 12.799 6.813 12.799 6.81 12.799 6.807 C 12.799 6.804 12.799 6.801 12.799 6.798 C 12.799 6.796 12.799 6.793 12.799 6.79 C 12.799 6.787 12.799 6.784 12.799 6.781 C 12.799 6.779 12.799 6.776 12.799 6.773 C 12.799 6.77 12.799 6.767 12.799 6.764 C 12.799 6.762 12.799 6.759 12.799 6.756 C 12.799 6.753 12.799 6.75 12.799 6.747 C 12.799 6.744 12.799 6.741 12.799 6.738 C 12.799 6.736 12.799 6.733 12.799 6.73 C 12.799 6.727 12.799 6.724 12.799 6.721 C 12.799 6.718 12.799 6.715 12.799 6.712 C 12.799 6.709 12.799 6.706 12.799 6.703 C 12.799 6.701 12.799 6.698 12.799 6.695 C 12.799 6.692 12.799 6.689 12.799 6.686 C 12.799 6.683 12.799 6.68 12.799 6.677 C 12.799 6.674 12.799 6.671 12.799 6.668 C 12.799 6.665 12.799 6.662 12.799 6.659 C 12.799 6.656 12.799 6.653 12.799 6.65 C 12.799 6.647 12.799 6.644 12.799 6.641 C 12.799 6.638 12.799 6.635 12.799 6.632 C 12.799 6.629 12.799 6.626 12.799 6.623 C 12.799 6.62 12.799 6.617 12.799 6.614 C 12.799 6.611 12.799 6.608 12.799 6.605 C 12.799 6.602 12.799 6.599 12.799 6.596 C 12.799 6.593 12.799 6.59 12.799 6.586 C 12.799 6.583 12.799 6.58 12.799 6.577 C 12.799 6.574 12.799 6.571 12.799 6.568 C 12.799 6.565 12.799 6.562 12.799 6.559 C 12.799 6.556 12.799 6.553 12.799 6.55 C 12.799 6.546 12.799 6.543 12.799 6.54 C 12.799 6.537 12.799 6.534 12.799 6.531 C 12.799 6.528 12.799 6.525 12.799 6.522 C 12.799 6.518 12.799 6.515 12.799 6.512 C 12.799 6.509 12.799 6.506 12.799 6.503 C 12.799 6.5 12.799 6.497 12.799 6.493 C 12.799 6.49 12.799 6.487 12.799 6.484 C 12.799 6.481 12.799 6.478 12.799 6.474 C 12.799 6.471 12.799 6.468 12.799 6.465 C 12.799 6.462 12.799 6.459 12.799 6.455 C 12.799 6.452 12.799 6.449 12.799 6.446 C 12.799 6.443 12.799 6.44 12.799 6.436 C 12.799 6.433 12.799 6.43 12.799 6.427 C 12.799 6.424 12.799 6.42 12.799 6.417 C 12.799 6.414 12.799 6.411 12.799 6.407 C 12.799 6.404 12.799 6.401 12.799 6.398 C 12.799 6.395 12.799 6.391 12.799 6.388 C 12.799 6.385 12.799 6.382 12.799 6.378 C 12.799 6.375 12.799 6.372 12.799 6.369 C 12.799 6.366 12.799 6.362 12.799 6.359 C 12.799 6.356 12.799 6.353 12.799 6.349 C 12.799 6.346 12.799 6.343 12.799 6.339 C 12.799 6.336 12.799 6.333 12.799 6.33 C 12.799 6.326 12.799 6.323 12.799 6.32 C 12.799 6.317 12.799 6.313 12.799 6.31 C 12.799 6.307 12.799 6.303 12.799 6.3 C 12.799 6.297 12.799 6.294 12.799 6.29 C 12.799 6.287 12.799 6.284 12.799 6.28 C 12.799 6.277 12.799 6.274 12.799 6.271 C 12.799 6.267 12.799 6.264 12.799 6.261 C 12.799 6.257 12.799 6.254 12.799 6.251 C 12.799 6.247 12.799 6.244 12.799 6.241 C 12.799 6.237 12.799 6.234 12.799 6.231 C 12.799 6.227 12.799 6.224 12.799 6.221 C 12.799 6.217 12.799 6.214 12.799 6.211 C 12.799 6.207 12.799 6.204 12.799 6.201 C 12.799 6.197 12.799 6.194 12.799 6.191 C 12.799 6.187 12.799 6.184 12.799 6.181 C 12.799 6.177 12.799 6.174 12.799 6.171 C 12.799 6.167 12.799 6.164 12.799 6.16 C 12.799 6.157 12.799 6.154 12.799 6.15 C 12.799 6.147 12.799 6.144 12.799 6.14 C 12.799 6.137 12.799 6.134 12.799 6.13 C 12.799 6.127 12.799 6.123 12.799 6.12 C 12.799 6.117 12.799 6.113 12.799 6.11 C 12.799 6.106 12.799 6.103 12.799 6.1 C 12.799 6.096 12.799 6.093 12.799 6.089 C 12.799 6.086 12.799 6.083 12.799 6.079 C 12.799 6.076 12.799 6.072 12.799 6.069 C 12.799 6.066 12.799 6.062 12.799 6.059 C 12.799 6.055 12.799 6.052 12.799 6.049 C 12.799 6.045 12.799 6.042 12.799 6.038 C 12.799 6.035 12.799 6.032 12.799 6.028 C 12.799 6.025 12.799 6.021 12.799 6.018 C 12.799 6.014 12.799 6.011 12.799 6.008 C 12.799 6.004 12.799 6.001 12.799 5.997 C 12.799 5.994 12.799 5.99 12.799 5.987 C 12.799 5.984 12.799 5.98 12.799 5.977 C 12.799 5.973 12.799 5.97 12.799 5.966 C 12.799 5.963 12.799 5.96 12.799 5.956 C 12.799 5.953 12.799 5.949 12.799 5.946 C 12.799 5.942 12.799 5.939 12.799 5.935 C 12.799 5.932 12.799 5.929 12.799 5.925 C 12.799 5.922 12.799 5.918 12.799 5.915 C 12.799 5.911 12.799 5.908 12.799 5.904 C 12.799 5.901 12.799 5.897 12.799 5.894 C 12.799 5.891 12.799 5.887 12.799 5.884 C 12.799 5.88 12.799 5.877 12.799 5.873 C 12.799 5.87 12.799 5.866 12.799 5.863 C 12.799 5.859 12.799 5.856 12.799 5.852 C 12.799 5.849 12.799 5.845 12.799 5.842 C 12.799 5.839 12.799 5.835 12.799 5.832 C 12.799 5.828 12.799 5.825 12.799 5.821 C 12.799 5.818 12.799 5.814 12.799 5.811 C 12.799 5.807 12.799 5.804 12.799 5.8 C 12.799 5.797 12.799 5.793 12.799 5.79 C 12.799 5.786 12.799 5.783 12.799 5.779 C 12.799 5.776 12.799 5.772 12.799 5.769 C 12.799 5.766 12.799 5.762 12.799 5.759 C 12.799 5.755 12.799 5.752 12.799 5.748 C 12.799 5.745 12.799 5.741 12.799 5.738 C 12.799 5.734 12.799 5.731 12.799 5.727 C 12.799 5.724 12.799 5.72 12.799 5.717 C 12.799 5.713 12.799 5.71 12.799 5.706 C 12.799 5.703 12.799 5.699 12.799 5.696 C 12.799 5.692 12.799 5.689 12.799 5.685 C 12.799 5.682 12.799 5.678 12.799 5.675 C 12.799 5.671 12.799 5.668 12.799 5.664 C 12.799 5.661 12.799 5.657 12.799 5.654 C 12.799 5.65 12.799 5.647 12.799 5.643 C 12.799 5.64 12.799 5.636 12.799 5.633 C 12.799 5.629 12.799 5.626 12.799 5.622 C 12.799 5.619 12.799 5.616 12.799 5.612 C 12.799 5.609 12.799 5.605 12.799 5.602 C 12.799 5.598 12.799 5.595 12.799 5.591 C 12.799 5.588 12.799 5.584 12.799 5.581 C 12.799 5.577 12.799 5.574 12.799 5.57 C 12.799 5.567 12.799 5.563 12.799 5.56 C 12.799 5.556 12.799 5.553 12.799 5.549 C 12.799 5.546 12.799 5.542 12.799 5.539 C 12.799 5.535 12.799 5.532 12.799 5.528 C 12.799 5.525 12.799 5.521 12.799 5.518 C 12.799 5.514 12.799 5.511 12.799 5.507 C 12.799 5.504 12.799 5.5 12.799 5.497 C 12.799 5.493 12.799 5.49 12.799 5.486 C 12.799 5.483 12.799 5.479 12.799 5.476 C 12.799 5.472 12.799 5.469 12.799 5.466 C 12.799 5.462 12.799 5.459 12.799 5.455 C 12.799 5.452 12.799 5.448 12.799 5.445 C 12.799 5.441 12.799 5.438 12.799 5.434 C 12.799 5.431 12.799 5.427 12.799 5.424 C 12.799 5.42 12.799 5.417 12.799 5.413 C 12.799 5.41 12.799 5.406 12.799 5.403 C 12.799 5.399 12.799 5.396 12.799 5.393 C 12.799 5.389 12.799 5.386 12.799 5.382 C 12.799 5.379 12.799 5.375 12.799 5.372 C 12.799 5.368 12.799 5.365 12.799 5.361 C 12.799 5.358 12.799 5.354 12.799 5.351 C 12.799 5.347 12.799 5.344 12.799 5.341 C 12.799 5.337 12.799 5.334 12.799 5.33 C 12.799 5.327 12.799 5.323 12.799 5.32 C 12.799 5.316 12.799 5.313 12.799 5.309 C 12.799 5.306 12.799 5.303 12.799 5.299 C 12.799 5.296 12.799 5.292 12.799 5.289 C 12.799 5.285 12.799 5.282 12.799 5.278 C 12.799 5.275 12.799 5.272 12.799 5.268 C 12.799 5.265 12.799 5.261 12.799 5.258 C 12.799 5.254 12.799 5.251 12.799 5.248 C 12.799 5.244 12.799 5.241 12.799 5.237 C 12.799 5.234 12.799 5.23 12.799 5.227 C 12.799 5.224 12.799 5.22 12.799 5.217 C 12.799 5.213 12.799 5.21 12.799 5.206 C 12.799 5.203 12.799 5.2 12.799 5.196 C 12.799 5.193 12.799 5.189 12.799 5.186 C 12.799 5.183 12.799 5.179 12.799 5.176 C 12.799 5.172 12.799 5.169 12.799 5.165 C 12.799 5.162 12.799 5.159 12.799 5.155 C 12.799 5.152 12.799 5.148 12.799 5.145 C 12.799 5.142 12.799 5.138 12.799 5.135 C 12.799 5.132 12.799 5.128 12.799 5.125 C 12.799 5.121 12.799 5.118 12.799 5.115 C 12.799 5.111 12.799 5.108 12.799 5.104 C 12.799 5.101 12.799 5.098 12.799 5.094 C 12.799 5.091 12.799 5.088 12.799 5.084 C 12.799 5.081 12.799 5.077 12.799 5.074 C 12.799 5.071 12.799 5.067 12.799 5.064 C 12.799 5.061 12.799 5.057 12.799 5.054 C 12.799 5.051 12.799 5.047 12.799 5.044 C 12.799 5.041 12.799 5.037 12.799 5.034 C 12.799 5.031 12.799 5.027 12.799 5.024 C 12.799 5.021 12.799 5.017 12.799 5.014 C 12.799 5.011 12.799 5.007 12.799 5.004 C 12.799 5.001 12.799 4.997 12.799 4.994 C 12.799 4.991 12.799 4.987 12.799 4.984 C 12.799 4.981 12.799 4.977 12.799 4.974 C 12.799 4.971 12.799 4.967 12.799 4.964 C 12.799 4.961 12.799 4.957 12.799 4.954 C 12.799 4.951 12.799 4.948 12.799 4.944 C 12.799 4.941 12.799 4.938 12.799 4.934 C 12.799 4.931 12.799 4.928 12.799 4.925 C 12.799 4.921 12.799 4.918 12.799 4.915 C 12.799 4.911 12.799 4.908 12.799 4.905 C 12.799 4.902 12.799 4.898 12.799 4.895 C 12.799 4.892 12.799 4.889 12.799 4.885 C 12.799 4.882 12.799 4.879 12.799 4.876 C 12.799 4.872 12.799 4.869 12.799 4.866 C 12.799 4.863 12.799 4.859 12.799 4.856 C 12.799 4.853 12.799 4.85 12.799 4.847 C 12.799 4.843 12.799 4.84 12.799 4.837 C 12.799 4.834 12.799 4.83 12.799 4.827 C 12.799 4.824 12.799 4.821 12.799 4.818 C 12.799 4.814 12.799 4.811 12.799 4.808 C 12.799 4.805 12.799 4.802 12.799 4.798 C 12.799 4.795 12.799 4.792 12.799 4.789 C 12.799 4.786 12.799 4.782 12.799 4.779 C 12.799 4.776 12.799 4.773 12.799 4.77 C 12.799 4.767 12.799 4.763 12.799 4.76 C 12.799 4.757 12.799 4.754 12.799 4.751 C 12.799 4.748 12.799 4.745 12.799 4.741 C 12.799 4.738 12.799 4.735 12.799 4.732 C 12.799 4.729 12.799 4.726 12.799 4.723 C 12.799 4.719 12.799 4.716 12.799 4.713 C 12.799 4.71 12.799 4.707 12.799 4.704 C 12.799 4.701 12.799 4.698 12.799 4.695 C 12.799 4.691 12.799 4.688 12.799 4.685 C 12.799 4.682 12.799 4.679 12.799 4.676 C 12.799 4.673 12.799 4.67 12.799 4.667 C 12.799 4.664 12.799 4.661 12.799 4.658 C 12.799 4.654 12.799 4.651 12.799 4.648 C 12.799 4.645 12.799 4.642 12.799 4.639 C 12.799 4.636 12.799 4.633 12.799 4.63 C 12.799 4.627 12.799 4.624 12.799 4.621 C 12.799 4.618 12.799 4.615 12.799 4.612 C 12.799 4.609 12.799 4.606 12.799 4.603 C 12.799 4.6 12.799 4.597 12.799 4.594 C 12.799 4.591 12.799 4.588 12.799 4.585 C 12.799 4.582 12.799 4.579 12.799 4.576 C 12.799 4.573 12.799 4.57 12.799 4.567 C 12.799 4.564 12.799 4.561 12.799 4.558 C 12.799 4.555 12.799 4.552 12.799 4.549 C 12.799 4.546 12.799 4.543 12.799 4.54 C 12.799 4.537 12.799 4.534 12.799 4.531 C 12.799 4.529 12.799 4.526 12.799 4.523 C 12.799 4.52 12.799 4.517 12.799 4.514 C 12.799 4.511 12.799 4.508 12.799 4.505 C 12.799 4.502 12.799 4.499 12.799 4.496 C 12.799 4.494 12.799 4.491 12.799 4.488 C 12.799 4.485 12.799 4.482 12.799 4.479 C 12.799 4.476 12.799 4.473 12.799 4.471 C 12.799 4.468 12.799 4.465 12.799 4.462 C 12.799 4.459 12.799 4.456 12.799 4.453 C 12.799 4.451 12.799 4.448 12.799 4.445 C 12.799 4.442 12.799 4.439 12.799 4.437 C 12.799 4.434 12.799 4.431 12.799 4.428 C 12.799 4.425 12.799 4.422 12.799 4.42 C 12.799 4.417 12.799 4.414 12.799 4.411 C 12.799 4.409 12.799 4.406 12.799 4.403 C 12.799 4.4 12.799 4.397 12.799 4.395 C 12.799 4.392 12.799 4.389 12.799 4.386 C 12.799 4.384 12.799 4.381 12.799 4.378 C 12.799 4.375 12.799 4.373 12.799 4.37 C 12.799 4.367 12.799 4.365 12.799 4.362 C 12.799 4.359 12.799 4.356 12.799 4.354 C 12.799 4.351 12.799 4.348 12.799 4.346 C 12.799 4.343 12.799 4.34 12.799 4.338 C 12.799 4.335 12.799 4.332 12.799 4.33 C 12.799 4.327 12.799 4.324 12.799 4.322 C 12.799 4.319 12.799 4.316 12.799 4.314 C 12.799 4.311 12.799 4.308 12.799 4.306 C 12.799 4.303 12.799 4.301 12.799 4.298 C 12.799 4.295 12.799 4.293 12.799 4.29 C 12.799 4.288 12.799 4.285 12.799 4.282 C 12.799 4.28 12.799 4.277 12.799 4.275 C 12.799 4.272 12.799 4.269 12.799 4.267 C 12.799 4.264 12.799 4.262 12.799 4.259 C 12.799 4.257 12.799 4.254 12.799 4.252 C 12.799 4.249 12.799 4.247 12.799 4.244 C 12.799 4.242 12.799 4.239 12.799 4.236 C 12.799 4.234 12.799 4.231 12.799 4.229 C 12.799 4.226 12.799 4.224 12.799 4.222 C 12.799 4.219 12.799 4.217 12.799 4.214 C 12.799 4.212 12.799 4.209 12.799 4.207 C 12.799 4.204 12.799 4.202 12.799 4.199 C 12.799 4.197 12.799 4.195 12.799 4.192 C 12.799 4.19 12.799 4.187 12.799 4.185 C 12.799 4.182 12.799 4.18 12.799 4.178 C 12.799 4.175 12.799 4.173 12.799 4.17 C 12.799 4.168 12.799 4.166 12.799 4.163 C 12.799 4.161 12.799 4.159 12.799 4.156 C 12.799 4.154 12.799 4.152 12.799 4.149 C 12.799 4.147 12.799 4.145 12.799 4.142 C 12.799 4.14 12.799 4.138 12.799 4.135 C 12.799 4.133 12.799 4.131 12.799 4.128 C 12.799 4.126 12.799 4.124 12.799 4.121 C 12.799 4.119 12.799 4.117 12.799 4.115 C 12.799 4.112 12.799 4.11 12.799 4.108 C 12.799 4.106 12.799 4.103 12.799 4.101 C 12.799 4.099 12.799 4.097 12.799 4.094 C 12.799 4.092 12.799 4.09 12.799 4.088 C 12.799 4.086 12.799 4.083 12.799 4.081 C 12.799 4.079 12.799 4.077 12.799 4.075 C 12.799 4.073 12.799 4.07 12.799 4.068 C 12.799 4.066 12.799 4.064 12.799 4.062 C 12.799 4.06 12.799 4.058 12.799 4.055 C 12.799 4.053 12.799 4.051 12.799 4.049 C 12.799 4.047 12.799 4.045 12.799 4.043 C 12.799 4.041 12.799 4.039 12.799 4.036 C 12.799 4.034 12.799 4.032 12.799 4.03 C 12.799 4.028 12.799 4.026 12.799 4.024 C 12.799 4.022 12.799 4.02 12.799 4.018 C 12.799 4.016 12.799 4.014 12.799 4.012 C 12.799 4.01 12.799 4.008 12.799 4.006 C 12.799 4.004 12.799 4.002 12.799 4 C 12.799 3.998 12.799 3.996 12.799 3.994 C 12.799 3.992 12.799 3.99 12.799 3.988 C 12.799 3.986 12.799 3.984 12.799 3.982 C 12.799 3.98 12.799 3.979 12.799 3.977 C 12.799 3.975 12.799 3.973 12.799 3.971 C 12.799 3.969 12.799 3.967 12.799 3.965 C 12.799 3.963 12.799 3.962 12.799 3.96 C 12.799 3.958 12.799 3.956 12.799 3.954 C 12.799 3.952 12.799 3.95 12.799 3.949 C 12.799 3.947 12.799 3.945 12.799 3.943 C 12.799 3.941 12.799 3.94 12.799 3.938 C 12.799 3.936 12.799 3.934 12.799 3.932 C 12.799 3.931 12.799 3.929 12.799 3.927 C 12.799 3.925 12.799 3.924 12.799 3.922 C 12.799 3.92 12.799 3.918 12.799 3.917 C 12.799 3.915 12.799 3.913 12.799 3.912 C 12.799 3.91 12.799 3.908 12.799 3.907 C 12.799 3.905 12.799 3.903 12.799 3.902 C 12.799 3.9 12.799 3.898 12.799 3.897 C 12.799 3.895 12.799 3.893 12.799 3.892 C 12.799 3.89 12.799 3.888 12.799 3.887 C 12.799 3.885 12.799 3.884 12.799 3.882 C 12.799 3.88 12.799 3.879 12.799 3.877 C 12.799 3.876 12.799 3.874 12.799 3.873 C 12.799 3.871 12.799 3.87 12.799 3.868 C 12.799 3.866 12.799 3.865 12.799 3.863 C 12.799 3.862 12.799 3.86 12.799 3.859 C 12.799 3.857 12.799 3.856 12.799 3.854 C 12.799 3.853 12.799 3.852 12.799 3.85 C 12.799 3.849 12.799 3.847 12.799 3.846 C 12.799 3.844 12.799 3.843 12.799 3.841 C 12.799 3.84 12.799 3.839 12.799 3.837 C 12.799 3.836 12.799 3.835 12.799 3.833 C 12.799 3.832 12.799 3.83 12.799 3.829 C 12.799 3.828 12.799 3.826 12.799 3.825 C 12.799 3.824 12.799 3.822 12.799 3.821 C 12.799 3.82 12.799 3.818 12.799 3.817 C 12.799 3.816 12.799 3.815 12.799 3.813 C 12.799 3.812 12.799 3.811 12.799 3.809 C 12.799 3.808 12.799 3.807 12.799 3.806 C 12.799 3.804 12.799 3.803 12.799 3.802 C 12.799 3.801 12.799 3.8 12.799 3.798 C 12.799 3.797 12.799 3.796 12.799 3.795 C 12.799 3.794 12.799 3.793 12.799 3.791 C 12.799 3.79 12.799 3.789 12.799 3.788 C 12.799 3.787 12.799 3.786 12.799 3.785 C 12.799 3.784 12.799 3.782 12.799 3.781 C 12.799 3.78 12.799 3.779 12.799 3.778 C 12.799 3.777 12.799 3.776 12.799 3.775 C 12.799 3.774 12.799 3.773 12.799 3.772 C 12.799 3.771 12.799 3.77 12.799 3.769 C 12.799 3.768 12.799 3.767 12.799 3.766 C 12.799 3.765 12.799 3.764 12.799 3.763 C 12.799 3.762 12.799 3.761 12.799 3.76 C 12.799 3.759 12.799 3.758 12.799 3.757 C 12.799 3.756 12.799 3.755 12.799 3.755 C 12.799 3.754 12.799 3.753 12.799 3.752 L 10.399 3.752 Z M 9.997 0.07 C 9.619 0.07 9.06 0.147 8.577 0.54 C 8.048 0.97 7.822 1.601 7.822 2.271 L 10.222 2.271 C 10.222 2.197 10.234 2.197 10.216 2.24 C 10.195 2.289 10.154 2.351 10.091 2.402 C 10.033 2.449 9.983 2.466 9.968 2.47 C 9.955 2.474 9.963 2.47 9.997 2.47 L 9.997 0.07 Z M 7.822 2.271 L 7.822 6.926 L 10.222 6.926 L 10.222 2.271 L 7.822 2.271 Z M 7.399 -1.2 C 6.881 -1.2 6.323 -1.045 5.883 -0.637 C 5.43 -0.217 5.229 0.353 5.229 0.929 L 7.629 0.929 C 7.629 0.916 7.631 0.938 7.613 0.982 C 7.595 1.028 7.562 1.079 7.515 1.123 C 7.416 1.214 7.343 1.2 7.399 1.2 L 7.399 -1.2 Z M 5.229 0.936 L 5.261 6.485 L 7.661 6.471 L 7.629 0.922 L 5.229 0.936 Z M 6.461 5.278 L 5.814 5.278 L 5.814 7.678 L 6.461 7.678 L 6.461 5.278 Z M 7.014 6.468 L 6.975 1.906 L 4.575 1.927 L 4.614 6.488 L 7.014 6.468 Z M 6.972 1.842 C 6.94 1.321 6.747 0.784 6.306 0.383 C 5.871 -0.013 5.33 -0.152 4.836 -0.152 L 4.836 2.248 C 4.894 2.248 4.805 2.261 4.692 2.159 C 4.639 2.111 4.607 2.059 4.589 2.018 C 4.573 1.981 4.575 1.966 4.577 1.991 L 6.972 1.842 Z M 4.836 -0.152 C 3.614 -0.152 2.636 0.836 2.636 2.048 L 5.036 2.048 C 5.036 2.155 4.945 2.248 4.836 2.248 L 4.836 -0.152 Z M 2.636 2.048 L 2.636 6.048 L 5.036 6.048 L 5.036 2.048 L 2.636 2.048 Z M 2.636 6.048 L 2.636 11.048 L 5.036 11.048 L 5.036 6.048 L 2.636 6.048 Z M 9.505 0.929 C 9.505 -0.252 8.613 -1.2 7.399 -1.2 L 7.399 1.2 C 7.36 1.2 7.27 1.18 7.191 1.099 C 7.113 1.02 7.105 0.942 7.105 0.929 L 9.505 0.929 Z M 12.09 2.271 C 12.09 1.637 11.896 1.019 11.405 0.579 C 10.94 0.163 10.387 0.07 9.997 0.07 L 9.997 2.47 C 10.037 2.47 9.931 2.481 9.805 2.368 C 9.74 2.31 9.705 2.248 9.69 2.21 C 9.678 2.177 9.69 2.189 9.69 2.271 L 12.09 2.271 Z M 14.885 7.945 C 14.885 7.945 14.885 7.943 14.884 7.94 C 14.884 7.937 14.884 7.932 14.884 7.926 C 14.884 7.915 14.884 7.9 14.884 7.882 C 14.884 7.845 14.884 7.797 14.883 7.739 C 14.883 7.622 14.883 7.466 14.883 7.284 C 14.883 6.921 14.883 6.456 14.883 5.99 C 14.884 5.059 14.885 4.122 14.885 4.001 L 12.485 4.001 C 12.485 4.225 12.48 7.745 12.485 7.993 L 14.885 7.945 Z M 14.885 4.001 C 14.885 3.245 14.519 2.672 14.045 2.318 C 13.615 1.997 13.124 1.87 12.752 1.832 L 12.511 4.22 C 12.54 4.223 12.571 4.23 12.596 4.239 C 12.622 4.247 12.624 4.252 12.61 4.242 C 12.593 4.229 12.556 4.196 12.525 4.137 C 12.491 4.074 12.485 4.02 12.485 4.001 L 14.885 4.001 Z M 9.022 5.726 L 8.305 5.726 L 8.305 8.126 L 9.022 8.126 L 9.022 5.726 Z M 8.305 6.926 C 9.505 6.926 9.505 6.926 9.505 6.926 C 9.505 6.926 9.505 6.926 9.505 6.926 C 9.505 6.926 9.505 6.926 9.505 6.926 C 9.505 6.926 9.505 6.925 9.505 6.925 C 9.505 6.925 9.505 6.925 9.505 6.925 C 9.505 6.924 9.505 6.924 9.505 6.924 C 9.505 6.924 9.505 6.923 9.505 6.923 C 9.505 6.923 9.505 6.922 9.505 6.922 C 9.505 6.922 9.505 6.921 9.505 6.921 C 9.505 6.92 9.505 6.92 9.505 6.92 C 9.505 6.919 9.505 6.919 9.505 6.918 C 9.505 6.918 9.505 6.917 9.505 6.917 C 9.505 6.916 9.505 6.916 9.505 6.915 C 9.505 6.915 9.505 6.914 9.505 6.913 C 9.505 6.913 9.505 6.912 9.505 6.911 C 9.505 6.911 9.505 6.91 9.505 6.909 C 9.505 6.909 9.505 6.908 9.505 6.907 C 9.505 6.907 9.505 6.906 9.505 6.905 C 9.505 6.904 9.505 6.903 9.505 6.903 C 9.505 6.902 9.505 6.901 9.505 6.9 C 9.505 6.899 9.505 6.898 9.505 6.897 C 9.505 6.897 9.505 6.896 9.505 6.895 C 9.505 6.894 9.505 6.893 9.505 6.892 C 9.505 6.891 9.505 6.89 9.505 6.889 C 9.505 6.888 9.505 6.887 9.505 6.886 C 9.505 6.885 9.505 6.884 9.505 6.882 C 9.505 6.881 9.505 6.88 9.505 6.879 C 9.505 6.878 9.505 6.877 9.505 6.876 C 9.505 6.874 9.505 6.873 9.505 6.872 C 9.505 6.871 9.505 6.87 9.505 6.868 C 9.505 6.867 9.505 6.866 9.505 6.864 C 9.505 6.863 9.505 6.862 9.505 6.86 C 9.505 6.859 9.505 6.858 9.505 6.856 C 9.505 6.855 9.505 6.854 9.505 6.852 C 9.505 6.851 9.505 6.849 9.505 6.848 C 9.505 6.846 9.505 6.845 9.505 6.843 C 9.505 6.842 9.505 6.84 9.505 6.839 C 9.505 6.837 9.505 6.836 9.505 6.834 C 9.505 6.833 9.505 6.831 9.505 6.829 C 9.505 6.828 9.505 6.826 9.505 6.825 C 9.505 6.823 9.505 6.821 9.505 6.819 C 9.505 6.818 9.505 6.816 9.505 6.814 C 9.505 6.813 9.505 6.811 9.505 6.809 C 9.505 6.807 9.505 6.806 9.505 6.804 C 9.505 6.802 9.505 6.8 9.505 6.798 C 9.505 6.797 9.505 6.795 9.505 6.793 C 9.505 6.791 9.505 6.789 9.505 6.787 C 9.505 6.785 9.505 6.783 9.505 6.781 C 9.505 6.779 9.505 6.777 9.505 6.775 C 9.505 6.773 9.505 6.771 9.505 6.769 C 9.505 6.767 9.505 6.765 9.505 6.763 C 9.505 6.761 9.505 6.759 9.505 6.757 C 9.505 6.755 9.505 6.753 9.505 6.751 C 9.505 6.749 9.505 6.746 9.505 6.744 C 9.505 6.742 9.505 6.74 9.505 6.738 C 9.505 6.736 9.505 6.733 9.505 6.731 C 9.505 6.729 9.505 6.727 9.505 6.724 C 9.505 6.722 9.505 6.72 9.505 6.718 C 9.505 6.715 9.505 6.713 9.505 6.711 C 9.505 6.708 9.505 6.706 9.505 6.704 C 9.505 6.701 9.505 6.699 9.505 6.696 C 9.505 6.694 9.505 6.692 9.505 6.689 C 9.505 6.687 9.505 6.684 9.505 6.682 C 9.505 6.679 9.505 6.677 9.505 6.674 C 9.505 6.672 9.505 6.669 9.505 6.667 C 9.505 6.664 9.505 6.662 9.505 6.659 C 9.505 6.656 9.505 6.654 9.505 6.651 C 9.505 6.649 9.505 6.646 9.505 6.643 C 9.505 6.641 9.505 6.638 9.505 6.635 C 9.505 6.633 9.505 6.63 9.505 6.627 C 9.505 6.625 9.505 6.622 9.505 6.619 C 9.505 6.616 9.505 6.614 9.505 6.611 C 9.505 6.608 9.505 6.605 9.505 6.603 C 9.505 6.6 9.505 6.597 9.505 6.594 C 9.505 6.591 9.505 6.588 9.505 6.585 C 9.505 6.583 9.505 6.58 9.505 6.577 C 9.505 6.574 9.505 6.571 9.505 6.568 C 9.505 6.565 9.505 6.562 9.505 6.559 C 9.505 6.556 9.505 6.553 9.505 6.55 C 9.505 6.547 9.505 6.544 9.505 6.541 C 9.505 6.538 9.505 6.535 9.505 6.532 C 9.505 6.529 9.505 6.526 9.505 6.523 C 9.505 6.52 9.505 6.517 9.505 6.514 C 9.505 6.511 9.505 6.507 9.505 6.504 C 9.505 6.501 9.505 6.498 9.505 6.495 C 9.505 6.492 9.505 6.488 9.505 6.485 C 9.505 6.482 9.505 6.479 9.505 6.476 C 9.505 6.472 9.505 6.469 9.505 6.466 C 9.505 6.463 9.505 6.459 9.505 6.456 C 9.505 6.453 9.505 6.449 9.505 6.446 C 9.505 6.443 9.505 6.439 9.505 6.436 C 9.505 6.433 9.505 6.429 9.505 6.426 C 9.505 6.423 9.505 6.419 9.505 6.416 C 9.505 6.412 9.505 6.409 9.505 6.405 C 9.505 6.402 9.505 6.399 9.505 6.395 C 9.505 6.392 9.505 6.388 9.505 6.385 C 9.505 6.381 9.505 6.378 9.505 6.374 C 9.505 6.371 9.505 6.367 9.505 6.364 C 9.505 6.36 9.505 6.356 9.505 6.353 C 9.505 6.349 9.505 6.346 9.505 6.342 C 9.505 6.338 9.505 6.335 9.505 6.331 C 9.505 6.328 9.505 6.324 9.505 6.32 C 9.505 6.317 9.505 6.313 9.505 6.309 C 9.505 6.305 9.505 6.302 9.505 6.298 C 9.505 6.294 9.505 6.291 9.505 6.287 C 9.505 6.283 9.505 6.279 9.505 6.276 C 9.505 6.272 9.505 6.268 9.505 6.264 C 9.505 6.26 9.505 6.257 9.505 6.253 C 9.505 6.249 9.505 6.245 9.505 6.241 C 9.505 6.238 9.505 6.234 9.505 6.23 C 9.505 6.226 9.505 6.222 9.505 6.218 C 9.505 6.214 9.505 6.21 9.505 6.206 C 9.505 6.202 9.505 6.199 9.505 6.195 C 9.505 6.191 9.505 6.187 9.505 6.183 C 9.505 6.179 9.505 6.175 9.505 6.171 C 9.505 6.167 9.505 6.163 9.505 6.159 C 9.505 6.155 9.505 6.151 9.505 6.147 C 9.505 6.143 9.505 6.138 9.505 6.134 C 9.505 6.13 9.505 6.126 9.505 6.122 C 9.505 6.118 9.505 6.114 9.505 6.11 C 9.505 6.106 9.505 6.102 9.505 6.097 C 9.505 6.093 9.505 6.089 9.505 6.085 C 9.505 6.081 9.505 6.077 9.505 6.072 C 9.505 6.068 9.505 6.064 9.505 6.06 C 9.505 6.056 9.505 6.051 9.505 6.047 C 9.505 6.043 9.505 6.039 9.505 6.034 C 9.505 6.03 9.505 6.026 9.505 6.022 C 9.505 6.017 9.505 6.013 9.505 6.009 C 9.505 6.004 9.505 6 9.505 5.996 C 9.505 5.991 9.505 5.987 9.505 5.983 C 9.505 5.978 9.505 5.974 9.505 5.97 C 9.505 5.965 9.505 5.961 9.505 5.956 C 9.505 5.952 9.505 5.948 9.505 5.943 C 9.505 5.939 9.505 5.934 9.505 5.93 C 9.505 5.925 9.505 5.921 9.505 5.917 C 9.505 5.912 9.505 5.908 9.505 5.903 C 9.505 5.899 9.505 5.894 9.505 5.89 C 9.505 5.885 9.505 5.881 9.505 5.876 C 9.505 5.872 9.505 5.867 9.505 5.862 C 9.505 5.858 9.505 5.853 9.505 5.849 C 9.505 5.844 9.505 5.84 9.505 5.835 C 9.505 5.83 9.505 5.826 9.505 5.821 C 9.505 5.817 9.505 5.812 9.505 5.807 C 9.505 5.803 9.505 5.798 9.505 5.793 C 9.505 5.789 9.505 5.784 9.505 5.78 C 9.505 5.775 9.505 5.77 9.505 5.765 C 9.505 5.761 9.505 5.756 9.505 5.751 C 9.505 5.747 9.505 5.742 9.505 5.737 C 9.505 5.733 9.505 5.728 9.505 5.723 C 9.505 5.718 9.505 5.714 9.505 5.709 C 9.505 5.704 9.505 5.699 9.505 5.694 C 9.505 5.69 9.505 5.685 9.505 5.68 C 9.505 5.675 9.505 5.67 9.505 5.666 C 9.505 5.661 9.505 5.656 9.505 5.651 C 9.505 5.646 9.505 5.641 9.505 5.637 C 9.505 5.632 9.505 5.627 9.505 5.622 C 9.505 5.617 9.505 5.612 9.505 5.607 C 9.505 5.602 9.505 5.598 9.505 5.593 C 9.505 5.588 9.505 5.583 9.505 5.578 C 9.505 5.573 9.505 5.568 9.505 5.563 C 9.505 5.558 9.505 5.553 9.505 5.548 C 9.505 5.543 9.505 5.538 9.505 5.533 C 9.505 5.528 9.505 5.523 9.505 5.518 C 9.505 5.513 9.505 5.508 9.505 5.503 C 9.505 5.498 9.505 5.493 9.505 5.488 C 9.505 5.483 9.505 5.478 9.505 5.473 C 9.505 5.468 9.505 5.463 9.505 5.458 C 9.505 5.453 9.505 5.448 9.505 5.443 C 9.505 5.438 9.505 5.433 9.505 5.428 C 9.505 5.423 9.505 5.417 9.505 5.412 C 9.505 5.407 9.505 5.402 9.505 5.397 C 9.505 5.392 9.505 5.387 9.505 5.382 C 9.505 5.376 9.505 5.371 9.505 5.366 C 9.505 5.361 9.505 5.356 9.505 5.351 C 9.505 5.346 9.505 5.34 9.505 5.335 C 9.505 5.33 9.505 5.325 9.505 5.32 C 9.505 5.314 9.505 5.309 9.505 5.304 C 9.505 5.299 9.505 5.294 9.505 5.288 C 9.505 5.283 9.505 5.278 9.505 5.273 C 9.505 5.267 9.505 5.262 9.505 5.257 C 9.505 5.252 9.505 5.246 9.505 5.241 C 9.505 5.236 9.505 5.231 9.505 5.225 C 9.505 5.22 9.505 5.215 9.505 5.21 C 9.505 5.204 9.505 5.199 9.505 5.194 C 9.505 5.188 9.505 5.183 9.505 5.178 C 9.505 5.172 9.505 5.167 9.505 5.162 C 9.505 5.156 9.505 5.151 9.505 5.146 C 9.505 5.14 9.505 5.135 9.505 5.13 C 9.505 5.124 9.505 5.119 9.505 5.114 C 9.505 5.108 9.505 5.103 9.505 5.097 C 9.505 5.092 9.505 5.087 9.505 5.081 C 9.505 5.076 9.505 5.071 9.505 5.065 C 9.505 5.06 9.505 5.054 9.505 5.049 C 9.505 5.043 9.505 5.038 9.505 5.033 C 9.505 5.027 9.505 5.022 9.505 5.016 C 9.505 5.011 9.505 5.005 9.505 5 C 9.505 4.995 9.505 4.989 9.505 4.984 C 9.505 4.978 9.505 4.973 9.505 4.967 C 9.505 4.962 9.505 4.956 9.505 4.951 C 9.505 4.945 9.505 4.94 9.505 4.934 C 9.505 4.929 9.505 4.923 9.505 4.918 C 9.505 4.912 9.505 4.907 9.505 4.901 C 9.505 4.896 9.505 4.89 9.505 4.885 C 9.505 4.879 9.505 4.874 9.505 4.868 C 9.505 4.863 9.505 4.857 9.505 4.852 C 9.505 4.846 9.505 4.841 9.505 4.835 C 9.505 4.83 9.505 4.824 9.505 4.818 C 9.505 4.813 9.505 4.807 9.505 4.802 C 9.505 4.796 9.505 4.791 9.505 4.785 C 9.505 4.779 9.505 4.774 9.505 4.768 C 9.505 4.763 9.505 4.757 9.505 4.752 C 9.505 4.746 9.505 4.74 9.505 4.735 C 9.505 4.729 9.505 4.724 9.505 4.718 C 9.505 4.712 9.505 4.707 9.505 4.701 C 9.505 4.695 9.505 4.69 9.505 4.684 C 9.505 4.679 9.505 4.673 9.505 4.667 C 9.505 4.662 9.505 4.656 9.505 4.65 C 9.505 4.645 9.505 4.639 9.505 4.634 C 9.505 4.628 9.505 4.622 9.505 4.617 C 9.505 4.611 9.505 4.605 9.505 4.6 C 9.505 4.594 9.505 4.588 9.505 4.583 C 9.505 4.577 9.505 4.571 9.505 4.566 C 9.505 4.56 9.505 4.554 9.505 4.549 C 9.505 4.543 9.505 4.537 9.505 4.532 C 9.505 4.526 9.505 4.52 9.505 4.515 C 9.505 4.509 9.505 4.503 9.505 4.497 C 9.505 4.492 9.505 4.486 9.505 4.48 C 9.505 4.475 9.505 4.469 9.505 4.463 C 9.505 4.458 9.505 4.452 9.505 4.446 C 9.505 4.44 9.505 4.435 9.505 4.429 C 9.505 4.423 9.505 4.418 9.505 4.412 C 9.505 4.406 9.505 4.4 9.505 4.395 C 9.505 4.389 9.505 4.383 9.505 4.377 C 9.505 4.372 9.505 4.366 9.505 4.36 C 9.505 4.355 9.505 4.349 9.505 4.343 C 9.505 4.337 9.505 4.332 9.505 4.326 C 9.505 4.32 9.505 4.314 9.505 4.309 C 9.505 4.303 9.505 4.297 9.505 4.291 C 9.505 4.286 9.505 4.28 9.505 4.274 C 9.505 4.268 9.505 4.263 9.505 4.257 C 9.505 4.251 9.505 4.245 9.505 4.24 C 9.505 4.234 9.505 4.228 9.505 4.222 C 9.505 4.216 9.505 4.211 9.505 4.205 C 9.505 4.199 9.505 4.193 9.505 4.188 C 9.505 4.182 9.505 4.176 9.505 4.17 C 9.505 4.165 9.505 4.159 9.505 4.153 C 9.505 4.147 9.505 4.141 9.505 4.136 C 9.505 4.13 9.505 4.124 9.505 4.118 C 9.505 4.113 9.505 4.107 9.505 4.101 C 9.505 4.095 9.505 4.089 9.505 4.084 C 9.505 4.078 9.505 4.072 9.505 4.066 C 9.505 4.06 9.505 4.055 9.505 4.049 C 9.505 4.043 9.505 4.037 9.505 4.032 C 9.505 4.026 9.505 4.02 9.505 4.014 C 9.505 4.008 9.505 4.003 9.505 3.997 C 9.505 3.991 9.505 3.985 9.505 3.979 C 9.505 3.974 9.505 3.968 9.505 3.962 C 9.505 3.956 9.505 3.951 9.505 3.945 C 9.505 3.939 9.505 3.933 9.505 3.927 C 9.505 3.922 9.505 3.916 9.505 3.91 C 9.505 3.904 9.505 3.898 9.505 3.893 C 9.505 3.887 9.505 3.881 9.505 3.875 C 9.505 3.869 9.505 3.864 9.505 3.858 C 9.505 3.852 9.505 3.846 9.505 3.841 C 9.505 3.835 9.505 3.829 9.505 3.823 C 9.505 3.817 9.505 3.812 9.505 3.806 C 9.505 3.8 9.505 3.794 9.505 3.788 C 9.505 3.783 9.505 3.777 9.505 3.771 C 9.505 3.765 9.505 3.76 9.505 3.754 C 9.505 3.748 9.505 3.742 9.505 3.736 C 9.505 3.731 9.505 3.725 9.505 3.719 C 9.505 3.713 9.505 3.708 9.505 3.702 C 9.505 3.696 9.505 3.69 9.505 3.684 C 9.505 3.679 9.505 3.673 9.505 3.667 C 9.505 3.661 9.505 3.656 9.505 3.65 C 9.505 3.644 9.505 3.638 9.505 3.632 C 9.505 3.627 9.505 3.621 9.505 3.615 C 9.505 3.609 9.505 3.604 9.505 3.598 C 9.505 3.592 9.505 3.586 9.505 3.581 C 9.505 3.575 9.505 3.569 9.505 3.563 C 9.505 3.558 9.505 3.552 9.505 3.546 C 9.505 3.54 9.505 3.535 9.505 3.529 C 9.505 3.523 9.505 3.517 9.505 3.512 C 9.505 3.506 9.505 3.5 9.505 3.494 C 9.505 3.489 9.505 3.483 9.505 3.477 C 9.505 3.472 9.505 3.466 9.505 3.46 C 9.505 3.454 9.505 3.449 9.505 3.443 C 9.505 3.437 9.505 3.431 9.505 3.426 C 9.505 3.42 9.505 3.414 9.505 3.409 C 9.505 3.403 9.505 3.397 9.505 3.391 C 9.505 3.386 9.505 3.38 9.505 3.374 C 9.505 3.369 9.505 3.363 9.505 3.357 C 9.505 3.352 9.505 3.346 9.505 3.34 C 9.505 3.334 9.505 3.329 9.505 3.323 C 9.505 3.317 9.505 3.312 9.505 3.306 C 9.505 3.3 9.505 3.295 9.505 3.289 C 9.505 3.283 9.505 3.278 9.505 3.272 C 9.505 3.266 9.505 3.261 9.505 3.255 C 9.505 3.249 9.505 3.244 9.505 3.238 C 9.505 3.232 9.505 3.227 9.505 3.221 C 9.505 3.215 9.505 3.21 9.505 3.204 C 9.505 3.199 9.505 3.193 9.505 3.187 C 9.505 3.182 9.505 3.176 9.505 3.17 C 9.505 3.165 9.505 3.159 9.505 3.154 C 9.505 3.148 9.505 3.142 9.505 3.137 C 9.505 3.131 9.505 3.126 9.505 3.12 C 9.505 3.114 9.505 3.109 9.505 3.103 C 9.505 3.098 9.505 3.092 9.505 3.086 C 9.505 3.081 9.505 3.075 9.505 3.07 C 9.505 3.064 9.505 3.058 9.505 3.053 C 9.505 3.047 9.505 3.042 9.505 3.036 C 9.505 3.031 9.505 3.025 9.505 3.02 C 9.505 3.014 9.505 3.008 9.505 3.003 C 9.505 2.997 9.505 2.992 9.505 2.986 C 9.505 2.981 9.505 2.975 9.505 2.97 C 9.505 2.964 9.505 2.959 9.505 2.953 C 9.505 2.948 9.505 2.942 9.505 2.937 C 9.505 2.931 9.505 2.926 9.505 2.92 C 9.505 2.915 9.505 2.909 9.505 2.904 C 9.505 2.898 9.505 2.893 9.505 2.887 C 9.505 2.882 9.505 2.876 9.505 2.871 C 9.505 2.865 9.505 2.86 9.505 2.855 C 9.505 2.849 9.505 2.844 9.505 2.838 C 9.505 2.833 9.505 2.827 9.505 2.822 C 9.505 2.817 9.505 2.811 9.505 2.806 C 9.505 2.8 9.505 2.795 9.505 2.789 C 9.505 2.784 9.505 2.779 9.505 2.773 C 9.505 2.768 9.505 2.763 9.505 2.757 C 9.505 2.752 9.505 2.746 9.505 2.741 C 9.505 2.736 9.505 2.73 9.505 2.725 C 9.505 2.72 9.505 2.714 9.505 2.709 C 9.505 2.704 9.505 2.698 9.505 2.693 C 9.505 2.688 9.505 2.682 9.505 2.677 C 9.505 2.672 9.505 2.666 9.505 2.661 C 9.505 2.656 9.505 2.65 9.505 2.645 C 9.505 2.64 9.505 2.634 9.505 2.629 C 9.505 2.624 9.505 2.619 9.505 2.613 C 9.505 2.608 9.505 2.603 9.505 2.598 C 9.505 2.592 9.505 2.587 9.505 2.582 C 9.505 2.577 9.505 2.571 9.505 2.566 C 9.505 2.561 9.505 2.556 9.505 2.551 C 9.505 2.545 9.505 2.54 9.505 2.535 C 9.505 2.53 9.505 2.525 9.505 2.519 C 9.505 2.514 9.505 2.509 9.505 2.504 C 9.505 2.499 9.505 2.493 9.505 2.488 C 9.505 2.483 9.505 2.478 9.505 2.473 C 9.505 2.468 9.505 2.463 9.505 2.458 C 9.505 2.452 9.505 2.447 9.505 2.442 C 9.505 2.437 9.505 2.432 9.505 2.427 C 9.505 2.422 9.505 2.417 9.505 2.412 C 9.505 2.407 9.505 2.401 9.505 2.396 C 9.505 2.391 9.505 2.386 9.505 2.381 C 9.505 2.376 9.505 2.371 9.505 2.366 C 9.505 2.361 9.505 2.356 9.505 2.351 C 9.505 2.346 9.505 2.341 9.505 2.336 C 9.505 2.331 9.505 2.326 9.505 2.321 C 9.505 2.316 9.505 2.311 9.505 2.306 C 9.505 2.301 9.505 2.296 9.505 2.291 C 9.505 2.286 9.505 2.281 9.505 2.277 C 9.505 2.272 9.505 2.267 9.505 2.262 C 9.505 2.257 9.505 2.252 9.505 2.247 C 9.505 2.242 9.505 2.237 9.505 2.232 C 9.505 2.228 9.505 2.223 9.505 2.218 C 9.505 2.213 9.505 2.208 9.505 2.203 C 9.505 2.198 9.505 2.194 9.505 2.189 C 9.505 2.184 9.505 2.179 9.505 2.174 C 9.505 2.17 9.505 2.165 9.505 2.16 C 9.505 2.155 9.505 2.15 9.505 2.146 C 9.505 2.141 9.505 2.136 9.505 2.131 C 9.505 2.127 9.505 2.122 9.505 2.117 C 9.505 2.112 9.505 2.108 9.505 2.103 C 9.505 2.098 9.505 2.094 9.505 2.089 C 9.505 2.084 9.505 2.08 9.505 2.075 C 9.505 2.07 9.505 2.066 9.505 2.061 C 9.505 2.056 9.505 2.052 9.505 2.047 C 9.505 2.042 9.505 2.038 9.505 2.033 C 9.505 2.028 9.505 2.024 9.505 2.019 C 9.505 2.015 9.505 2.01 9.505 2.006 C 9.505 2.001 9.505 1.996 9.505 1.992 C 9.505 1.987 9.505 1.983 9.505 1.978 C 9.505 1.974 9.505 1.969 9.505 1.965 C 9.505 1.96 9.505 1.956 9.505 1.951 C 9.505 1.947 9.505 1.942 9.505 1.938 C 9.505 1.933 9.505 1.929 9.505 1.924 C 9.505 1.92 9.505 1.916 9.505 1.911 C 9.505 1.907 9.505 1.902 9.505 1.898 C 9.505 1.894 9.505 1.889 9.505 1.885 C 9.505 1.88 9.505 1.876 9.505 1.872 C 9.505 1.867 9.505 1.863 9.505 1.859 C 9.505 1.854 9.505 1.85 9.505 1.846 C 9.505 1.841 9.505 1.837 9.505 1.833 C 9.505 1.828 9.505 1.824 9.505 1.82 C 9.505 1.816 9.505 1.811 9.505 1.807 C 9.505 1.803 9.505 1.799 9.505 1.794 C 9.505 1.79 9.505 1.786 9.505 1.782 C 9.505 1.778 9.505 1.773 9.505 1.769 C 9.505 1.765 9.505 1.761 9.505 1.757 C 9.505 1.753 9.505 1.749 9.505 1.744 C 9.505 1.74 9.505 1.736 9.505 1.732 C 9.505 1.728 9.505 1.724 9.505 1.72 C 9.505 1.716 9.505 1.712 9.505 1.708 C 9.505 1.704 9.505 1.7 9.505 1.696 C 9.505 1.691 9.505 1.687 9.505 1.683 C 9.505 1.679 9.505 1.675 9.505 1.671 C 9.505 1.668 9.505 1.664 9.505 1.66 C 9.505 1.656 9.505 1.652 9.505 1.648 C 9.505 1.644 9.505 1.64 9.505 1.636 C 9.505 1.632 9.505 1.628 9.505 1.624 C 9.505 1.62 9.505 1.617 9.505 1.613 C 9.505 1.609 9.505 1.605 9.505 1.601 C 9.505 1.597 9.505 1.594 9.505 1.59 C 9.505 1.586 9.505 1.582 9.505 1.578 C 9.505 1.575 9.505 1.571 9.505 1.567 C 9.505 1.563 9.505 1.56 9.505 1.556 C 9.505 1.552 9.505 1.549 9.505 1.545 C 9.505 1.541 9.505 1.538 9.505 1.534 C 9.505 1.53 9.505 1.527 9.505 1.523 C 9.505 1.519 9.505 1.516 9.505 1.512 C 9.505 1.508 9.505 1.505 9.505 1.501 C 9.505 1.498 9.505 1.494 9.505 1.491 C 9.505 1.487 9.505 1.483 9.505 1.48 C 9.505 1.476 9.505 1.473 9.505 1.469 C 9.505 1.466 9.505 1.462 9.505 1.459 C 9.505 1.455 9.505 1.452 9.505 1.449 C 9.505 1.445 9.505 1.442 9.505 1.438 C 9.505 1.435 9.505 1.431 9.505 1.428 C 9.505 1.425 9.505 1.421 9.505 1.418 C 9.505 1.415 9.505 1.411 9.505 1.408 C 9.505 1.405 9.505 1.401 9.505 1.398 C 9.505 1.395 9.505 1.391 9.505 1.388 C 9.505 1.385 9.505 1.382 9.505 1.378 C 9.505 1.375 9.505 1.372 9.505 1.369 C 9.505 1.366 9.505 1.362 9.505 1.359 C 9.505 1.356 9.505 1.353 9.505 1.35 C 9.505 1.346 9.505 1.343 9.505 1.34 C 9.505 1.337 9.505 1.334 9.505 1.331 C 9.505 1.328 9.505 1.325 9.505 1.322 C 9.505 1.319 9.505 1.316 9.505 1.313 C 9.505 1.31 9.505 1.307 9.505 1.304 C 9.505 1.301 9.505 1.298 9.505 1.295 C 9.505 1.292 9.505 1.289 9.505 1.286 C 9.505 1.283 9.505 1.28 9.505 1.277 C 9.505 1.274 9.505 1.271 9.505 1.268 C 9.505 1.265 9.505 1.263 9.505 1.26 C 9.505 1.257 9.505 1.254 9.505 1.251 C 9.505 1.249 9.505 1.246 9.505 1.243 C 9.505 1.24 9.505 1.237 9.505 1.235 C 9.505 1.232 9.505 1.229 9.505 1.226 C 9.505 1.224 9.505 1.221 9.505 1.218 C 9.505 1.216 9.505 1.213 9.505 1.21 C 9.505 1.208 9.505 1.205 9.505 1.203 C 9.505 1.2 9.505 1.197 9.505 1.195 C 9.505 1.192 9.505 1.19 9.505 1.187 C 9.505 1.185 9.505 1.182 9.505 1.179 C 9.505 1.177 9.505 1.174 9.505 1.172 C 9.505 1.17 9.505 1.167 9.505 1.165 C 9.505 1.162 9.505 1.16 9.505 1.157 C 9.505 1.155 9.505 1.153 9.505 1.15 C 9.505 1.148 9.505 1.145 9.505 1.143 C 9.505 1.141 9.505 1.138 9.505 1.136 C 9.505 1.134 9.505 1.132 9.505 1.129 C 9.505 1.127 9.505 1.125 9.505 1.123 C 9.505 1.12 9.505 1.118 9.505 1.116 C 9.505 1.114 9.505 1.111 9.505 1.109 C 9.505 1.107 9.505 1.105 9.505 1.103 C 9.505 1.101 9.505 1.099 9.505 1.097 C 9.505 1.094 9.505 1.092 9.505 1.09 C 9.505 1.088 9.505 1.086 9.505 1.084 C 9.505 1.082 9.505 1.08 9.505 1.078 C 9.505 1.076 9.505 1.074 9.505 1.072 C 9.505 1.07 9.505 1.068 9.505 1.066 C 9.505 1.065 9.505 1.063 9.505 1.061 C 9.505 1.059 9.505 1.057 9.505 1.055 C 9.505 1.053 9.505 1.052 9.505 1.05 C 9.505 1.048 9.505 1.046 9.505 1.044 C 9.505 1.043 9.505 1.041 9.505 1.039 C 9.505 1.037 9.505 1.036 9.505 1.034 C 9.505 1.032 9.505 1.031 9.505 1.029 C 9.505 1.027 9.505 1.026 9.505 1.024 C 9.505 1.022 9.505 1.021 9.505 1.019 C 9.505 1.018 9.505 1.016 9.505 1.015 C 9.505 1.013 9.505 1.012 9.505 1.01 C 9.505 1.009 9.505 1.007 9.505 1.006 C 9.505 1.004 9.505 1.003 9.505 1.001 C 9.505 1 9.505 0.998 9.505 0.997 C 9.505 0.996 9.505 0.994 9.505 0.993 C 9.505 0.992 9.505 0.99 9.505 0.989 C 9.505 0.988 9.505 0.986 9.505 0.985 C 9.505 0.984 9.505 0.983 9.505 0.981 C 9.505 0.98 9.505 0.979 9.505 0.978 C 9.505 0.977 9.505 0.975 9.505 0.974 C 9.505 0.973 9.505 0.972 9.505 0.971 C 9.505 0.97 9.505 0.969 9.505 0.968 C 9.505 0.967 9.505 0.965 9.505 0.964 C 9.505 0.963 9.505 0.962 9.505 0.961 C 9.505 0.96 9.505 0.959 9.505 0.959 C 9.505 0.958 9.505 0.957 9.505 0.956 C 9.505 0.955 9.505 0.954 9.505 0.953 C 9.505 0.952 9.505 0.951 9.505 0.951 C 9.505 0.95 9.505 0.949 9.505 0.948 C 9.505 0.947 9.505 0.947 9.505 0.946 C 9.505 0.945 9.505 0.944 9.505 0.944 C 9.505 0.943 9.505 0.942 9.505 0.942 C 9.505 0.941 9.505 0.94 9.505 0.94 C 9.505 0.939 9.505 0.939 9.505 0.938 C 9.505 0.937 9.505 0.937 9.505 0.936 C 9.505 0.936 9.505 0.935 9.505 0.935 C 9.505 0.934 9.505 0.934 9.505 0.933 C 9.505 0.933 9.505 0.933 9.505 0.932 C 9.505 0.932 9.505 0.931 9.505 0.931 C 9.505 0.931 9.505 0.93 9.505 0.93 C 9.505 0.93 9.505 0.929 9.505 0.929 L 7.105 0.929 C 7.105 0.929 7.105 0.93 7.105 0.93 C 7.105 0.93 7.105 0.931 7.105 0.931 C 7.105 0.931 7.105 0.932 7.105 0.932 C 7.105 0.933 7.105 0.933 7.105 0.933 C 7.105 0.934 7.105 0.934 7.105 0.935 C 7.105 0.935 7.105 0.936 7.105 0.936 C 7.105 0.937 7.105 0.937 7.105 0.938 C 7.105 0.939 7.105 0.939 7.105 0.94 C 7.105 0.94 7.105 0.941 7.105 0.942 C 7.105 0.942 7.105 0.943 7.105 0.944 C 7.105 0.944 7.105 0.945 7.105 0.946 C 7.105 0.947 7.105 0.947 7.105 0.948 C 7.105 0.949 7.105 0.95 7.105 0.951 C 7.105 0.951 7.105 0.952 7.105 0.953 C 7.105 0.954 7.105 0.955 7.105 0.956 C 7.105 0.957 7.105 0.958 7.105 0.959 C 7.105 0.959 7.105 0.96 7.105 0.961 C 7.105 0.962 7.105 0.963 7.105 0.964 C 7.105 0.965 7.105 0.967 7.105 0.968 C 7.105 0.969 7.105 0.97 7.105 0.971 C 7.105 0.972 7.105 0.973 7.105 0.974 C 7.105 0.975 7.105 0.977 7.105 0.978 C 7.105 0.979 7.105 0.98 7.105 0.981 C 7.105 0.983 7.105 0.984 7.105 0.985 C 7.105 0.986 7.105 0.988 7.105 0.989 C 7.105 0.99 7.105 0.992 7.105 0.993 C 7.105 0.994 7.105 0.996 7.105 0.997 C 7.105 0.998 7.105 1 7.105 1.001 C 7.105 1.003 7.105 1.004 7.105 1.006 C 7.105 1.007 7.105 1.009 7.105 1.01 C 7.105 1.012 7.105 1.013 7.105 1.015 C 7.105 1.016 7.105 1.018 7.105 1.019 C 7.105 1.021 7.105 1.022 7.105 1.024 C 7.105 1.026 7.105 1.027 7.105 1.029 C 7.105 1.031 7.105 1.032 7.105 1.034 C 7.105 1.036 7.105 1.037 7.105 1.039 C 7.105 1.041 7.105 1.043 7.105 1.044 C 7.105 1.046 7.105 1.048 7.105 1.05 C 7.105 1.052 7.105 1.053 7.105 1.055 C 7.105 1.057 7.105 1.059 7.105 1.061 C 7.105 1.063 7.105 1.065 7.105 1.066 C 7.105 1.068 7.105 1.07 7.105 1.072 C 7.105 1.074 7.105 1.076 7.105 1.078 C 7.105 1.08 7.105 1.082 7.105 1.084 C 7.105 1.086 7.105 1.088 7.105 1.09 C 7.105 1.092 7.105 1.094 7.105 1.097 C 7.105 1.099 7.105 1.101 7.105 1.103 C 7.105 1.105 7.105 1.107 7.105 1.109 C 7.105 1.111 7.105 1.114 7.105 1.116 C 7.105 1.118 7.105 1.12 7.105 1.123 C 7.105 1.125 7.105 1.127 7.105 1.129 C 7.105 1.132 7.105 1.134 7.105 1.136 C 7.105 1.138 7.105 1.141 7.105 1.143 C 7.105 1.145 7.105 1.148 7.105 1.15 C 7.105 1.153 7.105 1.155 7.105 1.157 C 7.105 1.16 7.105 1.162 7.105 1.165 C 7.105 1.167 7.105 1.17 7.105 1.172 C 7.105 1.174 7.105 1.177 7.105 1.179 C 7.105 1.182 7.105 1.185 7.105 1.187 C 7.105 1.19 7.105 1.192 7.105 1.195 C 7.105 1.197 7.105 1.2 7.105 1.203 C 7.105 1.205 7.105 1.208 7.105 1.21 C 7.105 1.213 7.105 1.216 7.105 1.218 C 7.105 1.221 7.105 1.224 7.105 1.226 C 7.105 1.229 7.105 1.232 7.105 1.235 C 7.105 1.237 7.105 1.24 7.105 1.243 C 7.105 1.246 7.105 1.249 7.105 1.251 C 7.105 1.254 7.105 1.257 7.105 1.26 C 7.105 1.263 7.105 1.265 7.105 1.268 C 7.105 1.271 7.105 1.274 7.105 1.277 C 7.105 1.28 7.105 1.283 7.105 1.286 C 7.105 1.289 7.105 1.292 7.105 1.295 C 7.105 1.298 7.105 1.301 7.105 1.304 C 7.105 1.307 7.105 1.31 7.105 1.313 C 7.105 1.316 7.105 1.319 7.105 1.322 C 7.105 1.325 7.105 1.328 7.105 1.331 C 7.105 1.334 7.105 1.337 7.105 1.34 C 7.105 1.343 7.105 1.346 7.105 1.35 C 7.105 1.353 7.105 1.356 7.105 1.359 C 7.105 1.362 7.105 1.366 7.105 1.369 C 7.105 1.372 7.105 1.375 7.105 1.378 C 7.105 1.382 7.105 1.385 7.105 1.388 C 7.105 1.391 7.105 1.395 7.105 1.398 C 7.105 1.401 7.105 1.405 7.105 1.408 C 7.105 1.411 7.105 1.415 7.105 1.418 C 7.105 1.421 7.105 1.425 7.105 1.428 C 7.105 1.431 7.105 1.435 7.105 1.438 C 7.105 1.442 7.105 1.445 7.105 1.449 C 7.105 1.452 7.105 1.455 7.105 1.459 C 7.105 1.462 7.105 1.466 7.105 1.469 C 7.105 1.473 7.105 1.476 7.105 1.48 C 7.105 1.483 7.105 1.487 7.105 1.491 C 7.105 1.494 7.105 1.498 7.105 1.501 C 7.105 1.505 7.105 1.508 7.105 1.512 C 7.105 1.516 7.105 1.519 7.105 1.523 C 7.105 1.527 7.105 1.53 7.105 1.534 C 7.105 1.538 7.105 1.541 7.105 1.545 C 7.105 1.549 7.105 1.552 7.105 1.556 C 7.105 1.56 7.105 1.563 7.105 1.567 C 7.105 1.571 7.105 1.575 7.105 1.578 C 7.105 1.582 7.105 1.586 7.105 1.59 C 7.105 1.594 7.105 1.597 7.105 1.601 C 7.105 1.605 7.105 1.609 7.105 1.613 C 7.105 1.617 7.105 1.62 7.105 1.624 C 7.105 1.628 7.105 1.632 7.105 1.636 C 7.105 1.64 7.105 1.644 7.105 1.648 C 7.105 1.652 7.105 1.656 7.105 1.66 C 7.105 1.664 7.105 1.668 7.105 1.671 C 7.105 1.675 7.105 1.679 7.105 1.683 C 7.105 1.687 7.105 1.691 7.105 1.696 C 7.105 1.7 7.105 1.704 7.105 1.708 C 7.105 1.712 7.105 1.716 7.105 1.72 C 7.105 1.724 7.105 1.728 7.105 1.732 C 7.105 1.736 7.105 1.74 7.105 1.744 C 7.105 1.749 7.105 1.753 7.105 1.757 C 7.105 1.761 7.105 1.765 7.105 1.769 C 7.105 1.773 7.105 1.778 7.105 1.782 C 7.105 1.786 7.105 1.79 7.105 1.794 C 7.105 1.799 7.105 1.803 7.105 1.807 C 7.105 1.811 7.105 1.816 7.105 1.82 C 7.105 1.824 7.105 1.828 7.105 1.833 C 7.105 1.837 7.105 1.841 7.105 1.846 C 7.105 1.85 7.105 1.854 7.105 1.859 C 7.105 1.863 7.105 1.867 7.105 1.872 C 7.105 1.876 7.105 1.88 7.105 1.885 C 7.105 1.889 7.105 1.894 7.105 1.898 C 7.105 1.902 7.105 1.907 7.105 1.911 C 7.105 1.916 7.105 1.92 7.105 1.924 C 7.105 1.929 7.105 1.933 7.105 1.938 C 7.105 1.942 7.105 1.947 7.105 1.951 C 7.105 1.956 7.105 1.96 7.105 1.965 C 7.105 1.969 7.105 1.974 7.105 1.978 C 7.105 1.983 7.105 1.987 7.105 1.992 C 7.105 1.996 7.105 2.001 7.105 2.006 C 7.105 2.01 7.105 2.015 7.105 2.019 C 7.105 2.024 7.105 2.028 7.105 2.033 C 7.105 2.038 7.105 2.042 7.105 2.047 C 7.105 2.052 7.105 2.056 7.105 2.061 C 7.105 2.066 7.105 2.07 7.105 2.075 C 7.105 2.08 7.105 2.084 7.105 2.089 C 7.105 2.094 7.105 2.098 7.105 2.103 C 7.105 2.108 7.105 2.112 7.105 2.117 C 7.105 2.122 7.105 2.127 7.105 2.131 C 7.105 2.136 7.105 2.141 7.105 2.146 C 7.105 2.15 7.105 2.155 7.105 2.16 C 7.105 2.165 7.105 2.17 7.105 2.174 C 7.105 2.179 7.105 2.184 7.105 2.189 C 7.105 2.194 7.105 2.198 7.105 2.203 C 7.105 2.208 7.105 2.213 7.105 2.218 C 7.105 2.223 7.105 2.228 7.105 2.232 C 7.105 2.237 7.105 2.242 7.105 2.247 C 7.105 2.252 7.105 2.257 7.105 2.262 C 7.105 2.267 7.105 2.272 7.105 2.277 C 7.105 2.281 7.105 2.286 7.105 2.291 C 7.105 2.296 7.105 2.301 7.105 2.306 C 7.105 2.311 7.105 2.316 7.105 2.321 C 7.105 2.326 7.105 2.331 7.105 2.336 C 7.105 2.341 7.105 2.346 7.105 2.351 C 7.105 2.356 7.105 2.361 7.105 2.366 C 7.105 2.371 7.105 2.376 7.105 2.381 C 7.105 2.386 7.105 2.391 7.105 2.396 C 7.105 2.401 7.105 2.407 7.105 2.412 C 7.105 2.417 7.105 2.422 7.105 2.427 C 7.105 2.432 7.105 2.437 7.105 2.442 C 7.105 2.447 7.105 2.452 7.105 2.458 C 7.105 2.463 7.105 2.468 7.105 2.473 C 7.105 2.478 7.105 2.483 7.105 2.488 C 7.105 2.493 7.105 2.499 7.105 2.504 C 7.105 2.509 7.105 2.514 7.105 2.519 C 7.105 2.525 7.105 2.53 7.105 2.535 C 7.105 2.54 7.105 2.545 7.105 2.551 C 7.105 2.556 7.105 2.561 7.105 2.566 C 7.105 2.571 7.105 2.577 7.105 2.582 C 7.105 2.587 7.105 2.592 7.105 2.598 C 7.105 2.603 7.105 2.608 7.105 2.613 C 7.105 2.619 7.105 2.624 7.105 2.629 C 7.105 2.634 7.105 2.64 7.105 2.645 C 7.105 2.65 7.105 2.656 7.105 2.661 C 7.105 2.666 7.105 2.672 7.105 2.677 C 7.105 2.682 7.105 2.688 7.105 2.693 C 7.105 2.698 7.105 2.704 7.105 2.709 C 7.105 2.714 7.105 2.72 7.105 2.725 C 7.105 2.73 7.105 2.736 7.105 2.741 C 7.105 2.746 7.105 2.752 7.105 2.757 C 7.105 2.763 7.105 2.768 7.105 2.773 C 7.105 2.779 7.105 2.784 7.105 2.789 C 7.105 2.795 7.105 2.8 7.105 2.806 C 7.105 2.811 7.105 2.817 7.105 2.822 C 7.105 2.827 7.105 2.833 7.105 2.838 C 7.105 2.844 7.105 2.849 7.105 2.855 C 7.105 2.86 7.105 2.865 7.105 2.871 C 7.105 2.876 7.105 2.882 7.105 2.887 C 7.105 2.893 7.105 2.898 7.105 2.904 C 7.105 2.909 7.105 2.915 7.105 2.92 C 7.105 2.926 7.105 2.931 7.105 2.937 C 7.105 2.942 7.105 2.948 7.105 2.953 C 7.105 2.959 7.105 2.964 7.105 2.97 C 7.105 2.975 7.105 2.981 7.105 2.986 C 7.105 2.992 7.105 2.997 7.105 3.003 C 7.105 3.008 7.105 3.014 7.105 3.02 C 7.105 3.025 7.105 3.031 7.105 3.036 C 7.105 3.042 7.105 3.047 7.105 3.053 C 7.105 3.058 7.105 3.064 7.105 3.07 C 7.105 3.075 7.105 3.081 7.105 3.086 C 7.105 3.092 7.105 3.098 7.105 3.103 C 7.105 3.109 7.105 3.114 7.105 3.12 C 7.105 3.126 7.105 3.131 7.105 3.137 C 7.105 3.142 7.105 3.148 7.105 3.154 C 7.105 3.159 7.105 3.165 7.105 3.17 C 7.105 3.176 7.105 3.182 7.105 3.187 C 7.105 3.193 7.105 3.199 7.105 3.204 C 7.105 3.21 7.105 3.215 7.105 3.221 C 7.105 3.227 7.105 3.232 7.105 3.238 C 7.105 3.244 7.105 3.249 7.105 3.255 C 7.105 3.261 7.105 3.266 7.105 3.272 C 7.105 3.278 7.105 3.283 7.105 3.289 C 7.105 3.295 7.105 3.3 7.105 3.306 C 7.105 3.312 7.105 3.317 7.105 3.323 C 7.105 3.329 7.105 3.334 7.105 3.34 C 7.105 3.346 7.105 3.352 7.105 3.357 C 7.105 3.363 7.105 3.369 7.105 3.374 C 7.105 3.38 7.105 3.386 7.105 3.391 C 7.105 3.397 7.105 3.403 7.105 3.409 C 7.105 3.414 7.105 3.42 7.105 3.426 C 7.105 3.431 7.105 3.437 7.105 3.443 C 7.105 3.449 7.105 3.454 7.105 3.46 C 7.105 3.466 7.105 3.472 7.105 3.477 C 7.105 3.483 7.105 3.489 7.105 3.494 C 7.105 3.5 7.105 3.506 7.105 3.512 C 7.105 3.517 7.105 3.523 7.105 3.529 C 7.105 3.535 7.105 3.54 7.105 3.546 C 7.105 3.552 7.105 3.558 7.105 3.563 C 7.105 3.569 7.105 3.575 7.105 3.581 C 7.105 3.586 7.105 3.592 7.105 3.598 C 7.105 3.604 7.105 3.609 7.105 3.615 C 7.105 3.621 7.105 3.627 7.105 3.632 C 7.105 3.638 7.105 3.644 7.105 3.65 C 7.105 3.656 7.105 3.661 7.105 3.667 C 7.105 3.673 7.105 3.679 7.105 3.684 C 7.105 3.69 7.105 3.696 7.105 3.702 C 7.105 3.708 7.105 3.713 7.105 3.719 C 7.105 3.725 7.105 3.731 7.105 3.736 C 7.105 3.742 7.105 3.748 7.105 3.754 C 7.105 3.76 7.105 3.765 7.105 3.771 C 7.105 3.777 7.105 3.783 7.105 3.788 C 7.105 3.794 7.105 3.8 7.105 3.806 C 7.105 3.812 7.105 3.817 7.105 3.823 C 7.105 3.829 7.105 3.835 7.105 3.841 C 7.105 3.846 7.105 3.852 7.105 3.858 C 7.105 3.864 7.105 3.869 7.105 3.875 C 7.105 3.881 7.105 3.887 7.105 3.893 C 7.105 3.898 7.105 3.904 7.105 3.91 C 7.105 3.916 7.105 3.922 7.105 3.927 C 7.105 3.933 7.105 3.939 7.105 3.945 C 7.105 3.951 7.105 3.956 7.105 3.962 C 7.105 3.968 7.105 3.974 7.105 3.979 C 7.105 3.985 7.105 3.991 7.105 3.997 C 7.105 4.003 7.105 4.008 7.105 4.014 C 7.105 4.02 7.105 4.026 7.105 4.032 C 7.105 4.037 7.105 4.043 7.105 4.049 C 7.105 4.055 7.105 4.06 7.105 4.066 C 7.105 4.072 7.105 4.078 7.105 4.084 C 7.105 4.089 7.105 4.095 7.105 4.101 C 7.105 4.107 7.105 4.113 7.105 4.118 C 7.105 4.124 7.105 4.13 7.105 4.136 C 7.105 4.141 7.105 4.147 7.105 4.153 C 7.105 4.159 7.105 4.165 7.105 4.17 C 7.105 4.176 7.105 4.182 7.105 4.188 C 7.105 4.193 7.105 4.199 7.105 4.205 C 7.105 4.211 7.105 4.216 7.105 4.222 C 7.105 4.228 7.105 4.234 7.105 4.24 C 7.105 4.245 7.105 4.251 7.105 4.257 C 7.105 4.263 7.105 4.268 7.105 4.274 C 7.105 4.28 7.105 4.286 7.105 4.291 C 7.105 4.297 7.105 4.303 7.105 4.309 C 7.105 4.314 7.105 4.32 7.105 4.326 C 7.105 4.332 7.105 4.337 7.105 4.343 C 7.105 4.349 7.105 4.355 7.105 4.36 C 7.105 4.366 7.105 4.372 7.105 4.377 C 7.105 4.383 7.105 4.389 7.105 4.395 C 7.105 4.4 7.105 4.406 7.105 4.412 C 7.105 4.418 7.105 4.423 7.105 4.429 C 7.105 4.435 7.105 4.44 7.105 4.446 C 7.105 4.452 7.105 4.458 7.105 4.463 C 7.105 4.469 7.105 4.475 7.105 4.48 C 7.105 4.486 7.105 4.492 7.105 4.497 C 7.105 4.503 7.105 4.509 7.105 4.515 C 7.105 4.52 7.105 4.526 7.105 4.532 C 7.105 4.537 7.105 4.543 7.105 4.549 C 7.105 4.554 7.105 4.56 7.105 4.566 C 7.105 4.571 7.105 4.577 7.105 4.583 C 7.105 4.588 7.105 4.594 7.105 4.6 C 7.105 4.605 7.105 4.611 7.105 4.617 C 7.105 4.622 7.105 4.628 7.105 4.634 C 7.105 4.639 7.105 4.645 7.105 4.65 C 7.105 4.656 7.105 4.662 7.105 4.667 C 7.105 4.673 7.105 4.679 7.105 4.684 C 7.105 4.69 7.105 4.695 7.105 4.701 C 7.105 4.707 7.105 4.712 7.105 4.718 C 7.105 4.724 7.105 4.729 7.105 4.735 C 7.105 4.74 7.105 4.746 7.105 4.752 C 7.105 4.757 7.105 4.763 7.105 4.768 C 7.105 4.774 7.105 4.779 7.105 4.785 C 7.105 4.791 7.105 4.796 7.105 4.802 C 7.105 4.807 7.105 4.813 7.105 4.818 C 7.105 4.824 7.105 4.83 7.105 4.835 C 7.105 4.841 7.105 4.846 7.105 4.852 C 7.105 4.857 7.105 4.863 7.105 4.868 C 7.105 4.874 7.105 4.879 7.105 4.885 C 7.105 4.89 7.105 4.896 7.105 4.901 C 7.105 4.907 7.105 4.912 7.105 4.918 C 7.105 4.923 7.105 4.929 7.105 4.934 C 7.105 4.94 7.105 4.945 7.105 4.951 C 7.105 4.956 7.105 4.962 7.105 4.967 C 7.105 4.973 7.105 4.978 7.105 4.984 C 7.105 4.989 7.105 4.995 7.105 5 C 7.105 5.005 7.105 5.011 7.105 5.016 C 7.105 5.022 7.105 5.027 7.105 5.033 C 7.105 5.038 7.105 5.043 7.105 5.049 C 7.105 5.054 7.105 5.06 7.105 5.065 C 7.105 5.071 7.105 5.076 7.105 5.081 C 7.105 5.087 7.105 5.092 7.105 5.097 C 7.105 5.103 7.105 5.108 7.105 5.114 C 7.105 5.119 7.105 5.124 7.105 5.13 C 7.105 5.135 7.105 5.14 7.105 5.146 C 7.105 5.151 7.105 5.156 7.105 5.162 C 7.105 5.167 7.105 5.172 7.105 5.178 C 7.105 5.183 7.105 5.188 7.105 5.194 C 7.105 5.199 7.105 5.204 7.105 5.21 C 7.105 5.215 7.105 5.22 7.105 5.225 C 7.105 5.231 7.105 5.236 7.105 5.241 C 7.105 5.246 7.105 5.252 7.105 5.257 C 7.105 5.262 7.105 5.267 7.105 5.273 C 7.105 5.278 7.105 5.283 7.105 5.288 C 7.105 5.294 7.105 5.299 7.105 5.304 C 7.105 5.309 7.105 5.314 7.105 5.32 C 7.105 5.325 7.105 5.33 7.105 5.335 C 7.105 5.34 7.105 5.346 7.105 5.351 C 7.105 5.356 7.105 5.361 7.105 5.366 C 7.105 5.371 7.105 5.376 7.105 5.382 C 7.105 5.387 7.105 5.392 7.105 5.397 C 7.105 5.402 7.105 5.407 7.105 5.412 C 7.105 5.417 7.105 5.423 7.105 5.428 C 7.105 5.433 7.105 5.438 7.105 5.443 C 7.105 5.448 7.105 5.453 7.105 5.458 C 7.105 5.463 7.105 5.468 7.105 5.473 C 7.105 5.478 7.105 5.483 7.105 5.488 C 7.105 5.493 7.105 5.498 7.105 5.503 C 7.105 5.508 7.105 5.513 7.105 5.518 C 7.105 5.523 7.105 5.528 7.105 5.533 C 7.105 5.538 7.105 5.543 7.105 5.548 C 7.105 5.553 7.105 5.558 7.105 5.563 C 7.105 5.568 7.105 5.573 7.105 5.578 C 7.105 5.583 7.105 5.588 7.105 5.593 C 7.105 5.598 7.105 5.602 7.105 5.607 C 7.105 5.612 7.105 5.617 7.105 5.622 C 7.105 5.627 7.105 5.632 7.105 5.637 C 7.105 5.641 7.105 5.646 7.105 5.651 C 7.105 5.656 7.105 5.661 7.105 5.666 C 7.105 5.67 7.105 5.675 7.105 5.68 C 7.105 5.685 7.105 5.69 7.105 5.694 C 7.105 5.699 7.105 5.704 7.105 5.709 C 7.105 5.714 7.105 5.718 7.105 5.723 C 7.105 5.728 7.105 5.733 7.105 5.737 C 7.105 5.742 7.105 5.747 7.105 5.751 C 7.105 5.756 7.105 5.761 7.105 5.765 C 7.105 5.77 7.105 5.775 7.105 5.78 C 7.105 5.784 7.105 5.789 7.105 5.793 C 7.105 5.798 7.105 5.803 7.105 5.807 C 7.105 5.812 7.105 5.817 7.105 5.821 C 7.105 5.826 7.105 5.83 7.105 5.835 C 7.105 5.84 7.105 5.844 7.105 5.849 C 7.105 5.853 7.105 5.858 7.105 5.862 C 7.105 5.867 7.105 5.872 7.105 5.876 C 7.105 5.881 7.105 5.885 7.105 5.89 C 7.105 5.894 7.105 5.899 7.105 5.903 C 7.105 5.908 7.105 5.912 7.105 5.917 C 7.105 5.921 7.105 5.925 7.105 5.93 C 7.105 5.934 7.105 5.939 7.105 5.943 C 7.105 5.948 7.105 5.952 7.105 5.956 C 7.105 5.961 7.105 5.965 7.105 5.97 C 7.105 5.974 7.105 5.978 7.105 5.983 C 7.105 5.987 7.105 5.991 7.105 5.996 C 7.105 6 7.105 6.004 7.105 6.009 C 7.105 6.013 7.105 6.017 7.105 6.022 C 7.105 6.026 7.105 6.03 7.105 6.034 C 7.105 6.039 7.105 6.043 7.105 6.047 C 7.105 6.051 7.105 6.056 7.105 6.06 C 7.105 6.064 7.105 6.068 7.105 6.072 C 7.105 6.077 7.105 6.081 7.105 6.085 C 7.105 6.089 7.105 6.093 7.105 6.097 C 7.105 6.102 7.105 6.106 7.105 6.11 C 7.105 6.114 7.105 6.118 7.105 6.122 C 7.105 6.126 7.105 6.13 7.105 6.134 C 7.105 6.138 7.105 6.143 7.105 6.147 C 7.105 6.151 7.105 6.155 7.105 6.159 C 7.105 6.163 7.105 6.167 7.105 6.171 C 7.105 6.175 7.105 6.179 7.105 6.183 C 7.105 6.187 7.105 6.191 7.105 6.195 C 7.105 6.199 7.105 6.202 7.105 6.206 C 7.105 6.21 7.105 6.214 7.105 6.218 C 7.105 6.222 7.105 6.226 7.105 6.23 C 7.105 6.234 7.105 6.238 7.105 6.241 C 7.105 6.245 7.105 6.249 7.105 6.253 C 7.105 6.257 7.105 6.26 7.105 6.264 C 7.105 6.268 7.105 6.272 7.105 6.276 C 7.105 6.279 7.105 6.283 7.105 6.287 C 7.105 6.291 7.105 6.294 7.105 6.298 C 7.105 6.302 7.105 6.305 7.105 6.309 C 7.105 6.313 7.105 6.317 7.105 6.32 C 7.105 6.324 7.105 6.328 7.105 6.331 C 7.105 6.335 7.105 6.338 7.105 6.342 C 7.105 6.346 7.105 6.349 7.105 6.353 C 7.105 6.356 7.105 6.36 7.105 6.364 C 7.105 6.367 7.105 6.371 7.105 6.374 C 7.105 6.378 7.105 6.381 7.105 6.385 C 7.105 6.388 7.105 6.392 7.105 6.395 C 7.105 6.399 7.105 6.402 7.105 6.405 C 7.105 6.409 7.105 6.412 7.105 6.416 C 7.105 6.419 7.105 6.423 7.105 6.426 C 7.105 6.429 7.105 6.433 7.105 6.436 C 7.105 6.439 7.105 6.443 7.105 6.446 C 7.105 6.449 7.105 6.453 7.105 6.456 C 7.105 6.459 7.105 6.463 7.105 6.466 C 7.105 6.469 7.105 6.472 7.105 6.476 C 7.105 6.479 7.105 6.482 7.105 6.485 C 7.105 6.488 7.105 6.492 7.105 6.495 C 7.105 6.498 7.105 6.501 7.105 6.504 C 7.105 6.507 7.105 6.511 7.105 6.514 C 7.105 6.517 7.105 6.52 7.105 6.523 C 7.105 6.526 7.105 6.529 7.105 6.532 C 7.105 6.535 7.105 6.538 7.105 6.541 C 7.105 6.544 7.105 6.547 7.105 6.55 C 7.105 6.553 7.105 6.556 7.105 6.559 C 7.105 6.562 7.105 6.565 7.105 6.568 C 7.105 6.571 7.105 6.574 7.105 6.577 C 7.105 6.58 7.105 6.583 7.105 6.585 C 7.105 6.588 7.105 6.591 7.105 6.594 C 7.105 6.597 7.105 6.6 7.105 6.603 C 7.105 6.605 7.105 6.608 7.105 6.611 C 7.105 6.614 7.105 6.616 7.105 6.619 C 7.105 6.622 7.105 6.625 7.105 6.627 C 7.105 6.63 7.105 6.633 7.105 6.635 C 7.105 6.638 7.105 6.641 7.105 6.643 C 7.105 6.646 7.105 6.649 7.105 6.651 C 7.105 6.654 7.105 6.656 7.105 6.659 C 7.105 6.662 7.105 6.664 7.105 6.667 C 7.105 6.669 7.105 6.672 7.105 6.674 C 7.105 6.677 7.105 6.679 7.105 6.682 C 7.105 6.684 7.105 6.687 7.105 6.689 C 7.105 6.692 7.105 6.694 7.105 6.696 C 7.105 6.699 7.105 6.701 7.105 6.704 C 7.105 6.706 7.105 6.708 7.105 6.711 C 7.105 6.713 7.105 6.715 7.105 6.718 C 7.105 6.72 7.105 6.722 7.105 6.724 C 7.105 6.727 7.105 6.729 7.105 6.731 C 7.105 6.733 7.105 6.736 7.105 6.738 C 7.105 6.74 7.105 6.742 7.105 6.744 C 7.105 6.746 7.105 6.749 7.105 6.751 C 7.105 6.753 7.105 6.755 7.105 6.757 C 7.105 6.759 7.105 6.761 7.105 6.763 C 7.105 6.765 7.105 6.767 7.105 6.769 C 7.105 6.771 7.105 6.773 7.105 6.775 C 7.105 6.777 7.105 6.779 7.105 6.781 C 7.105 6.783 7.105 6.785 7.105 6.787 C 7.105 6.789 7.105 6.791 7.105 6.793 C 7.105 6.795 7.105 6.797 7.105 6.798 C 7.105 6.8 7.105 6.802 7.105 6.804 C 7.105 6.806 7.105 6.807 7.105 6.809 C 7.105 6.811 7.105 6.813 7.105 6.814 C 7.105 6.816 7.105 6.818 7.105 6.819 C 7.105 6.821 7.105 6.823 7.105 6.825 C 7.105 6.826 7.105 6.828 7.105 6.829 C 7.105 6.831 7.105 6.833 7.105 6.834 C 7.105 6.836 7.105 6.837 7.105 6.839 C 7.105 6.84 7.105 6.842 7.105 6.843 C 7.105 6.845 7.105 6.846 7.105 6.848 C 7.105 6.849 7.105 6.851 7.105 6.852 C 7.105 6.854 7.105 6.855 7.105 6.856 C 7.105 6.858 7.105 6.859 7.105 6.86 C 7.105 6.862 7.105 6.863 7.105 6.864 C 7.105 6.866 7.105 6.867 7.105 6.868 C 7.105 6.87 7.105 6.871 7.105 6.872 C 7.105 6.873 7.105 6.874 7.105 6.876 C 7.105 6.877 7.105 6.878 7.105 6.879 C 7.105 6.88 7.105 6.881 7.105 6.882 C 7.105 6.884 7.105 6.885 7.105 6.886 C 7.105 6.887 7.105 6.888 7.105 6.889 C 7.105 6.89 7.105 6.891 7.105 6.892 C 7.105 6.893 7.105 6.894 7.105 6.895 C 7.105 6.896 7.105 6.897 7.105 6.897 C 7.105 6.898 7.105 6.899 7.105 6.9 C 7.105 6.901 7.105 6.902 7.105 6.903 C 7.105 6.903 7.105 6.904 7.105 6.905 C 7.105 6.906 7.105 6.907 7.105 6.907 C 7.105 6.908 7.105 6.909 7.105 6.909 C 7.105 6.91 7.105 6.911 7.105 6.911 C 7.105 6.912 7.105 6.913 7.105 6.913 C 7.105 6.914 7.105 6.915 7.105 6.915 C 7.105 6.916 7.105 6.916 7.105 6.917 C 7.105 6.917 7.105 6.918 7.105 6.918 C 7.105 6.919 7.105 6.919 7.105 6.92 C 7.105 6.92 7.105 6.92 7.105 6.921 C 7.105 6.921 7.105 6.922 7.105 6.922 C 7.105 6.922 7.105 6.923 7.105 6.923 C 7.105 6.923 7.105 6.924 7.105 6.924 C 7.105 6.924 7.105 6.924 7.105 6.925 C 7.105 6.925 7.105 6.925 7.105 6.925 C 7.105 6.925 7.105 6.926 7.105 6.926 C 7.105 6.926 7.105 6.926 7.105 6.926 C 7.105 6.926 7.105 6.926 7.105 6.926 C 7.105 6.926 7.105 6.926 8.305 6.926 Z M 11.599 6.334 L 10.89 6.334 L 10.89 8.734 L 11.599 8.734 L 11.599 6.334 Z M 10.89 7.534 C 12.09 7.534 12.09 7.534 12.09 7.534 C 12.09 7.534 12.09 7.534 12.09 7.534 C 12.09 7.534 12.09 7.534 12.09 7.534 C 12.09 7.534 12.09 7.534 12.09 7.533 C 12.09 7.533 12.09 7.533 12.09 7.533 C 12.09 7.533 12.09 7.533 12.09 7.532 C 12.09 7.532 12.09 7.532 12.09 7.532 C 12.09 7.531 12.09 7.531 12.09 7.531 C 12.09 7.53 12.09 7.53 12.09 7.53 C 12.09 7.529 12.09 7.529 12.09 7.529 C 12.09 7.528 12.09 7.528 12.09 7.527 C 12.09 7.527 12.09 7.526 12.09 7.526 C 12.09 7.525 12.09 7.525 12.09 7.525 C 12.09 7.524 12.09 7.523 12.09 7.523 C 12.09 7.522 12.09 7.522 12.09 7.521 C 12.09 7.521 12.09 7.52 12.09 7.519 C 12.09 7.519 12.09 7.518 12.09 7.518 C 12.09 7.517 12.09 7.516 12.09 7.516 C 12.09 7.515 12.09 7.514 12.09 7.513 C 12.09 7.513 12.09 7.512 12.09 7.511 C 12.09 7.51 12.09 7.51 12.09 7.509 C 12.09 7.508 12.09 7.507 12.09 7.506 C 12.09 7.506 12.09 7.505 12.09 7.504 C 12.09 7.503 12.09 7.502 12.09 7.501 C 12.09 7.5 12.09 7.499 12.09 7.498 C 12.09 7.497 12.09 7.496 12.09 7.495 C 12.09 7.495 12.09 7.494 12.09 7.493 C 12.09 7.491 12.09 7.49 12.09 7.489 C 12.09 7.488 12.09 7.487 12.09 7.486 C 12.09 7.485 12.09 7.484 12.09 7.483 C 12.09 7.482 12.09 7.481 12.09 7.479 C 12.09 7.478 12.09 7.477 12.09 7.476 C 12.09 7.475 12.09 7.474 12.09 7.472 C 12.09 7.471 12.09 7.47 12.09 7.469 C 12.09 7.467 12.09 7.466 12.09 7.465 C 12.09 7.463 12.09 7.462 12.09 7.461 C 12.09 7.459 12.09 7.458 12.09 7.457 C 12.09 7.455 12.09 7.454 12.09 7.453 C 12.09 7.451 12.09 7.45 12.09 7.448 C 12.09 7.447 12.09 7.446 12.09 7.444 C 12.09 7.443 12.09 7.441 12.09 7.44 C 12.09 7.438 12.09 7.437 12.09 7.435 C 12.09 7.434 12.09 7.432 12.09 7.43 C 12.09 7.429 12.09 7.427 12.09 7.426 C 12.09 7.424 12.09 7.422 12.09 7.421 C 12.09 7.419 12.09 7.418 12.09 7.416 C 12.09 7.414 12.09 7.413 12.09 7.411 C 12.09 7.409 12.09 7.407 12.09 7.406 C 12.09 7.404 12.09 7.402 12.09 7.4 C 12.09 7.399 12.09 7.397 12.09 7.395 C 12.09 7.393 12.09 7.392 12.09 7.39 C 12.09 7.388 12.09 7.386 12.09 7.384 C 12.09 7.382 12.09 7.38 12.09 7.379 C 12.09 7.377 12.09 7.375 12.09 7.373 C 12.09 7.371 12.09 7.369 12.09 7.367 C 12.09 7.365 12.09 7.363 12.09 7.361 C 12.09 7.359 12.09 7.357 12.09 7.355 C 12.09 7.353 12.09 7.351 12.09 7.349 C 12.09 7.347 12.09 7.345 12.09 7.343 C 12.09 7.341 12.09 7.339 12.09 7.337 C 12.09 7.335 12.09 7.332 12.09 7.33 C 12.09 7.328 12.09 7.326 12.09 7.324 C 12.09 7.322 12.09 7.319 12.09 7.317 C 12.09 7.315 12.09 7.313 12.09 7.311 C 12.09 7.308 12.09 7.306 12.09 7.304 C 12.09 7.302 12.09 7.299 12.09 7.297 C 12.09 7.295 12.09 7.293 12.09 7.29 C 12.09 7.288 12.09 7.286 12.09 7.283 C 12.09 7.281 12.09 7.279 12.09 7.276 C 12.09 7.274 12.09 7.271 12.09 7.269 C 12.09 7.267 12.09 7.264 12.09 7.262 C 12.09 7.259 12.09 7.257 12.09 7.254 C 12.09 7.252 12.09 7.249 12.09 7.247 C 12.09 7.244 12.09 7.242 12.09 7.239 C 12.09 7.237 12.09 7.234 12.09 7.232 C 12.09 7.229 12.09 7.227 12.09 7.224 C 12.09 7.222 12.09 7.219 12.09 7.216 C 12.09 7.214 12.09 7.211 12.09 7.209 C 12.09 7.206 12.09 7.203 12.09 7.201 C 12.09 7.198 12.09 7.195 12.09 7.193 C 12.09 7.19 12.09 7.187 12.09 7.185 C 12.09 7.182 12.09 7.179 12.09 7.176 C 12.09 7.174 12.09 7.171 12.09 7.168 C 12.09 7.165 12.09 7.163 12.09 7.16 C 12.09 7.157 12.09 7.154 12.09 7.151 C 12.09 7.149 12.09 7.146 12.09 7.143 C 12.09 7.14 12.09 7.137 12.09 7.134 C 12.09 7.131 12.09 7.129 12.09 7.126 C 12.09 7.123 12.09 7.12 12.09 7.117 C 12.09 7.114 12.09 7.111 12.09 7.108 C 12.09 7.105 12.09 7.102 12.09 7.099 C 12.09 7.096 12.09 7.093 12.09 7.09 C 12.09 7.087 12.09 7.084 12.09 7.081 C 12.09 7.078 12.09 7.075 12.09 7.072 C 12.09 7.069 12.09 7.066 12.09 7.063 C 12.09 7.06 12.09 7.057 12.09 7.054 C 12.09 7.051 12.09 7.047 12.09 7.044 C 12.09 7.041 12.09 7.038 12.09 7.035 C 12.09 7.032 12.09 7.029 12.09 7.025 C 12.09 7.022 12.09 7.019 12.09 7.016 C 12.09 7.013 12.09 7.009 12.09 7.006 C 12.09 7.003 12.09 7 12.09 6.997 C 12.09 6.993 12.09 6.99 12.09 6.987 C 12.09 6.983 12.09 6.98 12.09 6.977 C 12.09 6.974 12.09 6.97 12.09 6.967 C 12.09 6.964 12.09 6.96 12.09 6.957 C 12.09 6.954 12.09 6.95 12.09 6.947 C 12.09 6.944 12.09 6.94 12.09 6.937 C 12.09 6.933 12.09 6.93 12.09 6.927 C 12.09 6.923 12.09 6.92 12.09 6.916 C 12.09 6.913 12.09 6.909 12.09 6.906 C 12.09 6.903 12.09 6.899 12.09 6.896 C 12.09 6.892 12.09 6.889 12.09 6.885 C 12.09 6.882 12.09 6.878 12.09 6.875 C 12.09 6.871 12.09 6.867 12.09 6.864 C 12.09 6.86 12.09 6.857 12.09 6.853 C 12.09 6.85 12.09 6.846 12.09 6.843 C 12.09 6.839 12.09 6.835 12.09 6.832 C 12.09 6.828 12.09 6.824 12.09 6.821 C 12.09 6.817 12.09 6.814 12.09 6.81 C 12.09 6.806 12.09 6.803 12.09 6.799 C 12.09 6.795 12.09 6.792 12.09 6.788 C 12.09 6.784 12.09 6.78 12.09 6.777 C 12.09 6.773 12.09 6.769 12.09 6.766 C 12.09 6.762 12.09 6.758 12.09 6.754 C 12.09 6.751 12.09 6.747 12.09 6.743 C 12.09 6.739 12.09 6.735 12.09 6.732 C 12.09 6.728 12.09 6.724 12.09 6.72 C 12.09 6.716 12.09 6.713 12.09 6.709 C 12.09 6.705 12.09 6.701 12.09 6.697 C 12.09 6.693 12.09 6.689 12.09 6.686 C 12.09 6.682 12.09 6.678 12.09 6.674 C 12.09 6.67 12.09 6.666 12.09 6.662 C 12.09 6.658 12.09 6.654 12.09 6.65 C 12.09 6.646 12.09 6.643 12.09 6.639 C 12.09 6.635 12.09 6.631 12.09 6.627 C 12.09 6.623 12.09 6.619 12.09 6.615 C 12.09 6.611 12.09 6.607 12.09 6.603 C 12.09 6.599 12.09 6.595 12.09 6.591 C 12.09 6.587 12.09 6.583 12.09 6.579 C 12.09 6.575 12.09 6.57 12.09 6.566 C 12.09 6.562 12.09 6.558 12.09 6.554 C 12.09 6.55 12.09 6.546 12.09 6.542 C 12.09 6.538 12.09 6.534 12.09 6.53 C 12.09 6.525 12.09 6.521 12.09 6.517 C 12.09 6.513 12.09 6.509 12.09 6.505 C 12.09 6.501 12.09 6.496 12.09 6.492 C 12.09 6.488 12.09 6.484 12.09 6.48 C 12.09 6.476 12.09 6.471 12.09 6.467 C 12.09 6.463 12.09 6.459 12.09 6.454 C 12.09 6.45 12.09 6.446 12.09 6.442 C 12.09 6.438 12.09 6.433 12.09 6.429 C 12.09 6.425 12.09 6.421 12.09 6.416 C 12.09 6.412 12.09 6.408 12.09 6.403 C 12.09 6.399 12.09 6.395 12.09 6.391 C 12.09 6.386 12.09 6.382 12.09 6.378 C 12.09 6.373 12.09 6.369 12.09 6.365 C 12.09 6.36 12.09 6.356 12.09 6.352 C 12.09 6.347 12.09 6.343 12.09 6.339 C 12.09 6.334 12.09 6.33 12.09 6.325 C 12.09 6.321 12.09 6.317 12.09 6.312 C 12.09 6.308 12.09 6.303 12.09 6.299 C 12.09 6.295 12.09 6.29 12.09 6.286 C 12.09 6.281 12.09 6.277 12.09 6.273 C 12.09 6.268 12.09 6.264 12.09 6.259 C 12.09 6.255 12.09 6.25 12.09 6.246 C 12.09 6.241 12.09 6.237 12.09 6.232 C 12.09 6.228 12.09 6.223 12.09 6.219 C 12.09 6.214 12.09 6.21 12.09 6.205 C 12.09 6.201 12.09 6.196 12.09 6.192 C 12.09 6.187 12.09 6.183 12.09 6.178 C 12.09 6.174 12.09 6.169 12.09 6.165 C 12.09 6.16 12.09 6.156 12.09 6.151 C 12.09 6.146 12.09 6.142 12.09 6.137 C 12.09 6.133 12.09 6.128 12.09 6.124 C 12.09 6.119 12.09 6.114 12.09 6.11 C 12.09 6.105 12.09 6.101 12.09 6.096 C 12.09 6.091 12.09 6.087 12.09 6.082 C 12.09 6.077 12.09 6.073 12.09 6.068 C 12.09 6.064 12.09 6.059 12.09 6.054 C 12.09 6.05 12.09 6.045 12.09 6.04 C 12.09 6.036 12.09 6.031 12.09 6.026 C 12.09 6.022 12.09 6.017 12.09 6.012 C 12.09 6.008 12.09 6.003 12.09 5.998 C 12.09 5.994 12.09 5.989 12.09 5.984 C 12.09 5.979 12.09 5.975 12.09 5.97 C 12.09 5.965 12.09 5.961 12.09 5.956 C 12.09 5.951 12.09 5.946 12.09 5.942 C 12.09 5.937 12.09 5.932 12.09 5.927 C 12.09 5.923 12.09 5.918 12.09 5.913 C 12.09 5.908 12.09 5.904 12.09 5.899 C 12.09 5.894 12.09 5.889 12.09 5.884 C 12.09 5.88 12.09 5.875 12.09 5.87 C 12.09 5.865 12.09 5.861 12.09 5.856 C 12.09 5.851 12.09 5.846 12.09 5.841 C 12.09 5.836 12.09 5.832 12.09 5.827 C 12.09 5.822 12.09 5.817 12.09 5.812 C 12.09 5.808 12.09 5.803 12.09 5.798 C 12.09 5.793 12.09 5.788 12.09 5.783 C 12.09 5.778 12.09 5.774 12.09 5.769 C 12.09 5.764 12.09 5.759 12.09 5.754 C 12.09 5.749 12.09 5.744 12.09 5.74 C 12.09 5.735 12.09 5.73 12.09 5.725 C 12.09 5.72 12.09 5.715 12.09 5.71 C 12.09 5.705 12.09 5.701 12.09 5.696 C 12.09 5.691 12.09 5.686 12.09 5.681 C 12.09 5.676 12.09 5.671 12.09 5.666 C 12.09 5.661 12.09 5.656 12.09 5.651 C 12.09 5.646 12.09 5.642 12.09 5.637 C 12.09 5.632 12.09 5.627 12.09 5.622 C 12.09 5.617 12.09 5.612 12.09 5.607 C 12.09 5.602 12.09 5.597 12.09 5.592 C 12.09 5.587 12.09 5.582 12.09 5.577 C 12.09 5.572 12.09 5.567 12.09 5.562 C 12.09 5.557 12.09 5.552 12.09 5.547 C 12.09 5.543 12.09 5.538 12.09 5.533 C 12.09 5.528 12.09 5.523 12.09 5.518 C 12.09 5.513 12.09 5.508 12.09 5.503 C 12.09 5.498 12.09 5.493 12.09 5.488 C 12.09 5.483 12.09 5.478 12.09 5.473 C 12.09 5.468 12.09 5.463 12.09 5.458 C 12.09 5.453 12.09 5.448 12.09 5.443 C 12.09 5.438 12.09 5.433 12.09 5.428 C 12.09 5.423 12.09 5.418 12.09 5.412 C 12.09 5.407 12.09 5.402 12.09 5.397 C 12.09 5.392 12.09 5.387 12.09 5.382 C 12.09 5.377 12.09 5.372 12.09 5.367 C 12.09 5.362 12.09 5.357 12.09 5.352 C 12.09 5.347 12.09 5.342 12.09 5.337 C 12.09 5.332 12.09 5.327 12.09 5.322 C 12.09 5.317 12.09 5.312 12.09 5.307 C 12.09 5.302 12.09 5.296 12.09 5.291 C 12.09 5.286 12.09 5.281 12.09 5.276 C 12.09 5.271 12.09 5.266 12.09 5.261 C 12.09 5.256 12.09 5.251 12.09 5.246 C 12.09 5.241 12.09 5.236 12.09 5.231 C 12.09 5.226 12.09 5.22 12.09 5.215 C 12.09 5.21 12.09 5.205 12.09 5.2 C 12.09 5.195 12.09 5.19 12.09 5.185 C 12.09 5.18 12.09 5.175 12.09 5.17 C 12.09 5.165 12.09 5.159 12.09 5.154 C 12.09 5.149 12.09 5.144 12.09 5.139 C 12.09 5.134 12.09 5.129 12.09 5.124 C 12.09 5.119 12.09 5.114 12.09 5.108 C 12.09 5.103 12.09 5.098 12.09 5.093 C 12.09 5.088 12.09 5.083 12.09 5.078 C 12.09 5.073 12.09 5.068 12.09 5.063 C 12.09 5.057 12.09 5.052 12.09 5.047 C 12.09 5.042 12.09 5.037 12.09 5.032 C 12.09 5.027 12.09 5.022 12.09 5.017 C 12.09 5.012 12.09 5.006 12.09 5.001 C 12.09 4.996 12.09 4.991 12.09 4.986 C 12.09 4.981 12.09 4.976 12.09 4.971 C 12.09 4.966 12.09 4.96 12.09 4.955 C 12.09 4.95 12.09 4.945 12.09 4.94 C 12.09 4.935 12.09 4.93 12.09 4.925 C 12.09 4.92 12.09 4.914 12.09 4.909 C 12.09 4.904 12.09 4.899 12.09 4.894 C 12.09 4.889 12.09 4.884 12.09 4.879 C 12.09 4.874 12.09 4.868 12.09 4.863 C 12.09 4.858 12.09 4.853 12.09 4.848 C 12.09 4.843 12.09 4.838 12.09 4.833 C 12.09 4.828 12.09 4.822 12.09 4.817 C 12.09 4.812 12.09 4.807 12.09 4.802 C 12.09 4.797 12.09 4.792 12.09 4.787 C 12.09 4.782 12.09 4.776 12.09 4.771 C 12.09 4.766 12.09 4.761 12.09 4.756 C 12.09 4.751 12.09 4.746 12.09 4.741 C 12.09 4.736 12.09 4.731 12.09 4.725 C 12.09 4.72 12.09 4.715 12.09 4.71 C 12.09 4.705 12.09 4.7 12.09 4.695 C 12.09 4.69 12.09 4.685 12.09 4.68 C 12.09 4.674 12.09 4.669 12.09 4.664 C 12.09 4.659 12.09 4.654 12.09 4.649 C 12.09 4.644 12.09 4.639 12.09 4.634 C 12.09 4.629 12.09 4.624 12.09 4.618 C 12.09 4.613 12.09 4.608 12.09 4.603 C 12.09 4.598 12.09 4.593 12.09 4.588 C 12.09 4.583 12.09 4.578 12.09 4.573 C 12.09 4.568 12.09 4.563 12.09 4.558 C 12.09 4.552 12.09 4.547 12.09 4.542 C 12.09 4.537 12.09 4.532 12.09 4.527 C 12.09 4.522 12.09 4.517 12.09 4.512 C 12.09 4.507 12.09 4.502 12.09 4.497 C 12.09 4.492 12.09 4.487 12.09 4.482 C 12.09 4.477 12.09 4.471 12.09 4.466 C 12.09 4.461 12.09 4.456 12.09 4.451 C 12.09 4.446 12.09 4.441 12.09 4.436 C 12.09 4.431 12.09 4.426 12.09 4.421 C 12.09 4.416 12.09 4.411 12.09 4.406 C 12.09 4.401 12.09 4.396 12.09 4.391 C 12.09 4.386 12.09 4.381 12.09 4.376 C 12.09 4.371 12.09 4.366 12.09 4.361 C 12.09 4.356 12.09 4.351 12.09 4.346 C 12.09 4.341 12.09 4.336 12.09 4.331 C 12.09 4.326 12.09 4.321 12.09 4.316 C 12.09 4.311 12.09 4.306 12.09 4.301 C 12.09 4.296 12.09 4.291 12.09 4.286 C 12.09 4.281 12.09 4.276 12.09 4.271 C 12.09 4.266 12.09 4.261 12.09 4.256 C 12.09 4.251 12.09 4.246 12.09 4.241 C 12.09 4.236 12.09 4.231 12.09 4.226 C 12.09 4.221 12.09 4.216 12.09 4.211 C 12.09 4.206 12.09 4.201 12.09 4.196 C 12.09 4.191 12.09 4.187 12.09 4.182 C 12.09 4.177 12.09 4.172 12.09 4.167 C 12.09 4.162 12.09 4.157 12.09 4.152 C 12.09 4.147 12.09 4.142 12.09 4.137 C 12.09 4.132 12.09 4.127 12.09 4.123 C 12.09 4.118 12.09 4.113 12.09 4.108 C 12.09 4.103 12.09 4.098 12.09 4.093 C 12.09 4.088 12.09 4.083 12.09 4.078 C 12.09 4.074 12.09 4.069 12.09 4.064 C 12.09 4.059 12.09 4.054 12.09 4.049 C 12.09 4.044 12.09 4.039 12.09 4.035 C 12.09 4.03 12.09 4.025 12.09 4.02 C 12.09 4.015 12.09 4.01 12.09 4.006 C 12.09 4.001 12.09 3.996 12.09 3.991 C 12.09 3.986 12.09 3.981 12.09 3.977 C 12.09 3.972 12.09 3.967 12.09 3.962 C 12.09 3.957 12.09 3.953 12.09 3.948 C 12.09 3.943 12.09 3.938 12.09 3.933 C 12.09 3.929 12.09 3.924 12.09 3.919 C 12.09 3.914 12.09 3.909 12.09 3.905 C 12.09 3.9 12.09 3.895 12.09 3.89 C 12.09 3.886 12.09 3.881 12.09 3.876 C 12.09 3.871 12.09 3.867 12.09 3.862 C 12.09 3.857 12.09 3.852 12.09 3.848 C 12.09 3.843 12.09 3.838 12.09 3.834 C 12.09 3.829 12.09 3.824 12.09 3.819 C 12.09 3.815 12.09 3.81 12.09 3.805 C 12.09 3.801 12.09 3.796 12.09 3.791 C 12.09 3.787 12.09 3.782 12.09 3.777 C 12.09 3.773 12.09 3.768 12.09 3.763 C 12.09 3.759 12.09 3.754 12.09 3.749 C 12.09 3.745 12.09 3.74 12.09 3.735 C 12.09 3.731 12.09 3.726 12.09 3.721 C 12.09 3.717 12.09 3.712 12.09 3.708 C 12.09 3.703 12.09 3.698 12.09 3.694 C 12.09 3.689 12.09 3.685 12.09 3.68 C 12.09 3.675 12.09 3.671 12.09 3.666 C 12.09 3.662 12.09 3.657 12.09 3.653 C 12.09 3.648 12.09 3.643 12.09 3.639 C 12.09 3.634 12.09 3.63 12.09 3.625 C 12.09 3.621 12.09 3.616 12.09 3.612 C 12.09 3.607 12.09 3.603 12.09 3.598 C 12.09 3.594 12.09 3.589 12.09 3.585 C 12.09 3.58 12.09 3.576 12.09 3.571 C 12.09 3.567 12.09 3.562 12.09 3.558 C 12.09 3.553 12.09 3.549 12.09 3.544 C 12.09 3.54 12.09 3.535 12.09 3.531 C 12.09 3.527 12.09 3.522 12.09 3.518 C 12.09 3.513 12.09 3.509 12.09 3.505 C 12.09 3.5 12.09 3.496 12.09 3.491 C 12.09 3.487 12.09 3.483 12.09 3.478 C 12.09 3.474 12.09 3.469 12.09 3.465 C 12.09 3.461 12.09 3.456 12.09 3.452 C 12.09 3.448 12.09 3.443 12.09 3.439 C 12.09 3.435 12.09 3.43 12.09 3.426 C 12.09 3.422 12.09 3.417 12.09 3.413 C 12.09 3.409 12.09 3.404 12.09 3.4 C 12.09 3.396 12.09 3.392 12.09 3.387 C 12.09 3.383 12.09 3.379 12.09 3.375 C 12.09 3.37 12.09 3.366 12.09 3.362 C 12.09 3.358 12.09 3.353 12.09 3.349 C 12.09 3.345 12.09 3.341 12.09 3.337 C 12.09 3.332 12.09 3.328 12.09 3.324 C 12.09 3.32 12.09 3.316 12.09 3.311 C 12.09 3.307 12.09 3.303 12.09 3.299 C 12.09 3.295 12.09 3.291 12.09 3.287 C 12.09 3.282 12.09 3.278 12.09 3.274 C 12.09 3.27 12.09 3.266 12.09 3.262 C 12.09 3.258 12.09 3.254 12.09 3.25 C 12.09 3.245 12.09 3.241 12.09 3.237 C 12.09 3.233 12.09 3.229 12.09 3.225 C 12.09 3.221 12.09 3.217 12.09 3.213 C 12.09 3.209 12.09 3.205 12.09 3.201 C 12.09 3.197 12.09 3.193 12.09 3.189 C 12.09 3.185 12.09 3.181 12.09 3.177 C 12.09 3.173 12.09 3.169 12.09 3.165 C 12.09 3.161 12.09 3.157 12.09 3.153 C 12.09 3.149 12.09 3.145 12.09 3.142 C 12.09 3.138 12.09 3.134 12.09 3.13 C 12.09 3.126 12.09 3.122 12.09 3.118 C 12.09 3.114 12.09 3.11 12.09 3.107 C 12.09 3.103 12.09 3.099 12.09 3.095 C 12.09 3.091 12.09 3.087 12.09 3.084 C 12.09 3.08 12.09 3.076 12.09 3.072 C 12.09 3.068 12.09 3.065 12.09 3.061 C 12.09 3.057 12.09 3.053 12.09 3.05 C 12.09 3.046 12.09 3.042 12.09 3.038 C 12.09 3.035 12.09 3.031 12.09 3.027 C 12.09 3.023 12.09 3.02 12.09 3.016 C 12.09 3.012 12.09 3.009 12.09 3.005 C 12.09 3.001 12.09 2.998 12.09 2.994 C 12.09 2.99 12.09 2.987 12.09 2.983 C 12.09 2.979 12.09 2.976 12.09 2.972 C 12.09 2.969 12.09 2.965 12.09 2.961 C 12.09 2.958 12.09 2.954 12.09 2.951 C 12.09 2.947 12.09 2.944 12.09 2.94 C 12.09 2.936 12.09 2.933 12.09 2.929 C 12.09 2.926 12.09 2.922 12.09 2.919 C 12.09 2.915 12.09 2.912 12.09 2.908 C 12.09 2.905 12.09 2.901 12.09 2.898 C 12.09 2.895 12.09 2.891 12.09 2.888 C 12.09 2.884 12.09 2.881 12.09 2.877 C 12.09 2.874 12.09 2.871 12.09 2.867 C 12.09 2.864 12.09 2.86 12.09 2.857 C 12.09 2.854 12.09 2.85 12.09 2.847 C 12.09 2.844 12.09 2.84 12.09 2.837 C 12.09 2.834 12.09 2.83 12.09 2.827 C 12.09 2.824 12.09 2.821 12.09 2.817 C 12.09 2.814 12.09 2.811 12.09 2.807 C 12.09 2.804 12.09 2.801 12.09 2.798 C 12.09 2.795 12.09 2.791 12.09 2.788 C 12.09 2.785 12.09 2.782 12.09 2.779 C 12.09 2.775 12.09 2.772 12.09 2.769 C 12.09 2.766 12.09 2.763 12.09 2.76 C 12.09 2.757 12.09 2.753 12.09 2.75 C 12.09 2.747 12.09 2.744 12.09 2.741 C 12.09 2.738 12.09 2.735 12.09 2.732 C 12.09 2.729 12.09 2.726 12.09 2.723 C 12.09 2.72 12.09 2.717 12.09 2.714 C 12.09 2.711 12.09 2.708 12.09 2.705 C 12.09 2.702 12.09 2.699 12.09 2.696 C 12.09 2.693 12.09 2.69 12.09 2.687 C 12.09 2.684 12.09 2.681 12.09 2.678 C 12.09 2.676 12.09 2.673 12.09 2.67 C 12.09 2.667 12.09 2.664 12.09 2.661 C 12.09 2.658 12.09 2.656 12.09 2.653 C 12.09 2.65 12.09 2.647 12.09 2.644 C 12.09 2.642 12.09 2.639 12.09 2.636 C 12.09 2.633 12.09 2.631 12.09 2.628 C 12.09 2.625 12.09 2.622 12.09 2.62 C 12.09 2.617 12.09 2.614 12.09 2.612 C 12.09 2.609 12.09 2.606 12.09 2.604 C 12.09 2.601 12.09 2.598 12.09 2.596 C 12.09 2.593 12.09 2.59 12.09 2.588 C 12.09 2.585 12.09 2.583 12.09 2.58 C 12.09 2.577 12.09 2.575 12.09 2.572 C 12.09 2.57 12.09 2.567 12.09 2.565 C 12.09 2.562 12.09 2.56 12.09 2.557 C 12.09 2.555 12.09 2.552 12.09 2.55 C 12.09 2.547 12.09 2.545 12.09 2.543 C 12.09 2.54 12.09 2.538 12.09 2.535 C 12.09 2.533 12.09 2.531 12.09 2.528 C 12.09 2.526 12.09 2.523 12.09 2.521 C 12.09 2.519 12.09 2.516 12.09 2.514 C 12.09 2.512 12.09 2.51 12.09 2.507 C 12.09 2.505 12.09 2.503 12.09 2.5 C 12.09 2.498 12.09 2.496 12.09 2.494 C 12.09 2.492 12.09 2.489 12.09 2.487 C 12.09 2.485 12.09 2.483 12.09 2.481 C 12.09 2.478 12.09 2.476 12.09 2.474 C 12.09 2.472 12.09 2.47 12.09 2.468 C 12.09 2.466 12.09 2.464 12.09 2.462 C 12.09 2.459 12.09 2.457 12.09 2.455 C 12.09 2.453 12.09 2.451 12.09 2.449 C 12.09 2.447 12.09 2.445 12.09 2.443 C 12.09 2.441 12.09 2.439 12.09 2.437 C 12.09 2.436 12.09 2.434 12.09 2.432 C 12.09 2.43 12.09 2.428 12.09 2.426 C 12.09 2.424 12.09 2.422 12.09 2.42 C 12.09 2.419 12.09 2.417 12.09 2.415 C 12.09 2.413 12.09 2.411 12.09 2.409 C 12.09 2.408 12.09 2.406 12.09 2.404 C 12.09 2.402 12.09 2.401 12.09 2.399 C 12.09 2.397 12.09 2.395 12.09 2.394 C 12.09 2.392 12.09 2.39 12.09 2.389 C 12.09 2.387 12.09 2.385 12.09 2.384 C 12.09 2.382 12.09 2.381 12.09 2.379 C 12.09 2.377 12.09 2.376 12.09 2.374 C 12.09 2.373 12.09 2.371 12.09 2.37 C 12.09 2.368 12.09 2.367 12.09 2.365 C 12.09 2.364 12.09 2.362 12.09 2.361 C 12.09 2.359 12.09 2.358 12.09 2.356 C 12.09 2.355 12.09 2.353 12.09 2.352 C 12.09 2.351 12.09 2.349 12.09 2.348 C 12.09 2.347 12.09 2.345 12.09 2.344 C 12.09 2.343 12.09 2.341 12.09 2.34 C 12.09 2.339 12.09 2.337 12.09 2.336 C 12.09 2.335 12.09 2.334 12.09 2.332 C 12.09 2.331 12.09 2.33 12.09 2.329 C 12.09 2.328 12.09 2.326 12.09 2.325 C 12.09 2.324 12.09 2.323 12.09 2.322 C 12.09 2.321 12.09 2.32 12.09 2.319 C 12.09 2.318 12.09 2.316 12.09 2.315 C 12.09 2.314 12.09 2.313 12.09 2.312 C 12.09 2.311 12.09 2.31 12.09 2.309 C 12.09 2.308 12.09 2.307 12.09 2.306 C 12.09 2.306 12.09 2.305 12.09 2.304 C 12.09 2.303 12.09 2.302 12.09 2.301 C 12.09 2.3 12.09 2.299 12.09 2.299 C 12.09 2.298 12.09 2.297 12.09 2.296 C 12.09 2.295 12.09 2.295 12.09 2.294 C 12.09 2.293 12.09 2.292 12.09 2.292 C 12.09 2.291 12.09 2.29 12.09 2.289 C 12.09 2.289 12.09 2.288 12.09 2.287 C 12.09 2.287 12.09 2.286 12.09 2.286 C 12.09 2.285 12.09 2.284 12.09 2.284 C 12.09 2.283 12.09 2.283 12.09 2.282 C 12.09 2.282 12.09 2.281 12.09 2.281 C 12.09 2.28 12.09 2.28 12.09 2.279 C 12.09 2.279 12.09 2.278 12.09 2.278 C 12.09 2.277 12.09 2.277 12.09 2.277 C 12.09 2.276 12.09 2.276 12.09 2.275 C 12.09 2.275 12.09 2.275 12.09 2.274 C 12.09 2.274 12.09 2.274 12.09 2.274 C 12.09 2.273 12.09 2.273 12.09 2.273 C 12.09 2.273 12.09 2.272 12.09 2.272 C 12.09 2.272 12.09 2.272 12.09 2.272 C 12.09 2.272 12.09 2.271 12.09 2.271 L 9.69 2.271 C 9.69 2.271 9.69 2.272 9.69 2.272 C 9.69 2.272 9.69 2.272 9.69 2.272 C 9.69 2.272 9.69 2.273 9.69 2.273 C 9.69 2.273 9.69 2.273 9.69 2.274 C 9.69 2.274 9.69 2.274 9.69 2.274 C 9.69 2.275 9.69 2.275 9.69 2.275 C 9.69 2.276 9.69 2.276 9.69 2.277 C 9.69 2.277 9.69 2.277 9.69 2.278 C 9.69 2.278 9.69 2.279 9.69 2.279 C 9.69 2.28 9.69 2.28 9.69 2.281 C 9.69 2.281 9.69 2.282 9.69 2.282 C 9.69 2.283 9.69 2.283 9.69 2.284 C 9.69 2.284 9.69 2.285 9.69 2.286 C 9.69 2.286 9.69 2.287 9.69 2.287 C 9.69 2.288 9.69 2.289 9.69 2.289 C 9.69 2.29 9.69 2.291 9.69 2.292 C 9.69 2.292 9.69 2.293 9.69 2.294 C 9.69 2.295 9.69 2.295 9.69 2.296 C 9.69 2.297 9.69 2.298 9.69 2.299 C 9.69 2.299 9.69 2.3 9.69 2.301 C 9.69 2.302 9.69 2.303 9.69 2.304 C 9.69 2.305 9.69 2.306 9.69 2.306 C 9.69 2.307 9.69 2.308 9.69 2.309 C 9.69 2.31 9.69 2.311 9.69 2.312 C 9.69 2.313 9.69 2.314 9.69 2.315 C 9.69 2.316 9.69 2.318 9.69 2.319 C 9.69 2.32 9.69 2.321 9.69 2.322 C 9.69 2.323 9.69 2.324 9.69 2.325 C 9.69 2.326 9.69 2.328 9.69 2.329 C 9.69 2.33 9.69 2.331 9.69 2.332 C 9.69 2.334 9.69 2.335 9.69 2.336 C 9.69 2.337 9.69 2.339 9.69 2.34 C 9.69 2.341 9.69 2.343 9.69 2.344 C 9.69 2.345 9.69 2.347 9.69 2.348 C 9.69 2.349 9.69 2.351 9.69 2.352 C 9.69 2.353 9.69 2.355 9.69 2.356 C 9.69 2.358 9.69 2.359 9.69 2.361 C 9.69 2.362 9.69 2.364 9.69 2.365 C 9.69 2.367 9.69 2.368 9.69 2.37 C 9.69 2.371 9.69 2.373 9.69 2.374 C 9.69 2.376 9.69 2.377 9.69 2.379 C 9.69 2.381 9.69 2.382 9.69 2.384 C 9.69 2.385 9.69 2.387 9.69 2.389 C 9.69 2.39 9.69 2.392 9.69 2.394 C 9.69 2.395 9.69 2.397 9.69 2.399 C 9.69 2.401 9.69 2.402 9.69 2.404 C 9.69 2.406 9.69 2.408 9.69 2.409 C 9.69 2.411 9.69 2.413 9.69 2.415 C 9.69 2.417 9.69 2.419 9.69 2.42 C 9.69 2.422 9.69 2.424 9.69 2.426 C 9.69 2.428 9.69 2.43 9.69 2.432 C 9.69 2.434 9.69 2.436 9.69 2.437 C 9.69 2.439 9.69 2.441 9.69 2.443 C 9.69 2.445 9.69 2.447 9.69 2.449 C 9.69 2.451 9.69 2.453 9.69 2.455 C 9.69 2.457 9.69 2.459 9.69 2.462 C 9.69 2.464 9.69 2.466 9.69 2.468 C 9.69 2.47 9.69 2.472 9.69 2.474 C 9.69 2.476 9.69 2.478 9.69 2.481 C 9.69 2.483 9.69 2.485 9.69 2.487 C 9.69 2.489 9.69 2.492 9.69 2.494 C 9.69 2.496 9.69 2.498 9.69 2.5 C 9.69 2.503 9.69 2.505 9.69 2.507 C 9.69 2.51 9.69 2.512 9.69 2.514 C 9.69 2.516 9.69 2.519 9.69 2.521 C 9.69 2.523 9.69 2.526 9.69 2.528 C 9.69 2.531 9.69 2.533 9.69 2.535 C 9.69 2.538 9.69 2.54 9.69 2.543 C 9.69 2.545 9.69 2.547 9.69 2.55 C 9.69 2.552 9.69 2.555 9.69 2.557 C 9.69 2.56 9.69 2.562 9.69 2.565 C 9.69 2.567 9.69 2.57 9.69 2.572 C 9.69 2.575 9.69 2.577 9.69 2.58 C 9.69 2.583 9.69 2.585 9.69 2.588 C 9.69 2.59 9.69 2.593 9.69 2.596 C 9.69 2.598 9.69 2.601 9.69 2.604 C 9.69 2.606 9.69 2.609 9.69 2.612 C 9.69 2.614 9.69 2.617 9.69 2.62 C 9.69 2.622 9.69 2.625 9.69 2.628 C 9.69 2.631 9.69 2.633 9.69 2.636 C 9.69 2.639 9.69 2.642 9.69 2.644 C 9.69 2.647 9.69 2.65 9.69 2.653 C 9.69 2.656 9.69 2.658 9.69 2.661 C 9.69 2.664 9.69 2.667 9.69 2.67 C 9.69 2.673 9.69 2.676 9.69 2.678 C 9.69 2.681 9.69 2.684 9.69 2.687 C 9.69 2.69 9.69 2.693 9.69 2.696 C 9.69 2.699 9.69 2.702 9.69 2.705 C 9.69 2.708 9.69 2.711 9.69 2.714 C 9.69 2.717 9.69 2.72 9.69 2.723 C 9.69 2.726 9.69 2.729 9.69 2.732 C 9.69 2.735 9.69 2.738 9.69 2.741 C 9.69 2.744 9.69 2.747 9.69 2.75 C 9.69 2.753 9.69 2.757 9.69 2.76 C 9.69 2.763 9.69 2.766 9.69 2.769 C 9.69 2.772 9.69 2.775 9.69 2.779 C 9.69 2.782 9.69 2.785 9.69 2.788 C 9.69 2.791 9.69 2.795 9.69 2.798 C 9.69 2.801 9.69 2.804 9.69 2.807 C 9.69 2.811 9.69 2.814 9.69 2.817 C 9.69 2.821 9.69 2.824 9.69 2.827 C 9.69 2.83 9.69 2.834 9.69 2.837 C 9.69 2.84 9.69 2.844 9.69 2.847 C 9.69 2.85 9.69 2.854 9.69 2.857 C 9.69 2.86 9.69 2.864 9.69 2.867 C 9.69 2.871 9.69 2.874 9.69 2.877 C 9.69 2.881 9.69 2.884 9.69 2.888 C 9.69 2.891 9.69 2.895 9.69 2.898 C 9.69 2.901 9.69 2.905 9.69 2.908 C 9.69 2.912 9.69 2.915 9.69 2.919 C 9.69 2.922 9.69 2.926 9.69 2.929 C 9.69 2.933 9.69 2.936 9.69 2.94 C 9.69 2.944 9.69 2.947 9.69 2.951 C 9.69 2.954 9.69 2.958 9.69 2.961 C 9.69 2.965 9.69 2.969 9.69 2.972 C 9.69 2.976 9.69 2.979 9.69 2.983 C 9.69 2.987 9.69 2.99 9.69 2.994 C 9.69 2.998 9.69 3.001 9.69 3.005 C 9.69 3.009 9.69 3.012 9.69 3.016 C 9.69 3.02 9.69 3.023 9.69 3.027 C 9.69 3.031 9.69 3.035 9.69 3.038 C 9.69 3.042 9.69 3.046 9.69 3.05 C 9.69 3.053 9.69 3.057 9.69 3.061 C 9.69 3.065 9.69 3.068 9.69 3.072 C 9.69 3.076 9.69 3.08 9.69 3.084 C 9.69 3.087 9.69 3.091 9.69 3.095 C 9.69 3.099 9.69 3.103 9.69 3.107 C 9.69 3.11 9.69 3.114 9.69 3.118 C 9.69 3.122 9.69 3.126 9.69 3.13 C 9.69 3.134 9.69 3.138 9.69 3.142 C 9.69 3.145 9.69 3.149 9.69 3.153 C 9.69 3.157 9.69 3.161 9.69 3.165 C 9.69 3.169 9.69 3.173 9.69 3.177 C 9.69 3.181 9.69 3.185 9.69 3.189 C 9.69 3.193 9.69 3.197 9.69 3.201 C 9.69 3.205 9.69 3.209 9.69 3.213 C 9.69 3.217 9.69 3.221 9.69 3.225 C 9.69 3.229 9.69 3.233 9.69 3.237 C 9.69 3.241 9.69 3.245 9.69 3.25 C 9.69 3.254 9.69 3.258 9.69 3.262 C 9.69 3.266 9.69 3.27 9.69 3.274 C 9.69 3.278 9.69 3.282 9.69 3.287 C 9.69 3.291 9.69 3.295 9.69 3.299 C 9.69 3.303 9.69 3.307 9.69 3.311 C 9.69 3.316 9.69 3.32 9.69 3.324 C 9.69 3.328 9.69 3.332 9.69 3.337 C 9.69 3.341 9.69 3.345 9.69 3.349 C 9.69 3.353 9.69 3.358 9.69 3.362 C 9.69 3.366 9.69 3.37 9.69 3.375 C 9.69 3.379 9.69 3.383 9.69 3.387 C 9.69 3.392 9.69 3.396 9.69 3.4 C 9.69 3.404 9.69 3.409 9.69 3.413 C 9.69 3.417 9.69 3.422 9.69 3.426 C 9.69 3.43 9.69 3.435 9.69 3.439 C 9.69 3.443 9.69 3.448 9.69 3.452 C 9.69 3.456 9.69 3.461 9.69 3.465 C 9.69 3.469 9.69 3.474 9.69 3.478 C 9.69 3.483 9.69 3.487 9.69 3.491 C 9.69 3.496 9.69 3.5 9.69 3.505 C 9.69 3.509 9.69 3.513 9.69 3.518 C 9.69 3.522 9.69 3.527 9.69 3.531 C 9.69 3.535 9.69 3.54 9.69 3.544 C 9.69 3.549 9.69 3.553 9.69 3.558 C 9.69 3.562 9.69 3.567 9.69 3.571 C 9.69 3.576 9.69 3.58 9.69 3.585 C 9.69 3.589 9.69 3.594 9.69 3.598 C 9.69 3.603 9.69 3.607 9.69 3.612 C 9.69 3.616 9.69 3.621 9.69 3.625 C 9.69 3.63 9.69 3.634 9.69 3.639 C 9.69 3.643 9.69 3.648 9.69 3.653 C 9.69 3.657 9.69 3.662 9.69 3.666 C 9.69 3.671 9.69 3.675 9.69 3.68 C 9.69 3.685 9.69 3.689 9.69 3.694 C 9.69 3.698 9.69 3.703 9.69 3.708 C 9.69 3.712 9.69 3.717 9.69 3.721 C 9.69 3.726 9.69 3.731 9.69 3.735 C 9.69 3.74 9.69 3.745 9.69 3.749 C 9.69 3.754 9.69 3.759 9.69 3.763 C 9.69 3.768 9.69 3.773 9.69 3.777 C 9.69 3.782 9.69 3.787 9.69 3.791 C 9.69 3.796 9.69 3.801 9.69 3.805 C 9.69 3.81 9.69 3.815 9.69 3.819 C 9.69 3.824 9.69 3.829 9.69 3.834 C 9.69 3.838 9.69 3.843 9.69 3.848 C 9.69 3.852 9.69 3.857 9.69 3.862 C 9.69 3.867 9.69 3.871 9.69 3.876 C 9.69 3.881 9.69 3.886 9.69 3.89 C 9.69 3.895 9.69 3.9 9.69 3.905 C 9.69 3.909 9.69 3.914 9.69 3.919 C 9.69 3.924 9.69 3.929 9.69 3.933 C 9.69 3.938 9.69 3.943 9.69 3.948 C 9.69 3.953 9.69 3.957 9.69 3.962 C 9.69 3.967 9.69 3.972 9.69 3.977 C 9.69 3.981 9.69 3.986 9.69 3.991 C 9.69 3.996 9.69 4.001 9.69 4.006 C 9.69 4.01 9.69 4.015 9.69 4.02 C 9.69 4.025 9.69 4.03 9.69 4.035 C 9.69 4.039 9.69 4.044 9.69 4.049 C 9.69 4.054 9.69 4.059 9.69 4.064 C 9.69 4.069 9.69 4.074 9.69 4.078 C 9.69 4.083 9.69 4.088 9.69 4.093 C 9.69 4.098 9.69 4.103 9.69 4.108 C 9.69 4.113 9.69 4.118 9.69 4.123 C 9.69 4.127 9.69 4.132 9.69 4.137 C 9.69 4.142 9.69 4.147 9.69 4.152 C 9.69 4.157 9.69 4.162 9.69 4.167 C 9.69 4.172 9.69 4.177 9.69 4.182 C 9.69 4.187 9.69 4.191 9.69 4.196 C 9.69 4.201 9.69 4.206 9.69 4.211 C 9.69 4.216 9.69 4.221 9.69 4.226 C 9.69 4.231 9.69 4.236 9.69 4.241 C 9.69 4.246 9.69 4.251 9.69 4.256 C 9.69 4.261 9.69 4.266 9.69 4.271 C 9.69 4.276 9.69 4.281 9.69 4.286 C 9.69 4.291 9.69 4.296 9.69 4.301 C 9.69 4.306 9.69 4.311 9.69 4.316 C 9.69 4.321 9.69 4.326 9.69 4.331 C 9.69 4.336 9.69 4.341 9.69 4.346 C 9.69 4.351 9.69 4.356 9.69 4.361 C 9.69 4.366 9.69 4.371 9.69 4.376 C 9.69 4.381 9.69 4.386 9.69 4.391 C 9.69 4.396 9.69 4.401 9.69 4.406 C 9.69 4.411 9.69 4.416 9.69 4.421 C 9.69 4.426 9.69 4.431 9.69 4.436 C 9.69 4.441 9.69 4.446 9.69 4.451 C 9.69 4.456 9.69 4.461 9.69 4.466 C 9.69 4.471 9.69 4.477 9.69 4.482 C 9.69 4.487 9.69 4.492 9.69 4.497 C 9.69 4.502 9.69 4.507 9.69 4.512 C 9.69 4.517 9.69 4.522 9.69 4.527 C 9.69 4.532 9.69 4.537 9.69 4.542 C 9.69 4.547 9.69 4.552 9.69 4.558 C 9.69 4.563 9.69 4.568 9.69 4.573 C 9.69 4.578 9.69 4.583 9.69 4.588 C 9.69 4.593 9.69 4.598 9.69 4.603 C 9.69 4.608 9.69 4.613 9.69 4.618 C 9.69 4.624 9.69 4.629 9.69 4.634 C 9.69 4.639 9.69 4.644 9.69 4.649 C 9.69 4.654 9.69 4.659 9.69 4.664 C 9.69 4.669 9.69 4.674 9.69 4.68 C 9.69 4.685 9.69 4.69 9.69 4.695 C 9.69 4.7 9.69 4.705 9.69 4.71 C 9.69 4.715 9.69 4.72 9.69 4.725 C 9.69 4.731 9.69 4.736 9.69 4.741 C 9.69 4.746 9.69 4.751 9.69 4.756 C 9.69 4.761 9.69 4.766 9.69 4.771 C 9.69 4.776 9.69 4.782 9.69 4.787 C 9.69 4.792 9.69 4.797 9.69 4.802 C 9.69 4.807 9.69 4.812 9.69 4.817 C 9.69 4.822 9.69 4.828 9.69 4.833 C 9.69 4.838 9.69 4.843 9.69 4.848 C 9.69 4.853 9.69 4.858 9.69 4.863 C 9.69 4.868 9.69 4.874 9.69 4.879 C 9.69 4.884 9.69 4.889 9.69 4.894 C 9.69 4.899 9.69 4.904 9.69 4.909 C 9.69 4.914 9.69 4.92 9.69 4.925 C 9.69 4.93 9.69 4.935 9.69 4.94 C 9.69 4.945 9.69 4.95 9.69 4.955 C 9.69 4.96 9.69 4.966 9.69 4.971 C 9.69 4.976 9.69 4.981 9.69 4.986 C 9.69 4.991 9.69 4.996 9.69 5.001 C 9.69 5.006 9.69 5.012 9.69 5.017 C 9.69 5.022 9.69 5.027 9.69 5.032 C 9.69 5.037 9.69 5.042 9.69 5.047 C 9.69 5.052 9.69 5.057 9.69 5.063 C 9.69 5.068 9.69 5.073 9.69 5.078 C 9.69 5.083 9.69 5.088 9.69 5.093 C 9.69 5.098 9.69 5.103 9.69 5.108 C 9.69 5.114 9.69 5.119 9.69 5.124 C 9.69 5.129 9.69 5.134 9.69 5.139 C 9.69 5.144 9.69 5.149 9.69 5.154 C 9.69 5.159 9.69 5.165 9.69 5.17 C 9.69 5.175 9.69 5.18 9.69 5.185 C 9.69 5.19 9.69 5.195 9.69 5.2 C 9.69 5.205 9.69 5.21 9.69 5.215 C 9.69 5.22 9.69 5.226 9.69 5.231 C 9.69 5.236 9.69 5.241 9.69 5.246 C 9.69 5.251 9.69 5.256 9.69 5.261 C 9.69 5.266 9.69 5.271 9.69 5.276 C 9.69 5.281 9.69 5.286 9.69 5.291 C 9.69 5.296 9.69 5.302 9.69 5.307 C 9.69 5.312 9.69 5.317 9.69 5.322 C 9.69 5.327 9.69 5.332 9.69 5.337 C 9.69 5.342 9.69 5.347 9.69 5.352 C 9.69 5.357 9.69 5.362 9.69 5.367 C 9.69 5.372 9.69 5.377 9.69 5.382 C 9.69 5.387 9.69 5.392 9.69 5.397 C 9.69 5.402 9.69 5.407 9.69 5.412 C 9.69 5.418 9.69 5.423 9.69 5.428 C 9.69 5.433 9.69 5.438 9.69 5.443 C 9.69 5.448 9.69 5.453 9.69 5.458 C 9.69 5.463 9.69 5.468 9.69 5.473 C 9.69 5.478 9.69 5.483 9.69 5.488 C 9.69 5.493 9.69 5.498 9.69 5.503 C 9.69 5.508 9.69 5.513 9.69 5.518 C 9.69 5.523 9.69 5.528 9.69 5.533 C 9.69 5.538 9.69 5.543 9.69 5.547 C 9.69 5.552 9.69 5.557 9.69 5.562 C 9.69 5.567 9.69 5.572 9.69 5.577 C 9.69 5.582 9.69 5.587 9.69 5.592 C 9.69 5.597 9.69 5.602 9.69 5.607 C 9.69 5.612 9.69 5.617 9.69 5.622 C 9.69 5.627 9.69 5.632 9.69 5.637 C 9.69 5.642 9.69 5.646 9.69 5.651 C 9.69 5.656 9.69 5.661 9.69 5.666 C 9.69 5.671 9.69 5.676 9.69 5.681 C 9.69 5.686 9.69 5.691 9.69 5.696 C 9.69 5.701 9.69 5.705 9.69 5.71 C 9.69 5.715 9.69 5.72 9.69 5.725 C 9.69 5.73 9.69 5.735 9.69 5.74 C 9.69 5.744 9.69 5.749 9.69 5.754 C 9.69 5.759 9.69 5.764 9.69 5.769 C 9.69 5.774 9.69 5.778 9.69 5.783 C 9.69 5.788 9.69 5.793 9.69 5.798 C 9.69 5.803 9.69 5.808 9.69 5.812 C 9.69 5.817 9.69 5.822 9.69 5.827 C 9.69 5.832 9.69 5.836 9.69 5.841 C 9.69 5.846 9.69 5.851 9.69 5.856 C 9.69 5.861 9.69 5.865 9.69 5.87 C 9.69 5.875 9.69 5.88 9.69 5.884 C 9.69 5.889 9.69 5.894 9.69 5.899 C 9.69 5.904 9.69 5.908 9.69 5.913 C 9.69 5.918 9.69 5.923 9.69 5.927 C 9.69 5.932 9.69 5.937 9.69 5.942 C 9.69 5.946 9.69 5.951 9.69 5.956 C 9.69 5.961 9.69 5.965 9.69 5.97 C 9.69 5.975 9.69 5.979 9.69 5.984 C 9.69 5.989 9.69 5.994 9.69 5.998 C 9.69 6.003 9.69 6.008 9.69 6.012 C 9.69 6.017 9.69 6.022 9.69 6.026 C 9.69 6.031 9.69 6.036 9.69 6.04 C 9.69 6.045 9.69 6.05 9.69 6.054 C 9.69 6.059 9.69 6.064 9.69 6.068 C 9.69 6.073 9.69 6.077 9.69 6.082 C 9.69 6.087 9.69 6.091 9.69 6.096 C 9.69 6.101 9.69 6.105 9.69 6.11 C 9.69 6.114 9.69 6.119 9.69 6.124 C 9.69 6.128 9.69 6.133 9.69 6.137 C 9.69 6.142 9.69 6.146 9.69 6.151 C 9.69 6.156 9.69 6.16 9.69 6.165 C 9.69 6.169 9.69 6.174 9.69 6.178 C 9.69 6.183 9.69 6.187 9.69 6.192 C 9.69 6.196 9.69 6.201 9.69 6.205 C 9.69 6.21 9.69 6.214 9.69 6.219 C 9.69 6.223 9.69 6.228 9.69 6.232 C 9.69 6.237 9.69 6.241 9.69 6.246 C 9.69 6.25 9.69 6.255 9.69 6.259 C 9.69 6.264 9.69 6.268 9.69 6.273 C 9.69 6.277 9.69 6.281 9.69 6.286 C 9.69 6.29 9.69 6.295 9.69 6.299 C 9.69 6.303 9.69 6.308 9.69 6.312 C 9.69 6.317 9.69 6.321 9.69 6.325 C 9.69 6.33 9.69 6.334 9.69 6.339 C 9.69 6.343 9.69 6.347 9.69 6.352 C 9.69 6.356 9.69 6.36 9.69 6.365 C 9.69 6.369 9.69 6.373 9.69 6.378 C 9.69 6.382 9.69 6.386 9.69 6.391 C 9.69 6.395 9.69 6.399 9.69 6.403 C 9.69 6.408 9.69 6.412 9.69 6.416 C 9.69 6.421 9.69 6.425 9.69 6.429 C 9.69 6.433 9.69 6.438 9.69 6.442 C 9.69 6.446 9.69 6.45 9.69 6.454 C 9.69 6.459 9.69 6.463 9.69 6.467 C 9.69 6.471 9.69 6.476 9.69 6.48 C 9.69 6.484 9.69 6.488 9.69 6.492 C 9.69 6.496 9.69 6.501 9.69 6.505 C 9.69 6.509 9.69 6.513 9.69 6.517 C 9.69 6.521 9.69 6.525 9.69 6.53 C 9.69 6.534 9.69 6.538 9.69 6.542 C 9.69 6.546 9.69 6.55 9.69 6.554 C 9.69 6.558 9.69 6.562 9.69 6.566 C 9.69 6.57 9.69 6.575 9.69 6.579 C 9.69 6.583 9.69 6.587 9.69 6.591 C 9.69 6.595 9.69 6.599 9.69 6.603 C 9.69 6.607 9.69 6.611 9.69 6.615 C 9.69 6.619 9.69 6.623 9.69 6.627 C 9.69 6.631 9.69 6.635 9.69 6.639 C 9.69 6.643 9.69 6.646 9.69 6.65 C 9.69 6.654 9.69 6.658 9.69 6.662 C 9.69 6.666 9.69 6.67 9.69 6.674 C 9.69 6.678 9.69 6.682 9.69 6.686 C 9.69 6.689 9.69 6.693 9.69 6.697 C 9.69 6.701 9.69 6.705 9.69 6.709 C 9.69 6.713 9.69 6.716 9.69 6.72 C 9.69 6.724 9.69 6.728 9.69 6.732 C 9.69 6.735 9.69 6.739 9.69 6.743 C 9.69 6.747 9.69 6.751 9.69 6.754 C 9.69 6.758 9.69 6.762 9.69 6.766 C 9.69 6.769 9.69 6.773 9.69 6.777 C 9.69 6.78 9.69 6.784 9.69 6.788 C 9.69 6.792 9.69 6.795 9.69 6.799 C 9.69 6.803 9.69 6.806 9.69 6.81 C 9.69 6.814 9.69 6.817 9.69 6.821 C 9.69 6.824 9.69 6.828 9.69 6.832 C 9.69 6.835 9.69 6.839 9.69 6.843 C 9.69 6.846 9.69 6.85 9.69 6.853 C 9.69 6.857 9.69 6.86 9.69 6.864 C 9.69 6.867 9.69 6.871 9.69 6.875 C 9.69 6.878 9.69 6.882 9.69 6.885 C 9.69 6.889 9.69 6.892 9.69 6.896 C 9.69 6.899 9.69 6.903 9.69 6.906 C 9.69 6.909 9.69 6.913 9.69 6.916 C 9.69 6.92 9.69 6.923 9.69 6.927 C 9.69 6.93 9.69 6.933 9.69 6.937 C 9.69 6.94 9.69 6.944 9.69 6.947 C 9.69 6.95 9.69 6.954 9.69 6.957 C 9.69 6.96 9.69 6.964 9.69 6.967 C 9.69 6.97 9.69 6.974 9.69 6.977 C 9.69 6.98 9.69 6.983 9.69 6.987 C 9.69 6.99 9.69 6.993 9.69 6.997 C 9.69 7 9.69 7.003 9.69 7.006 C 9.69 7.009 9.69 7.013 9.69 7.016 C 9.69 7.019 9.69 7.022 9.69 7.025 C 9.69 7.029 9.69 7.032 9.69 7.035 C 9.69 7.038 9.69 7.041 9.69 7.044 C 9.69 7.047 9.69 7.051 9.69 7.054 C 9.69 7.057 9.69 7.06 9.69 7.063 C 9.69 7.066 9.69 7.069 9.69 7.072 C 9.69 7.075 9.69 7.078 9.69 7.081 C 9.69 7.084 9.69 7.087 9.69 7.09 C 9.69 7.093 9.69 7.096 9.69 7.099 C 9.69 7.102 9.69 7.105 9.69 7.108 C 9.69 7.111 9.69 7.114 9.69 7.117 C 9.69 7.12 9.69 7.123 9.69 7.126 C 9.69 7.129 9.69 7.131 9.69 7.134 C 9.69 7.137 9.69 7.14 9.69 7.143 C 9.69 7.146 9.69 7.149 9.69 7.151 C 9.69 7.154 9.69 7.157 9.69 7.16 C 9.69 7.163 9.69 7.165 9.69 7.168 C 9.69 7.171 9.69 7.174 9.69 7.176 C 9.69 7.179 9.69 7.182 9.69 7.185 C 9.69 7.187 9.69 7.19 9.69 7.193 C 9.69 7.195 9.69 7.198 9.69 7.201 C 9.69 7.203 9.69 7.206 9.69 7.209 C 9.69 7.211 9.69 7.214 9.69 7.216 C 9.69 7.219 9.69 7.222 9.69 7.224 C 9.69 7.227 9.69 7.229 9.69 7.232 C 9.69 7.234 9.69 7.237 9.69 7.239 C 9.69 7.242 9.69 7.244 9.69 7.247 C 9.69 7.249 9.69 7.252 9.69 7.254 C 9.69 7.257 9.69 7.259 9.69 7.262 C 9.69 7.264 9.69 7.267 9.69 7.269 C 9.69 7.271 9.69 7.274 9.69 7.276 C 9.69 7.279 9.69 7.281 9.69 7.283 C 9.69 7.286 9.69 7.288 9.69 7.29 C 9.69 7.293 9.69 7.295 9.69 7.297 C 9.69 7.299 9.69 7.302 9.69 7.304 C 9.69 7.306 9.69 7.308 9.69 7.311 C 9.69 7.313 9.69 7.315 9.69 7.317 C 9.69 7.319 9.69 7.322 9.69 7.324 C 9.69 7.326 9.69 7.328 9.69 7.33 C 9.69 7.332 9.69 7.335 9.69 7.337 C 9.69 7.339 9.69 7.341 9.69 7.343 C 9.69 7.345 9.69 7.347 9.69 7.349 C 9.69 7.351 9.69 7.353 9.69 7.355 C 9.69 7.357 9.69 7.359 9.69 7.361 C 9.69 7.363 9.69 7.365 9.69 7.367 C 9.69 7.369 9.69 7.371 9.69 7.373 C 9.69 7.375 9.69 7.377 9.69 7.379 C 9.69 7.38 9.69 7.382 9.69 7.384 C 9.69 7.386 9.69 7.388 9.69 7.39 C 9.69 7.392 9.69 7.393 9.69 7.395 C 9.69 7.397 9.69 7.399 9.69 7.4 C 9.69 7.402 9.69 7.404 9.69 7.406 C 9.69 7.407 9.69 7.409 9.69 7.411 C 9.69 7.413 9.69 7.414 9.69 7.416 C 9.69 7.418 9.69 7.419 9.69 7.421 C 9.69 7.422 9.69 7.424 9.69 7.426 C 9.69 7.427 9.69 7.429 9.69 7.43 C 9.69 7.432 9.69 7.434 9.69 7.435 C 9.69 7.437 9.69 7.438 9.69 7.44 C 9.69 7.441 9.69 7.443 9.69 7.444 C 9.69 7.446 9.69 7.447 9.69 7.448 C 9.69 7.45 9.69 7.451 9.69 7.453 C 9.69 7.454 9.69 7.455 9.69 7.457 C 9.69 7.458 9.69 7.459 9.69 7.461 C 9.69 7.462 9.69 7.463 9.69 7.465 C 9.69 7.466 9.69 7.467 9.69 7.469 C 9.69 7.47 9.69 7.471 9.69 7.472 C 9.69 7.474 9.69 7.475 9.69 7.476 C 9.69 7.477 9.69 7.478 9.69 7.479 C 9.69 7.481 9.69 7.482 9.69 7.483 C 9.69 7.484 9.69 7.485 9.69 7.486 C 9.69 7.487 9.69 7.488 9.69 7.489 C 9.69 7.49 9.69 7.491 9.69 7.493 C 9.69 7.494 9.69 7.495 9.69 7.495 C 9.69 7.496 9.69 7.497 9.69 7.498 C 9.69 7.499 9.69 7.5 9.69 7.501 C 9.69 7.502 9.69 7.503 9.69 7.504 C 9.69 7.505 9.69 7.506 9.69 7.506 C 9.69 7.507 9.69 7.508 9.69 7.509 C 9.69 7.51 9.69 7.51 9.69 7.511 C 9.69 7.512 9.69 7.513 9.69 7.513 C 9.69 7.514 9.69 7.515 9.69 7.516 C 9.69 7.516 9.69 7.517 9.69 7.518 C 9.69 7.518 9.69 7.519 9.69 7.519 C 9.69 7.52 9.69 7.521 9.69 7.521 C 9.69 7.522 9.69 7.522 9.69 7.523 C 9.69 7.523 9.69 7.524 9.69 7.525 C 9.69 7.525 9.69 7.525 9.69 7.526 C 9.69 7.526 9.69 7.527 9.69 7.527 C 9.69 7.528 9.69 7.528 9.69 7.529 C 9.69 7.529 9.69 7.529 9.69 7.53 C 9.69 7.53 9.69 7.53 9.69 7.531 C 9.69 7.531 9.69 7.531 9.69 7.532 C 9.69 7.532 9.69 7.532 9.69 7.532 C 9.69 7.533 9.69 7.533 9.69 7.533 C 9.69 7.533 9.69 7.533 9.69 7.533 C 9.69 7.534 9.69 7.534 9.69 7.534 C 9.69 7.534 9.69 7.534 9.69 7.534 C 9.69 7.534 9.69 7.534 9.69 7.534 C 9.69 7.534 9.69 7.534 10.89 7.534 Z",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 13,
      height: 14,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.2))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 14 L 9 14 L 8 14 L 4 14 L 4 12.963 C 4 12.145 0.8 9.863 0.8 9.863 C 0.358 9.535 0 8.828 0 8.27 L 0 4.667 C 0 3.521 0.895 2.593 2 2.593 L 2 5.704 L 3 5.704 L 3 0.864 C 3 0.387 3.373 0 3.833 0 C 4.754 0 5.5 0.774 5.5 1.728 L 5.5 1.383 C 5.5 0.905 5.873 0.519 6.333 0.519 C 7.254 0.519 8 1.292 8 2.247 L 8 1.901 C 8 1.424 8.373 1.037 8.833 1 C 9.754 1.037 10.5 1.811 10.5 2.765 L 10.5 2.42 C 10.5 1.942 10.873 1.556 11.333 1.556 C 12.254 1.556 13 2.329 13 3.284 L 13 8.004 C 13 8.554 12.763 9.381 12.475 9.857 C 12.475 9.857 11 12.145 11 12.963 L 11 14 L 10 14 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4 14 L 2.8 14 L 2.8 15.2 L 4 15.2 L 4 14 Z M 0.8 9.863 L 0.084 10.827 L 0.094 10.834 L 0.103 10.841 L 0.8 9.863 Z M 2 2.593 L 3.2 2.593 L 3.2 1.393 L 2 1.393 L 2 2.593 Z M 2 5.704 L 0.8 5.704 L 0.8 6.904 L 2 6.904 L 2 5.704 Z M 3 5.704 L 3 6.904 L 4.2 6.904 L 4.2 5.704 L 3 5.704 Z M 8.833 1 L 8.882 -0.199 L 8.809 -0.202 L 8.737 -0.196 L 8.833 1 Z M 12.475 9.857 L 13.483 10.507 L 13.492 10.493 L 13.501 10.479 L 12.475 9.857 Z M 11 14 L 11 15.2 L 12.2 15.2 L 12.2 14 L 11 14 Z M 10 12.8 L 9 12.8 L 9 15.2 L 10 15.2 L 10 12.8 Z M 9 12.8 L 8 12.8 L 8 15.2 L 9 15.2 L 9 12.8 Z M 8 12.8 L 4 12.8 L 4 15.2 L 8 15.2 L 8 12.8 Z M 5.2 14 L 5.2 12.963 L 2.8 12.963 L 2.8 14 L 5.2 14 Z M 5.2 12.963 C 5.2 12.517 5.002 12.155 4.882 11.962 C 4.74 11.734 4.562 11.517 4.387 11.325 C 4.034 10.938 3.587 10.537 3.172 10.188 C 2.751 9.834 2.333 9.51 2.023 9.275 C 1.868 9.158 1.737 9.062 1.646 8.994 C 1.6 8.961 1.563 8.934 1.538 8.916 C 1.525 8.907 1.515 8.9 1.508 8.895 C 1.505 8.892 1.502 8.89 1.5 8.889 C 1.499 8.888 1.498 8.888 1.498 8.887 C 1.497 8.887 1.497 8.887 1.497 8.887 C 1.497 8.887 1.497 8.886 1.497 8.886 C 1.497 8.886 1.496 8.886 0.8 9.863 C 0.103 10.841 0.103 10.841 0.103 10.84 C 0.103 10.84 0.103 10.84 0.103 10.84 C 0.103 10.84 0.103 10.84 0.103 10.841 C 0.103 10.841 0.104 10.841 0.104 10.841 C 0.105 10.842 0.107 10.843 0.11 10.845 C 0.115 10.849 0.123 10.855 0.134 10.862 C 0.155 10.878 0.188 10.901 0.229 10.932 C 0.312 10.993 0.432 11.081 0.576 11.19 C 0.866 11.409 1.249 11.706 1.628 12.025 C 2.013 12.349 2.366 12.671 2.613 12.942 C 2.738 13.079 2.81 13.175 2.843 13.229 C 2.898 13.317 2.8 13.205 2.8 12.963 L 5.2 12.963 Z M 1.516 8.9 C 1.483 8.876 1.391 8.782 1.306 8.613 C 1.221 8.445 1.2 8.315 1.2 8.27 L -1.2 8.27 C -1.2 8.784 -1.042 9.285 -0.838 9.692 C -0.633 10.099 -0.325 10.523 0.084 10.827 L 1.516 8.9 Z M 1.2 8.27 L 1.2 4.667 L -1.2 4.667 L -1.2 8.27 L 1.2 8.27 Z M 1.2 4.667 C 1.2 4.142 1.599 3.793 2 3.793 L 2 1.393 C 0.192 1.393 -1.2 2.9 -1.2 4.667 L 1.2 4.667 Z M 0.8 2.593 L 0.8 5.704 L 3.2 5.704 L 3.2 2.593 L 0.8 2.593 Z M 2 6.904 L 3 6.904 L 3 4.504 L 2 4.504 L 2 6.904 Z M 4.2 5.704 L 4.2 0.864 L 1.8 0.864 L 1.8 5.704 L 4.2 5.704 Z M 4.2 0.864 C 4.2 1.008 4.077 1.2 3.833 1.2 L 3.833 -1.2 C 2.669 -1.2 1.8 -0.234 1.8 0.864 L 4.2 0.864 Z M 3.833 1.2 C 4.05 1.2 4.3 1.395 4.3 1.728 L 6.7 1.728 C 6.7 0.152 5.458 -1.2 3.833 -1.2 L 3.833 1.2 Z M 6.7 1.728 L 6.7 1.383 L 4.3 1.383 L 4.3 1.728 L 6.7 1.728 Z M 6.7 1.383 C 6.7 1.527 6.577 1.719 6.333 1.719 L 6.333 -0.681 C 5.169 -0.681 4.3 0.284 4.3 1.383 L 6.7 1.383 Z M 6.333 1.719 C 6.55 1.719 6.8 1.913 6.8 2.247 L 9.2 2.247 C 9.2 0.671 7.958 -0.681 6.333 -0.681 L 6.333 1.719 Z M 9.2 2.247 L 9.2 1.901 L 6.8 1.901 L 6.8 2.247 L 9.2 2.247 Z M 9.2 1.901 C 9.2 2.065 9.077 2.184 8.93 2.196 L 8.737 -0.196 C 7.669 -0.11 6.8 0.782 6.8 1.901 L 9.2 1.901 Z M 8.785 2.199 C 9.05 2.21 9.3 2.443 9.3 2.765 L 11.7 2.765 C 11.7 1.179 10.458 -0.136 8.882 -0.199 L 8.785 2.199 Z M 11.7 2.765 L 11.7 2.42 L 9.3 2.42 L 9.3 2.765 L 11.7 2.765 Z M 11.7 2.42 C 11.7 2.564 11.577 2.756 11.333 2.756 L 11.333 0.356 C 10.169 0.356 9.3 1.321 9.3 2.42 L 11.7 2.42 Z M 11.333 2.756 C 11.55 2.756 11.8 2.95 11.8 3.284 L 14.2 3.284 C 14.2 1.708 12.958 0.356 11.333 0.356 L 11.333 2.756 Z M 11.8 3.284 L 11.8 8.004 L 14.2 8.004 L 14.2 3.284 L 11.8 3.284 Z M 11.8 8.004 C 11.8 8.132 11.768 8.36 11.691 8.63 C 11.615 8.898 11.52 9.117 11.448 9.236 L 13.501 10.479 C 13.717 10.122 13.885 9.689 13.999 9.287 C 14.113 8.887 14.2 8.427 14.2 8.004 L 11.8 8.004 Z M 12.475 9.857 C 11.466 9.207 11.466 9.207 11.466 9.207 C 11.466 9.207 11.466 9.207 11.466 9.208 C 11.466 9.208 11.465 9.208 11.465 9.208 C 11.465 9.209 11.465 9.209 11.464 9.21 C 11.463 9.212 11.462 9.214 11.46 9.216 C 11.457 9.222 11.452 9.229 11.446 9.238 C 11.434 9.257 11.417 9.284 11.395 9.319 C 11.352 9.387 11.291 9.485 11.219 9.604 C 11.074 9.841 10.88 10.17 10.684 10.528 C 10.491 10.882 10.285 11.285 10.124 11.669 C 9.984 12.001 9.8 12.495 9.8 12.963 L 12.2 12.963 C 12.2 13.023 12.2 12.924 12.337 12.597 C 12.453 12.321 12.615 11.999 12.79 11.679 C 12.963 11.363 13.137 11.068 13.269 10.851 C 13.335 10.743 13.39 10.656 13.427 10.596 C 13.446 10.566 13.46 10.543 13.47 10.528 C 13.475 10.52 13.478 10.515 13.481 10.511 C 13.482 10.51 13.482 10.508 13.483 10.508 C 13.483 10.507 13.483 10.507 13.483 10.507 C 13.483 10.507 13.483 10.507 13.483 10.507 C 13.483 10.507 13.483 10.507 13.483 10.507 C 13.483 10.507 13.483 10.507 12.475 9.857 Z M 9.8 12.963 L 9.8 14 L 12.2 14 L 12.2 12.963 L 9.8 12.963 Z M 11 12.8 L 10 12.8 L 10 15.2 L 11 15.2 L 11 12.8 Z",
    fill: "rgb(54,59,62)",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(54,59,62)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.25))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.477 12.891 C 10.496 13.589 9.296 14 8 14 C 4.686 14 2 11.314 2 8 C 2 6.704 2.411 5.504 3.109 4.523 L 11.477 12.891 L 11.477 12.891 Z M 12.891 11.477 C 13.589 10.496 14 9.296 14 8 C 14 4.686 11.314 2 8 2 C 6.704 2 5.504 2.411 4.523 3.109 L 12.891 11.477 L 12.891 11.477 Z M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 L 8 16 Z",
    fill: "rgb(54,59,62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.109 4.523 L 3.816 3.816 L 2.98 2.98 L 2.295 3.943 L 3.109 4.523 Z M 4.523 3.109 L 3.943 2.295 L 2.98 2.98 L 3.816 3.816 L 4.523 3.109 Z M 10.896 12.076 C 10.079 12.658 9.081 13 8 13 L 8 15 C 9.511 15 10.912 14.52 12.057 13.705 L 10.896 12.076 Z M 8 13 C 5.239 13 3 10.761 3 8 L 1 8 C 1 11.866 4.134 15 8 15 L 8 13 Z M 3 8 C 3 6.919 3.342 5.921 3.924 5.104 L 2.295 3.943 C 1.48 5.088 1 6.489 1 8 L 3 8 Z M 2.402 5.231 L 10.769 13.598 L 12.184 12.184 L 3.816 3.816 L 2.402 5.231 Z M 13.705 12.057 C 14.52 10.912 15 9.511 15 8 L 13 8 C 13 9.081 12.658 10.079 12.076 10.896 L 13.705 12.057 Z M 15 8 C 15 4.134 11.866 1 8 1 L 8 3 C 10.761 3 13 5.239 13 8 L 15 8 Z M 8 1 C 6.489 1 5.088 1.48 3.943 2.295 L 5.104 3.924 C 5.921 3.342 6.919 3 8 3 L 8 1 Z M 3.816 3.816 L 12.184 12.184 L 13.598 10.769 L 5.231 2.402 L 3.816 3.816 Z M 8 17 C 12.971 17 17 12.971 17 8 L 15 8 C 15 11.866 11.866 15 8 15 L 8 17 Z M 17 8 C 17 3.029 12.971 -1 8 -1 L 8 1 C 11.866 1 15 4.134 15 8 L 17 8 Z M 8 -1 C 3.029 -1 -1 3.029 -1 8 L 1 8 C 1 4.134 4.134 1 8 1 L 8 -1 Z M -1 8 C -1 12.971 3.029 17 8 17 L 8 15 C 4.134 15 1 11.866 1 8 L -1 8 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Cursor Type=Default
    "cursorType=default": __body0,
    // figma: Cursor Type=Link
    "cursorType=link": __body1,
    // figma: Cursor Type=Scroll
    "cursorType=scroll": __body2,
    // figma: Cursor Type=Help
    "cursorType=help": __body3,
    // figma: Cursor Type=wait
    "cursorType=wait": __body4,
    // figma: Cursor Type=Text
    "cursorType=text": __body5,
    // figma: Cursor Type=Copy
    "cursorType=copy": __body6,
    // figma: Cursor Type=Not Allowed
    "cursorType=not allowed": __body7,
    // figma: Cursor Type=Zoom In
    "cursorType=zoom in": __body8,
    // figma: Cursor Type=Zoom Out
    "cursorType=zoom out": __body9,
    // figma: Cursor Type=Grab
    "cursorType=grab": __body10,
    // figma: Cursor Type=Grabbing
    "cursorType=grabbing": __body11,
    // figma: Cursor Type=Unavailable
    "cursorType=unavailable": __body12
  };
  return (__impls[__vkey_Cursor(props)] ?? __body0)();
}

// figma node: 136:22887 .baseArowAropDownDuplicate
function BaseArowAropDownDuplicate2(_p = {}) {
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
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 10,
      width: 10,
      height: 5,
      color: "rgba(0,0,0,0.56)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
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
  })));
}

// figma node: 170:1509 .baseInput/Type3
function BaseInputType3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 424,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Help text "));
}

// figma node: 234:33338 Group 4583
function Group4583(_p = {}) {
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
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 10,
      width: 10,
      height: 5,
      color: "rgba(0,0,0,0.56)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
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
  })));
}

// figma node: 236:35942 Frame 4736
function Frame4736(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.500px",
      color: "rgba(0,0,0,0.56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Label"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Group4583, null))));
}

// figma node: 287:22504 Component 10
function Component10(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Frame4736, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328
    },
    text1: "Input text"
  }), /*#__PURE__*/React.createElement(BaseInputType3, {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20
    }
  }));
}

// figma node: 190:33303 $label
function Label(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 54,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 4px 15px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "0.500px",
      color: "rgb(37,40,43)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Input text")));
}

// figma node: 234:33359 Parent Frame
function ParentFrame(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Component3, {
    property1: "component 2",
    property2: ".baselabel"
  })), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, null))));
}

// figma node: 286:22411 Component 8
function Component8(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ParentFrame, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328
    }
  }), /*#__PURE__*/React.createElement(BaseInputType3, {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20
    }
  }));
}

// figma node: 287:22500 Expandable Main component
function ExpandableMainComponent(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 56,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement(BaseInputType3, {
    style: {
      position: "absolute",
      left: 0,
      top: 55,
      width: 328,
      height: 20
    }
  }));
}

// figma node: 235:34964 Parent Frame
function ParentFrame2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, null))));
}

// figma node: 287:28149 Input Field (64 variants)
const __venc_InputField = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InputField = p => "state=" + __venc_InputField(p.state) + '|' + "dropdown=" + __venc_InputField(p.dropdown) + '|' + "lable=" + __venc_InputField(p.lable) + '|' + "helpText=" + __venc_InputField(p.helpText) + '|' + "paragraph=" + __venc_InputField(p.paragraph);
function InputField(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "enabled",
    dropdown: _p.dropdown ?? "on",
    lable: _p.lable ?? "on",
    helpText: _p.helpText ?? "on",
    paragraph: _p.paragraph ?? "off"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ParentFrame, {
    style: {
      position: "relative",
      width: 328,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ParentFrame2, {
    style: {
      position: "relative",
      width: 328,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Help text "))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Help text "))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Component8, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Help text "))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Help text "))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 56,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Frame4736, {
    style: {
      position: "relative",
      width: 328,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Input text"
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ExpandableMainComponent, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 56,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 55,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Help text "))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 56,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 16px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Component3, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    property1: "component 2",
    property2: ".baselabel"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BaseArowAropDownDuplicate2, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 55,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Help text "))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Component10, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 258,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.500px",
      color: "rgba(0,0,0,0.56)",
      flexShrink: 0
    }
  }, "Input text"), /*#__PURE__*/React.createElement(Group4583, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 16px 4px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Help text "))));
  const __impls = {
    // figma: State=Enabled, Dropdown=On, Lable=On, Help Text=Off, Paragraph=Off
    "state=enabled|dropdown=on|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Enabled, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=Off
    "state=enabled|dropdown=off|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Disabled, Dropdown=On, Lable=On, Help Text=Off, Paragraph=Off
    "state=disabled|dropdown=on|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Disabled, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=Off
    "state=disabled|dropdown=off|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Focus, Dropdown=On, Lable=On, Help Text=Off, Paragraph=Off
    "state=focus|dropdown=on|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Focus, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=Off
    "state=focus|dropdown=off|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Error, Dropdown=On, Lable=On, Help Text=Off, Paragraph=Off
    "state=error|dropdown=on|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Error, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=Off
    "state=error|dropdown=off|lable=on|helpText=off|paragraph=off": __body0,
    // figma: State=Enabled, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=Off
    "state=enabled|dropdown=on|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Enabled, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=Off
    "state=enabled|dropdown=off|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Disabled, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=Off
    "state=disabled|dropdown=on|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Disabled, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=Off
    "state=disabled|dropdown=off|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Focus, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=Off
    "state=focus|dropdown=on|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Focus, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=Off
    "state=focus|dropdown=off|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Error, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=Off
    "state=error|dropdown=on|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Error, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=Off
    "state=error|dropdown=off|lable=off|helpText=off|paragraph=off": __body1,
    // figma: State=Enabled, Dropdown=On, Lable=Off, Help Text=On, Paragraph=Off
    "state=enabled|dropdown=on|lable=off|helpText=on|paragraph=off": __body2,
    // figma: State=Enabled, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=Off
    "state=enabled|dropdown=off|lable=off|helpText=on|paragraph=off": __body3,
    // figma: State=Disabled, Dropdown=On, Lable=Off, Help Text=On, Paragraph=Off
    "state=disabled|dropdown=on|lable=off|helpText=on|paragraph=off": __body2,
    // figma: State=Disabled, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=Off
    "state=disabled|dropdown=off|lable=off|helpText=on|paragraph=off": __body3,
    // figma: State=Focus, Dropdown=On, Lable=Off, Help Text=On, Paragraph=Off
    "state=focus|dropdown=on|lable=off|helpText=on|paragraph=off": __body2,
    // figma: State=Focus, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=Off
    "state=focus|dropdown=off|lable=off|helpText=on|paragraph=off": __body3,
    // figma: State=Error, Dropdown=On, Lable=Off, Help Text=On, Paragraph=Off
    "state=error|dropdown=on|lable=off|helpText=on|paragraph=off": __body2,
    // figma: State=Error, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=Off
    "state=error|dropdown=off|lable=off|helpText=on|paragraph=off": __body3,
    // figma: State=Enabled, Dropdown=On, Lable=On, Help Text=On, Paragraph=Off
    "state=enabled|dropdown=on|lable=on|helpText=on|paragraph=off": __body4,
    // figma: State=Enabled, Dropdown=Off, Lable=On, Help Text=On, Paragraph=Off
    "state=enabled|dropdown=off|lable=on|helpText=on|paragraph=off": __body5,
    // figma: State=Disabled, Dropdown=On, Lable=On, Help Text=On, Paragraph=Off
    "state=disabled|dropdown=on|lable=on|helpText=on|paragraph=off": __body4,
    // figma: State=Disabled, Dropdown=Off, Lable=On, Help Text=On, Paragraph=Off
    "state=disabled|dropdown=off|lable=on|helpText=on|paragraph=off": __body6,
    // figma: State=Focus, Dropdown=On, Lable=On, Help Text=On, Paragraph=Off
    "state=focus|dropdown=on|lable=on|helpText=on|paragraph=off": __body4,
    // figma: State=Focus, Dropdown=Off, Lable=On, Help Text=On, Paragraph=Off
    "state=focus|dropdown=off|lable=on|helpText=on|paragraph=off": __body6,
    // figma: State=Error, Dropdown=On, Lable=On, Help Text=On, Paragraph=Off
    "state=error|dropdown=on|lable=on|helpText=on|paragraph=off": __body4,
    // figma: State=Error, Dropdown=Off, Lable=On, Help Text=On, Paragraph=Off
    "state=error|dropdown=off|lable=on|helpText=on|paragraph=off": __body6,
    // figma: State=Enabled, Dropdown=On, Lable=On, Help Text=Off, Paragraph=On
    "state=enabled|dropdown=on|lable=on|helpText=off|paragraph=on": __body7,
    // figma: State=Enabled, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=On
    "state=enabled|dropdown=off|lable=on|helpText=off|paragraph=on": __body8,
    // figma: State=Disabled, Dropdown=On, Lable=On, Help Text=Off, Paragraph=On
    "state=disabled|dropdown=on|lable=on|helpText=off|paragraph=on": __body7,
    // figma: State=Disabled, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=On
    "state=disabled|dropdown=off|lable=on|helpText=off|paragraph=on": __body8,
    // figma: State=Focus, Dropdown=On, Lable=On, Help Text=Off, Paragraph=On
    "state=focus|dropdown=on|lable=on|helpText=off|paragraph=on": __body7,
    // figma: State=Focus, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=On
    "state=focus|dropdown=off|lable=on|helpText=off|paragraph=on": __body8,
    // figma: State=Error, Dropdown=On, Lable=On, Help Text=Off, Paragraph=On
    "state=error|dropdown=on|lable=on|helpText=off|paragraph=on": __body7,
    // figma: State=Error, Dropdown=Off, Lable=On, Help Text=Off, Paragraph=On
    "state=error|dropdown=off|lable=on|helpText=off|paragraph=on": __body8,
    // figma: State=Enabled, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=On
    "state=enabled|dropdown=on|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Enabled, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=On
    "state=enabled|dropdown=off|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Disabled, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=On
    "state=disabled|dropdown=on|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Disabled, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=On
    "state=disabled|dropdown=off|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Focus, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=On
    "state=focus|dropdown=on|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Focus, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=On
    "state=focus|dropdown=off|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Error, Dropdown=On, Lable=Off, Help Text=Off, Paragraph=On
    "state=error|dropdown=on|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Error, Dropdown=Off, Lable=Off, Help Text=Off, Paragraph=On
    "state=error|dropdown=off|lable=off|helpText=off|paragraph=on": __body9,
    // figma: State=Enabled, Dropdown=On, Lable=On, Help Text=On, Paragraph=On
    "state=enabled|dropdown=on|lable=on|helpText=on|paragraph=on": __body10,
    // figma: State=Enabled, Dropdown=Off, Lable=On, Help Text=On, Paragraph=On
    "state=enabled|dropdown=off|lable=on|helpText=on|paragraph=on": __body11,
    // figma: State=Disabled, Dropdown=On, Lable=On, Help Text=On, Paragraph=On
    "state=disabled|dropdown=on|lable=on|helpText=on|paragraph=on": __body10,
    // figma: State=Disabled, Dropdown=Off, Lable=On, Help Text=On, Paragraph=On
    "state=disabled|dropdown=off|lable=on|helpText=on|paragraph=on": __body12,
    // figma: State=Focus, Dropdown=On, Lable=On, Help Text=On, Paragraph=On
    "state=focus|dropdown=on|lable=on|helpText=on|paragraph=on": __body10,
    // figma: State=Focus, Dropdown=Off, Lable=On, Help Text=On, Paragraph=On
    "state=focus|dropdown=off|lable=on|helpText=on|paragraph=on": __body11,
    // figma: State=Error, Dropdown=On, Lable=On, Help Text=On, Paragraph=On
    "state=error|dropdown=on|lable=on|helpText=on|paragraph=on": __body10,
    // figma: State=Error, Dropdown=Off, Lable=On, Help Text=On, Paragraph=On
    "state=error|dropdown=off|lable=on|helpText=on|paragraph=on": __body11,
    // figma: State=Enabled, Dropdown=On, Lable=Off, Help Text=On, Paragraph=On
    "state=enabled|dropdown=on|lable=off|helpText=on|paragraph=on": __body13,
    // figma: State=Enabled, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=On
    "state=enabled|dropdown=off|lable=off|helpText=on|paragraph=on": __body14,
    // figma: State=Disabled, Dropdown=On, Lable=Off, Help Text=On, Paragraph=On
    "state=disabled|dropdown=on|lable=off|helpText=on|paragraph=on": __body13,
    // figma: State=Disabled, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=On
    "state=disabled|dropdown=off|lable=off|helpText=on|paragraph=on": __body14,
    // figma: State=Focus, Dropdown=On, Lable=Off, Help Text=On, Paragraph=On
    "state=focus|dropdown=on|lable=off|helpText=on|paragraph=on": __body13,
    // figma: State=Focus, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=On
    "state=focus|dropdown=off|lable=off|helpText=on|paragraph=on": __body14,
    // figma: State=Error, Dropdown=On, Lable=Off, Help Text=On, Paragraph=On
    "state=error|dropdown=on|lable=off|helpText=on|paragraph=on": __body13,
    // figma: State=Error, Dropdown=Off, Lable=Off, Help Text=On, Paragraph=On
    "state=error|dropdown=off|lable=off|helpText=on|paragraph=on": __body14
  };
  return (__impls[__vkey_InputField(props)] ?? __body4)();
}

// figma node: 111:23105 Radio Button (3 variants)
const __venc_RadioButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RadioButton = p => "state=" + __venc_RadioButton(p.state) + '|' + "disabled=" + __venc_RadioButton(p.disabled);
function RadioButton(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "check",
    disabled: _p.disabled ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 8.022 0 6.089 0.586 4.444 1.685 C 2.8 2.784 1.518 4.346 0.761 6.173 C 0.004 8 -0.194 10.011 0.192 11.951 C 0.578 13.891 1.53 15.673 2.929 17.071 C 4.327 18.47 6.109 19.422 8.049 19.808 C 9.989 20.194 12 19.996 13.827 19.239 C 15.654 18.482 17.216 17.2 18.315 15.556 C 19.414 13.911 20 11.978 20 10 C 20 8.687 19.741 7.386 19.239 6.173 C 18.736 4.96 18 3.858 17.071 2.929 C 16.142 2 15.04 1.264 13.827 0.761 C 12.614 0.259 11.313 0 10 0 L 10 0 Z M 10 18 C 8.418 18 6.871 17.531 5.555 16.652 C 4.24 15.773 3.214 14.523 2.609 13.061 C 2.003 11.6 1.845 9.991 2.154 8.439 C 2.462 6.887 3.224 5.462 4.343 4.343 C 5.462 3.224 6.887 2.462 8.439 2.154 C 9.991 1.845 11.6 2.003 13.061 2.609 C 14.523 3.214 15.773 4.24 16.652 5.555 C 17.531 6.871 18 8.418 18 10 C 18 12.122 17.157 14.157 15.657 15.657 C 14.157 17.157 12.122 18 10 18 L 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 C 4.011 0 3.044 0.293 2.222 0.843 C 1.4 1.392 0.759 2.173 0.381 3.087 C 0.002 4 -0.097 5.006 0.096 5.975 C 0.289 6.945 0.765 7.836 1.464 8.536 C 2.164 9.235 3.055 9.711 4.025 9.904 C 4.994 10.097 6 9.998 6.913 9.619 C 7.827 9.241 8.608 8.6 9.157 7.778 C 9.707 6.956 10 5.989 10 5 C 10 3.674 9.473 2.402 8.536 1.464 C 7.598 0.527 6.326 0 5 0 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(25,133,72)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 8.022 0 6.089 0.586 4.444 1.685 C 2.8 2.784 1.518 4.346 0.761 6.173 C 0.004 8 -0.194 10.011 0.192 11.951 C 0.578 13.891 1.53 15.673 2.929 17.071 C 4.327 18.47 6.109 19.422 8.049 19.808 C 9.989 20.194 12 19.996 13.827 19.239 C 15.654 18.482 17.216 17.2 18.315 15.556 C 19.414 13.911 20 11.978 20 10 C 20 8.687 19.741 7.386 19.239 6.173 C 18.736 4.96 18 3.858 17.071 2.929 C 16.142 2 15.04 1.264 13.827 0.761 C 12.614 0.259 11.313 0 10 0 L 10 0 Z M 10 18 C 8.418 18 6.871 17.531 5.555 16.652 C 4.24 15.773 3.214 14.523 2.609 13.061 C 2.003 11.6 1.845 9.991 2.154 8.439 C 2.462 6.887 3.224 5.462 4.343 4.343 C 5.462 3.224 6.887 2.462 8.439 2.154 C 9.991 1.845 11.6 2.003 13.061 2.609 C 14.523 3.214 15.773 4.24 16.652 5.555 C 17.531 6.871 18 8.418 18 10 C 18 12.122 17.157 14.157 15.657 15.657 C 14.157 17.157 12.122 18 10 18 L 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 C 4.011 0 3.044 0.293 2.222 0.843 C 1.4 1.392 0.759 2.173 0.381 3.087 C 0.002 4 -0.097 5.006 0.096 5.975 C 0.289 6.945 0.765 7.836 1.464 8.536 C 2.164 9.235 3.055 9.711 4.025 9.904 C 4.994 10.097 6 9.998 6.913 9.619 C 7.827 9.241 8.608 8.6 9.157 7.778 C 9.707 6.956 10 5.989 10 5 C 10 3.674 9.473 2.402 8.536 1.464 C 7.598 0.527 6.326 0 5 0 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 20 C 8.022 20 6.089 19.414 4.444 18.315 C 2.8 17.216 1.518 15.654 0.761 13.827 C 0.004 12 -0.194 9.989 0.192 8.049 C 0.578 6.109 1.53 4.327 2.929 2.929 C 4.327 1.53 6.109 0.578 8.049 0.192 C 9.989 -0.194 12 0.004 13.827 0.761 C 15.654 1.518 17.216 2.8 18.315 4.444 C 19.414 6.089 20 8.022 20 10 C 20 12.652 18.946 15.196 17.071 17.071 C 15.196 18.946 12.652 20 10 20 L 10 20 Z M 10 2 C 8.418 2 6.871 2.469 5.555 3.348 C 4.24 4.227 3.214 5.477 2.609 6.939 C 2.003 8.4 1.845 10.009 2.154 11.561 C 2.462 13.113 3.224 14.538 4.343 15.657 C 5.462 16.776 6.887 17.538 8.439 17.846 C 9.991 18.155 11.6 17.997 13.061 17.391 C 14.523 16.786 15.773 15.76 16.652 14.445 C 17.531 13.129 18 11.582 18 10 C 18 7.878 17.157 5.843 15.657 4.343 C 14.157 2.843 12.122 2 10 2 L 10 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: State=Check, Disabled=No
    "state=check|disabled=false": __body0,
    // figma: State=Check, Disabled=Yes
    "state=check|disabled=true": __body1,
    // figma: State=Uncheck, Disabled=Yes
    "state=uncheck|disabled=true": __body2
  };
  return (__impls[__vkey_RadioButton(props)] ?? __body1)();
}

// figma node: 179:510 Spacing (10 variants)
const __venc_Spacing = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Spacing = p => "spacing=" + __venc_Spacing(p.spacing);
function Spacing(_p = {}) {
  const props = {
    ..._p,
    spacing: _p.spacing ?? "16"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      backgroundColor: "rgb(255,229,229)",
      outline: "1px dashed rgb(255,96,96)",
      outlineOffset: "-1px"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      backgroundColor: "rgb(247,217,255)",
      outline: "1px dashed rgb(204,96,255)",
      outlineOffset: "-1px"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      backgroundColor: "rgb(255,203,215)",
      outline: "1px dashed rgb(255,96,172)",
      outlineOffset: "-1px"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 4,
      height: 4,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: 4,
      backgroundColor: "rgb(240,194,194)",
      outline: "1px dashed rgb(210,0,0)",
      outlineOffset: "-1px"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      backgroundColor: "rgb(253,229,215)",
      outline: "1px dashed rgb(206,85,46)",
      outlineOffset: "-1px"
    }
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
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
      backgroundColor: "rgb(255,226,183)",
      outline: "1px dashed rgb(199,139,49)",
      outlineOffset: "-1px"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 28,
      height: 28,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28,
      height: 28,
      backgroundColor: "rgb(235,255,178)",
      outline: "1px dashed rgb(138,173,39)",
      outlineOffset: "-1px"
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      backgroundColor: "rgb(185,255,188)",
      outline: "1px dashed rgb(25,153,30)",
      outlineOffset: "-1px"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      opacity: 0.48,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48,
      backgroundColor: "rgb(181,235,248)",
      outline: "1px dashed rgb(43,132,170)",
      outlineOffset: "-1px"
    }
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 56,
      height: 56,
      opacity: 0.48,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56,
      backgroundColor: "rgb(206,211,255)",
      outline: "1px dashed rgb(48,25,140)",
      outlineOffset: "-1px"
    }
  }));
  const __impls = {
    // figma: Spacing=16
    "spacing=16": __body0,
    // figma: Spacing=12
    "spacing=12": __body1,
    // figma: Spacing=8
    "spacing=8": __body2,
    // figma: Spacing=40
    "spacing=40": __body3,
    // figma: Spacing=20
    "spacing=20": __body4,
    // figma: Spacing=24
    "spacing=24": __body5,
    // figma: Spacing=28
    "spacing=28": __body6,
    // figma: Spacing=32
    "spacing=32": __body7,
    // figma: Spacing=48
    "spacing=48": __body8,
    // figma: Spacing=56
    "spacing=56": __body9
  };
  return (__impls[__vkey_Spacing(props)] ?? __body0)();
}

// figma node: 14:5814 timelapse (5 variants)
const __venc_Timelapse = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Timelapse = p => "style2=" + __venc_Timelapse(p.style2);
function Timelapse(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "filled"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.24 5.76 C 13.07 4.59 11.54 4 10 4 L 10 10 L 5.76 14.24 C 8.1 16.58 11.9 16.58 14.25 14.24 C 16.59 11.9 16.59 8.1 14.24 5.76 L 14.24 5.76 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
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
      top: 1.99,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.24 5.76 C 13.07 4.59 11.54 4 10 4 L 10 10 L 5.76 14.24 C 8.1 16.58 11.9 16.58 14.25 14.24 C 16.59 11.9 16.59 8.1 14.24 5.76 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 L 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 3.99,
      width: 16,
      height: 16,
      opacity: 0.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 3.58 0 0 3.58 0 8 C 0 12.42 3.58 16 8 16 C 12.42 16 16 12.42 16 8 C 16 3.58 12.42 0 8 0 L 8 0 Z M 12.25 12.24 C 9.9 14.58 6.1 14.58 3.76 12.24 L 8 8 L 8 2 C 9.54 2 11.07 2.59 12.24 3.76 C 14.59 6.1 14.59 9.9 12.25 12.24 L 12.25 12.24 Z",
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
      top: 1.99,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.24 5.76 C 13.07 4.59 11.54 4 10 4 L 10 10 L 5.76 14.24 C 8.1 16.58 11.9 16.58 14.25 14.24 C 16.59 11.9 16.59 8.1 14.24 5.76 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 L 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Style=rounded
    "style2=rounded": __body0,
    // figma: Style=filled
    "style2=filled": __body0,
    // figma: Style=outlined
    "style2=outlined": __body1,
    // figma: Style=sharp
    "style2=sharp": __body0,
    // figma: Style=two-tone
    "style2=two-tone": __body2
  };
  return (__impls[__vkey_Timelapse(props)] ?? __body0)();
}

// figma node: 179:319 Toggle (2 variants)
const __venc_Toggle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Toggle = p => "state=" + __venc_Toggle(p.state);
function Toggle(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 6,
      width: 20,
      height: 12,
      overflow: "hidden",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 12,
      borderRadius: 6,
      backgroundColor: "rgb(196,196,196)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 6,
      width: 20,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 12,
      borderRadius: 6,
      backgroundColor: "rgb(202,204,207)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 1,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(160,164,168)"
    }
  })));
  const __impls = {
    // figma: State=No
    "state=false": __body0,
    // figma: State=Yes
    "state=true": __body1
  };
  return (__impls[__vkey_Toggle(props)] ?? __body0)();
}

// figma node: 93:411 .baseCoverName
function BaseCoverName(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 8.9375,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(37,40,43)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Epic Name"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 2.75,
      whiteSpace: "nowrap",
      lineHeight: "3.300px",
      color: "rgb(37,40,43)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Simple two-liner that succintly describes what this feature is and what problem it solves."));
}

// figma node: 93:414 .baseOwnerName
function BaseOwnerName(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 17,
      height: 8.85,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 3.85,
      width: 17,
      height: 5,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 3.8500001430511475,
      whiteSpace: "nowrap",
      lineHeight: "4.400px",
      color: "rgb(37,40,43)"
    }
  }, props.text1 ?? "@slackID"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 3,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 2.200000047683716,
      whiteSpace: "nowrap",
      lineHeight: "2.200px",
      letterSpacing: "0.040em",
      color: "rgb(37,40,43)",
      textTransform: "uppercase"
    }
  }, props.text2 ?? "Owner"));
}

// figma node: 93:390 .baseCover (6 variants)
const __venc_BaseCover = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_BaseCover = p => "research=" + __venc_BaseCover(p.research) + '|' + "inDesign=" + __venc_BaseCover(p.inDesign) + '|' + "onHold=" + __venc_BaseCover(p.onHold) + '|' + "testing=" + __venc_BaseCover(p.testing) + '|' + "engineering=" + __venc_BaseCover(p.engineering) + '|' + "developed=" + __venc_BaseCover(p.developed);
function BaseCover(_p = {}) {
  const props = {
    ..._p,
    research: _p.research ?? true,
    inDesign: _p.inDesign ?? false,
    onHold: _p.onHold ?? false,
    testing: _p.testing ?? false,
    engineering: _p.engineering ?? false,
    developed: _p.developed ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66,
      overflow: "hidden",
      backgroundColor: "rgb(202,204,207)"
    }
  }, /*#__PURE__*/React.createElement(BaseCoverName, {
    style: {
      position: "absolute",
      left: 16,
      top: 21,
      width: 100
    },
    text2: "Simple two-liner that succintly describes what this feature is and what problem it solves. Make in short and crisp :p"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.256,
      top: 10.278,
      width: 8.383,
      height: 8.383,
      fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.382530212402344,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(202,204,207)"
    }
  }, props.text1 ?? "🔍"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 47,
      width: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 17,
      height: 8.85,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(BaseOwnerName, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 2.200000047683716,
      whiteSpace: "nowrap",
      lineHeight: "2.200px",
      letterSpacing: "0.040em",
      color: "rgb(37,40,43)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text2 ?? "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 3.8500001430511475,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "4.400px",
      color: "rgb(37,40,43)",
      flexShrink: 0
    }
  }, props.text3 ?? "Scope & Strategy"))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66,
      overflow: "hidden",
      backgroundColor: "rgb(202,204,207)"
    }
  }, /*#__PURE__*/React.createElement(BaseCoverName, {
    style: {
      position: "absolute",
      left: 16,
      top: 21,
      width: 100
    },
    text2: "Simple two-liner that succintly describes what this feature is and what problem it solves. Make in short and crisp :p"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.256,
      top: 10.278,
      width: 8.383,
      height: 8.383,
      fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.382530212402344,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(202,204,207)"
    }
  }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 47,
      width: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(BaseOwnerName, {
    style: {
      position: "relative",
      width: 17,
      height: 8.85,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 2.200000047683716,
      whiteSpace: "nowrap",
      lineHeight: "2.200px",
      letterSpacing: "0.040em",
      color: "rgb(37,40,43)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 3.8500001430511475,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "4.400px",
      color: "rgb(37,40,43)",
      flexShrink: 0
    }
  }, "Design in Progress")))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BaseCover, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    },
    text1: "✋",
    text3: "On-Hold",
    research: true,
    inDesign: false,
    onHold: false,
    testing: false,
    engineering: false,
    developed: false
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66,
      overflow: "hidden",
      backgroundColor: "rgb(202,204,207)"
    }
  }, /*#__PURE__*/React.createElement(BaseCoverName, {
    style: {
      position: "absolute",
      left: 16,
      top: 21,
      width: 100
    },
    text2: "Simple two-liner that succintly describes what this feature is and what problem it solves. Make in short and crisp :p"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.256,
      top: 10.278,
      width: 8.383,
      height: 8.383,
      fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.382530212402344,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em"
    }
  }, "\uD83D\uDCD0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 47,
      width: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(BaseOwnerName, {
    style: {
      position: "relative",
      width: 17,
      height: 8.85,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 2.200000047683716,
      whiteSpace: "nowrap",
      lineHeight: "2.200px",
      letterSpacing: "0.040em",
      color: "rgb(37,40,43)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 3.8500001430511475,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "4.400px",
      color: "rgb(37,40,43)",
      flexShrink: 0
    }
  }, "In Testing")))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66,
      overflow: "hidden",
      backgroundColor: "rgb(202,204,207)"
    }
  }, /*#__PURE__*/React.createElement(BaseCoverName, {
    style: {
      position: "absolute",
      left: 16,
      top: 21,
      width: 100
    },
    text2: "Simple two-liner that succintly describes what this feature is and what problem it solves. Make in short and crisp :p"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.256,
      top: 10.278,
      width: 8.383,
      height: 8.383,
      fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 8.382530212402344,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em"
    }
  }, "\uD83D\uDCD0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 47,
      width: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(BaseOwnerName, {
    style: {
      position: "relative",
      width: 17,
      height: 8.85,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 2.200000047683716,
      whiteSpace: "nowrap",
      lineHeight: "2.200px",
      letterSpacing: "0.040em",
      color: "rgb(37,40,43)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 3.8500001430511475,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "4.400px",
      color: "rgb(37,40,43)",
      flexShrink: 0
    }
  }, " Engineering Ready")))))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BaseCover, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    },
    text1: "🏆",
    text3: "Developed",
    research: true,
    inDesign: false,
    onHold: false,
    testing: false,
    engineering: false,
    developed: false
  }));
  const __impls = {
    // figma: Research=Yes, In Design=No, On - Hold=No, Testing=No, Engineering=No, Developed=No
    "research=true|inDesign=false|onHold=false|testing=false|engineering=false|developed=false": __body0,
    // figma: Research=No, In Design=Yes, On - Hold=No, Testing=No, Engineering=No, Developed=No
    "research=false|inDesign=true|onHold=false|testing=false|engineering=false|developed=false": __body1,
    // figma: Research=No, On - Hold=Yes, Testing=No, Engineering=No, Developed=No
    "research=false|inDesign=|onHold=true|testing=false|engineering=false|developed=false": __body2,
    // figma: Research=No, In Design=No, On - Hold=No, Testing=Yes, Engineering=No, Developed=No
    "research=false|inDesign=false|onHold=false|testing=true|engineering=false|developed=false": __body3,
    // figma: Research=No, In Design=No, On - Hold=No, Testing=No, Engineering=Yes, Developed=No
    "research=false|inDesign=false|onHold=false|testing=false|engineering=true|developed=false": __body4,
    // figma: Research=No, In Design=No, On - Hold=No, Testing=No, Engineering=No, Developed=Yes
    "research=false|inDesign=false|onHold=false|testing=false|engineering=false|developed=true": __body5
  };
  return (__impls[__vkey_BaseCover(props)] ?? __body0)();
}

// figma node: 9:15  Cancel 
function Cancel(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.47 0 0 4.47 0 10 C 0 15.53 4.47 20 10 20 C 15.53 20 20 15.53 20 10 C 20 4.47 15.53 0 10 0 Z M 14.3 14.3 C 13.91 14.69 13.28 14.69 12.89 14.3 L 10 11.41 L 7.11 14.3 C 6.72 14.69 6.09 14.69 5.7 14.3 C 5.31 13.91 5.31 13.28 5.7 12.89 L 8.59 10 L 5.7 7.11 C 5.31 6.72 5.31 6.09 5.7 5.7 C 6.09 5.31 6.72 5.31 7.11 5.7 L 10 8.59 L 12.89 5.7 C 13.28 5.31 13.91 5.31 14.3 5.7 C 14.69 6.09 14.69 6.72 14.3 7.11 L 11.41 10 L 14.3 12.89 C 14.68 13.27 14.68 13.91 14.3 14.3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 9:25  Check
function Check(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
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
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 7.29 14.29 L 3.7 10.7 C 3.31 10.31 3.31 9.68 3.7 9.29 C 4.09 8.9 4.72 8.9 5.11 9.29 L 8 12.17 L 14.88 5.29 C 15.27 4.9 15.9 4.9 16.29 5.29 C 16.68 5.68 16.68 6.31 16.29 6.7 L 8.7 14.29 C 8.32 14.68 7.68 14.68 7.29 14.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 9:2  Hamburger
function Hamburger(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 12,
    viewBox: "0 0 18 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 6,
      width: 18,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 12 L 17 12 C 17.55 12 18 11.55 18 11 C 18 10.45 17.55 10 17 10 L 1 10 C 0.45 10 0 10.45 0 11 C 0 11.55 0.45 12 1 12 Z M 1 7 L 17 7 C 17.55 7 18 6.55 18 6 C 18 5.45 17.55 5 17 5 L 1 5 C 0.45 5 0 5.45 0 6 C 0 6.55 0.45 7 1 7 Z M 0 1 C 0 1.55 0.45 2 1 2 L 17 2 C 17.55 2 18 1.55 18 1 C 18 0.45 17.55 0 17 0 L 1 0 C 0.45 0 0 0.45 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 274:19  KYC
function KYC(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.010,
    height: 10.010,
    viewBox: "0 0 10.010 10.010",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 10.01,
      height: 10.01
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5 C 5.494 4.996 5.975 4.846 6.383 4.569 C 6.792 4.292 7.109 3.9 7.295 3.443 C 7.482 2.986 7.528 2.484 7.429 2 C 7.331 1.516 7.091 1.073 6.741 0.725 C 6.39 0.378 5.945 0.141 5.46 0.047 C 4.976 -0.048 4.474 0.002 4.019 0.192 C 3.563 0.382 3.174 0.702 2.9 1.113 C 2.626 1.524 2.48 2.006 2.48 2.5 C 2.479 2.83 2.543 3.158 2.669 3.463 C 2.796 3.768 2.982 4.045 3.216 4.278 C 3.451 4.51 3.729 4.694 4.036 4.818 C 4.342 4.942 4.67 5.004 5 5 Z M 5 6.26 C 3.33 6.26 0 7.09 0 8.76 L 0 9.38 C 0 9.547 0.066 9.707 0.185 9.825 C 0.303 9.944 0.463 10.01 0.63 10.01 L 9.39 10.01 C 9.555 10.007 9.713 9.94 9.829 9.822 C 9.945 9.704 10.01 9.545 10.01 9.38 L 10.01 8.76 C 10 7.09 6.66 6.26 5 6.26 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 5,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 5 C 1.265 5 1.52 4.895 1.707 4.707 C 1.895 4.52 2 4.265 2 4 L 2 2 L 4 2 C 4.265 2 4.52 1.895 4.707 1.707 C 4.895 1.52 5 1.265 5 1 C 5 0.735 4.895 0.48 4.707 0.293 C 4.52 0.105 4.265 0 4 0 L 2 0 C 1.47 0 0.961 0.211 0.586 0.586 C 0.211 0.961 0 1.47 0 2 L 0 4 C 0 4.265 0.105 4.52 0.293 4.707 C 0.48 4.895 0.735 5 1 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 3,
      width: 5,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 C 0 1.265 0.105 1.52 0.293 1.707 C 0.48 1.895 0.735 2 1 2 L 3 2 L 3 4 C 3 4.265 3.105 4.52 3.293 4.707 C 3.48 4.895 3.735 5 4 5 C 4.265 5 4.52 4.895 4.707 4.707 C 4.895 4.52 5 4.265 5 4 L 5 2 C 5 1.47 4.789 0.961 4.414 0.586 C 4.039 0.211 3.53 0 3 0 L 1 0 C 0.735 0 0.48 0.105 0.293 0.293 C 0.105 0.48 0 0.735 0 1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 16,
      width: 5,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1.265 0 1.52 0.105 1.707 0.293 C 1.895 0.48 2 0.735 2 1 L 2 3 L 4 3 C 4.265 3 4.52 3.105 4.707 3.293 C 4.895 3.48 5 3.735 5 4 C 5 4.265 4.895 4.52 4.707 4.707 C 4.52 4.895 4.265 5 4 5 L 2 5 C 1.47 5 0.961 4.789 0.586 4.414 C 0.211 4.039 0 3.53 0 3 L 0 1 C 0 0.735 0.105 0.48 0.293 0.293 C 0.48 0.105 0.735 0 1 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 5,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 3.735 0.105 3.48 0.293 3.293 C 0.48 3.105 0.735 3 1 3 L 3 3 L 3 1 C 3 0.735 3.105 0.48 3.293 0.293 C 3.48 0.105 3.735 0 4 0 C 4.265 0 4.52 0.105 4.707 0.293 C 4.895 0.48 5 0.735 5 1 L 5 3 C 5 3.53 4.789 4.039 4.414 4.414 C 4.039 4.789 3.53 5 3 5 L 1 5 C 0.735 5 0.48 4.895 0.293 4.707 C 0.105 4.52 0 4.265 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 106:40549 .baseArowAropDownDuplicate
function BaseArowAropDownDuplicate(_p = {}) {
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
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 10,
      width: 10,
      height: 5,
      color: "rgba(0,0,0,0.56)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 5 L 10 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
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
  })));
}

// figma node: 9:11 12px
function Px12(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 12,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      backgroundColor: "rgba(196,196,196,0.3)",
      outline: "1px dashed rgb(196,196,196)",
      outlineOffset: "-1px"
    }
  }));
}

// figma node: 244:20 3 dot
function Dot3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 16,
    viewBox: "0 0 4 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 4,
      width: 4,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 4 C 3.1 4 4 3.1 4 2 C 4 0.9 3.1 0 2 0 C 0.9 0 0 0.9 0 2 C 0 3.1 0.9 4 2 4 Z M 2 6 C 0.9 6 0 6.9 0 8 C 0 9.1 0.9 10 2 10 C 3.1 10 4 9.1 4 8 C 4 6.9 3.1 6 2 6 Z M 2 12 C 0.9 12 0 12.9 0 14 C 0 15.1 0.9 16 2 16 C 3.1 16 4 15.1 4 14 C 4 12.9 3.1 12 2 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 9:18 4px
function Px4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 4,
      height: 4,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: 4,
      backgroundColor: "rgba(174,163,60,0.3)",
      outline: "1px dashed rgb(174,163,60)",
      outlineOffset: "-1px"
    }
  }));
}

// figma node: 9:13 8px
function Px8(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      backgroundColor: "rgba(167,36,103,0.3)",
      outline: "1px dashed rgb(167,36,103)",
      outlineOffset: "-1px"
    }
  }));
}

// figma node: 274:6 Calendar Outline
function CalendarOutline(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(37,40,43)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.996,
    height: 21,
    viewBox: "0 0 19.996 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.002,
      top: 1,
      width: 19.996,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.668 6 C 19.758 6.64 19.828 7.32 19.878 8 C 20.158 11.52 19.938 15.42 19.228 18.32 C 18.948 19.44 18.288 20.18 17.178 20.41 C 15.258 20.8 12.898 21 10.418 21 C 7.928 21 5.298 20.8 2.818 20.41 C 1.698 20.23 1.038 19.44 0.768 18.32 C 0.058 15.42 -0.162 11.52 0.118 8 C 0.168 7.32 0.238 6.64 0.328 6 C 0.438 5.18 0.588 4.4 0.768 3.68 C 1.038 2.56 1.698 1.76 2.818 1.58 L 2.998 1.55 L 2.998 1 C 2.998 0.45 3.448 0 3.998 0 C 4.548 0 4.998 0.45 4.998 1 L 4.998 1.29 C 6.698 1.09 8.348 1 9.998 1 C 11.648 1 13.298 1.09 14.998 1.29 L 14.998 1 C 14.998 0.45 15.448 0 15.998 0 C 16.548 0 16.998 0.45 16.998 1 L 16.998 1.55 L 17.178 1.58 C 18.298 1.76 18.948 2.56 19.228 3.68 C 19.408 4.4 19.558 5.18 19.668 6 Z M 3.128 3.56 C 3.008 3.58 2.838 3.61 2.708 4.15 C 2.568 4.73 2.448 5.35 2.348 6 L 17.648 6 C 17.548 5.35 17.428 4.73 17.288 4.15 C 17.148 3.61 16.988 3.58 16.868 3.56 C 14.468 3.18 12.218 3 9.998 3 C 7.778 3 5.528 3.18 3.128 3.56 Z M 16.778 18.45 C 16.968 18.41 17.158 18.37 17.288 17.84 C 17.958 15.08 18.158 11.33 17.878 8 L 2.108 8 C 1.828 11.33 2.028 15.08 2.708 17.84 C 2.836 18.382 3.003 18.409 3.122 18.429 L 3.128 18.43 C 5.458 18.8 7.978 19 10.418 19 C 12.818 19 15.018 18.81 16.778 18.45 Z M 8.968 11 L 8.968 11.38 C 10.588 11.52 11.738 12.03 12.408 12.92 C 13.108 13.82 13.038 14.77 12.978 15.13 C 12.938 16.33 12.108 18.02 9.968 18.02 C 8.888 18.02 8.218 17.57 7.848 17.2 C 6.988 16.34 6.968 15.14 6.968 15.01 C 6.968 14.46 7.418 14.01 7.968 14.01 C 8.518 14.01 8.968 14.45 8.968 15 C 8.978 15.46 9.158 16.01 9.968 16.01 C 10.788 16.01 10.978 15.45 10.988 14.99 C 10.988 14.92 10.998 14.83 11.018 14.76 C 11.018 14.759 11.018 14.758 11.018 14.755 C 11.023 14.713 11.054 14.403 10.818 14.11 C 10.578 13.82 9.898 13.34 7.968 13.34 C 7.418 13.34 6.968 12.89 6.968 12.34 L 6.968 10 C 6.968 9.45 7.418 9 7.968 9 L 11.988 9 C 12.538 9 12.988 9.45 12.988 10 C 12.988 10.55 12.538 11 11.988 11 L 8.968 11 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 286:22393 Component 7
function Component7(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      height: 76,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ParentFrame2, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328
    }
  }), /*#__PURE__*/React.createElement(BaseInputType3, {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 328,
      height: 20
    }
  }));
}

// figma node: 244:603 Frame 4722
function Frame4722(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 170,
      borderRadius: 4,
      backgroundColor: "rgb(241,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.250px",
      color: "rgb(160,164,168)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Business name"));
}

// figma node: 256:21 Element-Master
function ElementMaster(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Frame4722, {
    style: {
      position: "relative",
      width: 170,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
}

// figma node: 190:33261 Ellipse 1
function Ellipse1(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(196,196,196)"
    }
  }));
}

// figma node: 93:388 New Cover
function NewCover(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      height: 66,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BaseCover, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 132,
      height: 66
    },
    research: false,
    inDesign: false,
    onHold: false,
    testing: false,
    engineering: false,
    developed: true
  }));
}

// figma node: 9:32 Note / Yellow Note
function NoteYellowNote(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 229.337,
      background: "linear-gradient(180deg, rgb(255,237,73) 0.00%, rgb(245,221,0) 100.00%)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255), 8px 8px 0px 0px rgba(0,0,0,0.24)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 11px 8px 11px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.999,-0.052,0.052,0.999,11,18.482)",
      transformOrigin: "0 0",
      width: 200.284,
      height: 140,
      fontFamily: "\"Permanent Marker\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(47,37,5)",
      whiteSpace: "pre-wrap"
    }
  }, props.text1 ?? "❓Why... \n\nwhy did you put that there?"));
}

// figma node: 9:30 Note / Is this clickable? I can’t tell?
function NoteIsThisClickableI(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 230.839,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(NoteYellowNote, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 227.505,
      transform: "matrix(1.000,0.026,-0.026,1.000,3.411,0)",
      transformOrigin: "0 0",
      height: 131.338
    },
    text1: "Is this clickable? I can’t tell?"
  }));
}

// Globals for scripts loaded after this file.
window.Component = Component;
window.Back = Back;
window.Placeholder = Placeholder;
window.Button = Button;
window.CheckBox = CheckBox;
window.Component3 = Component3;
window.Cursor = Cursor;
window.BaseArowAropDownDuplicate2 = BaseArowAropDownDuplicate2;
window.BaseInputType3 = BaseInputType3;
window.Group4583 = Group4583;
window.Frame4736 = Frame4736;
window.Component10 = Component10;
window.Label = Label;
window.ParentFrame = ParentFrame;
window.Component8 = Component8;
window.ExpandableMainComponent = ExpandableMainComponent;
window.ParentFrame2 = ParentFrame2;
window.InputField = InputField;
window.RadioButton = RadioButton;
window.Spacing = Spacing;
window.Timelapse = Timelapse;
window.Toggle = Toggle;
window.BaseCoverName = BaseCoverName;
window.BaseOwnerName = BaseOwnerName;
window.BaseCover = BaseCover;
window.Cancel = Cancel;
window.Check = Check;
window.Hamburger = Hamburger;
window.KYC = KYC;
window.BaseArowAropDownDuplicate = BaseArowAropDownDuplicate;
window.Px12 = Px12;
window.Dot3 = Dot3;
window.Px4 = Px4;
window.Px8 = Px8;
window.CalendarOutline = CalendarOutline;
window.Component7 = Component7;
window.Frame4722 = Frame4722;
window.ElementMaster = ElementMaster;
window.Ellipse1 = Ellipse1;
window.NewCover = NewCover;
window.NoteYellowNote = NoteYellowNote;
window.NoteIsThisClickableI = NoteIsThisClickableI;