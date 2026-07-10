"use strict";

/* ===== Icons.jsx ===== */
/* Inline SVG icons in the Lucide style (1.5px stroke, rounded caps).
   Kept inline so the kit has no CDN dependency. Each is a React FC
   taking optional size/className/stroke props.
   These render at currentColor so they pick up the parent's text color. */
const Icon = ({
  children,
  size = 18,
  className = '',
  stroke = 1.5
}) => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className,
  "aria-hidden": "true"
}, children);
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const ArrowUpRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 17L17 7M7 7h10v10"
}));
const Calendar = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4M8 2v4M3 10h18"
}));
const MapPin = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Users = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
}));
const FileText = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
}));
const Clock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6L6 18M6 6l12 12"
}));
const Menu = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const Mic = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "13",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10a7 7 0 0 0 14 0M12 19v4M8 23h8"
}));
const Sparkles = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
Object.assign(window, {
  Icon,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Users,
  FileText,
  Clock,
  X,
  Menu,
  Mic,
  Sparkles,
  ChevronDown
});

/* ===== Logo.jsx ===== */
/* TaicLogo — inline SVG mark for the workshop.
   Several variants exposed via the `variant` prop so we can pick visually. */
function TaicLogo({
  variant = 'arc',
  size = 28
}) {
  const RED = '#C8102E';
  const INK = '#161514';
  const PAPER = '#FAFAF7';
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    xmlns: 'http://www.w3.org/2000/svg'
  };
  if (variant === 'arc') {
    // Open-ended arc with a red dot at the break.
    // Suggests open-ended capability, in-progress workshop.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 16 4 A 12 12 0 1 1 5.5 22",
      stroke: INK,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "5.5",
      cy: "22",
      r: "2.6",
      fill: RED
    }));
  }
  if (variant === 'glyph') {
    // Italic serif "A" inside a cream square — echoes the title's italic "AI's".
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "1.5",
      width: "29",
      height: "29",
      rx: "5",
      fill: PAPER,
      stroke: INK,
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("text", {
      x: "16",
      y: "23.5",
      textAnchor: "middle",
      fontFamily: "Source Serif Pro, Source Serif 4, Georgia, serif",
      fontStyle: "italic",
      fontWeight: "500",
      fontSize: "22",
      fill: RED
    }, "A"), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "9",
      r: "1.6",
      fill: RED
    }));
  }
  if (variant === 'pillars') {
    // Three vertical bars of rising heights — the three workshop pillars.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "18",
      width: "4",
      height: "9",
      rx: "1",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "12",
      width: "4",
      height: "15",
      rx: "1",
      fill: RED
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "6",
      width: "4",
      height: "21",
      rx: "1",
      fill: INK
    }));
  }
  if (variant === 'nested') {
    // Two nested squares + a small red square — recursion / evolving agents.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "26",
      height: "26",
      rx: "3",
      fill: "none",
      stroke: INK,
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "14",
      height: "14",
      rx: "2",
      fill: "none",
      stroke: INK,
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "4",
      height: "4",
      fill: RED
    }));
  }
  if (variant === 'spark') {
    // Asterisk / footnote spark with one red arm — curiosity, citation, thinking.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("g", {
      stroke: INK,
      strokeWidth: "2.6",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "5",
      x2: "16",
      y2: "27"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "11",
      x2: "26",
      y2: "21"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "21",
      x2: "26",
      y2: "11"
    })), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "16",
      x2: "26",
      y2: "11",
      stroke: RED,
      strokeWidth: "2.8",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "2.2",
      fill: RED
    }));
  }
  if (variant === 'horizon') {
    // Horizon line with a rising arc — open-ended, "what comes next".
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "22",
      x2: "29",
      y2: "22",
      stroke: INK,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 7 22 Q 16 4 25 22",
      stroke: RED,
      strokeWidth: "2.4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "22",
      r: "2.2",
      fill: RED
    }));
  }
  if (variant === 'corner') {
    // Solid square with a corner cut and a red triangle — incomplete capability.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 3 3 H 22 L 29 10 V 29 H 3 Z",
      fill: INK
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 22 3 L 29 10 L 22 10 Z",
      fill: RED
    }));
  }
  if (variant === 'serif-t') {
    // Slab serif T as a single confident letterform — editorial, restrained.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "1.5",
      width: "29",
      height: "29",
      rx: "3",
      fill: INK
    }), /*#__PURE__*/React.createElement("g", {
      fill: PAPER
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "9",
      width: "20",
      height: "3.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14.3",
      y: "9",
      width: "3.4",
      height: "15"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.5",
      y: "22.5",
      width: "9",
      height: "2.2"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "22",
      width: "3",
      height: "3",
      fill: RED
    }));
  }
  if (variant === 'stack') {
    // Stacked horizontal bars — like a stratified system, with the top one red.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "7",
      width: "24",
      height: "3",
      rx: "1",
      fill: RED
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "13",
      width: "24",
      height: "3",
      rx: "1",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "19",
      width: "18",
      height: "3",
      rx: "1",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "25",
      width: "10",
      height: "3",
      rx: "1",
      fill: INK
    }));
  }
  if (variant === 'orbit') {
    // Tilted ellipse with two nodes — a system in motion, not closed.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "rotate(-20 16 16)"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "16",
      cy: "16",
      rx: "12",
      ry: "6",
      stroke: INK,
      strokeWidth: "1.8",
      fill: "none"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "13",
      r: "2.2",
      fill: INK
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26",
      cy: "19",
      r: "2.6",
      fill: RED
    }));
  }
  if (variant === 'frame') {
    // Open bracket / frame — a thinking space with a red point of focus inside.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 9 4 H 4 V 28 H 9",
      stroke: INK,
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 23 4 H 28 V 28 H 23",
      stroke: INK,
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "3",
      fill: RED
    }));
  }
  if (variant === 'branch') {
    // A node that branches into three paths — open exploration, search frontier.
    // The middle path stays red and exits the frame: "the search continues".
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "16",
      r: "2.5",
      fill: INK
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 16 L 16 9",
      stroke: INK,
      strokeWidth: "2",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 16 L 28 16",
      stroke: RED,
      strokeWidth: "2.4",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 16 L 16 23",
      stroke: INK,
      strokeWidth: "2",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "9",
      r: "1.8",
      fill: INK
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "23",
      r: "1.8",
      fill: INK
    }));
  }
  if (variant === 'spiral') {
    // A spiral that unwinds outward — open-endedness as pure form.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 16 16 m -1 0 a 1 1 0 1 0 2 0 a 2 2 0 1 1 -4 0 a 4 4 0 1 1 8 0 a 6 6 0 1 1 -12 0 a 8 8 0 1 1 16 0",
      stroke: INK,
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "16",
      r: "2.2",
      fill: RED
    }));
  }
  if (variant === 'comma') {
    // A literal comma — "not a full stop". Echoes the section title.
    // Serif terminal in black, red dot tail (the comma's gesture continues).
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 19 5 C 26 7 27 14 22 19 L 17 24 C 16 25 15 24 16 23 L 19 19 C 14 19 12 13 16 9 C 17 7 18 6 19 5 Z",
      fill: INK
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "24",
      r: "2.4",
      fill: RED
    }));
  }
  if (variant === 'stairs') {
    // Steps rising right with the top step missing / open — capability under construction.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "22",
      width: "6",
      height: "6",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "16",
      width: "6",
      height: "12",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "10",
      width: "6",
      height: "18",
      fill: INK
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "4",
      width: "2",
      height: "6",
      fill: RED
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "10",
      width: "6",
      height: "2",
      fill: RED
    }));
  }
  if (variant === 'loop') {
    // A continuous loop ending in a red arrow tip — reasoning / feedback loop.
    return /*#__PURE__*/React.createElement("svg", {
      ...props,
      "aria-label": "TAIC"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 8 22 A 8 8 0 1 1 22 16",
      stroke: INK,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 22 16 L 18 13 M 22 16 L 25 19",
      stroke: RED,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round"
    }));
  }

  // Fallback — the original mono "T" square so we never render blank.
  return /*#__PURE__*/React.createElement("svg", {
    ...props,
    "aria-label": "TAIC"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "30",
    height: "30",
    rx: "6",
    fill: INK
  }), /*#__PURE__*/React.createElement("text", {
    x: "16",
    y: "22",
    textAnchor: "middle",
    fontFamily: "ui-monospace, monospace",
    fontSize: "16",
    fontWeight: "600",
    fill: PAPER
  }, "T"));
}
Object.assign(window, {
  TaicLogo
});

