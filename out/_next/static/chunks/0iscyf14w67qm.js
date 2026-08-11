(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78811,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(44066)._(e.r(81961)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${o}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},21690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(1685);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37875,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(35915),o=e.r(89399);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},22051,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},33596,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return y}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(44066),i=e.r(44501),s=n._(e.r(1685)),l=e.r(78811),d=e.r(72661),c=e.r(21690),p=e.r(35915),u=e.r(79015);e.r(49133);let f=e.r(3867),h=e.r(66504),m=e.r(37875),g=e.r(71815);function b(t){var r,a;let o,n,b,[y,v]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:k,as:j,children:_,prefetch:S=null,passHref:C,replace:z,shallow:P,scroll:E,onClick:N,onMouseEnter:O,onTouchStart:M,legacyBehavior:R=!1,onNavigate:$,transitionTypes:I,ref:D,unstable_dynamicOnHover:T,...A}=t;o=_,R&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let L=s.default.useContext(d.AppRouterContext),U=!1!==S,B=!1!==S?null===(a=S)||"auto"===a?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(r=j||k)?r:(0,l.formatUrl)(r);if(R){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let W=R?n&&"object"==typeof n&&n.ref:D,G=s.default.useCallback(e=>(null!==L&&(w.current=(0,h.mountLinkInstance)(e,F,L,B,U,v)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[U,F,L,B,v]),X={ref:(0,c.useMergedRef)(G,W),onClick(t){R||"function"!=typeof N||N(t),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!L||t.defaultPrevented||function(t,r,a,o,n,i,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(76386);s.default.startTransition(()=>{p(r,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,a.current,l)})}}(t,F,w,z,E,$,I)},onMouseEnter(e){R||"function"!=typeof O||O(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,p.isAbsoluteUrl)(F)?X.href=F:R&&!C&&("a"!==n.type||"href"in n.props)||(X.href=(0,u.addBasePath)(F)),b=R?s.default.cloneElement(n,X):(0,i.jsx)("a",{...A,...X,children:o}),(0,i.jsx)(x.Provider,{value:y,children:b})}e.r(22051);let x=(0,s.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},3985,e=>{"use strict";var t=e.i(1685);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...o,width:a,height:a,stroke:e,strokeWidth:i?24*Number(n)/Number(a):n,className:r("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]]));e.s(["default",0,(e,o)=>{let i=(0,t.forwardRef)(({className:i,...s},l)=>(0,t.createElement)(n,{ref:l,iconNode:o,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...s}));return i.displayName=a(e),i}],3985)},13293,82732,6272,73972,64237,83198,70646,e=>{"use strict";var t=e.i(44501),r=e.i(33596),a=e.i(1685),o=e.i(3985);let n=(0,o.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",0,n],82732);let i=(0,o.default)("facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);e.s(["Facebook",0,i],6272);let s=(0,o.default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);e.s(["Instagram",0,s],73972);let l=(0,o.default)("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",0,l],64237);let d=(0,o.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",0,d],83198);let c=(0,o.default)("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);e.s(["Music",0,c],70646),e.s(["Header",0,function(){let[e,o]=(0,a.useState)(!1),[p,u]=(0,a.useState)(!1),[f,h]=(0,a.useState)("/"),m=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=()=>u(window.scrollY>40);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{h(window.location.pathname)},[]),(0,a.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]);let g=[{href:"/",label:"Home"},{href:"/accommodation",label:"Accommodation"},{href:"/golf",label:"Golf"},{href:"/spa",label:"Spa"},{href:"/amenities",label:"Amenities"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}],b=[{href:"https://www.facebook.com/profile.php?id=61589477902150",icon:i,label:"Facebook"},{href:"https://instagram.com",icon:s,label:"Instagram"},{href:"https://x.com/home",icon:l,label:"X"},{href:"https://tiktok.com/@mtrwenzori",icon:c,label:"TikTok"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ─── tokens ─────────────────────────────── */
        :root {
          --hdr-cream:   #f9f6f1;
          --hdr-forest:  #2c3d2e;
          --hdr-gold:    #b8945a;
          --hdr-gold-lt: #d4aa72;
          --hdr-ink:     #1a1f1b;
          --hdr-muted:   rgba(26,31,27,0.45);
          --hdr-h:       72px;
        }

        /* ─── top bar ─────────────────────────────── */
        .hdr-topbar {
          height: 36px;
          background: var(--hdr-forest);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(16px, 4vw, 48px);
          transition: height 0.4s ease, opacity 0.4s ease;
          overflow: hidden;
        }

        .hdr-topbar.scrolled {
          height: 0;
          opacity: 0;
          pointer-events: none;
        }

        .hdr-topbar-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.55);
        }

        .hdr-topbar-left svg {
          color: var(--hdr-gold);
          flex-shrink: 0;
        }

        .hdr-topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hdr-social-link {
          color: rgba(249,246,241,0.45);
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .hdr-social-link:hover { color: var(--hdr-gold-lt); }

        /* ─── main bar ────────────────────────────── */
        .hdr-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transform: translateY(36px);
          transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, height 0.4s ease;
          height: var(--hdr-h);
          display: flex;
          align-items: center;
        }

        .hdr-bar.scrolled {
          transform: translateY(0);
          background: rgba(249,246,241,0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(26,31,27,0.08), 0 4px 24px rgba(26,31,27,0.06);
        }

        .hdr-bar.menu-open {
          background: var(--hdr-forest);
        }

        .hdr-bar-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 clamp(16px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ─── logo ────────────────────────────────── */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.3);
          transition: border-color 0.3s ease;
        }

        .hdr-logo:hover .hdr-logo-img { border-color: var(--hdr-gold); }

        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .hdr-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--hdr-forest);
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .hdr-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--hdr-gold);
          margin-top: 3px;
          font-weight: 400;
        }

        .hdr-bar.menu-open .hdr-logo-main { color: var(--hdr-cream); }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-main { color: #fff; }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-sub { color: rgba(255,255,255,0.6); }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-img { border-color: rgba(255,255,255,0.3); }

        /* ─── desktop nav ─────────────────────────── */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 1024px) { .hdr-nav { display: none; } }

        .hdr-nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 400;
          color: var(--hdr-ink);
          text-decoration: none;
          padding: 8px 14px;
          transition: color 0.25s ease;
        }

        .hdr-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: var(--hdr-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hdr-nav-link:hover,
        .hdr-nav-link.active { color: var(--hdr-gold); }

        .hdr-nav-link:hover::after,
        .hdr-nav-link.active::after { transform: scaleX(1); }

        /* inverted when hero is visible */
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link {
          color: rgba(255,255,255,0.8);
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link:hover,
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link.active {
          color: #fff;
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link::after {
          background: rgba(255,255,255,0.7);
        }

        /* ─── desktop actions ─────────────────────── */
        .hdr-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) { .hdr-actions { display: none; } }

        .hdr-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--hdr-muted);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .hdr-phone svg { color: var(--hdr-gold); }
        .hdr-phone:hover { color: var(--hdr-gold); }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-phone {
          color: rgba(255,255,255,0.6);
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-phone:hover {
          color: #fff;
        }

        .hdr-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--hdr-gold);
          color: var(--hdr-cream);
          padding: 10px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--hdr-gold);
          border-radius: 1px;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          white-space: nowrap;
        }

        .hdr-book-btn:hover {
          background: var(--hdr-gold-lt);
          border-color: var(--hdr-gold-lt);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(184,148,90,0.35);
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-book-btn {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          backdrop-filter: blur(8px);
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-book-btn:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        /* ─── hamburger ───────────────────────────── */
        .hdr-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 5px;
          padding: 0;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) { .hdr-burger { display: flex; } }

        .hdr-burger-line {
          display: block;
          width: 24px;
          height: 1px;
          background: var(--hdr-forest);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.25s ease,
                      width 0.35s ease;
          transform-origin: center;
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-burger-line { background: #fff; }
        .hdr-bar.menu-open .hdr-burger-line { background: var(--hdr-cream); }

        .hdr-burger.open .hdr-burger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hdr-burger.open .hdr-burger-line:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .hdr-burger.open .hdr-burger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* ─── mobile drawer ───────────────────────── */
        .hdr-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background: var(--hdr-forest);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }

        .hdr-drawer.open { transform: translateX(0); }

        .hdr-drawer-top {
          height: var(--hdr-h);
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .hdr-drawer-body {
          flex: 1;
          padding: 40px clamp(24px, 6vw, 60px) 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hdr-drawer-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: padding-left 0.3s ease;
        }

        .hdr-drawer-nav-link:hover { padding-left: 8px; }

        .hdr-drawer-link-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 300;
          color: var(--hdr-cream);
          line-height: 1;
          transition: color 0.25s ease;
        }

        .hdr-drawer-nav-link:hover .hdr-drawer-link-text { color: var(--hdr-gold-lt); }

        .hdr-drawer-link-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(249,246,241,0.25);
          align-self: flex-end;
          padding-bottom: 4px;
        }

        .hdr-drawer-footer {
          padding: 32px clamp(24px, 6vw, 60px);
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .hdr-drawer-book {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--hdr-gold);
          color: var(--hdr-cream);
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 1px;
          transition: background 0.3s ease;
        }

        .hdr-drawer-book:hover { background: var(--hdr-gold-lt); }

        .hdr-drawer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hdr-drawer-social-link {
          color: rgba(249,246,241,0.35);
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .hdr-drawer-social-link:hover { color: var(--hdr-gold-lt); }

        /* ─── Backdrop for mobile ─────────────────── */
        .hdr-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .hdr-backdrop.open {
          opacity: 1;
          pointer-events: all;
        }
      `}),(0,t.jsxs)("div",{className:`hdr-topbar${p?" scrolled":""}`,children:[(0,t.jsxs)("div",{className:"hdr-topbar-left",children:[(0,t.jsx)(d,{size:12}),"+256 746 077 473 / +256 774 751 727  ·  Kasese, Uganda"]}),(0,t.jsx)("div",{className:"hdr-topbar-right",children:b.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"hdr-social-link","aria-label":e.label,children:(0,t.jsx)(e.icon,{size:14})},e.label))})]}),(0,t.jsx)("header",{className:`hdr-bar${p?" scrolled":""}${e?" menu-open":""}`,children:(0,t.jsxs)("div",{className:"hdr-bar-inner",children:[(0,t.jsxs)(r.default,{href:"/",className:"hdr-logo",onClick:()=>o(!1),children:[(0,t.jsx)("img",{src:"/logo.JPG",alt:"Mt. Rwenzori Golf Resort",className:"hdr-logo-img"}),(0,t.jsxs)("div",{className:"hdr-logo-text",children:[(0,t.jsx)("span",{className:"hdr-logo-main",children:"Mt. Rwenzori"}),(0,t.jsx)("span",{className:"hdr-logo-sub",children:"Golf Resort & Spa"})]})]}),(0,t.jsx)("nav",{className:"hdr-nav","aria-label":"Main navigation",children:g.map(e=>(0,t.jsx)(r.default,{href:e.href,className:`hdr-nav-link${f===e.href?" active":""}`,children:e.label},e.href))}),(0,t.jsxs)("div",{className:"hdr-actions",children:[(0,t.jsxs)("a",{href:"tel:+256746077473",className:"hdr-phone",children:[(0,t.jsx)(d,{size:14}),"+256 746 077 473"]}),(0,t.jsxs)(r.default,{href:"/booking",className:"hdr-book-btn",children:[(0,t.jsx)(n,{size:13}),"Book Now"]})]}),(0,t.jsxs)("button",{className:`hdr-burger${e?" open":""}`,onClick:()=>o(!e),"aria-label":e?"Close menu":"Open menu","aria-expanded":e,children:[(0,t.jsx)("span",{className:"hdr-burger-line"}),(0,t.jsx)("span",{className:"hdr-burger-line"}),(0,t.jsx)("span",{className:"hdr-burger-line"})]})]})}),(0,t.jsx)("div",{className:`hdr-backdrop${e?" open":""}`,onClick:()=>o(!1),"aria-hidden":"true"}),(0,t.jsxs)("div",{ref:m,className:`hdr-drawer${e?" open":""}`,"aria-hidden":!e,role:"dialog","aria-label":"Navigation menu",children:[(0,t.jsx)("div",{className:"hdr-drawer-top"}),(0,t.jsx)("div",{className:"hdr-drawer-body",children:g.map((e,a)=>(0,t.jsxs)(r.default,{href:e.href,className:"hdr-drawer-nav-link",onClick:()=>o(!1),children:[(0,t.jsx)("span",{className:"hdr-drawer-link-text",children:e.label}),(0,t.jsxs)("span",{className:"hdr-drawer-link-num",children:["0",a+1]})]},e.href))}),(0,t.jsxs)("div",{className:"hdr-drawer-footer",children:[(0,t.jsxs)(r.default,{href:"/booking",className:"hdr-drawer-book",onClick:()=>o(!1),children:[(0,t.jsx)(n,{size:14}),"Book Your Stay"]}),(0,t.jsxs)("div",{className:"hdr-drawer-socials",children:[b.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"hdr-drawer-social-link","aria-label":e.label,children:(0,t.jsx)(e.icon,{size:18})},e.label)),(0,t.jsx)("a",{href:"tel:+256746077473",className:"hdr-drawer-social-link","aria-label":"Phone",children:(0,t.jsx)(d,{size:18})})]})]})]})]})}],13293)},51147,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:i}){let s=r?40*r:e,l=o?40*o:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},55185,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},84048,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(49133);let a=e.r(6031),o=e.r(51147),n=e.r(55185),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:p=!1,loading:u,className:f,quality:h,width:m,height:g,fill:b=!1,style:x,overrideSrc:y,onLoad:v,onLoadingComplete:w,placeholder:k="empty",blurDataURL:j,fetchPriority:_,decoding:S="async",layout:C,objectFit:z,objectPosition:P,lazyBoundary:E,lazyRoot:N,...O},M){var R;let $,I,D,{imgConf:T,showAltText:A,blurComplete:L,defaultLoader:U}=M,B=T||n.imageConfigDefault;if("allSizes"in B)$=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=B.qualities?.sort((e,t)=>e-t);$={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=O.loader||U;delete O.loader,delete O.srcSet;let W="__next_img_default"in F;if(W){if("custom"===$.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let G="",X=l(m),q=l(g);if((R=e)&&"object"==typeof R&&(s(R)||void 0!==R.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=t.blurWidth,D=t.blurHeight,j=j||t.blurDataURL,G=t.src,!b)if(X||q){if(X&&!q){let e=X/t.width;q=Math.round(t.height*e)}else if(!X&&q){let e=q/t.height;X=Math.round(t.width*e)}}else X=t.width,q=t.height}let Y=!c&&!p&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:G)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,Y=!1),$.unoptimized&&(r=!0),W&&!$.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let H=l(h),K=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:P}:{},A?{}:{color:"transparent"},x),V=L||"empty"===k?null:"blur"===k?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:X,heightInt:q,blurWidth:I,blurHeight:D,blurDataURL:j||"",objectFit:K.objectFit})}")`:`url("${k}")`,J=i.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Q=V?{backgroundSize:J,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Z=function({config:e,src:t,unoptimized:r,width:o,quality:n,sizes:i,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let a=new URLSearchParams(t.slice(r+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,r)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(a);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,i),c=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((r,a)=>`${s({config:e,src:t,quality:n,width:r})} ${"w"===d?r:a+1}${d}`).join(", "),src:s({config:e,src:t,quality:n,width:l[c]})}}({config:$,src:e,unoptimized:r,width:X,quality:H,sizes:t,loader:F}),ee=Y?"lazy":u;return{props:{...O,loading:ee,fetchPriority:_,width:X,height:q,decoding:S,className:f,style:{...K,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:r,preload:p||c,placeholder:k,fill:b}}}},83321,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(1685),o="u"<typeof window,n=o?()=>{}:a.useLayoutEffect,i=o?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},91802,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return m},defaultHead:function(){return p}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(81258),i=e.r(44066),s=e.r(44501),l=i._(e.r(1685)),d=n._(e.r(83321)),c=e.r(15106);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(49133);let f=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,a,o;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,a=new Set,o={},e=>{let n=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=o[r]||new Set;("name"!==r||!i)&&a.has(t)?n=!1:(a.add(t),o[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},19352,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(81258)._(e.r(1685)),o=e.r(55185),n=a.default.createContext(o.imageConfigDefault)},5235,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(81258)._(e.r(1685)).default.createContext(null)},63412,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},88842,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let a=e.r(63412),o=e.r(6031);function n({config:e,src:t,width:r,quality:i}){let s=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),a=r.get("dpl");if(a){s=a,r.delete("dpl");let o=r.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,a.findClosestQuality)(i,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}n.__next_img_default=!0;let i=n},72385,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let a=e.r(81258),o=e.r(44066),n=e.r(44501),i=o._(e.r(1685)),s=a._(e.r(80560)),l=a._(e.r(91802)),d=e.r(84048),c=e.r(55185),p=e.r(19352);e.r(49133);let u=e.r(5235),f=a._(e.r(88842)),h=e.r(21690),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,a,o,n,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:o,decoding:s,className:l,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:f,fill:m,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:w,sizesInput:k,onLoad:j,onError:_,...S},C)=>{let z=(0,i.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&g(e,p,x,y,v,f,k))},[e,p,x,y,v,_,f,k]),P=(0,h.useMergedRef)(C,z);return(0,n.jsx)("img",{...S,...b(c),loading:u,width:o,height:a,decoding:s,"data-nimg":m?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:P,onLoad:e=>{g(e.currentTarget,p,x,y,v,f,k)},onError:e=>{w(!0),"empty"!==p&&v(!0),_&&_(e)}})});function y({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(u.RouterContext),a=(0,i.useContext)(p.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=m||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,h=(0,i.useRef)(s);(0,i.useEffect)(()=>{h.current=s},[s]);let g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let[b,v]=(0,i.useState)(!1),[w,k]=(0,i.useState)(!1),{props:j,meta:_}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...j,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:k,sizesInput:e.sizes,ref:t}),_.preload?(0,n.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},17772,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(81258),i=e.r(84048),s=e.r(72385),l=n._(e.r(88842));function d(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},63250,(e,t,r)=>{t.exports=e.r(17772)},98924,e=>{"use strict";var t=e.i(44501),r=e.i(63250),a=e.i(33596),o=e.i(1685);e.s(["HeroSection",0,function({title:e,subtitle:n,image:i,video:s,ctaText:l,ctaHref:d,overlay:c=!0}){let[p,u]=(0,o.useState)(!1),[f,h]=(0,o.useState)(!1),[m,g]=(0,o.useState)(!1),[b,x]=(0,o.useState)({x:0,y:0}),y=(0,o.useRef)(null);return(0,o.useEffect)(()=>{g(!0)},[]),(0,o.useEffect)(()=>{if(s){let e=setTimeout(()=>u(!0),800);return()=>clearTimeout(e)}},[s]),(0,o.useEffect)(()=>{let e=e=>{if(!y.current)return;let t=y.current.getBoundingClientRect();x({x:(e.clientX-t.left)/t.width*100,y:(e.clientY-t.top)/t.height*100})},t=y.current;return t?.addEventListener("mousemove",e),()=>t?.removeEventListener("mousemove",e)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          font-family: 'DM Sans', sans-serif;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes hero-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes hero-line-expand {
          from { width: 0; opacity: 0; }
          to   { width: 60px; opacity: 1; }
        }

        @keyframes hero-scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }

        @keyframes hero-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        @keyframes video-zoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }

        .hero-animate-title {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .hero-animate-line {
          animation: hero-line-expand 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
        }

        .hero-animate-subtitle {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
        }

        .hero-animate-cta {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
        }

        .hero-animate-badge {
          animation: hero-fade-in 1s ease 0.1s both;
        }

        .hero-animate-scroll {
          animation: hero-scroll-bounce 2s ease-in-out 2s infinite;
        }

        .hero-video-loaded {
          animation: video-zoom 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-cta-primary {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          padding: 16px 36px;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.3s ease, box-shadow 0.35s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .hero-cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-cta-primary:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1);
        }

        .hero-cta-primary:hover::before {
          opacity: 1;
          animation: hero-shimmer 1.5s ease infinite;
        }

        .hero-cta-primary svg {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-cta-primary:hover svg {
          transform: translateX(5px);
        }

        .hero-cta-secondary {
          color: rgba(255,255,255,0.75);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 2px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .hero-cta-secondary:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.7);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 6px 16px 6px 8px;
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 28px;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          background: #a8d5ba;
          border-radius: 50%;
          animation: hero-fade-in 1s ease infinite alternate;
        }

        .hero-noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
          pointer-events: none;
          z-index: 3;
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .hero-gradient-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.05) 40%,
            rgba(0,0,0,0.55) 100%
          );
          z-index: 2;
        }

        .hero-light-leak {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 70%;
          background: radial-gradient(ellipse, rgba(180,160,130,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 2;
          transition: transform 0.1s ease-out;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 10vh;
          text-align: center;
          z-index: 10;
          padding-left: 24px;
          padding-right: 24px;
        }

        .hero-divider {
          width: 60px;
          height: 1px;
          background: rgba(255,255,255,0.5);
          margin: 0 auto 28px;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.5);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          z-index: 10;
          cursor: default;
        }

        .hero-scroll-track {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
          border-radius: 1px;
        }

        .hero-scroll-thumb {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 40%;
          background: rgba(255,255,255,0.6);
          border-radius: 1px;
          animation: hero-scroll-slide 1.8s ease-in-out 2.2s infinite;
        }

        @keyframes hero-scroll-slide {
          0%   { top: -40%; }
          60%  { top: 100%; }
          61%  { top: -40%; }
          100% { top: -40%; }
        }

        .hero-stat-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 0;
          z-index: 10;
          animation: hero-fade-up 1s ease 1.8s both;
        }

        .hero-stat {
          padding: 18px 36px;
          border-top: 1px solid rgba(255,255,255,0.12);
          border-right: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          backdrop-filter: blur(10px);
          background: rgba(0,0,0,0.2);
        }

        .hero-stat:last-child {
          border-right: none;
        }

        .hero-stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: #fff;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-stat-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-stat-bar { display: none; }
          .hero-content { padding-bottom: 80px; }
        }
      `}),(0,t.jsxs)("section",{ref:y,className:"hero-section",style:{position:"relative",width:"100%",height:"clamp(560px, 100svh, 900px)",overflow:"hidden"},children:[s&&!f?(0,t.jsx)("video",{src:s,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:s&&p?"hero-video-loaded":"",onError:()=>{h(!0),u(!1)},onCanPlay:()=>u(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:+!!p,transition:"opacity 1.2s ease",transformOrigin:"center center"}}):(0,t.jsx)(r.default,{src:i||"/images/hero-background.jpg",alt:e,fill:!0,priority:!0,sizes:"100vw",style:{objectFit:"cover"}}),(0,t.jsx)("div",{className:"hero-gradient-base"}),(0,t.jsx)("div",{className:"hero-vignette"}),(0,t.jsx)("div",{className:"hero-light-leak",style:{transform:m?`translate(${.02*b.x}px, ${.02*b.y}px)`:void 0}}),c&&(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:`radial-gradient(ellipse at ${b.x}% ${b.y}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,zIndex:2,transition:"background 0.3s ease",pointerEvents:"none"}}),(0,t.jsx)("div",{className:"hero-noise-overlay"}),(0,t.jsx)("div",{className:"hero-content",children:(0,t.jsxs)("div",{style:{maxWidth:"760px",width:"100%"},children:[(0,t.jsx)("div",{className:"hero-animate-badge",style:{display:"flex",justifyContent:"center"},children:(0,t.jsxs)("div",{className:"hero-badge",children:[(0,t.jsx)("span",{className:"hero-badge-dot"}),"Crafted with Excellence"]})}),(0,t.jsx)("h1",{className:"hero-title hero-animate-title",style:{fontSize:"clamp(42px, 7vw, 96px)",fontWeight:300,color:"#fff",lineHeight:1.05,letterSpacing:"-0.01em",margin:"0 0 0"},children:e}),(0,t.jsx)("div",{className:"hero-divider hero-animate-line"}),n&&(0,t.jsx)("p",{className:"hero-animate-subtitle",style:{fontSize:"clamp(15px, 1.8vw, 18px)",color:"rgba(255,255,255,0.72)",fontWeight:300,lineHeight:1.75,letterSpacing:"0.02em",marginBottom:"44px",maxWidth:"560px",marginLeft:"auto",marginRight:"auto"},children:n}),l&&d&&(0,t.jsxs)("div",{className:"hero-animate-cta",style:{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center",alignItems:"center"},children:[(0,t.jsxs)(a.default,{href:d,className:"hero-cta-primary",children:[l,(0,t.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),(0,t.jsx)(a.default,{href:"#discover",className:"hero-cta-secondary",children:"Discover More"})]})]})}),(0,t.jsxs)("div",{className:"hero-scroll-indicator hero-animate-scroll",style:{animation:"none"},children:[(0,t.jsx)("div",{className:"hero-scroll-track",children:(0,t.jsx)("div",{className:"hero-scroll-thumb"})}),(0,t.jsx)("span",{children:"Scroll"})]}),(0,t.jsx)("div",{className:"hero-stat-bar",children:[{number:"15+",label:"Years of Trust"},{number:"2,400+",label:"Happy Clients"},{number:"98%",label:"Satisfaction Rate"},{number:"40+",label:"Awards Won"}].map(e=>(0,t.jsxs)("div",{className:"hero-stat",children:[(0,t.jsx)("span",{className:"hero-stat-number",children:e.number}),(0,t.jsx)("span",{className:"hero-stat-label",children:e.label})]},e.label))})]})]})}])}]);