'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _mergeJSXProps = _interopDefault(require('babel-helper-vue-jsx-merge-props'));

var AboutUs2Icon = {
  name: 'AboutUs2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-about-us-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .16a7.84 7.84 0 1 0 0 15.68A7.84 7.84 0 0 0 8 .16zm4.325 13.045h.048l-.048.043zm-8.65.032l-.048-.043h.048zm9.194-.533a5.924 5.924 0 0 0-.204-.848 2.91 2.91 0 0 0-1.845-1.717 8.708 8.708 0 0 0-2.637-.402l-.194.002a8.817 8.817 0 0 0-2.853.412c-.813.256-1.497.909-1.808 1.744a5.67 5.67 0 0 0-.194.79 6.608 6.608 0 0 1-1.928-4.701 6.795 6.795 0 1 1 13.59 0 6.771 6.771 0 0 1-1.924 4.738z"
      }
    }), h("path", {
      attrs: {
        d: "M10.587 6.272a2.587 2.587 0 1 1-5.173 0 2.587 2.587 0 0 1 5.173 0z"
      }
    })]);
  }
};

var AboutUsIcon = {
  name: 'AboutUsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-about-us"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.539 7.344a5.046 5.046 0 0 0-.404-.505l.004.004a3.693 3.693 0 0 1-1.883.509c-.217 0-.429-.018-.636-.054a3.626 3.626 0 0 1-.955 1.732 7.49 7.49 0 0 1 1.594 3.431l3.58.046c0-2.528-.592-4.139-1.301-5.163z"
      }
    }), h("path", {
      attrs: {
        d: "M11.771 6.272a2.816 2.816 0 1 0-1.877-4.361 2.794 2.794 0 0 0-.391.876c1.331.633 2.246 1.95 2.268 3.483z"
      }
    }), h("path", {
      attrs: {
        d: "M4.197 7.328a3.509 3.509 0 0 1-.437 0 3.786 3.786 0 0 1-1.916-.543C.992 7.808.16 9.509.16 12.507h3.387a7.537 7.537 0 0 1 1.647-3.489 3.673 3.673 0 0 1-.989-1.663z"
      }
    }), h("path", {
      attrs: {
        d: "M3.771 6.315a2.91 2.91 0 0 0 .31-.034 3.823 3.823 0 0 1 2.374-3.535 2.206 2.206 0 0 0-.349-.846 2.821 2.821 0 1 0-2.335 4.41z"
      }
    }), h("path", {
      attrs: {
        d: "M7.92 10.171a3.82 3.82 0 0 1-1.927-.543c-.852.975-1.684 2.676-1.684 5.674h7.221c0-2.992-.837-4.699-1.701-5.664a3.783 3.783 0 0 1-1.907.533z"
      }
    }), h("path", {
      attrs: {
        d: "M5.333 5.216a2.827 2.827 0 1 0 .008-.019z"
      }
    })]);
  }
};

var Accommodation2Icon = {
  name: 'Accommodation2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-accommodation-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.333 7.925H1.6V4.224a.805.805 0 1 0-1.599.003v8.354h1.371l1.6-1.669h12.709l1.6 1.669h1.387V7.925z"
      }
    }), h("path", {
      attrs: {
        d: "M18.629 6.763a.764.764 0 0 0-.454-.697l-.005-.685c0-.589-.478-1.067-1.067-1.067H9.38c-.589 0-1.067.478-1.067 1.067V6H2.014v1.525h15.851a.763.763 0 0 0 .763-.763zM8.917 5.381c0-.256.208-.464.464-.464h7.685c.256 0 .464.208.464.464v.309H8.917z"
      }
    }), h("path", {
      attrs: {
        d: "M4.395 3.813H2.016v1.781h4.16c0-.984-.798-1.781-1.781-1.781z"
      }
    })]);
  }
};

var AccommodationIcon = {
  name: 'AccommodationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-accommodation"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.579 0H2.422l-1.12 3.461h1.067V16h2.784v-4.267h2.4V16h.741v-4.267h2.4V16h2.917V3.461h1.067zM5.867 9.909H3.734V7.776h2.133zm0-3.098H3.734V4.678h2.133zm3.157 3.098H6.891V7.776h2.133zm0-3.098H6.891V4.678h2.133zm3.157 3.098h-2.133V7.776h2.133zm0-3.098h-2.133V4.678h2.133z"
      }
    })]);
  }
};

var ActivityIcon = {
  name: 'ActivityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-activity"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
      }
    })]);
  }
};

var AdultIcon = {
  name: 'AdultIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-adult"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.072 4.427a3.072 3.072 0 1 1-6.143.001 3.072 3.072 0 0 1 6.143-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M13.557 11.136a3.558 3.558 0 0 0-2.204-2.126 10.335 10.335 0 0 0-3.364-.477 10.478 10.478 0 0 0-3.391.495c-.961.321-1.77 1.098-2.147 2.088-.414 1.292-.824 2.926-1.145 4.591l13.436.292a45.697 45.697 0 0 0-1.272-5.193zM8 15.381l-.837-.752.443-3.659h.784l.443 3.659zm.459-4.677h-.917l-.405-1.483H8.87z"
      }
    })]);
  }
};

var AirplayIcon = {
  name: 'AirplayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-airplay"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
      }
    }), h("polygon", {
      attrs: {
        points: "12 15 17 21 7 21 12 15"
      }
    })]);
  }
};

var AlertCircleIcon = {
  name: 'AlertCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }
    })]);
  }
};

var AlertOctagonIcon = {
  name: 'AlertOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }
    })]);
  }
};

var AlertTriangleIcon = {
  name: 'AlertTriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }
    })]);
  }
};

var AlignCenterIcon = {
  name: 'AlignCenterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-center"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "10",
        x2: "6",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "18",
        x2: "6",
        y2: "18"
      }
    })]);
  }
};

var AlignJustifyIcon = {
  name: 'AlignJustifyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-justify"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignLeftIcon = {
  name: 'AlignLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignRightIcon = {
  name: 'AlignRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "7",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "7",
        y2: "18"
      }
    })]);
  }
};

var AnchorIcon = {
  name: 'AnchorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-anchor"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M5 12H2a10 10 0 0 0 20 0h-3"
      }
    })]);
  }
};

var AncientCityIcon = {
  name: 'AncientCityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ancient-city"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 0L.581 3.323h14.837L7.999 0z"
      }
    }), h("path", {
      attrs: {
        d: "M15.419 13.696h-.741v-.704h-.533V5.488h.533V4.8h.741v-.976H.582V4.8h.853v.704h.533v7.488h-.533v.704H.582v.901h14.837zm-11.483 0v-.704h-.533V5.488h.533V4.8h1.067v.704h.533v7.488h-.533v.704zm3.579 0v-.704h-.533V5.488h.533V4.8h1.067v.704h.533v7.488h-.533v.704zm3.578 0v-.704h-.533V5.488h.533V4.8h1.067v.704h.533v7.488h-.533v.704z"
      }
    }), h("path", {
      attrs: {
        d: "M.053 15.099h15.893V16H.053v-.901z"
      }
    })]);
  }
};

var ApertureIcon = {
  name: 'ApertureIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-aperture"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "8",
        x2: "20.05",
        y2: "17.94"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "8",
        x2: "21.17",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "7.38",
        y1: "12",
        x2: "13.12",
        y2: "2.06"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "16",
        x2: "3.95",
        y2: "6.06"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "16",
        x2: "2.83",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16.62",
        y1: "12",
        x2: "10.88",
        y2: "21.94"
      }
    })]);
  }
};

var ArchiveIcon = {
  name: 'ArchiveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-archive"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "21 8 21 21 3 21 3 8"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "22",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "12",
        x2: "14",
        y2: "12"
      }
    })]);
  }
};

var ArrowDown2Icon = {
  name: 'ArrowDown2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 14.176l5.712-3.808V1.824L8 5.632 2.288 1.824v8.544L8 14.176z"
      }
    })]);
  }
};

var ArrowDown3Icon = {
  name: 'ArrowDown3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 16L.352 8.869h2.939V0h9.419v8.869h2.939L8.001 16z"
      }
    })]);
  }
};

var ArrowDown4Icon = {
  name: 'ArrowDown4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 16l-4.589-4.278h1.763V0h5.651v11.722h1.763L7.999 16z"
      }
    })]);
  }
};

var ArrowDown5Icon = {
  name: 'ArrowDown5Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-5"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.925 7.856h-3.392L8 10.736l-2.533-2.88H2.075L8 14.592l5.925-6.736z"
      }
    }), h("path", {
      attrs: {
        d: "M13.925 1.408h-3.392L8 4.288l-2.533-2.88H2.075L8 8.144l5.925-6.736z"
      }
    })]);
  }
};

var ArrowDownCircleIcon = {
  name: 'ArrowDownCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 12 12 16 16 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    })]);
  }
};

var ArrowDownLeftIcon = {
  name: 'ArrowDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "7",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 17 7 17 7 7"
      }
    })]);
  }
};

var ArrowDownRightIcon = {
  name: 'ArrowDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "17",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 7 17 17 7 17"
      }
    })]);
  }
};

var ArrowDownIcon = {
  name: 'ArrowDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 12 12 19 5 12"
      }
    })]);
  }
};

var ArrowLeft2Icon = {
  name: 'ArrowLeft2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1.824 8l3.808 5.712h8.544L10.368 8l3.808-5.712H5.632L1.824 8z"
      }
    })]);
  }
};

var ArrowLeft3Icon = {
  name: 'ArrowLeft3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M0 8L7.131.352v2.939H16v9.419H7.131v2.939L0 8.001z"
      }
    })]);
  }
};

var ArrowLeft4Icon = {
  name: 'ArrowLeft4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M0 8L7.131.352v2.939h19.536v9.419H7.131v2.939L0 8.001z"
      }
    })]);
  }
};

var ArrowLeft5Icon = {
  name: 'ArrowLeft5Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-5"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.144 13.925v-3.392L5.264 8l2.88-2.533V2.075L1.408 8l6.736 5.925z"
      }
    }), h("path", {
      attrs: {
        d: "M14.592 13.925v-3.392L11.712 8l2.88-2.533V2.075L7.856 8l6.736 5.925z"
      }
    })]);
  }
};

var ArrowLeftCircleIcon = {
  name: 'ArrowLeftCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 8 8 12 12 16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "12",
        x2: "8",
        y2: "12"
      }
    })]);
  }
};

var ArrowLeftIcon = {
  name: 'ArrowLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 19 5 12 12 5"
      }
    })]);
  }
};

var ArrowRight2Icon = {
  name: 'ArrowRight2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.176 8l-3.808-5.712H1.824L5.632 8l-3.808 5.712h8.544L14.176 8z"
      }
    })]);
  }
};

var ArrowRight3Icon = {
  name: 'ArrowRight3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 8L8.869.352v2.939H0v9.419h8.869v2.939L16 8.001z"
      }
    })]);
  }
};

var ArrowRight4Icon = {
  name: 'ArrowRight4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M26.667 8L19.536.352v2.939H0v9.419h19.536v2.939l7.131-7.648z"
      }
    })]);
  }
};

var ArrowRight5Icon = {
  name: 'ArrowRight5Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-5"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.856 2.075v3.392L10.736 8l-2.88 2.533v3.392L14.592 8 7.856 2.075z"
      }
    }), h("path", {
      attrs: {
        d: "M1.408 2.075v3.392L4.288 8l-2.88 2.533v3.392L8.144 8 1.408 2.075z"
      }
    })]);
  }
};

var ArrowRightCircleIcon = {
  name: 'ArrowRightCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 16 16 12 12 8"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var ArrowRightIcon = {
  name: 'ArrowRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 5 19 12 12 19"
      }
    })]);
  }
};

var ArrowUp2Icon = {
  name: 'ArrowUp2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 1.824L2.288 5.632v8.544L8 10.368l5.712 3.808V5.632L8 1.824z"
      }
    })]);
  }
};

var ArrowUp3Icon = {
  name: 'ArrowUp3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 0L.352 7.131h2.939V16h9.419V7.131h2.939L8.001 0z"
      }
    })]);
  }
};

var ArrowUp4Icon = {
  name: 'ArrowUp4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 0L3.411 4.278h1.763V16h5.651V4.278h1.763L7.999 0z"
      }
    })]);
  }
};

var ArrowUp5Icon = {
  name: 'ArrowUp5Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-5"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2.075 8.144h3.392L8 5.264l2.533 2.88h3.392L8 1.408 2.075 8.144z"
      }
    }), h("path", {
      attrs: {
        d: "M2.075 14.592h3.392L8 11.712l2.533 2.88h3.392L8 7.856l-5.925 6.736z"
      }
    })]);
  }
};

var ArrowUpCircleIcon = {
  name: 'ArrowUpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "16 12 12 8 8 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "8"
      }
    })]);
  }
};

var ArrowUpLeftIcon = {
  name: 'ArrowUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "7",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 17 7 7 17 7"
      }
    })]);
  }
};

var ArrowUpRightIcon = {
  name: 'ArrowUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "17",
        x2: "17",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 7 17 7 17 17"
      }
    })]);
  }
};

var ArrowUpIcon = {
  name: 'ArrowUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "5"
      }
    }), h("polyline", {
      attrs: {
        points: "5 12 12 5 19 12"
      }
    })]);
  }
};

var Ask2Icon = {
  name: 'Ask2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ask-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.741 12.059a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.968 3.595A2.89 2.89 0 0 0 5.083 6.48a.534.534 0 0 0 1.066.001 1.818 1.818 0 0 1 3.632-.219L7.648 8.336a.532.532 0 0 0-.16.381v1.309a.533.533 0 1 0 1.066 0V8.959l2.133-2.085a.532.532 0 0 0 .16-.381v-.008a2.89 2.89 0 0 0-2.879-2.891z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    })]);
  }
};

var AskIcon = {
  name: 'AskIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ask"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.323 14.683a1.233 1.233 0 1 1-2.465-.001 1.233 1.233 0 0 1 2.465.001z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .085a5.088 5.088 0 0 0-5.083 5.082 1.067 1.067 0 0 0 2.134 0 2.95 2.95 0 0 1 5.864-.438L7.344 8.223c-.198.194-.32.463-.32.762v2.214a1.067 1.067 0 0 0 2.134 0V9.444l3.605-3.509c.198-.194.32-.463.32-.762v-.001A5.088 5.088 0 0 0 8.001.084z"
      }
    })]);
  }
};

var AtSignIcon = {
  name: 'AtSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-at-sign"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
      }
    })]);
  }
};

var AtvIcon = {
  name: 'AtvIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-atv"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.765 6.731l.016.001c.11 0 .202-.077.224-.18l.096-.492a.229.229 0 0 0-.148-.261l-4.802-1.67a.23.23 0 0 0-.266.089c-.31.481-1.27 1.958-1.382 2.134s-.373.485-1.189.197c-.709-.24-4.581-1.467-5.461-1.749a.223.223 0 0 0-.271.122l-.811 2.012s4.347-.624 5.307 2.853a.23.23 0 0 0 .218.176h3.012a.224.224 0 0 0 .214-.158c.192-.7 1.211-3.351 5.243-3.074z"
      }
    }), h("path", {
      attrs: {
        d: "M11.157 3.456a.3.3 0 0 0 .195.207l.994.315-.517-1.845a.3.3 0 0 0-.288-.219H7.61v.533l3.349.309z"
      }
    }), h("path", {
      attrs: {
        d: "M14.107 4.293v-.56h.293V2.384h-.283v-.491a1.2 1.2 0 1 0 0 2.4z"
      }
    }), h("path", {
      attrs: {
        d: "M5.957 9.808l.229-.133-.427-.741-.24.139a2.986 2.986 0 0 0-.479-.481l.133-.245-.741-.427-.133.229a2.842 2.842 0 0 0-.659-.148l-.013-.273h-.853V8a2.932 2.932 0 0 0-.687.178l-.113-.236-.741.427.139.24a2.986 2.986 0 0 0-.481.479l-.245-.133-.432.72.229.133a2.82 2.82 0 0 0-.169.651L0 10.474v.853h.272c.036.251.097.478.183.692l-.236.113.427.741.24-.139c.144.182.304.341.479.481l-.133.245.741.405.133-.229c.193.077.418.136.651.169l.015.274h.853v-.272c.249-.034.474-.094.687-.178l.113.236.741-.427-.139-.24c.182-.144.341-.304.481-.479l.245.133.427-.741-.229-.133a2.82 2.82 0 0 0 .169-.651l.279-.015v-.853h-.272a2.947 2.947 0 0 0-.178-.671zM3.2 12.149a1.243 1.243 0 1 1 0-2.486 1.243 1.243 0 0 1 0 2.486z"
      }
    }), h("path", {
      attrs: {
        d: "M17.6 11.333v-.853h-.272a2.932 2.932 0 0 0-.178-.687l.236-.113-.427-.741-.24.139a2.986 2.986 0 0 0-.479-.481l.133-.245-.741-.427-.133.229a2.828 2.828 0 0 0-.659-.153l-.013-.273h-.853V8a2.932 2.932 0 0 0-.687.178l-.113-.236-.741.427.139.24a2.986 2.986 0 0 0-.481.479l-.245-.133-.427.741.229.133a2.82 2.82 0 0 0-.169.651l-.279.015v.853h.272c.034.249.094.474.178.687l-.236.113.427.741.24-.139c.144.182.304.341.479.481l-.133.245.741.427.133-.229c.193.077.418.136.651.169l.015.274h.859v-.272c.249-.034.474-.094.687-.178l.113.236.741-.427-.139-.24c.182-.144.341-.304.481-.479l.245.133.427-.741-.229-.133a2.82 2.82 0 0 0 .169-.651zm-3.2.816a1.243 1.243 0 1 1 0-2.486 1.243 1.243 0 0 1 0 2.486z"
      }
    }), h("path", {
      attrs: {
        d: "M4.267 4.907l2.971.928a.449.449 0 0 0 .27-.853L4.54 4.053a.449.449 0 0 0-.275.853z"
      }
    })]);
  }
};

var Audio2Icon = {
  name: 'Audio2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-audio-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.8 8.341h-1.6v-.965H6.059s-.192 1.963.875 2.896c0 0-1.6-.533-1.531-2.896h-.736v.965H3.2v.005a4.8 4.8 0 0 0 4.559 4.794l-.661 1.163c-.608.128-1.029.379-1.029.677 0 .421.837.763 1.872.763s1.872-.341 1.872-.763c0-.277-.368-.533-.907-.651l-.688-1.189a4.802 4.802 0 0 0 4.581-4.795V8.34zm-8.72.774h.677c.331 1.485 1.638 2.579 3.2 2.579s2.869-1.094 3.196-2.558l.788-.022c-.373 1.851-1.986 3.226-3.92 3.226s-3.547-1.375-3.916-3.2z"
      }
    }), h("path", {
      attrs: {
        d: "M11.2 3.109C11.2 1.541 9.76.272 7.947.272s-3.28 1.269-3.28 2.837v3.627H11.2z"
      }
    })]);
  }
};

var AudioIcon = {
  name: 'AudioIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-audio"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.576 8v2.085l4.725 2.213V3.701L4.576 5.914v2.085z"
      }
    }), h("path", {
      attrs: {
        d: "M.267 6.624v2.747c0 .389.315.704.704.704h2.667V5.926H.971a.704.704 0 0 0-.704.698z"
      }
    }), h("path", {
      attrs: {
        d: "M10.949 6.544a.421.421 0 0 0-.037.593c.2.229.322.53.322.861s-.122.632-.324.863a.421.421 0 1 0 .629.534 2.129 2.129 0 0 0-.001-2.836.42.42 0 0 0-.59-.014z"
      }
    }), h("path", {
      attrs: {
        d: "M14.293 4.171a.422.422 0 1 0-.635.532c.764.871 1.23 2.019 1.23 3.275s-.466 2.405-1.234 3.28a.421.421 0 1 0 .633.53c.894-1.019 1.438-2.36 1.438-3.829s-.545-2.81-1.443-3.833z"
      }
    }), h("path", {
      attrs: {
        d: "M12.917 5.376a.422.422 0 1 0-.635.532c.484.55.779 1.276.779 2.07s-.295 1.52-.781 2.073a.421.421 0 1 0 .631.532c.612-.699.985-1.618.985-2.623s-.373-1.925-.988-2.626z"
      }
    })]);
  }
};

var AwardIcon = {
  name: 'AwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-award"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "8",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
      }
    })]);
  }
};

var BananaBoatIcon = {
  name: 'BananaBoatIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-banana-boat"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.3 5.6c-.4.4-1 .35-1.35-.1s-.3-1.15.05-1.55 1-.35 1.35.1c.35.45.35 1.15-.05 1.55z"
      }
    }), h("path", {
      attrs: {
        d: "M2.85 14s.3-1.95.35-2.3c.1-.35.25-.5.6-.4.3.1.75.25 1.25.35.4.15 1.4 0 1.65-1.15 0 0 .6-2.65-.7-3.85-.35-.3-.95-.55-1.4-.15-.4.45-.95 1.7-.95 1.7s-1.3-.5-1.6-.55c-.65-.15-.85.25-.15.65 1.1.6 1.85.9 2.1.8.2-.1.65-.6.65-.6L4.8 10c-.55-.15-.95-.25-1.1-.3-.4-.1-1.3-.2-1.5 1.1s-.3 2.65-.3 2.65z"
      }
    }), h("path", {
      attrs: {
        d: "M8.55 6.2c-.4.4-1 .35-1.35-.1s-.3-1.15.1-1.55c.4-.4 1-.35 1.35.1.3.45.3 1.15-.1 1.55z"
      }
    }), h("path", {
      attrs: {
        d: "M6.1 14.6s.3-1.95.35-2.3c.1-.35.25-.5.6-.4s.75.25 1.25.35c.4.15 1.4 0 1.65-1.15 0 0 .6-2.65-.7-3.85-.35-.3-.95-.55-1.4-.15-.4.45-.95 1.7-.95 1.7s-1.3-.5-1.6-.55c-.65-.15-.85.25-.15.65 1.1.6 1.85.9 2.1.8.25-.15.7-.65.7-.65l.15 1.5c-.55-.15-.95-.25-1.1-.3-.4-.1-1.3-.2-1.5 1.1S5.2 14 5.2 14z"
      }
    }), h("path", {
      attrs: {
        d: "M12.65 10.8c-1.2.55-2.75.85-4.6.85-2.4 0-4.4-.55-5.65-1.5l-.25.35c1.35.95 3.45 1.5 5.9 1.5 1.9 0 3.6-.35 4.9-.9l-.3-.3z"
      }
    }), h("path", {
      attrs: {
        d: "M15.65 8.25h-.7c-.1 0-.2.05-.25.1-1.05 1.55-3.6 2.5-6.65 2.5s-5.6-.95-6.65-2.5a.382.382 0 0 0-.25-.1h-.7c-.1 0-.2.1-.2.15 0 2.8 3.5 5.1 7.8 5.1s7.8-2.3 7.8-5.1c0-.05-.1-.1-.2-.15zM15.2 9.5l-.1.1c-.8 2.05-3.65 3.55-7.05 3.55-3.3 0-6.05-1.45-6.95-3.4v-.1L.8 9l-.15-.4h.3l.35.4c0-.05-.05-.05-.05-.1 1.25 1.4 3.8 2.25 6.8 2.25 2.4 0 4.5-.55 5.9-1.5l.9-.75.35-.3.4.2-.4.7z"
      }
    }), h("path", {
      attrs: {
        d: "M11.9 6c-.4.4-1 .35-1.35-.1s-.3-1.15.1-1.55c.4-.4 1-.35 1.35.1.3.45.3 1.15-.1 1.55z"
      }
    }), h("path", {
      attrs: {
        d: "M9.45 14.4s.3-1.95.35-2.3c.1-.35.25-.5.6-.4.3.1.75.25 1.25.35.4.15 1.4 0 1.65-1.15 0 0 .6-2.65-.7-3.85-.35-.3-.95-.55-1.4-.15-.4.45-.95 1.7-.95 1.7s-1.3-.5-1.6-.55C8 7.9 7.8 8.3 8.5 8.7c1.1.6 1.85.9 2.1.8.25-.15.7-.65.7-.65l.15 1.5c-.55-.15-.95-.25-1.1-.3-.4-.1-1.3-.2-1.5 1.1s-.3 2.65-.3 2.65z"
      }
    })]);
  }
};

var BarChart2Icon = {
  name: 'BarChart2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart-2"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }
    })]);
  }
};

var BarChartIcon = {
  name: 'BarChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "16"
      }
    })]);
  }
};

var BarIcon = {
  name: 'BarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.8.229a3.073 3.073 0 0 0-3.021 2.547l-8.84.018H.937a.795.795 0 0 0-.584 1.334l5.136 5.589a1.204 1.204 0 0 0 .527 1.485l.006 3.576a5.33 5.33 0 0 0-2.478 1.002l6.222-.01a5.291 5.291 0 0 0-2.436-.989l-.028-3.582a1.211 1.211 0 0 0 .445-1.464l3.454-3.8A3.067 3.067 0 1 0 12.804.228zm2.24 2.87h-1.771l1.248-1.248c.288.338.478.767.522 1.239zM6.976 9.376L8.992 4.96h-6.8L.939 3.595h11.36zm6.011-8.309c.482.048.911.242 1.251.536l-1.251 1.214zm-.4 1.749l-1.248-1.248c.34-.28.77-.463 1.24-.501zm.4 1.157a.75.75 0 0 0 .057-.128l1.196 1.189a2.234 2.234 0 0 1-1.239.533zM11.056 1.84l.944.955h-1.419c.087-.365.252-.682.477-.947zm1.531 2.608v1.099a2.24 2.24 0 0 1-.813-.219zm1.93.299l-1.243-1.248h1.765a2.247 2.247 0 0 1-.52 1.257z"
      }
    })]);
  }
};

var BathroomPrivateIcon = {
  name: 'BathroomPrivateIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bathroom-private"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.35 7.25v2c0 .15-.05.25-.15.3-.1.1-.2.15-.3.15s-.25-.05-.3-.15c-.1-.1-.15-.2-.15-.3v-1.7h-.3v4.35c0 .15-.05.25-.15.4s-.25.15-.4.15c-.15 0-.25-.05-.4-.15-.1-.1-.15-.25-.15-.4V9.7h-.3v2.2c0 .15-.05.25-.15.4s-.25.15-.4.15c-.15 0-.25-.05-.4-.15-.1-.1-.15-.25-.15-.4V7.55h-.3v1.7c0 .15-.05.25-.15.3-.1.1-.2.15-.3.15-.15 0-.25-.05-.3-.15-.1-.05-.1-.2-.1-.3v-2c0-.25.1-.45.25-.65.2-.2.4-.25.65-.25h3.05c.25 0 .45.1.65.25.15.2.25.4.25.65zM13 5.1c0 .3-.1.55-.3.75s-.45.3-.75.3-.55-.1-.75-.3c-.2-.2-.3-.45-.3-.75s.1-.55.3-.75c.2-.2.45-.3.75-.3s.55.1.75.3c.2.25.3.5.3.75z"
      }
    }), h("path", {
      attrs: {
        d: "M8.25 2.35v12"
      }
    }), h("path", {
      attrs: {
        d: "M7.55 8.95c0 .15-.05.25-.15.35s-.2.15-.35.15c-.15 0-.3-.05-.4-.2L5.55 7.6h-.2v.65l1.2 1.95c.05.05.05.1.05.15 0 .1-.05.15-.1.2s-.15.1-.2.1h-.9v1.3c0 .15-.05.25-.15.4-.1.1-.25.15-.4.15H4.1c-.15 0-.25-.05-.4-.15-.1-.1-.15-.25-.15-.4v-1.3h-.9c-.1 0-.15-.05-.2-.1s-.1-.15-.1-.2c0-.05 0-.1.05-.15l1.2-1.95V7.6h-.25l-1.1 1.65c-.1.15-.2.2-.4.2-.15 0-.25-.05-.35-.15s-.15-.2-.15-.35c0-.1.05-.2.1-.25L2.7 6.85c.25-.35.5-.5.85-.5H5.4c.35 0 .6.15.85.5L7.5 8.7c.05.05.05.15.05.25zm-2-3.85c0 .3-.1.55-.3.75s-.45.3-.75.3-.55-.1-.75-.3-.3-.45-.3-.75.05-.55.3-.75c.2-.2.45-.3.75-.3s.55.1.75.3.3.45.3.75z"
      }
    })]);
  }
};

var BatteryChargingIcon = {
  name: 'BatteryChargingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery-charging"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    }), h("polyline", {
      attrs: {
        points: "11 6 7 12 13 12 9 18"
      }
    })]);
  }
};

var BatteryIcon = {
  name: 'BatteryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "6",
        width: "18",
        height: "12",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    })]);
  }
};

var BbqIcon = {
  name: 'BbqIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bbq"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.107 4.011h-.002a.944.944 0 0 0-.925.757l-.87.006v.144a3.344 3.344 0 0 0-.323-1.156.287.287 0 0 0-.252-.156h-.758a.298.298 0 0 0-.271.424c.105.212.19.46.241.72l-.456.019v-.501a.405.405 0 0 0-.405-.405h-.533a.405.405 0 0 0-.405.405v.533h-.347a3.618 3.618 0 0 0-.314-1.014.288.288 0 0 0-.257-.149h-.763a.298.298 0 0 0-.271.424c.111.202.204.438.267.687l-.454.021v-.501a.405.405 0 0 0-.405-.405h-.533a.405.405 0 0 0-.405.405v.533h-.331a3.67 3.67 0 0 0-.33-1.046.288.288 0 0 0-.257-.149h-.752a.299.299 0 0 0-.261.423c.105.212.19.46.241.72l-.466.019v-.501a.405.405 0 0 0-.405-.405h-.533a.405.405 0 0 0-.4.405v.533H.951v.363h1.227v.533c0 .224.181.405.405.405h.533a.405.405 0 0 0 .405-.405v-.533h.459a3.03 3.03 0 0 1-.253.722.3.3 0 0 0 .28.404h.747a.293.293 0 0 0 .266-.169c.142-.286.251-.615.312-.961l.35-.022v.533c0 .224.181.405.405.405h.533a.405.405 0 0 0 .405-.405v-.533h.443c-.058.276-.144.52-.259.748a.3.3 0 0 0 .28.404h.753a.293.293 0 0 0 .266-.169c.139-.289.245-.623.302-.973l.349-.021v.533c0 .224.181.405.405.405h.533a.405.405 0 0 0 .405-.405v-.533h.459c-.059.28-.147.528-.264.759a.3.3 0 0 0 .28.404h.763a.293.293 0 0 0 .266-.169c.164-.333.275-.718.314-1.124l.001.13h.875a.944.944 0 1 0 .928-1.125zM4.704 5.936h-.608c.14-.286.232-.62.256-.973a2.633 2.633 0 0 0-.263-1.005l.615.016c.137.286.23.619.261.971-.03.373-.123.706-.268 1.01zm3.488 0h-.603c.14-.286.232-.62.256-.973a2.633 2.633 0 0 0-.263-1.005l.61.016c.138.286.231.62.261.971-.03.372-.123.706-.268 1.009zm3.488 0h-.603c.14-.286.232-.62.256-.973a2.633 2.633 0 0 0-.263-1.005l.61.016c.138.286.231.62.261.971a2.823 2.823 0 0 1-.263 1.009zm2.427-.405a.58.58 0 1 1 0-1.162.58.58 0 0 1 0 1.162z"
      }
    }), h("path", {
      attrs: {
        d: "M3.243 2.667a.929.929 0 0 0 .403-1.4 1.287 1.287 0 0 1-.273-1.275 1.011 1.011 0 0 0-.436.826c0 .239.085.459.227.63a1.124 1.124 0 0 1 .076 1.225z"
      }
    }), h("path", {
      attrs: {
        d: "M5.952 2.667a.929.929 0 0 0 .403-1.4 1.287 1.287 0 0 1-.273-1.275c-.268.189-.44.489-.44.829 0 .238.085.457.225.627a1.123 1.123 0 0 1 .081 1.225z"
      }
    }), h("path", {
      attrs: {
        d: "M8.661 2.667a.93.93 0 0 0 .404-1.379 1.286 1.286 0 0 1-.272-1.296 1.011 1.011 0 0 0-.436.826c0 .239.085.459.227.63a1.124 1.124 0 0 1 .076 1.225z"
      }
    }), h("path", {
      attrs: {
        d: "M11.371 2.667a.929.929 0 0 0 .403-1.4 1.285 1.285 0 0 1-.267-1.276 1.011 1.011 0 0 0-.436.826c0 .239.085.459.227.63a1.123 1.123 0 0 1 .071 1.225z"
      }
    }), h("path", {
      attrs: {
        d: "M2.048 6.933H1.6v.357h.448a5.39 5.39 0 0 0 1.724 3.618l-.951 4.302a.651.651 0 0 0 1.274.26l.38-1.658h5.973l.379 1.653a.652.652 0 1 0 1.274-.276l-.975-4.289a5.38 5.38 0 0 0 1.727-3.605l.449-.016v-.347H2.049zm.885.358h.901a4.908 4.908 0 0 0 2.681 3.977 5.061 5.061 0 0 1-3.578-3.94zm1.659 6.005l.357-1.563c.729.392 1.595.622 2.515.622s1.786-.23 2.544-.636l.328 1.577z"
      }
    })]);
  }
};

var BeachIcon = {
  name: 'BeachIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-beach"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.907 14.059c.349-.447.56-1.016.56-1.635v-.003a2.7 2.7 0 1 0-5.402 0c.001.522.152 1.008.412 1.419a18.155 18.155 0 0 0-1.638-.39l-.987-5.984a2.292 2.292 0 0 1 1.685-.735c.493 0 .95.155 1.325.42a.267.267 0 0 0 .355-.063 2.29 2.29 0 0 1 3.207-.53.267.267 0 0 0 .404-.289C13.404.687 8.322.767 6.759.927V.794a.4.4 0 1 0-.789.135v.131C4.439 1.412-.393 2.985.087 8.745a.266.266 0 0 0 .19.234h.077a.268.268 0 0 0 .213-.106 2.29 2.29 0 0 1 3.207-.53c.035.023.086.04.141.04a.263.263 0 0 0 .214-.108 2.288 2.288 0 0 1 2.956-.667l.916 5.722a16.31 16.31 0 0 0-2.2-.144h-.085a7.202 7.202 0 0 0-5.703 2.795l15.988.016v-2.549c-.304.271-.67.48-1.073.603zM3.861 7.776a2.636 2.636 0 0 0-1.427-.414c-.713 0-1.36.279-1.838.735C.533 3.643 4.08 2.133 5.712 1.68 4.8 2.395 3.36 4.133 3.861 7.776zm2.987-6.32h.235c1.067.405 3.141 1.637 3.851 5.157a2.767 2.767 0 0 0-1.425-.391c-.676 0-1.296.24-1.78.64zm6.523 9.925a.421.421 0 1 1 0 .842.421.421 0 0 1 0-.842zm-2.768 1.04a2.166 2.166 0 0 1 1.558-2.071 2.9 2.9 0 0 1 .826.72.812.812 0 0 0-.426.87 5.003 5.003 0 0 0-1.943.817c-.001-.107-.013-.219-.015-.334zm2.165 2.166a2.244 2.244 0 0 1-.29-.028 8.6 8.6 0 0 0 .687-1.895c.072-.051.14-.042.21-.042.277 0 .521-.14.666-.352.28.269.527.569.741.894a2.13 2.13 0 0 1-2.008 1.428zm1.413-2.854a.817.817 0 0 0-.381-.638c.068-.14.13-.302.174-.47.419.27.725.689.864 1.178a3.353 3.353 0 0 0-.654-.07h-.004z"
      }
    })]);
  }
};

var BeamIcon = {
  name: 'BeamIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-beam"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 5.3H.15v4H16v-4zM.5 8.9V5.65h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h1V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65V8.9H.5z"
      }
    })]);
  }
};

var BeanbagIcon = {
  name: 'BeanbagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-beanbag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.1 15.35c-2.3-.15-4.4-1.5-5.5-2.65-1.15-1.2-1.3-2.4-.45-3.75.8-1.35 2.25-3.1 2.7-4.65.5-1.55 0-2.75 0-2.7-.05 0 .8 1 2.5 2C9 4.7 11.5 5.95 13 7.5c1.6 1.55 1.85 3.5.8 5.2-1.1 1.7-3.4 2.9-5.7 2.65z"
      }
    })]);
  }
};

var BellOffIcon = {
  name: 'BellOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    }), h("path", {
      attrs: {
        d: "M18.63 13A17.89 17.89 0 0 1 18 8"
      }
    }), h("path", {
      attrs: {
        d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
      }
    }), h("path", {
      attrs: {
        d: "M18 8a6 6 0 0 0-9.33-5"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var BellIcon = {
  name: 'BellIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }
    }), h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    })]);
  }
};

var BilliardsIcon = {
  name: 'BilliardsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-billiards"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.851 7.467a4.269 4.269 0 0 1 3.272-1.744 3.617 3.617 0 0 0 .494-1.841 3.733 3.733 0 1 0-6.971 1.859 4.188 4.188 0 0 1 3.198 1.714zm.026-5.499A1.877 1.877 0 1 1 6 3.845a1.877 1.877 0 0 1 1.877-1.856z"
      }
    }), h("path", {
      attrs: {
        d: "M7.627 3.984c-.379.24-.571.48-.571.699v.002a.224.224 0 0 0 .252.222h1.14c.139 0 .224-.053.224-.192l.001-.018a.176.176 0 0 0-.176-.176l-.029.002h-.911c.037-.117.251-.24.592-.437s.533-.341.533-.747a.705.705 0 0 0-.782-.597.742.742 0 0 0-.807.652c0 .158.096.206.224.206s.16-.059.192-.171a.368.368 0 0 1 .396-.32l.015-.001c.168 0 .304.136.304.304v.006c-.027.245-.176.314-.597.565z"
      }
    }), h("path", {
      attrs: {
        d: "M4.4 13.781h.013a3.732 3.732 0 0 0 3.12-1.682 4.4 4.4 0 0 1-.521-2.073c0-.756.196-1.465.541-2.08a3.807 3.807 0 0 0-3.111-1.632 3.733 3.733 0 0 0-.043 7.466zm0-5.632a1.877 1.877 0 1 1-1.877 1.877v-.005c0-1.037.841-1.877 1.877-1.877z"
      }
    }), h("path", {
      attrs: {
        d: "M4.304 10.331l.033.001a.64.64 0 0 0 .463-.198v.053c0 .277-.117.587-.432.587s-.256-.261-.459-.261a.192.192 0 0 0-.192.192v.006c0 .186.245.394.608.394.565 0 .917-.32.917-1.221 0-.48-.192-.981-.837-.981a.72.72 0 0 0-.79.717l.001.043v.02c0 .359.291.651.651.651l.04-.001zm.091-1.067h.018a.34.34 0 0 1 .341.341l-.002.039.001.025a.347.347 0 0 1-.347.347h-.012l-.024.001a.33.33 0 0 1-.328-.376.335.335 0 0 1 .353-.393z"
      }
    }), h("path", {
      attrs: {
        d: "M7.547 10.027a3.733 3.733 0 1 0 7.465 0 3.733 3.733 0 0 0-7.465 0zm5.632 0a1.877 1.877 0 1 1-3.754 0 1.877 1.877 0 0 1 3.754 0z"
      }
    }), h("path", {
      attrs: {
        d: "M10.635 9.136l-.112.651a.972.972 0 0 0 0 .164l-.001.008c0 .106.086.192.192.192l.017-.001c.154 0 .223-.149.463-.149a.363.363 0 0 1 .411.36v.015a.39.39 0 0 1-.389.389c-.325 0-.325-.293-.533-.293h-.011a.208.208 0 0 0-.208.208c0 .16.197.432.72.432a.747.747 0 0 0 .843-.741v-.018l.001-.028a.672.672 0 0 0-.723-.67h-.015a.65.65 0 0 0-.405.14l.001-.001.08-.459h.768l.022.001a.176.176 0 0 0 .176-.176l-.001-.018.001-.017a.176.176 0 0 0-.176-.176l-.029.002h-.9c-.1.01-.18.087-.192.186z"
      }
    }), h("path", {
      attrs: {
        d: "M.192 15.893l14.427-.123v-1.12L.192 14.527v1.365z"
      }
    }), h("path", {
      attrs: {
        d: "M15.253 14.661h-.251v1.109h.251a.555.555 0 0 0 0-1.11z"
      }
    })]);
  }
};

var BirthdayIcon = {
  name: 'BirthdayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-birthday"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2.885 6.933a.892.892 0 0 0 .209.168l.004 1.576c0 .295.239.533.533.533h8.709a.533.533 0 0 0 .533-.533V7.141a.895.895 0 0 0 .266-.197 1.353 1.353 0 0 0 .277-.967V4.265a.768.768 0 0 0-.768-.768h-1.392v-1.6h-.843v1.6H8.418v-1.6h-.843v1.6H5.58v-1.6h-.843v1.6H3.372a.768.768 0 0 0-.768.768v1.707a1.368 1.368 0 0 0 .279.963zm.192-.949V4.267a.3.3 0 0 1 .299-.299h9.248a.3.3 0 0 1 .299.299v1.782a.895.895 0 0 1-.161.61.534.534 0 0 1-.427.157c-.403 0-.499-.171-.643-.432a.92.92 0 0 0-.858-.592h-.023a.987.987 0 0 0-.909.602c-.146.268-.232.396-.536.396-.368 0-.475-.192-.624-.459a.87.87 0 0 0-.738-.565.87.87 0 0 0-.764.564c-.151.273-.258.465-.626.465-.283 0-.363-.128-.533-.389a.988.988 0 0 0-.924-.64h-.016a.918.918 0 0 0-.856.586c-.146.268-.242.438-.647.438a.533.533 0 0 1-.421-.154.908.908 0 0 1-.138-.639z"
      }
    }), h("path", {
      attrs: {
        d: "M14.64 12.608v-1.873a.71.71 0 0 0-.682-.709H2.042a.66.66 0 0 0-.469.197.754.754 0 0 0-.213.527v1.836a1.263 1.263 0 0 0 .242.905.777.777 0 0 0 .371.219l.005 1.756c0 .295.239.533.533.533H13.45a.533.533 0 0 0 .533-.533v-1.744a.79.79 0 0 0 .421-.239 1.24 1.24 0 0 0 .234-.881zm-1.36.315a.784.784 0 0 0-.736-.533h-.01a.85.85 0 0 0-.8.565c-.124.246-.178.326-.364.326s-.325-.133-.453-.379-.267-.533-.656-.533-.533.304-.656.533-.208.379-.453.379-.24-.08-.363-.32a.834.834 0 0 0-1.599-.005c-.124.246-.177.326-.364.326s-.325-.133-.453-.379-.267-.533-.656-.533-.533.304-.656.533-.208.379-.453.379-.24-.08-.363-.32a.85.85 0 0 0-.794-.587.785.785 0 0 0-.735.528c-.114.23-.183.363-.471.363l-.03.001a.36.36 0 0 1-.258-.108.827.827 0 0 1-.133-.57v-1.837c0-.077.031-.146.08-.197a.193.193 0 0 1 .138-.059h11.916a.24.24 0 0 1 .214.239l-.001.024v1.876a.81.81 0 0 1-.135.536.362.362 0 0 1-.256.105l-.031-.001c-.287.005-.356-.128-.468-.352z"
      }
    }), h("path", {
      attrs: {
        d: "M5.163 1.6h.007a.533.533 0 0 0 .526-.622c0-.397-.533-.973-.533-.973S4.63.581 4.63.981a.533.533 0 0 0 .526.618h.007zm0-.837s.24.261.24.443a.245.245 0 1 1-.484-.001c.005-.185.245-.447.245-.447z"
      }
    }), h("path", {
      attrs: {
        d: "M8 1.6h.007a.533.533 0 0 0 .526-.622C8.533.576 8 0 8 0s-.533.576-.533.976a.533.533 0 0 0 .525.624H8zm0-.837s.24.261.24.443a.245.245 0 1 1-.484-.001c.005-.185.245-.447.245-.447z"
      }
    }), h("path", {
      attrs: {
        d: "M10.837 1.6h.007a.533.533 0 0 0 .526-.622c0-.397-.533-.973-.533-.973s-.533.576-.533.976a.533.533 0 0 0 .526.618h.007zm0-.837s.24.261.24.443a.245.245 0 1 1-.484-.001c.005-.185.245-.447.245-.447z"
      }
    })]);
  }
};

var BlueCruise2Icon = {
  name: 'BlueCruise2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-blue-cruise-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.6 10.165c2.789-.725 4.533 1.6 4.533 1.6L8.448.762z"
      }
    }), h("path", {
      attrs: {
        d: "M16.912 10.048c2.133-.709 3.648 1.376 3.648 1.376l-3.387-7.509z"
      }
    }), h("path", {
      attrs: {
        d: "M20.507 15.109c-.949 0-1.024.533-1.952.533-.811 0-1.152-.533-2.133-.533s-1.189.571-2.085.571-1.344-.571-2.293-.571-1.6.597-2.315.597-1.195-.597-2.368-.597c-1.312 0-1.6.891-2.485.891h17.845c-.976 0-.976-.891-2.213-.891z"
      }
    }), h("path", {
      attrs: {
        d: "M7.36 14.443c1.2 0 1.632.597 2.347.597s1.365-.597 2.315-.597 1.344.571 2.293.571 1.067-.571 2.085-.571 1.344.533 2.133.533.987-.421 1.712-.501l.293-3.04-3.989-.288.277-7.904-.288.533-4.427 8c1.947-2.272 3.413-2.027 3.968-1.808l-.043 1.147-1.867-.133-.416.88a291.848 291.848 0 0 1-6.8-.395L7.913 0l-.389.608L.233 10.949C3.166 8.394 5.806 9.44 6.59 9.85l-.128 1.563C3.027 11.2.233 10.949.233 10.949v.453l2.576.533s.965 2.293 2.816 3.141a2.935 2.935 0 0 1 1.728-.635z"
      }
    })]);
  }
};

var BlueCruiseIcon = {
  name: 'BlueCruiseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-blue-cruise"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.565 12.939L9.653.672 8.634 12.016c2.565-1.173 5.931.923 5.931.923z"
      }
    }), h("path", {
      attrs: {
        d: "M7.611 11.733L8.891.682.704 11.098c4.299-1.28 6.907.635 6.907.635z"
      }
    }), h("path", {
      attrs: {
        d: "M9.029 15.045c.72 0 1.365-.597 2.315-.597s1.344.571 2.293.571h.039c.192 0 .377-.031.549-.089l.34-1.367C9.267 13.297 4.3 12.644-.531 11.624s.877 1.619 3.731 3.72h.997c.869 0 1.173-.891 2.485-.891 1.2-.005 1.632.592 2.347.592z"
      }
    }), h("path", {
      attrs: {
        d: "M15.808 15.109c-.997 0-1.189.571-2.085.571s-1.344-.571-2.293-.571-1.6.597-2.315.597-1.147-.597-2.347-.597c-1.307 0-1.611.891-2.501.891h13.227a2.436 2.436 0 0 0-1.676-.89z"
      }
    })]);
  }
};

var BluetoothIcon = {
  name: 'BluetoothIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bluetooth"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
      }
    })]);
  }
};

var BoldIcon = {
  name: 'BoldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bold"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    }), h("path", {
      attrs: {
        d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    })]);
  }
};

var BookOpenIcon = {
  name: 'BookOpenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book-open"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      }
    }), h("path", {
      attrs: {
        d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      }
    })]);
  }
};

var BookIcon = {
  name: 'BookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }
    }), h("path", {
      attrs: {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      }
    })]);
  }
};

var BookingManager2Icon = {
  name: 'BookingManager2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-booking-manager-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.08 1.536H4.453a.987.987 0 0 0-.987.987v1.925H1.535A1.542 1.542 0 0 0-.001 5.984v6.934a1.542 1.542 0 0 0 1.536 1.536h11.627a1.542 1.542 0 0 0 1.536-1.536v-2.464h1.381a.987.987 0 0 0 .987-.987V2.523a.987.987 0 0 0-.987-.987zm-2.917 11.829H1.536a.437.437 0 0 1-.437-.437v-1.067H13.6v1.067a.437.437 0 0 1-.437.437zM1.099 9.755V5.984c0-.242.196-.437.437-.437h11.627c.242 0 .437.196.437.437v3.765z"
      }
    })]);
  }
};

var BookingManager3Icon = {
  name: 'BookingManager3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-booking-manager-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.461.597c-2.981 0-5.397.469-5.397 1.067v.405c0 .581 2.416 1.067 5.397 1.067s5.397-.469 5.397-1.067v-.421c0-.581-2.416-1.051-5.397-1.051z"
      }
    }), h("path", {
      attrs: {
        d: "M16.533 3.461c-.731.411-2.741.704-5.099.704s-4.368-.293-5.099-.704a.204.204 0 0 0-.299.179v.712h-.34a5.537 5.537 0 1 0 4.07 9.289c.537.028 1.07.05 1.662.05 2.981 0 5.397-.469 5.397-1.067v-.947a.203.203 0 0 0-.3-.178c-.73.41-2.74.703-5.098.703h-.699c.166-.344.303-.745.394-1.164l.305-.036c2.981 0 5.397-.469 5.397-1.067v-.936a.203.203 0 0 0-.3-.178c-.73.41-2.74.703-5.098.703h-.203a5.508 5.508 0 0 0-.218-1.25l.421.039c2.981 0 5.397-.469 5.397-1.067v-.931a.203.203 0 0 0-.3-.178c-.73.41-2.74.703-5.098.703h-1.104a5.632 5.632 0 0 0-1.167-1.271 28.45 28.45 0 0 0 2.271.093c2.981 0 5.397-.469 5.397-1.067V3.64a.203.203 0 0 0-.295-.181zm-6.4 6.4a4.437 4.437 0 1 1-4.437-4.437h.043a4.443 4.443 0 0 1 4.443 4.443z"
      }
    }), h("path", {
      attrs: {
        d: "M5.477 7.264v.085a1.531 1.531 0 0 0-1.675 1.43c0 .82.57 1.119 1.674 1.434v1.019c-.677-.149-.752-.8-1.211-.8a.533.533 0 0 0-.533.533c0 .496.624 1.152 1.723 1.152v.347c0 .197.091.272.235.272s.235-.075.235-.272v-.347c.864-.032 1.712-.475 1.712-1.429 0-.832-.533-1.243-1.712-1.536v-.907c.571.123.72.597 1.067.597l.032.001a.501.501 0 0 0 .501-.497c0-.683-1.131-1.003-1.6-1.003v-.085c0-.197-.091-.272-.235-.272s-.213.08-.213.277zm0 1.776c-.272-.032-.533-.187-.533-.453s.277-.347.533-.368zm.475 1.296c.288.053.533.165.533.485s-.229.395-.533.421z"
      }
    })]);
  }
};

var BookingManagerIcon = {
  name: 'BookingManagerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-booking-manager"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.333 14.133H1.674V5.456h11.659v2.405l1.531-.992V3.802a.981.981 0 0 0-.964-.976h-1.809v.656a1.253 1.253 0 0 1-2.506 0v-.656H5.489v.656a1.253 1.253 0 0 1-2.506 0v-.656H1.127a.981.981 0 0 0-.981.976v10.902a.98.98 0 0 0 .981.981H13.9a.98.98 0 0 0 .981-.981v-3.147l-1.547.992z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 6.763h2.56v2.56h-2.56v-2.56z"
      }
    }), h("path", {
      attrs: {
        d: "M8.816 6.763h-2.56v2.56h1.253a1.906 1.906 0 0 1 1.293-1.181z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 10.421h2.56v2.56h-2.56v-2.56z"
      }
    }), h("path", {
      attrs: {
        d: "M6.256 10.421v2.56h2.56v-.661l-.901-.939a1.937 1.937 0 0 1-.494-.947z"
      }
    }), h("path", {
      attrs: {
        d: "M10.757 8.667l.533.533 1.195-.773V6.763h-2.56v1.392c.328.103.608.28.831.511z"
      }
    }), h("path", {
      attrs: {
        d: "M17.296 7.637c-.763-1.152-2.363.363-3.061.821l-3.109 2.021c-.571-.597-1.685-2.181-2.565-1.067-.459.587-.069 1.141.352 1.6s.805.848 1.221 1.253c.795.805 1.477.224 2.224-.261l3.147-2.043c.699-.443 2.512-1.216 1.792-2.325z"
      }
    }), h("path", {
      attrs: {
        d: "M4.235 4.267a.763.763 0 0 0 .763-.763V1.067a.763.763 0 1 0-1.526 0v2.437c0 .421.341.763.763.763z"
      }
    }), h("path", {
      attrs: {
        d: "M10.837 4.267a.763.763 0 0 0 .763-.763V1.067a.763.763 0 1 0-1.526 0v2.437c0 .421.341.763.763.763z"
      }
    })]);
  }
};

var BookmarkIcon = {
  name: 'BookmarkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bookmark"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var BoxIcon = {
  name: 'BoxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-box"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var Breakfast2Icon = {
  name: 'Breakfast2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-breakfast-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.195 8.709a.722.722 0 0 1 .144.117.767.767 0 0 1 .164.754c.49.427.804 1.046.834 1.738 0 2.021-3.05 3.664-6.8 3.664S.732 13.334.732 11.334c0-.901.613-1.728 1.6-2.368l-.053-.117a1.281 1.281 0 0 1-.127-.365C.951 9.228.199 10.231.199 11.335c0 2.309 3.291 4.192 7.339 4.192s7.333-1.883 7.333-4.192a3.072 3.072 0 0 0-1.182-2.261l1.908-.005a1.6 1.6 0 0 0 1.468-1.056.273.273 0 0 0 .027-.112.235.235 0 0 0-.235-.235h-3.586a.97.97 0 0 1-.077 1.048z"
      }
    }), h("path", {
      attrs: {
        d: "M17.952 1.483a2.325 2.325 0 0 0-1.497-.688h-.007a.32.32 0 0 0-.314-.32h-7.84a.32.32 0 0 0-.293.319v.007c.001 1.717.286 3.367.81 4.907.114-.22.299-.289.5-.289h.002a.94.94 0 0 1 .74.371l.002.002a.728.728 0 0 1 .729.002.872.872 0 0 1 .257.205 1.076 1.076 0 0 1 .563-.132c.165.001.323.04.463.109a1.137 1.137 0 0 1 .525 1.188l2.134-.007a.31.31 0 0 0 .261-.143c.234-.376.443-.807.605-1.261.927-.047 2.607-.581 2.815-2.383a2.253 2.253 0 0 0-.457-1.892zm-.427 1.76a1.73 1.73 0 0 1-1.595 1.482c.229-.88.395-1.909.457-2.965.338-.019.637.123.861.341a1.385 1.385 0 0 1 .275 1.156z"
      }
    }), h("path", {
      attrs: {
        d: "M1.829 11.989c.491.741 1.813.768 2.448.779H4.4c.344.016.654.151.892.364.18.121.409.276.713.447a3.861 3.861 0 0 0 1.818.346h-.004a8.185 8.185 0 0 0 4.48-1.326c.742-.514 1.035-1.202.811-1.917a1.762 1.762 0 0 0-.143-.312 2.294 2.294 0 0 0-.317-.425c.252-.233.502-.532.321-.751a.16.16 0 0 0-.058-.037h-.289a.206.206 0 0 1-.069-.058c-.15-.193.576-.912.314-1.131a.212.212 0 0 0-.141-.053h-.003c-.075 0-.149.027-.229.027a.301.301 0 0 1-.239-.122.742.742 0 0 1-.117-.539l-.001-.14a2.522 2.522 0 0 0-.001-.262l.001-.014a.487.487 0 0 0-.254-.427.534.534 0 0 0-.226-.055c-.326 0-.534.368-.72.368h-.048c-.133-.043-.123-.149-.155-.261a.313.313 0 0 0-.163-.186.214.214 0 0 0-.103-.027c-.197 0-.325.315-.501.315-.149 0-.059-.16-.277-.437a.417.417 0 0 0-.325-.176.35.35 0 0 0-.225.091c.133.245.214.537.219.846l.128.002c.041.003.08.008.117.017.23.059.42.215.526.421.074.199.115.424.115.658s-.041.459-.118.667q-.246-.077-.529-.125c0-.085.043-.176.059-.267.02-.081.037-.179.047-.279l.001-.137.001-.032a.452.452 0 0 0-.16-.346.28.28 0 0 0-.089-.037h-.05c-.16 0-.219.208-.395.208h-.091c-.283-.096-.037-1.307-.443-1.355h-.053a.26.26 0 0 0-.129.038l.001-.001a.807.807 0 0 0-.112.096.635.635 0 0 1-.105.089l-.002.001a.317.317 0 0 1-.154.043.497.497 0 0 1-.141 0 .49.49 0 0 1-.174-.091l-.052-.053a1.065 1.065 0 0 1-.095-.095l-.065-.086-.075-.107-.117-.187-.053-.08-.085-.123-.064-.075-.085-.091-.075-.053a.507.507 0 0 0-.098-.052l-.1-.001a.496.496 0 0 0-.163 0c-.664.09-.477.885-.792.981h-.069a.192.192 0 0 1-.102-.038l-.091-.08a.506.506 0 0 0-.099-.073l-.003-.001a.364.364 0 0 0-.149-.037h-.145c-.368.037-.192.603-.443.715h-.064a.124.124 0 0 1-.065 0h.001l-.091-.069-.117-.075a1.106 1.106 0 0 0-.184-.078.643.643 0 0 0-.184-.029h-.08a.481.481 0 0 0-.179.038l.003-.001a.405.405 0 0 0-.133.101.426.426 0 0 0-.069.136l-.001.035a.48.48 0 0 0 .001.179c.042.296.389.717.09.957a.418.418 0 0 1-.274.101h-.259a.246.246 0 0 0-.186.085c-.166.182 0 .331.096.598a1.034 1.034 0 0 1-.002.594l-.014-.007a3.09 3.09 0 0 0-.656.618 2.818 2.818 0 0 0-.42.523 1.347 1.347 0 0 0 .029 1.341zm4.144-3.034a1.427 1.427 0 0 0-.88 1.222c0 .82.89 1.482 1.984 1.482s1.989-.661 1.989-1.477A1.486 1.486 0 0 0 8.01 8.889c2.582.115 4.256 1.027 4.555 1.96a1.17 1.17 0 0 1-.628 1.32c-2.087 1.395-4.86 1.406-5.682.947a7.424 7.424 0 0 1-.677-.427 1.946 1.946 0 0 0-1.175-.453h-.137c-.501 0-1.68-.032-2.016-.533a.846.846 0 0 1 .002-.81c.472-1.068 1.71-1.713 3.72-1.937zm1.862.314a3.633 3.633 0 0 0-1.31.118c-.465.175-.844.458-.577.634a.256.256 0 0 1-.178.479c-.024-.008-.665-.426-.174-.885a2.003 2.003 0 0 1 1.608-.586c.686.037.92.234.632.239z"
      }
    })]);
  }
};

var BreakfastIcon = {
  name: 'BreakfastIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-breakfast"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.189 7.915H5.864a.235.235 0 0 0-.211.338 1.6 1.6 0 0 0 1.492 1.065h6.763a1.602 1.602 0 0 0 1.49-1.056.273.273 0 0 0 .027-.112.235.235 0 0 0-.235-.235h-.002z"
      }
    }), h("path", {
      attrs: {
        d: "M16.272 1.739a2.325 2.325 0 0 0-1.497-.672h-.007a.32.32 0 0 0-.314-.32h-7.84a.32.32 0 0 0-.32.32c.075 3.803 1.099 5.691 1.424 6.192a.31.31 0 0 0 .261.144h5.099a.31.31 0 0 0 .261-.143c.234-.376.443-.807.605-1.261.927-.047 2.607-.581 2.815-2.383a2.258 2.258 0 0 0-.489-1.881zm-.427 1.76a1.73 1.73 0 0 1-1.595 1.482c.229-.88.395-1.909.457-2.965.338-.019.637.123.861.341a1.39 1.39 0 0 1 .276 1.15z"
      }
    }), h("path", {
      attrs: {
        d: "M12.085 11.28a3.156 3.156 0 0 0-1.446-.346c-.311 0-.612.044-.896.127a2.255 2.255 0 0 0-1.738-.795c-.526 0-1.011.172-1.403.463a2.28 2.28 0 0 0-1.391-.463 2.35 2.35 0 0 0-1.758.787 3.237 3.237 0 0 0-2.34.235 1.92 1.92 0 0 0-.814 1.414 1.672 1.672 0 0 0 .39 1.395c.937 1.065 3.31 1.177 4.868 1.177h1.445c1.44 0 4.443.053 5.525-1.173a1.65 1.65 0 0 0 .388-1.397 1.899 1.899 0 0 0-.824-1.42zm-5.6-.149l.064.048c-.176.533-.677 1.925-1.168 1.824-.592-.123.123-1.707.384-2.245.275.087.514.213.726.372zm2.496-.192c.217.135.403.294.563.477l.061.072c-.176.363-.533 1.067-.827.997-.389-.144.016-1.136.203-1.552zm-6.346 1.776c-.347-.128 0-.971.171-1.36.243.023.464.065.678.124z"
      }
    })]);
  }
};

var BriefcaseIcon = {
  name: 'BriefcaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-briefcase"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      }
    })]);
  }
};

var Bus2Icon = {
  name: 'Bus2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bus-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.029.949A22.867 22.867 0 0 0 7.982.474C7.903.472 7.79.472 7.677.472c-1.666 0-3.292.174-4.86.504-.529.127-1.03.728-1.031 1.445v11.2a.614.614 0 0 0 .613.603h.853v.565a.737.737 0 0 0 1.472 0v-.565h6.544v.565a.737.737 0 0 0 1.472 0v-.565h.853a.613.613 0 0 0 .613-.613v-11.2A1.51 1.51 0 0 0 13.038.952zm-8.565.795c0-.18.146-.325.325-.325h6.41c.18 0 .325.146.325.325v.251c0 .18-.146.325-.325.325h-6.4a.325.325 0 0 1-.325-.325zm-.469 10.965a.853.853 0 1 1 0-1.706.853.853 0 0 1 0 1.706zm6.085.854H5.92v-1.099h4.16zm1.925-.848a.853.853 0 1 1 .853-.853.853.853 0 0 1-.853.848zm.854-4.294a.614.614 0 0 1-.591.608H3.734a.613.613 0 0 1-.613-.613V3.733a.613.613 0 0 1 .613-.597h8.533a.615.615 0 0 1 .592.597z"
      }
    })]);
  }
};

var BusIcon = {
  name: 'BusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.915 2.565H2.134a1.069 1.069 0 0 0-.958.713L.144 6.427A2.938 2.938 0 0 0 0 7.344v4.502h2.341v-.075a2.251 2.251 0 0 1 4.502 0v.075h5.552v-.075a2.251 2.251 0 0 1 4.502 0v.075h1.771V3.313a.753.753 0 0 0-.752-.747zM3.632 8.725a.267.267 0 0 1-.267.267H1.872a.267.267 0 0 1-.267-.267V7.329c0-.182.029-.357.084-.52l.866-2.655a.268.268 0 0 1 .254-.187h.535c.147 0 .267.119.267.267zm4.747-2.069c0 .074-.06.133-.133.133H5.163a.133.133 0 0 1-.133-.133V4.101c0-.074.06-.133.133-.133h3.083c.074 0 .133.06.133.133zm4.592 0c0 .074-.06.133-.133.133h-3.2a.133.133 0 0 1-.133-.133V4.101c0-.074.06-.133.133-.133h3.2c.074 0 .133.06.133.133zm4.304-1.397v1.264a.267.267 0 0 1-.267.267h-2.469a.267.267 0 0 1-.267-.267V4.235c0-.147.119-.267.267-.267h2.421c.174 0 .315.141.315.315z"
      }
    }), h("path", {
      attrs: {
        d: "M4.587 10.133a1.664 1.664 0 1 0 0 3.328 1.664 1.664 0 0 0 0-3.328zm0 2.358a.693.693 0 1 1 .693-.693.694.694 0 0 1-.693.672z"
      }
    }), h("path", {
      attrs: {
        d: "M14.645 10.133a1.664 1.664 0 1 0 0 3.328 1.664 1.664 0 0 0 0-3.328zm0 2.358a.693.693 0 1 1 .693-.693.694.694 0 0 1-.693.672z"
      }
    })]);
  }
};

var ButterflyIcon = {
  name: 'ButterflyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-butterfly"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.192 2.293c-2.859 0-6.592 4.315-7.323 5.173V7.26a.34.34 0 0 0-.096-.237 4.738 4.738 0 0 1 .795-2.241c.139-.154.395-.069.592-.213s.304-.347.144-.384h-.028a.857.857 0 0 0-.409.104 1.71 1.71 0 0 0-.252.201h-.032a4.335 4.335 0 0 0-.964 2.428c-.026.003-.055-.003-.086-.003s-.06.006-.087.018a4.344 4.344 0 0 0-.986-2.402l.006.007h-.032a1.607 1.607 0 0 0-.25-.199.846.846 0 0 0-.411-.106h-.029c-.159.037.001.283.145.384s.453.059.603.229c.422.624.702 1.377.777 2.189a.435.435 0 0 0-.095.256v.174C7.465 6.606 3.731 2.292.873 2.292c-2.085 0 .107 2.133.416 3.307s.107 2.133.533 2.469c.401.231.866.415 1.358.527a1.896 1.896 0 0 0-1.231 1.77c0 .393.122.758.33 1.059 1.111 2.047 2.812 2.847 3.889 1.909a14.475 14.475 0 0 0 2.046-2.498l.066 1.176c0 .192.037.341.229.341s.229-.155.229-.341l.032-1.232c.626.963 1.317 1.8 2.092 2.551 1.071.942 2.788.142 3.897-1.911a1.86 1.86 0 0 0-.926-2.812 5.24 5.24 0 0 0 1.404-.55c.429-.302.221-1.272.509-2.456s2.528-3.312.443-3.307z"
      }
    })]);
  }
};

var CabinCrewIcon = {
  name: 'CabinCrewIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cabin-crew"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.75 9.9a5.8 5.8 0 1 1-11.6 0 5.8 5.8 0 0 1 11.6 0z"
      }
    }), h("path", {
      attrs: {
        d: "M2.6 7.5s3.8-3.35 5.15-3.4C9.05 4.1 13 7.9 13 7.9l3.1-2.4L7.75.25 0 5.1l2.6 2.4z"
      }
    }), h("path", {
      attrs: {
        d: "M4.4 6.1S2.25 5 2.25 3.9 4.8.1 8.05.1s5.55 2.5 5.55 3.8-3.2 2.55-3.2 2.55l-6-.35z"
      }
    }), h("path", {
      attrs: {
        d: "M9.35 3.85c-.25.4-.75.65-1.3.65S7 4.25 6.75 3.85l-.25.25v-.8h.8l-.2.2c.15.3.45.5.8.55V2.9c-.35-.1-.6-.4-.6-.75 0-.45.35-.8.8-.8s.8.35.8.8c0 .35-.25.65-.6.75v1.15c.35-.05.65-.25.8-.55l-.2-.2h.8v.8l-.35-.25zm-.9-1.7c0-.2-.15-.4-.4-.4-.2 0-.4.15-.4.4s.15.4.4.4c.2 0 .4-.2.4-.4z"
      }
    })]);
  }
};

var CalendarIcon = {
  name: 'CalendarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-calendar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }
    })]);
  }
};

var CamelIcon = {
  name: 'CamelIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camel"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.541 6.229c-.4-1.712-2.075-2.357-2.213-2.72s.027-2.245-1.755-2.245c-2.32 0-1.259 2.693-2.448 2.773s-.459-2.688-2.864-2.528c-2.843.192-.832 4.117-2.443 4.117-1.216 0-.779-1.451-1.552-2.357s-.795-.603-.795-.603a.78.78 0 0 0-.949-.462c-.72.159-.298.319-.394.532s-.928-.181-1.6.203-.528.736-.48.997 0 .4.581.224 1.227.581 1.227 1.248-.843 3.056 1.536 4.565 3.467.357 3.467.357c.187.565.295 1.216.295 1.892 0 .366-.032.724-.092 1.073-.021.208.309.496.144.496a.621.621 0 0 0-.444.123c-.158.122-.846.644-.846.746a7.463 7.463 0 0 0 2.045-.005c.142-.075.185-.417.185-.758.04-.714.148-1.383.32-2.027.166-.597-.016-1.605.416-1.605s2.368.832 5.333-1.333c.224-.192.224.395.224.656.225.686.472 1.266.762 1.82s-.373 2.233-.565 2.356-.304-.101-.421.08a4.296 4.296 0 0 0-.453.701c-.054.184 1.759.211 1.759-.072s.501-2.443.885-2.805.059-.784 0-1.024-.261-1.669-.261-1.669 1.803-1.035 1.397-2.747z"
      }
    })]);
  }
};

var CameraOffIcon = {
  name: 'CameraOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
      }
    })]);
  }
};

var CameraIcon = {
  name: 'CameraIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "13",
        r: "4"
      }
    })]);
  }
};

var CanoeIcon = {
  name: 'CanoeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-canoe"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.25 7.9c0 4.05-1.85 7.35-2.75 7.35s-2.75-3.3-2.75-7.35S8.6.55 9.5.55c.9.05 2.75 3.3 2.75 7.35z"
      }
    }), h("path", {
      attrs: {
        d: "M9.5 7c-1.1 0-1.85 3.45-1.2 4.25.15.2.45.35.7.35h.95c.25 0 .55-.1.7-.35.7-.8-.05-4.25-1.15-4.25z"
      }
    }), h("path", {
      attrs: {
        d: "M4.85 4.25l.65-.5V1.7c-.55-.4-1.4-.4-1.9 0v2.05l.65.5v7.3l-.65.5v2.05c.55.4 1.4.4 1.9 0v-2.05l-.65-.5v-7.3z"
      }
    }), h("path", {
      attrs: {
        d: "M3.6 1.7v2.05l.65.5v7.3l-.65.5v2.05c.25.2.6.3.95.3V1.35c-.35.05-.7.15-.95.35z"
      }
    })]);
  }
};

var Car2Icon = {
  name: 'Car2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-car-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.035 10.448h-.267V7.669l-1.152-1.483s-.619-2.219-.816-2.987-.64-1.125-1.189-1.125H4.39c-.549 0-1.003.315-1.189 1.125s-.816 2.987-.816 2.987L1.233 7.669v2.779H.966a.283.283 0 0 0-.283.283v1.173c0 .156.127.283.283.283h1.328v1.158c0 .321.26.581.581.581h.859a.581.581 0 0 0 .56-.581v-1.153h7.413v1.152c0 .314.248.569.559.581h.859a.58.58 0 0 0 .581-.581v-1.152h1.328a.283.283 0 0 0 .283-.283v-1.178a.283.283 0 0 0-.283-.283zM4.747 9.781V8.533h6.555v1.269zm8.304-1.392a.741.741 0 1 1 0 1.483.741.741 0 0 1 0-1.483zm-8.72-5.573h7.339l.981 3.349H3.35zM2.949 8.389a.741.741 0 1 1 0 1.483.741.741 0 0 1 0-1.483z"
      }
    })]);
  }
};

var CarIcon = {
  name: 'CarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-car"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.944 6.699a6.95 6.95 0 0 0-.824-.285c-.143-.036-.213-.097-.247-.177L14.667 3.52a.728.728 0 0 0-.628-.411H6.64a1.032 1.032 0 0 0-.681.382L3.941 6.266a.286.286 0 0 1-.207.133 7.27 7.27 0 0 0-2.471.702C.479 7.546.111 9.749-.006 10.623a.3.3 0 0 0 .297.336h2.103a2.4 2.4 0 0 1 4.8 0h3.792a2.4 2.4 0 0 1 4.8 0h.681a.3.3 0 0 0 .179-.059l.869-.645a.302.302 0 0 0 .123-.24V7.764a1.014 1.014 0 0 0-.686-1.064zM9.909 6.4a.24.24 0 0 1-.24.24H5.594a.24.24 0 0 1-.187-.39l1.477-2.101a.242.242 0 0 1 .187-.091h2.597a.24.24 0 0 1 .24.24zm4.315.24H11.2a.24.24 0 0 1-.24-.24V4.267a.24.24 0 0 1 .239-.219h2.3a.24.24 0 0 1 .223.158l.737 2.103a.24.24 0 0 1-.226.32h-.009z"
      }
    }), h("path", {
      attrs: {
        d: "M13.36 12.891a1.82 1.82 0 1 0 0-3.638 1.82 1.82 0 0 0 0 3.638zm0-2.582c.37.003.675.272.735.625l.001.004a.625.625 0 0 1 0 .131v-.003a.763.763 0 1 1-1.52-.003v.003a.625.625 0 0 1 0-.131v.003a.754.754 0 0 1 .786-.624z"
      }
    }), h("path", {
      attrs: {
        d: "M4.8 12.891a1.82 1.82 0 1 0 0-3.638 1.82 1.82 0 0 0 0 3.638zm0-2.582c.37.003.675.272.735.625l.001.004a.625.625 0 0 1 0 .131v-.003a.763.763 0 1 1-1.52-.003v.003a.625.625 0 0 1 0-.131v.003a.754.754 0 0 1 .786-.624z"
      }
    })]);
  }
};

var CastIcon = {
  name: 'CastIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cast"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "20",
        x2: "2.01",
        y2: "20"
      }
    })]);
  }
};

var CheckCircleIcon = {
  name: 'CheckCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    }), h("polyline", {
      attrs: {
        points: "22 4 12 14.01 9 11.01"
      }
    })]);
  }
};

var CheckSquareIcon = {
  name: 'CheckSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-square"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 11 12 14 22 4"
      }
    }), h("path", {
      attrs: {
        d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }
    })]);
  }
};

var CheckIcon = {
  name: 'CheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 6 9 17 4 12"
      }
    })]);
  }
};

var ChevronDownIcon = {
  name: 'ChevronDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 12 15 18 9"
      }
    })]);
  }
};

var ChevronLeftIcon = {
  name: 'ChevronLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 18 9 12 15 6"
      }
    })]);
  }
};

var ChevronRightIcon = {
  name: 'ChevronRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 18 15 12 9 6"
      }
    })]);
  }
};

var ChevronUpIcon = {
  name: 'ChevronUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "18 15 12 9 6 15"
      }
    })]);
  }
};

var ChevronsDownIcon = {
  name: 'ChevronsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "7 13 12 18 17 13"
      }
    }), h("polyline", {
      attrs: {
        points: "7 6 12 11 17 6"
      }
    })]);
  }
};

var ChevronsLeftIcon = {
  name: 'ChevronsLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "11 17 6 12 11 7"
      }
    }), h("polyline", {
      attrs: {
        points: "18 17 13 12 18 7"
      }
    })]);
  }
};

var ChevronsRightIcon = {
  name: 'ChevronsRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "13 17 18 12 13 7"
      }
    }), h("polyline", {
      attrs: {
        points: "6 17 11 12 6 7"
      }
    })]);
  }
};

var ChevronsUpIcon = {
  name: 'ChevronsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 11 12 6 7 11"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 12 13 7 18"
      }
    })]);
  }
};

var ChildIcon = {
  name: 'ChildIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-child"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.949 3.291a1.856 1.856 0 1 1-3.712 0 1.856 1.856 0 0 1 3.712 0z"
      }
    }), h("path", {
      attrs: {
        d: "M15.621 3.291a1.856 1.856 0 1 1-3.712 0 1.856 1.856 0 0 1 3.712 0z"
      }
    }), h("path", {
      attrs: {
        d: "M18.4 4.667a.816.816 0 1 0-1.099-1.209l-2.218 2.01a2.602 2.602 0 0 1-1.479.613 2.612 2.612 0 0 1-1.501-.616l-2.21-2.002a.793.793 0 0 0-.456-.192h-.205a.796.796 0 0 0-.46.193l-2.218 2.01a2.602 2.602 0 0 1-1.479.613 2.618 2.618 0 0 1-1.501-.616l-2.21-2.008a.814.814 0 0 0-1.387.583c0 .249.112.472.287.622l2.241 2.033c.363.367.588.872.588 1.43l-.001.078v5.538a.816.816 0 1 0 1.632 0V10.67h.699v3.077a.816.816 0 1 0 1.632 0V8.19l-.001-.07c0-.547.216-1.043.567-1.408l1.711-1.551 2.32 2.133v.053l-1.141 4.656h1.141v1.771a.816.816 0 1 0 1.632 0v-1.797h.699v1.771a.816.816 0 1 0 1.632 0v-1.771h1.141l-1.141-4.656v-.123z"
      }
    })]);
  }
};

var ChromeIcon = {
  name: 'ChromeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chrome"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "21.17",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "3.95",
        y1: "6.06",
        x2: "8.54",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "10.88",
        y1: "21.94",
        x2: "15.46",
        y2: "14"
      }
    })]);
  }
};

var CircleIcon = {
  name: 'CircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    })]);
  }
};

var ClipboardIcon = {
  name: 'ClipboardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clipboard"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    }), h("rect", {
      attrs: {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
        ry: "1"
      }
    })]);
  }
};

var ClockIcon = {
  name: 'ClockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clock"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 6 12 12 16 14"
      }
    })]);
  }
};

var CloudDrizzleIcon = {
  name: 'CloudDrizzleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-drizzle"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "19",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "19",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "17"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudLightningIcon = {
  name: 'CloudLightningIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-lightning"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
      }
    }), h("polyline", {
      attrs: {
        points: "13 11 9 17 15 17 11 23"
      }
    })]);
  }
};

var CloudOffIcon = {
  name: 'CloudOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var CloudRainIcon = {
  name: 'CloudRainIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-rain"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudSnowIcon = {
  name: 'CloudSnowIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-snow"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "16",
        x2: "8.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "20",
        x2: "8.01",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12.01",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "16",
        x2: "16.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "20",
        x2: "16.01",
        y2: "20"
      }
    })]);
  }
};

var CloudIcon = {
  name: 'CloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      }
    })]);
  }
};

var CodeIcon = {
  name: 'CodeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-code"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 18 22 12 16 6"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 2 12 8 18"
      }
    })]);
  }
};

var CodepenIcon = {
  name: 'CodepenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codepen"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "15.5"
      }
    }), h("polyline", {
      attrs: {
        points: "22 8.5 12 15.5 2 8.5"
      }
    }), h("polyline", {
      attrs: {
        points: "2 15.5 12 8.5 22 15.5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "8.5"
      }
    })]);
  }
};

var CodesandboxIcon = {
  name: 'CodesandboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codesandbox"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 4.21 12 6.81 16.5 4.21"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 19.79 7.5 14.6 3 12"
      }
    }), h("polyline", {
      attrs: {
        points: "21 12 16.5 14.6 16.5 19.79"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var CoffeeIcon = {
  name: 'CoffeeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-coffee"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8h1a4 4 0 0 1 0 8h-1"
      }
    }), h("path", {
      attrs: {
        d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "1",
        x2: "6",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "1",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "1",
        x2: "14",
        y2: "4"
      }
    })]);
  }
};

var ColumnsIcon = {
  name: 'ColumnsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-columns"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
      }
    })]);
  }
};

var CommandIcon = {
  name: 'CommandIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-command"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
      }
    })]);
  }
};

var CompassIcon = {
  name: 'CompassIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-compass"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }
    })]);
  }
};

var Contact2Icon = {
  name: 'Contact2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-contact-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .16a7.84 7.84 0 1 0 0 15.68A7.84 7.84 0 0 0 8 .16zm0 14.635a6.795 6.795 0 1 1-.003-13.59 6.795 6.795 0 0 1 .004 13.59z"
      }
    }), h("path", {
      attrs: {
        d: "M11.611 11.835l-1.349-2.133a.349.349 0 0 0-.487-.112l-.708.575c-.336.16-.645-.171-1.2-.88L6.736 7.466c-.229-.469-.416-.944-.091-1.184l.789-.416a.349.349 0 0 0 .112-.487l.001.001-1.349-2.133a.346.346 0 0 0-.481-.111l-.703.533c-.416.363-1.429 2.043.784 5.643 2.299 3.733 4.379 3.653 4.901 3.392l.811-.384a.352.352 0 0 0 .106-.487z"
      }
    })]);
  }
};

var ContactIcon = {
  name: 'ContactIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-contact"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.304 2.453H1.696a1.6 1.6 0 0 0-1.6 1.6v7.893a1.6 1.6 0 0 0 1.6 1.6h12.608a1.6 1.6 0 0 0 1.6-1.6V4.053a1.6 1.6 0 0 0-1.6-1.6zM1.696 3.52h12.608c.295 0 .533.239.533.533v.923L8 9.067 1.163 4.976v-.923c0-.295.239-.533.533-.533zm12.608 8.96H1.696a.533.533 0 0 1-.533-.533V6.219L8 10.294l6.837-4.075v5.728a.533.533 0 0 1-.533.533z"
      }
    })]);
  }
};

var CopyIcon = {
  name: 'CopyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-copy"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }
    })]);
  }
};

var Copyright2Icon = {
  name: 'Copyright2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-copyright-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.992 12.325l-.011-.005-.069.043-.539.384v2.331H1.136V3.014h2.005V.923h7.232v3.776l.8-1.456V.123H2.768L.336 2.576v13.301h10.837v-3.696l-.16.112-.021.032z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 4.496h6.309v.8H2.603v-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 6.587v.8h6.288l.021-.032v-.768H2.603z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 9.472h5.141l.437-.8H2.602v.8z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 11.563h4.645l.037-.8H2.602v.8z"
      }
    }), h("path", {
      attrs: {
        d: "M8.16 13.648l.752-.523.219-.16 1.472-1.035-2.763-1.525-.011.176-.011.181-.037.8-.032.64-.091 1.803.501-.357z"
      }
    }), h("path", {
      attrs: {
        d: "M2.603 13.648h4.539l.037-.8H2.603v.8z"
      }
    }), h("path", {
      attrs: {
        d: "M12.8 1.36l-.373.683.288.16.469.256L15.2 3.568l.149-.272.224-.411a.605.605 0 0 0-.237-.825l-1.688-.94a.574.574 0 0 0-.206-.053h-.05a.56.56 0 0 0-.212.001l.004-.001a.601.601 0 0 0-.167.087l-.041.031a.625.625 0 0 0-.137.162z"
      }
    }), h("path", {
      attrs: {
        d: "M14.955 4.037l-2.011-1.115-3.36 6.096-.299-.16 1.088-1.979.8-1.451L12.565 2.9l.08-.139-.459-.251-4.091 7.424 2.768 1.525 2.699-4.907 1.317-2.379.075-.139z"
      }
    })]);
  }
};

var CopyrightIcon = {
  name: 'CopyrightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-copyright"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm.091 11.861h-.044a3.835 3.835 0 0 1-3.835-3.835l.002-.112v.005l-.001-.086a3.856 3.856 0 0 1 3.936-3.855 3.962 3.962 0 0 1 2.977 1.188l-.858.993a3.023 3.023 0 0 0-2.13-.949 2.566 2.566 0 0 0-2.523 2.565l.002.107v-.005a2.57 2.57 0 0 0 2.515 2.698 2.971 2.971 0 0 0 2.187-.979l.882.915a3.927 3.927 0 0 1-3.117 1.349z"
      }
    })]);
  }
};

var CornerDownLeftIcon = {
  name: 'CornerDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 10 4 15 9 20"
      }
    }), h("path", {
      attrs: {
        d: "M20 4v7a4 4 0 0 1-4 4H4"
      }
    })]);
  }
};

var CornerDownRightIcon = {
  name: 'CornerDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 10 20 15 15 20"
      }
    }), h("path", {
      attrs: {
        d: "M4 4v7a4 4 0 0 0 4 4h12"
      }
    })]);
  }
};

var CornerLeftDownIcon = {
  name: 'CornerLeftDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 15 9 20 4 15"
      }
    }), h("path", {
      attrs: {
        d: "M20 4h-7a4 4 0 0 0-4 4v12"
      }
    })]);
  }
};

var CornerLeftUpIcon = {
  name: 'CornerLeftUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 9 9 4 4 9"
      }
    }), h("path", {
      attrs: {
        d: "M20 20h-7a4 4 0 0 1-4-4V4"
      }
    })]);
  }
};

var CornerRightDownIcon = {
  name: 'CornerRightDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 15 15 20 20 15"
      }
    }), h("path", {
      attrs: {
        d: "M4 4h7a4 4 0 0 1 4 4v12"
      }
    })]);
  }
};

var CornerRightUpIcon = {
  name: 'CornerRightUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 9 15 4 20 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 20h7a4 4 0 0 0 4-4V4"
      }
    })]);
  }
};

var CornerUpLeftIcon = {
  name: 'CornerUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 14 4 9 9 4"
      }
    }), h("path", {
      attrs: {
        d: "M20 20v-7a4 4 0 0 0-4-4H4"
      }
    })]);
  }
};

var CornerUpRightIcon = {
  name: 'CornerUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 14 20 9 15 4"
      }
    }), h("path", {
      attrs: {
        d: "M4 20v-7a4 4 0 0 1 4-4h12"
      }
    })]);
  }
};

var CpuIcon = {
  name: 'CpuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cpu"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "1",
        x2: "9",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "1",
        x2: "15",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "9",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "9",
        x2: "23",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "14",
        x2: "23",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "9",
        x2: "4",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "4",
        y2: "14"
      }
    })]);
  }
};

var CreditCardIcon = {
  name: 'CreditCardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-credit-card"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "4",
        width: "22",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "10",
        x2: "23",
        y2: "10"
      }
    })]);
  }
};

var CropIcon = {
  name: 'CropIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crop"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
      }
    }), h("path", {
      attrs: {
        d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
      }
    })]);
  }
};

var CrosshairIcon = {
  name: 'CrosshairIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crosshair"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "18",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "18"
      }
    })]);
  }
};

var DartIcon = {
  name: 'DartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.693 3.787l-.533.597a1.006 1.006 0 0 1-.478.302c.567.96.906 2.117.906 3.352a6.603 6.603 0 1 1-13.206 0 6.603 6.603 0 0 1 9.363-6 .725.725 0 0 1 .2-.514l.532-.607a7.829 7.829 0 0 0-3.51-.818 7.936 7.936 0 1 0 6.691 3.667z"
      }
    }), h("path", {
      attrs: {
        d: "M10.491 3.387a5.264 5.264 0 1 0 1.839 1.651l-.916 1.052a3.925 3.925 0 1 1-1.82-1.665z"
      }
    }), h("path", {
      attrs: {
        d: "M7.269 6.992l1.333-1.493a2.502 2.502 0 0 0-.601-.08 2.587 2.587 0 1 0 2.586 2.587V8a2.53 2.53 0 0 0-.15-.839L9.013 8.779a1.285 1.285 0 0 1-.23.2 1.242 1.242 0 0 1-.783.28h-.01a1.248 1.248 0 0 1-.725-2.264z"
      }
    }), h("path", {
      attrs: {
        d: "M11.509 3.365v.006c0 .055-.02.105-.054.143L7.754 7.658a.444.444 0 0 0 .179.714l.056.001a.333.333 0 0 0 .226 0l.056.001a.449.449 0 0 0 .149-.106l3.696-4.16a.208.208 0 0 1 .063-.047l.081-.001.912-.112h.251a.22.22 0 0 0 .144-.074l1.696-1.899a.21.21 0 0 0 .053-.116l.001-.022-.001-.022a.223.223 0 0 0 0-.08.217.217 0 0 0-.032-.036.203.203 0 0 0-.048-.053h-.048c-.012-.003-.026-.004-.04-.004s-.028.001-.041.004l-1.161.064h-.144l-.032-.043c-.003-.013-.004-.028-.004-.043s.002-.03.004-.044l-.144-1.3a.211.211 0 0 0-.043-.113v.001a.227.227 0 0 0-.084-.063l-.001-.001a.236.236 0 0 0-.097.001h-.068a.21.21 0 0 0-.101.059l-1.685 1.883a.217.217 0 0 0-.053.143v.006z"
      }
    })]);
  }
};

var DatabaseIcon = {
  name: 'DatabaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-database"
    }, ctx.data]), [h("ellipse", {
      attrs: {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }
    }), h("path", {
      attrs: {
        d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
      }
    }), h("path", {
      attrs: {
        d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
      }
    })]);
  }
};

var DeckShowerIcon = {
  name: 'DeckShowerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-deck-shower"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.05 1.05h-3.2c-1.1-.5-2.3-.45-3.3.05l5.4 3.1c-.05-.75-.3-1.5-.75-2.1h1.85c.75 0 1.35.6 1.35 1.35V15.8c0-.3.2-.15.5-.15s.55.45.55-.55V2.75c-.05-.65-1.1-1.7-2.4-1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M4.514 2.576l.675-1.169 5.889 3.401-.675 1.169-5.889-3.401z"
      }
    }), h("path", {
      attrs: {
        d: "M4.303 3.025l.15-.26 5.889 3.401-.15.26-5.889-3.401z"
      }
    }), h("path", {
      attrs: {
        d: "M4.4 3.9c-.05.1-.05.2.05.25s.2 0 .25-.05c0-.1.05-.45.05-.45s-.35.2-.35.25z"
      }
    }), h("path", {
      attrs: {
        d: "M5.3 4.8c.05-.1.1-.4.1-.4s-.35.15-.4.25c-.05.1 0 .2.05.25.1 0 .2 0 .25-.1z"
      }
    }), h("path", {
      attrs: {
        d: "M6.6 6.25c-.05.1 0 .2.05.25.1.05.2 0 .25-.05.05-.1.1-.4.1-.4s-.35.15-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M6 5c-.05.1 0 .2.05.25.1.05.2 0 .25-.05.05-.1.1-.4.1-.4s-.35.15-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M8.15 6.1c.05-.1.1-.4.1-.4s-.35.15-.4.25c-.05.1 0 .2.05.25.1 0 .2-.05.25-.1z"
      }
    }), h("path", {
      attrs: {
        d: "M8 7.15c-.05.1 0 .2.05.25.1.05.2 0 .25-.05.05-.1.1-.4.1-.4s-.35.15-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M8.7 6.4c-.05.1 0 .2.05.25.1.05.2 0 .25-.05.05-.1.1-.4.1-.4s-.35.1-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M9 7.15c-.05.1 0 .2.05.25.1.05.2 0 .25-.05s.1-.4.1-.4-.35.1-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M6.75 5.25c-.05.1 0 .2.05.25.1.05.2 0 .25-.05.05-.1.1-.4.1-.4s-.35.15-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M5.2 5.8c-.05.1 0 .2.05.25.1.05.2 0 .25-.05s.1-.4.1-.4-.35.1-.4.2z"
      }
    }), h("path", {
      attrs: {
        d: "M4.2 15.15h10.25v.95H4.2v-.95z"
      }
    })]);
  }
};

var DeleteIcon = {
  name: 'DeleteIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-delete"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "9",
        x2: "12",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "18",
        y2: "15"
      }
    })]);
  }
};

var Destination2Icon = {
  name: 'Destination2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-destination-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.019 9.605V6.976H13.84v1.323l-1.392-1.536-3.536 3.909h7.077l-.971-1.067z"
      }
    }), h("path", {
      attrs: {
        d: "M5.995 8.261h1.45a.24.24 0 0 0 .192-.385L5.435 4.741h1.541a.24.24 0 0 0 .192-.385L4.379.389a.24.24 0 0 0-.394 0l-2.79 3.969a.24.24 0 0 0 .192.384h1.542L.721 7.878a.24.24 0 0 0 .192.384h1.451L.055 11.633a.24.24 0 0 0 .196.379h2.871v3.989h1.952v-3.989H8.11a.24.24 0 0 0 .195-.379z"
      }
    }), h("path", {
      attrs: {
        d: "M9.6 16h1.461v-2.059l-.001-.027a.58.58 0 0 1 .581-.581h.273a.58.58 0 0 1 .581.581v2.085h2.891v-5.067H9.599zm4.16-2.667a.85.85 0 0 1-.709-.699l.709-.005zm.267 0v-.731h.709a.85.85 0 0 1-.694.73zm.709-.97h-.699v-.736a.85.85 0 0 1 .703.705zm-.965-.736v.709h-.709a.85.85 0 0 1 .705-.709z"
      }
    }), h("path", {
      attrs: {
        d: "M11.621 14.869c0 .08-.064.144-.144.144s-.144-.064-.144-.144c0-.08.064-.144.144-.144s.144.064.144.144z"
      }
    })]);
  }
};

var Destination3Icon = {
  name: 'Destination3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-destination-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M0 16h16a13.892 13.892 0 0 0-5.502-3.059c-.301-.702-.418-1.481-.418-2.287 0-1.233.273-2.403.762-3.451l.512 1.41.421.101-.24.411a3.91 3.91 0 0 1 .06 1.694c-.028.157.094.104.185-.056s1.237-2.048.219-3.632c.511.336.904.817 1.124 1.383l.423.158-.16.533a6.69 6.69 0 0 1 .329 1.629c-.057.413.215.093.306-.125s2.096-4.075-2.507-4.533c0 0 .48-.715 2.032-.613l.416-.48.176.496s1.253.853 1.376.88.219-.101.224-.464-.272-2.048-1.92-2.101-2.443 1.819-2.443 1.819.704-2.832-1.397-3.733a2.103 2.103 0 0 0-2.907 1.011c-.326.739-.005.152.373.131.614.037 1.182.113 1.737.227.092.019.455-.28.455-.28v.533s1.312.731 1.099 1.995c0 0-1.344-2.027-3.675-1.371S4.873 6.573 4.852 6.679s0 .256.405 0a6.834 6.834 0 0 1 1.019-.516l.389-.508.469.261s2.133-.069 3.077.347c0 0-2.256-.171-3.109 1.211a3.457 3.457 0 0 0-.605 1.963c0 .249.026.492.076.726.023.095.14.42.38-.119.209-.425.443-.79.713-1.126l-.009-.554.267.048s1.963-1.632 2.251-1.6c0 0-1.744 3.136-1.563 5.867-.213 0-.432-.032-.651-.032a10.257 10.257 0 0 0-3.839.788 6.653 6.653 0 0 0-.848-3.073c.505.317.924.619 1.308.959l.146-.034v.32c.148.185.281.393.391.615.142.324.212.143.228.073a1.974 1.974 0 0 0-.292-1.527c-.481-.777-1.766-.681-1.766-.681a5.52 5.52 0 0 1 1.762-.197l.254-.15.192.277c.235.096.435.2.625.319.202.145.223.06.213-.01s.059-1.019-1.269-1.392a1.943 1.943 0 0 0-2.087.773.361.361 0 0 1-.008-.093 1.2 1.2 0 0 1 .669-1.076l.007-.307s.208.171.304.149c.271-.057.594-.101.924-.122.239-.001.239-.07.239-.07a1.198 1.198 0 0 0-1.654-.557c-1.188.53-.788 2.13-.788 2.13s-.464-1.067-1.387-1.035A1.186 1.186 0 0 0 .218 9.904v.006c0 .208.059.277.128.261s.784-.501.784-.501l.101-.283.235.272c.88-.059 1.157.347 1.157.347-2.619.261-1.477 2.453-1.424 2.581s.208.309.171.085c.017-.341.074-.662.167-.967l-.098-.271.235-.08c.133-.331.358-.601.644-.785-.575.897.076 1.969.129 2.06s.123.123.101 0a2.185 2.185 0 0 1 .041-.965l-.137-.219.213-.053.293-.773c.269.569.425 1.236.425 1.94 0 .449-.064.883-.183 1.293a13.273 13.273 0 0 0-3.215 2.159z"
      }
    })]);
  }
};

var DestinationPackageTourIcon = {
  name: 'DestinationPackageTourIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-destination-package-tour"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.792 5.486H5.55v-.32h-.261v-.27h-.187V2.235h.187v-.251h.261v-.338L2.917.457.288 1.646v.338H.59v.251h.187v2.661H.59v.251H.288v.338H.046v.32h5.746zm-3.232-.59V2.235h.183v-.251h.384v.251h.187v2.661h-.183v.251h-.389v-.251zm2.011-2.661v2.661h-.169v.251h-.384v-.251h-.187V2.235h.187v-.251h.384v.251zM1.289 4.896V2.235h.187v-.251h.384v.251h.187v2.661H1.86v.251h-.384v-.251z"
      }
    }), h("path", {
      attrs: {
        d: "M8.123 9.833V9.12h-.261v.713H7.86c-.733 0-1.332.576-1.37 1.3l2.971.003a1.373 1.373 0 0 0-1.338-1.303z"
      }
    }), h("path", {
      attrs: {
        d: "M4.16 13.019a.197.197 0 0 1 .388-.001v.422h.521v-.421a.197.197 0 0 1 .388-.001v.422h.521v-.421a.197.197 0 0 1 .388-.001v.422h.521v-.421a.197.197 0 0 1 .388-.001v.422h.521v-.421a.197.197 0 0 1 .388-.001v.422h.521v-.421a.197.197 0 0 1 .388-.001v.422h.503v-.421a.197.197 0 0 1 .388-.001v.422h.526v-.421a.197.197 0 0 1 .388-.001v.422h.526v-.421a.197.197 0 0 1 .388-.001v.422h.457v-.914H3.702v.914h.457z"
      }
    }), h("path", {
      attrs: {
        d: "M4.622 12.306h.357a.76.76 0 0 1 .802-.709l.041-.001c.402 0 .731.312.757.707l.617.002a.76.76 0 0 1 .802-.709l.041-.001c.402 0 .731.312.757.707l.617.002a.806.806 0 0 1 1.6-.004l.357.004v-.878H4.623z"
      }
    }), h("path", {
      attrs: {
        d: "M2.583 9.838l-.462 1.499h.923l-.462-1.499z"
      }
    }), h("path", {
      attrs: {
        d: "M2.121 11.429h.923v.224h-.923v-.224z"
      }
    }), h("path", {
      attrs: {
        d: "M2.304 11.808h.562v.567h-.562v-.567z"
      }
    }), h("path", {
      attrs: {
        d: "M3.141 12.526H2.026v.229l.21.197h.69l.215-.197v-.229z"
      }
    }), h("path", {
      attrs: {
        d: "M2.025 14.176l.21.197h.69l.215-.197v-.224H2.025v.224z"
      }
    }), h("path", {
      attrs: {
        d: "M2.304 13.102h.562v.695h-.562v-.695z"
      }
    }), h("path", {
      attrs: {
        d: "M12.846 11.337h.923l-.462-1.499-.462 1.499z"
      }
    }), h("path", {
      attrs: {
        d: "M12.846 11.429h.923v.224h-.923v-.224z"
      }
    }), h("path", {
      attrs: {
        d: "M13.029 11.808h.562v.567h-.562v-.567z"
      }
    }), h("path", {
      attrs: {
        d: "M13.861 12.526H12.75v.229l.21.197h.69l.21-.197v-.229z"
      }
    }), h("path", {
      attrs: {
        d: "M13.307 14.373h.343l.21-.197v-.224h-1.111v.224l.21.197h.347z"
      }
    }), h("path", {
      attrs: {
        d: "M13.586 14.528h-.558v.517h-.325v-.599a.841.841 0 0 0-.841-.814h-.027a.885.885 0 0 0-.6.234.914.914 0 0 0-1.212 0 .877.877 0 0 0-.598-.234h-.027a.841.841 0 0 0-.841.813v.6H7.314v-.599a.841.841 0 0 0-.841-.814h-.027a.885.885 0 0 0-.6.234.914.914 0 0 0-1.212 0 .877.877 0 0 0-.598-.234h-.004a.841.841 0 0 0-.832.812v.6h-.338v-.517h-.576v.517h-.402v.498H13.98v-.498h-.389zm-1.751-.407h.009c.182 0 .331.144.338.324v.6h-.69v-.599a.339.339 0 0 1 .338-.325h.005zm-1.211 0h.009c.182 0 .331.144.338.324v.6h-.69v-.599a.339.339 0 0 1 .338-.325h.01zm-1.554.325a.348.348 0 0 1 .69-.002v.601h-.69zm-2.601-.325h.009c.182 0 .331.144.338.324v.6h-.69v-.599a.339.339 0 0 1 .338-.325h.01zm-1.212 0h.009c.182 0 .331.144.338.324v.6h-.69v-.599a.339.339 0 0 1 .338-.325h.01zm-1.554.325a.348.348 0 0 1 .69-.002v.601h-.686z"
      }
    }), h("path", {
      attrs: {
        d: "M13.029 13.102h.562v.695h-.562v-.695z"
      }
    }), h("path", {
      attrs: {
        d: "M10.766 5.481h1.943v.151h-1.943v-.151z"
      }
    }), h("path", {
      attrs: {
        d: "M10.679 5.714h2.117v.151h-2.117v-.151z"
      }
    }), h("path", {
      attrs: {
        d: "M13.906 5.481h1.943v.151h-1.943v-.151z"
      }
    }), h("path", {
      attrs: {
        d: "M13.819 5.714h2.117v.151h-2.117v-.151z"
      }
    }), h("path", {
      attrs: {
        d: "M10.711 1.289h5.216v.325h-5.216v-.325z"
      }
    }), h("path", {
      attrs: {
        d: "M13.312.704h2.482l.16-.183h-5.285l.155.183h2.487z"
      }
    }), h("path", {
      attrs: {
        d: "M14.039 3.246v2.149h1.678V1.738H10.94v3.657h1.678V3.246a.71.71 0 1 1 1.422 0zm.32-.681h1.047v.59h-1.047zm-2.094.589h-1.047v-.59h1.047z"
      }
    }), h("path", {
      attrs: {
        d: "M10.894.8v.393h4.891V.8zm.347.306h-.178V.877h.178zm.338 0h-.178V.877h.178zm.339 0h-.178V.877h.178zm.338 0h-.178V.877h.178zm.338 0h-.178V.877h.178zm.339 0h-.178V.877h.178zm.338 0h-.178V.877h.165zm.338 0h-.178V.877h.178zm.338 0h-.187V.877h.178zm.339 0h-.178V.877h.178zm.338 0h-.178V.877h.183zm.338 0h-.178V.877h.178zm.339 0h-.215V.877h.178zm.338 0h-.178V.877h.178z"
      }
    }), h("path", {
      attrs: {
        d: "M9.001 3.003l-.818-.946a.329.329 0 1 0-.498.43l.37.429h-.914a.329.329 0 1 0 0 .658h.914l-.37.43a.329.329 0 1 0 .497.43l.819-.947A.41.41 0 0 0 9 3.002z"
      }
    }), h("path", {
      attrs: {
        d: "M4.352 7.269l-1.184-.133a.42.42 0 0 0-.456.308l-.001.003-.302 1.147a.328.328 0 0 0 .231.401l.085.001h.001a.329.329 0 0 0 .318-.245l.129-.523.521.759a.33.33 0 1 0 .543-.376l-.52-.749.562.064h.055a.33.33 0 0 0 .02-.659z"
      }
    }), h("path", {
      attrs: {
        d: "M13.349 8.265l-.549.101.457-.791a.33.33 0 0 0-.566-.34l-.458.792-.178-.539a.33.33 0 1 0-.626.208l.388 1.163a.402.402 0 0 0 .459.26h-.003l1.179-.21a.33.33 0 1 0-.117-.65z"
      }
    })]);
  }
};

var DestinationIcon = {
  name: 'DestinationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-destination"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.216 6.4V5.333h-1.115V4.058H12.8v1.275h-1.067V6.4h-.725V16H16V6.4zm-2.869 8.693h-.533V7.248h.533zm1.381 0h-.533V7.248h.533zm1.381 0h-.533V7.248h.533z"
      }
    }), h("path", {
      attrs: {
        d: "M0 16h9.915V0H0zm5.707-1.888H4.208v-1.509h1.509zm0-2.667H4.208v-1.52h1.509zm0-2.666H4.208V7.248h1.509zm0-2.667H4.208V4.571h1.509zm2.586 8.032H6.8v-1.541h1.509zm0-2.667H6.8V9.925h1.509zm0-2.666H6.8V7.248h1.509zm0-2.667H6.8V4.571h1.509zM1.6 1.408h6.704v1.52H1.6zm0 3.163h1.531V6.08H1.6zm0 2.666h1.531v1.509H1.6zm0 2.667h1.531v1.509H1.6zm0 2.667h1.531v1.509H1.6z"
      }
    })]);
  }
};

var DingyIcon = {
  name: 'DingyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dingy"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.7 8.6l-2.6.05c-.1 0-.25.2-.25.4z"
      }
    }), h("path", {
      attrs: {
        d: "M6 11.65h4.2c.15 0-.25-4.55-.25-4.55H4l-2.6.1c-.1 0-.25.25-.25.5 0 .1-.05.8.35 1.7.4.95 1.6 2.25 4.5 2.25z"
      }
    }), h("path", {
      attrs: {
        d: "M14.55 9.3c.4-.9.35-1.6.35-1.7 0-.25-.1-.5-.25-.5l-2.6-.1H6.1s-.4 4.55-.25 4.55H10c2.9.1 4.1-1.2 4.55-2.25z"
      }
    }), h("path", {
      attrs: {
        d: "M3.5 11.9l-.8.15-.9 1.85c.3.6 1.1 1 1.7.85l.9-1.85-.35-.75L7.3 5.6l.8-.15.9-1.8c-.3-.6-1.1-1-1.7-.85l-.9 1.85.35.75-3.25 6.5z"
      }
    }), h("path", {
      attrs: {
        d: "M3.5 14.75l.9-1.85-.35-.75L7.3 5.6l.8-.15.9-1.8c-.15-.3-.4-.55-.7-.7l-5.8 11.7c.35.1.7.15 1 .1z"
      }
    }), h("path", {
      attrs: {
        d: "M4.8 5.65l.35-.75-.95-1.8c-.65-.1-1.4.3-1.7.85l.95 1.8.8.15 3.35 6.5-.35.75.95 1.8c.65.1 1.45-.3 1.7-.85l-.95-1.8-.8-.15-3.35-6.5z"
      }
    }), h("path", {
      attrs: {
        d: "M2.5 3.95l.95 1.8.8.15 3.35 6.5-.35.75.95 1.8c.3.05.65 0 1-.15l-6-11.6c-.3.2-.55.45-.7.75z"
      }
    })]);
  }
};

var Dinner2Icon = {
  name: 'Dinner2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dinner-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.085 10.565H19.2a3.864 3.864 0 0 0-2.394-2.078l-.081-.007c-1.035-1.067-2.133-1.6-3.301-1.573a4.799 4.799 0 0 0-3.196 1.595 3.767 3.767 0 0 0-1.417.515L8.827 1.6a.267.267 0 1 0-.534 0v.437H7.152v.443h1.163v.464H7.152v.443h1.163v.464H7.152v.443h1.163v5.099a3.407 3.407 0 0 0-.76 1.129l-.926.023a.58.58 0 0 0-.581.581v.661c0 .321.26.581.581.581h.304l1.493 2.261h9.813l1.493-2.245h.331a.58.58 0 0 0 .581-.581v-.661a.582.582 0 0 0-.559-.576zm-1.504 0h-.533a2.64 2.64 0 0 0-1.496-1.142 2.545 2.545 0 0 0-.657-.085h-.007c-.6.001-1.167.144-1.669.399a1.734 1.734 0 0 0-.304-.32 3.967 3.967 0 0 1 1.956-.504c.272 0 .538.026.795.077a3.217 3.217 0 0 1 1.912 1.557zm-3.733 0a4.566 4.566 0 0 0-.275-.423c.39-.162.835-.264 1.304-.265h.024c.181 0 .357.023.524.067.372.11.699.328.943.618zm-2.245-1.882c.238-.137.522-.219.825-.224.327.004.634.076.911.203-.365.12-.664.26-.948.425a2.707 2.707 0 0 0-.74-.4zm.821-1.254c.926.001 1.769.36 2.397.946a4.218 4.218 0 0 0-.852.099 2.29 2.29 0 0 0-1.504-.539h-.037a2.29 2.29 0 0 0-1.483.599 4.79 4.79 0 0 0-.855-.082 3.938 3.938 0 0 1 2.341-1.028zm-2.4 1.536a3.649 3.649 0 0 1 3.191 1.588l-.525.012a3.277 3.277 0 0 0-2.674-1.163c-1.395 0-2.088.597-2.43 1.162h-.491c.373-.72 1.163-1.6 2.949-1.605zm1.915 1.6H9.275a2.327 2.327 0 0 1 1.789-.629c.023-.002.06-.002.097-.002.683 0 1.311.238 1.805.636z"
      }
    }), h("path", {
      attrs: {
        d: "M9.525 4.859a.267.267 0 0 0 .267-.267V1.6a.267.267 0 1 0-.534 0v2.992c0 .147.119.267.267.267z"
      }
    }), h("path", {
      attrs: {
        d: "M10.464 4.859a.267.267 0 0 0 .267-.267v-.277h1.355l.821-.784h6.597v-.693h-6.597l-.816-.784h-1.36v-.453a.267.267 0 1 0-.534 0v2.992c0 .147.119.267.267.267zm.997-.987h-.731v-.469h.731zm0-1.371v.464h-.731v-.469z"
      }
    }), h("path", {
      attrs: {
        d: "M3.003 9.243a1.868 1.868 0 0 0 1.196-.772c1.135-1.665-.225-5.185-.284-5.34l-.048-.128H.907l-.048.128C.8 3.28-.544 6.806.592 8.464c.278.399.7.681 1.188.772.076.23.224.417.418.533l.004 3.789h-.069a2.788 2.788 0 0 1-1.498.797c-.348.072-.396.253.052.269s1.696 0 1.696 0h1.696c.448 0 .4-.197.069-.267a2.794 2.794 0 0 1-1.482-.784h-.059V9.786A.898.898 0 0 0 3 9.248zM.917 8.245C0 6.933.954 4.053 1.184 3.413h2.405c.243.652.447 1.424.577 2.22l-3.03.073s-.357 2.757 1.323 3.2H2.39a1.64 1.64 0 0 1-1.469-.657z"
      }
    })]);
  }
};

var Dinner3Icon = {
  name: 'Dinner3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dinner-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.379 6.976h-.576a2.921 2.921 0 0 0-1.809-1.568l-.063-.005a3.316 3.316 0 0 0-2.499-1.195A3.6 3.6 0 0 0 9.028 5.42a2.85 2.85 0 0 0-1.082.4L7.958.192a.192.192 0 1 0-.378.001v.34h-.901v.336h.896v.352h-.896v.325h.896v.352h-.896v.336h.896v3.664c0 .058.027.11.069.144A2.565 2.565 0 0 0 7 6.959l-.598.017a.533.533 0 0 0-.533.533v.277c0 .295.239.533.533.533h.139l1.131 1.717h7.467l1.131-1.717h.139a.533.533 0 0 0 .533-.533v-.278a.533.533 0 0 0-.533-.533l-.028.001zm-1.024 0h-.421a1.993 1.993 0 0 0-1.117-.85 1.912 1.912 0 0 0-.487-.062h-.013a2.783 2.783 0 0 0-1.268.306 1.43 1.43 0 0 0-.251-.259 3.023 3.023 0 0 1 1.505-.391c.2 0 .395.019.584.054a2.473 2.473 0 0 1 1.462 1.189zm-2.838 0a3.352 3.352 0 0 0-.214-.323 2.573 2.573 0 0 1 1.025-.215h.011c.138 0 .272.018.4.05.288.086.54.255.728.48zM10.8 5.547c.189-.114.417-.183.66-.187.259.002.503.061.721.164a3.703 3.703 0 0 0-.75.332 2.116 2.116 0 0 0-.609-.303zm.651-.966c.73.002 1.393.288 1.884.753a3.183 3.183 0 0 0-.689.072c-.294-.26-.7-.415-1.143-.415h-.026a1.729 1.729 0 0 0-1.141.449 3.538 3.538 0 0 0-.675-.065H9.66a3.026 3.026 0 0 1 1.78-.794zM9.632 5.749a2.783 2.783 0 0 1 2.437 1.217l-.436.01a2.472 2.472 0 0 0-2.011-.869 1.97 1.97 0 0 0-1.824.862l-.41.007c.272-.576.875-1.227 2.245-1.227zm1.472 1.227H8.272a1.769 1.769 0 0 1 1.372-.485c.02-.002.051-.002.083-.002.524 0 1.005.184 1.382.49z"
      }
    }), h("path", {
      attrs: {
        d: "M8.48 2.635a.192.192 0 0 0 .192-.192V.192a.192.192 0 1 0-.378.001v2.25c0 .104.083.189.186.192z"
      }
    }), h("path", {
      attrs: {
        d: "M9.195 2.635a.192.192 0 0 0 .192-.192v-.208h1.067l.619-.592h5.003V1.11h-5.029l-.619-.576H9.361V.193a.192.192 0 1 0-.378.001v2.251c0 .106.086.192.192.192l.022-.001zm.757-.736h-.571v-.352h.565zm0-1.067v.352h-.571V.859z"
      }
    }), h("path", {
      attrs: {
        d: "M.139 11.067h6.224l.571.832h.955v3.168H6.001a.848.848 0 0 0-.848.848V16h6.763v-.085a.848.848 0 0 0-.848-.848H9.169v-3.168h.965l.587-.832h6.208v-.533H.14z"
      }
    }), h("path", {
      attrs: {
        d: "M2.629 6.021c.05.139.139.254.254.335l.002 2.903a2.13 2.13 0 0 1-1.134.601c-.264.055-.301.194.04.205s1.285 0 1.285 0h1.285c.341 0 .304-.149.053-.203a2.143 2.143 0 0 1-1.147-.597V6.358a.689.689 0 0 0 .249-.331c.402-.074.741-.299.958-.613.856-1.285-.173-3.973-.21-4.085l-.053-.123H1.912l-.048.128c-.043.112-1.067 2.805-.197 4.08.222.317.56.54.951.607zM2.176 1.6h1.776c.178.483.329 1.056.425 1.646l-2.243.055s-.267 1.941.859 2.373a1.184 1.184 0 0 1-1.011-.476c-.664-.968.014-3.064.195-3.598z"
      }
    })]);
  }
};

var DinnerIcon = {
  name: 'DinnerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dinner"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.157 14.544a3.05 3.05 0 0 1-1.84-.344l.016.008-1.248-3.984a.974.974 0 0 0 .181-.626 2.07 2.07 0 0 0 1.025-1.215c.649-2.148-1.927-5.391-2.039-5.529l-.107-.128-1.547.475-1.6.496-1.6-.496-1.552-.485-.107.128c-.112.139-2.667 3.392-2.043 5.515a2.08 2.08 0 0 0 1.023 1.237c.011.008.011.012.011.015 0 .241.087.461.231.632l-1.249 3.972h-.048a3.027 3.027 0 0 1-1.861.334c-.357-.036-.464.14.016.306s1.776.533 1.776.533 1.301.427 1.776.533.485-.075.16-.261a3.086 3.086 0 0 1-1.325-1.27l-.008-.016 1.227-4a.99.99 0 0 0 .531-.396c.088-.004.173-.004.258-.004h.028c.477 0 .916-.165 1.262-.441 1.116-.882 1.404-2.914 1.468-4.301.059 1.381.347 3.419 1.472 4.304.342.273.781.438 1.258.438h.284a.99.99 0 0 0 .526.398l1.287 3.986a3.099 3.099 0 0 1-1.311 1.32c-.342.189-.332.397.143.269s1.776-.533 1.776-.533 1.312-.389 1.776-.533.347-.368-.027-.336zM3.168 8.219C2.667 6.56 4.56 3.904 5.029 3.286l2.485.779a14.018 14.018 0 0 1-.153 2.648L4.214 5.644s-1.243 2.667.245 3.733a1.784 1.784 0 0 1-1.287-1.145zm5.333-4.155l2.485-.779c.464.619 2.363 3.275 1.856 4.933a1.785 1.785 0 0 1-1.279 1.15c1.476-1.064.233-3.731.233-3.731l-3.157.987a13.441 13.441 0 0 1-.154-2.583z"
      }
    }), h("path", {
      attrs: {
        d: "M7.979 1.979h.277L8.475 0h-.992l.219 1.979h.277z"
      }
    }), h("path", {
      attrs: {
        d: "M9.376 2.432l1.451-1.36-.379-.325-.379-.32-1.115 1.648.208.176.213.181z"
      }
    }), h("path", {
      attrs: {
        d: "M6.789 2.251l.213-.176L5.887.427l-.379.32-.379.325 1.451 1.36.208-.181z"
      }
    })]);
  }
};

var DiscIcon = {
  name: 'DiscIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-disc"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var Diving2Icon = {
  name: 'Diving2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-diving-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.536 11.237s.213-1.771.213-2.037.213-.875-.213-1.157S11.2 6.662 10.704 6.24s-1.109-.341-1.691.133-1.429 1.243-1.429 1.243H5.733c-.07.524-.173.989-.31 1.44l2.475.07 1.931-.949 2.272 1.637-.107 1.771s.635 1.109 1.003 1.904.848.475 1.067.368.24-.475.133-.768-.661-1.851-.661-1.851z"
      }
    }), h("path", {
      attrs: {
        d: "M6.261 6.821a.97.97 0 0 0 1.074.291l1.263-1.145-1.403-.203-1.621-1.499c-.16.341-.949.768-.949.768S5.734 6.292 6.262 6.82z"
      }
    }), h("path", {
      attrs: {
        d: "M5.083 3.984a.41.41 0 0 0-.047-.533c-.112-.107-.229-.171-.635.048C2.769 4.619.31 4.8.31 4.8a1.926 1.926 0 0 0 1.79.815c1.245-.069 2.983-1.631 2.983-1.631z"
      }
    }), h("path", {
      attrs: {
        d: "M4.8 7.349c-.155 0-.283 0-.491.405-.661 1.845-2.565 3.445-2.565 3.445a1.92 1.92 0 0 0 1.928-.365c.985-.787 1.491-3.065 1.491-3.065v-.013a.412.412 0 0 0-.361-.408z"
      }
    }), h("path", {
      attrs: {
        d: "M16.96 5.317a.571.571 0 1 1-1.143 0 .571.571 0 0 1 1.143 0z"
      }
    }), h("path", {
      attrs: {
        d: "M15.893 3.579a.459.459 0 1 1-.918 0 .459.459 0 0 1 .918 0z"
      }
    }), h("path", {
      attrs: {
        d: "M17.077 2.315a.32.32 0 1 1-.64 0 .32.32 0 0 1 .64 0z"
      }
    }), h("path", {
      attrs: {
        d: "M17.237 10.272l-.277-.176v-.123a1.43 1.43 0 1 0-1.429 1.429c.257-.007.495-.081.7-.206s-.006.004-.006.036l.277.176a.113.113 0 0 0 .16-.037l.592-.945a.111.111 0 0 0-.016-.154z"
      }
    }), h("path", {
      attrs: {
        d: "M9.755 5.099c.229.123 3.899 2.459 4.267 2.667a1.118 1.118 0 0 0 1.384-.38 1.191 1.191 0 0 0-.246-1.564c-.498-.343-3.879-2.428-4.167-2.615s-.533-.144-.64 0c-.276.369-.552.791-.804 1.228a.52.52 0 0 0-.072.247c0 .187.114.348.276.417z"
      }
    })]);
  }
};

var DivingEquipmentIcon = {
  name: 'DivingEquipmentIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-diving-equipment"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 11.95c-.6 0-1.1.45-1.25 1.05H6.8c-4.6 0-5.5-1.75-5.75-3.25C.75 8.15 1 6.9 1.7 6.1c.95-1.15 2.55-1.2 2.8-1.2 0 .15.1.25.25.25h.15v.55h-.5c-.45 0-.85.35-.85.85v5.6c.15.05.3.1.5.15V6.55c0-.2.15-.35.35-.35h2.2c.2 0 .35.15.35.35v6.05h.5V6.55c0-.45-.35-.85-.85-.85h-.5v-.55h.15c.15 0 .25-.1.25-.25v-.6c0-.15-.1-.25-.25-.25h-1.5c-.1.05-.25.15-.25.25v.1c-.35 0-2.1.05-3.2 1.3C.5 6.65.2 8 .55 9.75 1 12.25 3 13.4 6.8 13.4h1.95c.1.55.6 1 1.25 1 .7 0 1.25-.55 1.25-1.25 0-.65-.6-1.2-1.25-1.2zM5.6 5.7h-.2v-.55h.2v.55zm4.4 8.25c-.45 0-.75-.35-.75-.75 0-.45.35-.75.75-.75.45 0 .75.35.75.75s-.35.75-.75.75z"
      }
    }), h("path", {
      attrs: {
        d: "M6.95 14.4c0 .2-.15.35-.35.35H4.4c-.2 0-.35-.15-.35-.35v-.85c-.15-.05-.35-.1-.5-.1v1c0 .45.35.85.85.85h2.2c.45 0 .85-.35.85-.85v-.6h-.5v.55z"
      }
    }), h("path", {
      attrs: {
        d: "M6.95 3.3v.2c0 1.2.95 2.15 2.15 2.15h.4c.25 0 .55-.15.65-.35l.75-1.1c.25-.4.7-.4.95 0l.75 1.1c.15.2.45.35.65.35h.45c1.2 0 2.15-.95 2.15-2.15v-.2C15.85 2 14.8.95 13.5.95H9.25C8 .95 6.95 2 6.95 3.3zm6.6-1.9c1.05 0 1.9.85 1.9 1.9v.2c0 .95-.75 1.7-1.7 1.7h-.45c-.1 0-.25-.1-.3-.15l-.75-1.1c-.45-.65-1.25-.65-1.65 0l-.75 1.1c-.05.1-.25.15-.3.15H9.1c-.95 0-1.7-.75-1.7-1.7v-.2c0-1.05.85-1.9 1.9-1.9h4.25zm0 .4c.8 0 1.5.65 1.5 1.5v.2c0 .7-.55 1.25-1.3 1.25h-.45.05l-.75-1.1c-.6-.85-1.75-.85-2.35 0L9.5 4.8c0-.05 0 0 0 0h-.45c-.7 0-1.25-.55-1.25-1.25V3.3c0-.8.65-1.5 1.5-1.5h4.25z"
      }
    }), h("path", {
      attrs: {
        d: "M3.75 6.1H7.2v8.85H3.75V6.1z"
      }
    }), h("path", {
      attrs: {
        d: "M3.55 12.15H5v1.95H3.55v-1.95z"
      }
    }), h("path", {
      attrs: {
        d: "M5.8 11.95h1.6v2.4H5.8v-2.4z"
      }
    }), h("path", {
      attrs: {
        d: "M10 12.3c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c-.05-.5-.45-.9-.9-.9zm0 1.35c-.25 0-.45-.2-.45-.45s.2-.45.45-.45.45.2.45.45c-.05.25-.25.45-.45.45z"
      }
    }), h("path", {
      attrs: {
        d: "M13.65 6.2v4.15c0 .65-.55 1.2-1.2 1.2-.7 0-1.2-.55-1.2-1.2h.5V9.6H10v.75h.5c0 1.1.9 1.95 1.95 1.95 1.1 0 1.95-.9 1.95-1.95V6.2h-.75zm.55 1.4h-.35V6.35h.35V7.6z"
      }
    })]);
  }
};

var DivingIcon = {
  name: 'DivingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-diving"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.723 1.211a1.21 1.21 0 1 1-2.422 0 1.21 1.21 0 0 1 2.422 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5.755 6.4S5.088 7.419 4.8 7.883a.704.704 0 0 0 .2.926.836.836 0 0 0 .867-.143c.18-.223.948-1.311 1.13-1.599a.935.935 0 0 0 .078-1.25c-.209-.295-.43-.644-.633-1.003l2.032-1.08s1.552 1.957 1.957 2.421.704.32.885.224.443-.405 0-1.029l-2.4-3.376a1.183 1.183 0 0 0-1.536-.28c-.699.301-2.128 1.064-2.517 1.288a1.02 1.02 0 0 0-.404 1.533C4.964 5.243 5.753 6.4 5.753 6.4z"
      }
    }), h("path", {
      attrs: {
        d: "M3.733 13.92c1.435 0 2.032.64 2.837.757.923-.213 1.6-1.12 3.115-1.12s1.888.779 2.827.779 1.792-.779 3.029-.779v-1.152c-1.237 0-2.091.779-3.029.779s-1.392-.779-2.965-.779-2.08.928-2.987 1.12V9.258H.469v5.803h.283c.939-.171 1.381-1.141 2.981-1.141z"
      }
    }), h("path", {
      attrs: {
        d: "M12.8 15.579a4.337 4.337 0 0 1-1.805-.497 3.092 3.092 0 0 0-1.196-.245 3.666 3.666 0 0 0-1.311.265 5.178 5.178 0 0 1-1.692.522 4.674 4.674 0 0 1-1.684-.543 3.984 3.984 0 0 0-1.377-.249h-.046c-.437 0-.853.094-1.227.264-.765.339-1.197.904-1.992.904h15.061v-1.168h-.044c-.409 0-.795.095-1.139.263-.428.28-.964.46-1.541.484z"
      }
    })]);
  }
};

var DollarSignIcon = {
  name: 'DollarSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dollar-sign"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    })]);
  }
};

var DollarIcon = {
  name: 'DollarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dollar"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.741 5.291v-.939h-1.104v-.944H.16v7.301h1.099v.939h1.104v.939H15.84V5.291zM.56 10.309V3.808h12.677v6.501zm1.099.939v-.533h11.979V4.752h.699v6.496zm13.776.939H2.763v-.533h11.979V5.691h.699z"
      }
    }), h("path", {
      attrs: {
        d: "M.827 10.043h12.144V4.075H.827zm5.738-2.88a1.337 1.337 0 0 1-.692-.399.968.968 0 0 1-.204-.597v-.041c0-.153.029-.298.083-.432a.982.982 0 0 1 .641-.577c.125-.035.262-.058.402-.066l.004-.342h.251v.347c.245.009.471.085.661.211.268.181.445.49.445.839l-.002.057-.688-.003a.924.924 0 0 0-.077-.342.395.395 0 0 0-.343-.197h-.008v.981c.313.093.585.22.834.381.2.161.335.419.335.709l-.001.048a1.024 1.024 0 0 1-.471.94c-.202.123-.44.201-.693.216l-.004.534h-.267v-.533a1.758 1.758 0 0 1-.766-.229 1.115 1.115 0 0 1-.423-1.014l.698.005c.008.16.045.309.105.445a.54.54 0 0 0 .39.216l.002-1.093z"
      }
    }), h("path", {
      attrs: {
        d: "M7.467 7.819l.001-.022a.438.438 0 0 0-.149-.329 1.058 1.058 0 0 0-.297-.153l-.008 1.006a.656.656 0 0 0 .296-.092.476.476 0 0 0 .157-.411z"
      }
    }), h("path", {
      attrs: {
        d: "M6.773 5.627l-.026-.001a.451.451 0 0 0-.305.118.438.438 0 0 0-.106.316v.015c0 .132.062.25.159.325.08.056.173.099.272.127z"
      }
    })]);
  }
};

var DoubleBedIcon = {
  name: 'DoubleBedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-double-bed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.55 7.4H2.8C1.6 7.4.55 8.1.55 9.1v2.55c0 .1.2.25.35.25h14.5c.15 0 .2-.15.2-.25V9.1c.05-1-.9-1.7-2.05-1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M15.65 9.7c0-.1-.1-.2-.25-.2H.8c-.15 0-.25.1-.25.2v1.95c0 .1.1.2.25.2h14.55c.15 0 .25-.1.25-.2V9.7z"
      }
    }), h("path", {
      attrs: {
        d: "M14.8 2.5H1.5c-.15 0-.35.05-.35.25V7.1H15V2.75c0-.2-.05-.25-.2-.25zM7.3 7.05H4.25c0-.75-.15-1.5-.15-1.5 0-.15.1-.25.25-.25 0 0 .8.15 1.5.15s1.4-.15 1.4-.15c.15 0 .25.1.25.25-.05.05-.2.8-.2 1.5zm4.75 0H9c0-.75-.15-1.5-.15-1.5 0-.15.1-.25.25-.25 0 0 .8.15 1.5.15S12 5.3 12 5.3c.15 0 .25.1.25.25-.05.05-.2.8-.2 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M.55 12.4h15.1v.75H.55v-.75z"
      }
    }), h("path", {
      attrs: {
        d: "M1.55 14.55h.95c.1 0 .2-.2.2-.4v-.65c0-.05 0-.05-.05-.05H1.4v.7c-.05.2.05.4.15.4z"
      }
    }), h("path", {
      attrs: {
        d: "M1.35 13.95V14h1.3v-.6H1.4v.55z"
      }
    }), h("path", {
      attrs: {
        d: "M13.65 14.55h.95c.1 0 .2-.2.2-.4v-.65c0-.05 0-.05-.05-.05H13.5v.7c0 .2.05.4.15.4z"
      }
    }), h("path", {
      attrs: {
        d: "M13.5 13.95V14h1.3v-.6h-1.3v.55z"
      }
    })]);
  }
};

var DoubleSingleBedIcon = {
  name: 'DoubleSingleBedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-double-single-bed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.8 7.3h-3.7c-.4 0-.8.45-.8 1v1.55c0 .05.05.15.15.15h5.05c.05 0 .05-.1.05-.15V8.3c-.05-.6-.35-1-.75-1z"
      }
    }), h("path", {
      attrs: {
        d: "M15.5 8.65c0-.05-.05-.15-.1-.15h-5.05c-.05 0-.1.05-.1.15v1.2c0 .05.05.15.1.15h5.05c.05 0 .1-.05.1-.15v-1.2z"
      }
    }), h("path", {
      attrs: {
        d: "M10.25 10.25h5.25v.45h-5.25v-.45z"
      }
    }), h("path", {
      attrs: {
        d: "M14.8 11.55h.35c.05 0 .05-.1.05-.25v-.45h-.45v.45c0 .15.05.25.05.25z"
      }
    }), h("path", {
      attrs: {
        d: "M14.75 11.25l.5.05v-.4h-.45v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M14.75 4.5H10.9c-.05 0-.1.05-.1.1V7h4V4.6c0-.1 0-.1-.05-.1zM13.7 7h-1.75c0-.4-.1-.8-.1-.8 0-.05.05-.15.15-.15 0 0 .45.1.85.1s.8-.05.8-.05c.05 0 .15.05.15.15-.05-.05-.1.35-.1.75z"
      }
    }), h("path", {
      attrs: {
        d: "M10.6 11.55h.35c.05 0 .05-.1.05-.25v-.45h-.45v.45c.05.15.05.25.05.25z"
      }
    }), h("path", {
      attrs: {
        d: "M10.6 11.25l.5.05v-.4h-.5v.35z"
      }
    }), h("path", {
      attrs: {
        d: "M8 7.5H1.8c-.7 0-1.3.4-1.3 1v1.45c0 .05.1.15.2.15h8.35c.1 0 .1-.1.1-.15V8.5c.05-.6-.5-1-1.15-1z"
      }
    }), h("path", {
      attrs: {
        d: "M9.2 8.8c0-.05-.05-.1-.15-.1H.65c-.1 0-.15.05-.15.1v1.1c0 .05.05.1.15.1H9c.1 0 .15-.05.15-.1l.05-1.1z"
      }
    }), h("path", {
      attrs: {
        d: "M8.7 4.65H1.05c-.05 0-.2.05-.2.15v2.5H8.8V4.8c.05-.1 0-.15-.1-.15zM4.4 7.3H2.65c0-.45-.1-.85-.1-.85 0-.1.05-.15.15-.15 0 0 .45.1.85.1s.8-.1.8-.1c.1 0 .15.05.15.15 0 0-.1.45-.1.85zm2.75 0H5.4c0-.45-.1-.85-.1-.85 0-.1.05-.15.15-.15 0 0 .45.1.85.1s.8-.1.8-.1c.1 0 .15.05.15.15 0 0-.1.45-.1.85z"
      }
    }), h("path", {
      attrs: {
        d: "M.55 10.35h8.7v.45H.55v-.45z"
      }
    }), h("path", {
      attrs: {
        d: "M1.1 11.6h.55c.05 0 .1-.1.1-.25V11c0-.05 0-.05-.05-.05H1v.4c0 .15.05.25.1.25z"
      }
    }), h("path", {
      attrs: {
        d: "M1 11.25c0 .05 0 .05 0 0l.75.05v-.4H1v.35z"
      }
    }), h("path", {
      attrs: {
        d: "M8.05 11.6h.55c.05 0 .1-.1.1-.25V11c0-.05 0-.05-.05-.05H8v.4c0 .15 0 .25.05.25z"
      }
    }), h("path", {
      attrs: {
        d: "M8 11.25c0 .05 0 .05 0 0l.75.05v-.4H8v.35z"
      }
    })]);
  }
};

var DownloadCloudIcon = {
  name: 'DownloadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "8 17 12 21 16 17"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
      }
    })]);
  }
};

var DownloadIcon = {
  name: 'DownloadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "7 10 12 15 17 10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
      }
    })]);
  }
};

var DropletIcon = {
  name: 'DropletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-droplet"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
      }
    })]);
  }
};

var DvdPlayerIcon = {
  name: 'DvdPlayerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dvd-player"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.7 10.9h2.35v1.15H.7V10.9z"
      }
    }), h("path", {
      attrs: {
        d: "M12.9 10.9h2.35v1.15H12.9V10.9z"
      }
    }), h("path", {
      attrs: {
        d: "M1.2 7.6h7.5v.85H1.2V7.6z"
      }
    }), h("path", {
      attrs: {
        d: "M0 5.9v4.8h16V5.9H0zm9.4 3.2H.7V6.9h8.7v2.2zm1.5-.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm1.85 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm1.8 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"
      }
    })]);
  }
};

var Edit2Icon = {
  name: 'Edit2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      }
    })]);
  }
};

var Edit3Icon = {
  name: 'Edit3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 20h9"
      }
    }), h("path", {
      attrs: {
        d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      }
    })]);
  }
};

var EditIcon = {
  name: 'EditIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    }), h("path", {
      attrs: {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      }
    })]);
  }
};

var EnginePowerIcon = {
  name: 'EnginePowerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-engine-power"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.7 4.75v-1.3h1.55v-1.3H6.9v1.3h1.55v1.3"
      }
    }), h("path", {
      attrs: {
        d: "M3.2 8.95H1.95V7H.75v5.2h1.2v-1.95H3.2"
      }
    }), h("path", {
      attrs: {
        d: "M14.35 6.65v1.6h-.95V5.6c0-.35-.25-.6-.55-.6H6.6c-.15 0-.3.05-.4.2L4.75 7H3.8c-.3 0-.6.3-.6.65v3.9c0 .35.3.65.6.65h.95l1.45 1.75c.1.1.25.15.4.15h4c.15 0 .3-.05.4-.15l2.25-2.45c.1-.1.15-.25.15-.4v-.85h.95v1.6h1.25v-5.2h-1.25z"
      }
    }), h("path", {
      attrs: {
        d: "M11.55 8.6c0-.05-.05-.1-.15-.1l-1.9-.25.9-1.9V6.2c0-.05-.1-.05-.15-.05H7.5c-.1 0-.15.05-.15.15L7.2 9.65c0 .1.05.15.15.15l1.35.2-1.8 3.1c-.05.1 0 .2.05.2h.1c.05 0 .1 0 .1-.05l4.4-4.5s.05-.05 0-.15z"
      }
    })]);
  }
};

var EuroIcon = {
  name: 'EuroIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-euro"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.741 5.291v-.939h-1.104v-.944H.16v7.301h1.099v.939h1.104v.939H15.84V5.291zM.56 10.309V3.808h12.677v6.501zm1.099.939v-.533h11.979V4.752h.699v6.496zm13.776.939H2.763v-.533h11.979V5.691h.699z"
      }
    }), h("path", {
      attrs: {
        d: "M.827 4.075v5.968h12.144V4.075zm6.56 2.234l-.107.533H6.256v.512h.955l-.107.533H6.4c.028.069.06.129.098.185a.663.663 0 0 0 .563.311l.029.001c.21 0 .395-.107.503-.27.081-.129.141-.278.171-.437l.663-.008c-.043.392-.203.74-.444 1.015a1.175 1.175 0 0 1-.874.388l-.038-.001h-.025c-.427 0-.805-.209-1.037-.53a1.859 1.859 0 0 1-.304-.652l-.872-.013.107-.533h.635v-.512h-.741l.107-.533h.704c.065-.297.193-.558.371-.777.225-.284.574-.466.965-.466h.026a1.267 1.267 0 0 1 1.174.623c.132.209.215.454.232.716l-.672.005a1.148 1.148 0 0 0-.168-.415.623.623 0 0 0-.494-.242l-.038.001h.001a.645.645 0 0 0-.573.348c-.038.064-.07.135-.095.209z"
      }
    })]);
  }
};

var Exclamation2Icon = {
  name: 'Exclamation2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-exclamation-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M8.763 12.123a.763.763 0 1 1-1.526 0 .763.763 0 0 1 1.526 0z"
      }
    }), h("path", {
      attrs: {
        d: "M8 3.115a1.109 1.109 0 0 0-1.167 1.264c-.001.693.373 5.109.447 5.509a.72.72 0 1 0 1.44 0c.075-.4.432-4.8.448-5.515a1.109 1.109 0 0 0-1.099-1.26l-.072.002z"
      }
    })]);
  }
};

var ExclamationIcon = {
  name: 'ExclamationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-exclamation"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.232 14.677a1.233 1.233 0 1 1-2.465-.001 1.233 1.233 0 0 1 2.465.001z"
      }
    }), h("path", {
      attrs: {
        d: "M8 12.149a1.185 1.185 0 0 0 1.168-1.089c.118-.649.699-7.796.726-8.927C9.931.618 8.939.09 8.001.09S6.07.623 6.108 2.127c.027 1.136.608 8.283.725 8.928A1.184 1.184 0 0 0 8 12.148z"
      }
    })]);
  }
};

var ExternalLinkIcon = {
  name: 'ExternalLinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-external-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    }), h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
      }
    })]);
  }
};

var EyeOffIcon = {
  name: 'EyeOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var EyeIcon = {
  name: 'EyeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var FacebookIcon = {
  name: 'FacebookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-facebook"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    })]);
  }
};

var FastForwardIcon = {
  name: 'FastForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fast-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 19 22 12 13 5 13 19"
      }
    }), h("polygon", {
      attrs: {
        points: "2 19 11 12 2 5 2 19"
      }
    })]);
  }
};

var FaxIcon = {
  name: 'FaxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fax"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.603 6.443V2.432l-.203-.229L12.512.208l-.245-.256H4.395V6.4H3.168c.383.356.623.862.624 1.424v6.8a1.942 1.942 0 0 1-.623 1.423l10.996.001c.984 0 1.781-.798 1.781-1.781V8.166c0-.827-.566-1.523-1.332-1.72zM5.195.752h6.736v1.989h1.872V6.4H5.195zm1.376 13.739a.73.73 0 1 1 0-1.461.73.73 0 0 1 0 1.461zm0-2.502a.73.73 0 1 1 0-1.461.73.73 0 0 1 0 1.461zm3.2 2.502a.73.73 0 1 1 .731-.731.73.73 0 0 1-.731.731H9.76zm0-2.502a.73.73 0 1 1 .731-.731.73.73 0 0 1-.731.731H9.76zm3.2 2.502a.73.73 0 1 1 .731-.731.73.73 0 0 1-.731.731h-.022zm0-2.502a.73.73 0 1 1 .731-.731.73.73 0 0 1-.731.731h-.022zm.778-2.784h-8V7.893h8z"
      }
    }), h("path", {
      attrs: {
        d: "M3.147 15.179c.068-.157.109-.34.112-.532V7.809a1.424 1.424 0 0 0-1.424-1.408h-.357a1.413 1.413 0 0 0-.799.248 1.446 1.446 0 0 0-.509.612 1.42 1.42 0 0 0-.065.197l-.002.01a1.363 1.363 0 0 0-.053.356v6.801c.003.128.022.251.056.367l-.002-.01c.145.616.69 1.067 1.341 1.067h.393c.586 0 1.09-.354 1.308-.86z"
      }
    })]);
  }
};

var FeatherIcon = {
  name: 'FeatherIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-feather"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "2",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "15",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var Ferry2Icon = {
  name: 'Ferry2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ferry-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.235 9.168l-.997-.533V6.198l-2.085-3.333h-1.52L9.34.95a.645.645 0 0 0-.635-.533H7.297a.645.645 0 0 0-.634.529l-.294 1.919H4.844l-2.08 3.333v2.443l-.997.533a1.111 1.111 0 0 0-.53 1.373l1.875 5.054h4.624v-9.6L3.565 8.209V6.401l1.723-2.736h5.424l1.728 2.736v1.787L8.269 5.985v9.6h4.613l1.877-5.061a1.109 1.109 0 0 0-.517-1.351z"
      }
    }), h("path", {
      attrs: {
        d: "M10.171 4.229H5.83l-.699 1.275h5.739l-.699-1.275z"
      }
    })]);
  }
};

var FerryIcon = {
  name: 'FerryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ferry"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.664 9.003H.594a.443.443 0 0 0-.364.695l2.17 3.236a.44.44 0 0 0 .368.197h14.37c.207 0 .38-.142.429-.333l.945-3.795z"
      }
    }), h("path", {
      attrs: {
        d: "M3.467 8.325H17.12a.437.437 0 0 0 .426-.536l-.223-1.021a.437.437 0 0 0-.427-.341h-.678a.438.438 0 0 1-.414-.296l-.433-1.304a.438.438 0 0 0-.413-.294l-.025.001H8.534l.475-1.659h-.838a.478.478 0 0 0-.398.212l-.966 1.447H5.381a.439.439 0 0 0-.365.196L3.1 7.654a.437.437 0 0 0 .368.672zm1.968-3.258h9.451l.411 1.237a.972.972 0 0 0 .92.661h.606l.181.832H3.671z"
      }
    }), h("path", {
      attrs: {
        d: "M13.611 3.013H11.2l-.224 1.077h2.635V3.013z"
      }
    }), h("path", {
      attrs: {
        d: "M6.336 5.952h1.029v1.029H6.336V5.952z"
      }
    }), h("path", {
      attrs: {
        d: "M8.453 5.952h1.029v1.029H8.453V5.952z"
      }
    }), h("path", {
      attrs: {
        d: "M10.571 5.952H11.6v1.029h-1.029V5.952z"
      }
    }), h("path", {
      attrs: {
        d: "M12.693 5.952h1.029v1.029h-1.029V5.952z"
      }
    })]);
  }
};

var FigmaIcon = {
  name: 'FigmaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-figma"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
      }
    }), h("path", {
      attrs: {
        d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
      }
    }), h("path", {
      attrs: {
        d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
      }
    })]);
  }
};

var FileMinusIcon = {
  name: 'FileMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FilePlusIcon = {
  name: 'FilePlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FileTextIcon = {
  name: 'FileTextIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-text"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "10 9 9 9 8 9"
      }
    })]);
  }
};

var FileIcon = {
  name: 'FileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
      }
    }), h("polyline", {
      attrs: {
        points: "13 2 13 9 20 9"
      }
    })]);
  }
};

var FilmIcon = {
  name: 'FilmIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-film"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "2.18",
        ry: "2.18"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "2",
        x2: "7",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "2",
        x2: "17",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "7",
        x2: "7",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "17",
        x2: "7",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "22",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "22",
        y2: "7"
      }
    })]);
  }
};

var FilterIcon = {
  name: 'FilterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-filter"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    })]);
  }
};

var FishingEquipIcon = {
  name: 'FishingEquipIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fishing-equip"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.15 2.35C6 6.4 7.65 8.95 9.65 11.5c-.4.5-1.05 1.25-1.85 2.1 2.2-.6 4.6 0 4.6 0l-1.7-2.05c1-1.1 1.55-2.15 1.8-3.1l1.45.25c-.3-1.15-.8-1.7-1.25-2-.2-2.65-2.55-4.35-2.55-4.35z"
      }
    }), h("path", {
      attrs: {
        d: "M6.35 11.15c1.55-1.3.55-3.3.55-3.3L4.95 4.9l-.3 3.85s.3-.25.7-.75c.6.75.8 1.75 0 2.25-1.5 1-2.1-.75-2.1-.75s-.85-2.1-1.4-3.85C1.25 6.2.5 6.1.5 6.1s.75 2.5 1.6 4.3c1.15 1.65 2.7 2 4.25.75z"
      }
    })]);
  }
};

var FitnessIcon = {
  name: 'FitnessIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fitness"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.243 1.483a1.483 1.483 0 1 1-2.966 0 1.483 1.483 0 0 1 2.966 0z"
      }
    }), h("path", {
      attrs: {
        d: "M6.299 11.733c-.256.032-.485.075-.704.117l-.864-3.227a.88.88 0 0 0 .298-.093l1.408.504-.763.811.416 1.6s1.6-1.835 1.92-2.208.469-.853-.245-1.216c-.48-.245-1.301-.571-1.845-.779l1.013-1.755.661.848a.633.633 0 0 0 .268.191l.052.001a.632.632 0 0 0 .158.032l.045.001.045-.001h2.286a.71.71 0 0 0 0-1.418H8.533L7.376 3.68a.892.892 0 0 0-.284-.27l-.895-.536a.894.894 0 0 0-1.224.321L2.917 6.778a.878.878 0 0 0-.117.442.88.88 0 0 0 .066.337l1.305 4.794a2.22 2.22 0 0 0-1.061 1.053l-.006 2.595h10.133v-1.915s-3.387-2.779-6.939-2.352z"
      }
    }), h("path", {
      attrs: {
        d: "M10.763 12.053l1.067.469-.72-4.597a6.8 6.8 0 0 0 1.9-1.308.467.467 0 0 0 0-.707c-.225-.192-.385-.171-.833.224a4.909 4.909 0 0 1-2.201 1.161z"
      }
    })]);
  }
};

var FlagIcon = {
  name: 'FlagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-flag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "22",
        x2: "4",
        y2: "15"
      }
    })]);
  }
};

var Flight2Icon = {
  name: 'Flight2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-flight-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.947 5.056c-.341.603-1.6 1.067-1.6 1.067l-.395-.736a3.49 3.49 0 0 0 1.073-.695 3.627 3.627 0 0 0-1.695.007L4.949 8.001a.224.224 0 0 1-.183 0L2.57 6.823a.23.23 0 0 0-.193.001l-1.097.415-.475.176.939.971.453.475-1.76.459a.369.369 0 0 0-.272.355v.008c0 .288.336.533.629.602s4.341.533 4.491.533h.059l3.424-.955a.229.229 0 0 1 .298.273l-1.413 4.073a.229.229 0 0 0 .295.292l1.652-.549a.75.75 0 0 0 .43-.364l3.234-4.943a.23.23 0 0 1 .132-.096l2.972-.843c1.525-.464 2.133-1.424 2.171-1.957-.011-.224-.235-.48-.592-.693zM7.733 8.949a.464.464 0 1 1 .464-.464.464.464 0 0 1-.464.464h-.006zm2.262-.624a.464.464 0 1 1 .464-.464.465.465 0 0 1-.464.459h-.006zm2.272-.741a.464.464 0 1 1 0-.929.464.464 0 0 1 0 .929zm2.261-.736a.464.464 0 1 1 .464-.464.464.464 0 0 1-.464.464l-.022-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M8.533 5.824a.732.732 0 0 0 .646.106l1.803-.532 1.685-.533-5.301-2.133a.657.657 0 0 0-.506-.047l-1.174.335-.72.203z"
      }
    })]);
  }
};

var FlightIcon = {
  name: 'FlightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-flight"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.819 11.163V9.6l-3.2-2.203V5.413h-1.883v.677l-1.339-.917c.043-1.317.059-2.421.048-2.971v-.005c0-.839-.419-1.581-1.059-2.027-.113-.079-.243-.124-.384-.124s-.271.044-.378.12a2.47 2.47 0 0 0-1.065 2.031v.005c0 .533 0 1.648.048 2.97l-1.344.917v-.677H3.386v1.963L.181 9.599v1.6l6.597-2.341c.079 1.673.258 3.237.534 4.768l-1.718 1.2v.875l1.792-.336s.224.581.613.581.613-.581.613-.581l1.792.336v-.875l-1.68-1.456c.243-1.312.423-2.877.498-4.468z"
      }
    })]);
  }
};

var FolderMinusIcon = {
  name: 'FolderMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderPlusIcon = {
  name: 'FolderPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "11",
        x2: "12",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderIcon = {
  name: 'FolderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var FramerIcon = {
  name: 'FramerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-framer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
      }
    })]);
  }
};

var FreeWifiIcon = {
  name: 'FreeWifiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-free-wifi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.464 4.507a6.571 6.571 0 0 0-4.458-1.84 6.582 6.582 0 0 0-4.472 1.847l.957.926a5.314 5.314 0 0 1 3.501-1.456 5.32 5.32 0 0 1 3.52 1.453z"
      }
    }), h("path", {
      attrs: {
        d: "M8 1.525a7.673 7.673 0 0 1 5.276 2.209l.954-.929A9.032 9.032 0 0 0 8.008.192a9.04 9.04 0 0 0-6.243 2.604l.961.938a7.665 7.665 0 0 1 5.268-2.208z"
      }
    }), h("path", {
      attrs: {
        d: "M10.699 6.224a4.15 4.15 0 0 0-2.692-1.109 4.168 4.168 0 0 0-2.708 1.112l.957.926a2.921 2.921 0 0 1 1.736-.704c.677.04 1.28.3 1.75.707z"
      }
    }), h("path", {
      attrs: {
        d: "M9.051 8.576a1.05 1.05 0 1 1-2.102 0 1.05 1.05 0 0 1 2.102 0z"
      }
    }), h("path", {
      attrs: {
        d: "M2.587 11.659a1.103 1.103 0 0 0-.491.278c-.12.127-.208.286-.249.462a3.882 3.882 0 0 0-.076.915v1.46h.677v-1.312h1.925v-.533H2.448a.79.79 0 0 1 .218-.613.919.919 0 0 1 .644-.186h1.063v-.533H3.344a2.758 2.758 0 0 0-.776.068z"
      }
    }), h("path", {
      attrs: {
        d: "M7.584 13.136c.104-.157.166-.349.166-.556l-.001-.049a.906.906 0 0 0-.282-.728 1.274 1.274 0 0 0-.854-.235H4.975v3.2h.672v-1.253h.795l.704 1.259h.757l-.8-1.339a.765.765 0 0 0 .479-.297zm-.651-.277a.85.85 0 0 1-.467.091h-.818v-.811h.827a.868.868 0 0 1 .474.093.448.448 0 0 1-.005.622z"
      }
    }), h("path", {
      attrs: {
        d: "M8.635 11.973a1.809 1.809 0 0 0-.367 1.26l-.001.043c0 .252.045.494.128.717a1.193 1.193 0 0 0 .76.735c.165.044.346.067.531.067l.072-.001h1.133v-.533H9.792a.778.778 0 0 1-.587-.182.854.854 0 0 1-.174-.605l1.866.003v-.533H9.036a.81.81 0 0 1 .209-.534.753.753 0 0 1 .534-.181h1.102v-.533h-1.12a1.472 1.472 0 0 0-1.129.279z"
      }
    }), h("path", {
      attrs: {
        d: "M11.803 11.973a1.809 1.809 0 0 0-.367 1.26l-.001.041c0 .253.045.495.128.719a1.193 1.193 0 0 0 .76.735c.165.044.346.067.531.067l.072-.001h1.133v-.533H12.96a.778.778 0 0 1-.587-.182.854.854 0 0 1-.174-.605l1.866.003v-.533h-1.861a.812.812 0 0 1 .203-.534.756.756 0 0 1 .534-.181h1.102v-.533h-1.12a1.462 1.462 0 0 0-1.124.28z"
      }
    }), h("path", {
      attrs: {
        d: "M14.581 10.507H1.418c-.589 0-1.067.478-1.067 1.067v3.2c0 .589.478 1.067 1.067 1.067h13.163c.589 0 1.067-.478 1.067-1.067v-3.2c0-.589-.478-1.067-1.067-1.067zm.534 4.266a.533.533 0 0 1-.533.533H1.419a.533.533 0 0 1-.533-.533v-3.2c0-.295.239-.533.533-.533h13.163c.295 0 .533.239.533.533z"
      }
    })]);
  }
};

var FreezerIcon = {
  name: 'FreezerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-freezer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.05 10.35L7 8.4H2.25c0 .05-.05.1-.1.15l-1.2 1.2c-.15.15-.45.15-.6 0s-.15-.45 0-.6l.75-.75H.45C.2 8.4 0 8.25 0 8s.2-.4.45-.4h.65l-.7-.7c-.15-.15-.15-.45 0-.6s.45-.15.6 0l1.15 1.2c.05.05.05.05.05.1H7L5.05 5.65c-.05 0-.1.05-.15.05H3.2c-.25 0-.4-.2-.4-.4 0-.25.2-.4.4-.4h1l-.65-.75c-.15-.15-.15-.45 0-.6s.45-.15.6 0l.7.7v-1c0-.25.2-.4.4-.4.25 0 .4.2.4.4v1.7c0 .05 0 .1-.05.15l1.95 1.95v-4.8c-.05 0-.1-.05-.1-.1L6.25.95C6.1.8 6.1.5 6.25.35s.45-.15.6 0l.7.7v-.6C7.6.2 7.75 0 8 0s.4.2.4.45v.65l.75-.75c.15-.15.45-.15.6 0s.15.45 0 .6l-1.2 1.2c-.05.05-.1.05-.15.1V7l1.95-1.95V3.2c0-.25.2-.4.4-.4.25 0 .4.2.4.4v1l.7-.7c.15-.15.45-.15.6 0s.15.45 0 .6l-.7.7h1.05c.25 0 .4.2.4.4 0 .25-.2.4-.4.4h-1.7c-.05 0-.1 0-.15-.05L9 7.6h4.8c0-.05.05-.05.05-.1l1.2-1.2c.15-.15.45-.15.6 0s.15.45 0 .6l-.7.7h.6c.25 0 .45.2.45.4 0 .25-.2.4-.45.4h-.65l.75.75c.15.15.15.45 0 .6s-.45.15-.6 0l-1.2-1.2c-.05-.05-.05-.1-.1-.15H9l1.95 1.95h1.8c.25 0 .4.2.4.4 0 .25-.2.4-.4.4h-1l.65.65c.15.15.15.45 0 .6s-.45.15-.6 0l-.7-.7v1.05c0 .25-.2.4-.4.4-.25 0-.4-.2-.4-.4v-1.7c0-.05 0-.1.05-.15L8.4 9v4.8c.05 0 .1.05.15.1l1.2 1.2c.15.15.15.45 0 .6s-.45.15-.6 0l-.75-.75v.65c0 .25-.2.45-.4.45-.25 0-.4-.2-.4-.45V15l-.7.7c-.15.15-.45.15-.6 0s-.15-.45 0-.6l1.2-1.2.1-.1V9l-1.95 1.95c0 .05.05.1.05.15v1.7c0 .25-.2.4-.4.4-.25 0-.4-.2-.4-.4v-1l-.7.7c-.15.15-.45.15-.6 0s-.15-.45 0-.6l.7-.7H3.2c-.25 0-.4-.2-.4-.4 0-.25.2-.4.4-.4h1.7c.05-.05.1-.05.15-.05z"
      }
    })]);
  }
};

var FridgeIcon = {
  name: 'FridgeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fridge"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3.8 0v5.45h8.4V0H3.8zm7.55 4.6h-6.7V.85h6.75V4.6h-.05z"
      }
    }), h("path", {
      attrs: {
        d: "M3.8 16h8.4V6.3H3.8V16zm.85-8.85h6.75v8H4.65v-8z"
      }
    }), h("path", {
      attrs: {
        d: "M5.5 1.7h.85v2.05H5.5V1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M5.5 8.05h.85v2.05H5.5V8.05z"
      }
    })]);
  }
};

var FrontDeskIcon = {
  name: 'FrontDeskIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-front-desk"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.267 6.747a1.963 1.963 0 1 1-3.926 0 1.963 1.963 0 0 1 3.926 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.851 11.024a2.272 2.272 0 0 0-1.408-1.345 6.604 6.604 0 0 0-2.015-.31l-.142.001-.128-.001c-.714 0-1.401.112-2.046.318a2.257 2.257 0 0 0-1.371 1.321c-.26.828-.515 1.875-.713 2.942l8.58.183a29.164 29.164 0 0 0-.813-3.32z"
      }
    }), h("path", {
      attrs: {
        d: "M9.6 8.923v-.885a3.59 3.59 0 0 1-1.915-3.171 3.584 3.584 0 1 1 7.117.606l.814-.021a4.368 4.368 0 1 0-6.044 3.462z"
      }
    }), h("path", {
      attrs: {
        d: "M0 14.933h16V16H0v-1.067z"
      }
    }), h("path", {
      attrs: {
        d: "M12.853 10.432v-.736h-1.419c.129-.284.309-.524.531-.718l.36-.349c.327-.28.534-.694.534-1.156V7.45c.002-.02.002-.045.002-.07a1.067 1.067 0 0 0-1.197-1.059 1.141 1.141 0 0 0-1.258 1.28l-.001.208h.869v-.197c0-.208.027-.587.32-.603s.347.197.347.405l.002.06a.908.908 0 0 1-.263.639l-.427.421a2.719 2.719 0 0 0-.858 1.738l-.001.15h2.459z"
      }
    }), h("path", {
      attrs: {
        d: "M14.427 10.432h.875v-.784h.363v-.683h-.363V6.4h-.96l-1.285 2.475v.768h1.371v.784zm-.683-1.472l.656-1.328v1.333z"
      }
    }), h("path", {
      attrs: {
        d: "M11.584 5.445a.443.443 0 0 0 .149-.325V2.885a.453.453 0 0 0-.906 0v1.781H9.6a.453.453 0 0 0 0 .906h1.696a.446.446 0 0 0 .288-.128z"
      }
    })]);
  }
};

var FrownIcon = {
  name: 'FrownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-frown"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M16 16s-1.5-2-4-2-4 2-4 2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var Fruit2Icon = {
  name: 'Fruit2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fruit-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.829 8.4l-.107-.037a1.947 1.947 0 0 1-.939-1.016 2.738 2.738 0 0 1-.538.062h-.007c-.314 0-.611-.075-.873-.208l-.074-.048c-.037.032-.075.053-.112.091l-.075.075a1.52 1.52 0 0 0-.373 1.235c.028.203.096.394.195.565.156.26.388.471.664.602l.009.004c.091.045.198.083.309.11l.117.002a1.816 1.816 0 0 0 .223 0h.096c.108-.005.211-.02.309-.045l.08.002a1.6 1.6 0 0 0 .348-.153l.052-.039c.092-.062.172-.128.245-.202l.075-.075c.085-.095.16-.201.22-.317l.004-.009a1.49 1.49 0 0 0 .159-.593c.006-.107-.01.001-.01-.004z"
      }
    }), h("path", {
      attrs: {
        d: "M9.269 6.651a1.553 1.553 0 0 0 1.409.28 1.208 1.208 0 0 1-.043-.35 1.928 1.928 0 0 1 .482-1.276 1.873 1.873 0 0 1-.445-.662 2.738 2.738 0 0 1-.538.062h-.007c-.314 0-.611-.075-.873-.208-.042-.022-.09-.059-.144-.091a1.528 1.528 0 0 0-.3 1.526c.033.094.074.184.123.269.084.171.199.323.336.45z"
      }
    }), h("path", {
      attrs: {
        d: "M13.941 6.821a1.953 1.953 0 0 1-.934-1.016 2.738 2.738 0 0 1-.538.062h-.007c-.314 0-.611-.075-.873-.208-.048-.022-.096-.059-.149-.096a1.519 1.519 0 0 0-.394 1.218l-.001-.007v.037c.085.64.553 1.151 1.163 1.299l.117.002a1.816 1.816 0 0 0 .223 0h.096c.108-.005.211-.02.309-.045l.08.002a1.6 1.6 0 0 0 .348-.153l.052-.039c.092-.062.172-.128.245-.202l.075-.075c.185-.198.312-.452.356-.733a.36.36 0 0 1-.17-.045z"
      }
    }), h("path", {
      attrs: {
        d: "M9.067 3.888c.1.094.214.176.338.241l.008.004a1.569 1.569 0 0 0 1.142.131 1.2 1.2 0 0 1-.042-.343c0-.745.422-1.391 1.039-1.713a1.444 1.444 0 0 0-.471-.659 1.506 1.506 0 0 0-.579-.283l-.117-.002a1.816 1.816 0 0 0-.223 0h-.096c-.108.005-.211.02-.309.045l-.08-.002a1.6 1.6 0 0 0-.348.153l-.052.039a1.578 1.578 0 0 0-.245.202l-.075.075a1.528 1.528 0 0 0-.3 1.526c.087.227.229.428.411.585z"
      }
    }), h("path", {
      attrs: {
        d: "M16.16 4.304a1.543 1.543 0 0 0-.971-.739l-.117-.002a1.816 1.816 0 0 0-.223 0h-.096c-.108.005-.211.02-.309.045l-.053-.002a1.6 1.6 0 0 0-.348.153l.007-.004a1.555 1.555 0 0 0 .422 2.841l.106.002a1.816 1.816 0 0 0 .223 0h.096c.108-.005.211-.02.309-.045l.08.002a1.6 1.6 0 0 0 .348-.153l.052-.039c.092-.062.172-.128.245-.202l.075-.075a1.498 1.498 0 0 0 .372-1.234 1.578 1.578 0 0 0-.221-.553z"
      }
    }), h("path", {
      attrs: {
        d: "M12.869 2.416h-.139a1.816 1.816 0 0 0-.223 0h-.096c-.108.005-.211.02-.309.045l-.053-.002a1.6 1.6 0 0 0-.348.153l.007-.004a1.544 1.544 0 0 0-.741 1.512l-.001-.007c.017.148.053.284.105.41l-.004-.01a1.544 1.544 0 0 0 1.878.92 1.2 1.2 0 0 1-.042-.343c0-.745.422-1.391 1.039-1.713a1.152 1.152 0 0 0-.252-.449 1.526 1.526 0 0 0-.348-.256l.189-.351.304-.533c.419.229.907.432 1.418.584l.134.014a.27.27 0 0 0 .082-.533A6.957 6.957 0 0 1 12.591.182a.267.267 0 0 0-.393.36c.351.356.742.671 1.167.938l-.299.581z"
      }
    }), h("path", {
      attrs: {
        d: "M7.509 5.077c-.533-1.525-2.288-1.52-3.115-1.424l-.443 1.28a3.392 3.392 0 0 0 1.31-.366 2.367 2.367 0 0 1-1.525.627 1.383 1.383 0 0 1-1.27-.613 2.363 2.363 0 0 0 1.45.351l.141-1.231.267-1.515c.032-.187-.341-.229-.448-.096a7.443 7.443 0 0 0-.192 1.594C2.959 3.567.975 3.428.388 5.076c-.672 1.888.112 5.2 3.563 5.2s4.235-3.312 3.557-5.2z"
      }
    }), h("path", {
      attrs: {
        d: "M10.608 15.371a4.682 4.682 0 0 1-4.677-4.683v-.023l-.533.001a5.21 5.21 0 1 0 10.422 0h-.533v.021a4.683 4.683 0 0 1-4.677 4.683z"
      }
    }), h("path", {
      attrs: {
        d: "M10.608 15.072a4.379 4.379 0 0 0 4.379-4.379v-.028l-8.757.001v.027a4.379 4.379 0 0 0 4.379 4.379zm2.453-3.648a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.932.932 0 0 1 .188-.406zm-.794 1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.932.932 0 0 1 .188-.406zm-.886-1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.927.927 0 0 1 .198-.405zm-.784 1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.927.927 0 0 1 .198-.405zm-.885-1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.927.927 0 0 1 .198-.405zm-.784 1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.927.927 0 0 1 .198-.405zm-.885-1.259a.93.93 0 0 1 .186.399.197.197 0 1 1-.371.005.935.935 0 0 1 .203-.405z"
      }
    })]);
  }
};

var FruitIcon = {
  name: 'FruitIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fruit"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.565 11.115a2.555 2.555 0 0 1-.882-.16 5.086 5.086 0 0 1-.531 1.098c-.317.495-.711.94-1.165 1.316.153.224.354.402.584.536l.127.058c.064.035.141.071.221.102l.158.042c.059.019.135.037.212.051l.172.002h.213a2.018 2.018 0 0 0 .235-.001h.165c.092-.024.169-.05.243-.08l.141-.048c.094-.044.173-.089.248-.138l.11-.065c.335-.245.587-.584.721-.978-.039-.046-.081-.073-.124-.11a2.538 2.538 0 0 1-.847-1.615z"
      }
    }), h("path", {
      attrs: {
        d: "M12.101 7.355a7.41 7.41 0 0 1-.248 3.157c.22.025.458.07.707.07a2.456 2.456 0 0 1 1.121-1.877 2.678 2.678 0 0 1-.346-1.012l-.001-.012a2.545 2.545 0 0 1-1.245-.332z"
      }
    }), h("path", {
      attrs: {
        d: "M15.888 9.957h-.003a2.546 2.546 0 0 1-1.706-.653c-.056-.051-.104-.115-.163-.174a2.003 2.003 0 0 0 .049 3.429l.127.058c.064.035.141.071.221.102l.158.042c.059.019.135.037.212.051l.172.002h.213a2.018 2.018 0 0 0 .235-.001h.165c.094-.024.172-.049.248-.079l.141-.049c.094-.044.173-.089.248-.138l.11-.065c.117-.086.22-.179.313-.281.11-.137.203-.292.274-.458-.059-.061-.128-.104-.187-.157a2.538 2.538 0 0 1-.826-1.621z"
      }
    }), h("path", {
      attrs: {
        d: "M11.685 5.749c.098.232.191.515.263.806l.036.074c.355.328.831.53 1.354.533h.001a2.53 2.53 0 0 1 .637-1.464 2.564 2.564 0 0 1 1.357-.789.962.962 0 0 0-.028-.284 2.034 2.034 0 0 0-.337-.701 2.03 2.03 0 0 0-.584-.523l-.127-.058a1.91 1.91 0 0 0-.221-.102l-.168-.042a1.743 1.743 0 0 0-.212-.051l-.172-.002h-.208a2.018 2.018 0 0 0-.235 0h-.165a2.018 2.018 0 0 0-.248.079l-.136.049c-.087.047-.16.093-.23.143l-.111.065c-.117.086-.22.179-.313.281-.32.345-.52.802-.535 1.305.14.198.268.421.374.655z"
      }
    }), h("path", {
      attrs: {
        d: "M19.776 8.16a2.05 2.05 0 0 0-.311-.23l-.127-.064a1.91 1.91 0 0 0-.221-.102l-.158-.042a1.743 1.743 0 0 0-.212-.051l-.172-.002h-.208a2.018 2.018 0 0 0-.235 0h-.165a2.025 2.025 0 0 0-1.574 2.091v.112c.043.533.294 1 .67 1.326l.002.002c.09.08.189.154.295.219l.126.058h.053c.059.027.117.059.181.08l.144.037c.059.019.135.037.212.051l.172.002h.208a2.018 2.018 0 0 0 .235 0h.165c.094-.024.172-.049.248-.079l.141-.049c.093-.046.172-.092.247-.143l.11-.065a2.022 2.022 0 0 0 .161-3.145z"
      }
    }), h("path", {
      attrs: {
        d: "M16.864 5.627l-.064-.032a1.91 1.91 0 0 0-.221-.102l-.158-.042a1.743 1.743 0 0 0-.212-.051l-.172-.002h-.208a2.118 2.118 0 0 0-.24.001h-.16a2.03 2.03 0 0 0-1.565 1.973c0 1.116.903 2.022 2.018 2.027a2.536 2.536 0 0 1 .652-1.437 2.559 2.559 0 0 1 1.357-.79 1.85 1.85 0 0 0-.402-1.026l.382-.369.533-.533c.475.452.998.862 1.559 1.218a.463.463 0 0 0 .255.086.4.4 0 0 0 .215-.738 9.074 9.074 0 0 1-3.024-3.038c-.09-.172-.225-.26-.38-.26a.401.401 0 0 0-.357.585c.335.605.713 1.13 1.146 1.604l-.566.527z"
      }
    }), h("path", {
      attrs: {
        d: "M5.216 4.267a5.845 5.845 0 0 0-3.121.42A3.342 3.342 0 0 0 .278 7.458c-.315 2.676 1.066 5.497 3.733 6.26 2.059.581 4.581.128 6.021-1.536a6.014 6.014 0 0 0 1.35-3.808c0-.31-.023-.615-.068-.913a3.85 3.85 0 0 0-1.371-2.708c-1.035-.746-2.475-.773-3.681-.57l-.565 1.909a5 5 0 0 0 1.896-.626c-.995 1.053-3.192 1.613-4.11.205a3.446 3.446 0 0 0 2.15.43l.138-1.833.213-1.68c.037-.315.219-.784-.245-.811s-.4.272-.437.571a16.649 16.649 0 0 0-.085 1.931z"
      }
    })]);
  }
};

var FuelCapacityIcon = {
  name: 'FuelCapacityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fuel-capacity"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.55.4c-.45 0-.85.4-.85.85v.85l-.8.85h-.85V5.5c0 .85-1.7 1.7-1.7 2.55v4.65c0 .85.4 1.25 1.25 1.25s1.25-.4 1.25-1.25V11s0-.4.4-.4h.4v4.2c0 .4.4.85.85.85h7.6c.4 0 .85-.4.85-.85V1.3c0-.45-.4-.85-.85-.85L5.55.4zm6.75 5.05H6.4V2.1h5.9v3.35zM4.7 9.7h-.85c-.4 0-.85.4-.85.85v2.1c0 .4-.4.4-.4.4s-.4 0-.4-.4v-4.2c0-.85 1.7-1.7 1.7-2.55V4.65h.85L4.7 9.7z"
      }
    })]);
  }
};

var GalleryIcon = {
  name: 'GalleryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gallery"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.987 10.448c0-1.28-.587-1.381-.587-2.448s.587-1.168.587-2.448c0-1.067-.587-1.477-.587-2.4s1.157-1.419.533-2.501c-1.024-.688-1.488.533-2.357.533S11.296.555 10.32.555c-1.205 0-1.275.629-2.304.629S6.917.555 5.712.555c-.981 0-1.392.629-2.256.629S2.107-.037 1.067.651c-.645 1.067.533 1.6.533 2.501s-.587 1.355-.587 2.4c0 1.28.587 1.381.587 2.448s-.587 1.168-.587 2.448c0 1.067.587 1.477.587 2.4s-1.163 1.413-.533 2.501c1.024.688 1.488-.533 2.357-.533s1.28.629 2.256.629c1.205 0 1.275-.629 2.304-.629s1.099.629 2.304.629c.981 0 1.392-.629 2.256-.629s1.333 1.243 2.357.533c.645-1.067-.533-1.6-.533-2.501s.619-1.36.619-2.4zm-1.424 2.885a.651.651 0 0 1-.651.651H3.088a.651.651 0 0 1-.651-.651V2.666a.652.652 0 0 1 .65-.635h9.824a.65.65 0 0 1 .65.634z"
      }
    }), h("path", {
      attrs: {
        d: "M10.667 8.827a.24.24 0 0 0-.389-.001l-1.067 1.515-2.277-3.285a.24.24 0 0 0-.389-.001l-3.408 4.918a.24.24 0 0 0 .198.373h9.323a.24.24 0 0 0 .197-.374z"
      }
    }), h("path", {
      attrs: {
        d: "M11.568 5.861a1.425 1.425 0 1 1-2.85-.001 1.425 1.425 0 0 1 2.85.001z"
      }
    })]);
  }
};

var GeneratorIcon = {
  name: 'GeneratorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-generator"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.321 3.951v4.301H6.914V3.951H0v9.481h15.802V3.951zm-8.943 8.74H.637v-.494h4.741zm0-.775H.637v-.494h4.741zm0-.805H.637v-.494h4.741zm0-5.516H.637v-.494h4.741zm0-.706H.637v-.494h4.741z"
      }
    }), h("path", {
      attrs: {
        d: "M11.956.82c.049 0 .143 0 .143.049v.143l-.869 1.842 1.837.242c.099 0 .143.049.143.099v.143L8.958 7.703c0 .049-.049.049-.099.049H8.76c-.049 0-.099-.099-.049-.193l1.748-3.017-1.304-.193-.016.001a.128.128 0 0 1-.128-.128l.001-.016v.001l.143-3.24-.001-.016a.128.128 0 0 1 .144-.127H7.124v7.19h6.914V.819z"
      }
    })]);
  }
};

var GiftIcon = {
  name: 'GiftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gift"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 12 20 22 4 22 4 12"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
      }
    }), h("path", {
      attrs: {
        d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
      }
    })]);
  }
};

var GitBranchIcon = {
  name: 'GitBranchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-branch"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "6",
        y1: "3",
        x2: "6",
        y2: "15"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M18 9a9 9 0 0 1-9 9"
      }
    })]);
  }
};

var GitCommitIcon = {
  name: 'GitCommitIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-commit"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "1.05",
        y1: "12",
        x2: "7",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "17.01",
        y1: "12",
        x2: "22.96",
        y2: "12"
      }
    })]);
  }
};

var GitMergeIcon = {
  name: 'GitMergeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-merge"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M6 21V9a9 9 0 0 0 9 9"
      }
    })]);
  }
};

var GitPullRequestIcon = {
  name: 'GitPullRequestIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-pull-request"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M13 6h3a2 2 0 0 1 2 2v7"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "9",
        x2: "6",
        y2: "21"
      }
    })]);
  }
};

var GithubIcon = {
  name: 'GithubIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-github"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      }
    })]);
  }
};

var GitlabIcon = {
  name: 'GitlabIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gitlab"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
      }
    })]);
  }
};

var Globe2Icon = {
  name: 'Globe2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-globe-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.55 13.5c0-.35.2-.6.3-.95v-.2a.38.38 0 0 0-.1-.2c-.25-.4-.45-.85-.6-1.3-.05 0-.1.15-.1.25 0 .35.05.8.15 1.2l-.9-.15c-.1-.05-.25-.05-.3-.15-.2-.2 0-.5.1-.75.15-.35.2-.7.1-1.05-.15.05-.25.25-.3.4s-.05.3-.1.5c-.05.15-.15.3-.2.5-.05.15-.1.35-.05.55.05.15.25.3.45.3-.25.1-.55.15-.8.25s-.65.15-.8-.1c-.1.25-.25.5-.5.65-.05.05-.1.05-.15.15-.05.05 0 .15.05.15h-.75c-.1 0-.2.1-.25.15-.3.25-.65.45-1.05.4-.35-.05-.7-.45-.55-.8.05-.15.1-.2.2-.3.15-.2.2-.55.35-.8.3-.5.95-.7 1.15-1.2.05-.25.1-.55.35-.6-.1-.3-.45-.5-.7-.7s-.5-.5-.5-.85c0-.25.2-.45.4-.65.25-.2.55-.45.85-.6.15-.05.35-.15.5-.15.5-.05.9.2 1.35.45.25.2.5.45.55.8V9c0 .35.4.55.7.75.1.05.2.1.35.1.1 0 .25-.05.25-.2-.1-.05-.25-.15-.3-.3s.05-.35.2-.35c.1-.05.25.05.35.15s.2.2.3.25c.1.05.35 0 .3-.15 0-.05-.05-.1-.05-.15-.05-.15.05-.35-.05-.45s-.3 0-.45.1c-.2.1-.55 0-.7-.2-.1-.15-.1-.35-.1-.5 0-.2-.05-.35-.2-.45-.15-.05-.4-.05-.45.1-.4-.25-.95-.35-1.2-.8v-.15c0-.15.15-.2.3-.15.1.05.2.15.3.2s.25.1.35 0c.05-.05.1-.15.15-.2.05 0 .1 0 .15.05.5.15 1 .35 1.55.5.2.1.55.15.7 0 .05-.05.1-.2.15-.3s.3-.15.35 0c0-.2-.1-.4-.3-.45-.15 0-.2.25-.3.4-.15.2-.55.1-.55-.15V6.5c-.05-.15-.3-.25-.3-.45 0-.15.25-.15.35-.1s.25.1.4 0c.05-.05.05-.1.1-.15.2-.2.6-.05.85.15.2.2.4.35.6.55.05.1.15.2.2.35 0 .1-.05.15-.05.25 0 .25.15.5.35.65.1.05.3.15.45.2C15.45 3.8 12.1.5 7.95.5S.45 3.85.45 8c0 .25 0 .45.05.7l1.25-1c.15-.1.3-.25.25-.4 0 0-.05-.1-.05-.15-.1-.2.25-.3.35-.5.1-.15 0-.35 0-.55s.25-.35.4-.4c.15-.05.35-.1.55-.2.1-.1.25-.2.4-.2.2 0 .35.15.45.35.05.15.15.35.3.55-.2.1-.1.35 0 .5.1.2.2.4.1.55-.05.1-.2.15-.25.3-.05.1.1.2.25.3.25.25.4.65.3 1-.25-.05-.6-.05-.8.05-.15.1-.25.4-.5.45-.25.1-.6-.25-.9-.15-.3.05-.35.45-.65.6-.15-.2-.35-.35-.55-.55 0 .1-.05.25-.1.35l-.05.05c-.05 0-.1-.05-.15-.1-.1-.1-.3 0-.45 0H.6c0-.05-.05-.15-.05-.2.6 3.5 3.7 6.2 7.4 6.2 1.7 0 3.3-.6 4.55-1.55.1-.25.05-.4.05-.5zM11.3 4.4c-.15 0-.3-.1-.3-.25v.05c0-.1-.05-.25.05-.3.05 0 .1 0 .15.05.15.1.3.15.45.3-.1.1-.25.2-.35.15zM9.35 2.45c.05-.1.1-.15.2-.25.15-.2.2-.5.3-.75.05-.2.2-.4.25-.65 1.15.35 2.15.9 3.05 1.8-.1 0-.2-.05-.3-.05s-.2 0-.2.05v.15c.05.1 0 .3-.1.4-.1.05-.25.1-.4.05-.05-.05-.15-.2-.25-.25s-.3 0-.3.1c0 .15.25.2.2.35-.45.1-.95-.1-1.25-.45-.05-.1-.15-.15-.2-.15s-.1 0-.15.05c-.15.15-.45.25-.65.15-.2-.05-.3-.35-.2-.55zm-3.45.8c-.1 0-.15-.05-.25-.05-.15 0-.2.15-.35.2-.05.05-.15 0-.25 0-.4-.05-.75 0-1.05.1 0 .05 0 .1.05.1 0 .05.05.05.05.1 0 0-.05-.05-.05-.1-.25-.3-.7-.4-1.1-.25.1.2.25.45.45.45h.2c.1 0 .1.15.05.25-.05.05-.15.1-.25.15.1.15.1.35 0 .5-.15 0-.25-.15-.3-.3-.1-.1-.1-.3-.15-.45-.1-.35-.4-.7-.4-1.1l.15-.15C3.75 1.65 5.05.95 6.45.7v.15c0 .1-.1.2-.1.35v.2c0 .15-.05.25-.05.45 0 .15.15.3.25.25.2-.05.15-.3.2-.5.1-.3.7-.25.9-.6.15 0 .15.25.1.4s-.1.3-.05.45c.05.15.4.25.35.45 0 .05-.05.1-.1.15-.1.1-.1.3-.1.45s-.1.35-.25.35c-.2-.1-.35-.35-.5-.5s-.5-.2-.6 0c0 0 .05.05.1.05.15-.1.4 0 .35.2-.3-.2-.65.3-1.05.25zM9.35 14c0 .05-.05.15-.15.2s-.2.15-.3.2h-.25c-.1 0-.15.1-.25.1-.05 0-.2 0-.2-.15 0-.05 0-.1.05-.1.1-.1.15-.2.25-.3.05-.1.15-.15.25-.2.05 0 .15 0 .2.05.15 0 .3 0 .4-.1.05.05.1.2 0 .3z"
      }
    }), h("path", {
      attrs: {
        d: "M15.6 7.95a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0z"
      }
    })]);
  }
};

var GlobeIcon = {
  name: 'GlobeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-globe"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      }
    })]);
  }
};

var GridIcon = {
  name: 'GridIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-grid"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }
    })]);
  }
};

var HairdryerIcon = {
  name: 'HairdryerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hairdryer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.8 6.15c0-1.4-1.15-2.55-2.55-2.55h-.35l-7.5.65h-.6V8.2h1l5.1.35-.4 3.8c0 .1-.05.2-.05.3 0 .85.7 1.55 1.55 1.55.75 0 1.4-.55 1.55-1.25l1.15-4.7c.7-.5 1.1-1.25 1.1-2.1zM13.25 7.9l-1.2 4.95c-.1.45-.5.8-1 .8-.55 0-.95-.4-1-.95l.05-.4.45-4.25-6.2-.4v-2.8l7.75-.65h.2c1.1 0 1.95.9 1.95 1.95.05.75-.4 1.4-1 1.75z"
      }
    }), h("path", {
      attrs: {
        d: "M12.4 4.8c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3zm0 2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7c0 .4-.3.7-.7.7z"
      }
    }), h("path", {
      attrs: {
        d: "M1.2 3.85L3.2 5"
      }
    }), h("path", {
      attrs: {
        d: "M1.2 8.35l2.05-.95"
      }
    }), h("path", {
      attrs: {
        d: "M.9 6.1h2.35"
      }
    })]);
  }
};

var HammockIcon = {
  name: 'HammockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hammock"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.35 9.5c-1.15 1.15-2.65 1.8-4.4 1.8-2.3 0-4.2-1.15-5.45-3.15l-.25.75c1.3 2 3.3 3.15 5.65 3.15 1.8 0 3.45-.75 4.7-1.9l-.25-.65z"
      }
    }), h("path", {
      attrs: {
        d: "M15.25 4.15h-.7c-.1 0-.2.1-.25.2-1 3.25-3.45 5.25-6.4 5.25s-5.35-2-6.35-5.25c-.05-.1-.15-.2-.25-.2H.65c-.1 0-.2.2-.2.3 0 5.9 3.35 10.75 7.5 10.75s7.5-4.85 7.5-10.75c0-.1-.1-.2-.2-.3z"
      }
    }), h("path", {
      attrs: {
        d: "M13.15 5.55c-.45.45-1.15.4-1.55-.1s-.35-1.3.1-1.75 1.15-.4 1.55.1c.35.5.35 1.3-.1 1.75z"
      }
    }), h("path", {
      attrs: {
        d: "M9.15 14.95s.35-2.2.4-2.6c.1-.4.3-.55.7-.45.35.1.85.3 1.45.4.45.15 1.6 0 1.9-1.3 0 0 .7-2.95-.8-4.3-.4-.35-1.1-.6-1.6-.15-.45.5-1.1 1.9-1.1 1.9s-1.5-.55-1.85-.6c-.75-.15-1 .3-.15.75 1.25.65 2.15 1 2.4.9.3-.15.8-.75.8-.75l.15 1.7c-.65-.15-1.1-.3-1.25-.35-.45-.1-1.5-.2-1.75 1.25S8.1 14.3 8.1 14.3z"
      }
    }), h("path", {
      attrs: {
        d: "M.45.9L.6 15.3"
      }
    }), h("path", {
      attrs: {
        d: "M15.4.8l.15 14.4"
      }
    })]);
  }
};

var HarbourIcon = {
  name: 'HarbourIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-harbour"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.6 12.667c.436.344.994.551 1.6.551s1.164-.208 1.606-.556c.431.348.988.556 1.594.556s1.164-.208 1.606-.556L16 9.877H4.699a.662.662 0 0 0-.532 1.026l1.476 2.2c.291-.109.542-.257.761-.441a2.588 2.588 0 0 0 3.202-.001zm-3.915-1.36a.357.357 0 1 1 0-.714.357.357 0 0 1 0 .714z"
      }
    }), h("path", {
      attrs: {
        d: "M8.891 9.243H16V8.71H8.891a.118.118 0 0 1-.096-.176l.906-1.386h4.203l.651-1.68h-3.733l.827-1.264a.115.115 0 0 1 .096-.053h4.267V1.148h-.128a.713.713 0 0 0-.59.317l-1.426 2.147h-2.133a.651.651 0 0 0-.532.291L8.359 8.241a.65.65 0 0 0 .532 1.002z"
      }
    }), h("path", {
      attrs: {
        d: "M16 13.451c-.436.344-.994.551-1.6.551s-1.164-.208-1.606-.556c-.431.348-.988.556-1.594.556s-1.164-.208-1.606-.556c-.431.348-.988.556-1.594.556s-1.164-.208-1.606-.556c-.431.348-.988.556-1.594.556s-1.164-.208-1.606-.556L3.2 9.877h-.581V8.709a.587.587 0 0 0-1.174 0v1.168H0V16h16v-2.549z"
      }
    })]);
  }
};

var HardDriveIcon = {
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }
    })]);
  }
};

var HashIcon = {
  name: 'HashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hash"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "9",
        x2: "20",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "15",
        x2: "20",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "3",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "3",
        x2: "14",
        y2: "21"
      }
    })]);
  }
};

var HeadphonesIcon = {
  name: 'HeadphonesIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-headphones"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 18v-6a9 9 0 0 1 18 0v6"
      }
    }), h("path", {
      attrs: {
        d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
      }
    })]);
  }
};

var HeartIcon = {
  name: 'HeartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-heart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      }
    })]);
  }
};

var HelpCircleIcon = {
  name: 'HelpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-help-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }
    })]);
  }
};

var HexagonIcon = {
  name: 'HexagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hexagon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    })]);
  }
};

var HomeIcon = {
  name: 'HomeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-home"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "9 22 9 12 15 12 15 22"
      }
    })]);
  }
};

var HomepageIcon = {
  name: 'HomepageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-homepage"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.227.603H.774a.71.71 0 0 0-.709.709v10.032a.71.71 0 0 0 .709.709h14.453a.71.71 0 0 0 .709-.709V1.312a.71.71 0 0 0-.709-.709zm-.614 9.738H1.386V1.845h13.227z"
      }
    }), h("path", {
      attrs: {
        d: "M10.747 13.675v-.901H5.254v.901l-1.323 1.28v.443h8.139v-.443l-1.323-1.28z"
      }
    })]);
  }
};

var HorseIcon = {
  name: 'HorseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-horse"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.587 10.304c-1.067-.448.165-2.667.123-4.021s-.757-2.171-1.931-2.133h-.022c-.539 0-1.035.185-1.428.495-.694-.26-1.75-.132-4.128.663-.533.075-1.397.256-2.592-1.269S4.561 1.02 2.55 1.73c0 0-.485-.891-.837-.789-.133.037.128 1.269.128 1.269S.289 3.965.086 4.146s0 .864.277 1.067l2.736-.683c.383.689.775 1.525 1.115 2.388.053.428-.203 2.082.991 2.466.088 1.363.347 2.635.756 3.838.024.044.055.215.055.393 0 .236-.055.46-.154.658.004.173-.135.183-.135.183l-.411.619h1.067l.315-.613s.128-1.685.128-1.888-.075-3.099-.075-3.099 2.304.533 3.691-.331c.238-.148.527-.236.836-.236.255 0 .495.059.709.165.65.749 1.25 1.586 1.764 2.48.28.497.163 2.492.163 2.492.069.283-.171.283-.171.283l-.459.768h1.035l.421-.699c.052-.276.096-.616.121-.962.002-.308-.292-1.572-.19-2.052v-.015c0-.825-.149-1.616-.421-2.346-.161-.439 1.135-2.62.143-3.564-.149-.144-.283-.277-.421-.395 1.397-.491 1.301 1.376 1.067 2.373s-.427 3.547.981 3.861a1.258 1.258 0 0 0 1.599-1.061 1.055 1.055 0 0 1-.58.175c-.165 0-.321-.039-.46-.109z"
      }
    })]);
  }
};

var HotAirBalloonIcon = {
  name: 'HotAirBalloonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hot-air-balloon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.523 4.875c.384 2.485-1.499 4.229-3.056 8.24h.4C11.643 9.723 15.2 8.07 14.699 4.55 14.107.155 8 .001 8 .001s3.952 1.157 4.523 4.875z"
      }
    }), h("path", {
      attrs: {
        d: "M8.293 13.109v.533h-.597v-.533h.597zm-1.84 0C4.938 9.066 3.072 7.312 3.477 4.832 4.085 1.115 8 0 8 0S1.941.091 1.307 4.485C.774 8 4.31 9.69 6.054 13.098h.533v.56h-.235c-.2 0-.363.162-.363.363 0 .176.128.323.297.352l.002 1.515c0 .062.05.112.112.112h3.2c.062 0 .112-.05.112-.112V14.4a.36.36 0 0 0-.064-.715h-.235v-.533h-.267v.533h-.613v-.533h.048S12.49 4.069 8 0c-4.501 4.021-.709 13.104-.709 13.104h.112v.533h-.571v-.533z"
      }
    })]);
  }
};

var HotDealIcon = {
  name: 'HotDealIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hot-deal"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.107 7.264a.533.533 0 0 0 .458-.191.947.947 0 0 0 .15-.596.946.946 0 0 0-.151-.613.533.533 0 0 0-.409-.19l-.049.002a.53.53 0 0 0-.45.191.897.897 0 0 0-.15.574 1.015 1.015 0 0 0 .147.609.534.534 0 0 0 .429.215l.029-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M4.981 8.416h-.533v1.461h.533a.53.53 0 0 0 .432-.154.984.984 0 0 0 .117-.58.997.997 0 0 0-.119-.572.536.536 0 0 0-.431-.155z"
      }
    }), h("path", {
      attrs: {
        d: "M9.019 9.333h.667l-.341-.864-.325.864z"
      }
    }), h("path", {
      attrs: {
        d: "M15.184 8.597L15.813 8l-.624-.597.533-.688-.715-.485.4-.768-.784-.357.245-.837-.832-.224.128-.843-.859-.085v-.864l-.864.059-.176-.848-.843.197-.293-.811-.795.336-.416-.757-.731.459-.544-.672-.645.576-.645-.576-.533.672-.741-.459-.427.752-.789-.336-.293.816-.837-.197-.16.848-.864-.059v.864l-.875.085.128.853-.832.213.267.821-.784.357.4.768-.715.485.533.688-.645.613.624.597-.533.688.715.485-.4.768.784.357-.245.837.832.224-.128.843.859.085v.864l.864-.059.176.848.843-.197.293.811.795-.331.421.752.731-.459.533.672.651-.576.645.576.533-.672.731.459.427-.752.795.336.293-.811.843.197.155-.848.864.059v-.864l.88-.091-.128-.853.832-.213-.267-.821.784-.357-.4-.768.715-.485zM8 14.304c-3.482 0-6.304-2.822-6.304-6.304S4.518 1.696 8 1.696a6.303 6.303 0 1 1 0 12.608z"
      }
    }), h("path", {
      attrs: {
        d: "M8 2.229a5.771 5.771 0 1 0-.001 11.543A5.771 5.771 0 0 0 8 2.229zm3.579 1.878l.197.187-.096.096-.192-.187zm-.422-.347l.213.171-.085.101-.208-.165zM9.312 5.749V5.36h1.941v.389h-.725V7.6h-.491V5.755zm1.397-2.293l.229.144-.075.133-.224-.144zm-.485-.256l.245.123-.064.117-.24-.117zm-.507-.203l.256.096-.048.107-.251-.091zm-.533-.149l.261.069-.037.128-.256-.064zm-.533-.096l.267.043v.133l-.261-.037zm-.534-.037h.272v.133h-.267zm-.272 0v.133h-.267v-.133zm-.533.042v.133l-.261.043V2.8zm-.043 2.838a1.124 1.124 0 0 1 .842-.261 1.119 1.119 0 0 1 .839.288 1.226 1.226 0 0 1 .27.884 1.236 1.236 0 0 1-.274.878 1.113 1.113 0 0 1-.845.285 1.11 1.11 0 0 1-.845-.289 1.274 1.274 0 0 1-.271-.906 1.178 1.178 0 0 1 .278-.876zm-.496-2.736l.032.128-.256.069-.037-.128zm-.533.154l.043.128-.245.096-.048-.123zm-.496.187l.059.123-.235.117-.064-.117zm-.48.256l.069.112-.219.165-.075-.112zm-.464.325l.08.107-.187.165-.085-.107zm-.416.347l.091.096-.192.187-.075-.091zm-.379.389l.101.085-.155.197-.107-.08zm-.336.427l.107.075-.149.219-.091-.064zm-.293.459l.117.064-.123.235-.117-.059zm-.224.464l.123.053c-.037.08-.069.16-.101.245l-.123-.048q.048-.101.101-.251zM2.96 6.4l.128.043a4.944 4.944 0 0 0-.075.256l-.128-.032q.032-.133.075-.267zm-.139.533l.133.027c0 .085-.032.171-.048.261h-.133q.021-.16.048-.288zm-.08.534h.133v.267h-.155c.005-.085.011-.176.021-.267zm0 .533h.133v.267h-.155c-.005-.075-.005-.165-.005-.267zm.027.533h.133c0 .091 0 .176.032.261H2.8c-.037-.059-.048-.149-.059-.261zm.085.534h.107c0 .085.037.171.059.256l-.128.032q-.037-.128-.064-.288zm.139.533h.101c.027.085.059.171.085.251l-.123.048c-.032-.112-.064-.197-.091-.299zm.309.752q-.101-.101-.144-.219l.123-.053.112.24zm.267.469l-.139-.235.117-.064.139.229zm.315.443l-.165-.219.107-.075.16.213zm.357.405l-.187-.197.101-.091.181.197zm.4.368l-.203-.181.091-.096.197.176zm.437.326l-.224-.16.08-.107.219.155zm.47.282l-.235-.133.069-.112.229.133zm-.102-2.442a1.471 1.471 0 0 1-.362.044l-.057-.001H3.962V8.027h1.029a1.024 1.024 0 0 1 .801.283 1.266 1.266 0 0 1 .255.885l.001.038c0 .176-.032.345-.089.501a.848.848 0 0 1-.524.522zm.598 2.666l-.277-.069.059-.123.245.107zm-.71-6.202v.939h-.475V5.361h.475v.912h.864v-.912h.469v2.245h-.469v-.939zm1.195 6.4l-.261-.08.043-.128.251.08zm.533.122l-.267-.053.032-.128.261.053zm-.197-2.976a.854.854 0 0 1-.532-.527 1.442 1.442 0 0 1-.088-.497l.001-.044a1.267 1.267 0 0 1 .258-.881 1.028 1.028 0 0 1 .801-.279h.78v.389h-.789a.533.533 0 0 0-.363.16.564.564 0 0 0-.144.379v.016l1.307-.001v.389H6.762a.593.593 0 0 0 .123.422.533.533 0 0 0 .413.126h.771v.389h-.795a1.526 1.526 0 0 1-.426-.034zm.736 3.046l-.272-.027v-.133h.261zm.4 0h-.133v-.133h.267v.133zm.411 0v-.133l.261-.027v.133zm.533-.07v-.133l.261-.053.032.128zm.533-.122l-.037-.128.251-.08.043.128zm-.613-3.339l-.197.533h-.501l.949-2.245H9.6l.955 2.245h-.533l-.208-.533zm1.131 3.163l-.048-.123.24-.107.059.123zm.49-.23l-.064-.117.229-.133.069.112zm.15-2.89a1.399 1.399 0 0 1-.049-.371l.001-.042V8.027h.469v1.317a1.484 1.484 0 0 0 0 .284.292.292 0 0 0 .059.123.38.38 0 0 0 .162.111.83.83 0 0 0 .238.034l.038-.001h.532v.373h-.555l-.065.001c-.144 0-.283-.02-.415-.057a.676.676 0 0 1-.261-.178.655.655 0 0 1-.154-.257zm.32 2.613l-.075-.117.213-.155.08.107zm.432-.325l-.085-.101.197-.176.091.096zm.4-.368l-.096-.096.181-.192.101.091zm.357-.411l-.107-.08.16-.213.107.075zm.315-.443l-.112-.069.139-.229.117.064zm.266-.474l-.117-.059q.059-.117.112-.24l.123.053q-.043.123-.112.245zm.219-.502l-.144-.043c.032-.08.059-.165.085-.251l.128.043a.89.89 0 0 1-.064.256zm.165-.533l-.128-.032c0-.085.043-.171.059-.256l.133.027q-.027.149-.059.277zm.112-.533h-.133c0-.085 0-.176.032-.261h.133a2.03 2.03 0 0 1-.032.277zM13.285 8v.272h-.133v-.267h.133zm0-.293h-.133V7.44h.133c-.021.085-.011.176-.005.267zm-.058-.534h-.133c0-.091-.032-.176-.048-.261l.128-.027q.027.144.048.283zm-.112-.533l-.128.032-.075-.256.128-.043q.032.128.069.261zm-.166-.533l-.123.048-.101-.245.123-.053c.027.091.059.176.091.261zm-.346-.736l.128.24-.117.059-.128-.235zm-.294-.459l.155.224-.112.069-.149-.219zm-.277-.112l-.171-.203.101-.091.176.208z"
      }
    })]);
  }
};

var IceCreamIcon = {
  name: 'IceCreamIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ice-cream"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.091 6.048a2.887 2.887 0 0 0-1.059-1.525c.023-.137.041-.287.041-.442 0-.717-.381-1.345-.952-1.692A2.21 2.21 0 0 0 8.925.464C8.427.154 7.553-.182 7.142.117a1.512 1.512 0 0 0-.375.999l.002.071a2.177 2.177 0 0 0-1.163 1.905 2.24 2.24 0 0 0-1.062 2.683c-.853.518-.757 1.787-.538 2.523 0 .064.533 2.133.533 2.133h6.667l.421-2.016a2.907 2.907 0 0 0 .542-1.698c0-.238-.028-.469-.082-.69zm-4.8-4.267a.367.367 0 0 0 .213-.33c.003-.246.036-.483.095-.709.508.097.959.32 1.315.646.26.228.425.564.425.938v.005a7.591 7.591 0 0 1-2.978.624 1.445 1.445 0 0 1 .915-1.197zm-1.216 1.91h.192a8.45 8.45 0 0 0 3.461-.736c.327.239.579.642.579 1.104 0 .12-.017.235-.048.345a14.234 14.234 0 0 1-4.992 1.174.945.945 0 0 1-.119-.494c0-.623.378-1.158.917-1.388zm-1.03 2.64a14.86 14.86 0 0 0 5.583-1.28c.302.313.598.707.744 1.169a2.124 2.124 0 0 1-.289 1.624l-6.454-.008c-.08-.448-.16-1.296.416-1.504z"
      }
    }), h("path", {
      attrs: {
        d: "M4.965 11.541l.709 4.016A.535.535 0 0 0 6.2 16h3.28c.263 0 .481-.19.525-.44l.71-4.019H4.966z"
      }
    })]);
  }
};

var IceMachineIcon = {
  name: 'IceMachineIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ice-machine"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.7 12.5l2.4-1.2v-2l-2.4 1.05v2.15zm-.4-2.85l2.55-1.1-2.55-1.1-2.55 1.1 2.55 1.1zm6.9 2.85l2.4-1.2v-2l-2.4 1.05v2.15zm-.4-2.85l2.55-1.1-2.55-1.1-2.55 1.1 2.55 1.1zM7.95 7.8l2.4-1.05v-1.7L7.95 6.1v1.7zm-.4-2.4l2.8-1.2L7.55 3l-2.8 1.2 2.8 1.2zm6.85 3.25v2.65c0 .15-.05.3-.1.4-.1.15-.2.25-.35.3l-2.85 1.4c-.05.1-.2.1-.3.1s-.25-.05-.35-.1L7.6 12s-.05 0-.05-.05L7.5 12l-2.85 1.4c-.1.1-.2.1-.35.1s-.25 0-.35-.05L1.15 12C1 11.95.9 11.85.8 11.7s-.1-.25-.1-.4V8.65c0-.15.05-.3.15-.45s.2-.25.35-.3l2.75-1.15V4.2c0-.15.05-.3.15-.45.05-.1.15-.2.3-.25l2.85-1.2c.1-.05.2-.05.3-.05s.2 0 .3.05l2.85 1.2c.15.05.25.15.35.3s.15.3.15.45V6.8l2.75 1.15c.15.05.25.15.35.3.1.1.1.25.1.4z"
      }
    })]);
  }
};

var IceboxIcon = {
  name: 'IceboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-icebox"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.9 4.25l.65-.65h-1.5s0 .05-.05.05l-.4.4c-.05.05-.15.05-.2 0s-.05-.15 0-.2l.25-.25h-.2c-.1 0-.15-.05-.15-.15s.05-.15.15-.15h.2l-.2-.2c-.05-.05-.05-.15 0-.2s.15-.05.2 0l.35.4v.05h1.55l-.65-.65h-.6c-.1 0-.15-.05-.15-.15s.05-.15.15-.15h.3l-.2-.25c-.05-.05-.05-.15 0-.2s.15-.05.2 0l.2.2v-.2c0-.1.05-.15.15-.15s.15.05.15.15v.6l.65.65V1.65s-.05 0-.05-.05l-.4-.4a.152.152 0 0 1 0-.2c.05 0 .15 0 .2.05l.2.2v-.2c0-.1.05-.15.15-.15.1.05.15.1.15.15v.2l.25-.25c.05-.05.15-.05.2 0s.05.15 0 .2l-.4.4s-.05 0-.05.05v1.5l.65-.65v-.55c0-.1.05-.15.15-.15s.15.05.15.15v.3l.2-.2c.05-.05.15-.05.2 0s.05.15 0 .2l-.2.2h.35c.1 0 .15.05.15.15s-.05.15-.15.15h-.6l-.65.65h1.55v-.05l.4-.4c.05-.05.15-.05.2 0s.05.15 0 .2l-.2.2h.2c.1 0 .15.05.15.15s-.05.15-.15.15h-.2l.25.25c.05.05.05.15 0 .2s-.15.05-.2 0l-.4-.4s0-.05-.05-.05h-1.5l.65.65h.6c.1 0 .15.05.15.15-.2 0-.25.05-.35.05h-.3l.2.2c.05.05.05.15 0 .2s-.15.05-.2 0l-.2-.2V5c0 .1-.05.15-.15.15s-.15-.05-.15-.15v-.6L13 3.8v1.55s.05 0 .05.05l.4.4c.05.05.05.15 0 .2s-.15.05-.2 0L13 5.7v.2c0 .1-.05.15-.15.15S12.7 6 12.7 5.9v-.2l-.2.25c-.05.05-.15.05-.2 0s-.05-.15 0-.2l.4-.4.05-.05V3.8l-.65.65v.6c0 .1-.05.15-.15.15s-.15-.05-.15-.15V4.7l-.2.2c-.05.05-.15.05-.2 0s-.05-.15 0-.2l.25-.2h-.35c-.1 0-.15-.05-.15-.15s.05-.15.15-.15l.6.05c-.05 0 0 0 0 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 10.4l1.6-1.6H2.75c0 .05-.05.1-.1.1l-.95.95c-.1.1-.35.1-.5 0-.1-.1-.1-.35 0-.5l.6-.6h-.5c-.2 0-.35-.1-.35-.3s.15-.3.35-.3h.55L1.3 7.6c-.1-.1-.1-.35 0-.5.1-.1.35-.1.5 0l.95.95c.05.05.05.05.05.1h3.9L5 6.6c-.05 0-.1.05-.1.05H3.5c-.2 0-.3-.15-.3-.3 0-.2.15-.3.3-.3h.8l-.55-.6c-.1-.1-.1-.35 0-.5.1-.1.35-.1.5 0l.55.55v-.85c0-.2.15-.3.3-.3.25-.05.4.15.4.3V6c0 .05 0 .1-.05.1l1.6 1.6V3.85c-.05 0-.1-.05-.1-.1L6 2.8c-.1-.1-.1-.35 0-.5.1-.1.35-.1.5 0l.5.55v-.5c.05-.15.2-.35.4-.35s.3.15.3.35v.55l.6-.6c.1-.1.35-.1.5 0 .1.1.1.35 0 .5l-.95.95c-.05.05-.1.05-.1.1V7.7l1.6-1.6V4.6c0-.2.15-.3.3-.3.2 0 .3.15.3.3v.8l.55-.55c.1-.1.35-.1.5 0 .1.1.1.35 0 .5l-.55.55h.85c.2 0 .3.15.3.3 0 .2-.15.3-.3.3H9.95c-.05 0-.1 0-.1-.05L8.25 8.1h3.9c0-.05.05-.05.05-.1l.95-.95c.1-.1.35-.1.5 0 .1.1.1.35 0 .5l-.65.6h.5c.2 0 .35.15.35.3 0 .2-.15.3-.35.3h-.55l.6.6c.1.1.1.35 0 .5-.1.1-.35.1-.5 0l-.95-.95c-.05-.05-.05-.1-.1-.1H8.15l1.6 1.6h1.45c.2 0 .3.15.3.3 0 .2-.15.3-.3.3h-.8l.55.55c.1.1.1.35 0 .5-.1.1-.35.1-.5 0l-.55-.55v.85c0 .2-.15.3-.3.3-.2 0-.3-.15-.3-.3V11c0-.05 0-.1.05-.1l-1.6-1.55v3.9c.05 0 .1.05.1.1l.95.95c.1.1.1.35 0 .5s-.35.1-.5 0l-.6-.6v.55c0 .2-.15.35-.3.35-.2 0-.3-.15-.3-.35v-.5l-.6.45c-.1.1-.35.1-.5 0-.1-.1-.1-.35 0-.5l.95-.95.1-.1v-3.9l-1.55 1.6c0 .05.05.1.05.1v1.35c0 .2-.15.3-.3.3-.2 0-.3-.15-.3-.3v-.8l-.55.55c-.1.1-.35.1-.5 0-.1-.1-.1-.35 0-.5l.55-.55H3.5c-.2 0-.3-.15-.3-.3 0-.2.15-.3.3-.3H5z"
      }
    }), h("path", {
      attrs: {
        d: "M-.1 0h16v16h-16V0z"
      }
    })]);
  }
};

var Image2Icon = {
  name: 'Image2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-image-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.139 4.656h-2.315l-.88-1.813a.743.743 0 0 0-.671-.427H5.727a.74.74 0 0 0-.669.422l-.882 1.818H1.861a.869.869 0 0 0-.869.869v7.184c0 .48.389.869.869.869h12.267c.48 0 .869-.389.869-.869V5.525a.87.87 0 0 0-.858-.869zM8 12.304a3.42 3.42 0 1 1 3.419-3.419 3.424 3.424 0 0 1-3.418 3.419z"
      }
    }), h("path", {
      attrs: {
        d: "M10.235 8.885a2.235 2.235 0 1 1-4.47 0 2.235 2.235 0 0 1 4.47 0z"
      }
    })]);
  }
};

var Image3Icon = {
  name: 'Image3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-image-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.648 1.365H2.352a.693.693 0 0 0-.693.693v11.883c0 .383.31.693.693.693h11.296c.383 0 .693-.31.693-.693V2.058a.693.693 0 0 0-.693-.693zm-.357 8.454c0 .383-.31.693-.693.693h-9.2a.693.693 0 0 1-.693-.693V3.2c0-.383.31-.693.693-.693h9.205c.383 0 .693.31.693.693z"
      }
    }), h("path", {
      attrs: {
        d: "M10.507 6.4a.257.257 0 0 0-.415-.001l-.95 1.366-2.091-2.997a.257.257 0 0 0-.415-.001L3.531 9.232a.256.256 0 0 0 .208.4h8.528a.256.256 0 0 0 .207-.401z"
      }
    }), h("path", {
      attrs: {
        d: "M11.483 4.309a.992.992 0 1 1-1.984 0 .992.992 0 0 1 1.984 0z"
      }
    })]);
  }
};

var ImageIcon = {
  name: 'ImageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-image"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "8.5",
        r: "1.5"
      }
    }), h("polyline", {
      attrs: {
        points: "21 15 16 10 5 21"
      }
    })]);
  }
};

var InboxIcon = {
  name: 'InboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-inbox"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 16 12 14 15 10 15 8 12 2 12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    })]);
  }
};

var IndoorLoungeIcon = {
  name: 'IndoorLoungeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-indoor-lounge"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.55 7.4c-.25 0-.5.05-.7.2V3.9c0-.4-.3-.7-.7-.7H2.9c-.35 0-.7.3-.7.7v3.7c-.2-.1-.45-.2-.7-.2-.8 0-1.4.65-1.4 1.4 0 .5.3.95.7 1.2v2c0 .6.45 1.05 1.05 1.05.2 0 .4-.05.6-.2.1.1.3.2.45.2h4.25c.2 0 .35-.05.45-.2.15.1.35.2.6.2.6 0 1.05-.45 1.05-1.05v-1.95c.4-.25.7-.7.7-1.2.05-.8-.6-1.45-1.4-1.45zM2.2 12c0 .2-.15.35-.35.35S1.5 12.2 1.5 12v-1.75c.25 0 .5-.05.7-.2V12zm-.7-2.45c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm5.65 2.8H2.9v-1.6c.2.1.45.2.7.2h2.8c.25 0 .5-.05.7-.2v1.6zm-.7-2.1h-2.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h2.8c.4 0 .7.3.7.7s-.3.7-.7.7zm.7-1.95c-.2-.1-.45-.2-.7-.2h-2.8c-.25 0-.5.05-.7.2V3.9H7.2v4.4zm1.4 3.7c0 .2-.15.35-.35.35s-.35-.15-.35-.35v-1.95c.2.1.45.2.7.2V12zm0-2.45c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4 0 .7.3.7.7s-.3.7-.7.7z"
      }
    }), h("path", {
      attrs: {
        d: "M2.65 3.6H7.4v8.9H2.65V3.6z"
      }
    }), h("path", {
      attrs: {
        d: "M1.1 8.85h2.15v3.65H1.1V8.85z"
      }
    }), h("path", {
      attrs: {
        d: "M6.8 8.95h1.95v3.6H6.8v-3.6z"
      }
    }), h("path", {
      attrs: {
        d: "M5.3 8.3h1.95v3.6H5.3V8.3z"
      }
    }), h("path", {
      attrs: {
        d: "M2.75 8.8a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"
      }
    }), h("path", {
      attrs: {
        d: "M6.6 10.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"
      }
    }), h("path", {
      attrs: {
        d: "M9.55 8.95c0 .497-.448.9-1 .9s-1-.403-1-.9.448-.9 1-.9 1 .403 1 .9z"
      }
    }), h("path", {
      attrs: {
        d: "M14.5 7.4c-.25 0-.5.05-.7.2V3.9c0-.4-.3-.7-.7-.7H8.85c-.4 0-.7.3-.7.7v3.7c-.2-.1-.45-.2-.7-.2-.8 0-1.4.65-1.4 1.4 0 .5.3.95.7 1.2v2c0 .6.45 1.05 1.05 1.05.2 0 .4-.05.6-.2.1.1.3.2.45.2h4.25c.2 0 .35-.05.45-.2.15.1.35.2.6.2.6 0 1.05-.45 1.05-1.05v-1.95c.4-.25.7-.7.7-1.2 0-.8-.65-1.45-1.4-1.45zM8.15 12c0 .2-.15.35-.35.35s-.35-.15-.35-.35v-1.75c.25 0 .5-.05.7-.2V12zm-.7-2.45c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4 0 .7.3.7.7s-.35.7-.7.7zm5.65 2.8H8.85v-1.6c.2.1.45.2.7.2h2.8c.25 0 .5-.05.7-.2v1.6zm-.75-2.1h-2.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h2.8c.4 0 .7.3.7.7.05.4-.3.7-.7.7zm.75-1.95c-.2-.1-.45-.2-.7-.2H9.6c-.25 0-.5.05-.7.2V3.9h4.25v4.4zm1.4 3.7c0 .2-.15.35-.35.35s-.35-.15-.35-.35v-1.95c.2.1.45.2.7.2V12zm0-2.45c-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4 0 .7.3.7.7s-.3.7-.7.7z"
      }
    }), h("path", {
      attrs: {
        d: "M8.45 3.45h4.75v8.9H8.45v-8.9z"
      }
    }), h("path", {
      attrs: {
        d: "M6.9 8.7h2.15v3.65H6.9V8.7z"
      }
    }), h("path", {
      attrs: {
        d: "M12.6 8.8h1.95v3.6H12.6V8.8z"
      }
    }), h("path", {
      attrs: {
        d: "M11.1 8.2h1.95v3.6H11.1V8.2z"
      }
    }), h("path", {
      attrs: {
        d: "M8.55 8.65a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"
      }
    }), h("path", {
      attrs: {
        d: "M12.35 10.5a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"
      }
    }), h("path", {
      attrs: {
        d: "M15.35 8.85c0 .497-.448.9-1 .9s-1-.403-1-.9.448-.9 1-.9 1 .403 1 .9z"
      }
    }), h("path", {
      attrs: {
        d: "M5.7 13.05h6.05l-2.9-3z"
      }
    }), h("path", {
      attrs: {
        d: "M6.15 3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
      }
    }), h("path", {
      attrs: {
        d: "M12.35 3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
      }
    })]);
  }
};

var InfantIcon = {
  name: 'InfantIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-infant"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.347 2.571a2.33 2.33 0 1 1-4.662 0 2.33 2.33 0 0 1 4.662 0z"
      }
    }), h("path", {
      attrs: {
        d: "M13.333 8.112l-3.136-2.955h-.032a.754.754 0 0 0-.533-.229H6.399a.748.748 0 0 0-.481.177.778.778 0 0 0-.101.075L2.666 8.112a.905.905 0 0 0-.042 1.286.905.905 0 0 0 1.286.042l1.722-1.6v1.381H10.4V7.824l1.717 1.6a.902.902 0 0 0 .621.246.901.901 0 0 0 .663-.289l.001-.001a.904.904 0 0 0-.069-1.268z"
      }
    }), h("path", {
      attrs: {
        d: "M6.197 12.741l.912-.944a3.604 3.604 0 0 1-1.815-1.733l-1.231 1.723c-.123.171-.421.533-.24.773s1.472 2.091 1.984 2.709a1.014 1.014 0 0 0 1.287.397.724.724 0 0 0 .222-.908 145.177 145.177 0 0 1-1.118-2.017z"
      }
    }), h("path", {
      attrs: {
        d: "M10.731 10.048a3.604 3.604 0 0 1-1.801 1.746l.889.953s-.923 1.691-1.12 2.016a.717.717 0 0 0 .227.905 1.012 1.012 0 0 0 1.28-.394c.536-.623 1.805-2.447 1.987-2.714s-.123-.603-.24-.773z"
      }
    })]);
  }
};

var Info2Icon = {
  name: 'Info2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-info-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.227 7.344h1.541c.215 0 .389.174.389.389v4.651a.389.389 0 0 1-.389.389H7.227a.389.389 0 0 1-.389-.389V7.733c0-.215.174-.389.389-.389z"
      }
    }), h("path", {
      attrs: {
        d: "M9.44 4.667a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    })]);
  }
};

var InfoIcon = {
  name: 'InfoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-info"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }
    })]);
  }
};

var InstagramIcon = {
  name: 'InstagramIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-instagram"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "5",
        ry: "5"
      }
    }), h("path", {
      attrs: {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "6.5",
        x2: "17.51",
        y2: "6.5"
      }
    })]);
  }
};

var IpodIcon = {
  name: 'IpodIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-ipod"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3.6 0h9.3a.74.74 0 0 1 .8.646V15.35a.741.741 0 0 1-.803.65h.003-9.3a.74.74 0 0 1-.8-.646V.65C2.75.3 3.15 0 3.6 0zm.85 1.65v5.1h7.6v-5.1zm4.1 6.25a3.65 3.65 0 1 0 3.65 3.65A3.67 3.67 0 0 0 8.551 7.9H8.55z"
      }
    }), h("path", {
      attrs: {
        d: "M8.55 13.35a1.8 1.8 0 1 0-1.8-1.8v.005c0 .991.804 1.795 1.795 1.795h.005z"
      }
    })]);
  }
};

var ItalicIcon = {
  name: 'ItalicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-italic"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "4",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "20",
        x2: "5",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "4",
        x2: "9",
        y2: "20"
      }
    })]);
  }
};

var JacuzziIcon = {
  name: 'JacuzziIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-jacuzzi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 2.1a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0z"
      }
    }), h("path", {
      attrs: {
        d: "M14.05 6.85c-1.1-.7-2.1-1.05-3.3-1-1.85.05-2.8 1-3.2 1.35s-.8.55-1.6.75c-1.65.4-2.9-.35-3.4-.75-.2-.1-.3-.15-.35-.15h-.3c-.25 0-.25.25-.3.35v5.3c.05.55.15.8.7 1.2s1.2.35 1.2.35h9.15c.45-.05.9-.15 1.3-.6s.4-.95.4-.95V7.45c0-.35-.2-.55-.3-.6z"
      }
    }), h("path", {
      attrs: {
        d: "M16 3.8c0-.35-.25-.35-.3-.35h-.25c-.35 0-.3.35-.3.35v9.85c0 .15-.05.6-.45 1-.45.35-.9.3-.9.3H2.15c-.2-.05-.6-.1-.9-.55-.3-.4-.25-1-.25-1V3.85c0-.3-.2-.4-.3-.4H.35c-.3 0-.35.2-.35.3v9.9c0 .7.25 1.25.85 1.75s1.35.45 1.35.45h11.6c.5 0 1.1-.2 1.65-.8s.5-1.4.5-1.4L16 3.8z"
      }
    }), h("path", {
      attrs: {
        d: "M9.05 11.75s-.85-2.05-1-2.45-.45-.45-.85-.25c-.35.15-.9.5-1.45.75s-1.8.45-2.35-.8c0 0-1.45-2.7-.1-4.45.3-.4 1.05-.9 1.7-.5s.5 2.15.5 2.15l.15 1.7c.6-.3 1.2-.55 1.35-.65.45-.2 1.6-.6 2.15.8s1.05 2.8 1.05 2.8z"
      }
    }), h("path", {
      attrs: {
        d: "M9.4 3.85c-.1-.25-.3-.45-.6-.65l-.2-.15c-.5-.3-.85-.65-.85-1s.3-.7.8-.95h-.7c-.5.3-.8.6-.8.95 0 .3.25.6.65.9l.35.25c.3.2.55.4.65.65.1.35-.05.7-.5 1h.7c.45-.25.65-.6.5-1z"
      }
    }), h("path", {
      attrs: {
        d: "M11.3 3.9c-.1-.25-.3-.45-.6-.65l-.2-.1c-.5-.3-.85-.65-.85-1s.3-.7.8-.95H9.7c-.5.3-.8.6-.8.95 0 .3.25.6.65.9l.35.25c.35.2.6.4.65.65.1.35-.05.7-.5 1h.7c.5-.3.7-.65.55-1.05z"
      }
    }), h("path", {
      attrs: {
        d: "M12.95 3.9c-.1-.25-.3-.45-.6-.65l-.2-.15c-.5-.3-.85-.65-.85-1s.3-.7.8-.95h-.75c-.5.3-.8.6-.8.95 0 .3.25.6.65.9l.35.25c.3.2.55.4.65.65.1.35-.05.7-.5 1h.7c.45-.25.65-.6.55-1z"
      }
    })]);
  }
};

var JeepIcon = {
  name: 'JeepIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-jeep"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.173 5.045h-.533a.4.4 0 0 0-.147.028l-.104-1.169a.341.341 0 0 0-.336-.309H7.039a.34.34 0 0 0-.303.185l-1.26 2.541a.342.342 0 0 1-.304.187H3.945c-1.856 0-2.133.261-2.373.784-.069.155-.288.656-.533 1.259H.708v-.176a.123.123 0 0 0-.123-.123H.121a.123.123 0 0 0-.123.123v1.253c0 .068.055.123.123.123H.58l-.155.427a3.987 3.987 0 0 0-.297 1.1c.025.181.163.303.33.303h.43a.343.343 0 0 0 .277-.148l.966-1.372a.34.34 0 0 1 .277-.149h1.856a.34.34 0 0 1 .281.148l.934 1.388a.34.34 0 0 0 .282.149h6.149a.34.34 0 0 0 .292-.169l.774-1.346a.343.343 0 0 1 .293-.171h2.034c.119 0 .224.061.285.153l.849 1.329a.369.369 0 0 0 .403.138c.291-.063.696-.111.611-.533s-.384-1.232-.501-1.6h.224a.427.427 0 0 0 .427-.427v-3.52a.427.427 0 0 0-.426-.405h-.006zm-7.808.758a.178.178 0 0 1 0 .071l-.336.708a.165.165 0 0 1-.149.096H6.533a.165.165 0 0 1-.149-.23l.885-2.047a.164.164 0 0 1 .149-.101H9.2c.091 0 .165.074.165.165zM12.731 6a.156.156 0 0 1 0 .087l-.298.532a.166.166 0 0 1-.142.08h-2.034a.165.165 0 0 1-.165-.165V4.465c0-.091.074-.165.165-.165h2.309c.091 0 .165.074.165.165zm2.906.677h-2.005a.165.165 0 0 1-.165-.165V4.464c0-.091.074-.165.165-.165h1.931c.089 0 .162.071.165.16l.075 2.048v.005a.165.165 0 0 1-.165.165h-.006z"
      }
    }), h("path", {
      attrs: {
        d: "M3.333 10.133a1.733 1.733 0 1 0 1.733 1.733v-.017a1.733 1.733 0 0 0-1.733-1.716zm0 2.347a.613.613 0 1 1 .613-.629c0 .34-.275.614-.613.614z"
      }
    }), h("path", {
      attrs: {
        d: "M14.331 10.133a1.733 1.733 0 1 0 0 3.466 1.733 1.733 0 0 0 0-3.466zm0 2.347h-.01a.613.613 0 1 1 .613-.63v.001a.613.613 0 0 1-.602.613z"
      }
    }), h("path", {
      attrs: {
        d: "M8.128 2.416h6.763c.144 0 .261.117.261.261v.368a.261.261 0 0 1-.261.261H8.128a.261.261 0 0 1-.261-.261v-.368c0-.144.117-.261.261-.261z"
      }
    })]);
  }
};

var JetskiIcon = {
  name: 'JetskiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-jetski"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.15 3c.5.45 1.3.4 1.75-.1s.4-1.3-.1-1.75c-.5-.45-1.3-.4-1.75.1s-.4 1.3.1 1.75z"
      }
    }), h("path", {
      attrs: {
        d: "M7.3 12.55s-.4-2.2-.45-2.6c-.1-.4-.35-.55-.75-.45s-1 .3-1.6.4c-.55.15-1.85 0-2.15-1.3 0 0-.8-3 .9-4.35.45-.35 1.25-.65 1.8-.15S6.3 6.05 6.3 6.05 8 5.5 8.4 5.4c.85-.15 1.1.3.2.75-1.45.7-2.4 1.05-2.7.9C5.55 6.9 5 6.3 5 6.3L4.8 8c.7-.15 1.25-.3 1.45-.35.5-.1 1.7-.25 1.95 1.25s.4 3 .4 3z"
      }
    }), h("path", {
      attrs: {
        d: "M.45 11.6h14.9c.4 0 .5.55.2.7-1.25.75-2.85 1.9-4.65 2.15-2.6.45-7.65-.45-9.65-1.3-.5-.2-1-.65-1.15-1-.1-.3.1-.55.35-.55z"
      }
    }), h("path", {
      attrs: {
        d: "M15.15 11.15H.55c-.3 0-.45-.35-.25-.55l.5-.6c.2-.25.5-.35.8-.4l6.5-.5s.45-.9 1.25-1.55c-.05-.1-.05-.2-.05-.35 0-.35.2-.7.55-.95L9.3 6H8c-.2 0-.35-.15-.35-.35S7.8 5.3 8 5.3h1.4l1 .6.15.15h.1c.7 0 1.3.4 1.45.9 2.75.45 3.25 2.65 3.3 3.7.25.3 0 .5-.25.5z"
      }
    })]);
  }
};

var Jobs2Icon = {
  name: 'Jobs2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-jobs-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.853 9.755V2.491h1.643V.832h5.088v4.677h.8V.032H2.171L.054 2.037v8.517h3.525v-.8H.854z"
      }
    }), h("path", {
      attrs: {
        d: "M1.979 3.253h4.485v.8H1.979v-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M1.979 4.821h4.485v.8H1.979v-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M1.979 6.384h4.485v.8H1.979v-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M1.979 7.952h1.6v.8h-1.6v-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M12.693 6.043H7.36l-.496 1.771H4.112v3.813h4.981a.963.963 0 0 1 1.86-.008l4.994.007V7.813h-2.752zm-.608 1.77H7.973l.197-.704h3.733l.197.704z"
      }
    }), h("path", {
      attrs: {
        d: "M10.96 12.155a.972.972 0 0 1-1.865.007l-4.983-.007v3.813h11.835v-3.813H10.96z"
      }
    })]);
  }
};

var JobsIcon = {
  name: 'JobsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-jobs"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.133 3.829l-.651-2.309H4.517l-.651 2.309H.277v4.976h6.507a1.265 1.265 0 1 1 2.436-.009l6.509.009V3.829zm-6.8 0l.256-.917h4.853l.224.917z"
      }
    }), h("path", {
      attrs: {
        d: "M8 10.427a1.27 1.27 0 0 1-1.214-.914L.277 9.504v4.976h15.467V9.504H9.216c-.156.535-.64.92-1.216.923z"
      }
    })]);
  }
};

var KeyIcon = {
  name: 'KeyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-key"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
      }
    })]);
  }
};

var LaundryIcon = {
  name: 'LaundryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-laundry"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.333 1.003H2.666a.72.72 0 0 0-.72.72v1.701h12.107V1.723a.72.72 0 0 0-.72-.72zm-7.28 1.664H3.301a.535.535 0 0 1-.004-1.013l2.756-.001a.535.535 0 0 1 .004 1.013zm4.71 0a.533.533 0 1 1 .533-.533c0 .293-.236.53-.528.533zm1.642 0a.533.533 0 1 1 0-1.066.533.533 0 0 1 0 1.066z"
      }
    }), h("path", {
      attrs: {
        d: "M1.947 14.997h12.107V4.224H1.947zM8 5.445A4.165 4.165 0 1 1 3.835 9.61v-.011A4.17 4.17 0 0 1 8 5.445z"
      }
    }), h("path", {
      attrs: {
        d: "M8 13.243a3.634 3.634 0 0 0 3.587-3.089.75.75 0 0 1-.436.146l-.027-.001c-1.113 0-3.247-1.408-4.937-1.12a2.64 2.64 0 0 0-1.778.95A3.63 3.63 0 0 0 8 13.243h.001z"
      }
    })]);
  }
};

var LayersIcon = {
  name: 'LayersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layers"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 2 7 12 12 22 7 12 2"
      }
    }), h("polyline", {
      attrs: {
        points: "2 17 12 22 22 17"
      }
    }), h("polyline", {
      attrs: {
        points: "2 12 12 17 22 12"
      }
    })]);
  }
};

var LayoutIcon = {
  name: 'LayoutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layout"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "21",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "21",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var LengthIcon = {
  name: 'LengthIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-length"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 5.3H.15v4H16v-4zM.5 8.9V5.65h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h1V6h.35v-.35h.65v.85h.35v-.85h.65V6h.35v-.35h.65V6h.35v-.35h.65V8.9H.5z"
      }
    })]);
  }
};

var LifeBuoyIcon = {
  name: 'LifeBuoyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-life-buoy"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "9.17",
        y2: "9.17"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "14.83",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "19.07",
        y2: "4.93"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "18.36",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "9.17",
        y2: "14.83"
      }
    })]);
  }
};

var Link2Icon = {
  name: 'Link2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var LinkIcon = {
  name: 'LinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    }), h("path", {
      attrs: {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    })]);
  }
};

var LinkedinIcon = {
  name: 'LinkedinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-linkedin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
      }
    }), h("circle", {
      attrs: {
        cx: "4",
        cy: "4",
        r: "2"
      }
    })]);
  }
};

var LiraIcon = {
  name: 'LiraIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lira"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.741 5.291v-.939h-1.104v-.944H.16v7.301h1.099v.939h1.104v.939H15.84V5.291zM.56 10.309V3.808h12.677v6.501zm1.099.939v-.533h11.979V4.752h.699v6.496zm13.776.939H2.763v-.533h11.979V5.691h.699z"
      }
    }), h("path", {
      attrs: {
        d: "M.827 4.075v5.968h12.144V4.075zm7.408 3.669a1.692 1.692 0 0 1-.348.62 1.65 1.65 0 0 1-.585.416 2.205 2.205 0 0 1-.826.159l-.051-.001h-.296V7.263l-.421.155v-.443l.421-.155v-.384l-.421.155v-.443l.421-.155v-.816h.709v.533l1.003-.379v.443l-1.003.373v.379l1.003-.373v.443l-1.003.373v1.264h.004c.12 0 .231-.036.324-.097a.904.904 0 0 0 .257-.262c.077-.119.137-.252.176-.394.043-.156.066-.323.066-.496v-.01l.683.001.001.051c0 .258-.039.507-.112.74z"
      }
    })]);
  }
};

var ListIcon = {
  name: 'ListIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-list"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "3.01",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "3.01",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "3.01",
        y2: "18"
      }
    })]);
  }
};

var LoaderIcon = {
  name: 'LoaderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-loader"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "7.76",
        y2: "7.76"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "16.24",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "7.76",
        y2: "16.24"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "7.76",
        x2: "19.07",
        y2: "4.93"
      }
    })]);
  }
};

var LockIcon = {
  name: 'LockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      }
    })]);
  }
};

var LogInIcon = {
  name: 'LogInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-in"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
      }
    }), h("polyline", {
      attrs: {
        points: "10 17 15 12 10 7"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    })]);
  }
};

var LogOutIcon = {
  name: 'LogOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-out"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    }), h("polyline", {
      attrs: {
        points: "16 17 21 12 16 7"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "9",
        y2: "12"
      }
    })]);
  }
};

var LuggageStorageIcon = {
  name: 'LuggageStorageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-luggage-storage"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1.632 2.949c-.571 0-1.035.463-1.035 1.035v7.248c0 .571.463 1.035 1.035 1.035h1.152V2.95z"
      }
    }), h("path", {
      attrs: {
        d: "M14.699 8.992V3.984c0-.571-.463-1.035-1.035-1.035h-1.152v4.368a4.039 4.039 0 0 0-1.054-.207l-.012-4.161h-.987V1.69A1.242 1.242 0 0 0 9.222.453H6.107A1.242 1.242 0 0 0 4.87 1.69v1.259H3.862v9.317h3.2a4.232 4.232 0 0 0 4.119 3.286 4.224 4.224 0 0 0 3.509-6.576zM5.936 2.949V1.69a.17.17 0 0 1 .171-.171h3.115a.17.17 0 0 1 .171.171v1.259zM11.2 14.747a3.424 3.424 0 1 1 0-6.848 3.424 3.424 0 0 1 0 6.848z"
      }
    }), h("path", {
      attrs: {
        d: "M12.901 10.789a.267.267 0 0 0-.267-.267h-.368v-.261a1.01 1.01 0 1 0-2.022 0v.261H9.86a.267.267 0 0 0-.267.267V12.8c0 .147.119.267.267.267h2.784a.267.267 0 0 0 .267-.267zm-2.133-.533a.477.477 0 1 1 .954 0v.261h-.955zm.475 2.213a.143.143 0 0 1-.144-.144v-.432a.38.38 0 1 1 .291-.001l-.002.438a.144.144 0 0 1-.144.139z"
      }
    })]);
  }
};

var Lunch2Icon = {
  name: 'Lunch2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lunch-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.229 9.701a.216.216 0 0 1 .195-.309c.085 0 .159.049.194.121a.242.242 0 0 1 0 .094l2.635-1.857a.213.213 0 0 1-.096-.241.213.213 0 0 1 .267-.142.215.215 0 0 1 .148.164l.598-.42-3.28-5.243a.213.213 0 0 1-.283 0 .214.214 0 0 1 .058-.352L8.32.982 4.507.001l-4.32 11.2 3.664 1.803 4.496-3.168a.216.216 0 0 1-.117-.132zm1.984-2.608a.213.213 0 1 1-.192-.124c.085 0 .159.05.193.122zM9.568 4.88a.213.213 0 1 1-.001 0zM4.837.613l1.563.411-4 10.667-.635-.331.667-1.723s-.736 0-.976.533.144 1.029.277 1.173l-.875-.427zM3.552 12.24l-.683-.336L6.933 1.152l.699.176-1.765 4.699a.213.213 0 0 1-.037.423.22.22 0 0 1-.108-.029zM8.48 3.493a.214.214 0 0 1-.034.424.214.214 0 1 1 .041-.423zM5.813 10.96a.213.213 0 1 1 0-.304.214.214 0 0 1-.016.309zm.656-2.187a.213.213 0 1 1 0-.304.214.214 0 0 1-.016.309zm.63-3.546a.214.214 0 0 1 .034-.424.214.214 0 0 1 .211.243.214.214 0 0 1-.262.185zm1.024 1.968a.213.213 0 1 1 0-.304.207.207 0 0 1 .061.15c0 .063-.028.12-.072.16z"
      }
    }), h("path", {
      attrs: {
        d: "M4.8 1.44c-.213.501.325 1.227.325 1.227L5.797.923s-.731.016-.997.517z"
      }
    }), h("path", {
      attrs: {
        d: "M4.149 3.2c-.24.501.304 1.216.304 1.216l.672-1.749s-.736 0-.976.533z"
      }
    }), h("path", {
      attrs: {
        d: "M3.477 4.928c-.24.501.304 1.216.304 1.216l.672-1.739s-.72.021-.976.523z"
      }
    }), h("path", {
      attrs: {
        d: "M2.805 6.672c-.24.501.304 1.216.304 1.216l.672-1.744s-.741.027-.976.528z"
      }
    }), h("path", {
      attrs: {
        d: "M2.133 8.416c-.24.501.304 1.216.304 1.216l.667-1.739s-.736.021-.971.523z"
      }
    }), h("path", {
      attrs: {
        d: "M11.493 10.528h.053v-.731h.4v1.067c.108.146.241.267.394.359l.006-3.143h.4v3.344c.111.039.245.074.383.099l.017-2.584h.4v2.629h.4V7.301h.4v4.197c.155-.028.289-.063.42-.107l-.02-2.453h.4v2.304c.159-.095.292-.216.397-.359l.003-1.204h.4v.848h.4V9.279h-.8v-.747h-.8v-1.6h-1.2v1.6h-.4v-.853h-1.2v1.717h-.8v1.136z"
      }
    }), h("path", {
      attrs: {
        d: "M16.88 10.928H16c0 .027-.037.048-.053.075a1.575 1.575 0 0 1-.162.221l-.03.041a1.813 1.813 0 0 1-.204.189l-.004.003a2.063 2.063 0 0 1-.675.357l-.018.005h-.096a3.55 3.55 0 0 1-.921.128h-.162a3.647 3.647 0 0 1-.948-.134l.026.006h-.096a2.647 2.647 0 0 1-.304-.119 2.011 2.011 0 0 1-.393-.247l.004.003a1.802 1.802 0 0 1-.207-.191l-.033-.044a1.587 1.587 0 0 1-.156-.212l-.004-.007s-.037-.048-.053-.075h-.896l.587 2.736h5.056z"
      }
    }), h("path", {
      attrs: {
        d: "M11.739 16h4.016l.331-1.493h-4.677L11.74 16z"
      }
    })]);
  }
};

var LunchIcon = {
  name: 'LunchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lunch"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.003 10.795h-.635a4.203 4.203 0 0 0-2.605-2.254l-.094-.008c-1.131-1.179-2.347-1.76-3.6-1.717a5.212 5.212 0 0 0-3.457 1.713 4.073 4.073 0 0 0-1.588.606l.015-8.132a.267.267 0 1 0-.534 0v.475H1.209v.485h1.296v.533H1.209v.485h1.296v.533H1.209v.485h1.296v5.584a3.692 3.692 0 0 0-.839 1.229l-.67.024a.997.997 0 0 0 0 1.994l1.632 2.475h10.741l1.632-2.507a.997.997 0 0 0 0-1.994zm-1.254 0h-.629a2.862 2.862 0 0 0-1.612-1.222 2.796 2.796 0 0 0-.707-.09h-.018c.001 0 0 0 0 0a4 4 0 0 0-1.835.443 2.101 2.101 0 0 0-.371-.389 4.395 4.395 0 0 1 2.189-.57c.299 0 .591.029.874.084.905.276 1.66.904 2.101 1.726zm-4.122 0a4.89 4.89 0 0 0-.308-.472 3.738 3.738 0 0 1 1.465-.307h.012c.198 0 .391.025.574.073.416.126.779.374 1.048.702zM7.131 8.741c.277-.17.611-.272.969-.277h.01c.385 0 .749.089 1.073.246a5.346 5.346 0 0 0-1.11.489 3.141 3.141 0 0 0-.91-.455zm.96-1.408h.011c1.041 0 1.988.406 2.69 1.068a4.549 4.549 0 0 0-.998.105 2.477 2.477 0 0 0-1.645-.598H8.1a2.484 2.484 0 0 0-1.642.647 5.131 5.131 0 0 0-.978-.093h-.038a4.378 4.378 0 0 1 2.636-1.13zm-2.624 1.68a4.017 4.017 0 0 1 3.522 1.761l-.636.014a3.564 3.564 0 0 0-2.894-1.242c-1.506 0-2.253.634-2.626 1.242h-.592c.384-.789 1.253-1.771 3.227-1.776zM7.6 10.789H3.499a2.556 2.556 0 0 1 1.993-.708 3.157 3.157 0 0 1 2.118.718z"
      }
    }), h("path", {
      attrs: {
        d: "M3.803 4.523a.267.267 0 0 0 .267-.267V1.003a.267.267 0 1 0-.534 0v3.264a.267.267 0 0 0 .266.256z"
      }
    }), h("path", {
      attrs: {
        d: "M4.837 4.523a.267.267 0 0 0 .267-.267v-.304h1.509l.896-.859h7.221v-.757H7.509l-.896-.853H5.104v-.48a.267.267 0 1 0-.534 0v3.264a.267.267 0 0 0 .266.256zm1.067-1.067h-.8v-.533h.827zm0-1.504v.533h-.8v-.533z"
      }
    })]);
  }
};

var Mail2Icon = {
  name: 'Mail2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mail-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 10.464L.096 5.76v6.187a1.6 1.6 0 0 0 1.6 1.6h12.608a1.6 1.6 0 0 0 1.6-1.6V5.76z"
      }
    }), h("path", {
      attrs: {
        d: "M8 9.227l7.904-4.709v-.464a1.6 1.6 0 0 0-1.6-1.6H1.696a1.6 1.6 0 0 0-1.6 1.6v.464z"
      }
    })]);
  }
};

var Mail3Icon = {
  name: 'Mail3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mail-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.304 2.453H1.696a1.6 1.6 0 0 0-1.6 1.6v7.893a1.6 1.6 0 0 0 1.6 1.6h12.608a1.6 1.6 0 0 0 1.6-1.6V4.053a1.6 1.6 0 0 0-1.6-1.6zM1.696 3.52h12.608c.295 0 .533.239.533.533v.923L8 9.067 1.163 4.976v-.923c0-.295.239-.533.533-.533zm12.608 8.96H1.696a.533.533 0 0 1-.533-.533V6.219L8 10.294l6.837-4.075v5.728a.533.533 0 0 1-.533.533z"
      }
    })]);
  }
};

var MailIcon = {
  name: 'MailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mail"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "22,6 12,13 2,6"
      }
    })]);
  }
};

var Map2Icon = {
  name: 'Map2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.84 15.152l-3.2-5.269a.534.534 0 0 0-.453-.256h-1.109l-.565 1.067h1.376l2.555 4.203H1.564l2.555-4.203h2.576l1.307 2.469 1.312-2.469.565-1.067 1.797-3.387v-.048l.059-.059a4.192 4.192 0 1 0-7.455.023l-.011-.023.032.064v.048l1.797 3.387H3.821a.534.534 0 0 0-.452.254L.168 15.158a.533.533 0 0 0 .453.81h14.768a.533.533 0 0 0 .452-.813zM8 2.603a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"
      }
    })]);
  }
};

var Map3Icon = {
  name: 'Map3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.733 6.096a4.192 4.192 0 1 0-7.455.023l-.011-.023.032.064v.043l3.675 6.933 3.675-6.933V6.16zM8 2.565a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"
      }
    }), h("path", {
      attrs: {
        d: "M11.6 15.371c0 .348-1.612.629-3.6.629s-3.6-.282-3.6-.629c0-.348 1.612-.629 3.6-.629s3.6.282 3.6.629z"
      }
    })]);
  }
};

var Map4Icon = {
  name: 'Map4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.549 7.429a5.04 5.04 0 0 0 .576-2.357 5.11 5.11 0 1 0-9.629 2.385l-.013-.028.043.08.027.053 4.448 8.437 4.512-8.496zM8 3.125a1.979 1.979 0 1 1 0 3.958 1.979 1.979 0 0 1 0-3.958z"
      }
    })]);
  }
};

var MapAlaturkaIcon = {
  name: 'MapAlaturkaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-alaturka"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.32 0H1.68a1.6 1.6 0 0 0-1.6 1.6v8.181a1.6 1.6 0 0 0 1.6 1.6h5.013L8 16l1.307-4.603h5.013a1.6 1.6 0 0 0 1.6-1.6V1.6a1.6 1.6 0 0 0-1.6-1.6zm1.067 9.781c0 .589-.478 1.067-1.067 1.067H1.68A1.067 1.067 0 0 1 .613 9.781V1.6c0-.589.478-1.067 1.067-1.067h12.64c.589 0 1.067.478 1.067 1.067z"
      }
    }), h("path", {
      attrs: {
        d: "M5.611 3.733a1.218 1.218 0 0 0-.763.163.738.738 0 0 0-.223.608.691.691 0 0 0 .197.53c.139.117.32.188.518.188l.055-.002h1.763V3.657c.002-.02.002-.043.002-.066a.89.89 0 0 0-.258-.627 1.098 1.098 0 0 0-.771-.235h-1.33v.533h1.067a.86.86 0 0 1 .469.093.354.354 0 0 1 .125.271l-.002.038v.068zm.869.496v.533h-.821c-.015.002-.033.002-.051.002a.534.534 0 0 1-.24-.057.218.218 0 0 1-.068-.157l.001-.024a.245.245 0 0 1 .084-.26.564.564 0 0 1 .317-.064z"
      }
    }), h("path", {
      attrs: {
        d: "M7.584 1.835h.683v3.387h-.683V1.835z"
      }
    }), h("path", {
      attrs: {
        d: "M11.131 5.216V3.659c.002-.02.002-.043.002-.066a.89.89 0 0 0-.258-.627 1.098 1.098 0 0 0-.771-.235H8.758v.533h1.093a.86.86 0 0 1 .469.093.354.354 0 0 1 .125.271l-.002.038v.068H9.6a1.218 1.218 0 0 0-.767.189.735.735 0 0 0-.224.608.691.691 0 0 0 .197.53c.139.117.32.188.518.188l.055-.002zm-1.856-.731l-.001-.026c0-.075.034-.142.086-.187a.561.561 0 0 1 .317-.064h.777v.533h-.821c-.015.002-.033.002-.051.002a.537.537 0 0 1-.24-.057.215.215 0 0 1-.066-.203z"
      }
    }), h("path", {
      attrs: {
        d: "M4.405 5.984H1.477v.587H2.57V9.36h.736V6.571h1.099v-.587z"
      }
    }), h("path", {
      attrs: {
        d: "M5.829 8.811h-.533a.526.526 0 0 1-.348-.082.475.475 0 0 1-.083-.331V6.875H4.22v1.6a.884.884 0 0 0 .24.694 1.16 1.16 0 0 0 .793.218h1.233V6.875H5.83z"
      }
    }), h("path", {
      attrs: {
        d: "M8.032 6.875H6.933V9.36h.656V7.355h.229a.373.373 0 0 1 .236.049.279.279 0 0 1 .051.192v.319h.624v-.416a.632.632 0 0 0-.156-.486.813.813 0 0 0-.547-.138z"
      }
    }), h("path", {
      attrs: {
        d: "M10.805 6.875L9.754 8.07V5.979h-.656V9.36h.656V8.155l1.003 1.205h.88l-1.152-1.269 1.152-1.216h-.832z"
      }
    }), h("path", {
      attrs: {
        d: "M13.248 6.875h-1.344v.533h1.093a.86.86 0 0 1 .469.093.354.354 0 0 1 .125.271l-.002.038v.062h-.859a1.218 1.218 0 0 0-.767.189.735.735 0 0 0-.229.586.691.691 0 0 0 .197.531c.139.117.32.188.518.188l.055-.002h1.763V7.801c.002-.02.002-.043.002-.066a.89.89 0 0 0-.258-.627 1.097 1.097 0 0 0-.766-.234zm.352 1.984h-.8c-.015.002-.033.002-.051.002a.537.537 0 0 1-.24-.057.218.218 0 0 1-.068-.157l.001-.024-.001-.025c0-.075.034-.142.086-.187a.561.561 0 0 1 .317-.064h.755z"
      }
    })]);
  }
};

var MapPinIcon = {
  name: 'MapPinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-pin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "10",
        r: "3"
      }
    })]);
  }
};

var MapIcon = {
  name: 'MapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "6",
        x2: "16",
        y2: "22"
      }
    })]);
  }
};

var MassageIcon = {
  name: 'MassageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-massage"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.803 1.611a1.59 1.59 0 1 1-3.178 0 1.59 1.59 0 0 1 3.178 0z"
      }
    }), h("path", {
      attrs: {
        d: "M4.757 8.779l-.901-2.576V9.27a.746.746 0 0 0 .039.224l1.716-.357z"
      }
    }), h("path", {
      attrs: {
        d: "M5.184 8.379l1.424.608 1.925-.085.123-.341-2.347-1.067-.533-1.6.533-.16.443 1.403 1.472.677V6.321l.741.624.272 1.333.043.197.091.432 1.381-.069-.645-2.56-2-2.133a.76.76 0 0 0-.635-.341H4.619a.762.762 0 0 0-.762.74v.044z"
      }
    }), h("path", {
      attrs: {
        d: "M15.611 9.899a1.413 1.413 0 1 1-2.826 0 1.413 1.413 0 0 1 2.826 0z"
      }
    }), h("path", {
      attrs: {
        d: "M10.965 12.507H.533v3.472h.843v-2.197h10.251l-.043-.08-.619-1.195z"
      }
    }), h("path", {
      attrs: {
        d: "M12.811 15.979h.837v-1.083l-.837-.443v1.525z"
      }
    }), h("path", {
      attrs: {
        d: "M13.04 12.544l-.816-2.32c-.133-.533-.384-.944-.971-.923s-1.141.064-1.707.091l-3.2.144-5.195 1.061c-.432.091-1.099.448-.693.987.203.272.8.187 1.109.187h9.632l.859 1.659 2.517 1.328c.624.24 1.28-.267.72-.885z"
      }
    })]);
  }
};

var Maximize2Icon = {
  name: 'Maximize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("polyline", {
      attrs: {
        points: "9 21 3 21 3 15"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "3",
        x2: "14",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MaximizeIcon = {
  name: 'MaximizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      }
    })]);
  }
};

var MealIcon = {
  name: 'MealIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-meal"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.571 3.968v-.496h.592V2.405H6.838v1.067h.592v.496C3.604 4.271.614 7.45.614 11.328h14.773a7.382 7.382 0 0 0-6.79-7.358z"
      }
    }), h("path", {
      attrs: {
        d: "M0 12.453h16v1.136H0v-1.136z"
      }
    })]);
  }
};

var Media2Icon = {
  name: 'Media2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-media-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.507 11.483a9.843 9.843 0 0 1-.449-1.208l.449-.002v-.848a9.022 9.022 0 0 1-.699-.133 12.111 12.111 0 0 1-.266-2.199l9.418-.02v-.422a6.49 6.49 0 1 0-8.5 6.174zM2.912 9.067a9.46 9.46 0 0 1-1.894-.787C.955 7.946.875 7.528.844 7.096l1.866-.018c.02.718.093 1.404.215 2.072zM.853 6.24c.028-.45.104-.87.224-1.272a11.76 11.76 0 0 1 1.769-.685c-.043.567-.116 1.251-.136 1.948zm2.667 0c.027-.801.125-1.564.287-2.302.649-.072 1.422-.176 2.214-.204l.022 2.506zm3.333-5.221c.455.031.878.11 1.283.235.25.524.508 1.147.7 1.798-.572-.043-1.261-.118-1.964-.138zm-.81 1.888c-.722.021-1.411.095-2.082.221.295-.724.552-1.337.865-1.916.342-.067.771-.152 1.213-.186zm.832.826c.805.026 1.571.126 2.311.293.064.64.16 1.403.184 2.184l-2.496.02zm5.253 2.496h-1.92a13.755 13.755 0 0 0-.215-2.046c.742.296 1.375.569 1.966.906.061.319.137.719.168 1.131zm-.715-2.352c-.437-.189-.97-.371-1.518-.515-.245-.65-.427-1.183-.645-1.697.924.595 1.647 1.318 2.148 2.185zM3.616 1.792c-.174.415-.346.927-.483 1.452-.619.243-1.123.418-1.61.625.572-.879 1.253-1.57 2.067-2.063zM1.6 9.472c.414.185.921.367 1.443.513.238.629.41 1.141.613 1.636-.875-.592-1.561-1.29-2.041-2.122z"
      }
    }), h("path", {
      attrs: {
        d: "M15.312 7.899H6.021a.688.688 0 0 0-.688.688v6.555c0 .38.308.688.688.688h9.291c.38 0 .688-.308.688-.688V8.588a.688.688 0 0 0-.688-.688zm-1.829 6.933H6.288V8.917h7.195zm1.274-2.448a.624.624 0 1 1 .624-.652v.007a.624.624 0 0 1-.624.624h-.006zm0-2.053a.624.624 0 1 1 .624-.624.624.624 0 0 1-.624.608h-.006z"
      }
    })]);
  }
};

var MediaIcon = {
  name: 'MediaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-media"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.069 6.501c-1.067 0-1.659 1.067-1.659 2.133 0 .56.24.917.811.917.928 0 1.568-1.179 1.568-2.048 0-.533-.256-1.003-.72-1.003z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm1.6 9.477c.64 0 1.408-1.029 1.408-2.245 0-1.797-1.387-2.816-2.997-2.816h-.014a3.365 3.365 0 0 0-3.362 3.511 3.37 3.37 0 0 0 3.369 3.477h.058a3.298 3.298 0 0 0 2.66-1.152l.91-.005a4.19 4.19 0 0 1-3.534 1.942h-.079a4.267 4.267 0 0 1-.02-8.534c2.134 0 3.905 1.467 3.905 3.483s-1.6 3.227-2.667 3.227h-.022a.7.7 0 0 1-.699-.699l.001-.034-.048.002a2.08 2.08 0 0 1-1.411.73c-.984.001-1.576-.799-1.576-1.797 0-1.499 1.008-3.045 2.565-3.045l.057-.001c.549 0 1.014.363 1.168.862l.002.009.181-.651h.837l-.96 3.173c-.03.085-.051.182-.058.284-.011.201.09.281.325.281z"
      }
    })]);
  }
};

var MehIcon = {
  name: 'MehIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-meh"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "15",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var MenuIcon = {
  name: 'MenuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-menu"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    })]);
  }
};

var MessageCircleIcon = {
  name: 'MessageCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      }
    })]);
  }
};

var MessageSquareIcon = {
  name: 'MessageSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-square"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var MicOffIcon = {
  name: 'MicOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
      }
    }), h("path", {
      attrs: {
        d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var MicIcon = {
  name: 'MicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var MicrowaveIcon = {
  name: 'MicrowaveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-microwave"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.2 1.8H.8c-.2 0-.35.05-.5.2-.2.15-.35.35-.35.65V14.2H16V2.65c.05-.45-.35-.85-.8-.85zm-1.35 3.75c.5 0 .95.4.95.95s-.4.95-.95.95a.95.95 0 1 1 0-1.9zm0 3c.5 0 .95.4.95.95s-.4.95-.95.95c-.5 0-.95-.4-.95-.95s.4-.95.95-.95zm-2.1 3.15H2V4.8c0-.4.3-.5.45-.5h8.8c.1 0 .5.05.5.55v6.85zm3.55 1.15h-2.8v-1.1h2.8v1.1z"
      }
    })]);
  }
};

var MinibarIcon = {
  name: 'MinibarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minibar"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M0 0v16h16V0H0zm15.25 15.05H.9V1.35h14.35v13.7z"
      }
    }), h("path", {
      attrs: {
        d: "M3.9 9.25c-.1-.05-.1-.15-.1-.2V8.2c0-.1.05-.15.05-.15.05-.05.1-.1.1-.2v-.6c0-.1-.05-.2-.15-.2h-.75c-.1 0-.15.1-.15.2v.6c0 .1.05.15.1.2s.05.05.05.1V9c0 .05 0 .15-.1.2-.4.2-.7.7-.7 1.25v4.5c0 .3.25.3.25.3h1.9c.15 0 .2-.2.2-.25v-4.5c0-.55-.3-1.05-.7-1.25z"
      }
    }), h("path", {
      attrs: {
        d: "M1.65 4.9h12.8v.7H1.65v-.7z"
      }
    }), h("path", {
      attrs: {
        d: "M5.6 3.95a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.85 3.95a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M10.1 3.95a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M12.35 3.95a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.25 9.25s-.05 0 0 0c-.1-.05-.1-.15-.1-.2V8.2c0-.1.05-.15.05-.15.05-.05.1-.1.1-.2v-.6c0-.1-.05-.2-.15-.2h-.7c-.1 0-.15.1-.15.2v.6c0 .1.05.15.1.2s.05.05.05.1V9c0 .05 0 .15-.1.2-.4.2-.7.7-.7 1.25v4.5c0 .3.25.3.25.3h1.9c.15 0 .2-.2.2-.25v-4.5c-.05-.55-.35-1.05-.75-1.25z"
      }
    }), h("path", {
      attrs: {
        d: "M10.5 9.25c-.1-.05-.1-.15-.1-.2V8.2c0-.1.05-.15.05-.15.05-.05.1-.1.1-.2v-.6c0-.1-.05-.2-.15-.2h-.7c-.1 0-.15.1-.15.2v.6c0 .1.05.15.1.2s.05.05.05.1V9c0 .05 0 .15-.1.2-.4.2-.7.7-.7 1.25v4.5c0 .3.25.3.25.3H11c.15 0 .2-.2.2-.25v-4.5c0-.55-.3-1.05-.7-1.25z"
      }
    }), h("path", {
      attrs: {
        d: "M13.75 9.25c-.1-.05-.1-.15-.1-.2V8.2c0-.1.05-.15.05-.15.05-.05.1-.1.1-.2v-.6c0-.1-.05-.2-.15-.2h-.7c-.1 0-.15.1-.15.2v.6c0 .1.05.15.1.2s.05.05.05.1V9c0 .05 0 .15-.1.2-.4.2-.7.7-.7 1.25v4.5c0 .3.25.3.25.3h1.9c.15 0 .2-.2.2-.25v-4.5c-.05-.55-.35-1.05-.75-1.25z"
      }
    })]);
  }
};

var Minimize2Icon = {
  name: 'Minimize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 14 10 14 10 20"
      }
    }), h("polyline", {
      attrs: {
        points: "20 10 14 10 14 4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "10",
        x2: "21",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MinimizeIcon = {
  name: 'MinimizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
      }
    })]);
  }
};

var Minus2Icon = {
  name: 'Minus2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M10.821 7.2H5.178a.8.8 0 1 0 0 1.6h5.643a.8.8 0 1 0 0-1.6z"
      }
    })]);
  }
};

var Minus3Icon = {
  name: 'Minus3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.189 9.6H2.81a1.6 1.6 0 1 1 0-3.2h10.379a1.6 1.6 0 1 1 0 3.2z"
      }
    })]);
  }
};

var MinusCircleIcon = {
  name: 'MinusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusSquareIcon = {
  name: 'MinusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusIcon = {
  name: 'MinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var MoneyExchange2Icon = {
  name: 'MoneyExchange2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-money-exchange-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.315 3.291v-.005A2.955 2.955 0 1 0 3.36 6.241c1.63 0 2.952-1.32 2.955-2.949zM2.549 5.264v-1.76l-.416.16V3.2l.443-.16v-.4l-.443.16v-.464l.443-.165v-.853h.747v.576l1.067-.395v.469l-1.067.389v.4l1.067-.395v.469l-1.093.368v1.344h.002a.618.618 0 0 0 .342-.103.96.96 0 0 0 .273-.277c.082-.126.146-.268.187-.42.043-.16.067-.332.067-.51v-.036l.72.002v.019c0 .277-.043.543-.122.794-.073.233-.198.45-.359.634-.169.185-.38.334-.616.431a2.313 2.313 0 0 1-.862.165l-.059-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M12.64 9.76a2.955 2.955 0 1 0 0 5.91 2.955 2.955 0 0 0 0-5.91zm.533 2.171l-.112.533h-1.067v.539h1.003l-.112.533h-.8c.03.074.064.137.104.196.12.208.346.348.604.348h.008a.633.633 0 0 0 .53-.286c.086-.135.149-.291.181-.458l.695-.008a1.924 1.924 0 0 1-.466 1.069 1.233 1.233 0 0 1-.919.409l-.041-.001a1.346 1.346 0 0 1-1.132-.529 1.941 1.941 0 0 1-.32-.683l-.861-.013.112-.533h.667v-.539h-.779l.112-.533h.741c.068-.331.212-.621.413-.862a1.292 1.292 0 0 1 1.067-.488 1.333 1.333 0 0 1 1.232.655c.136.219.222.475.238.749l-.752.004a1.185 1.185 0 0 0-.179-.436.656.656 0 0 0-.525-.262h-.017.001a.678.678 0 0 0-.601.364c-.04.068-.074.142-.101.219z"
      }
    }), h("path", {
      attrs: {
        d: "M12.005 5.451v1.424H11.2l1.445 1.899 1.445-1.899h-.757V5.451a2.832 2.832 0 0 0-2.826-2.827H7.381v1.333h3.125c.826 0 1.496.668 1.499 1.493z"
      }
    }), h("path", {
      attrs: {
        d: "M3.936 10.549V9.125h.779L3.27 7.226 1.819 9.125h.784v1.424a2.832 2.832 0 0 0 2.832 2.832h3.099v-1.333H5.43a1.499 1.499 0 0 1-1.493-1.499z"
      }
    })]);
  }
};

var MoneyExchange3Icon = {
  name: 'MoneyExchange3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-money-exchange-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.64 9.76a2.955 2.955 0 1 0 0 5.91 2.955 2.955 0 0 0 0-5.91zm.533 2.171l-.112.533h-1.067v.539h1.003l-.112.533h-.8c.03.074.064.137.104.196.12.208.346.348.604.348h.008a.633.633 0 0 0 .53-.286c.086-.135.149-.291.181-.458l.695-.008a1.924 1.924 0 0 1-.466 1.069 1.238 1.238 0 0 1-.922.409l-.038-.001a1.346 1.346 0 0 1-1.132-.529 1.941 1.941 0 0 1-.32-.683l-.861-.013.112-.533h.667v-.539h-.779l.112-.533h.741c.068-.331.212-.621.413-.862a1.292 1.292 0 0 1 1.067-.488 1.333 1.333 0 0 1 1.232.655c.136.219.222.475.238.749l-.752.004a1.185 1.185 0 0 0-.179-.436.656.656 0 0 0-.525-.262h-.017.001a.678.678 0 0 0-.601.364c-.04.068-.074.142-.101.219z"
      }
    }), h("path", {
      attrs: {
        d: "M12.005 5.451v1.424H11.2l1.445 1.899 1.445-1.899h-.757V5.451a2.832 2.832 0 0 0-2.826-2.827H7.381v1.333h3.125c.826 0 1.496.668 1.499 1.493z"
      }
    }), h("path", {
      attrs: {
        d: "M3.936 10.549V9.125h.779L3.27 7.226 1.819 9.125h.784v1.424a2.832 2.832 0 0 0 2.832 2.832h3.099v-1.333H5.43a1.499 1.499 0 0 1-1.493-1.499z"
      }
    }), h("path", {
      attrs: {
        d: "M6.315 3.291v-.005A2.955 2.955 0 1 0 3.36 6.241c1.63 0 2.952-1.32 2.955-2.949zM2.437 4.987a1.167 1.167 0 0 1-.452-1.072l.73.006c.009.168.047.324.11.467a.538.538 0 0 0 .411.226l.001-1.152-.219-.064a1.412 1.412 0 0 1-.73-.42 1.018 1.018 0 0 1-.215-.627v-.026a1.193 1.193 0 0 1 .061-.466 1.07 1.07 0 0 1 .667-.608c.131-.038.275-.063.424-.071L3.23.817h.261v.368c.257.01.494.09.693.222.281.191.466.515.466.882l-.001.057-.709-.003a.982.982 0 0 0-.082-.358.417.417 0 0 0-.361-.207h-.005v1.035c.329.097.615.23.878.397a.96.96 0 0 1 .35.744l-.001.05a1.067 1.067 0 0 1-.496.987c-.212.129-.46.21-.725.226l-.005.534h-.261v-.533a1.854 1.854 0 0 1-.804-.234z"
      }
    }), h("path", {
      attrs: {
        d: "M3.232 1.781H3.21a.472.472 0 0 0-.325.129.457.457 0 0 0-.112.332v.017c0 .14.067.265.17.344a.973.973 0 0 0 .288.133z"
      }
    }), h("path", {
      attrs: {
        d: "M3.973 4.085v-.004a.46.46 0 0 0-.159-.348 1.131 1.131 0 0 0-.312-.158l-.008 1.064a.67.67 0 0 0 .312-.098.504.504 0 0 0 .168-.46z"
      }
    })]);
  }
};

var MoneyExchangeIcon = {
  name: 'MoneyExchangeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-money-exchange"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3.285 3.285a6.639 6.639 0 0 1 4.709-1.95c1.823 0 3.475.732 4.678 1.919l-.667.671 2.587.341-.352-2.571-.619.619A8 8 0 0 0 0 7.999h1.333v-.021c0-1.834.746-3.494 1.952-4.693z"
      }
    }), h("path", {
      attrs: {
        d: "M14.667 8v.009a6.66 6.66 0 0 1-11.36 4.721l.582-.581-2.581-.352.347 2.603.709-.709a8 8 0 0 0 13.637-5.676V8z"
      }
    }), h("path", {
      attrs: {
        d: "M3.995 8A4.005 4.005 0 1 0 8 3.979a4.005 4.005 0 0 0-4.005 4.005v.017zm4.266-2.88v.448c.258.021.492.104.694.233a1.243 1.243 0 0 1 .527 1.098l-.805-.004a1.134 1.134 0 0 0-.099-.418.458.458 0 0 0-.309-.206l-.003 1.194c.339.107.634.248.905.425.248.198.414.516.414.872l-.001.055a1.25 1.25 0 0 1-.581 1.151 1.793 1.793 0 0 1-.728.242l-.008.657h-.533v-.645a2.008 2.008 0 0 1-.81-.261 1.362 1.362 0 0 1-.523-1.238l.853.006c.01.195.054.377.127.543a.605.605 0 0 0 .355.224l.004-1.343-.133-.043a1.635 1.635 0 0 1-.852-.49 1.19 1.19 0 0 1-.247-.727l.001-.039v-.017c0-.185.035-.362.099-.524.135-.334.412-.596.756-.713a1.96 1.96 0 0 1 .369-.066l.007-.432h.533z"
      }
    }), h("path", {
      attrs: {
        d: "M7.307 6.757v.022c0 .162.077.307.197.398a.916.916 0 0 0 .213.111l.007-1.065a.497.497 0 0 0-.255.175.539.539 0 0 0-.161.357z"
      }
    }), h("path", {
      attrs: {
        d: "M8.709 8.912l.001-.026a.53.53 0 0 0-.187-.405 1.132 1.132 0 0 0-.249-.137l-.008 1.16a.678.678 0 0 0 .243-.092.588.588 0 0 0 .2-.502z"
      }
    })]);
  }
};

var MonitorIcon = {
  name: 'MonitorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-monitor"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }
    })]);
  }
};

var MoonIcon = {
  name: 'MoonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-moon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      }
    })]);
  }
};

var MoreHorizontalIcon = {
  name: 'MoreHorizontalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-horizontal"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "19",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "12",
        r: "1"
      }
    })]);
  }
};

var MoreVerticalIcon = {
  name: 'MoreVerticalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-vertical"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var Mosque2Icon = {
  name: 'Mosque2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mosque-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.267 5.525a6.56 6.56 0 0 0-.95-3.08c0-.002-.032-.023-.069-.023s-.069.021-.085.051a6.503 6.503 0 0 0-.928 3.035l2.026.016z"
      }
    }), h("path", {
      attrs: {
        d: "M3.76 5.525a6.558 6.558 0 0 0-.944-3.08c0-.002-.032-.023-.069-.023s-.069.021-.085.051a6.503 6.503 0 0 0-.928 3.035l2.026.016z"
      }
    }), h("path", {
      attrs: {
        d: "M14.277 6.064h-2.08a.48.48 0 0 0 0 .96h.037v3.792h-.624a3.447 3.447 0 0 0-2.413-3.193 11.188 11.188 0 0 1-1.271-.496c-.23.175-.619.33-1.016.465-1.477.46-2.478 1.72-2.521 3.22l-.629.005V7.03h.037a.48.48 0 0 0 0-.96H1.722a.48.48 0 0 0 0 .96v8.971h4.8v-1.344c0-.06.018-.115.049-.161.3-.502.766-.879 1.321-1.061a.295.295 0 0 1 .173-.004c.57.186 1.035.563 1.331 1.055a.308.308 0 0 1 .054.171v1.344h4.8V7.03a.48.48 0 0 0 0-.96z"
      }
    })]);
  }
};

var MosqueIcon = {
  name: 'MosqueIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mosque"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.533 7.76v1.392h2.363V7.76s1.163-.827-1.179-2.363C-.624 6.933.533 7.76.533 7.76z"
      }
    }), h("path", {
      attrs: {
        d: "M13.099 7.76v1.392h2.368V7.76s1.163-.837-1.184-2.363c-2.341 1.536-1.184 2.363-1.184 2.363z"
      }
    }), h("path", {
      attrs: {
        d: "M15.776 9.525H12.8l.16.693h.16v1.104h-2.4V8.143c.459-.427 1.813-2.187-2.581-5.152v-.587a.304.304 0 1 0-.268-.001l.002.587c-4.496 3.035-2.971 4.8-2.549 5.184v3.147H2.897v-1.104h.16l.16-.693H.225l.16.693h.149v5.781h2.784v-1.277c0-.047.018-.089.048-.121l.48-.501a.176.176 0 0 1 .256 0l.48.501c.03.031.048.074.048.121v1.277h2.373v-2.133a.96.96 0 0 1 1.92 0v2.133h2.443v-1.277c0-.047.018-.089.048-.121l.48-.501a.176.176 0 0 1 .256 0l.48.501c.03.031.048.074.048.121v1.277h2.789v-5.781h.16z"
      }
    })]);
  }
};

var MousePointerIcon = {
  name: 'MousePointerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mouse-pointer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
      }
    }), h("path", {
      attrs: {
        d: "M13 13l6 6"
      }
    })]);
  }
};

var MoveIcon = {
  name: 'MoveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-move"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "5 9 2 12 5 15"
      }
    }), h("polyline", {
      attrs: {
        points: "9 5 12 2 15 5"
      }
    }), h("polyline", {
      attrs: {
        points: "15 19 12 22 9 19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 9 22 12 19 15"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22"
      }
    })]);
  }
};

var MusicSystemIcon = {
  name: 'MusicSystemIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-music-system"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.05 12.25c1.35 0 2.45-1.1 2.45-2.45S6.4 7.35 5.05 7.35 2.6 8.5 2.6 9.85s1.1 2.4 2.45 2.4zm0-4.25c1 0 1.85.8 1.85 1.85 0 1-.8 1.85-1.85 1.85-1 0-1.85-.8-1.85-1.85S4.05 8 5.05 8z"
      }
    }), h("path", {
      attrs: {
        d: "M1.4 2.2v11.6h7.3V2.2H1.4zm6.7 11H2V2.8h6.1v10.4z"
      }
    }), h("path", {
      attrs: {
        d: "M5.05 6.5c.85 0 1.5-.7 1.5-1.5 0-.85-.7-1.5-1.5-1.5-.85 0-1.5.7-1.5 1.5-.05.8.65 1.5 1.5 1.5zm0-2.45c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
      }
    }), h("path", {
      attrs: {
        d: "M5.05 11.05c.7 0 1.2-.55 1.2-1.2 0-.7-.55-1.2-1.2-1.2s-1.2.55-1.2 1.2c-.05.65.5 1.2 1.2 1.2zm0-1.85c.35 0 .6.25.6.6s-.25.6-.6.6-.6-.25-.6-.6c0-.3.25-.6.6-.6z"
      }
    }), h("path", {
      attrs: {
        d: "M11.75 3.1l-.4.6c1.85 1 3.15 2.9 3.25 5.1l.7-.3c-.2-2.3-1.6-4.3-3.55-5.4z"
      }
    }), h("path", {
      attrs: {
        d: "M10.9 4.35l-.4.6c1.6.8 2.65 2.4 2.65 4.3v.2l.75-.3a5.53 5.53 0 0 0-3-4.8z"
      }
    }), h("path", {
      attrs: {
        d: "M10.1 5.6l-.35.5c1.25.65 2.1 1.9 2.1 3.4v.2l.6-.25c-.05-1.7-1-3.15-2.35-3.85z"
      }
    }), h("path", {
      attrs: {
        d: "M9.5 6.9l-.25.35c.85.45 1.45 1.3 1.45 2.35v.1l.4-.15c0-1.15-.65-2.15-1.6-2.65z"
      }
    })]);
  }
};

var MusicIcon = {
  name: 'MusicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-music"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 18V5l12-2v13"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "16",
        r: "3"
      }
    })]);
  }
};

var Navigation2Icon = {
  name: 'Navigation2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 19 21 12 17 5 21 12 2"
      }
    })]);
  }
};

var NavigationIcon = {
  name: 'NavigationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "3 11 22 2 13 21 11 13 3 11"
      }
    })]);
  }
};

var NightBusIcon = {
  name: 'NightBusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-night-bus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.8 7.584V2.133a1.509 1.509 0 0 0-1.174-1.47A22.914 22.914 0 0 0 6.547.187C6.469.185 6.356.185 6.243.185c-1.666 0-3.292.174-4.86.504C.854.816.353 1.417.352 2.134v11.2c0 .339.275.613.613.613h.853v.56a.737.737 0 0 0 1.472 0v-.571h4.619a4.224 4.224 0 1 0 4.92-6.343zM3.029 1.456c0-.18.146-.325.325-.325h6.4c.18 0 .325.146.325.325v.251c0 .18-.146.325-.325.325h-6.4a.325.325 0 0 1-.325-.325zm-.474 10.971a.853.853 0 1 1 0-1.706.853.853 0 0 1 0 1.706zm1.925.848v-1.093h2.757c.059.408.167.776.32 1.12zM2.315 8.741a.613.613 0 0 1-.608-.613V3.467c0-.339.275-.613.613-.613h8.491c.339 0 .613.275.613.613V7.36a4.204 4.204 0 0 0-3.117 1.383zm9.109 6.272a3.424 3.424 0 1 1 0-6.848 3.424 3.424 0 0 1 0 6.848z"
      }
    }), h("path", {
      attrs: {
        d: "M12.715 10.485l.256.352.123-.416.416-.133-.357-.251.005-.437-.352.267-.411-.139.144.411-.261.352.437-.005z"
      }
    }), h("path", {
      attrs: {
        d: "M14.043 11.419l-.245-.011-.128-.213-.091.229-.24.053.192.16-.021.245.208-.133.224.096-.059-.24.16-.187z"
      }
    }), h("path", {
      attrs: {
        d: "M10.901 11.899a1.659 1.659 0 0 1 1.055-2.381 1.775 1.775 0 0 0-.471-.058 2.133 2.133 0 1 0 1.965 2.965 1.69 1.69 0 0 1-1.074.385 1.658 1.658 0 0 1-1.487-.923z"
      }
    })]);
  }
};

var OctagonIcon = {
  name: 'OctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    })]);
  }
};

var OvenIcon = {
  name: 'OvenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-oven"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.2.15H.8C.4.15.15.4.15.8v14.4c0 .4.25.65.65.65h14.4c.4 0 .65-.25.65-.65V.8c0-.4-.25-.65-.65-.65zm-.65 14.4H1.45V4.7h13.1v9.85zm0-10.5H1.45v-2.6h13.1v2.6z"
      }
    }), h("path", {
      attrs: {
        d: "M4.7 2.75a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.35 2.75a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M9.95 2.75a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M12.6 2.75a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0z"
      }
    }), h("path", {
      attrs: {
        d: "M13.9 5.4H2.1v8.5h11.8V5.4zm-.65 7.85H2.75v-7.2h10.5v7.2z"
      }
    }), h("path", {
      attrs: {
        d: "M6.05 6.7H10v.65H6.05V6.7z"
      }
    })]);
  }
};

var PackageTourIcon = {
  name: 'PackageTourIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-package-tour"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.429 1.781h-2.053l-.331.603h2.709l-.325-.603z"
      }
    }), h("path", {
      attrs: {
        d: "M17.349 4.117l-.469-.251V2.709l-.987-1.568h-.72l-.139-.907a.305.305 0 0 0-.296-.235h-.67a.304.304 0 0 0-.298.254l-.139.908h-.72l-.987 1.547v1.157l-.469.251a.533.533 0 0 0-.254.644l.884 2.386h2.176V2.607l-1.968 1.067v-.853l.827-1.307h2.56l.816 1.301v.848l-1.968-1.067v4.539h2.176l.896-2.379a.533.533 0 0 0-.248-.638z"
      }
    }), h("path", {
      attrs: {
        d: "M.677 6.736v.272a.353.353 0 0 0 .704 0v-.272h3.12v.272a.353.353 0 0 0 .704 0v-.272h.405a.293.293 0 0 0 .293-.293V1.11a.719.719 0 0 0-.566-.703A10.92 10.92 0 0 0 3.098.181l-.169.001-.162-.001c-.791 0-1.563.082-2.308.238-.237.072-.461.351-.461.683v5.342c0 .162.131.293.293.293zM3.931 6.4H1.947v-.533h1.984zm.917-.405a.405.405 0 1 1 .405-.405l.001.021a.405.405 0 0 1-.4.405zM1.253.784c0-.085.069-.155.155-.155h3.061c.085 0 .155.069.155.155v.128a.155.155 0 0 1-.155.155H1.408a.155.155 0 0 1-.155-.155zm-.634.96c0-.162.131-.293.293-.293h4.053c.162 0 .293.131.293.293v2.229a.293.293 0 0 1-.293.293H.912a.293.293 0 0 1-.293-.293zm.405 3.461a.405.405 0 1 1-.405.405c0-.224.181-.405.405-.405h.006z"
      }
    }), h("path", {
      attrs: {
        d: "M16.901 12.72l-5.701.763a1.171 1.171 0 0 1-.208.534 7.641 7.641 0 0 0-.203-1.215 4.173 4.173 0 0 0-.748-1.558l.706-.31a.139.139 0 1 0-.081-.266l-.954.234a1.585 1.585 0 0 0-.777-.309l-.109-1.099a.123.123 0 1 0-.246 0l-.112 1.099a1.607 1.607 0 0 0-.788.312l-.945-.238a.125.125 0 0 0-.087.234l.7.32a4.183 4.183 0 0 0-.746 1.571 7.383 7.383 0 0 0-.201 1.19l-.002.028a1.153 1.153 0 0 1-.207-.528l-5.659-.763a.24.24 0 0 0-.271.08.172.172 0 0 0 .031.23c.321.301.71.533 1.142.672l1.691.443-.048.043a.897.897 0 0 0-.298.566l-.002.058.002.056v-.002c0 .46.345.84.79.895h.112c.46 0 .84-.345.895-.79l.002-.058-.002-.056a.871.871 0 0 0-.077-.36l2.402.635a2.3 2.3 0 0 0 3.623.005l2.404-.634a.88.88 0 0 0-.075.357l-.002.053.002.056a.902.902 0 0 0 .895.792h.118a.903.903 0 0 0 .795-.895v-.001l.002-.053-.002-.056a.897.897 0 0 0-.298-.567l-.049-.043 1.669-.437a3.026 3.026 0 0 0 1.164-.679.167.167 0 0 0 .061-.13.168.168 0 0 0-.031-.098.239.239 0 0 0-.278-.079zm-13.29 2.592zm.458-.379a.406.406 0 0 1-.4.357h-.053a.406.406 0 0 1-.357-.4l-.001-.024.001-.025a.406.406 0 0 1 .4-.356h.075a.406.406 0 0 1 .357.4.393.393 0 0 1-.022.05zm4.464-2.362H7.84a.421.421 0 0 1 0-.842h.693zm1.035 0H8.88v-.837h.688a.421.421 0 0 1 0 .842zm4.48 2.565a.405.405 0 0 1-.254.133h-.061a.406.406 0 0 1-.399-.334l-.001-.026.001-.025a.405.405 0 0 1 .355-.399h.05a.406.406 0 0 1 .4.355l.001.026-.001.025a.4.4 0 0 1-.091.245z"
      }
    }), h("path", {
      attrs: {
        d: "M9.835 3.131l-.933-1.067a.383.383 0 1 0-.581.502l.432.501H7.686a.384.384 0 0 0 0 .768h1.067l-.432.501a.384.384 0 1 0 .58.467l.892-1.032a.491.491 0 0 0 .041-.642z"
      }
    }), h("path", {
      attrs: {
        d: "M14.933 9.925l-.651.117.533-.923a.385.385 0 0 0-.661-.396l-.534.924-.208-.629a.385.385 0 1 0-.73.243l.447 1.347s.128.389.485.325l1.44-.267a.385.385 0 0 0-.122-.742z"
      }
    }), h("path", {
      attrs: {
        d: "M4.427 8.763l-1.408-.155a.458.458 0 0 0-.533.339l-.001.003-.352 1.387a.38.38 0 0 0 .269.468l.099.001h.002a.383.383 0 0 0 .371-.285l.166-.643.624.896a.385.385 0 1 0 .633-.438l-.612-.879.656.075h.043l.021.001a.385.385 0 0 0 .023-.769z"
      }
    })]);
  }
};

var PackageIcon = {
  name: 'PackageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-package"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16.5",
        y1: "9.4",
        x2: "7.5",
        y2: "4.21"
      }
    }), h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PaperclipIcon = {
  name: 'PaperclipIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-paperclip"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    })]);
  }
};

var ParaglidingIcon = {
  name: 'ParaglidingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-paragliding"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.973 2.32a.266.266 0 0 1-.175-.132C13.6 1.819 12.8.645 10.859.987a.26.26 0 0 1-.229-.064A3.711 3.711 0 0 0 7.989.071a3.718 3.718 0 0 0-2.624.863.255.255 0 0 1-.225.059C3.2.647 2.4 1.82 2.203 2.188a.266.266 0 0 1-.174.133C-.639 2.924-.058 5.441.337 6.588a.268.268 0 0 0 .469.06 2.315 2.315 0 0 1 2.101-.939h.002a.272.272 0 0 0 .212-.101 2.398 2.398 0 0 1 2.764-.8.258.258 0 0 0 .065.007.266.266 0 0 0 .17-.061 3.06 3.06 0 0 1 1.878-.698 3.07 3.07 0 0 1 1.913.708.26.26 0 0 0 .226.038 2.398 2.398 0 0 1 2.725.794.273.273 0 0 0 .216.107h.013a2.311 2.311 0 0 1 2.08.917.27.27 0 0 0 .224.121.265.265 0 0 0 .249-.172c.417-1.122.971-3.644-1.669-4.247z"
      }
    }), h("path", {
      attrs: {
        d: "M14.763 7.067a.242.242 0 0 0-.325.095l-3.153 5.745H9.973c.17.187.275.436.277.709v.363h.853c.085 0 .16-.044.202-.111l3.553-6.47a.24.24 0 0 0-.095-.33z"
      }
    }), h("path", {
      attrs: {
        d: "M1.563 7.157a.24.24 0 0 0-.455.107c0 .045.012.087.034.123l3.551 6.479a.243.243 0 0 0 .208.123h.795v-.363a1.06 1.06 0 0 1 .278-.71l-1.259.001z"
      }
    }), h("path", {
      attrs: {
        d: "M8.992 8.064a1.035 1.035 0 1 1-2.07 0 1.035 1.035 0 0 1 2.07 0z"
      }
    }), h("path", {
      attrs: {
        d: "M9.227 12.56v-1.963l1.387 1.728a.155.155 0 0 0 .256.001l.374-.593a.155.155 0 0 0-.001-.176c-.218-.298-.96-1.306-1.21-1.669a1.066 1.066 0 0 0-.798-.421H6.769a1.067 1.067 0 0 0-.798.419c-.253.36-.994 1.373-1.213 1.672a.155.155 0 0 0 .001.176l.378.597a.155.155 0 0 0 .256.001l1.387-1.729v1.957c.589 0 1.067.478 1.067 1.067v.363h.299v-.363c0-.589.478-1.067 1.067-1.067z"
      }
    }), h("path", {
      attrs: {
        d: "M6.757 13.035a.587.587 0 0 0-.587.587v1.728a.587.587 0 1 0 1.168-.002v-1.726a.587.587 0 0 0-.581-.587z"
      }
    }), h("path", {
      attrs: {
        d: "M9.184 13.035a.587.587 0 0 0-.587.587v1.728a.587.587 0 1 0 1.168-.002v-1.726a.587.587 0 0 0-.581-.587z"
      }
    })]);
  }
};

var ParkingFirstIcon = {
  name: 'ParkingFirstIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-parking-first"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.293 8.245V5.909l-1.147-1.483s-.624-2.224-.811-3.013S11.69.314 11.14.314H3.919c-.533 0-1.003.309-1.195 1.099s-.816 3.013-.816 3.013L.761 5.909v2.779H.494a.283.283 0 0 0-.283.283v1.163c0 .156.127.283.283.283h1.328v1.163c0 .321.26.581.581.581h.837a.58.58 0 0 0 .581-.581v-1.152h3.643a4.224 4.224 0 1 0 6.833-2.176zm-2.73 6.64a3.424 3.424 0 1 1 0-6.848 3.424 3.424 0 0 1 0 6.848zm-.736-7.584a4.18 4.18 0 0 0-1.725.708L4.267 8V6.752h6.56zm1.749-.677h.016a.734.734 0 0 1 .697.986 3.967 3.967 0 0 0-1.415-.356.72.72 0 0 1 .707-.63zM3.861 1.067H11.2l.981 3.349H2.88zM2.48 6.624a.741.741 0 1 1 0 1.483.741.741 0 0 1 0-1.483z"
      }
    }), h("path", {
      attrs: {
        d: "M13.403 10.384a1.152 1.152 0 0 0-.674-.717 1.698 1.698 0 0 0-.618-.116l-.049.001h-1.854v4.101h.901v-1.467h.949l.046.001c.219 0 .429-.041.621-.117.16-.066.306-.167.425-.294.109-.118.193-.258.244-.414a1.558 1.558 0 0 0-.001-.995zm-.864.816a.485.485 0 0 1-.174.185.683.683 0 0 1-.249.091 1.9 1.9 0 0 1-.309 0h-.697v-1.221h.699a1.731 1.731 0 0 1 .305 0 .684.684 0 0 1 .247.092.493.493 0 0 1 .172.182.784.784 0 0 1-.001.642z"
      }
    })]);
  }
};

var ParkingSecondIcon = {
  name: 'ParkingSecondIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-parking-second"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M10.997 4.992a2.467 2.467 0 0 0-.848-.591 3.392 3.392 0 0 0-1.24-.231l-.099.001H5.081v8.251h1.813v-2.96h1.904l.109.002c.44 0 .861-.083 1.248-.234a2.48 2.48 0 0 0 .861-.588 2.27 2.27 0 0 0 .492-.833 3.157 3.157 0 0 0-.002-1.996 2.3 2.3 0 0 0-.511-.821zM9.765 7.467a.986.986 0 0 1-.348.371 1.386 1.386 0 0 1-.531.183 3.797 3.797 0 0 1-.61.049H6.889V5.579h1.408c.213 0 .422.017.625.051.178.023.358.087.518.182a.978.978 0 0 1 .343.365c.087.175.137.375.137.586l-.001.056v.028c0 .227-.057.441-.158.627z"
      }
    })]);
  }
};

var PauseCircleIcon = {
  name: 'PauseCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "15",
        x2: "10",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "15",
        x2: "14",
        y2: "9"
      }
    })]);
  }
};

var PauseIcon = {
  name: 'PauseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "6",
        y: "4",
        width: "4",
        height: "16"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "4",
        width: "4",
        height: "16"
      }
    })]);
  }
};

var PenToolIcon = {
  name: 'PenToolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pen-tool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 19l7-7 3 3-7 7-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
      }
    }), h("path", {
      attrs: {
        d: "M2 2l7.586 7.586"
      }
    }), h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "2"
      }
    })]);
  }
};

var PercentIcon = {
  name: 'PercentIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-percent"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "5",
        y2: "19"
      }
    }), h("circle", {
      attrs: {
        cx: "6.5",
        cy: "6.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "17.5",
        cy: "17.5",
        r: "2.5"
      }
    })]);
  }
};

var Phone2Icon = {
  name: 'Phone2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.043 0H3.958a.901.901 0 0 0-.901.901v14.197c0 .498.404.901.901.901h8.085a.901.901 0 0 0 .901-.901V.901A.901.901 0 0 0 12.043 0zM8 15.152a1.013 1.013 0 1 1 0-2.026 1.013 1.013 0 0 1 0 2.026zm4.197-2.757H3.802V.758h8.395z"
      }
    })]);
  }
};

var Phone3Icon = {
  name: 'Phone3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.667 14.011l-1.824-2.896a.47.47 0 0 0-.652-.148l-.947.767c-.453.219-.875-.235-1.627-1.195L4.06 8.091c-.309-.635-.56-1.28-.123-1.6l1.067-.565a.47.47 0 0 0 .148-.658l.001.002-1.829-2.901a.47.47 0 0 0-.658-.148l-.948.751c-.56.491-1.936 2.763 1.067 7.632 3.109 5.056 5.925 4.944 6.629 4.592l1.099-.533a.475.475 0 0 0 .154-.648z"
      }
    }), h("path", {
      attrs: {
        d: "M8.203 6.155A1.656 1.656 0 0 1 9.381 8.01a.534.534 0 0 0 .446.593h.088c.268 0 .49-.198.528-.456a2.721 2.721 0 0 0-1.922-3.006.533.533 0 0 0-.316 1.018z"
      }
    }), h("path", {
      attrs: {
        d: "M13.915 3.733A7.372 7.372 0 0 0 9.818.669a.533.533 0 0 0-.349 1.009c2.652.777 4.554 3.185 4.554 6.036 0 .317-.023.628-.069.933a.533.533 0 0 0 .444.605h.088c.268 0 .49-.198.528-.456.051-.326.079-.698.079-1.077a7.298 7.298 0 0 0-1.195-4.015z"
      }
    }), h("path", {
      attrs: {
        d: "M9.131 2.907a.533.533 0 0 0-.297 1.022c1.676.49 2.878 2.011 2.878 3.811 0 .202-.015.401-.044.596a.534.534 0 0 0 .447.58h.088c.268 0 .49-.198.528-.456a5.031 5.031 0 0 0-3.565-5.546z"
      }
    })]);
  }
};

var Phone4Icon = {
  name: 'Phone4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.05 12.55c-.3-.45-.65-.8-.9-1.15-.65-.8-1.4-1.05-2.3-.4-.5.4-.9.35-1.35-.05-1.25-1-2.05-2.3-2.25-3.8 0-.25-.05-.45.05-.7 0-.35.3-.65.75-.75.4-.15.8-.3.95-.8.2-.65-.85-3.3-1.35-3.75C5.4 1 5.2.9 4.8.9 3.15.95 2.2 2 2.35 3.6c.1.85.3 1.7.55 2.5.95 3.6 2.95 6.65 6.05 9.05.2.25.45.3.5.4 1 .3 2.45-.3 3.05-1.1.5-.85-.1-1.35-.45-1.9z"
      }
    })]);
  }
};

var PhoneCallIcon = {
  name: 'PhoneCallIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-call"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneForwardedIcon = {
  name: 'PhoneForwardedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-forwarded"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "19 1 23 5 19 9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "5",
        x2: "23",
        y2: "5"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIncomingIcon = {
  name: 'PhoneIncomingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-incoming"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 2 16 8 22 8"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "16",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneMissedIcon = {
  name: 'PhoneMissedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-missed"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "17",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "1",
        x2: "23",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneOffIcon = {
  name: 'PhoneOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "1",
        y2: "23"
      }
    })]);
  }
};

var PhoneOutgoingIcon = {
  name: 'PhoneOutgoingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-outgoing"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 7 23 1 17 1"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "23",
        y2: "1"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIcon = {
  name: 'PhoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PieChartIcon = {
  name: 'PieChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pie-chart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.21 15.89A10 10 0 1 1 8 2.83"
      }
    }), h("path", {
      attrs: {
        d: "M22 12A10 10 0 0 0 12 2v10z"
      }
    })]);
  }
};

var PlasmaIcon = {
  name: 'PlasmaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plasma"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.15 1.95H-.05V13H16V1.95h-.85zM7.95 12.5c-.25 0-.4-.2-.4-.4s.2-.4.4-.4c.25 0 .4.2.4.4s-.15.4-.4.4zM.8 11.25v-8.5h14.3v8.5H.8z"
      }
    })]);
  }
};

var PlayCircleIcon = {
  name: 'PlayCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "10 8 16 12 10 16 10 8"
      }
    })]);
  }
};

var PlayIcon = {
  name: 'PlayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 3 19 12 5 21 5 3"
      }
    })]);
  }
};

var Plus2Icon = {
  name: 'Plus2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M10.821 7.2H8.8V5.179a.8.8 0 1 0-1.6 0V7.2H5.179a.8.8 0 1 0 0 1.6H7.2v2.021a.8.8 0 1 0 1.6 0V8.8h2.021a.8.8 0 1 0 0-1.6z"
      }
    })]);
  }
};

var Plus3Icon = {
  name: 'Plus3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.189 6.4H9.6V2.811a1.6 1.6 0 1 0-3.2 0V6.4H2.811a1.6 1.6 0 1 0 0 3.2H6.4v3.589a1.6 1.6 0 1 0 3.2 0V9.6h3.589a1.6 1.6 0 1 0 0-3.2z"
      }
    })]);
  }
};

var PlusCircleIcon = {
  name: 'PlusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusSquareIcon = {
  name: 'PlusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusIcon = {
  name: 'PlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var PocketIcon = {
  name: 'PocketIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pocket"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "8 10 12 14 16 10"
      }
    })]);
  }
};

var Power3Icon = {
  name: 'Power3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-power-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.9 5.4c-.05-.1-.15-.2-.3-.25l-4.15-.6L10.4.3c.05-.1.05-.25-.05-.35-.05-.1-.2-.15-.3-.15H4.2c-.2-.05-.35.1-.35.3l-.3 7.6c0 .2.1.35.3.35l2.9.4L2.9 15.5c-.1.2-.05.4.1.5.05.05.15.05.2.05.1 0 .2-.05.25-.1L12.8 5.8c.1-.1.15-.25.1-.4z"
      }
    })]);
  }
};

var PowerIcon = {
  name: 'PowerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-power"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18.36 6.64a9 9 0 1 1-12.73 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PrinterIcon = {
  name: 'PrinterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-printer"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 6 2 18 2 18 9"
      }
    }), h("path", {
      attrs: {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
      }
    }), h("rect", {
      attrs: {
        x: "6",
        y: "14",
        width: "12",
        height: "8"
      }
    })]);
  }
};

var Privacy2Icon = {
  name: 'Privacy2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-privacy-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.76 4.427a3.072 3.072 0 1 1-6.143.001 3.072 3.072 0 0 1 6.143-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M16.059 10.667v-.006a4.224 4.224 0 0 0-7.92-2.047c-.386-.024-.82-.049-1.26-.049l-.201.002a10.478 10.478 0 0 0-3.393.495c-.961.321-1.77 1.098-2.147 2.088-.414 1.281-.826 2.903-1.149 4.557l13.44.294c-.048-.235-.149-.736-.277-1.339a4.24 4.24 0 0 0 2.907-3.993zm-4.224 3.424a3.424 3.424 0 1 1 3.424-3.424 3.43 3.43 0 0 1-3.429 3.408z"
      }
    }), h("path", {
      attrs: {
        d: "M13.285 12.389a.267.267 0 0 0 .267-.267v-1.989a.267.267 0 0 0-.267-.267h-.379v-.267a1.01 1.01 0 1 0-2.022 0v.261h-.379a.267.267 0 0 0-.267.267v2.011c0 .147.119.267.267.267zm-1.392-3.285c.262 0 .475.213.475.475v.261h-.949v-.256c0-.262.213-.475.475-.475h.006zm0 2.667a.143.143 0 0 1-.144-.144V11.2a.38.38 0 1 1 .291-.001l-.002.438a.144.144 0 0 1-.138.16z"
      }
    })]);
  }
};

var PrivacyIcon = {
  name: 'PrivacyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-privacy"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.029 5.701h-1.381v-.949a3.65 3.65 0 1 0-7.302 0v.949H2.97a.971.971 0 0 0-.971.971v7.253c0 .536.435.971.971.971h10.059a.971.971 0 0 0 .971-.971V6.672a.971.971 0 0 0-.971-.971zm-4.496 4.966v1.6a.534.534 0 0 1-1.034.004l-.001-1.604a1.365 1.365 0 1 1 1.043-.004zm1.206-4.955H6.278v-.96a1.723 1.723 0 0 1 3.446 0z"
      }
    })]);
  }
};

var PrivateYachtCharterIcon = {
  name: 'PrivateYachtCharterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-private-yacht-charter"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.139 13.925h14.443a6.225 6.225 0 0 0 3.565-1.328l-16.931.01z"
      }
    }), h("path", {
      attrs: {
        d: "M1.733 11.968h17.2a14.718 14.718 0 0 0 2.175-2.33L3.679 9.6z"
      }
    }), h("path", {
      attrs: {
        d: "M5.168 8.112l-.635.827h8.533l-1.269-.976-1.749.469h-2.08V7.333c1.989 0 2.555-.352 2.555-.352l-.475-.363-3.2.235-.779-.757H4.901l.533.912c-.475.053-.891.101-1.035.123-.336.064-.757.96.768.981z"
      }
    }), h("path", {
      attrs: {
        d: "M23.712 2.891a.911.911 0 0 0-1.267-.264l-1.01.654v-.155c0-.589-.478-1.067-1.067-1.067h-4.523c-.589 0-1.067.478-1.067 1.067v4.539c0 .589.478 1.067 1.067 1.067h4.539c.589 0 1.067-.478 1.067-1.067V5.457l2.016-1.301a.912.912 0 0 0 .244-1.267zm-3.077.906l-1.819 1.179-1.003-1.067a.913.913 0 1 0-1.322 1.264l1.525 1.6a.91.91 0 0 0 1.187.158l1.453-.942V7.68a.251.251 0 0 1-.251.251h-4.56a.251.251 0 0 1-.251-.251V3.125c0-.138.112-.251.251-.251h4.539c.138 0 .251.112.251.251z"
      }
    }), h("path", {
      attrs: {
        d: "M10.971 6.528a.619.619 0 0 0 .662-.713v-.679h.677c1.04 0 1.851-.32 1.851-1.461s-.827-1.472-1.851-1.472h-1.227c-.533 0-.773.24-.773.811v2.811a.619.619 0 0 0 .664.704zm.661-3.296h.688c.331 0 .533.165.533.448v.001a.431.431 0 0 1-.432.432l-.028-.001h-.745z"
      }
    })]);
  }
};

var QuadBedIcon = {
  name: 'QuadBedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-quad-bed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.95 4.05H3.5c-.4 0-.75.4-.75.95v1.4c0 .05.05.15.15.15h4.7c.05 0 .05-.1.05-.15V5c-.05-.6-.35-.95-.7-.95z"
      }
    }), h("path", {
      attrs: {
        d: "M7.6 5.3c0-.05-.05-.15-.1-.15H2.8c-.05 0-.1.05-.1.15v1.1c0 .05.05.15.1.15h4.7c.05 0 .1-.05.1-.15V5.3z"
      }
    }), h("path", {
      attrs: {
        d: "M2.75 6.8h4.9v.4h-4.9v-.4z"
      }
    }), h("path", {
      attrs: {
        d: "M6.95 8h.3c.05 0 .05-.1.05-.2v-.4h-.4v.4c0 .1.05.2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M6.9 7.65c0 .05 0 .05 0 0l.45.05v-.4h-.4v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M6.9 1.4H3.3s-.05.05-.05.1v2.25h3.7V1.5c0-.05 0-.1-.05-.1zm-1 2.35H4.25c0-.4-.05-.75-.05-.75 0-.05.05-.15.15-.15 0 0 .4.1.8.1s.75-.05.75-.05.1.05.1.1c0 0-.1.35-.1.75z"
      }
    }), h("path", {
      attrs: {
        d: "M3.05 8h.3c.05 0 .05-.1.05-.2v-.4h-.35V8z"
      }
    }), h("path", {
      attrs: {
        d: "M3.05 7.65c0 .05 0 .05 0 0l.45.05v-.4h-.45v.35z"
      }
    }), h("path", {
      attrs: {
        d: "M12.1 4.05H8.65c-.4 0-.75.4-.75.95v1.4c0 .05.05.15.15.15h4.7c.05 0 .05-.1.05-.15V5c-.05-.6-.35-.95-.7-.95z"
      }
    }), h("path", {
      attrs: {
        d: "M12.75 5.3c0-.05-.05-.15-.1-.15H8c-.05 0-.1.05-.1.15v1.1c0 .05.05.15.1.15h4.7c.05 0 .1-.05.1-.15V5.3z"
      }
    }), h("path", {
      attrs: {
        d: "M7.9 6.8h4.9v.4H7.9v-.4z"
      }
    }), h("path", {
      attrs: {
        d: "M12.1 8h.3c.05 0 .05-.1.05-.2v-.4h-.4v.4c0 .1.05.2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M12.05 7.65c0 .05.05.05 0 0l.45.05v-.4h-.4v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M12.05 1.4H8.5c-.05 0-.1.05-.1.1v2.25h3.7V1.5c0-.05 0-.1-.05-.1zm-.95 2.35H9.45c0-.4-.1-.75-.1-.75 0-.05.05-.15.15-.15 0 0 .4.1.8.1s.75-.05.75-.05c.05 0 .15.05.15.15-.05-.05-.1.3-.1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M8.25 8h.3c.05 0 .05-.1.05-.2v-.4h-.4v.4c0 .1.05.2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M8.2 7.65c0 .05 0 .05 0 0l.45.05v-.4h-.4v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M6.85 11.3H3.4c-.4 0-.75.4-.75.95v1.4c0 .05.05.15.15.15h4.7c.05 0 .05-.1.05-.15v-1.4c-.05-.55-.35-.95-.7-.95z"
      }
    }), h("path", {
      attrs: {
        d: "M7.5 12.55c0-.05-.05-.15-.1-.15H2.75c-.05 0-.1.05-.1.15v1.1c0 .05.05.15.1.15h4.7c.05 0 .1-.05.1-.15v-1.1z"
      }
    }), h("path", {
      attrs: {
        d: "M2.65 14.05h4.9v.4h-4.9v-.4z"
      }
    }), h("path", {
      attrs: {
        d: "M6.9 15.25h.3c.05 0 .05-.1.05-.2v-.4h-.4v.4c-.05.1 0 .2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M6.8 14.95c0 .05 0 .05 0 0l.45.05v-.4h-.4v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M6.8 8.7H3.25c-.05 0-.1.05-.1.1V11h3.7V8.75c.05-.05 0-.05-.05-.05zM5.85 11H4.2c0-.4-.1-.75-.1-.75 0-.05.05-.15.15-.15 0 0 .4.1.8.1s.75-.05.75-.05c.05 0 .15.05.15.15-.05-.05-.1.35-.1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M3 15.25h.3c.05 0 .05-.1.05-.2v-.4h-.4v.4c0 .1 0 .2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M2.95 14.95c0 .05 0 .05 0 0l.45.05v-.4h-.45v.35z"
      }
    }), h("path", {
      attrs: {
        d: "M12 11.3H8.55c-.4 0-.75.4-.75.95v1.4c0 .05.05.15.15.15h4.7c.05 0 .05-.1.05-.15v-1.4c-.05-.55-.3-.95-.7-.95z"
      }
    }), h("path", {
      attrs: {
        d: "M12.65 12.55c0-.05-.05-.15-.1-.15h-4.7c-.05 0-.1.05-.1.15v1.1c0 .05.05.15.1.15h4.7c.05 0 .1-.05.1-.15v-1.1z"
      }
    }), h("path", {
      attrs: {
        d: "M7.85 14.05h4.9v.4h-4.9v-.4z"
      }
    }), h("path", {
      attrs: {
        d: "M12.05 15.25h.3c.05 0 .05-.1.05-.2v-.4H12v.4c-.05.1 0 .2.05.2z"
      }
    }), h("path", {
      attrs: {
        d: "M11.95 14.95c0 .05.05.05 0 0l.45.05v-.4H12v.05l-.05.3z"
      }
    }), h("path", {
      attrs: {
        d: "M11.95 8.7H8.4c-.05 0-.1.05-.1.1V11H12V8.75c.05-.05 0-.05-.05-.05zM11 11H9.35c0-.4-.1-.75-.1-.75 0-.05.05-.15.15-.15 0 0 .4.1.8.1s.75-.05.75-.05c.05 0 .15.05.15.15 0-.05-.1.35-.1.7z"
      }
    }), h("path", {
      attrs: {
        d: "M8.15 15.25h.35c.05 0 .05-.1.05-.2v-.4h-.4v.4c-.05.1 0 .2 0 .2z"
      }
    }), h("path", {
      attrs: {
        d: "M8.1 14.95c0 .05 0 .05 0 0l.45.05v-.4h-.4v.05l-.05.3z"
      }
    })]);
  }
};

var RadioIcon = {
  name: 'RadioIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-radio"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      }
    })]);
  }
};

var RefreshCcwIcon = {
  name: 'RefreshCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("polyline", {
      attrs: {
        points: "23 20 23 14 17 14"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
      }
    })]);
  }
};

var RefreshCwIcon = {
  name: 'RefreshCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("polyline", {
      attrs: {
        points: "1 20 1 14 7 14"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
      }
    })]);
  }
};

var RepeatIcon = {
  name: 'RepeatIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-repeat"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 1 21 5 17 9"
      }
    }), h("path", {
      attrs: {
        d: "M3 11V9a4 4 0 0 1 4-4h14"
      }
    }), h("polyline", {
      attrs: {
        points: "7 23 3 19 7 15"
      }
    }), h("path", {
      attrs: {
        d: "M21 13v2a4 4 0 0 1-4 4H3"
      }
    })]);
  }
};

var Restaurant2Icon = {
  name: 'Restaurant2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-restaurant-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1.936 4.368h-.288V1.541h-.357v2.827h-.288V1.541H.646v2.827H.353V1.541H.001V5.37L.71 6.495s-.245 7.051-.277 7.616c-.002.018-.002.038-.002.059a.71.71 0 0 0 .709.709h.015a.71.71 0 0 0 .706-.77c-.032-.563-.261-7.613-.261-7.613l.693-1.125V1.542h-.357z"
      }
    }), h("path", {
      attrs: {
        d: "M18.437 7.589V1.146c0-.181-1.6.475-1.6 3.579l-.001.083c0 1.07.381 2.051 1.015 2.815l-.267.297s-.299 5.627-.331 6.192a.715.715 0 1 0 1.43 0c-.053-.565-.245-6.523-.245-6.523z"
      }
    }), h("path", {
      attrs: {
        d: "M9.531 1.701a6.299 6.299 0 1 0 0 12.598 6.299 6.299 0 0 0 0-12.598zm0 10.667a4.363 4.363 0 1 1 4.363-4.369 4.363 4.363 0 0 1-4.363 4.363z"
      }
    })]);
  }
};

var RestaurantIcon = {
  name: 'RestaurantIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-restaurant"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm2.971 11.248a3.29 3.29 0 0 0 1.343-2.355c.225-1.8-.495-4.616-1.956-4.616S8.177 7.173 8.401 8.96c.09.977.595 1.82 1.335 2.362s-.044 1.478-.135 3.329a6.658 6.658 0 0 1-3.208-.01c.008-1.841-.045-3.313-.045-3.313l1.003-1.6V4.357H6.85v3.984h-.411V4.357h-.501v3.984h-.411V4.357h-.496v3.984H4.62V4.357h-.501v5.392l1.003 1.6-.101 2.832c-2.31-1.135-3.873-3.47-3.873-6.171a6.853 6.853 0 1 1 13.706 0 6.853 6.853 0 0 1-3.747 6.111c-.092-1.593-.135-2.793-.135-2.793z"
      }
    })]);
  }
};

var RewindIcon = {
  name: 'RewindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rewind"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 19 2 12 11 5 11 19"
      }
    }), h("polygon", {
      attrs: {
        points: "22 19 13 12 22 5 22 19"
      }
    })]);
  }
};

var RotateCcwIcon = {
  name: 'RotateCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
      }
    })]);
  }
};

var RotateCwIcon = {
  name: 'RotateCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
      }
    })]);
  }
};

var RssIcon = {
  name: 'RssIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rss"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 11a9 9 0 0 1 9 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 4a16 16 0 0 1 16 16"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var SafeDepositBoxIcon = {
  name: 'SafeDepositBoxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-safe-deposit-box"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.613 7.232a1.152 1.152 0 1 1-2.305 0 1.152 1.152 0 0 1 2.305 0z"
      }
    }), h("path", {
      attrs: {
        d: "M14.139 1.013H1.872a.907.907 0 0 0-.907.907v10.624c0 .501.406.907.907.907h12.267a.907.907 0 0 0 .907-.907V1.92a.907.907 0 0 0-.907-.907zm.042 10.278c0 .713-.578 1.291-1.291 1.291H3.114a1.291 1.291 0 0 1-1.291-1.291V3.173c0-.713.578-1.291 1.291-1.291h9.777c.713 0 1.291.578 1.291 1.291v.028z"
      }
    }), h("path", {
      attrs: {
        d: "M12.885 2.283H3.108a.891.891 0 0 0-.891.891v8.117c0 .492.399.891.891.891h9.776a.891.891 0 0 0 .891-.891V3.173a.891.891 0 0 0-.891-.891zM5.461 8.917a1.685 1.685 0 1 1 0-3.37 1.685 1.685 0 0 1 0 3.37zm4.715.918h-.981v-.981h.981zm0-1.915h-.981v-.987h.981zm0-1.915h-.981v-.987h.981zm1.851 3.835h-.987v-.987h.981zm0-1.915h-.987v-.992h.981zm0-1.914h-.987v-.992h.981z"
      }
    }), h("path", {
      attrs: {
        d: "M2.027 13.824l.395 1.163h3.541l.395-1.163H2.027z"
      }
    }), h("path", {
      attrs: {
        d: "M9.829 13.824l.395 1.163h3.541l.395-1.163H9.829z"
      }
    })]);
  }
};

var SailsIcon = {
  name: 'SailsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sails"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.45 12.15c-.05-.05-.05-.05 0 0C13.7 10.55 9.55 6.5 7.9 1.5c-.1-.35-.25-.4-.3-.4h-.1c-.2 0-.2.3-.2.4v10.75s.05.55.5.55h7.6c.7 0 .2-.5.05-.65z"
      }
    }), h("path", {
      attrs: {
        d: "M6.3 12.1V3.7c0-.1-.05-.2-.15-.2S6 3.7 6 3.7C3.65 9.25 1.4 11.6.45 12.45s-.05.05-.05.05c-.1.1-.3.3.05.3h5.2c.15 0 .65-.05.65-.7z"
      }
    })]);
  }
};

var SatelliteIcon = {
  name: 'SatelliteIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-satellite"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.55 13.35L7.3 9.1l2.85-3.65c.2.15.5.15.7-.05s.2-.5 0-.7c-.2-.2-.5-.2-.7 0s-.2.5-.05.7L6.45 8.25l-3.9-3.9c-.15-.1-.25-.15-.35-.15-.05 0-.1 0-.15.05-.1.05-.1.1-.15.15-.7.85-.65 2-.4 3 .45 1.65 1.55 3.05 2.7 4.25 1.15 1.15 2.55 2.15 4.1 2.65 1.05.35 2.35.4 3.2-.4.2-.15.2-.4.05-.55z"
      }
    }), h("path", {
      attrs: {
        d: "M5.65 12.45c-.45-.35-.9-.75-1.35-1.2-.5-.5-.9-1-1.25-1.45-.9 1.9-1.75 3.9-2.65 5.8-.1.15 0 .4.2.4h5.1c.05 0 .1-.05.1-.05.1-.05.15-.1.15-.25-.05-1.1-.2-2.2-.3-3.25z"
      }
    }), h("path", {
      attrs: {
        d: "M10.25 1.9c2.45.35 3.6 1.55 3.95 4 0 .25 0 .55.25.55s.25-.2.25-.4V5.9c.05-2.35-2-4.5-4.4-4.55-.2 0-.6-.15-.6.25 0 .3.35.2.55.3z"
      }
    }), h("path", {
      attrs: {
        d: "M10.7 2.55c-.25-.05-.55-.15-.6.15-.05.4.25.35.55.4 1.55.35 2.05.85 2.35 2.4v.2c0 .15.05.35.35.25.15 0 .2-.05.2-.2V5.5c0-1.5-1.3-2.8-2.85-2.95z"
      }
    }), h("path", {
      attrs: {
        d: "M10.85 3.7c-.15 0-.35.05-.35.2-.15.25.05.35.25.35.6.15.95.45 1 1.05 0 .15.05.2.05.25.05 0 .15.05.25.05l.05-.05c.15-.05.15-.2.15-.35.1-.7-.75-1.5-1.4-1.5z"
      }
    })]);
  }
};

var SaveIcon = {
  name: 'SaveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-save"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    }), h("polyline", {
      attrs: {
        points: "17 21 17 13 7 13 7 21"
      }
    }), h("polyline", {
      attrs: {
        points: "7 3 7 8 15 8"
      }
    })]);
  }
};

var ScissorsIcon = {
  name: 'ScissorsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-scissors"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "4",
        x2: "8.12",
        y2: "15.88"
      }
    }), h("line", {
      attrs: {
        x1: "14.47",
        y1: "14.48",
        x2: "20",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "8.12",
        y1: "8.12",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var SeaLadderIcon = {
  name: 'SeaLadderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sea-ladder"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.75 10.45c.9-.1 1.75-.35 2.5-.75l.5-.25C8.9 8.8 10.25 8.4 11.7 8.4c1.4 0 2.7.35 3.85 1v-.9a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.6z"
      }
    }), h("path", {
      attrs: {
        d: "M4.85 8.5v-.7H7.1c.05 0 .1-.05.15-.05l.95-.45c.5-.25 1.05-.45 1.6-.6V2.8c0-.4.35-.75.75-.75s.7.3.75.65h1a1.754 1.754 0 0 0-3.5 0v2.15h-4V2.8c0-.4.35-.75.75-.75s.7.3.75.65h1c-.05-.9-.8-1.65-1.75-1.65S3.8 1.85 3.8 2.8v5.8c.25 0 .55 0 .8-.05.15 0 .2-.05.25-.05zm0-2.65h4v1h-4v-1z"
      }
    }), h("path", {
      attrs: {
        d: "M4.55 12.85c.9-.1 1.75-.35 2.5-.75l.5-.25c1.15-.65 2.5-1.05 3.95-1.05 1.4 0 2.7.35 3.85 1v-.95a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.65z"
      }
    }), h("path", {
      attrs: {
        d: "M4.55 14.9c.9-.1 1.75-.35 2.5-.75l.5-.25c1.15-.65 2.5-1.05 3.95-1.05 1.4 0 2.7.35 3.85 1v-.95a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.65z"
      }
    })]);
  }
};

var Search2Icon = {
  name: 'Search2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-search-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.275 13.136l-3.973-3.973a.722.722 0 0 0-.988-.031l-.836-.838a4.955 4.955 0 1 0-1.175 1.179l.822.848a.724.724 0 0 0 .032.987l3.973 3.973a.726.726 0 0 0 1.034 0l1.109-1.109a.726.726 0 0 0 0-1.034zM2.709 8.187a3.873 3.873 0 1 1 2.742 1.136h-.01A3.84 3.84 0 0 1 2.71 8.187z"
      }
    })]);
  }
};

var Search3Icon = {
  name: 'Search3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-search-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.176 8.944a.722.722 0 0 0-.752-.169l-.555-.562a3.003 3.003 0 1 0-.711.715l.551.566a.724.724 0 0 0 .17.747l1.995 1.995a.726.726 0 0 0 1.034 0l.261-.261a.726.726 0 0 0 0-1.034zm-5.285-.901a2.187 2.187 0 1 1 1.547.64h-.001c-.604 0-1.15-.245-1.546-.64z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    })]);
  }
};

var SearchIcon = {
  name: 'SearchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-search"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    })]);
  }
};

var SendIcon = {
  name: 'SendIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-send"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "2",
        x2: "11",
        y2: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "22 2 15 22 11 13 2 9 22 2"
      }
    })]);
  }
};

var ServerIcon = {
  name: 'ServerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-server"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "14",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "6.01",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "18",
        x2: "6.01",
        y2: "18"
      }
    })]);
  }
};

var SettingsIcon = {
  name: 'SettingsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-settings"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      }
    })]);
  }
};

var ShadeTentIcon = {
  name: 'ShadeTentIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shade-tent"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.504 1.283a1.494 1.494 0 1 0 1.499 1.494 1.5 1.5 0 0 0-1.5-1.494zm0 2.567a1.083 1.083 0 1 1 1.083-1.083 1.083 1.083 0 0 1-1.083 1.077zm0-2.994a.211.211 0 0 0 .211-.211V.212a.214.214 0 0 0-.428 0v.433c0 .117.095.211.211.211h.006zm0 3.844a.211.211 0 0 0-.211.211v.428a.214.214 0 0 0 .428 0v-.428a.211.211 0 0 0-.21-.19h-.007zm1.662-3.281l.303-.303a.214.214 0 1 0-.303-.303l-.303.303a.214.214 0 1 0 .303.303zm-3.324 2.707l-.303.303a.214.214 0 1 0 .303.303l.303-.303a.214.214 0 1 0-.303-.303zm-.26-1.359a.21.21 0 0 0-.205-.211h-.433a.214.214 0 0 0 0 .428h.433a.212.212 0 0 0 .206-.205zm4.488-.211h-.428a.214.214 0 0 0 0 .428h.428a.214.214 0 0 0 0-.428zm-4.228-1.137a.214.214 0 1 0 .303-.303l-.303-.303a.214.214 0 1 0-.303.303zm3.324 2.707a.214.214 0 1 0-.303.303l.303.292a.214.214 0 1 0 .303-.303z"
      }
    }), h("path", {
      attrs: {
        d: "M14.933 2.778a1.425 1.425 0 1 1-2.85-.001 1.425 1.425 0 0 1 2.85.001z"
      }
    }), h("path", {
      attrs: {
        d: "M8.187 1.251l6.562 10.964L14.224 16 6.129 2.014l2.058-.763z"
      }
    }), h("path", {
      attrs: {
        d: "M6.297 2.155L.244 15.431"
      }
    }), h("path", {
      attrs: {
        d: "M6.075 2.047l2.112-.796.038.363-2.058.65-.092-.217z"
      }
    })]);
  }
};

var Share2Icon = {
  name: 'Share2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-2"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "5",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "12",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "19",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "8.59",
        y1: "13.51",
        x2: "15.42",
        y2: "17.49"
      }
    }), h("line", {
      attrs: {
        x1: "15.41",
        y1: "6.51",
        x2: "8.59",
        y2: "10.49"
      }
    })]);
  }
};

var Share3Icon = {
  name: 'Share3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.523 9.824a1.55 1.55 0 0 0-1.161.532l-3.57-1.95a1.406 1.406 0 0 0-.003-.762l3.602-1.958a1.6 1.6 0 1 0-.381-.693L5.402 6.934a1.568 1.568 0 1 0-.001 2.135l3.585 1.962a1.568 1.568 0 1 0 1.533-1.237h-.002z"
      }
    })]);
  }
};

var Share4Icon = {
  name: 'Share4Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-4"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .16a7.84 7.84 0 1 0 0 15.68A7.84 7.84 0 0 0 8 .16zM6.059 8.053v.002a1.4 1.4 0 0 1-.034.306l3.202 1.729a1.413 1.413 0 1 1-.356.689L5.67 9.039a1.392 1.392 0 1 1 0-1.974l3.2-1.755a1.392 1.392 0 1 1 .374.688l-3.2 1.755a1.399 1.399 0 0 1 .016.302z"
      }
    })]);
  }
};

var Share5Icon = {
  name: 'Share5Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-5"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.683 0H1.318C.59 0 .001.59.001 1.317v13.365c0 .728.59 1.317 1.317 1.317h13.365c.728 0 1.317-.59 1.317-1.317V1.317C16 .589 15.41 0 14.683 0zM6.149 8a1.56 1.56 0 0 1-.05.384l3.57 1.941a1.563 1.563 0 1 1-.366.699L5.717 9.072a1.568 1.568 0 1 1-.001-2.135L9.317 4.97a1.568 1.568 0 1 1 .385.705L6.101 7.642c.03.106.049.229.053.355z"
      }
    })]);
  }
};

var ShareIcon = {
  name: 'ShareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      }
    }), h("polyline", {
      attrs: {
        points: "16 6 12 2 8 6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var SharedLoungeIcon = {
  name: 'SharedLoungeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shared-lounge"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.147 1.835H12.55a2.232 2.232 0 0 0-.446-.293l.355-.726a.405.405 0 0 0-.724-.364l-.433.845a3.574 3.574 0 0 0-1.296.003L9.601.454a.401.401 0 1 0-.714.366l.367.718a2.257 2.257 0 0 0-.462.301l-2.578-.003h-.005a.768.768 0 0 0-.768.768v4.64l.88-.048V2.748h7.632v5.003h-.619a.986.986 0 0 1 .287.924c-.014.067.001.047.001.074h1.531a.768.768 0 0 0 .768-.746V2.605a.768.768 0 0 0-.768-.768h-.006zm-.246 3.424a.449.449 0 1 1 .448-.459v.017a.449.449 0 0 1-.448.448zm0-1.6a.449.449 0 1 1 .448-.459v.011a.449.449 0 0 1-.448.448z"
      }
    }), h("path", {
      attrs: {
        d: "M12.8 8.053c-.704-.139-4.224-.363-5.291-.363s-4.592.224-5.291.363c-.475.139-.304.421-.304.8v.677c.207.018.397.074.569.159.524.268.961 1.292 1.239 2.129a19.53 19.53 0 0 1 3.38-.235h.806l.284-.002c1.087 0 2.155.086 3.196.252.168-.831.611-1.86 1.139-2.148.163-.081.353-.136.554-.154.006-.336.006-.592.006-.678.011-.379.187-.661-.288-.8z"
      }
    }), h("path", {
      attrs: {
        d: "M13.867 10.133h-.117l-.192-.037h-.448a1.074 1.074 0 0 0-.321.099c-.527.269-1.135 2.269-1.135 2.269a15.986 15.986 0 0 0-3.754-.336h-.806a16.583 16.583 0 0 0-3.841.355c-1.109.236-.49-2.051-1.018-2.35a1.033 1.033 0 0 0-.309-.095l-.006-.001h-.453l-.192.037h-.048l-.112.059H1.03c-.784.288-1.131.405-.891.997s.784 1.781.784 1.781v2.261c0 .379 0 .533.304.533h1.904l.379-.587h8l.379.587h1.872c.315 0 .304-.181.304-.533v-2.229s.533-1.195.784-1.781-.107-.709-.891-.997h-.037z"
      }
    })]);
  }
};

var ShieldOffIcon = {
  name: 'ShieldOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
      }
    }), h("path", {
      attrs: {
        d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ShieldIcon = {
  name: 'ShieldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }
    })]);
  }
};

var ShoppingBagIcon = {
  name: 'ShoppingBagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-bag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("path", {
      attrs: {
        d: "M16 10a4 4 0 0 1-8 0"
      }
    })]);
  }
};

var ShoppingCartIcon = {
  name: 'ShoppingCartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-cart"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "9",
        cy: "21",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "20",
        cy: "21",
        r: "1"
      }
    }), h("path", {
      attrs: {
        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      }
    })]);
  }
};

var ShuffleIcon = {
  name: 'ShuffleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shuffle"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 3 21 3 21 8"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "21",
        y2: "3"
      }
    }), h("polyline", {
      attrs: {
        points: "21 16 21 21 16 21"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "15",
        x2: "21",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "4",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var SidebarIcon = {
  name: 'SidebarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sidebar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "21"
      }
    })]);
  }
};

var SingleBedIcon = {
  name: 'SingleBedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-single-bed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.6 6.45H4.1c-.85 0-1.6.85-1.6 2.05v3.05c0 .15.15.3.25.3H12.9c.1 0 .15-.2.15-.3V8.5c0-1.2-.6-2.05-1.45-2.05z"
      }
    }), h("path", {
      attrs: {
        d: "M13.05 9.2c0-.15-.1-.25-.2-.25H2.7c-.1 0-.2.1-.2.25v2.35c0 .15.1.25.2.25h10.15c.1 0 .2-.1.2-.25V9.2z"
      }
    }), h("path", {
      attrs: {
        d: "M2.55 12.45H13.1v.9H2.55v-.9z"
      }
    }), h("path", {
      attrs: {
        d: "M11.7 15.05h.7c.1 0 .15-.2.15-.5v-.85h-.9v.85c-.1.3 0 .5.05.5z"
      }
    }), h("path", {
      attrs: {
        d: "M11.55 14.35v.05h.95v-.7h-.9v.65z"
      }
    }), h("path", {
      attrs: {
        d: "M11.55.75H3.8c-.05 0-.15.05-.15.25v4.85h8.05V1c-.05-.2-.05-.25-.15-.25zM9.4 5.85H5.85c0-.85-.2-1.65-.2-1.65 0-.15.1-.25.25-.25 0 0 .9.15 1.75.15.8 0 1.65-.15 1.65-.15.15 0 .25.15.25.25.05 0-.15.85-.15 1.65z"
      }
    }), h("path", {
      attrs: {
        d: "M3.3 15.05H4c.1 0 .15-.2.15-.5v-.85h-1v.85c0 .3.05.5.15.5z"
      }
    }), h("path", {
      attrs: {
        d: "M3.15 14.35v.05h.9v-.7h-.9v.65z"
      }
    })]);
  }
};

var SitemapIcon = {
  name: 'SitemapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sitemap"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.072 10.48h-1.387V9.067a1.328 1.328 0 0 0-1.322-1.323H8.229V5.483h2.028a.71.71 0 0 0 .709-.681V1.91a.71.71 0 0 0-.709-.709H5.676a.71.71 0 0 0-.709.709v2.891a.71.71 0 0 0 .709.709h2.021v2.256H3.644c-.724 0-1.313.579-1.328 1.3v1.415H.929a.71.71 0 0 0-.709.709v2.912a.71.71 0 0 0 .709.709h3.312a.71.71 0 0 0 .709-.709v-2.901a.71.71 0 0 0-.709-.709H2.849V9.068a.795.795 0 0 1 .789-.789h4.059v2.208H6.342a.71.71 0 0 0-.709.709v2.907a.71.71 0 0 0 .709.709h3.312a.71.71 0 0 0 .709-.709v-2.901a.71.71 0 0 0-.709-.709H8.23V8.274h4.128c.439 0 .795.356.795.795v1.413h-1.392a.71.71 0 0 0-.709.709v2.912a.71.71 0 0 0 .709.709h3.312a.71.71 0 0 0 .709-.709v-2.912a.71.71 0 0 0-.709-.709zM5.499 4.8V3.099h4.933V4.8a.176.176 0 0 1-.176.176H5.675a.176.176 0 0 1-.176-.176zM4.24 14.267H.928a.176.176 0 0 1-.176-.176V12h3.664v2.091a.176.176 0 0 1-.176.176zm5.419 0H6.342a.176.176 0 0 1-.176-.176V12H9.83v2.091a.176.176 0 0 1-.17.176zm5.418 0H11.76a.176.176 0 0 1-.176-.176V12h3.664v2.091a.176.176 0 0 1-.176.176z"
      }
    })]);
  }
};

var SkipBackIcon = {
  name: 'SkipBackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-back"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "19 20 9 12 19 4 19 20"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "19",
        x2: "5",
        y2: "5"
      }
    })]);
  }
};

var SkipForwardIcon = {
  name: 'SkipForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 4 15 12 5 20 5 4"
      }
    }), h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "19",
        y2: "19"
      }
    })]);
  }
};

var SlackIcon = {
  name: 'SlackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slack"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
      }
    }), h("path", {
      attrs: {
        d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
      }
    })]);
  }
};

var SlashIcon = {
  name: 'SlashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slash"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "19.07",
        y2: "19.07"
      }
    })]);
  }
};

var SleepUnderTheStarsIcon = {
  name: 'SleepUnderTheStarsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sleep-under-the-stars"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.907 11.008a1.05 1.05 0 1 1-2.102 0 1.05 1.05 0 0 1 2.102 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5.456 12.059h6.277l1.067-1.173 1.179 1.173h1.269s.843-1.2.533-1.115c-.371.121-.678.246-.975.388s-1.681-1.946-2.188-1.946-1.883 1.6-1.883 1.6a9.431 9.431 0 0 0-2.551-.532c-1.3-.044-2.846.99-2.9 1.065-.421.651.171.539.171.539z"
      }
    }), h("path", {
      attrs: {
        d: "M.085 10.485v-.117a.54.54 0 0 0 0 .12z"
      }
    }), h("path", {
      attrs: {
        d: "M9.067 12.8c-7.808 0-8.848-1.824-8.981-2.315.677 4.197 7.301 4.224 8.981 4.224s8.304 0 8.981-4.229c-.133.496-1.173 2.32-8.981 2.32z"
      }
    }), h("path", {
      attrs: {
        d: "M18.048 10.485a.54.54 0 0 0 0-.12c.016.04.011.077 0 .12z"
      }
    }), h("path", {
      attrs: {
        d: "M13.184 2.88l.384.784.384-.784.864-.123-.624-.608.149-.859-.773.405-.768-.405.144.859-.624.608.864.123z"
      }
    }), h("path", {
      attrs: {
        d: "M7.413 3.717l.336.677.331-.677.752-.107-.544-.528.128-.747-.667.352-.672-.352.128.747-.544.528.752.107z"
      }
    }), h("path", {
      attrs: {
        d: "M14.896 6.869l-.395.384.544.08.24.496.245-.496.544-.08-.395-.384.096-.539-.491.256-.485-.256.096.539z"
      }
    }), h("path", {
      attrs: {
        d: "M10.075 6.437l.245.496.24-.496.544-.08-.389-.384.091-.539-.485.256-.491-.256.096.539-.395.384.544.08z"
      }
    }), h("path", {
      attrs: {
        d: "M3.984 6.736c.517-.17.94-.507 1.216-.945a1.82 1.82 0 0 1-.927.252 1.792 1.792 0 0 1-.14-3.579 2.272 2.272 0 1 0-.132 4.262z"
      }
    })]);
  }
};

var SlidersIcon = {
  name: 'SlidersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sliders"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "4",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "10",
        x2: "4",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "21",
        x2: "20",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "12",
        x2: "20",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "7",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "8",
        x2: "15",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "16",
        x2: "23",
        y2: "16"
      }
    })]);
  }
};

var SmartphoneIcon = {
  name: 'SmartphoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smartphone"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "5",
        y: "2",
        width: "14",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    })]);
  }
};

var SmileIcon = {
  name: 'SmileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smile"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M8 14s1.5 2 4 2 4-2 4-2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var SnackIcon = {
  name: 'SnackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-snack"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.171 12.512s-.299-1.461-.608-2.501a20.58 20.58 0 0 1-.862-2.649 19.78 19.78 0 0 1-.172-3.117c-.075-1.045-.299-2.533-.299-2.533L.315 3.488s.299 1.461.608 2.501c.306.756.607 1.693.847 2.655.132.951.189 1.872.189 2.806l-.002.297c.075 1.052.299 2.54.299 2.54l4.144-.741zm-1.376-1.067a2.448 2.448 0 0 0-.005-1.393c.197.339.363.71.485 1.1.079.243.147.505.2.772l-1.875.38s.944-.256 1.189-.859zM9.68 2.379c.137.402.223.865.24 1.347a12.862 12.862 0 0 0 .003 2.189c.103.358-.451-.73-.537-1.114s.48-1.525-.064-1.723a11.133 11.133 0 0 0-2.079-.277zM3.2 8.533a3.089 3.089 0 1 1 .003.019z"
      }
    }), h("path", {
      attrs: {
        d: "M.171 2.667l.059.336 9.904-1.76-.059-.336-.091-.565-.501.485-.592-.293-.48.501-.624-.299-.48.501-.624-.304-.48.501-.624-.304-.48.501-.624-.299-.48.501-.624-.304-.48.501-.624-.304-.48.501-.624-.299-.453.475-.64-.272.101.533z"
      }
    }), h("path", {
      attrs: {
        d: "M12.315 13.312l-.064-.331-9.909 1.781.059.331.101.565.501-.485.587.288.48-.501.624.304.485-.507.624.304.48-.501.624.304.48-.501.624.304.48-.501.624.304.48-.501.624.304.48-.507.624.309.453-.48.635.283-.096-.565z"
      }
    }), h("path", {
      attrs: {
        d: "M14.245 3.984a1.33 1.33 0 0 0 1.556.846l-.009.002c.278-.073.517-.21.71-.395a2.404 2.404 0 0 1-.527.529l1.3 1.322c.069.059.053 0 .053 0a.467.467 0 0 1 .055-.349c.121-.222.329-.131.489-.419s-.043-.395.101-.651.341-.149.496-.432-.032-.416.096-.64c.055-.108.146-.192.258-.234s.078-.028.003-.06l-2.027-.443a1.33 1.33 0 0 0-1.556-.846l.009-.002c-.278.073-.517.21-.71.395.151-.207.327-.383.527-.529L13.753.729c-.069-.059-.053 0-.053 0a.467.467 0 0 1-.055.349c-.121.222-.329.131-.489.419s.043.395-.101.651-.341.149-.496.432.032.416-.096.64c-.055.108-.146.192-.258.234s-.078.028-.003.06zm2.048.139c.027-.091.043-.165.096-.149s.069.101.043.192-.091.149-.139.133-.027-.091 0-.176zm-.208-1.456a.904.904 0 0 1 .409 1.073c-.094.25-.201-.273-.275-.54s-.272-.533-.133-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M19.109 9.941a.474.474 0 0 1-.16-.307c-.032-.258.186-.306.144-.631s-.267-.293-.304-.581.187-.32.144-.645-.267-.309-.309-.576a.471.471 0 0 1 .076-.343c.052-.076.042-.068-.044-.036l-1.899.843a1.319 1.319 0 0 0-.743-.227c-.402 0-.762.178-1.005.46l-.001.002a1.597 1.597 0 0 0-.335.726 2.333 2.333 0 0 1 .132-.775l-1.84-.266c-.091 0-.032.048-.032.048a.474.474 0 0 1 .16.307c.032.258-.186.306-.144.631s.267.293.304.581-.187.32-.144.645.272.315.304.571a.471.471 0 0 1-.076.343c-.052.076-.042.068.044.036l1.899-.843c.208.142.466.227.743.227.402 0 .762-.178 1.005-.46l.001-.002c.167-.203.285-.453.335-.726.001.265-.046.529-.132.775l1.84.266c.096.011.037-.043.037-.043zM16 7.776a.9.9 0 0 1 .958.602c.077.268-.323-.09-.531-.255s-.555-.283-.427-.347zm1.115 1.168c-.048 0-.069-.053-.096-.139s-.064-.16 0-.176.117.037.149.128-.011.171-.059.187z"
      }
    })]);
  }
};

var SoldierIcon = {
  name: 'SoldierIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-soldier"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.133 3.733a5.932 5.932 0 0 1 1.519.212c.279.076.561.161.807.252.538.227 1.003.51 1.418.851.284.296.284-.664.284-.664l.501-.683v-.027l-.053-.059-.037-.043-.075-.08-.096-.075-.096-.096-.08-.075-.117-.112-.096-.085-.144-.117-.112-.091-.176-.133-.117-.085-.24-.16-.091-.059a5.632 5.632 0 0 0-.368-.213l-.059-.059-.315-.155-.149-.064-.283-.112-.181-.059-.288-.085-.203-.048-.299-.011-.219-.032-.315-.027h-.779a5.701 5.701 0 0 0-.608.063l.08.567.048.571-.453 1.136a.085.085 0 0 0 .102.111c.38-.138.82-.23 1.278-.255z"
      }
    }), h("path", {
      attrs: {
        d: "M1.835 8.395c0-.805.875-1.093 1.173-1.168h.309a4.472 4.472 0 0 0 .004 1.52l1.308-.027c.308-.341.631-.653.972-.943a.58.58 0 0 0 .163-.19c.397.145.678.51.7.944-.064.845-1.131.808-1.195.808v.533h.064c.592 0 1.6-.261 1.659-1.285a1.477 1.477 0 0 0-.834-1.404l1.762-.004.192.112.032-.533-.192.091-1.963-.309c-.048-.192-.187-.581-.48-.576a2.165 2.165 0 0 1-.765-.002c-.334-.067-1.016-.233-1.208.189l-1.648-.283L.581 5.1.336 7.655l1.488-.411a1.492 1.492 0 0 0-.533 1.144v.009c.015.582.383 1.074.897 1.271l.01-.599a.8.8 0 0 1-.363-.67v-.002z"
      }
    }), h("path", {
      attrs: {
        d: "M13.963 9.067l-.475-1.52-.4.16a1.737 1.737 0 0 0-.089-.514 5.504 5.504 0 0 0 .856-1.69c-.122-.292-.613-.852-2.336-1.3a5.479 5.479 0 0 0-1.382-.197 2.656 2.656 0 0 0-1.339.268l-.08.052-.075 1.008s-.501.469-.501.613.048.187.288.341 0 .4 0 .485a.8.8 0 0 0 .129.209.221.221 0 0 0-.129.201v.006c.008.103.07.191.158.234s-.212.566.14.694a4.625 4.625 0 0 0 1.113.058l-.014.806-.533.203.357.901s-3.573 1.813-3.979 2.048-.848.293-.848-.357V8.981H2.611v1.237c0 1.451-.037 3.675-.037 3.835s-.08 1.067 1.157.992 4.32-.368 4.32-.368L7.694 16h7.669c.373-1.979.784-5.867-1.403-6.933z"
      }
    })]);
  }
};

var SpaFacilitiesIcon = {
  name: 'SpaFacilitiesIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-spa-facilities"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.997 10.885l-3.253-4.8a.849.849 0 0 0-.654-.218H6.907a.85.85 0 0 0-.634.287l-.001.001-3.253 4.8H1.627V16h1.269v-3.653h2.619v-1.269a1.425 1.425 0 0 1 .001-.196l-.982.004 1.515-2.261v1.381a1.347 1.347 0 0 1 1.949.31 1.367 1.367 0 0 1 1.125-.595c.314 0 .603.107.833.288L9.953 8.62l1.515 2.261h-.997a1.425 1.425 0 0 1-.001.196v1.27h2.619V16h1.269v-5.115z"
      }
    }), h("path", {
      attrs: {
        d: "M9.68 3.179a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0z"
      }
    }), h("path", {
      attrs: {
        d: "M7.701 11.077a.827.827 0 1 0-1.654 0v3.275a.827.827 0 1 0 1.654 0z"
      }
    }), h("path", {
      attrs: {
        d: "M9.952 11.077a.827.827 0 1 0-1.654 0v3.275a.827.827 0 1 0 1.654 0z"
      }
    }), h("path", {
      attrs: {
        d: "M3.259 7.339c.928-.533 1.493-1.664.741-2.571a2.369 2.369 0 0 1-.496-2.385c.084-.244-1.605 1.195-.384 2.683.257.342.412.774.412 1.242 0 .379-.101.734-.278 1.04z"
      }
    }), h("path", {
      attrs: {
        d: "M12.197 7.339c.928-.533 1.493-1.664.741-2.571a2.369 2.369 0 0 1-.496-2.385c.084-.244-1.605 1.195-.384 2.683.257.342.412.774.412 1.242 0 .379-.101.734-.278 1.04z"
      }
    })]);
  }
};

var SpeakerIcon = {
  name: 'SpeakerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-speaker"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "14",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12.01",
        y2: "6"
      }
    })]);
  }
};

var SquareIcon = {
  name: 'SquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var StarIcon = {
  name: 'StarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-star"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    })]);
  }
};

var StopCircleIcon = {
  name: 'StopCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-stop-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    })]);
  }
};

var StoveIcon = {
  name: 'StoveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-stove"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M0 0v13.7h16V0H0zm4.75 12.8c-1.4 0-2.55-1.15-2.55-2.55S3.35 7.7 4.75 7.7 7.3 8.85 7.3 10.25 6.15 12.8 4.75 12.8zm0-5.9c-1.4 0-2.55-1.15-2.55-2.55S3.35 1.8 4.75 1.8 7.3 2.95 7.3 4.35 6.15 6.9 4.75 6.9zm6.2 5.9c-1.4 0-2.55-1.15-2.55-2.55S9.55 7.7 10.95 7.7s2.55 1.15 2.55 2.55-1.15 2.55-2.55 2.55zm0-5.9c-1.4 0-2.55-1.15-2.55-2.55S9.55 1.8 10.95 1.8 13.5 3 13.5 4.4s-1.15 2.5-2.55 2.5z"
      }
    }), h("path", {
      attrs: {
        d: "M0 13.9V16h16v-2.15H0zm9.5 1.35c-.3 0-.55-.25-.55-.55s.25-.55.55-.55c.3 0 .55.25.55.55s-.25.55-.55.55zm1.4 0c-.3 0-.55-.25-.55-.55s.25-.55.55-.55c.3 0 .55.25.55.55s-.25.55-.55.55zm1.4 0c-.3 0-.55-.25-.55-.55s.25-.55.55-.55c.3 0 .55.25.55.55s-.25.55-.55.55zm1.4 0c-.3 0-.55-.25-.55-.55s.25-.55.55-.55c.3 0 .55.25.55.55s-.25.55-.55.55z"
      }
    })]);
  }
};

var SunIcon = {
  name: 'SunIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sun"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "4.22",
        x2: "5.64",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "18.36",
        x2: "19.78",
        y2: "19.78"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "23",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "19.78",
        x2: "5.64",
        y2: "18.36"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "5.64",
        x2: "19.78",
        y2: "4.22"
      }
    })]);
  }
};

var SunbedIcon = {
  name: 'SunbedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunbed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.2 5.75l4.6 4.55"
      }
    }), h("path", {
      attrs: {
        d: "M4.65 10.25h11.1"
      }
    }), h("path", {
      attrs: {
        d: "M6.95 10.35l-1.25 1.2"
      }
    }), h("path", {
      attrs: {
        d: "M12.15 10.25l1.25 1.25"
      }
    }), h("path", {
      attrs: {
        d: "M12.65 9.3h-7.2C5.2 9.3 5 9.1 5 8.85V8.8c0-.25.2-.45.45-.45h7.2c.25 0 .45.2.45.45v.05c0 .2-.2.45-.45.45z"
      }
    }), h("path", {
      attrs: {
        d: "M5 9.05L1.85 5.9c-.2-.2-.2-.5 0-.65.2-.2.5-.2.65 0L5.65 8.4c.2.2.2.5 0 .65-.15.2-.45.2-.65 0z"
      }
    })]);
  }
};

var Sunrise2Icon = {
  name: 'Sunrise2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunrise-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.533 12.736s-.261-1.355-1.259-1.355-1.152.608-2.037.608-1.312-.747-1.867-.747-.981.747-1.867.747-1.067-.608-2.037-.608S.197 12.736.197 12.736h10.336z"
      }
    }), h("path", {
      attrs: {
        d: "M14.437 13.701c-.997 0-1.152.608-2.037.608s-1.312-.747-1.867-.747-.981.747-1.867.747-1.067-.608-2.037-.608a1.15 1.15 0 0 0-.984.644c-.121.21-.215.445-.272.694l10.322.017a2.502 2.502 0 0 0-.279-.716 1.142 1.142 0 0 0-.978-.638z"
      }
    }), h("path", {
      attrs: {
        d: "M5.467 10.667h10.336a2.258 2.258 0 0 0-.535-1.069 1.005 1.005 0 0 0-.709-.291h-.041c-.381 0-.737.109-1.038.298a1.815 1.815 0 0 1-.982.305 1.753 1.753 0 0 1-.957-.313l.043.004a4.1 4.1 0 1 0-7.365-.432c-.762-.091-.965-.619-1.903-.619-.693 0-1.029.656-1.173 1.067-.031.082-.06.184-.083.289l4.712.015a2.49 2.49 0 0 0-.301.729z"
      }
    }), h("path", {
      attrs: {
        d: "M8.203 2.608L8.406.944h-.795l.203 1.664h.389z"
      }
    }), h("path", {
      attrs: {
        d: "M5.664 3.184l-.656-1.541-.688.4 1.003 1.339.341-.197z"
      }
    }), h("path", {
      attrs: {
        d: "M3.755 4.955L2.411 3.947l-.395.688 1.541.656.197-.336z"
      }
    }), h("path", {
      attrs: {
        d: "M2.981 7.44l-1.664-.203v.795l1.664-.197V7.44z"
      }
    }), h("path", {
      attrs: {
        d: "M13.035 7.829l1.664.203v-.795l-1.664.203v.389z"
      }
    }), h("path", {
      attrs: {
        d: "M14 4.635l-.4-.688-1.339 1.008.197.336 1.541-.656z"
      }
    }), h("path", {
      attrs: {
        d: "M11.696 2.043l-.688-.4-.656 1.541.336.197 1.008-1.339z"
      }
    })]);
  }
};

var SunriseIcon = {
  name: 'SunriseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunrise"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 12 2 16 6"
      }
    })]);
  }
};

var Sunset2Icon = {
  name: 'Sunset2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunset-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19.2 10.027h-1.307a5.17 5.17 0 0 0 .608-2.449 5.237 5.237 0 1 0-9.852 2.477l-1.715-.028c-.133-.763-.683-1.515-2.389-1.376 0 0 .24-.533 1.323-.677l.224-.379.181.32s.971.432 1.067.432.139-.096.096-.347a1.458 1.458 0 0 0-1.607-1.194c-1.118.165-1.444 1.557-1.444 1.557s.128-2.037-1.429-2.395A1.474 1.474 0 0 0 1.07 7.03c-.153.649-.002.106.275.042a8.286 8.286 0 0 1 1.176-.058c.114 0 .328-.251.328-.251l.08.363s.997.336 1.003 1.237a2.39 2.39 0 0 0-2.713-.479C-.27 8.624.002 9.766.002 9.846s.043.176.277-.059c.2-.19.417-.366.649-.522l.188-.39.357.123a6.776 6.776 0 0 1 1.555-.176c.213 0 .424.01.632.028s-1.627.163-2.016 1.219c-.122.281-.194.608-.194.952s.071.671.2.968c.026.064.149.272.245-.128.093-.328.211-.613.358-.88l-.07-.368h.192s1.147-1.349 1.36-1.365c0 0-.869 2.539-.299 4.405h1.296a5.782 5.782 0 0 1-.525-4.2l.525.909h.304l-.117.304c.158.334.251.725.251 1.138v.003c0 .128.08.08.123-.043s.597-1.568-.304-2.528c.404.167.733.448.955.802l.138.008v.464h.155c.17.307.31.663.399 1.038.006.306.161.029.198-.11.075-.266.124-.575.138-.893l12.23-.009z"
      }
    }), h("path", {
      attrs: {
        d: "M9.851 11.28h7.872v.533H9.851v-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M12.181 12.539h3.909v.533h-3.909v-.533z"
      }
    })]);
  }
};

var SunsetIcon = {
  name: 'SunsetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunset"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "16 5 12 9 8 5"
      }
    })]);
  }
};

var SwimmingPoolIcon = {
  name: 'SwimmingPoolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-swimming-pool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2.432 9.995v-.928h4.837v.853c.211.051.454.08.704.08h.363V5.547a3.28 3.28 0 1 1 6.554.007.532.532 0 0 0 1.067-.006 4.344 4.344 0 0 0-8.688 0H2.432a3.28 3.28 0 0 1 3.274-3.28 3.233 3.233 0 0 1 1.542.408l.48-.952a4.348 4.348 0 0 0-6.363 3.822v4.369c.243.052.523.083.809.085zm0-3.382h4.837V8H2.432z"
      }
    }), h("path", {
      attrs: {
        d: "M13.824 10.731c-1.6 0-1.627-.533-2.955-.533-1.6 0-1.6.533-2.869.533s-1.285-.533-2.869-.533c-1.328 0-1.371.533-2.955.533a5.449 5.449 0 0 1-2.208-.548L0 11.2c.636.312 1.38.505 2.167.533 1.609 0 1.636-.533 2.964-.533 1.6 0 1.6.533 2.869.533s1.285-.533 2.869-.533c1.328 0 1.371.533 2.955.533a5.449 5.449 0 0 0 2.208-.548L16 10.181a5.374 5.374 0 0 1-2.165.549z"
      }
    }), h("path", {
      attrs: {
        d: "M10.869 12.235c-1.6 0-1.6.533-2.869.533s-1.285-.533-2.869-.533c-1.328 0-1.371.533-2.955.533a5.449 5.449 0 0 1-2.208-.548L0 13.258c.636.312 1.38.505 2.167.533 1.609 0 1.636-.533 2.964-.533 1.6 0 1.6.533 2.869.533s1.285-.533 2.869-.533c1.328 0 1.371.533 2.955.533a5.449 5.449 0 0 0 2.208-.548L16 12.233a5.378 5.378 0 0 1-2.167.533c-1.567.032-1.636-.533-2.964-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M13.824 14.832l-.098.001c-.414 0-.813-.061-1.19-.174a4.25 4.25 0 0 0-1.661-.371l-.076-.001c-.637 0-1.242.14-1.785.39a2.888 2.888 0 0 1-.946.155l-.065-.001-.059.001c-.349 0-.683-.061-.993-.172a4.135 4.135 0 0 0-1.738-.373l-.075.001a4.441 4.441 0 0 0-1.72.39 4.118 4.118 0 0 1-1.132.155l-.103-.001a4.468 4.468 0 0 1-1.179-.173 5.761 5.761 0 0 1-1.038-.386L.001 16h16v-1.712a5.582 5.582 0 0 1-.983.369c-.385.11-.781.17-1.19.175z"
      }
    })]);
  }
};

var TableGamesIcon = {
  name: 'TableGamesIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-table-games"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.448.677L5.216.096a.65.65 0 0 0-.698.595l-.171 2.136-3.408.603a1.068 1.068 0 0 0-.853 1.222l1.796 10.383c.095.494.521.863 1.034.869h.182l7.147-1.237a1.068 1.068 0 0 0 .853-1.222l-.17-.991.565.048a.65.65 0 0 0 .698-.595l.848-10.509a.65.65 0 0 0-.59-.72zm-2.133 12.896a.25.25 0 0 1-.18.293L2.96 15.098a.252.252 0 0 1-.293-.201L.875 4.506a.25.25 0 0 1 .19-.287l7.148-1.238h.043l.029-.002c.128 0 .233.096.249.219zM11.2 11.2a.2.2 0 0 1-.197.181h-.251l-.085-.405h.149l.731-8.928-5.68-.448-.08.997-.389.069.107-1.301a.2.2 0 0 1 .069-.133.194.194 0 0 1 .145-.048l6.058.491a.203.203 0 0 1 .182.202v.012z"
      }
    }), h("path", {
      attrs: {
        d: "M4.869 10.8a.812.812 0 0 0 .654-.491l.002-.005a2.075 2.075 0 0 1-.198 1.371l.005.026 1.339-.229v-.037a2.122 2.122 0 0 1-.617-1.21l-.001-.012a.811.811 0 0 0 .79.25.974.974 0 0 0 .792-1.248c-.089-.526-.745-1.06-1.129-1.364S5.487 7.03 5.178 6.784c-.208.325-.597.955-.896 1.44s-.693 1.147-.603 1.669a.977.977 0 0 0 1.196.906z"
      }
    }), h("path", {
      attrs: {
        d: "M16.347 10.091c.102.001.199.02.288.055l.656.243.688-1.856a.411.411 0 0 0-.237-.532l-2.915-1.068a.411.411 0 0 0-.532.237l-1.068 2.915a.411.411 0 0 0 .237.532l1.88.705.261-.688a.813.813 0 0 1 .74-.544zm.368-1.51a.347.347 0 1 1 .2.448.347.347 0 0 1-.205-.45zm-2.23 1.462a.347.347 0 1 1-.2-.448.346.346 0 0 1 .194.449zm.31-1.814a.347.347 0 1 1 .448-.2.347.347 0 0 1-.455.2zm.48.96a.347.347 0 1 1 .2.448.347.347 0 0 1-.205-.45z"
      }
    }), h("path", {
      attrs: {
        d: "M19.397 11.611l-2.912-1.067a.374.374 0 0 0-.157.001h-.029a.44.44 0 0 0-.108 0h-.041l-.08.059-.032.032a.403.403 0 0 0-.079.12l-1.068 2.915a.411.411 0 0 0 .237.532l2.915 1.068a.374.374 0 0 0 .157-.001h.029a.44.44 0 0 0 .108 0h.041l.08-.059.032-.032a.403.403 0 0 0 .079-.12l1.068-2.915a.411.411 0 0 0-.237-.532zm-3.05 1.936a.347.347 0 1 1 .023-.124.352.352 0 0 1-.023.126zm2.469-1.067a.347.347 0 1 1-.2-.448.347.347 0 0 1 .2.465z"
      }
    })]);
  }
};

var TableTennisIcon = {
  name: 'TableTennisIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-table-tennis"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.267 6.667c-1.179-7.083-5.653-7.2-8.944-4.933s-4.763 6.501 1.44 10.133L8.496 9.28z"
      }
    }), h("path", {
      attrs: {
        d: "M11.2 11.157a13.05 13.05 0 0 0 1.053-3.228l-3.187 2.108-3.2 2.192c.75.148 1.612.232 2.494.232.342 0 .682-.013 1.018-.038s.889 1.603 1.411 2.472a1.329 1.329 0 1 0 2.174-1.506z"
      }
    }), h("path", {
      attrs: {
        d: "M15.52 2.053a1.627 1.627 0 1 1-3.254 0 1.627 1.627 0 0 1 3.254 0z"
      }
    })]);
  }
};

var TabletIcon = {
  name: 'TabletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tablet"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    })]);
  }
};

var TagIcon = {
  name: 'TagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "7.01",
        y2: "7"
      }
    })]);
  }
};

var TargetIcon = {
  name: 'TargetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-target"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "6"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    })]);
  }
};

var Taxi2Icon = {
  name: 'Taxi2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-taxi-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.035 11.36h-.267V8.581l-1.147-1.483s-.624-2.224-.821-3.013-.64-1.099-1.189-1.099h-.88V1.839a.672.672 0 0 0-.672-.672H5.942a.672.672 0 0 0-.672.672v1.147h-.88c-.533 0-1.003.309-1.195 1.099s-.811 3.013-.811 3.013L1.232 8.581v2.779H.965a.283.283 0 0 0-.283.283V12.8c0 .156.127.283.283.283h1.328v1.168c0 .321.26.581.581.581h.859a.58.58 0 0 0 .581-.581v-1.152h7.392v1.152c0 .314.248.569.559.581h.854a.58.58 0 0 0 .581-.581v-1.152h1.328a.283.283 0 0 0 .283-.283v-1.173a.283.283 0 0 0-.277-.283zm-10.288-.693V9.424h6.555v1.243zm8.304-1.392a.741.741 0 1 1-.741.741c.012-.4.339-.72.741-.72zm-8.72-5.542h7.339l.981 3.349H3.355zM2.949 9.296a.741.741 0 1 1 0 1.483.741.741 0 0 1 0-1.483z"
      }
    })]);
  }
};

var TaxiIcon = {
  name: 'TaxiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-taxi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11.056 3.733h2.315l-.405-1.264a.652.652 0 0 0-.603-.405H8.448a.651.651 0 0 0-.601.401l-.38 1.268h3.616z"
      }
    }), h("path", {
      attrs: {
        d: "M16.944 7.765a7.013 7.013 0 0 0-.824-.285c-.143-.036-.213-.097-.247-.177l-1.206-2.717a.728.728 0 0 0-.628-.411H6.64a1.032 1.032 0 0 0-.681.382L3.941 7.332a.286.286 0 0 1-.207.133 7.27 7.27 0 0 0-2.471.702c-.784.445-1.152 2.648-1.269 3.522a.3.3 0 0 0 .297.336h2.103a2.4 2.4 0 0 1 4.8 0h3.792a2.4 2.4 0 0 1 4.8 0h.681a.3.3 0 0 0 .179-.059l.869-.645a.302.302 0 0 0 .123-.24V8.836a1.014 1.014 0 0 0-.686-1.07zm-7.035-.298a.24.24 0 0 1-.24.24H5.594a.24.24 0 0 1-.187-.39l1.477-2.101a.242.242 0 0 1 .187-.091h2.597a.24.24 0 0 1 .24.24zm4.315.24H11.2a.24.24 0 0 1-.24-.24V5.334a.24.24 0 0 1 .239-.219h2.3a.24.24 0 0 1 .223.158l.737 2.103a.24.24 0 0 1-.226.32h-.009z"
      }
    }), h("path", {
      attrs: {
        d: "M15.04 11.435a1.82 1.82 0 0 0-3.494.71c.002.311.083.603.223.857a1.813 1.813 0 0 0 3.265-1.577zm-.917.709a.763.763 0 0 1-.763.763.801.801 0 0 1-.766-.827c0-.023.001-.045.003-.067v.003a.747.747 0 0 1 1.27-.406.754.754 0 0 1 .197.401l.001.004a.625.625 0 0 1 0 .131z"
      }
    }), h("path", {
      attrs: {
        d: "M6.459 11.435a1.82 1.82 0 0 0-3.494.71c.002.322.089.623.239.883a1.815 1.815 0 1 0 3.249-1.619zm-.912.709a.763.763 0 0 1-.746.757h-.06a.76.76 0 0 1-.699-.746.625.625 0 0 1 0-.131v.003a.742.742 0 0 1 1.472-.004v.004a.625.625 0 0 1 0 .131z"
      }
    })]);
  }
};

var TerminalIcon = {
  name: 'TerminalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-terminal"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 17 10 11 4 5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "20",
        y2: "19"
      }
    })]);
  }
};

var TermsIcon = {
  name: 'TermsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-terms"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.029 4.731c-.886-2.635-3.333-4.5-6.216-4.5A6.544 6.544 0 0 0 4.584 12.93c1.126 1.716 3.001 2.829 5.136 2.829a6.01 6.01 0 0 0 3.332-11.015zm-6.218 7.536h-.027a5.483 5.483 0 1 1 5.483-5.489c0 3.02-2.439 5.47-5.454 5.488z"
      }
    }), h("path", {
      attrs: {
        d: "M6.811 2.784a.667.667 0 0 0-.667.667v2.667H4.043a.667.667 0 1 0 0 1.334h2.768a.667.667 0 0 0 .656-.667V3.451a.667.667 0 0 0-.655-.667z"
      }
    })]);
  }
};

var TerraceIcon = {
  name: 'TerraceIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-terrace"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.867 5.781C13.686.576 8 .832 8 .832S2.315.576.133 5.781h15.733z"
      }
    }), h("path", {
      attrs: {
        d: "M.133 6.171l.432.896h4.576l.405-.896H.133z"
      }
    }), h("path", {
      attrs: {
        d: "M5.547 6.171l.405.896h4.347l.411-.896H5.547z"
      }
    }), h("path", {
      attrs: {
        d: "M10.709 6.171l.405.896h4.347l.405-.896h-5.157z"
      }
    }), h("path", {
      attrs: {
        d: "M8.656.533S8.315 0 8 0s-.656.533-.656.533h1.317z"
      }
    }), h("path", {
      attrs: {
        d: "M14.208 10.283h-.8a.118.118 0 0 0-.101.063l-.87 1.761H9.93l-.592 1.227H3.199a.229.229 0 0 0-.229.229v.891c0 .127.103.229.229.229h.811l-.533 1.12a.117.117 0 0 0 .107.165h.807a.118.118 0 0 0 .104-.063l.582-1.217h2.485v.843a.443.443 0 0 0 .886 0v-.832h3.104l.581 1.216c.02.038.059.064.105.064h.829a.117.117 0 0 0 .106-.166l-.661-1.413a.118.118 0 0 0-.026-.032v-.224l1.829-3.733.001-.011a.117.117 0 0 0-.107-.117zm-3.845 2.57h1.707l-.245.496h-1.691z"
      }
    }), h("path", {
      attrs: {
        d: "M7.557 7.611h.885v5.2h-.885v-5.2z"
      }
    })]);
  }
};

var ThermometerIcon = {
  name: 'ThermometerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thermometer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
      }
    })]);
  }
};

var ThumbsDownIcon = {
  name: 'ThumbsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-down"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
      }
    })]);
  }
};

var ThumbsUpIcon = {
  name: 'ThumbsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-up"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      }
    })]);
  }
};

var Tick2Icon = {
  name: 'Tick2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tick-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.88 5.333a1.068 1.068 0 0 0-1.486-.312L6.363 8.64 4.8 7.045a1.067 1.067 0 0 0-1.525 1.49l2.132 2.25a1.064 1.064 0 0 0 1.364.157l5.777-4.104a1.067 1.067 0 0 0 .328-1.508z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    })]);
  }
};

var TickIcon = {
  name: 'TickIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tick"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12.843 12.208c0 .736-.597 1.333-1.333 1.333H3.089a1.333 1.333 0 0 1-1.333-1.333V3.792c0-.736.597-1.333 1.333-1.333h8.421a1.33 1.33 0 0 1 1.106.593l.04-.022c.27-.18.591-.308.936-.361a2.354 2.354 0 0 0-2.082-1.26H3.088a2.4 2.4 0 0 0-2.4 2.4v8.4a2.4 2.4 0 0 0 2.4 2.4h8.421a2.4 2.4 0 0 0 2.4-2.4V8.001l-1.067.757z"
      }
    }), h("path", {
      attrs: {
        d: "M15.099 4.267a1.363 1.363 0 0 0-.197-.234l-.07-.059a1.176 1.176 0 0 0-.165-.119l-.091-.051a1.132 1.132 0 0 0-.199-.067l-.084-.002a1.278 1.278 0 0 0-.287-.037h-.044c-.254.005-.49.082-.688.211l-.432.312-5.755 4.123-.944-.987-.944-.992a1.297 1.297 0 0 0-.204-.173l-.084-.046a1.263 1.263 0 0 0-.142-.082l-.109-.035-.144-.043h-.501l-.149.043-.091.027a1.251 1.251 0 0 0-.16.083l-.069.034a1.318 1.318 0 0 0-.53 1.609c.062.163.157.31.275.434l2.666 2.767c.239.25.576.405.948.405h.007c.176-.005.342-.043.493-.11a1.21 1.21 0 0 0 .227-.107l7.098-5.037a1.318 1.318 0 0 0 .365-1.871z"
      }
    })]);
  }
};

var ToggleLeftIcon = {
  name: 'ToggleLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-left"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "8",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var ToggleRightIcon = {
  name: 'ToggleRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-right"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "16",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var ToolIcon = {
  name: 'ToolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    })]);
  }
};

var Tour2Icon = {
  name: 'Tour2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tour-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.576 11.525c0-1.909-4.048-2.907-8.043-2.907S.49 9.599.49 11.525c0 1.643 2.971 2.523 5.755 2.795l.107-1.067c-3.125-.309-4.8-1.205-4.8-1.733 0-.624 2.464-1.84 6.976-1.84s6.976 1.216 6.976 1.84-1.936 1.573-5.52 1.813l.757-.651a.532.532 0 0 0-.361-.925.529.529 0 0 0-.338.121l-1.855 1.599v.032h-.032a.486.486 0 0 0-.031.056.51.51 0 0 0 0 .586.41.41 0 0 0 .032.059l.031-.002v.032l1.856 1.6a.533.533 0 0 0 .699-.805l-.784-.635c3.477-.219 6.619-1.195 6.619-2.875z"
      }
    }), h("path", {
      attrs: {
        d: "M13.819 0H3.196a.785.785 0 0 0-.741.528l-.791 2.39c-.071.21-.112.451-.112.702v3.389h1.771v-.053a1.7 1.7 0 1 1 3.402 0v.053h4.203v-.053a1.7 1.7 0 1 1 3.402 0v.053h1.339V.572a.57.57 0 0 0-.571-.571h-.017zM4.293 4.651a.203.203 0 0 1-.203.203H2.965a.203.203 0 0 1-.203-.203V3.595c0-.141.023-.277.067-.404l.653-2.018a.204.204 0 0 1 .198-.106h.415c.112 0 .203.091.203.203zm3.59-1.563a.1.1 0 0 1-.101.101H5.451l-.016.001a.1.1 0 0 1-.101-.101V1.163a.101.101 0 0 1 .118-.096h2.33a.1.1 0 0 1 .101.101zm3.466 0a.1.1 0 0 1-.101.101H8.837a.1.1 0 0 1-.101-.101V1.163a.101.101 0 0 1 .101-.096h2.416a.1.1 0 0 1 .101.101zm3.254-1.067v.976a.203.203 0 0 1-.203.203h-1.867a.203.203 0 0 1-.203-.203V1.258a.203.203 0 0 1 .202-.192h1.835c.13 0 .235.105.235.235z"
      }
    }), h("path", {
      attrs: {
        d: "M5.019 5.701a1.253 1.253 0 1 0 1.253 1.253v-.022a1.253 1.253 0 0 0-1.253-1.231zm0 1.782a.533.533 0 1 1 .533-.533.533.533 0 0 1-.533.517z"
      }
    }), h("path", {
      attrs: {
        d: "M12.613 5.701a1.253 1.253 0 1 0 1.253 1.253v-.022a1.253 1.253 0 0 0-1.253-1.231zm0 1.782a.533.533 0 1 1 .533-.533.533.533 0 0 1-.533.517z"
      }
    })]);
  }
};

var Tour3Icon = {
  name: 'Tour3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tour-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.576 11.525c0-1.909-4.048-2.907-8.043-2.907S.49 9.599.49 11.525c0 1.643 2.971 2.523 5.755 2.795l.107-1.067c-3.125-.309-4.8-1.205-4.8-1.733 0-.624 2.464-1.84 6.976-1.84s6.976 1.216 6.976 1.84-1.936 1.573-5.52 1.813l.757-.651a.532.532 0 0 0-.361-.925.529.529 0 0 0-.338.121l-1.855 1.599v.032h-.032a.486.486 0 0 0-.031.056.51.51 0 0 0 0 .586.41.41 0 0 0 .032.059l.031-.002v.032l1.856 1.6a.533.533 0 0 0 .699-.805l-.784-.635c3.477-.219 6.619-1.195 6.619-2.875z"
      }
    }), h("path", {
      attrs: {
        d: "M14.832 4.635H1.307a.352.352 0 0 0-.293.535l1.722 2.569a.352.352 0 0 0 .291.155H14.4a.352.352 0 0 0 .341-.264l.747-3.01z"
      }
    }), h("path", {
      attrs: {
        d: "M3.579 4.101H14.4a.347.347 0 0 0 .335-.424l-.176-.808a.347.347 0 0 0-.336-.272h-.536a.347.347 0 0 1-.327-.232l-.342-1.032a.348.348 0 0 0-.33-.267H7.589l.288-1.067h-.656a.384.384 0 0 0-.314.169l-.678.897H5.098a.345.345 0 0 0-.298.18L3.29 3.567a.347.347 0 0 0 .287.534zM5.2 1.6h7.355l.299.901c.12.353.448.603.835.603h.391l.096.437H3.925z"
      }
    }), h("path", {
      attrs: {
        d: "M11.621.064H9.712l-.176.725h2.085V.064z"
      }
    }), h("path", {
      attrs: {
        d: "M5.856 2.219h.816v.816h-.816v-.816z"
      }
    }), h("path", {
      attrs: {
        d: "M7.536 2.219h.816v.816h-.816v-.816z"
      }
    }), h("path", {
      attrs: {
        d: "M9.216 2.219h.816v.816h-.816v-.816z"
      }
    }), h("path", {
      attrs: {
        d: "M10.891 2.219h.816v.816h-.816v-.816z"
      }
    })]);
  }
};

var TourDuration2Icon = {
  name: 'TourDuration2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tour-duration-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.667 8V4.677a.667.667 0 1 0-1.334 0v2.667H5.232a.667.667 0 1 0 0 1.334H8a.667.667 0 0 0 .667-.667V8z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M8.475 2.528a.475.475 0 1 1-.95 0 .475.475 0 0 1 .95 0z"
      }
    }), h("path", {
      attrs: {
        d: "M8.475 13.472a.475.475 0 1 1-.95 0 .475.475 0 0 1 .95 0z"
      }
    }), h("path", {
      attrs: {
        d: "M4.469 4.469a.48.48 0 0 0 0-.678.478.478 0 1 0-.678.678.489.489 0 0 0 .678 0z"
      }
    }), h("path", {
      attrs: {
        d: "M11.872 11.392a.475.475 0 1 0 .002 0h-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M3.003 8a.475.475 0 1 1-.95 0 .475.475 0 0 1 .95 0z"
      }
    }), h("path", {
      attrs: {
        d: "M13.947 8a.475.475 0 1 1-.95 0 .475.475 0 0 1 .95 0z"
      }
    }), h("path", {
      attrs: {
        d: "M4.128 11.392h-.001a.474.474 0 1 0 .004.947.489.489 0 0 0 .339-.136.48.48 0 0 0 0-.677.47.47 0 0 0-.33-.133h-.012z"
      }
    }), h("path", {
      attrs: {
        d: "M12.208 4.469a.474.474 0 1 0-.677-.665.474.474 0 0 0 .677.665z"
      }
    })]);
  }
};

var TourDurationIcon = {
  name: 'TourDurationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tour-duration"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M7.397 3.781v4.005H4.549a.8.8 0 1 0 0 1.6h3.648a.8.8 0 0 0 .8-.8v-4.8a.8.8 0 1 0-1.6 0z"
      }
    }), h("path", {
      attrs: {
        d: "M8 .08h-.021a7.92 7.92 0 1 0 2.604 15.402l.046-1.156a6.747 6.747 0 0 1-2.647.531c-3.794 0-6.869-3.075-6.869-6.869s3.075-6.869 6.869-6.869a6.869 6.869 0 0 1 6.053 10.119l-1.769-1.103-.283 3.403-.112 1.344c2.413-1.387 4.012-3.949 4.012-6.885A7.916 7.916 0 0 0 8.001.082z"
      }
    })]);
  }
};

var TourIcon = {
  name: 'TourIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tour"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.576 11.525c0-1.909-4.048-2.907-8.043-2.907S.49 9.599.49 11.525c0 1.643 2.971 2.523 5.755 2.795l.107-1.067c-3.125-.309-4.8-1.205-4.8-1.733 0-.624 2.464-1.84 6.976-1.84s6.976 1.216 6.976 1.84-1.936 1.573-5.52 1.813l.757-.651a.532.532 0 0 0-.361-.925.529.529 0 0 0-.338.121l-1.855 1.599v.032h-.032a.486.486 0 0 0-.031.056.51.51 0 0 0 0 .586.41.41 0 0 0 .032.059l.031-.002v.032l1.856 1.6a.533.533 0 0 0 .699-.805l-.784-.635c3.477-.219 6.619-1.195 6.619-2.875z"
      }
    }), h("path", {
      attrs: {
        d: "M16.24 2.709a1.48 1.48 0 0 0-1.304-.901l-.063-.001a1.52 1.52 0 0 0-.484.079l-3.621 1.181L6.576.288a.277.277 0 0 0-.138-.043.276.276 0 0 0-.103 0L4.737.778a.273.273 0 0 0-.132.422l1.797 2.383.533.736-2.72.891a.843.843 0 0 1-.272.044l-.05-.001a.88.88 0 0 1-.689-.391l-.178-.27a.597.597 0 0 0-.457-.267H2.45l-1.381.24a.39.39 0 0 0-.271.583l1.338 2.318a1.847 1.847 0 0 0 2.147.807l11.059-3.612a1.474 1.474 0 0 0 .898-1.957z"
      }
    })]);
  }
};

var Train2Icon = {
  name: 'Train2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-train-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.029.475A22.867 22.867 0 0 0 7.982 0c-.079-.002-.192-.002-.305-.002-1.666 0-3.292.174-4.86.504-.529.127-1.031.729-1.031 1.447v10.58c0 .339.275.613.613.613h1.237l-1.152 2.859h1.573l.576-1.429h6.736l.571 1.429h1.568l-1.152-2.859h1.243a.613.613 0 0 0 .613-.613V1.95A1.51 1.51 0 0 0 13.038.478zm-8.565.794c0-.18.146-.325.325-.325h6.41c.18 0 .325.146.325.325v.251c0 .18-.146.325-.325.325h-6.4a.325.325 0 0 1-.325-.325zM3.141 3.275a.614.614 0 0 1 .591-.608h8.534c.339 0 .613.275.613.613v4.661a.614.614 0 0 1-.613.592H3.733a.613.613 0 0 1-.613-.613zm-.368 8.181a.752.752 0 1 1 1.505 0 .752.752 0 0 1-1.505 0zm8.363 2.533H4.864l.341-.843h5.589zm1.339-1.781a.752.752 0 1 1 0-1.505.752.752 0 0 1 0 1.505z"
      }
    })]);
  }
};

var TrainIcon = {
  name: 'TrainIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-train"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18.667 5.189c0-.563-.456-1.019-1.019-1.019H1.019C.456 4.17 0 4.626 0 5.189v7.28h1.216a1.307 1.307 0 1 0 2.383.99l.066-.009a1.308 1.308 0 0 0 2.553.008l6.279-.009a1.308 1.308 0 0 0 2.553.008l.066-.009a1.307 1.307 0 1 0 2.381-.987l1.171.005zm-3.734.838c0-.159.129-.288.288-.288h1.739c.159 0 .288.129.288.288v1.739a.288.288 0 0 1-.288.288h-1.723a.288.288 0 0 1-.288-.288zm-.709 6.848h-.891a.535.535 0 0 1 .905-.002zm-1.728 0H6.213a1.27 1.27 0 0 0-.174-.41l6.632.005a1.302 1.302 0 0 0-.169.396zm-7.557-.256a.534.534 0 0 1 .452.254l-.905.002a.534.534 0 0 1 .453-.256zm6.624-6.592c0-.159.129-.288.288-.288h1.739c.159 0 .288.129.288.288v1.739a.288.288 0 0 1-.288.288h-1.739a.288.288 0 0 1-.288-.288zm-3.387 0c0-.159.129-.288.288-.288h1.739c.159 0 .288.129.288.288v1.739a.288.288 0 0 1-.288.288H8.464a.288.288 0 0 1-.288-.288zm-3.376 0c0-.159.129-.288.288-.288h1.739c.159 0 .288.129.288.288v1.739a.288.288 0 0 1-.288.288H5.078a.289.289 0 0 1-.277-.288zm-3.387 0c0-.159.129-.288.288-.288h1.744c.159 0 .288.129.288.288v3.611a.288.288 0 0 1-.288.288H1.69a.288.288 0 0 1-.288-.288zm2.422 6.442a1.302 1.302 0 0 0-.169.396l-.071.009a1.27 1.27 0 0 0-.174-.41zM2.32 13.717a.55.55 0 0 1 0-1.098.534.534 0 0 1 .452.254l-.452.002a.288.288 0 0 0 0 .576h.459a.535.535 0 0 1-.458.267zm2.619 0a.532.532 0 0 1-.457-.264l.921-.003a.534.534 0 0 1-.462.267h-.002zm8.832 0a.532.532 0 0 1-.457-.264l.921-.003a.535.535 0 0 1-.459.267zm2.618 0a.532.532 0 0 1-.457-.264l.457-.003a.288.288 0 0 0 0-.576h-.453a.534.534 0 0 1 .453-.256.549.549 0 1 1 0 1.098zm-1.274-.842h-.075a1.27 1.27 0 0 0-.174-.41l.414.005a1.265 1.265 0 0 0-.158.397z"
      }
    }), h("path", {
      attrs: {
        d: "M2.843 2.848l.037.037a.259.259 0 0 0 .037.037l1.312.886a.288.288 0 0 0 .321 0l1.316-.879a.297.297 0 0 0 .069-.068l.001-.001a.296.296 0 0 0 .037-.083v-.002a.324.324 0 0 0-.001-.114v.002a.268.268 0 0 0-.038-.086l.001.001-.037-.037a.254.254 0 0 0-.033-.087l-1.317-.879a.29.29 0 0 0-.327.001l-1.3.879a.278.278 0 0 0-.042.042l-.038.038a.296.296 0 0 0-.037.083v.002a.278.278 0 0 0 0 .114v-.002a.293.293 0 0 0 .038.119zm1.546-.715l.789.533-.789.533-.789-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M12.8 2.848l.037.037a.259.259 0 0 0 .037.037l1.307.88a.288.288 0 0 0 .321 0l1.306-.879a.297.297 0 0 0 .069-.068l.001-.001a.296.296 0 0 0 .037-.083v-.002a.278.278 0 0 0-.001-.114v.002a.268.268 0 0 0-.038-.086l.001.001-.037-.037a.278.278 0 0 0-.042-.042l-1.313-.918a.29.29 0 0 0-.327.001l-1.3.879a.278.278 0 0 0-.042.042l-.016.033a.296.296 0 0 0-.037.083v.002a.278.278 0 0 0 .001.114v-.002a.286.286 0 0 0 .038.124zm1.525-.715l.789.533-.789.533-.789-.533z"
      }
    })]);
  }
};

var TransferIcon = {
  name: 'TransferIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-transfer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.621 6.256l-4.176-4.528a.245.245 0 0 0-.421.166v1.307c0 .135-.11.245-.245.245H.246a.245.245 0 0 0-.245.245v2.71c0 .136.11.245.245.245h15.221a.245.245 0 0 0 .154-.39z"
      }
    }), h("path", {
      attrs: {
        d: "M.379 9.744l4.176 4.528a.245.245 0 0 0 .421-.166v-1.307c0-.136.11-.245.245-.245h10.533c.136 0 .245-.11.245-.245V9.6a.245.245 0 0 0-.245-.245H.533a.245.245 0 0 0-.154.39z"
      }
    })]);
  }
};

var Trash2Icon = {
  name: 'Trash2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
      }
    })]);
  }
};

var TrashIcon = {
  name: 'TrashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    })]);
  }
};

var TrelloIcon = {
  name: 'TrelloIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trello"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "7",
        y: "7",
        width: "3",
        height: "9"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "7",
        width: "3",
        height: "5"
      }
    })]);
  }
};

var TrendingDownIcon = {
  name: 'TrendingDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 18 13.5 8.5 8.5 13.5 1 6"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 23 18 23 12"
      }
    })]);
  }
};

var TrendingUpIcon = {
  name: 'TrendingUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 6 13.5 15.5 8.5 10.5 1 18"
      }
    }), h("polyline", {
      attrs: {
        points: "17 6 23 6 23 12"
      }
    })]);
  }
};

var TriangleIcon = {
  name: 'TriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    })]);
  }
};

var TruckIcon = {
  name: 'TruckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-truck"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "15",
        height: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "16 8 20 8 23 11 23 16 16 16 16 8"
      }
    }), h("circle", {
      attrs: {
        cx: "5.5",
        cy: "18.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "18.5",
        r: "2.5"
      }
    })]);
  }
};

var TubeIcon = {
  name: 'TubeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tube"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.05 8.15c0 3.176-2.619 5.75-5.85 5.75s-5.85-2.574-5.85-5.75S4.969 2.4 8.2 2.4s5.85 2.574 5.85 5.75z"
      }
    })]);
  }
};

var TurkeyPackageTourIcon = {
  name: 'TurkeyPackageTourIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-turkey-package-tour"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.429 1.781h-2.053l-.331.603h2.709l-.325-.603z"
      }
    }), h("path", {
      attrs: {
        d: "M17.6 4.757a.531.531 0 0 0-.242-.644l-.472-.252V2.709l-.992-1.568h-.72l-.139-.907a.305.305 0 0 0-.296-.235h-.67a.304.304 0 0 0-.298.254l-.139.908h-.72l-.987 1.547v1.157l-.469.251a.533.533 0 0 0-.254.644l.031.076h1.488c.424 0 .768.344.768.768v1.541h.779V2.606L12.3 3.673V2.82l.821-1.307h2.56l.816 1.301v.848l-1.968-1.067v4.539h2.176z"
      }
    }), h("path", {
      attrs: {
        d: "M4.832 4.843h1.067V1.109a.72.72 0 0 0-.561-.702A10.928 10.928 0 0 0 3.099.181L2.93.182 2.768.181C1.977.181 1.205.263.46.419c-.237.072-.461.351-.461.683v5.342c0 .162.131.293.293.293h.405v.272a.353.353 0 0 0 .704 0v-.272h2.667V5.612c0-.422.341-.765.762-.768zM1.253.784c0-.085.069-.155.155-.155h3.061c.085 0 .155.069.155.155v.128a.155.155 0 0 1-.155.155H1.408a.155.155 0 0 1-.155-.155zm-.634.96c0-.162.131-.293.293-.293h4.053c.162 0 .293.131.293.293v2.229a.293.293 0 0 1-.293.293H.912a.293.293 0 0 1-.293-.293zm.405 4.267a.405.405 0 1 1 .405-.405v.005a.405.405 0 0 1-.4.405zm2.907.389H1.947v-.533h1.984z"
      }
    }), h("path", {
      attrs: {
        d: "M6.597 12.848a7.145 7.145 0 0 0-.195 1.133l-.002.03a1.153 1.153 0 0 1-.207-.528L.534 12.72a.24.24 0 0 0-.271.08.172.172 0 0 0 .031.23c.321.301.71.533 1.142.672l1.691.443-.048.043a.897.897 0 0 0-.298.566l-.002.058.002.056v-.002c0 .46.345.84.79.895h.112c.46 0 .84-.345.895-.79l.002-.058-.002-.056a.871.871 0 0 0-.077-.36l2.402.635a2.3 2.3 0 0 0 3.623.005l2.404-.634a.88.88 0 0 0-.075.357l-.002.053.002.056a.902.902 0 0 0 .895.792h.118a.903.903 0 0 0 .795-.895v-.001l.002-.053-.002-.056a.897.897 0 0 0-.298-.567l-.049-.043 1.669-.437a3.026 3.026 0 0 0 1.164-.679.167.167 0 0 0 .061-.13.168.168 0 0 0-.031-.098.24.24 0 0 0-.247-.079l-5.732.762a1.171 1.171 0 0 1-.208.534 7.641 7.641 0 0 0-.203-1.215 5.047 5.047 0 0 0-.482-1.189l-3.224.026a4.927 4.927 0 0 0-.477 1.175zm-2.986 2.464zm.458-.379a.406.406 0 0 1-.4.357h-.053a.406.406 0 0 1-.357-.4l-.001-.024.001-.025a.406.406 0 0 1 .4-.356h.075a.406.406 0 0 1 .357.4.393.393 0 0 1-.022.05zm9.376-.314a.394.394 0 0 1 .254-.133h.05a.406.406 0 0 1 .4.355l.001.026-.001.025a.405.405 0 0 1-.355.399h-.058a.405.405 0 0 1-.402-.355l-.001-.026.001-.025v-.015c0-.105.041-.201.107-.273zM8.88 11.733h.688a.421.421 0 0 1 0 .842H8.88zm-1.04 0h.693v.843H7.84a.421.421 0 0 1 0-.842z"
      }
    }), h("path", {
      attrs: {
        d: "M12.731 5.611H4.832v5.253h7.899zM6.304 8.24a1.34 1.34 0 0 1 2.525-.621 1.07 1.07 0 0 0-1.936.621 1.067 1.067 0 0 0 1.937.617 1.338 1.338 0 0 1-2.526-.617zm3.472.357l-.363-.064-.261.267-.053-.368-.331-.165.331-.165.053-.368.256.267.363-.064-.171.331z"
      }
    }), h("path", {
      attrs: {
        d: "M9.851 3.147l-.949-1.099a.384.384 0 1 0-.581.502l.431.501H7.685a.384.384 0 0 0 0 .768h1.067l-.432.501a.382.382 0 0 0 0 .534h.565l.965-1.12a.472.472 0 0 0-.001-.587z"
      }
    }), h("path", {
      attrs: {
        d: "M3.829 8.763l-1.413-.155a.454.454 0 0 0-.533.344l-.363 1.384a.38.38 0 0 0 .269.468l.099.001h.002a.383.383 0 0 0 .371-.285l.166-.643.635.896a.385.385 0 1 0 .633-.438l-.607-.879.645.075h.053a.378.378 0 0 0 .277-.128v-.534a.38.38 0 0 0-.233-.107z"
      }
    }), h("path", {
      attrs: {
        d: "M15.808 9.925l-.651.117.533-.923a.385.385 0 0 0-.661-.396l-.534.924-.208-.629a.385.385 0 1 0-.73.243l.421 1.272a.535.535 0 0 0 .649.378l-.004.001 1.317-.245a.385.385 0 1 0-.135-.757z"
      }
    })]);
  }
};

var TurkishBathIcon = {
  name: 'TurkishBathIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-turkish-bath"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.899 8.709H5.942l-2.741.581v.843l2.741.533h4.107l2.725-.533V9.29l-2.725-.571z"
      }
    }), h("path", {
      attrs: {
        d: "M9.888 11.109H6.101a.79.79 0 0 1-.18 0l-2.722-.586v.587l1.397.293v3.381c0 .459 1.515.827 3.381.827s3.381-.373 3.381-.827v-3.387l1.397-.293v-.587l-2.715.565a.764.764 0 0 1-.152.026z"
      }
    }), h("path", {
      attrs: {
        d: "M-.005 7.051h1.403V16H-.005V7.051z"
      }
    }), h("path", {
      attrs: {
        d: "M9.925 8.16l1.403.229v-3.12H9.925V8.16z"
      }
    }), h("path", {
      attrs: {
        d: "M11.781 4.267a.533.533 0 0 0-.533-.533h-1.115a.533.533 0 1 0 0 1.066h1.136a.534.534 0 0 0 .512-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M4.661 8.389l1.403-.229V5.269H4.661v3.12z"
      }
    }), h("path", {
      attrs: {
        d: "M6.4 4.267a.533.533 0 0 0-.533-.533H4.742a.533.533 0 1 0 0 1.066h1.125a.533.533 0 0 0 .533-.533z"
      }
    }), h("path", {
      attrs: {
        d: "M14.603 7.051h1.403V16h-1.403V7.051z"
      }
    }), h("path", {
      attrs: {
        d: "M14.789 5.536a.533.533 0 1 0 0 1.066H16V5.535z"
      }
    }), h("path", {
      attrs: {
        d: "M1.211 5.536H0v1.067h1.211a.533.533 0 1 0 0-1.066z"
      }
    }), h("path", {
      attrs: {
        d: "M14.821 4.859H16V0H0v4.859h1.173s-.149-2.107 1.205-2.608 2.208.949 2.208.949h1.403S6.49.997 8 .997 10 3.2 10 3.2h1.403s.816-1.461 2.208-.944 1.211 2.603 1.211 2.603z"
      }
    })]);
  }
};

var TurkishGulletIcon = {
  name: 'TurkishGulletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-turkish-gullet"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.24 15.109c-.949 0-1.024.533-1.952.533-.811 0-1.152-.533-2.133-.533s-1.221.565-2.107.565-1.344-.571-2.293-.571-1.6.597-2.315.597-1.147-.597-2.347-.597c-1.312 0-1.6.891-2.485.891h17.845c-.976.005-.976-.885-2.213-.885z"
      }
    }), h("path", {
      attrs: {
        d: "M7.093 14.443c1.2 0 1.632.597 2.347.597s1.365-.597 2.315-.597 1.344.571 2.293.571 1.067-.571 2.085-.571 1.344.533 2.133.533.987-.421 1.712-.501l.293-3.04-5.067-.363.096-1.136 3.733.32-3.632-7.403-.688 8.171-.789-.059-.416.88a312.121 312.121 0 0 1-6.48-.373l.112-1.371 6 .683L7.967 0 .863 9.6l5.765.437-.112 1.381c-3.579-.219-6.549-.469-6.549-.469v.453l2.576.533s.965 2.293 2.816 3.141a2.935 2.935 0 0 1 1.728-.635zm1.744-8.4l.315.325.448-.075-.213.4.213.405-.448-.08-.32.325-.064-.453-.405-.203.411-.203zm-3.504.624v-.018A1.643 1.643 0 0 1 8.438 5.9a1.318 1.318 0 1 0-1.075 2.081c.445 0 .838-.221 1.077-.559a1.641 1.641 0 0 1-3.107-.744v-.013z"
      }
    })]);
  }
};

var TvIcon = {
  name: 'TvIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tv"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "15",
        rx: "2",
        ry: "2"
      }
    }), h("polyline", {
      attrs: {
        points: "17 2 12 7 7 2"
      }
    })]);
  }
};

var TwinBedIcon = {
  name: 'TwinBedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twin-bed"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.7 6.95H1.25C.65 6.95.1 7.6.1 8.45v2.25c0 .1.1.25.2.25h7.4c.05 0 .1-.15.1-.25V8.45c-.05-.9-.5-1.5-1.1-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M7.75 8.95c0-.1-.05-.2-.15-.2H.2c-.05 0-.15.1-.15.2v1.75c0 .1.05.2.15.2h7.4c.05 0 .15-.1.15-.2V8.95z"
      }
    }), h("path", {
      attrs: {
        d: "M.1 11.3h7.7v.65H.1v-.65z"
      }
    }), h("path", {
      attrs: {
        d: "M6.75 13.2h.5c.05 0 .1-.15.1-.35v-.6H6.7v.6c-.05.2 0 .35.05.35z"
      }
    }), h("path", {
      attrs: {
        d: "M6.65 12.7c0 .05 0 .05 0 0l.7.05v-.55H6.7v.5z"
      }
    }), h("path", {
      attrs: {
        d: "M6.65 2.8H1c-.05 0-.15.05-.15.15V6.5H6.7V2.95c.05-.1 0-.15-.05-.15zM5.1 6.5H2.5c0-.6-.15-1.2-.15-1.2 0-.1.1-.2.2-.2 0 0 .65.15 1.25.15s1.2-.1 1.2-.1c.1 0 .2.1.2.2 0-.05-.1.55-.1 1.15z"
      }
    }), h("path", {
      attrs: {
        d: "M.6 13.2h.5c.05 0 .1-.15.1-.35v-.6H.55v.6c0 .2 0 .35.05.35z"
      }
    }), h("path", {
      attrs: {
        d: "M.55 12.7c0 .05 0 .05 0 0l.7.05v-.55h-.7v.5z"
      }
    }), h("path", {
      attrs: {
        d: "M14.85 6.95H9.4c-.6 0-1.15.65-1.15 1.5v2.25c0 .1.1.25.2.25h7.4c.05 0 .1-.15.1-.25V8.45c-.05-.9-.5-1.5-1.1-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M15.9 8.95c0-.1-.05-.2-.15-.2h-7.4c-.05 0-.15.1-.15.2v1.75c0 .1.05.2.15.2h7.4c.05 0 .15-.1.15-.2V8.95z"
      }
    }), h("path", {
      attrs: {
        d: "M8.25 11.3h7.7v.65h-7.7v-.65z"
      }
    }), h("path", {
      attrs: {
        d: "M14.9 13.2h.5c.05 0 .1-.15.1-.35v-.6h-.65v.6c-.05.2 0 .35.05.35z"
      }
    }), h("path", {
      attrs: {
        d: "M14.8 12.7c0 .05.05.05 0 0l.7.05v-.55h-.65v.5z"
      }
    }), h("path", {
      attrs: {
        d: "M14.8 2.8H9.2c-.05 0-.15.05-.15.15V6.5h5.85V2.95c0-.1-.05-.15-.1-.15zm-1.55 3.7h-2.6c0-.6-.15-1.2-.15-1.2 0-.1.1-.2.2-.2 0 0 .65.15 1.25.15s1.2-.1 1.2-.1c.1 0 .2.1.2.2.05-.05-.1.55-.1 1.15z"
      }
    }), h("path", {
      attrs: {
        d: "M8.8 13.2h.5c.05 0 .1-.15.1-.35v-.6h-.65v.6c-.05.2 0 .35.05.35z"
      }
    }), h("path", {
      attrs: {
        d: "M8.7 12.7c0 .05 0 .05 0 0l.7.05v-.55h-.65v.5z"
      }
    })]);
  }
};

var TwitchIcon = {
  name: 'TwitchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twitch"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
      }
    })]);
  }
};

var TwitterIcon = {
  name: 'TwitterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twitter"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      }
    })]);
  }
};

var TypeIcon = {
  name: 'TypeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-type"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 7 4 4 20 4 20 7"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "15",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }
    })]);
  }
};

var UmbrellaIcon = {
  name: 'UmbrellaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-umbrella"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
      }
    })]);
  }
};

var UnderlineIcon = {
  name: 'UnderlineIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-underline"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "20",
        y2: "21"
      }
    })]);
  }
};

var UnlockIcon = {
  name: 'UnlockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-unlock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 9.9-1"
      }
    })]);
  }
};

var UploadCloudIcon = {
  name: 'UploadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
      }
    }), h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    })]);
  }
};

var UploadIcon = {
  name: 'UploadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 8 12 3 7 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var UserCheckIcon = {
  name: 'UserCheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-check"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 11 19 13 23 9"
      }
    })]);
  }
};

var UserMinusIcon = {
  name: 'UserMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserPlusIcon = {
  name: 'UserPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "8",
        x2: "20",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserReview2Icon = {
  name: 'UserReview2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-review-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.76 4.427a3.072 3.072 0 1 1-6.143.001 3.072 3.072 0 0 1 6.143-.001z"
      }
    }), h("path", {
      attrs: {
        d: "M16.059 10.667v-.006a4.224 4.224 0 0 0-7.92-2.047c-.386-.024-.82-.049-1.26-.049l-.201.002a10.478 10.478 0 0 0-3.393.495c-.961.321-1.77 1.098-2.147 2.088-.414 1.281-.826 2.903-1.149 4.557l13.44.294c-.048-.235-.149-.736-.277-1.339a4.24 4.24 0 0 0 2.907-3.993zm-4.224 3.424a3.424 3.424 0 1 1 3.424-3.424 3.43 3.43 0 0 1-3.429 3.408z"
      }
    }), h("path", {
      attrs: {
        d: "M13.253 12.528l-.261-1.515 1.099-1.072-1.52-.219-.677-1.381-.683 1.381-1.52.219 1.099 1.072-.256 1.515 1.36-.715 1.36.715z"
      }
    })]);
  }
};

var UserReviewIcon = {
  name: 'UserReviewIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-review"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.032 4.725h-1.68v.832h1.68c.628 0 1.138.508 1.141 1.136v3.798a1.141 1.141 0 0 1-1.141 1.136h-.565a.533.533 0 0 0-.533.533v.752l-1.024-1.115a.533.533 0 0 0-.396-.176H7.468a1.142 1.142 0 0 1-1.136-1.136v-.192h-.827v.192c0 1.086.877 1.967 1.962 1.973h3.905l1.445 1.6a.531.531 0 0 0 .395.176h.001a.534.534 0 0 0 .538-.535v-1.241h.277c1.088 0 1.97-.88 1.973-1.968V6.692a1.973 1.973 0 0 0-1.968-1.968z"
      }
    }), h("path", {
      attrs: {
        d: "M10.891 9.221c.234-.154.417-.368.53-.62.037-.085.067-.174.087-.266.019-.092.028-.188.028-.285V3.2a1.43 1.43 0 0 0-1.429-1.429H1.43A1.43 1.43 0 0 0 .001 3.2v4.812c0 .098.01.193.028.285a1.437 1.437 0 0 0 .611.884c.212.141.463.227.733.238l.003 1.829a.214.214 0 0 0 .378.129l.864-1.12.635-.827h6.843a1.425 1.425 0 0 0 .801-.211zM2.747 6.4a.757.757 0 1 1 0-1.514.757.757 0 0 1 0 1.514zm3.045 0a.757.757 0 1 1 0-1.514.757.757 0 0 1 0 1.514zm3.045 0a.757.757 0 1 1 .762-.774v.017a.757.757 0 0 1-.757.757h-.006z"
      }
    })]);
  }
};

var UserXIcon = {
  name: 'UserXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-x"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "8",
        x2: "23",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "8",
        x2: "18",
        y2: "13"
      }
    })]);
  }
};

var UserIcon = {
  name: 'UserIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "7",
        r: "4"
      }
    })]);
  }
};

var UsersIcon = {
  name: 'UsersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-users"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "9",
        cy: "7",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      }
    }), h("path", {
      attrs: {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }
    })]);
  }
};

var VanIcon = {
  name: 'VanIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-van"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.827 2.448H4.742c-.472.005-.87.316-1.006.744L2.667 6.4S0 7.195 0 8.389v3.547h2.059v-.075a2.3 2.3 0 1 1 4.602 0v.075H11.2v-.075a2.3 2.3 0 1 1 4.602 0v.075h1.797V3.2a.768.768 0 0 0-.768-.752h-.006zM6.283 6.933c0 .15-.122.272-.272.272H4.145a.272.272 0 0 1-.272-.272v-.067c0-.19.031-.372.089-.542L4.849 3.6a.28.28 0 0 1 .261-.187h.901c.15 0 .272.122.272.272zm4.976 0a.277.277 0 0 1-.277.277H7.467a.277.277 0 0 1-.277-.277V3.69c0-.153.124-.277.277-.277h3.52c.153 0 .277.124.277.277zm5.274-2.208v2.208c0 .15-.122.272-.272.272H12.41a.272.272 0 0 1-.272-.272V3.685c0-.15.122-.272.272-.272h3.813a.32.32 0 0 1 .309.32z"
      }
    }), h("path", {
      attrs: {
        d: "M4.352 10.133a1.696 1.696 0 1 0 0 3.391 1.696 1.696 0 0 0 0-3.391zm0 2.406a.71.71 0 0 1 .005-1.418.71.71 0 0 1 .709.709l-.001.028v-.001a.71.71 0 0 1-.709.709H4.35z"
      }
    }), h("path", {
      attrs: {
        d: "M13.488 10.133a1.696 1.696 0 1 0 0 3.391 1.696 1.696 0 0 0 0-3.391zm0 2.406a.71.71 0 1 1 .709-.709l.001.027a.71.71 0 0 1-.709.709h-.001z"
      }
    })]);
  }
};

var VeganFoodIcon = {
  name: 'VeganFoodIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-vegan-food"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.357 8.688a2.165 2.165 0 0 0 2.752-1.054c.742.665.806 2.686.806 3.187s.891.384.891 0C8.854 7.072 3.654 3.2 3.654 3.2c1.72.878 3.15 2.099 4.244 3.583C9.057 6.314 9.1 5.13 8.625 4.25 7.196 1.53 2.134 1.066.796 1.381a.197.197 0 0 0-.112.32c1.114 1.53 1.312 6.202 3.674 6.986z"
      }
    }), h("path", {
      attrs: {
        d: "M10.24 8.192a8.373 8.373 0 0 1 2.945-2.501c-.992.737-1.874 1.633-2.595 2.652s.76 1.636 2.147 1.177c1.648-.533 1.792-3.808 2.565-4.875a.14.14 0 0 0-.074-.224c-.929-.214-4.47.106-5.484 1.984a1.21 1.21 0 0 0 .489 1.783z"
      }
    }), h("path", {
      attrs: {
        d: "M17.429 10.133c0-.747-.864-1.557-1.819-1.952l-.059.107c.576.32 1.264.837 1.264 1.477 0 1.36-3.2 2.821-8 2.821s-8-1.456-8-2.821c0-.64.688-1.157 1.264-1.477l-.059-.107C1.028 8.592.169 9.408.169 10.133c0 1.253 1.6 2.48 4.08 3.2l.117.533c.036.162.15.291.301.346.478.177 1.699.497 4.195.497s3.733-.325 4.192-.496a.475.475 0 0 0 .277-.344l.123-.536c2.416-.741 3.973-1.947 3.973-3.2z"
      }
    })]);
  }
};

var Video2Icon = {
  name: 'Video2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.189 2.635H.789a.81.81 0 0 0-.789.81v9.109a.81.81 0 0 0 .811.811h14.4a.81.81 0 0 0 .789-.81V3.446a.81.81 0 0 0-.811-.811zM2.496 12.123a.256.256 0 0 1-.256.256H1.216a.256.256 0 0 1-.256-.256v-1.024c0-.141.115-.256.256-.256H2.24c.141 0 .256.115.256.256zm0-2.411a.256.256 0 0 1-.256.256H1.216a.256.256 0 0 1-.256-.256V8.693c0-.141.115-.256.256-.256H2.24c.141 0 .256.115.256.256zm0-2.411a.256.256 0 0 1-.256.256H1.216a.256.256 0 0 1-.256-.256V6.282c0-.141.115-.256.256-.256H2.24c.141 0 .256.115.256.256zm0-2.41a.256.256 0 0 1-.256.256H1.216a.256.256 0 0 1-.256-.256V3.878c0-.141.115-.256.256-.256H2.24c.141 0 .256.115.256.256zm10.048 7.04a.449.449 0 0 1-.448.448H3.904a.449.449 0 0 1-.448-.448V4.07c0-.247.201-.448.448-.448h8.192c.247 0 .448.201.448.448zm2.496.197a.256.256 0 0 1-.256.256H13.76a.256.256 0 0 1-.256-.256v-1.029c0-.141.115-.256.256-.256h1.024c.141 0 .256.115.256.256zm0-2.411a.256.256 0 0 1-.256.256H13.76a.256.256 0 0 1-.256-.256V8.693c0-.141.115-.256.256-.256h1.024c.141 0 .256.115.256.256zm0-2.41a.256.256 0 0 1-.256.256H13.76a.256.256 0 0 1-.256-.256V6.283c0-.141.115-.256.256-.256h1.024c.141 0 .256.115.256.256zm0-2.411a.256.256 0 0 1-.256.256H13.76a.256.256 0 0 1-.256-.256V3.877c0-.141.115-.256.256-.256h1.024c.141 0 .256.115.256.256z"
      }
    }), h("path", {
      attrs: {
        d: "M8 5.179a2.821 2.821 0 1 0 0 5.642 2.821 2.821 0 0 0 0-5.642zm-.587 3.925V6.933L9.285 8z"
      }
    })]);
  }
};

var Video3Icon = {
  name: 'Video3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.867 4.8L12 5.659v-.965a.597.597 0 0 0-.597-.597h-1.067a2.133 2.133 0 1 0-2.243-.005l-2.428.005a2.133 2.133 0 1 0-2.243-.005l-1.095.005a.597.597 0 0 0-.597.597v4.373c0 .33.267.597.597.597h2.192v.469l.608.752-3.173 4.267a.437.437 0 0 0 .692.534l3.414-4.577h.379v4.315a.435.435 0 0 0 .87 0v-4.331h.379l3.413 4.576a.437.437 0 1 0 .693-.534l-3.173-4.266.608-.736v-.475h2.192a.597.597 0 0 0 .597-.592v-.987l1.851.864a.272.272 0 0 0 .389-.245V5.066l.001-.022a.272.272 0 0 0-.392-.244zM9.259 1.552h.011a.737.737 0 1 1-.736.736c0-.403.323-.73.725-.736zm-4.715 0a.737.737 0 1 1-.736.736c0-.406.33-.736.736-.736h.006zM3.077 5.744l-.001-.021c0-.215.174-.389.389-.389h5.067c.215 0 .389.174.389.389v.261a.389.389 0 0 1-.388.416H3.471a.389.389 0 0 1-.389-.389zm0 2.24v-.261c0-.215.174-.389.389-.389h2.469c.215 0 .389.174.389.389V8a.389.389 0 0 1-.389.389H3.466A.389.389 0 0 1 3.077 8z"
      }
    })]);
  }
};

var VideoOffIcon = {
  name: 'VideoOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var VideoIcon = {
  name: 'VideoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "23 7 16 12 23 17 23 7"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var VoicemailIcon = {
  name: 'VoicemailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-voicemail"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "5.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("line", {
      attrs: {
        x1: "5.5",
        y1: "16",
        x2: "18.5",
        y2: "16"
      }
    })]);
  }
};

var VolleyballIcon = {
  name: 'VolleyballIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volleyball"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.8 11.563a7.578 7.578 0 0 0 .882-3.571 7.66 7.66 0 0 0-2.705-5.849 8.715 8.715 0 0 0-2.606 1.993c2.572 1.545 4.304 4.271 4.429 7.41z"
      }
    }), h("path", {
      attrs: {
        d: "M12.011 1.435a7.515 7.515 0 0 0-2.49-.984l-.049.034C5.003 2.133 4.555 6.602 4.528 8.037a6.677 6.677 0 0 0 3.127-.485l-.044-.026c.091-.661.645-3.893 4.4-6.091z"
      }
    }), h("path", {
      attrs: {
        d: "M9.755 10.896a7.997 7.997 0 0 0-1.703-2.36 7.777 7.777 0 0 1-2.972.6A8.812 8.812 0 0 1 .299 7.639c.032.132.032.239.032.351v.005c0 .827.131 1.623.373 2.37 1.291 1.012 4.859 3.247 9.051.532z"
      }
    }), h("path", {
      attrs: {
        d: "M9.717 4.981a6.2 6.2 0 0 0-1.025 2.633c1.81 1.728 2.941 4.133 2.941 6.804 0 .121-.002.242-.007.362a8.2 8.2 0 0 0 2.012-1.58c.079-.41.121-.876.121-1.351 0-2.938-1.613-5.5-4.002-6.847z"
      }
    }), h("path", {
      attrs: {
        d: "M10.133 11.899a8.27 8.27 0 0 1-4.442 1.349 8.757 8.757 0 0 1-4.225-1.143c1.422 2.167 3.796 3.568 6.498 3.568.917 0 1.797-.162 2.612-.458-.038-.18-.029-.409-.029-.64 0-.956-.151-1.877-.431-2.739z"
      }
    }), h("path", {
      attrs: {
        d: "M3.472 7.872c.069-1.552.597-5.403 3.941-7.547A7.696 7.696 0 0 0 .489 6.392 7.324 7.324 0 0 0 3.416 7.86z"
      }
    })]);
  }
};

var Volume1Icon = {
  name: 'Volume1Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-1"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var Volume2Icon = {
  name: 'Volume2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var VolumeXIcon = {
  name: 'VolumeXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-x"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "9",
        x2: "17",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "9",
        x2: "23",
        y2: "15"
      }
    })]);
  }
};

var VolumeIcon = {
  name: 'VolumeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    })]);
  }
};

var WakeBoardIcon = {
  name: 'WakeBoardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wake-board"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.8 2.65c.25.45.9.65 1.35.35.45-.25.65-.9.35-1.35-.25-.45-.9-.65-1.35-.35-.45.25-.6.85-.35 1.35z"
      }
    }), h("path", {
      attrs: {
        d: "M5.75 10.75S6 9 6.1 8.6c.05-.3-.15-.45-.45-.55C5.35 8 4.8 8 4.35 8c-.5 0-1.45-.45-1.3-1.5 0 0 .15-2.45 1.8-3.1.4-.15 1.05-.15 1.4.35s.5 1.85.5 1.85 1.45 0 1.8.1c.7.1.75.55 0 .6-1.3.15-2.1.2-2.3 0-.25-.25-.5-.85-.5-.85l-.6 1.25c.55.05 1.05.1 1.2.1.4.05 1.35.25 1.15 1.5-.2 1.15-.45 2.45-.45 2.45z"
      }
    }), h("path", {
      attrs: {
        d: "M1.35 10.55l10.4 1.35s1.25.1 1.55-.95"
      }
    }), h("path", {
      attrs: {
        d: "M4.4 15.8c1-.1 1.9-.4 2.7-.9l.5-.3c1.25-.8 2.7-1.25 4.25-1.25 1.5 0 2.9.4 4.1 1.2V13.4c-1.25-.8-2.65-1.2-4.1-1.2-1.35 0-2.65.35-3.75.95l-1.05.5c-.9.45-1.75.85-2.8.95-1.55.15-3.05-.05-4.4-.75V15c1.55.7 3 .95 4.55.8z"
      }
    }), h("path", {
      attrs: {
        d: "M8.5 5.95h7.35"
      }
    })]);
  }
};

var WatchIcon = {
  name: 'WatchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-watch"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "12 9 12 12 13.5 13.5"
      }
    }), h("path", {
      attrs: {
        d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
      }
    })]);
  }
};

var WaterCapacityIcon = {
  name: 'WaterCapacityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-water-capacity"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4.75 7.55c.9-.1 1.75-.35 2.5-.75l.5-.25C8.9 5.9 10.25 5.5 11.7 5.5c1.4 0 2.7.35 3.85 1v-.9a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.6z"
      }
    }), h("path", {
      attrs: {
        d: "M4.75 9.9c.9-.1 1.75-.35 2.5-.75l.5-.25c1.15-.65 2.5-1.05 3.95-1.05 1.4 0 2.7.35 3.85 1V7.9a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.65z"
      }
    }), h("path", {
      attrs: {
        d: "M4.75 11.95c.9-.1 1.75-.35 2.5-.75l.5-.25c1.15-.65 2.5-1.05 3.95-1.05 1.4 0 2.7.35 3.85 1v-.95a7.75 7.75 0 0 0-3.85-1c-1.25 0-2.45.3-3.5.8l-.95.45c-.8.4-1.65.7-2.6.8-1.45.15-2.8-.05-4.05-.6v.9c1.3.55 2.7.8 4.15.65z"
      }
    }), h("path", {
      attrs: {
        d: "M.6 6.6v9.05h14.95V6.2h-8.2l-1.6 1.45h-4z"
      }
    }), h("path", {
      attrs: {
        d: "M15.35 7.1c0 1.16-1.88 2.1-4.2 2.1s-4.2-.94-4.2-2.1c0-1.16 1.88-2.1 4.2-2.1s4.2.94 4.2 2.1z"
      }
    }), h("path", {
      attrs: {
        d: "M7.4 7.9c0 .663-1.522 1.2-3.4 1.2S.6 8.563.6 7.9c0-.663 1.522-1.2 3.4-1.2s3.4.537 3.4 1.2z"
      }
    })]);
  }
};

var WaterSportsIcon = {
  name: 'WaterSportsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-water-sports"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2.392 4.688a1.04 1.04 0 1 1-.084 2.08 1.04 1.04 0 0 1 .084-2.08z"
      }
    }), h("path", {
      attrs: {
        d: "M4.123 13.253h.107c.387.017.752.075 1.102.168.123.033.32.071.521.096l.264.002h.001c.189 0 .373-.021.549-.062.171-.036.337-.105.486-.198.223-.158.42-.344.586-.556l.106-.123a8.79 8.79 0 0 1 .213-.224c-.352-.981-1.131-2.837-2.043-2.997a1.408 1.408 0 0 0-1.384.598L3.732 7.93l2.736-1.787a18.636 18.636 0 0 0 2.706 5.609.244.244 0 0 1 .143-.127h.027l.107-.032c.234-.057.502-.09.778-.091.4.007.783.068 1.145.178l.093.024h.053c1.259-2.069 2.224-5.616 2.107-5.808S6.171-.451 6.112-.003c-.12.679-.188 1.46-.188 2.258 0 .999.107 1.972.311 2.91-.715.331-3.483 1.995-3.814 2.161-.533.261-.699.581-.277 1.925s1.125 2.693 1.989 2.549 1.115-.965 1.632-.96c.389 0 .768 1.189.933 1.781-2.133-.469-4.768-1.013-5.333-1.013-.651 0 .485.971 1.877 1.712a4.082 4.082 0 0 1 .885-.069z"
      }
    }), h("path", {
      attrs: {
        d: "M15.269 11.653V10.01c-1.184.112-.971 1.712-2.133 2.203-.067.029-.154.06-.243.086l-.098.005-.171.037h-.677l-.16-.027h-.091l-.203-.048h-.075l-.219-.069a3.543 3.543 0 0 0-.967-.149c-.236 0-.462.027-.679.079l-.092.028a2.37 2.37 0 0 0-1.191.8c-.239.306-.51.565-.813.781-.205.129-.43.222-.67.272a3.122 3.122 0 0 1-.457.066l-.191.001a2.322 2.322 0 0 1-.306 0h.007c-.43-.101-.974-.195-1.528-.26l-.072-.007h-.443a3.879 3.879 0 0 0-.462.068l.024-.004a3.458 3.458 0 0 0-2.621 2.11l1.629.023c.423-.311.927-.54 1.474-.652l.025-.004c.141-.032.312-.058.486-.074l.149-.001h.4c.135.012.256.029.374.052l.063-.004.293.064.315.075h.08c.092.021.208.039.327.052l.015.001a2.399 2.399 0 0 0 .36 0h.098c.163-.012.313-.035.458-.068 1.392-.3 1.339-1.559 2.774-1.884.086-.02.195-.039.306-.052l.11-.001h.571l.203.032h.043l.235.053h.085l.16.043.181.048h.091l.16.037h.064l.224.037h.645l.155-.037h.075l.245-.085c.981-.368 1.013-1.525 1.659-1.984z"
      }
    }), h("path", {
      attrs: {
        d: "M14.491 15.024c-1.403.581-1.984-.443-3.547-.091a2.682 2.682 0 0 0-1.504 1.058l5.829.009v-1.664a1.69 1.69 0 0 1-.768.684z"
      }
    })]);
  }
};

var WaterskiIcon = {
  name: 'WaterskiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-waterski"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5.4 2.9c.45.4 1.15.35 1.55-.1s.35-1.15-.1-1.55S5.7.9 5.3 1.35c-.4.45-.35 1.15.1 1.55z"
      }
    }), h("path", {
      attrs: {
        d: "M8.2 11.45S7.85 9.5 7.8 9.1c-.05-.35-.3-.45-.65-.4s-.9.25-1.4.4c-.5.1-1.65 0-1.9-1.15 0 0-.7-2.65.8-3.9.35-.3 1.05-.55 1.6-.1S7.4 5.7 7.4 5.7s1.5-.5 1.9-.55c.75-.15 1 .3.2.65-1.3.6-2.15.95-2.4.8-.35-.15-.8-.7-.8-.7l-.2 1.5c.6-.15 1.15-.25 1.3-.3.45-.1 1.5-.2 1.75 1.15.2 1.3.4 2.7.4 2.7z"
      }
    }), h("path", {
      attrs: {
        d: "M3.55 13.25L13.4 9.7s1.15-.5.95-1.55"
      }
    }), h("path", {
      attrs: {
        d: "M4.75 15.4c.95-.1 1.85-.35 2.6-.8l.5-.25c1.2-.7 2.6-1.1 4.15-1.1 1.45 0 2.8.35 4 1.05v-1c-1.2-.7-2.55-1.05-4-1.05-1.3 0-2.55.3-3.65.85l-1 .45c-.85.4-1.7.75-2.7.85-1.5.15-2.95-.05-4.25-.65v.95c1.4.6 2.85.85 4.35.7z"
      }
    }), h("path", {
      attrs: {
        d: "M9.6 5.3H16"
      }
    })]);
  }
};

var WifiOffIcon = {
  name: 'WifiOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
      }
    }), h("path", {
      attrs: {
        d: "M10.71 5.05A16 16 0 0 1 22.58 9"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }
    })]);
  }
};

var WifiIcon = {
  name: 'WifiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 12.55a11 11 0 0 1 14.08 0"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a16 16 0 0 1 21.16 0"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }
    })]);
  }
};

var WindIcon = {
  name: 'WindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wind"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
      }
    })]);
  }
};

var X2Icon = {
  name: 'X2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 .08a7.92 7.92 0 1 0 0 15.84A7.92 7.92 0 0 0 8 .08zm0 14.773A6.853 6.853 0 1 1 8 1.147a6.853 6.853 0 0 1 0 13.706z"
      }
    }), h("path", {
      attrs: {
        d: "M10.56 5.44a.797.797 0 0 0-1.13 0L8.001 6.869 6.572 5.44a.8.8 0 0 0-1.13 1.131L6.871 8 5.442 9.429a.8.8 0 1 0 1.13 1.131l1.43-1.43 1.429 1.429a.8.8 0 0 0 1.13-1.131L9.132 7.999l1.429-1.429a.797.797 0 0 0 0-1.13z"
      }
    })]);
  }
};

var X3Icon = {
  name: 'X3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.261 8L12.8 5.461A1.6 1.6 0 0 0 10.537 3.2L7.999 5.738 5.46 3.199a1.6 1.6 0 0 0-2.261 2.263L5.737 8l-2.539 2.539A1.6 1.6 0 0 0 5.461 12.8l2.538-2.538 2.539 2.539a1.6 1.6 0 0 0 2.261-2.263z"
      }
    })]);
  }
};

var XCircleIcon = {
  name: 'XCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XOctagonIcon = {
  name: 'XOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XSquareIcon = {
  name: 'XSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var XIcon = {
  name: 'XIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }
    })]);
  }
};

var YachtCharterIcon = {
  name: 'YachtCharterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-yacht-charter"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23.712 2.891a.911.911 0 0 0-1.267-.264l-1.01.654v-.155c0-.589-.478-1.067-1.067-1.067h-4.523c-.589 0-1.067.478-1.067 1.067v4.539c0 .589.478 1.067 1.067 1.067h4.539c.589 0 1.067-.478 1.067-1.067V5.457l2.016-1.301a.912.912 0 0 0 .244-1.267zm-3.077.906l-1.819 1.179-1.003-1.067a.913.913 0 1 0-1.322 1.264l1.525 1.6a.91.91 0 0 0 1.187.158l1.453-.942V7.68a.251.251 0 0 1-.251.251h-4.56a.251.251 0 0 1-.251-.251V3.125c0-.138.112-.251.251-.251h4.539c.138 0 .251.112.251.251z"
      }
    }), h("path", {
      attrs: {
        d: "M.139 13.925h14.443a6.225 6.225 0 0 0 3.565-1.328l-16.931.01z"
      }
    }), h("path", {
      attrs: {
        d: "M1.733 11.968h17.2a14.718 14.718 0 0 0 2.175-2.33L3.679 9.6z"
      }
    }), h("path", {
      attrs: {
        d: "M5.168 8.112l-.635.827h8.533l-1.269-.976-1.749.469h-2.08V7.333c1.989 0 2.555-.352 2.555-.352l-.475-.363-3.2.235-.779-.757H4.901l.533.912c-.475.053-.891.101-1.035.123-.336.064-.757.96.768.981z"
      }
    })]);
  }
};

var YachtIcon = {
  name: 'YachtIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-yacht"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M.171 11.915h14.437a6.233 6.233 0 0 0 3.539-1.333l-16.904.01z"
      }
    }), h("path", {
      attrs: {
        d: "M3.733 7.563L1.76 9.958h17.205a14.75 14.75 0 0 0 2.175-2.355z"
      }
    }), h("path", {
      attrs: {
        d: "M5.195 6.101l-.635.832h8.533l-1.269-.976-1.755.443H8V5.333c1.989 0 2.555-.352 2.555-.352l-.475-.363-3.2.235-.789-.768H4.928l.533.912c-.475.053-.891.101-1.035.123-.331.064-.752.96.768.981z"
      }
    })]);
  }
};

var YearIcon = {
  name: 'YearIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-year"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16.1 12.85v-9.8c0-1-.8-1.85-1.85-1.85h-1.5V.15c0-.25-.2-.45-.45-.45s-.45.2-.45.45v1.1H4.3V.15c0-.25-.2-.45-.45-.45s-.45.2-.45.45v1.1H1.9c-1 0-1.85.8-1.85 1.85v9.8c0 1 .8 1.85 1.85 1.85h12.35c1.05-.05 1.85-.85 1.85-1.9zM1.95 2.1h1.5v1c0 .25.2.45.45.45s.45-.2.45-.45v-1h7.6v1c0 .25.2.45.45.45s.45-.2.45-.45v-1h1.45c.55 0 .95.4.95.95V4.6H1V3.05c0-.5.4-.95.95-.95zm0 11.7c-.5 0-.95-.4-.95-.95V5.5h14.25v7.35c0 .5-.4.95-.95.95H1.95z"
      }
    })]);
  }
};

var YoutubeIcon = {
  name: 'YoutubeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-youtube"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
      }
    }), h("polygon", {
      attrs: {
        points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      }
    })]);
  }
};

var ZapOffIcon = {
  name: 'ZapOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap-off"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "12.41 6.75 13 2 10.57 4.92"
      }
    }), h("polyline", {
      attrs: {
        points: "18.57 12.91 21 10 15.66 10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 8 3 14 12 14 11 22 16 16"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ZapIcon = {
  name: 'ZapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }
    })]);
  }
};

var ZodiacIcon = {
  name: 'ZodiacIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zodiac"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.5 10.05h5.55c.2 0 .3-.15.3-.3V6.7h3.2c.1 0 .2-.05.25-.1s.1-.15.1-.25c-.1-.95-1.25-1.8-1.4-1.85-.05-.05-.1-.05-.2-.05H12c-.2 0-.3.15-.3.3V7.2H8.8c.2-.9.15-1.8-.45-2-.05 0-.15-.05-.2-.05-.65 0-1.25.9-1.55 1.8-.05.1-.05.15-.1.25H3.85L5.9 5.35c.15-.1.15-.3 0-.45-.1-.15-.3-.15-.45 0L3 7.15l-.1.1H.4c-.15 0-.3.15-.3.3 0 .05-.05.5.45 1.05.6.65 2.15 1.45 5.95 1.45zm7.7-5c.25.2.7.55.9.95h-2.75v-.95zm-6.05.75c.1.05.25.5.05 1.3h-1c.35-.85.8-1.3.95-1.3z"
      }
    }), h("path", {
      attrs: {
        d: "M7.3 5.7h1.4v1.75H7.3V5.7z"
      }
    }), h("path", {
      attrs: {
        d: "M7.6 7.1c0 .304-.134.55-.3.55S7 7.404 7 7.1c0-.304.134-.55.3-.55s.3.246.3.55z"
      }
    }), h("path", {
      attrs: {
        d: "M12.15 4.9h2.65v1.3h-2.65V4.9z"
      }
    }), h("path", {
      attrs: {
        d: "M14.65 5.4h.65v.85h-.65V5.4z"
      }
    })]);
  }
};

var ZoomInIcon = {
  name: 'ZoomInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-in"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "11",
        y1: "8",
        x2: "11",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};

var ZoomOutIcon = {
  name: 'ZoomOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-out"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};

exports.AboutUs2Icon = AboutUs2Icon;
exports.AboutUsIcon = AboutUsIcon;
exports.Accommodation2Icon = Accommodation2Icon;
exports.AccommodationIcon = AccommodationIcon;
exports.ActivityIcon = ActivityIcon;
exports.AdultIcon = AdultIcon;
exports.AirplayIcon = AirplayIcon;
exports.AlertCircleIcon = AlertCircleIcon;
exports.AlertOctagonIcon = AlertOctagonIcon;
exports.AlertTriangleIcon = AlertTriangleIcon;
exports.AlignCenterIcon = AlignCenterIcon;
exports.AlignJustifyIcon = AlignJustifyIcon;
exports.AlignLeftIcon = AlignLeftIcon;
exports.AlignRightIcon = AlignRightIcon;
exports.AnchorIcon = AnchorIcon;
exports.AncientCityIcon = AncientCityIcon;
exports.ApertureIcon = ApertureIcon;
exports.ArchiveIcon = ArchiveIcon;
exports.ArrowDown2Icon = ArrowDown2Icon;
exports.ArrowDown3Icon = ArrowDown3Icon;
exports.ArrowDown4Icon = ArrowDown4Icon;
exports.ArrowDown5Icon = ArrowDown5Icon;
exports.ArrowDownCircleIcon = ArrowDownCircleIcon;
exports.ArrowDownLeftIcon = ArrowDownLeftIcon;
exports.ArrowDownRightIcon = ArrowDownRightIcon;
exports.ArrowDownIcon = ArrowDownIcon;
exports.ArrowLeft2Icon = ArrowLeft2Icon;
exports.ArrowLeft3Icon = ArrowLeft3Icon;
exports.ArrowLeft4Icon = ArrowLeft4Icon;
exports.ArrowLeft5Icon = ArrowLeft5Icon;
exports.ArrowLeftCircleIcon = ArrowLeftCircleIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.ArrowRight2Icon = ArrowRight2Icon;
exports.ArrowRight3Icon = ArrowRight3Icon;
exports.ArrowRight4Icon = ArrowRight4Icon;
exports.ArrowRight5Icon = ArrowRight5Icon;
exports.ArrowRightCircleIcon = ArrowRightCircleIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.ArrowUp2Icon = ArrowUp2Icon;
exports.ArrowUp3Icon = ArrowUp3Icon;
exports.ArrowUp4Icon = ArrowUp4Icon;
exports.ArrowUp5Icon = ArrowUp5Icon;
exports.ArrowUpCircleIcon = ArrowUpCircleIcon;
exports.ArrowUpLeftIcon = ArrowUpLeftIcon;
exports.ArrowUpRightIcon = ArrowUpRightIcon;
exports.ArrowUpIcon = ArrowUpIcon;
exports.Ask2Icon = Ask2Icon;
exports.AskIcon = AskIcon;
exports.AtSignIcon = AtSignIcon;
exports.AtvIcon = AtvIcon;
exports.Audio2Icon = Audio2Icon;
exports.AudioIcon = AudioIcon;
exports.AwardIcon = AwardIcon;
exports.BananaBoatIcon = BananaBoatIcon;
exports.BarChart2Icon = BarChart2Icon;
exports.BarChartIcon = BarChartIcon;
exports.BarIcon = BarIcon;
exports.BathroomPrivateIcon = BathroomPrivateIcon;
exports.BatteryChargingIcon = BatteryChargingIcon;
exports.BatteryIcon = BatteryIcon;
exports.BbqIcon = BbqIcon;
exports.BeachIcon = BeachIcon;
exports.BeamIcon = BeamIcon;
exports.BeanbagIcon = BeanbagIcon;
exports.BellOffIcon = BellOffIcon;
exports.BellIcon = BellIcon;
exports.BilliardsIcon = BilliardsIcon;
exports.BirthdayIcon = BirthdayIcon;
exports.BlueCruise2Icon = BlueCruise2Icon;
exports.BlueCruiseIcon = BlueCruiseIcon;
exports.BluetoothIcon = BluetoothIcon;
exports.BoldIcon = BoldIcon;
exports.BookOpenIcon = BookOpenIcon;
exports.BookIcon = BookIcon;
exports.BookingManager2Icon = BookingManager2Icon;
exports.BookingManager3Icon = BookingManager3Icon;
exports.BookingManagerIcon = BookingManagerIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.BoxIcon = BoxIcon;
exports.Breakfast2Icon = Breakfast2Icon;
exports.BreakfastIcon = BreakfastIcon;
exports.BriefcaseIcon = BriefcaseIcon;
exports.Bus2Icon = Bus2Icon;
exports.BusIcon = BusIcon;
exports.ButterflyIcon = ButterflyIcon;
exports.CabinCrewIcon = CabinCrewIcon;
exports.CalendarIcon = CalendarIcon;
exports.CamelIcon = CamelIcon;
exports.CameraOffIcon = CameraOffIcon;
exports.CameraIcon = CameraIcon;
exports.CanoeIcon = CanoeIcon;
exports.Car2Icon = Car2Icon;
exports.CarIcon = CarIcon;
exports.CastIcon = CastIcon;
exports.CheckCircleIcon = CheckCircleIcon;
exports.CheckSquareIcon = CheckSquareIcon;
exports.CheckIcon = CheckIcon;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ChevronUpIcon = ChevronUpIcon;
exports.ChevronsDownIcon = ChevronsDownIcon;
exports.ChevronsLeftIcon = ChevronsLeftIcon;
exports.ChevronsRightIcon = ChevronsRightIcon;
exports.ChevronsUpIcon = ChevronsUpIcon;
exports.ChildIcon = ChildIcon;
exports.ChromeIcon = ChromeIcon;
exports.CircleIcon = CircleIcon;
exports.ClipboardIcon = ClipboardIcon;
exports.ClockIcon = ClockIcon;
exports.CloudDrizzleIcon = CloudDrizzleIcon;
exports.CloudLightningIcon = CloudLightningIcon;
exports.CloudOffIcon = CloudOffIcon;
exports.CloudRainIcon = CloudRainIcon;
exports.CloudSnowIcon = CloudSnowIcon;
exports.CloudIcon = CloudIcon;
exports.CodeIcon = CodeIcon;
exports.CodepenIcon = CodepenIcon;
exports.CodesandboxIcon = CodesandboxIcon;
exports.CoffeeIcon = CoffeeIcon;
exports.ColumnsIcon = ColumnsIcon;
exports.CommandIcon = CommandIcon;
exports.CompassIcon = CompassIcon;
exports.Contact2Icon = Contact2Icon;
exports.ContactIcon = ContactIcon;
exports.CopyIcon = CopyIcon;
exports.Copyright2Icon = Copyright2Icon;
exports.CopyrightIcon = CopyrightIcon;
exports.CornerDownLeftIcon = CornerDownLeftIcon;
exports.CornerDownRightIcon = CornerDownRightIcon;
exports.CornerLeftDownIcon = CornerLeftDownIcon;
exports.CornerLeftUpIcon = CornerLeftUpIcon;
exports.CornerRightDownIcon = CornerRightDownIcon;
exports.CornerRightUpIcon = CornerRightUpIcon;
exports.CornerUpLeftIcon = CornerUpLeftIcon;
exports.CornerUpRightIcon = CornerUpRightIcon;
exports.CpuIcon = CpuIcon;
exports.CreditCardIcon = CreditCardIcon;
exports.CropIcon = CropIcon;
exports.CrosshairIcon = CrosshairIcon;
exports.DartIcon = DartIcon;
exports.DatabaseIcon = DatabaseIcon;
exports.DeckShowerIcon = DeckShowerIcon;
exports.DeleteIcon = DeleteIcon;
exports.Destination2Icon = Destination2Icon;
exports.Destination3Icon = Destination3Icon;
exports.DestinationPackageTourIcon = DestinationPackageTourIcon;
exports.DestinationIcon = DestinationIcon;
exports.DingyIcon = DingyIcon;
exports.Dinner2Icon = Dinner2Icon;
exports.Dinner3Icon = Dinner3Icon;
exports.DinnerIcon = DinnerIcon;
exports.DiscIcon = DiscIcon;
exports.Diving2Icon = Diving2Icon;
exports.DivingEquipmentIcon = DivingEquipmentIcon;
exports.DivingIcon = DivingIcon;
exports.DollarSignIcon = DollarSignIcon;
exports.DollarIcon = DollarIcon;
exports.DoubleBedIcon = DoubleBedIcon;
exports.DoubleSingleBedIcon = DoubleSingleBedIcon;
exports.DownloadCloudIcon = DownloadCloudIcon;
exports.DownloadIcon = DownloadIcon;
exports.DropletIcon = DropletIcon;
exports.DvdPlayerIcon = DvdPlayerIcon;
exports.Edit2Icon = Edit2Icon;
exports.Edit3Icon = Edit3Icon;
exports.EditIcon = EditIcon;
exports.EnginePowerIcon = EnginePowerIcon;
exports.EuroIcon = EuroIcon;
exports.Exclamation2Icon = Exclamation2Icon;
exports.ExclamationIcon = ExclamationIcon;
exports.ExternalLinkIcon = ExternalLinkIcon;
exports.EyeOffIcon = EyeOffIcon;
exports.EyeIcon = EyeIcon;
exports.FacebookIcon = FacebookIcon;
exports.FastForwardIcon = FastForwardIcon;
exports.FaxIcon = FaxIcon;
exports.FeatherIcon = FeatherIcon;
exports.Ferry2Icon = Ferry2Icon;
exports.FerryIcon = FerryIcon;
exports.FigmaIcon = FigmaIcon;
exports.FileMinusIcon = FileMinusIcon;
exports.FilePlusIcon = FilePlusIcon;
exports.FileTextIcon = FileTextIcon;
exports.FileIcon = FileIcon;
exports.FilmIcon = FilmIcon;
exports.FilterIcon = FilterIcon;
exports.FishingEquipIcon = FishingEquipIcon;
exports.FitnessIcon = FitnessIcon;
exports.FlagIcon = FlagIcon;
exports.Flight2Icon = Flight2Icon;
exports.FlightIcon = FlightIcon;
exports.FolderMinusIcon = FolderMinusIcon;
exports.FolderPlusIcon = FolderPlusIcon;
exports.FolderIcon = FolderIcon;
exports.FramerIcon = FramerIcon;
exports.FreeWifiIcon = FreeWifiIcon;
exports.FreezerIcon = FreezerIcon;
exports.FridgeIcon = FridgeIcon;
exports.FrontDeskIcon = FrontDeskIcon;
exports.FrownIcon = FrownIcon;
exports.Fruit2Icon = Fruit2Icon;
exports.FruitIcon = FruitIcon;
exports.FuelCapacityIcon = FuelCapacityIcon;
exports.GalleryIcon = GalleryIcon;
exports.GeneratorIcon = GeneratorIcon;
exports.GiftIcon = GiftIcon;
exports.GitBranchIcon = GitBranchIcon;
exports.GitCommitIcon = GitCommitIcon;
exports.GitMergeIcon = GitMergeIcon;
exports.GitPullRequestIcon = GitPullRequestIcon;
exports.GithubIcon = GithubIcon;
exports.GitlabIcon = GitlabIcon;
exports.Globe2Icon = Globe2Icon;
exports.GlobeIcon = GlobeIcon;
exports.GridIcon = GridIcon;
exports.HairdryerIcon = HairdryerIcon;
exports.HammockIcon = HammockIcon;
exports.HarbourIcon = HarbourIcon;
exports.HardDriveIcon = HardDriveIcon;
exports.HashIcon = HashIcon;
exports.HeadphonesIcon = HeadphonesIcon;
exports.HeartIcon = HeartIcon;
exports.HelpCircleIcon = HelpCircleIcon;
exports.HexagonIcon = HexagonIcon;
exports.HomeIcon = HomeIcon;
exports.HomepageIcon = HomepageIcon;
exports.HorseIcon = HorseIcon;
exports.HotAirBalloonIcon = HotAirBalloonIcon;
exports.HotDealIcon = HotDealIcon;
exports.IceCreamIcon = IceCreamIcon;
exports.IceMachineIcon = IceMachineIcon;
exports.IceboxIcon = IceboxIcon;
exports.Image2Icon = Image2Icon;
exports.Image3Icon = Image3Icon;
exports.ImageIcon = ImageIcon;
exports.InboxIcon = InboxIcon;
exports.IndoorLoungeIcon = IndoorLoungeIcon;
exports.InfantIcon = InfantIcon;
exports.Info2Icon = Info2Icon;
exports.InfoIcon = InfoIcon;
exports.InstagramIcon = InstagramIcon;
exports.IpodIcon = IpodIcon;
exports.ItalicIcon = ItalicIcon;
exports.JacuzziIcon = JacuzziIcon;
exports.JeepIcon = JeepIcon;
exports.JetskiIcon = JetskiIcon;
exports.Jobs2Icon = Jobs2Icon;
exports.JobsIcon = JobsIcon;
exports.KeyIcon = KeyIcon;
exports.LaundryIcon = LaundryIcon;
exports.LayersIcon = LayersIcon;
exports.LayoutIcon = LayoutIcon;
exports.LengthIcon = LengthIcon;
exports.LifeBuoyIcon = LifeBuoyIcon;
exports.Link2Icon = Link2Icon;
exports.LinkIcon = LinkIcon;
exports.LinkedinIcon = LinkedinIcon;
exports.LiraIcon = LiraIcon;
exports.ListIcon = ListIcon;
exports.LoaderIcon = LoaderIcon;
exports.LockIcon = LockIcon;
exports.LogInIcon = LogInIcon;
exports.LogOutIcon = LogOutIcon;
exports.LuggageStorageIcon = LuggageStorageIcon;
exports.Lunch2Icon = Lunch2Icon;
exports.LunchIcon = LunchIcon;
exports.Mail2Icon = Mail2Icon;
exports.Mail3Icon = Mail3Icon;
exports.MailIcon = MailIcon;
exports.Map2Icon = Map2Icon;
exports.Map3Icon = Map3Icon;
exports.Map4Icon = Map4Icon;
exports.MapAlaturkaIcon = MapAlaturkaIcon;
exports.MapPinIcon = MapPinIcon;
exports.MapIcon = MapIcon;
exports.MassageIcon = MassageIcon;
exports.Maximize2Icon = Maximize2Icon;
exports.MaximizeIcon = MaximizeIcon;
exports.MealIcon = MealIcon;
exports.Media2Icon = Media2Icon;
exports.MediaIcon = MediaIcon;
exports.MehIcon = MehIcon;
exports.MenuIcon = MenuIcon;
exports.MessageCircleIcon = MessageCircleIcon;
exports.MessageSquareIcon = MessageSquareIcon;
exports.MicOffIcon = MicOffIcon;
exports.MicIcon = MicIcon;
exports.MicrowaveIcon = MicrowaveIcon;
exports.MinibarIcon = MinibarIcon;
exports.Minimize2Icon = Minimize2Icon;
exports.MinimizeIcon = MinimizeIcon;
exports.Minus2Icon = Minus2Icon;
exports.Minus3Icon = Minus3Icon;
exports.MinusCircleIcon = MinusCircleIcon;
exports.MinusSquareIcon = MinusSquareIcon;
exports.MinusIcon = MinusIcon;
exports.MoneyExchange2Icon = MoneyExchange2Icon;
exports.MoneyExchange3Icon = MoneyExchange3Icon;
exports.MoneyExchangeIcon = MoneyExchangeIcon;
exports.MonitorIcon = MonitorIcon;
exports.MoonIcon = MoonIcon;
exports.MoreHorizontalIcon = MoreHorizontalIcon;
exports.MoreVerticalIcon = MoreVerticalIcon;
exports.Mosque2Icon = Mosque2Icon;
exports.MosqueIcon = MosqueIcon;
exports.MousePointerIcon = MousePointerIcon;
exports.MoveIcon = MoveIcon;
exports.MusicSystemIcon = MusicSystemIcon;
exports.MusicIcon = MusicIcon;
exports.Navigation2Icon = Navigation2Icon;
exports.NavigationIcon = NavigationIcon;
exports.NightBusIcon = NightBusIcon;
exports.OctagonIcon = OctagonIcon;
exports.OvenIcon = OvenIcon;
exports.PackageTourIcon = PackageTourIcon;
exports.PackageIcon = PackageIcon;
exports.PaperclipIcon = PaperclipIcon;
exports.ParaglidingIcon = ParaglidingIcon;
exports.ParkingFirstIcon = ParkingFirstIcon;
exports.ParkingSecondIcon = ParkingSecondIcon;
exports.PauseCircleIcon = PauseCircleIcon;
exports.PauseIcon = PauseIcon;
exports.PenToolIcon = PenToolIcon;
exports.PercentIcon = PercentIcon;
exports.Phone2Icon = Phone2Icon;
exports.Phone3Icon = Phone3Icon;
exports.Phone4Icon = Phone4Icon;
exports.PhoneCallIcon = PhoneCallIcon;
exports.PhoneForwardedIcon = PhoneForwardedIcon;
exports.PhoneIncomingIcon = PhoneIncomingIcon;
exports.PhoneMissedIcon = PhoneMissedIcon;
exports.PhoneOffIcon = PhoneOffIcon;
exports.PhoneOutgoingIcon = PhoneOutgoingIcon;
exports.PhoneIcon = PhoneIcon;
exports.PieChartIcon = PieChartIcon;
exports.PlasmaIcon = PlasmaIcon;
exports.PlayCircleIcon = PlayCircleIcon;
exports.PlayIcon = PlayIcon;
exports.Plus2Icon = Plus2Icon;
exports.Plus3Icon = Plus3Icon;
exports.PlusCircleIcon = PlusCircleIcon;
exports.PlusSquareIcon = PlusSquareIcon;
exports.PlusIcon = PlusIcon;
exports.PocketIcon = PocketIcon;
exports.Power3Icon = Power3Icon;
exports.PowerIcon = PowerIcon;
exports.PrinterIcon = PrinterIcon;
exports.Privacy2Icon = Privacy2Icon;
exports.PrivacyIcon = PrivacyIcon;
exports.PrivateYachtCharterIcon = PrivateYachtCharterIcon;
exports.QuadBedIcon = QuadBedIcon;
exports.RadioIcon = RadioIcon;
exports.RefreshCcwIcon = RefreshCcwIcon;
exports.RefreshCwIcon = RefreshCwIcon;
exports.RepeatIcon = RepeatIcon;
exports.Restaurant2Icon = Restaurant2Icon;
exports.RestaurantIcon = RestaurantIcon;
exports.RewindIcon = RewindIcon;
exports.RotateCcwIcon = RotateCcwIcon;
exports.RotateCwIcon = RotateCwIcon;
exports.RssIcon = RssIcon;
exports.SafeDepositBoxIcon = SafeDepositBoxIcon;
exports.SailsIcon = SailsIcon;
exports.SatelliteIcon = SatelliteIcon;
exports.SaveIcon = SaveIcon;
exports.ScissorsIcon = ScissorsIcon;
exports.SeaLadderIcon = SeaLadderIcon;
exports.Search2Icon = Search2Icon;
exports.Search3Icon = Search3Icon;
exports.SearchIcon = SearchIcon;
exports.SendIcon = SendIcon;
exports.ServerIcon = ServerIcon;
exports.SettingsIcon = SettingsIcon;
exports.ShadeTentIcon = ShadeTentIcon;
exports.Share2Icon = Share2Icon;
exports.Share3Icon = Share3Icon;
exports.Share4Icon = Share4Icon;
exports.Share5Icon = Share5Icon;
exports.ShareIcon = ShareIcon;
exports.SharedLoungeIcon = SharedLoungeIcon;
exports.ShieldOffIcon = ShieldOffIcon;
exports.ShieldIcon = ShieldIcon;
exports.ShoppingBagIcon = ShoppingBagIcon;
exports.ShoppingCartIcon = ShoppingCartIcon;
exports.ShuffleIcon = ShuffleIcon;
exports.SidebarIcon = SidebarIcon;
exports.SingleBedIcon = SingleBedIcon;
exports.SitemapIcon = SitemapIcon;
exports.SkipBackIcon = SkipBackIcon;
exports.SkipForwardIcon = SkipForwardIcon;
exports.SlackIcon = SlackIcon;
exports.SlashIcon = SlashIcon;
exports.SleepUnderTheStarsIcon = SleepUnderTheStarsIcon;
exports.SlidersIcon = SlidersIcon;
exports.SmartphoneIcon = SmartphoneIcon;
exports.SmileIcon = SmileIcon;
exports.SnackIcon = SnackIcon;
exports.SoldierIcon = SoldierIcon;
exports.SpaFacilitiesIcon = SpaFacilitiesIcon;
exports.SpeakerIcon = SpeakerIcon;
exports.SquareIcon = SquareIcon;
exports.StarIcon = StarIcon;
exports.StopCircleIcon = StopCircleIcon;
exports.StoveIcon = StoveIcon;
exports.SunIcon = SunIcon;
exports.SunbedIcon = SunbedIcon;
exports.Sunrise2Icon = Sunrise2Icon;
exports.SunriseIcon = SunriseIcon;
exports.Sunset2Icon = Sunset2Icon;
exports.SunsetIcon = SunsetIcon;
exports.SwimmingPoolIcon = SwimmingPoolIcon;
exports.TableGamesIcon = TableGamesIcon;
exports.TableTennisIcon = TableTennisIcon;
exports.TabletIcon = TabletIcon;
exports.TagIcon = TagIcon;
exports.TargetIcon = TargetIcon;
exports.Taxi2Icon = Taxi2Icon;
exports.TaxiIcon = TaxiIcon;
exports.TerminalIcon = TerminalIcon;
exports.TermsIcon = TermsIcon;
exports.TerraceIcon = TerraceIcon;
exports.ThermometerIcon = ThermometerIcon;
exports.ThumbsDownIcon = ThumbsDownIcon;
exports.ThumbsUpIcon = ThumbsUpIcon;
exports.Tick2Icon = Tick2Icon;
exports.TickIcon = TickIcon;
exports.ToggleLeftIcon = ToggleLeftIcon;
exports.ToggleRightIcon = ToggleRightIcon;
exports.ToolIcon = ToolIcon;
exports.Tour2Icon = Tour2Icon;
exports.Tour3Icon = Tour3Icon;
exports.TourDuration2Icon = TourDuration2Icon;
exports.TourDurationIcon = TourDurationIcon;
exports.TourIcon = TourIcon;
exports.Train2Icon = Train2Icon;
exports.TrainIcon = TrainIcon;
exports.TransferIcon = TransferIcon;
exports.Trash2Icon = Trash2Icon;
exports.TrashIcon = TrashIcon;
exports.TrelloIcon = TrelloIcon;
exports.TrendingDownIcon = TrendingDownIcon;
exports.TrendingUpIcon = TrendingUpIcon;
exports.TriangleIcon = TriangleIcon;
exports.TruckIcon = TruckIcon;
exports.TubeIcon = TubeIcon;
exports.TurkeyPackageTourIcon = TurkeyPackageTourIcon;
exports.TurkishBathIcon = TurkishBathIcon;
exports.TurkishGulletIcon = TurkishGulletIcon;
exports.TvIcon = TvIcon;
exports.TwinBedIcon = TwinBedIcon;
exports.TwitchIcon = TwitchIcon;
exports.TwitterIcon = TwitterIcon;
exports.TypeIcon = TypeIcon;
exports.UmbrellaIcon = UmbrellaIcon;
exports.UnderlineIcon = UnderlineIcon;
exports.UnlockIcon = UnlockIcon;
exports.UploadCloudIcon = UploadCloudIcon;
exports.UploadIcon = UploadIcon;
exports.UserCheckIcon = UserCheckIcon;
exports.UserMinusIcon = UserMinusIcon;
exports.UserPlusIcon = UserPlusIcon;
exports.UserReview2Icon = UserReview2Icon;
exports.UserReviewIcon = UserReviewIcon;
exports.UserXIcon = UserXIcon;
exports.UserIcon = UserIcon;
exports.UsersIcon = UsersIcon;
exports.VanIcon = VanIcon;
exports.VeganFoodIcon = VeganFoodIcon;
exports.Video2Icon = Video2Icon;
exports.Video3Icon = Video3Icon;
exports.VideoOffIcon = VideoOffIcon;
exports.VideoIcon = VideoIcon;
exports.VoicemailIcon = VoicemailIcon;
exports.VolleyballIcon = VolleyballIcon;
exports.Volume1Icon = Volume1Icon;
exports.Volume2Icon = Volume2Icon;
exports.VolumeXIcon = VolumeXIcon;
exports.VolumeIcon = VolumeIcon;
exports.WakeBoardIcon = WakeBoardIcon;
exports.WatchIcon = WatchIcon;
exports.WaterCapacityIcon = WaterCapacityIcon;
exports.WaterSportsIcon = WaterSportsIcon;
exports.WaterskiIcon = WaterskiIcon;
exports.WifiOffIcon = WifiOffIcon;
exports.WifiIcon = WifiIcon;
exports.WindIcon = WindIcon;
exports.X2Icon = X2Icon;
exports.X3Icon = X3Icon;
exports.XCircleIcon = XCircleIcon;
exports.XOctagonIcon = XOctagonIcon;
exports.XSquareIcon = XSquareIcon;
exports.XIcon = XIcon;
exports.YachtCharterIcon = YachtCharterIcon;
exports.YachtIcon = YachtIcon;
exports.YearIcon = YearIcon;
exports.YoutubeIcon = YoutubeIcon;
exports.ZapOffIcon = ZapOffIcon;
exports.ZapIcon = ZapIcon;
exports.ZodiacIcon = ZodiacIcon;
exports.ZoomInIcon = ZoomInIcon;
exports.ZoomOutIcon = ZoomOutIcon;