/* ===== Nav.jsx ===== */
/* Sticky top navigation. Active section tracks scroll position.
   Includes EN/KR language toggle and a mobile hamburger menu. */
function Nav({
  active,
  logoVariant,
  lang,
  onLang,
  onSectionClick
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    id: 'top',
    label: lang === 'kr' ? '소개' : 'About'
  }, {
    id: 'program',
    label: lang === 'kr' ? '프로그램' : 'Program'
  }, {
    id: 'speakers',
    label: lang === 'kr' ? '연사' : 'Speakers'
  }, {
    id: 'venue',
    label: lang === 'kr' ? '장소' : 'Venue'
  }, {
    id: 'organizers',
    label: lang === 'kr' ? '주최' : 'Organizers'
  }];
  const go = id => {
    onSectionClick(id);
    setMenuOpen(false);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__brand",
    href: "#top",
    onClick: e => {
      e.preventDefault();
      go('top');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark mark--logo"
  }, /*#__PURE__*/React.createElement(TaicLogo, {
    variant: logoVariant,
    size: 28
  })), /*#__PURE__*/React.createElement("span", {
    className: "brand-long"
  }, "Thinking about ", /*#__PURE__*/React.createElement("em", null, "AI's"), " Capability"), /*#__PURE__*/React.createElement("span", {
    className: "brand-short"
  }, "TAIC ", /*#__PURE__*/React.createElement("em", null, "'26"))), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: `#${it.id}`,
    className: active === it.id ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      go(it.id);
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === 'en' ? 'active' : '',
    onClick: () => onLang('en'),
    "aria-pressed": lang === 'en'
  }, "EN"), /*#__PURE__*/React.createElement("button", {
    className: lang === 'kr' ? 'active' : '',
    onClick: () => onLang('kr'),
    "aria-pressed": lang === 'kr'
  }, "KR")), /*#__PURE__*/React.createElement("button", {
    className: "nav__burger",
    "aria-label": lang === 'kr' ? '메뉴' : 'Menu',
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, menuOpen ? /*#__PURE__*/React.createElement(X, {
    size: 18
  }) : /*#__PURE__*/React.createElement(Menu, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: `nav__menu ${menuOpen ? 'open' : ''}`
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: `#${it.id}`,
    className: active === it.id ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      go(it.id);
    }
  }, it.label))));
}
Object.assign(window, {
  Nav
});

/* ===== Hero.jsx ===== */
/* Hero — workshop title, ICML credit, CTAs, meta strip. */
function Hero({
  lang,
  onSectionClick,
  registerUrl,
  registerOpen,
  registerMode,
  lumaEventId
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "hero-section bare",
    style: {
      paddingTop: '88px',
      paddingBottom: '112px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Thinking about ", /*#__PURE__*/React.createElement("em", null, "AI's"), " Capability."), /*#__PURE__*/React.createElement("div", {
    className: "hero__context"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icml-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "icml"
  }, "Pre-ICML Workshop 2026"), " · GIST AI Days"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => onSectionClick('program')
  }, lang === 'kr' ? '프로그램 보기' : 'View the program'), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => onSectionClick('speakers')
  }, lang === 'kr' ? '연사 소개' : 'Meet the speakers')), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-grid",
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '일시' : 'Date'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, lang === 'kr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "2026년 ", /*#__PURE__*/React.createElement("em", null, "7월 6일"), " (월)") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, "Mon"), " · Jul 6, 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '시간' : 'Time'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "09:00 – 17:30 KST")), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '장소' : 'Location'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, lang === 'kr' ? '스페이스쉐어 삼성역센터, 서울' : /*#__PURE__*/React.createElement(React.Fragment, null, "Spaceshare Samseong", /*#__PURE__*/React.createElement("br", null), "COEX Center, Seoul")))))));
}
Object.assign(window, {
  Hero
});

