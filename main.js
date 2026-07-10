"use strict";

/* App entry — wires the prototype components together for production.

   The design choices (theme/palette/hero style/etc.) are baked into the
   data-* attributes on <body> in index.html; no tweaks panel.

   v8: mobile hamburger menu is built into the Nav component itself.
   v9: a Register CTA in the Hero (and forward-compat hook in Organizers)
       driven by REGISTRATION_URL below. Leave it as '' and the buttons
       show a disabled "Register soon" placeholder. Paste a Google Form
       URL and they become live links to it. */

(function () {
  var e = React.createElement;

  // ──────────────────────────────────────────────────────────────────
  // REGISTRATION: the Luma workshop event drives every "Register" button.
  // Leave REGISTRATION_URL as '' to show the disabled "Register soon"
  // placeholder; set it to the Luma event link to make the buttons live.
  //
  // registerMode:
  //   'button' — Register opens the Luma event page in a new tab (current)
  //   'embed'  — Register scrolls to an embedded Luma form in Organizers
  //              (needs LUMA_EVENT_ID set to the evt-... id; not used now)
  // ──────────────────────────────────────────────────────────────────
  var REGISTRATION_URL = 'https://luma.com/ojd6dd4p';
  var LUMA_EVENT_ID = '';            // only needed for embed mode
  var registerMode = 'button';       // simple external link to the Luma page
  var registerOpen = REGISTRATION_URL.length > 0;

  /* Persisted language state. Defaults to English. */
  function useLang() {
    var initial = 'en';
    try {
      var saved = window.localStorage.getItem('taic-lang');
      if (saved === 'en' || saved === 'kr') initial = saved;
    } catch (_) { /* localStorage may be blocked; fall through */ }
    var s = React.useState(initial);
    var lang = s[0], setLang = s[1];
    var update = React.useCallback(function (l) {
      setLang(l);
      try { window.localStorage.setItem('taic-lang', l); } catch (_) {}
      document.documentElement.setAttribute('lang', l === 'kr' ? 'ko' : 'en');
    }, []);
    React.useEffect(function () {
      document.documentElement.setAttribute('lang', lang === 'kr' ? 'ko' : 'en');
    }, [lang]);
    return [lang, update];
  }

  function App() {
    var activeState = React.useState('top');
    var active = activeState[0], setActive = activeState[1];
    var bioState = React.useState(null);
    var bio = bioState[0], setBio = bioState[1];
    var langHook = useLang();
    var lang = langHook[0], setLang = langHook[1];

    // mailto for "propose a talk / RSVP" CTAs — addresses the three
    // original organizers (matches the source's ORG_EMAILS).
    var ORG_EMAILS = ['sundong@gist.ac.kr', 'lmascarell@gist.ac.kr', 'jihwan.lee@gm.gist.ac.kr'];
    var contactHref =
      'mailto:' + ORG_EMAILS.join(',') +
      '?subject=' + encodeURIComponent('TAIC Workshop — July 6, 2026');

    var scrollTo = function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      // Land the section's heading just below the sticky nav, rather than
      // the section's padding-box top (which leaves a big empty gap = "too
      // early"). Falls back to the section itself if no heading is found.
      var target = el.querySelector('h1, h2, .contact-h2') || el;
      var top = id === 'top'
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: top, behavior: 'smooth' });
    };

    // Section tracking for the nav's "active" highlight.
    React.useEffect(function () {
      var ids = ['about', 'program', 'speakers', 'venue', 'organizers'];
      var onScroll = function () {
        var y = window.scrollY + 140;
        var cur = 'top';
        for (var i = 0; i < ids.length; i++) {
          var el = document.getElementById(ids[i]);
          if (el && el.offsetTop <= y) cur = ids[i];
        }
        var docHeight = document.documentElement.scrollHeight;
        var atBottom = window.scrollY + window.innerHeight >= docHeight - 8;
        if (atBottom) cur = ids[ids.length - 1];
        setActive(cur);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return function () { window.removeEventListener('scroll', onScroll); };
    }, []);

    var openBio = function (s) { setBio(s); };

    return e('div', null,
      e(window.Nav, {
        active: active,
        logoVariant: 'frame',
        lang: lang,
        onLang: setLang,
        onSectionClick: scrollTo,
      }),
      e(window.Hero, {
        lang: lang,
        onSectionClick: scrollTo,
        registerUrl: REGISTRATION_URL,
        registerOpen: registerOpen,
        registerMode: registerMode,
        lumaEventId: LUMA_EVENT_ID,
      }),
      e(window.About, { aboutStyle: 'questions', lang: lang, onSectionClick: scrollTo }),
      e(window.Program, {
        lang: lang,
        onSpeakerClick: function (id) {
          setBio(window.SPEAKERS.find(function (s) { return s.id === id; }));
        }
      }),
      e(window.Speakers, { lang: lang, onOpenBio: openBio, contactHref: contactHref }),
      e(window.Venue, { lang: lang }),
      e(window.Organizers, {
        lang: lang,
        registerUrl: REGISTRATION_URL,
        registerOpen: registerOpen,
        registerMode: registerMode,
        lumaEventId: LUMA_EVENT_ID,
      }),
      e(window.Recap, { lang: lang }),
      e(window.FooterBar, { lang: lang }),
      e(window.BioDrawer, {
        speaker: bio,
        lang: lang,
        contactHref: contactHref,
        onClose: function () { setBio(null); }
      })
    );
  }

  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
})();