/* ===== About.jsx ===== */
/* About — workshop description + three topics (pillars or questions). */
function About({
  aboutStyle,
  lang,
  onSectionClick
}) {
  const pillars = lang === 'kr' ? [{
    n: '01',
    title: '추론',
    body: '분포 변화 상황에서 모델은 어떻게 추론하는가, 그리고 신중한 문제 해결이 패턴 매칭으로 무너지는 지점. 둘을 구분하고 추론의 신뢰성을 높이는 방법.'
  }, {
    n: '02',
    title: '능력 평가',
    body: 'AI 시스템이 새로운 기술을 익히고, 처음 보는 문제를 다루며, 상황이 변해도 안정적으로 작동하는 방식. 평가가 능력에 관해 보여주는 것과, 여전히 보지 못하는 것.'
  }, {
    n: '03',
    title: '적응·진화하는 에이전트',
    body: 'self-improvement, tool acquisition, lifelong learning을 통해 과제 도중에도 적응하는 에이전트. 오픈엔디드 환경에서 이러한 적응성을 가능하게 하는 아키텍처.'
  }] : [{
    n: '01',
    title: 'Reasoning',
    body: 'How models reason under distribution shift, and where deliberate problem-solving gives way to pattern matching. Methods for distinguishing the two and improving reasoning reliability.'
  }, {
    n: '02',
    title: 'Evaluating capability',
    body: 'How AI systems acquire new skills, handle unfamiliar problems, and remain reliable as conditions change. What evaluation reveals about capability, and where it remains limited.'
  }, {
    n: '03',
    title: 'Adaptive & evolving agents',
    body: 'Agents that adapt over the course of a task through self-improvement, tool acquisition, and lifelong learning. The architectures that support such adaptability in open-ended environments.'
  }];
  const questions = lang === 'kr' ? [{
    q: '분포 변화 상황에서 모델은 어떻게 추론하는가?',
    a: '신중한 문제 해결이 패턴 매칭으로 무너지는 지점, 그리고 추론을 더 신뢰할 수 있게 만드는 방법.'
  }, {
    q: 'AI가 실제로 무엇을 할 수 있는지 어떻게 알 수 있는가?',
    a: '시스템이 새로운 기술을 익히고, 처음 보는 문제를 다루며, 상황이 변해도 안정적으로 작동하는 방식.'
  }, {
    q: '에이전트는 오픈엔디드 환경에 어떻게 적응해야 하는가?',
    a: 'self-improvement, tool acquisition, lifelong learning을 통해 적응하는 에이전트.'
  }] : [{
    q: 'How do models reason under distribution shift?',
    a: 'Where deliberate problem-solving gives way to pattern matching, and what makes reasoning more reliable.'
  }, {
    q: 'How do we tell what AI can actually do?',
    a: 'How systems acquire new skills, handle unfamiliar problems, and stay reliable as conditions change.'
  }, {
    q: 'How should agents adapt to open-ended environments?',
    a: 'Agents that adapt through self-improvement, tool acquisition, and lifelong learning.'
  }];
  const useQuestions = aboutStyle === 'questions';
  const useInline = aboutStyle === 'inline';
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "about-section",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", null, lang === 'kr' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "AI의 capability가 오늘 어디까지 와 있고, 앞으로 어디로 향하는지 함께 짚어보고자 연구자들을 초대했습니다. GIST AI Days의 일환으로 진행된 이번 워크샵에서는 open-endedness, self-evolving agents, alignment, intelligence를 중심으로 현재의 질문들을 다뤘습니다."), /*#__PURE__*/React.createElement("p", {
    className: "about-thanks"
  }, /*#__PURE__*/React.createElement("a", {
    className: "about-recap-link",
    onClick: () => onSectionClick('recap')
  }, "함께해 주셔서 감사합니다!"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "We bring together researchers to discuss where AI capabilities stand today and where they may be heading. Held as part of GIST AI Days, this workshop explores current questions on open-endedness, self-evolving agents, alignment, and intelligence."), /*#__PURE__*/React.createElement("p", {
    className: "about-thanks"
  }, /*#__PURE__*/React.createElement("a", {
    className: "about-recap-link",
    onClick: () => onSectionClick('recap')
  }, "Thank you for joining us!")))), !useInline && /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, useQuestions ? questions.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pillar question",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, p.q), /*#__PURE__*/React.createElement("p", null, p.a)))) : pillars.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pillar",
    key: p.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body))))))));
}
Object.assign(window, {
  About
});

/* ===== Program.jsx ===== */
/* Program — day schedule with expandable rows.
   Slots: 30 min talk + 10 min Q&A + 5 min transition = 45 min between starts.
   Morning: 4 talks 09:30–13:00 with a coffee break; lunch at 13:00. */
const PROGRAM = [{
  time: '09:00',
  end: '09:50',
  kind: 'talk',
  speakerId: 'sundong',
  lead: {
    en: 'Welcome & session opening',
    kr: '환영사 & 세션 오프닝'
  },
  title: 'Reasoning, Evaluation, and What Comes After',
  person: 'Sundong Kim',
  aff: 'Assistant Professor, GIST',
  kindLabel: 'Talk 1',
  abstract: 'A discussion-first talk rather than a survey. After several years working on the Abstraction and Reasoning Corpus (ARC-AGI) — and spinoffs such as O2ARC, ARCLE, ARCTraj, and GIFARC — I want to share three questions I keep returning to as a PI, each closed with an open question for the room: (1) What evaluation actually forces the capability we say we care about? (2) When a model is given thinking time, how should it be spent — as sequential decision-making, as abductive hypothesis induction, or as a harness that scaffolds program-synthesis-style reasoning? (3) As ARC-AGI-3 matures and its successors come into view, what should next-generation benchmarks reward beyond competence — persistence, curiosity, the willingness to keep probing?'
}, {
  time: '09:50',
  end: '10:30',
  kind: 'talk',
  speakerId: 'xiaoxiao',
  title: 'Diagnosing, Routing, and Recovering from Errors in LLM Agent Optimization and Deployment',
  person: 'Xiaoxiao Li',
  aff: 'Associate Professor, UBC',
  kindLabel: 'Talk 2'
}, {
  time: '11:00',
  end: '11:40',
  kind: 'talk',
  speakerId: 'hwanjun',
  title: 'Toward Reliable AI Capability in Long Video Understanding',
  person: 'Hwanjun Song',
  aff: 'Assistant Professor, KAIST',
  kindLabel: 'Talk 3',
  abstract: 'This talk examines why long video understanding remains a major bottleneck for multimodal large language models, despite rapid progress in video-language models and benchmarks. It highlights that performance degradation in hour-level videos is caused by video compression, sparse and noisy evidence, temporal degradation, and long-context failures such as lost-in-the-middle and evidence extraction errors. The talk then reframes retrieval-augmented generation for long videos, arguing that VideoRAG is fundamentally different from text RAG because each video chunk can be represented through multiple modalities and temporal granularities. It introduces V-RAGBench, a benchmark for separately evaluating retrieval and generation with visually grounded, evidence-localized, and uniquely answerable video QA triplets, and presents CARVE, a chunk-aware reranking method that adaptively selects the most suitable representation for each retrieved chunk. Experimental results show that chunk-level representation selection improves both retrieval and generation, while future directions include handling incomplete situated queries and better aligning generation with retrieved video evidence.'
}, {
  time: '11:40',
  end: '12:20',
  kind: 'talk',
  speakerId: 'dongmin',
  title: 'Intuition for Modern Foundation Model Training Data',
  person: 'Dongmin Park',
  aff: 'Foundation Model Research Team Lead, KRAFTON AI',
  kindLabel: 'Talk 4'
}, {
  time: '13:30',
  end: '14:15',
  kind: 'talk',
  speakerId: 'laura',
  lead: {
    en: 'Session opening',
    kr: '세션 오프닝'
  },
  title: 'World Models for Open-Ended Adaptation',
  person: 'Laura Mascarell',
  aff: 'Postdoctoral Fellow, GIST',
  kindLabel: 'Talk 5',
  abstract: 'This session-opening talk frames world models as a key ingredient for open-ended adaptation. I will briefly introduce how this session views intelligence and open-endedness, then use ARC-AGI-3 as a concrete stress test for agents that must learn from limited interaction. The talk focuses on a recurring failure mode of direct frontier agents: they can observe local effects, but often fail to turn those observations into stable models for long-horizon planning. This motivates the practical question of how agents can store, revise, and reuse what they learn during interaction.'
}, {
  time: '14:15',
  end: '15:00',
  kind: 'talk',
  speakerId: 'dat',
  title: 'WorldTest: Evaluating World-Model Learning with Environment-Level Queries and a Case Study on AutumnBench',
  person: 'Dat Nguyen',
  aff: 'Postdoctoral Fellow, Harvard & Basis Research Institute',
  kindLabel: 'Talk 6',
  abstract: 'What does it mean for an AI agent to understand the world it acts in? A capable agent should learn world models that support many downstream inferences: predicting unobserved states, planning, and detecting changes in dynamics. Yet today\'s agents are trained and scored on next-frame prediction and reward in the same environment, which tells us little about genuine understanding. This talk introduces WorldTest, a protocol that evaluates world-model learning through environment-level queries: after a reward-free phase of interacting with an environment, an agent is scored on derived tests posed in a different but related environment, making evaluation open-ended and agnostic to how the model is represented. As a case study, I\'ll present AutumnBench, 43 interactive grid-world environments, and 129 tasks spanning masked-frame prediction, planning, and detecting changes to causal dynamics, and a head-to-head comparison of 517 humans against three frontier models. Humans consistently come out ahead, and scaling compute helps in some environments but not others. I\'ll unpack where and why the gap appears, what it reveals about the exploration and causal reasoning current models lack, and what closing it would require.'
}, {
  time: '15:30',
  end: '16:10',
  kind: 'talk',
  speakerId: 'yifan',
  title: 'Understanding and Optimizing Agent Skills for Self-Evolving LLM Agents',
  person: 'Yifan Yang',
  aff: 'Senior Research SDE, Microsoft Research Asia',
  kindLabel: 'Talk 7',
  abstract: 'Large language model agents increasingly rely on reusable skills — structured procedural artifacts that encode domain knowledge, tool-use policies, constraints, and failure lessons. However, two fundamental questions remain underexplored: what makes a generated skill actually useful, and how can such skills be improved reliably without updating model weights? In this talk, I will present two complementary works that study agent skills from both an analytical and an optimization perspective. First, SkillLens provides a utility-grounded study of the full skill lifecycle, from experience generation to skill extraction and skill consumption. Across diverse domains, extractors, and target agents, we show that model-generated skills are beneficial on average but can also cause negative transfer; moreover, skill utility is not reliably predicted by model scale, baseline task performance, or textual plausibility. These findings reveal key properties of useful skills, such as failure-mechanism encoding, actionable specificity, and high-risk action blacklists. Second, SkillOpt turns these insights into a controllable training framework by treating the skill document itself as the external trainable state of a frozen agent. SkillOpt converts scored rollouts into bounded add/delete/replace edits, accepts updates only through held-out validation, and uses rejected-edit memory and slow/meta updates to stabilize skill evolution. Together, these works argue that agent skills should be viewed not as static prompts, but as trainable, auditable, and reusable procedural memory for self-evolving agents.'
}, {
  time: '16:10',
  end: '16:50',
  kind: 'talk',
  speakerId: 'jea',
  title: 'Memory as a Window into Intelligence: Toward Shared Principles in Brain and AI',
  person: 'Jea Kwon',
  aff: 'Postdoctoral Fellow, MPI for Security and Privacy',
  kindLabel: 'Talk 8',
  abstract: 'To fly, we did not need to become birds — but birds and airplanes share the same aerodynamics. The same may be true of brains and artificial intelligence. This talk asks what shared principles of learning and memory might underlie intelligence in both systems, and uses memory as a lens for understanding intelligence itself. I first revisit the relationship between the hippocampus and the Transformer, showing that an NMDA-receptor-inspired nonlinearity governs long-term memory and gives rise to place-cell-like representations within a Transformer\'s feed-forward layers. I then introduce AI Engrams, a framework that translates the neuroscientific criteria for a memory engram into algebraic constraints, yielding a closed-form, architecture-agnostic estimator that locates where specific memories reside in a model\'s parameters. This formulation connects biological memory axioms to information geometry through the Fisher Information Matrix, and scales to billion-parameter language and diffusion models, enabling surgical unlearning, combinatorial concept removal, and precise interpretability. I close with a central conviction: interpretability, steerability, and alignment form a causal chain, and precise memory tracing is its first link toward trustworthy AI.'
}, {
  time: '16:50',
  end: '17:30',
  kind: 'talk',
  speakerId: 'lance',
  title: 'A Natural Approach Toward Agent Foundation Models',
  person: 'Lancelot Da Costa',
  aff: 'Postdoctoral Fellow, MPI for Intelligent Systems',
  kindLabel: 'Talk 9',
  abstract: 'As the machine learning community explores alternatives to LLMs toward next-generation AI agents, this talk describes one such approach. This approach, known as active inference, originates in mathematical descriptions of the brain and behavior from neuroscience developed over the past two decades. I will present an ongoing research program that aims to scale this approach toward working, adaptive and generalizable AI agents. Space permitting, priority will be given to state-of-the-art developments and how one could marry this perspective with the current machine learning state-of-the-art. The overview of the research program is accessible at lancelotdacosta.com/research and resonates closely with topics such as probabilistic inference, program induction, intrinsic motivation and Bayesian methods.'
}];
function linkifyAbstract(text) {
  // Split on URLs (http(s) or bare domains) and render matches as anchors.
  const re = /((?:https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s,;]*)?)/gi;
  const parts = [];
  let last = 0,
    m,
    key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const raw = m[0];
    const href = raw.startsWith('http') ? raw : 'https://' + raw;
    parts.push(/*#__PURE__*/React.createElement("a", {
      key: key++,
      href: href,
      target: "_blank",
      rel: "noreferrer",
      className: "abstract-link"
    }, raw));
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
function ProgramRow({
  row,
  expanded,
  onToggle,
  onSpeakerClick,
  lang
}) {
  const hasDetail = !!row.abstract;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `program-row ${row.kind}${row.lead ? ' has-lead' : ''}`,
    onClick: () => hasDetail && onToggle(),
    style: {
      cursor: hasDetail ? 'pointer' : 'default'
    },
    role: hasDetail ? 'button' : undefined,
    "aria-expanded": hasDetail ? expanded : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, row.time), /*#__PURE__*/React.createElement("div", null, row.lead ? /*#__PURE__*/React.createElement("div", {
    className: "row-lead"
  }, lang === 'kr' ? row.lead.kr : row.lead.en) : null, /*#__PURE__*/React.createElement("h3", {
    className: "title",
    dangerouslySetInnerHTML: {
      __html: row.title
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "person"
  }, row.speakerId ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "— "), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "person-link",
    onClick: e => {
      e.stopPropagation();
      onSpeakerClick(row.speakerId);
    }
  }, row.person)) : /*#__PURE__*/React.createElement("span", null, "— ", row.person), row.aff ? /*#__PURE__*/React.createElement("small", null, row.aff) : null)), /*#__PURE__*/React.createElement("div", {
    className: `row-toggle ${expanded ? 'open' : ''}`,
    "aria-hidden": !hasDetail
  }, hasDetail ? /*#__PURE__*/React.createElement(ChevronDown, {
    size: 16
  }) : null)), expanded && hasDetail && /*#__PURE__*/React.createElement("div", {
    className: "program-row__detail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abstract-kicker"
  }, row.kindLabel || 'Abstract', " ", /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "·"), " abstract", /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "lang"
  }, "English")), /*#__PURE__*/React.createElement("p", null, linkifyAbstract(row.abstract))));
}
function Program({
  onSpeakerClick,
  lang
}) {
  const [open, setOpen] = React.useState({});
  return /*#__PURE__*/React.createElement("section", {
    id: "program",
    className: "program-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("h2", null, lang === 'kr' ? '2026년 7월 6일 (월)' : 'Monday · July 6, 2026')), /*#__PURE__*/React.createElement("div", {
    className: "day-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '등록' : 'Check-in'), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, "08:15 – 09:00")), PROGRAM.slice(0, 2).map((row, i) => /*#__PURE__*/React.createElement(ProgramRow, {
    key: i,
    row: row,
    expanded: !!open[i],
    onToggle: () => setOpen(o => ({
      ...o,
      [i]: !o[i]
    })),
    onSpeakerClick: onSpeakerClick,
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    className: "day-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '커피 브레이크' : 'Coffee break'), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, "10:30 – 11:00")), PROGRAM.slice(2, 4).map((row, i) => {
    const idx = i + 2;
    return /*#__PURE__*/React.createElement(ProgramRow, {
      key: idx,
      row: row,
      expanded: !!open[idx],
      onToggle: () => setOpen(o => ({
        ...o,
        [idx]: !o[idx]
      })),
      onSpeakerClick: onSpeakerClick,
      lang: lang
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "callout-agi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, "12:20"), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, lang === 'kr' ? '점심 시간' : 'Lunch break'))), PROGRAM.slice(4, 6).map((row, i) => {
    const idx = i + 4;
    return /*#__PURE__*/React.createElement(ProgramRow, {
      key: idx,
      row: row,
      expanded: !!open[idx],
      onToggle: () => setOpen(o => ({
        ...o,
        [idx]: !o[idx]
      })),
      onSpeakerClick: onSpeakerClick,
      lang: lang
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "day-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '커피 브레이크' : 'Coffee break'), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, "15:00 – 15:30")), PROGRAM.slice(6).map((row, i) => {
    const idx = i + 6;
    return /*#__PURE__*/React.createElement(ProgramRow, {
      key: idx,
      row: row,
      expanded: !!open[idx],
      onToggle: () => setOpen(o => ({
        ...o,
        [idx]: !o[idx]
      })),
      onSpeakerClick: onSpeakerClick,
      lang: lang
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: "callout-agi reception"
  }, /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, "18:30"), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, lang === 'kr' ? '워크샵 뒤풀이' : 'Workshop afterparty')))));
}
Object.assign(window, {
  Program
});

/* ===== Speakers.jsx ===== */
/* Speakers — real lineup for TAIC. Click any card to see full bio. */
const SPEAKERS = [{
  id: 'sundong',
  photo: 'assets/speakers/sundong.png',
  name: 'Sundong Kim',
  aff: 'GIST · Assistant Professor',
  talk: 'Reasoning, Evaluation, and What Comes After: Three Pointers from ARC-AGI',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Sundong Kim is an Assistant Professor at GIST, where he leads the Data Science Lab. His research interests lie at the intersection of open-ended problem solving, program synthesis, neuro-symbolic learning, and reinforcement learning — with a long-standing focus on the ARC-AGI benchmark as a testbed for human-like abstract reasoning.', 'More recently, his focus has centered on ARC-AGI-3, where his group develops self-evolving agents and harness-based scaffolds for program-synthesis-style reasoning. Over the past several years, he has also developed a series of ARC-related environments and datasets — including O2ARC, ARCLE, ARCTraj, and GIFARC — to study how humans and machines approach novel problems, with adjacent interests in human–AI alignment and evaluation frameworks.', 'Prior to joining GIST in 2022, he was a research scientist at the Institute for Basic Science (IBS), where he worked on predictive analytics and AI for social good in collaboration with customs organizations. He received his PhD from KAIST in 2019.'],
  link: 'https://sundong.kim'
}, {
  id: 'xiaoxiao',
  photo: 'assets/speakers/xiaoxiao.jpeg',
  name: 'Xiaoxiao Li',
  aff: 'UBC · Associate Professor',
  talk: 'Diagnosing, Routing, and Recovering from Errors in LLM Agent Optimization and Deployment',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Dr. Xiaoxiao Li is an Associate Professor in the Department of Electrical and Computer Engineering at the University of British Columbia, a Faculty Member at the Vector Institute, and Visiting Faculty Member at Google. Dr. Li holds a Canada Research Chair (Tier II) in Responsible AI and is recognized as a Canada CIFAR AI Chair.', 'Dr. Li\'s research aims to enhance the trustworthiness and efficiency of AI models, bridging the gap between cutting-edge AI research and practical real-world applications, such as healthcare. Dr. Li’s current interests include mechanistic analysis of large language and vision-language models (LLMs/VLMs), developing hypothesis-driven evaluations, and advancing methodologies toward artificial general intelligence (AGI).'],
  link: 'https://xxlya.github.io/'
}, {
  id: 'hwanjun',
  photo: 'assets/speakers/hwanjun.jpg',
  name: 'Hwanjun Song',
  aff: 'KAIST · Ewon Assistant Professor',
  talk: 'Toward Reliable AI Capability in Long Video Understanding',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Hwanjun Song is an Ewon Assistant Professor in the Department of Industrial and Systems Engineering at KAIST, and an affiliated faculty member of the Graduate School of Data Science and the Department of AX. He is currently leading the Data Intelligence System Lab (DISLab).', 'His research focuses on data-centric and trustworthy agentic AI, with an emphasis on improving the reliability, evaluation, and alignment of large-scale agent systems. He received his Ph.D. at KAIST in 2020.', 'He held research positions at Google Research (2020–2021), NAVER CLOVA AI Research (2021–2022), and Amazon Web Services (2023). He was selected as an Asian Trustworthy Machine Learning Fellow (2024) and currently serves as a board member of the Data Society at the Korean Institute of Information Scientists and Engineers. Honors include the NAVER N-Innovation Award (2022), the SAMSUNG Humantech Award (2024), the KAIST Global Research Collaboration Award (2024), and the KAIST Technology Innovation Award (2025).'],
  link: 'https://disl-lab.github.io/'
}, {
  id: 'dongmin',
  photo: 'assets/speakers/dongmin.jpg',
  name: 'Dongmin Park',
  aff: 'KRAFTON AI · Foundation Model Research Team Lead',
  talk: 'Intuition for Modern Foundation Model Training Data',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Dongmin Park is a Data Lead of the Foundation Model Research Department at KRAFTON AI, where he leads research on large-scale multi-modal data for training foundation models, including large language models (LLMs) and diffusion models. He received his Ph.D. from the Korea Advanced Institute of Science and Technology (KAIST) in 2024 under the supervision of Prof. Jae-Gil Lee.', 'During his doctoral studies, he worked as a Research Scientist Intern at several leading AI research organizations, including Meta AI, NAVER AI, and KRAFTON AI, contributing to research in foundation models and data-centric AI. He currently serves as an Area Chair for leading conferences, such as NeurIPS.', 'He currently leads the development and training of Raon, KRAFTON\u2019s family of multi-modal LLMs, and several frontier research initiatives, including Looped dLLMs, GameVLA, and GameBench (Orak).'],
  link: 'https://dongmean.github.io/'
}, {
  id: 'laura',
  photo: 'assets/speakers/laura.jpg',
  name: 'Laura Mascarell',
  aff: 'GIST · Postdoctoral Fellow',
  talk: 'World Models for Open-Ended Adaptation',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Laura Mascarell is a Postdoctoral Researcher in Professor Sundong Kim\'s lab at GIST. Her current research contributes to the lab\'s work on ARC-AGI-3 and self-evolving agents, focusing on how AI agents adapt to unfamiliar environments and generalize beyond fixed task distributions.', 'More broadly, she is interested in agent–environment interaction, world models, and the role of causal structure in building more general and adaptive AI systems.', 'Before joining GIST in 2025, Laura was a postdoctoral researcher at ETH Zurich, where she conducted research on information-theoretic approaches to natural language generation, with a focus on limited-data settings. She has a background in Computer Science and holds a PhD in Computational Linguistics from the University of Zurich.'],
  link: 'https://lauramascarell.com/'
}, {
  id: 'dat',
  photo: 'assets/speakers/dat.jpg',
  name: 'Dat Nguyen',
  aff: 'Harvard & Basis Research Institute · Postdoctoral Fellow',
  talk: 'WorldTest: Evaluating World-Model Learning with Environment-Level Queries and a Case Study on AutumnBench',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Dat Nguyen is a Postdoctoral Fellow at the Harvard School of Engineering and Applied Sciences and the Basis Research Institute, working at the intersection of program synthesis, neuro-symbolic systems, and probabilistic programming.', 'He completed his PhD at the University of Melbourne, focusing on machine learning-based debugging. His current research focuses on how agents learn and represent world models, including WorldTest, the benchmark for evaluating world-model learning that this talk presents.'],
  link: 'https://datvo06.github.io/'
}, {
  id: 'yifan',
  photo: 'assets/speakers/yifan.jpg',
  name: 'Yifan Yang',
  aff: 'Microsoft Research Asia · Senior Research SDE',
  talk: 'Understanding and Optimizing Agent Skills for Self-Evolving LLM Agents',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Yifan Yang is a Senior Research SDE at Microsoft Research Asia (MSRA), Shanghai, where he joined in 2021. His research focuses on visual content generation, multimodal foundation models, and general-purpose agentic systems, with a particular emphasis on bridging research innovation and real-world deployment.', 'He has published over 30 peer-reviewed papers in top-tier venues, including CVPR, ICCV, ECCV, NeurIPS, ICLR, ICML, and AAAI, and has filed more than ten international patents. He has also served as an Area Chair for leading conferences such as NeurIPS, ICML, and ICLR.', 'He has been deeply involved in the development of Microsoft\u2019s Phi model family, including Phi-3 and Phi-4, with several of his techniques successfully transferred into core Microsoft products including Office and Azure. His recent work LLM2CLIP, which enhances cross-modal representation learning by leveraging large language models, has been integrated into the Phi-4-mini pretraining pipeline and was recognized with the AAAI 2026 Outstanding Paper Award.', 'His recent research also explores multimodal agents, commercial visual content generation, text-to-audio-video generation, and structured multimodal reasoning.'],
  link: 'https://www.microsoft.com/en-us/research/people/yifanyang/'
}, {
  id: 'jea',
  photo: 'assets/speakers/jea.jpg',
  name: 'Jea Kwon',
  aff: 'MPI for Security and Privacy · Postdoctoral Fellow',
  talk: 'Memory as a Window into Intelligence: Toward Shared Principles in Brain and AI',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Jea Kwon is a Postdoctoral Fellow at the Max Planck Institute for Security and Privacy (MPI-SP), working on machine memory, mechanistic interpretability, and alignment in large language models. With a background spanning neuroscience wet labs and AI research, he studies "AI Engrams" — locating and editing where learned knowledge resides within model parameters.'],
  link: 'https://jeakwon.github.io/'
}, {
  id: 'lance',
  photo: 'assets/speakers/lance.jpg',
  name: 'Lancelot Da Costa',
  aff: 'MPI for Intelligent Systems · Postdoctoral Fellow',
  talk: 'A Natural Approach Toward Agent Foundation Models',
  status: 'confirmed',
  talkLength: '60 min',
  bio: ['Lancelot Da Costa is a mathematician developing foundations for understanding and building intelligence. His work has helped formalize a well-known theory of brain function (the free energy principle), and he now uses these ideas to develop AI agents that learn like scientists. He currently works as a postdoctoral researcher at the Max Planck Institute for Intelligent Systems in Tübingen, Germany.', 'He has authored over 45 papers in the fields of artificial intelligence, mathematics, physics and cognitive science. He received the Best Maths PhD thesis prize from Imperial College London, Best Paper awards from Entropy, and excellence awards from the American Physical Society, G-Research and Luxembourg\'s National Research Fund. His work has been featured by Machine Learning Street Talk, the Active Inference Institute and the Singularity project.', 'Lance received his PhD in Mathematics from Imperial College London, Master degrees in Pure Mathematics from Cambridge University and Brain Sciences from UCL, and a Bachelor of Mathematics from EPFL.'],
  link: 'https://lancelotdacosta.com'
}];
function Speakers({
  onOpenBio,
  contactHref,
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "speakers",
    style: {
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("h2", null, lang === 'kr' ? '초청 연사.' : 'Invited speakers.')), /*#__PURE__*/React.createElement("div", {
    className: "speakers-grid"
  }, SPEAKERS.map(s => {
    if (s.open) {
      return /*#__PURE__*/React.createElement("a", {
        className: "speaker-card open-slot",
        key: s.id,
        href: contactHref
      }, /*#__PURE__*/React.createElement("div", {
        className: "tick"
      }), /*#__PURE__*/React.createElement("h3", null, "Open slot · join the lineup"), /*#__PURE__*/React.createElement("p", {
        className: "aff",
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gist-red)'
        }
      }, "Speakers welcome"), /*#__PURE__*/React.createElement("p", {
        className: "talk"
      }, "Ongoing work welcome: early ideas, position arguments, and negative results all count."));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: `speaker-card ${s.status === 'arranging' ? 'arranging' : ''}`,
      key: s.id,
      onClick: () => onOpenBio(s),
      role: "button",
      tabIndex: 0
    }, s.status === 'arranging' ? /*#__PURE__*/React.createElement("span", {
      className: "status"
    }, "Arranging") : null, /*#__PURE__*/React.createElement("div", {
      className: "photo"
    }, s.photo ? /*#__PURE__*/React.createElement("img", {
      src: s.photo,
      alt: s.name,
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement("span", {
      className: "photo-initials"
    }, (s.name || '').split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", {
      className: "corner"
    }, "— bio")), /*#__PURE__*/React.createElement("div", {
      className: "tick"
    }), /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("p", {
      className: "aff"
    }, s.aff), /*#__PURE__*/React.createElement("p", {
      className: "talk"
    }, s.talk === 'Title tentative' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, "Title"), " ", /*#__PURE__*/React.createElement("span", {
      className: "pending"
    }, "tentative")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\"", s.talk, "\"")));
  }))));
}
function BioDrawer({
  speaker,
  contactHref,
  lang,
  onClose
}) {
  const open = !!speaker;
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `drawer-backdrop ${open ? 'open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: `drawer ${open ? 'open' : ''}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer__head"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase'
    }
  }, speaker && speaker.openSlot ? lang === 'kr' ? '오픈 슬롯' : 'Open slot' : lang === 'kr' ? '약력' : 'Bio'), /*#__PURE__*/React.createElement("button", {
    className: "drawer__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "drawer__body"
  }, speaker && speaker.openSlot ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Join the lineup"), /*#__PURE__*/React.createElement("p", {
    className: "aff"
  }, "All stages of work welcome"), /*#__PURE__*/React.createElement("div", {
    className: "talk-title"
  }, "\"Ongoing work welcome: early ideas, position arguments, negative results all count.\""), /*#__PURE__*/React.createElement("p", null, "If you are working on something relevant and would like to present, please reach out — all stages of work, from early ideas to mature results, are welcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--primary",
    href: contactHref,
    onClick: onClose
  }, "Email organizers ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 14
  })))) : speaker ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bio-head"
  }, speaker.photo ? /*#__PURE__*/React.createElement("img", {
    src: speaker.photo,
    alt: speaker.name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "bio-initials"
  }, (speaker.name || '').split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, speaker.name), /*#__PURE__*/React.createElement("p", {
    className: "aff"
  }, speaker.aff))), /*#__PURE__*/React.createElement("div", {
    className: "talk-title"
  }, speaker.talk === 'Title tentative' ? /*#__PURE__*/React.createElement("em", null, "Title to be confirmed.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\"", speaker.talk, "\"")), (speaker.bio || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), speaker.link ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: speaker.link,
    target: "_blank",
    rel: "noreferrer",
    className: "speaker-link"
  }, lang === 'kr' ? '웹사이트' : 'Website', " ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 12
  }))) : null) : null)));
}
Object.assign(window, {
  Speakers,
  BioDrawer,
  SPEAKERS
});

/* ===== Venue.jsx ===== */
/* Venue / travel — SpaceShare Samseong Station Center, Gangnam, Seoul. */
function Venue({
  lang
}) {
  const MAP_LINK_Q = '스페이스쉐어 삼성역센터';
  const MAP_EMBED = 'https://www.google.com/maps?q=37.510922,127.064237&ll=37.510922,127.0632&z=16&output=embed';
  return /*#__PURE__*/React.createElement("section", {
    id: "venue",
    className: "venue-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("h2", null, lang === 'kr' ? '장소 안내' : 'Venue location'), /*#__PURE__*/React.createElement("p", {
    className: "deck",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 21,
      fontWeight: 500,
      color: 'var(--ink)',
      fontStyle: 'normal',
      letterSpacing: '-0.01em'
    }
  }, lang === 'kr' ? '스페이스쉐어 삼성역센터' : 'Spaceshare Samseong COEX Center'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginTop: 6,
      fontStyle: 'normal'
    }
  }, lang === 'kr' ? '대화빌딩 (B1F) · 리젠시홀' : 'Daehwa Building (B1F) · Regency Hall'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 6,
      fontStyle: 'normal'
    }
  }, lang === 'kr' ? '서울 강남구 영동대로96길 20' : '20 Yeongdong-daero 96-gil, Gangnam-gu, Seoul'))), /*#__PURE__*/React.createElement("div", {
    className: "venue-grid",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("iframe", {
    className: "venue-map-iframe",
    title: "Map of SpaceShare Samseong Station Center, Gangnam, Seoul",
    src: MAP_EMBED,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "venue-map-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "map-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://map.naver.com/p/search/스페이스쉐어 삼성역센터",
    target: "_blank",
    rel: "noreferrer"
  }, "Naver Map ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 11
  })), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: `https://maps.google.com/?q=${encodeURIComponent(MAP_LINK_Q)}`,
    target: "_blank",
    rel: "noreferrer"
  }, "Google Maps ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 11
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "venue-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? 'COEX에서' : 'From COEX'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, lang === 'kr' ? 'ICML 2026 행사장에서 도보 약 10분' : '10 min walk from the ICML 2026 venue')), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '대중교통' : 'Transit'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, lang === 'kr' ? '2호선 삼성역 · 도보 약 5분' : 'Samseong Station (Line 2) · 5 min walk')), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, lang === 'kr' ? '공항에서' : 'From airport'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, lang === 'kr' ? '인천공항 → 삼성역 · 약 2시간' : 'ICN → Samseong Station · about 2 h', /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, lang === 'kr' ? '공항버스 또는 공항철도 후 2호선 환승.' : 'Airport bus, or airport rail then transfer to Line 2.')))))));
}
Object.assign(window, {
  Venue
});

/* ===== Organizers.jsx ===== */
/* Organizers + contact. */

function Organizers({
  lang,
  registerUrl,
  registerOpen,
  registerMode,
  lumaEventId
}) {
  const organizers = [{
    name: 'Sundong Kim',
    aff: 'GIST',
    email: 'sundong@gist.ac.kr'
  }, {
    name: 'Laura Mascarell',
    aff: 'GIST',
    email: 'lmascarell@gist.ac.kr'
  }, {
    name: 'Jihwan Lee',
    aff: 'GIST',
    email: 'jihwan.lee@gm.gist.ac.kr'
  }, {
    name: 'Woochang Sim',
    aff: 'GIST',
    email: 'woochang@gm.gist.ac.kr'
  }, {
    name: 'Jaehyun Park',
    aff: 'GIST',
    email: 'white314@gm.gist.ac.kr'
  }, {
    name: 'Jihyun Kim',
    aff: 'GIST',
    email: 'jihyun22@gist.ac.kr'
  }];
  const orgList = organizers.map(o => o.email).join(',');
  const allMailto = `mailto:${orgList}?subject=${encodeURIComponent('TAIC Workshop — July 6, 2026')}`;
  return /*#__PURE__*/React.createElement("section", {
    id: "organizers",
    className: "contact-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "contact-h2"
  }, lang === 'kr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "주최진에게 ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gist-red)',
      fontStyle: 'italic',
      fontWeight: 460
    }
  }, "연락 주세요.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Reach the ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gist-red)',
      fontStyle: 'italic',
      fontWeight: 460
    }
  }, "organizers."))), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, lang === 'kr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "워크샵에 관심 있으신가요? ", /*#__PURE__*/React.createElement("em", null, "연락 주세요.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Questions about the workshop? ", /*#__PURE__*/React.createElement("em", null, "We'd be glad to help."))), /*#__PURE__*/React.createElement("p", null, lang === 'kr' ? '프로그램이나 운영에 관한 문의는 아래 주최진에게 연락 주세요.' : 'For questions about the program or logistics, contact the organizers below.'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--primary",
    href: allMailto
  }, lang === 'kr' ? '문의하기' : 'Email the organizers', " ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h3", null, lang === 'kr' ? '주최진' : 'Organizers'), /*#__PURE__*/React.createElement("div", {
    className: "person-grid"
  }, organizers.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.email,
    className: "person"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, o.name), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${o.email}`
  }, o.email)))))), registerOpen && registerMode === 'embed' && /*#__PURE__*/React.createElement("div", {
    id: "register",
    className: "register-embed"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "register-embed__title"
  }, lang === 'kr' ? '참가 신청' : 'Register'), /*#__PURE__*/React.createElement("iframe", {
    src: `https://luma.com/embed/event/${lumaEventId}/simple`,
    width: "100%",
    height: "450",
    frameBorder: "0",
    style: {
      border: '1px solid var(--rule-strong)',
      borderRadius: 'var(--r-3)',
      maxWidth: 600
    },
    allow: "fullscreen; payment",
    "aria-hidden": "false",
    tabIndex: 0,
    title: "Event registration"
  }))));
}
Object.assign(window, {
  Organizers
});

/* ===== Recap.jsx ===== */
/* Recap — post-event closing band with a single from-behind room photo. */
function Recap({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "recap",
    className: "recap-section",
    "data-screen-label": "Recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("h2", null, lang === 'kr' ? '함께해 주셔서 감사합니다!' : 'Thank you for joining!'), /*#__PURE__*/React.createElement("p", {
    className: "deck",
    style: {
      marginTop: 12,
      fontStyle: 'normal',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--ink-2)',
      maxWidth: 560
    }
  }, lang === 'kr' ? '400명이 넘는 신청, 아홉 개의 발표, 그리고 열린 교류의 하루 — 연사와 참가자 여러분 모두 감사합니다.' : 'Over 400 registrations, nine talks, and a day of open exchange — thank you to our speakers and everyone who took part.')), /*#__PURE__*/React.createElement("figure", {
    className: "recap-figure"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/recap-photo.jpg?v=2",
    alt: "A full room of attendees during a talk at the workshop, Spaceshare Samseong COEX Center, Seoul",
    loading: "lazy",
    width: "2400",
    height: "768"
  }))));
}
Object.assign(window, {
  Recap
});

/* ===== FooterBar.jsx ===== */
/* Footer. */
function FooterBar({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "footer__brand"
  }, "Thinking about ", /*#__PURE__*/React.createElement("em", null, "AI's"), " Capability"), /*#__PURE__*/React.createElement("p", {
    className: "footer__small"
  }, "Pre-ICML Workshop · GIST AI Days")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "head"
  }, lang === 'kr' ? '워크샵' : 'Workshop'), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, lang === 'kr' ? '소개' : 'About'), /*#__PURE__*/React.createElement("a", {
    href: "#program"
  }, lang === 'kr' ? '프로그램' : 'Program'), /*#__PURE__*/React.createElement("a", {
    href: "#speakers"
  }, lang === 'kr' ? '연사' : 'Speakers'), /*#__PURE__*/React.createElement("a", {
    href: "#venue"
  }, lang === 'kr' ? '장소' : 'Venue'), /*#__PURE__*/React.createElement("a", {
    href: "#organizers"
  }, lang === 'kr' ? '주최' : 'Organizers')), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "head"
  }, lang === 'kr' ? '링크' : 'Links'), /*#__PURE__*/React.createElement("a", {
    href: "https://icml.cc/",
    target: "_blank",
    rel: "noreferrer"
  }, "ICML 2026 ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 11
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://mseeng.gist.ac.kr/aieng/index.do",
    target: "_blank",
    rel: "noreferrer"
  }, "AI at GIST ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 11
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://sundong.kim",
    target: "_blank",
    rel: "noreferrer"
  }, "Data Science Lab ", /*#__PURE__*/React.createElement(ArrowUpRight, {
    size: 11
  })))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-logos",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '15px',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.gist.ac.kr",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "footer-mark",
    src: "assets/gist-logo.png",
    alt: "GIST",
    width: "26",
    height: "26",
    style: {
      height: '26px',
      width: 'auto',
      display: 'inline-block',
      flex: '0 0 auto'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://mseeng.gist.ac.kr/aieng/index.do",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "footer-mark footer-mark--ai",
    src: "assets/ai-gist-logo.png",
    alt: "GIST AI Graduate School",
    height: "37",
    style: {
      height: '37px',
      width: 'auto',
      display: 'inline-block',
      flex: '0 0 auto'
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://sundong.kim",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "footer-mark footer-mark--lab",
    src: "assets/lab-logo.png",
    alt: "Data Science Lab",
    height: "26",
    style: {
      height: '26px',
      width: 'auto',
      display: 'inline-block',
      flex: '0 0 auto'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "footer-bottom-divider",
    style: {
      display: 'inline-block',
      width: '12px'
    }
  }), /*#__PURE__*/React.createElement("span", null, "TAIC Workshop 2026")))));
}
Object.assign(window, {
  FooterBar
});

