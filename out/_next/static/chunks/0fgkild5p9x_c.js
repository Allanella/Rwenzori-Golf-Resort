(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78811,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in t)Object.defineProperty(a,o,{enumerable:!0,get:t[o]});let n=e.r(44066)._(e.r(81961)),i=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:a}=e,t=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:a&&(c=r+(~a.indexOf(":")?`[${a}]`:a),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return t&&!t.endsWith(":")&&(t+=":"),e.slashes||(!t||i.test(t))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${t}${c}${o}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},21690,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return o}});let t=e.r(1685);function o(e,r){let a=(0,t.useRef)(null),o=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=a.current;e&&(a.current=null,e());let r=o.current;r&&(o.current=null,r())}else e&&(a.current=n(e,t)),r&&(o.current=n(r,t))},[e,r])}function n(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let a=e(r);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),r.exports=a.default)},37875,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return n}});let t=e.r(35915),o=e.r(89399);function n(e){if(!(0,t.isAbsoluteUrl)(e))return!0;try{let r=(0,t.getLocationOrigin)(),a=new URL(e,r);return a.origin===r&&(0,o.hasBasePath)(a.pathname)}catch(e){return!1}}},22051,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},33596,(e,r,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={default:function(){return g},useLinkStatus:function(){return v}};for(var o in t)Object.defineProperty(a,o,{enumerable:!0,get:t[o]});let n=e.r(44066),i=e.r(44501),s=n._(e.r(1685)),l=e.r(78811),c=e.r(72661),d=e.r(21690),p=e.r(35915),h=e.r(79015);e.r(49133);let f=e.r(3867),x=e.r(66504),m=e.r(37875),b=e.r(71815);function g(r){var a,t;let o,n,g,[v,y]=(0,s.useOptimistic)(x.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:w,as:j,children:N,prefetch:z=null,passHref:C,replace:M,shallow:S,scroll:P,onClick:R,onMouseEnter:T,onTouchStart:G,legacyBehavior:A=!1,onNavigate:_,transitionTypes:D,ref:I,unstable_dynamicOnHover:O,...$}=r;o=N,A&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let E=s.default.useContext(c.AppRouterContext),L=!1!==z,B=!1!==z?null===(t=z)||"auto"===t?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,F="string"==typeof(a=j||w)?a:(0,l.formatUrl)(a);if(A){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let U=A?n&&"object"==typeof n&&n.ref:I,W=s.default.useCallback(e=>(null!==E&&(k.current=(0,x.mountLinkInstance)(e,F,E,B,L,y)),()=>{k.current&&((0,x.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,x.unmountPrefetchableInstance)(e)}),[L,F,E,B,y]),Y={ref:(0,d.useMergedRef)(W,U),onClick(r){A||"function"!=typeof R||R(r),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!E||r.defaultPrevented||function(r,a,t,o,n,i,l){if("u">typeof window){let c,{nodeName:d}=r.currentTarget;if("A"===d.toUpperCase()&&((c=r.currentTarget.getAttribute("target"))&&"_self"!==c||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(a)){o&&(r.preventDefault(),location.replace(a));return}if(r.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(76386);s.default.startTransition(()=>{p(a,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,t.current,l)})}}(r,F,k,M,P,_,D)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&L&&(0,x.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){A||"function"!=typeof G||G(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&L&&(0,x.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,p.isAbsoluteUrl)(F)?Y.href=F:A&&!C&&("a"!==n.type||"href"in n.props)||(Y.href=(0,h.addBasePath)(F)),g=A?s.default.cloneElement(n,Y):(0,i.jsx)("a",{...$,...Y,children:o}),(0,i.jsx)(u.Provider,{value:v,children:g})}e.r(22051);let u=(0,s.createContext)(x.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(u);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),r.exports=a.default)},3985,e=>{"use strict";var r=e.i(1685);let a=(...e)=>e.filter((e,r,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===r).join(" ").trim(),t=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:c,...d},p)=>(0,r.createElement)("svg",{ref:p,...o,width:t,height:t,stroke:e,strokeWidth:i?24*Number(n)/Number(t):n,className:a("lucide",s),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,a])=>(0,r.createElement)(e,a)),...Array.isArray(l)?l:[l]]));e.s(["default",0,(e,o)=>{let i=(0,r.forwardRef)(({className:i,...s},l)=>(0,r.createElement)(n,{ref:l,iconNode:o,className:a(`lucide-${t(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...s}));return i.displayName=t(e),i}],3985)},13293,82732,6272,73972,64237,83198,70646,e=>{"use strict";var r=e.i(44501),a=e.i(33596),t=e.i(1685),o=e.i(3985);let n=(0,o.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",0,n],82732);let i=(0,o.default)("facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);e.s(["Facebook",0,i],6272);let s=(0,o.default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);e.s(["Instagram",0,s],73972);let l=(0,o.default)("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",0,l],64237);let c=(0,o.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",0,c],83198);let d=(0,o.default)("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);e.s(["Music",0,d],70646),e.s(["Header",0,function(){let[e,o]=(0,t.useState)(!1),[p,h]=(0,t.useState)(!1),[f,x]=(0,t.useState)("/"),m=(0,t.useRef)(null);(0,t.useEffect)(()=>{let e=()=>h(window.scrollY>40);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.useEffect)(()=>{x(window.location.pathname)},[]),(0,t.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]);let b=[{href:"/",label:"Home"},{href:"/accommodation",label:"Accommodation"},{href:"/golf",label:"Golf"},{href:"/spa",label:"Spa"},{href:"/amenities",label:"Amenities"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}],g=[{href:"https://www.facebook.com/profile.php?id=61589477902150",icon:i,label:"Facebook"},{href:"https://instagram.com",icon:s,label:"Instagram"},{href:"https://x.com/home",icon:l,label:"X"},{href:"https://tiktok.com/@mtrwenzori",icon:d,label:"TikTok"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:`hdr-topbar${p?" scrolled":""}`,children:[(0,r.jsxs)("div",{className:"hdr-topbar-left",children:[(0,r.jsx)(c,{size:12}),"+256 746 077 473 / +256 774 751 727  ·  Kasese, Uganda"]}),(0,r.jsx)("div",{className:"hdr-topbar-right",children:g.map(e=>(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"hdr-social-link","aria-label":e.label,children:(0,r.jsx)(e.icon,{size:14})},e.label))})]}),(0,r.jsx)("header",{className:`hdr-bar${p?" scrolled":""}${e?" menu-open":""}`,children:(0,r.jsxs)("div",{className:"hdr-bar-inner",children:[(0,r.jsxs)(a.default,{href:"/",className:"hdr-logo",onClick:()=>o(!1),children:[(0,r.jsx)("img",{src:"/logo.JPG",alt:"Mt. Rwenzori Golf Resort",className:"hdr-logo-img"}),(0,r.jsxs)("div",{className:"hdr-logo-text",children:[(0,r.jsx)("span",{className:"hdr-logo-main",children:"Mt. Rwenzori"}),(0,r.jsx)("span",{className:"hdr-logo-sub",children:"Golf Resort & Spa"})]})]}),(0,r.jsx)("nav",{className:"hdr-nav","aria-label":"Main navigation",children:b.map(e=>(0,r.jsx)(a.default,{href:e.href,className:`hdr-nav-link${f===e.href?" active":""}`,children:e.label},e.href))}),(0,r.jsxs)("div",{className:"hdr-actions",children:[(0,r.jsxs)("a",{href:"tel:+256746077473",className:"hdr-phone",children:[(0,r.jsx)(c,{size:14}),"+256 746 077 473"]}),(0,r.jsxs)(a.default,{href:"/booking",className:"hdr-book-btn",children:[(0,r.jsx)(n,{size:13}),"Book Now"]})]}),(0,r.jsxs)("button",{className:`hdr-burger${e?" open":""}`,onClick:()=>o(!e),"aria-label":e?"Close menu":"Open menu","aria-expanded":e,children:[(0,r.jsx)("span",{className:"hdr-burger-line"}),(0,r.jsx)("span",{className:"hdr-burger-line"}),(0,r.jsx)("span",{className:"hdr-burger-line"})]})]})}),(0,r.jsx)("div",{className:`hdr-backdrop${e?" open":""}`,onClick:()=>o(!1),"aria-hidden":"true"}),(0,r.jsxs)("div",{ref:m,className:`hdr-drawer${e?" open":""}`,"aria-hidden":!e,role:"dialog","aria-label":"Navigation menu",children:[(0,r.jsx)("div",{className:"hdr-drawer-top"}),(0,r.jsx)("div",{className:"hdr-drawer-body",children:b.map((e,t)=>(0,r.jsxs)(a.default,{href:e.href,className:"hdr-drawer-nav-link",onClick:()=>o(!1),children:[(0,r.jsx)("span",{className:"hdr-drawer-link-text",children:e.label}),(0,r.jsxs)("span",{className:"hdr-drawer-link-num",children:["0",t+1]})]},e.href))}),(0,r.jsxs)("div",{className:"hdr-drawer-footer",children:[(0,r.jsxs)(a.default,{href:"/booking",className:"hdr-drawer-book",onClick:()=>o(!1),children:[(0,r.jsx)(n,{size:14}),"Book Your Stay"]}),(0,r.jsxs)("div",{className:"hdr-drawer-socials",children:[g.map(e=>(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"hdr-drawer-social-link","aria-label":e.label,children:(0,r.jsx)(e.icon,{size:18})},e.label)),(0,r.jsx)("a",{href:"tel:+256746077473",className:"hdr-drawer-social-link","aria-label":"Phone",children:(0,r.jsx)(c,{size:18})})]})]})]})]})}],13293)},76841,25269,28736,e=>{"use strict";var r=e.i(44501),a=e.i(33596),t=e.i(3985);let o=(0,t.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",0,o],25269);var n=e.i(83198);let i=(0,t.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",0,i],28736);let s=(0,t.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var l=e.i(6272),c=e.i(73972),d=e.i(64237),p=e.i(70646);e.s(["Footer",0,function(){let e=new Date().getFullYear(),t=[{href:"https://www.facebook.com/profile.php?id=61589477902150",icon:l.Facebook,label:"Facebook"},{href:"https://instagram.com",icon:c.Instagram,label:"Instagram"},{href:"https://x.com/home",icon:d.Twitter,label:"X"},{href:"https://tiktok.com/@mtrwenzori",icon:p.Music,label:"TikTok"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap');

        .ftr {
          background: #1a1f1b;
          font-family: 'DM Sans', sans-serif;
          color: rgba(249,246,241,0.55);
          position: relative;
          overflow: hidden;
        }

        /* subtle radial glows */
        .ftr::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.5), transparent);
        }

        .ftr::after {
          content: '';
          position: absolute;
          bottom: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(44,61,46,0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── CTA strip ──────────────────── */
        .ftr-cta {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .ftr-cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.15;
          max-width: 540px;
        }

        .ftr-cta-text em {
          font-style: italic;
          color: #d4aa72;
        }

        .ftr-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #b8945a;
          color: #f9f6f1;
          padding: 14px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #b8945a;
          border-radius: 1px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ftr-cta-btn:hover {
          background: #d4aa72;
          border-color: #d4aa72;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(184,148,90,0.3);
        }

        /* ─── Main grid ──────────────────── */
        .ftr-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 88px) clamp(20px, 5vw, 64px) 0;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px 56px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .ftr-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .ftr-main { grid-template-columns: 1fr; }
        }

        /* ─── Brand col ──────────────────── */
        .ftr-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .ftr-brand-logo img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.3);
        }

        .ftr-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #f9f6f1;
          line-height: 1;
        }

        .ftr-brand-sub {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b8945a;
          margin-top: 4px;
          font-weight: 400;
          display: block;
        }

        .ftr-brand-desc {
          font-size: 13.5px;
          line-height: 1.8;
          color: rgba(249,246,241,0.45);
          font-weight: 300;
          margin-bottom: 28px;
          max-width: 300px;
        }

        .ftr-socials {
          display: flex;
          gap: 6px;
        }

        .ftr-social {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(249,246,241,0.4);
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }

        .ftr-social:hover {
          border-color: #b8945a;
          color: #b8945a;
          background: rgba(184,148,90,0.08);
        }

        /* ─── Column heading ─────────────── */
        .ftr-col-head {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b8945a;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .ftr-col-head::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #b8945a;
          flex-shrink: 0;
        }

        /* ─── Nav links ──────────────────── */
        .ftr-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ftr-nav-link {
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          text-decoration: none;
          padding: 6px 0;
          display: inline-flex;
          align-items: center;
          gap: 0;
          border-bottom: 1px solid transparent;
          transition: color 0.25s ease, gap 0.3s ease;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .ftr-nav-link::before {
          content: '—';
          font-size: 10px;
          color: #b8945a;
          opacity: 0;
          width: 0;
          overflow: hidden;
          transition: opacity 0.25s ease, width 0.3s ease;
          letter-spacing: 0;
        }

        .ftr-nav-link:hover {
          color: #f9f6f1;
          gap: 8px;
        }

        .ftr-nav-link:hover::before {
          opacity: 1;
          width: 20px;
        }

        /* ─── Services list ──────────────── */
        .ftr-service-item {
          font-size: 13px;
          color: rgba(249,246,241,0.45);
          padding: 6px 0;
          font-weight: 300;
          letter-spacing: 0.02em;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ftr-service-item::before {
          content: '';
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #b8945a;
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ─── Contact items ──────────────── */
        .ftr-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ftr-contact-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          font-weight: 300;
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        a.ftr-contact-item:hover { color: rgba(249,246,241,0.85); }

        .ftr-contact-icon {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8945a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ─── Bottom bar ─────────────────── */
        .ftr-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px clamp(20px, 5vw, 64px) clamp(32px, 5vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 56px;
          position: relative;
          z-index: 1;
        }

        .ftr-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ftr-copyright {
          font-size: 12px;
          color: rgba(249,246,241,0.35);
          letter-spacing: 0.04em;
        }

        .ftr-dev {
          font-size: 11px;
          color: rgba(249,246,241,0.2);
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ftr-dev a {
          color: rgba(249,246,241,0.3);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .ftr-dev a:hover { color: #b8945a; }

        .ftr-dev-sep {
          opacity: 0.3;
        }

        .ftr-bottom-right {
          display: flex;
          gap: 24px;
        }

        .ftr-legal-link {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.25);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .ftr-legal-link:hover { color: rgba(249,246,241,0.6); }
      `}),(0,r.jsxs)("footer",{className:"ftr",children:[(0,r.jsxs)("div",{className:"ftr-cta",children:[(0,r.jsxs)("p",{className:"ftr-cta-text",children:["Your mountain escape ",(0,r.jsx)("em",{children:"awaits."}),(0,r.jsx)("br",{}),"Reserve your stay today."]}),(0,r.jsxs)(a.default,{href:"/booking",className:"ftr-cta-btn",children:["Book Your Stay",(0,r.jsx)("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),(0,r.jsxs)("div",{className:"ftr-main",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{href:"/",className:"ftr-brand-logo",children:[(0,r.jsx)("img",{src:"/logo.JPG",alt:"Mt. Rwenzori Golf Resort"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"ftr-brand-name",children:"Mt. Rwenzori"}),(0,r.jsx)("span",{className:"ftr-brand-sub",children:"Golf Resort & Spa"})]})]}),(0,r.jsx)("p",{className:"ftr-brand-desc",children:"A serene mountain retreat in the heart of the Rwenzori Mountains — offering luxury accommodation, championship golf, and world-class spa services."}),(0,r.jsx)("div",{className:"ftr-socials",children:t.map(e=>(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"ftr-social","aria-label":e.label,children:(0,r.jsx)(e.icon,{size:15})},e.label))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"ftr-col-head",children:"Navigate"}),(0,r.jsx)("ul",{className:"ftr-nav-list",children:[{href:"/",label:"Home"},{href:"/accommodation",label:"Accommodation"},{href:"/golf",label:"Golf"},{href:"/spa",label:"Spa"},{href:"/amenities",label:"Amenities"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:e.href,className:"ftr-nav-link",children:e.label})},e.href))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"ftr-col-head",children:"Services"}),(0,r.jsx)("div",{children:["9-Hole Golf Course","Premium Spa & Wellness","Full English Breakfast","High-Speed WiFi","Event Hosting","Mountain Trekking"].map(e=>(0,r.jsx)("div",{className:"ftr-service-item",children:e},e))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"ftr-col-head",children:"Contact Us"}),(0,r.jsxs)("div",{className:"ftr-contact-list",children:[(0,r.jsxs)("div",{className:"ftr-contact-item",children:[(0,r.jsx)("div",{className:"ftr-contact-icon",children:(0,r.jsx)(o,{size:13})}),(0,r.jsx)("span",{children:"Kasese, Rwenzori Mountain Region, Uganda"})]}),(0,r.jsxs)("a",{href:"tel:+256746077473",className:"ftr-contact-item",children:[(0,r.jsx)("div",{className:"ftr-contact-icon",children:(0,r.jsx)(n.Phone,{size:13})}),(0,r.jsx)("span",{children:"+256 746 077 473"})]}),(0,r.jsxs)("a",{href:"tel:+256774751727",className:"ftr-contact-item",children:[(0,r.jsx)("div",{className:"ftr-contact-icon",children:(0,r.jsx)(n.Phone,{size:13})}),(0,r.jsx)("span",{children:"+256 774 751 727"})]}),(0,r.jsxs)("a",{href:"mailto:mtrwenzorigolfresortspa@gmail.com",className:"ftr-contact-item",children:[(0,r.jsx)("div",{className:"ftr-contact-icon",children:(0,r.jsx)(i,{size:13})}),(0,r.jsx)("span",{children:"mtrwenzorigolfresortspa@gmail.com"})]}),(0,r.jsxs)("div",{className:"ftr-contact-item",children:[(0,r.jsx)("div",{className:"ftr-contact-icon",children:(0,r.jsx)(s,{size:13})}),(0,r.jsxs)("span",{children:["Open Year-Round",(0,r.jsx)("br",{}),"Check-in from 2:00 PM"]})]})]})]})]}),(0,r.jsxs)("div",{className:"ftr-bottom",children:[(0,r.jsxs)("div",{className:"ftr-bottom-left",children:[(0,r.jsxs)("p",{className:"ftr-copyright",children:["© ",e,"Mt. Rwenzori Golf Resort & Spa. All rights reserved."]}),(0,r.jsxs)("div",{className:"ftr-dev",children:[(0,r.jsx)("span",{children:"Developed by Baliddawa Allan "}),(0,r.jsx)("span",{className:"ftr-dev-sep",children:"·"}),(0,r.jsx)("a",{href:"tel:0700966715",children:"0700 966 715"}),(0,r.jsx)("span",{className:"ftr-dev-sep",children:"·"}),(0,r.jsx)("a",{href:"tel:0785639406",children:"0785 639 406"})]})]}),(0,r.jsxs)("div",{className:"ftr-bottom-right",children:[(0,r.jsx)(a.default,{href:"#",className:"ftr-legal-link",children:"Privacy"}),(0,r.jsx)(a.default,{href:"#",className:"ftr-legal-link",children:"Terms"}),(0,r.jsx)(a.default,{href:"/contact",className:"ftr-legal-link",children:"Contact"})]})]})]})]})}],76841)},58945,e=>{"use strict";var r=e.i(44501),a=e.i(1685),t=e.i(13293),o=e.i(76841),n=e.i(3985);let i=(0,n.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var s=e.i(82732);let l=(0,n.default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);var c=e.i(83198),d=e.i(28736),p=e.i(25269);let h=(0,n.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);var f=e.i(33596);e.s(["default",0,function(){let[e,n]=(0,a.useState)(null),[x,m]=(0,a.useState)(!0),[b,g]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let e=setTimeout(()=>{n({id:"RWZ"+Date.now(),room:"Deluxe Room",checkIn:"2024-06-15",checkOut:"2024-06-18",nights:3,guests:2,totalPrice:300,includesGolf:!0,guestInfo:{firstName:"John",lastName:"Doe",email:"john@example.com",phone:"+256 746 077 473"}}),m(!1),setTimeout(()=>g(!0),80)},1600);return()=>clearTimeout(e)},[]),x)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap');
          .bc-loader {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f9f6f1;
            font-family: 'DM Sans', sans-serif;
            gap: 20px;
          }
          .bc-spinner {
            width: 48px; height: 48px;
            border: 1px solid rgba(184,148,90,0.2);
            border-top-color: #b8945a;
            border-radius: 50%;
            animation: bc-spin 0.9s linear infinite;
          }
          @keyframes bc-spin { to { transform: rotate(360deg); } }
          .bc-loader-text {
            font-size: 12px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(26,31,27,0.4);
          }
        `}),(0,r.jsx)(t.Header,{}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"bc-loader",children:[(0,r.jsx)("div",{className:"bc-spinner"}),(0,r.jsx)("p",{className:"bc-loader-text",children:"Confirming your reservation…"})]})}),(0,r.jsx)(o.Footer,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        :root {
          --bc-cream:   #f9f6f1;
          --bc-sand:    #e8dece;
          --bc-forest:  #2c3d2e;
          --bc-gold:    #b8945a;
          --bc-gold-lt: #d4aa72;
          --bc-ink:     #1a1f1b;
          --bc-muted:   #6b7569;
        }

        .bc-page {
          font-family: 'DM Sans', sans-serif;
          color: var(--bc-ink);
          background: var(--bc-cream);
        }

        .bc-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .bc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--bc-gold);
          font-weight: 400;
          margin-bottom: 14px;
        }
        .bc-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: var(--bc-gold);
          display: block;
          flex-shrink: 0;
        }

        /* ─── Hero banner (replaces HeroSection) ── */
        .bc-hero {
          background: var(--bc-forest);
          padding: 120px clamp(20px,5vw,64px) 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .bc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 60%, rgba(184,148,90,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 40%, rgba(74,103,65,0.12) 0%, transparent 55%);
          pointer-events: none;
        }

        .bc-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.35), transparent);
        }

        .bc-hero-check {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          color: var(--bc-gold);
          position: relative;
          z-index: 1;
          animation: bc-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }

        @keyframes bc-pop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }

        .bc-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          animation: bc-fade-up 0.7s ease 0.35s both;
        }

        .bc-hero-title em { font-style: italic; color: var(--bc-gold-lt); }

        .bc-hero-id {
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.4);
          position: relative;
          z-index: 1;
          animation: bc-fade-up 0.7s ease 0.5s both;
        }

        .bc-hero-id span {
          color: rgba(249,246,241,0.7);
          font-weight: 400;
        }

        @keyframes bc-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── Main content ────────────────────────── */
        .bc-main {
          padding: clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px);
        }

        .bc-inner {
          max-width: 960px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .bc-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Two-col card grid ───────────────────── */
        .bc-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--bc-sand);
          margin-bottom: 2px;
        }

        @media (max-width: 680px) {
          .bc-card-grid { grid-template-columns: 1fr; }
        }

        .bc-card {
          background: var(--bc-cream);
          padding: clamp(28px, 4vw, 48px);
        }

        .bc-card--dark {
          background: var(--bc-forest);
        }

        .bc-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .bc-card-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(184,148,90,0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          flex-shrink: 0;
        }

        .bc-card-icon--light { border-color: rgba(184,148,90,0.25); }

        .bc-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--bc-forest);
        }

        .bc-card--dark .bc-card-title { color: #f9f6f1; }

        /* ─── Row items ───────────────────────────── */
        .bc-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(26,31,27,0.07);
          font-size: 13.5px;
        }

        .bc-row:last-child { border-bottom: none; }

        .bc-row-label { color: var(--bc-muted); font-weight: 300; }
        .bc-row-value { color: var(--bc-ink); font-weight: 400; text-align: right; }
        .bc-row-value--gold { color: var(--bc-gold); }
        .bc-row-value--total {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--bc-gold);
        }
        .bc-row-label--total { font-weight: 400; color: var(--bc-ink); font-size: 14px; }

        .bc-card--dark .bc-row { border-color: rgba(255,255,255,0.07); }
        .bc-card--dark .bc-row-label { color: rgba(249,246,241,0.4); }
        .bc-card--dark .bc-row-value { color: rgba(249,246,241,0.85); }

        /* ─── Guest info rows ─────────────────────── */
        .bc-guest-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(26,31,27,0.07);
        }
        .bc-guest-row:last-child { border-bottom: none; }

        .bc-guest-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          flex-shrink: 0;
        }

        .bc-guest-name {
          font-size: 14px;
          font-weight: 400;
          color: var(--bc-ink);
          line-height: 1.2;
        }

        .bc-guest-sub {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bc-muted);
          margin-top: 2px;
        }

        /* ─── Info strip ──────────────────────────── */
        .bc-info-strip {
          background: var(--bc-forest);
          padding: clamp(28px, 4vw, 44px) clamp(28px, 4vw, 48px);
          margin-bottom: 2px;
        }

        .bc-info-head {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bc-info-head::before {
          content: '';
          width: 20px; height: 1px;
          background: var(--bc-gold);
          display: block;
          flex-shrink: 0;
        }

        .bc-info-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 40px;
          list-style: none;
          padding: 0; margin: 0;
        }

        @media (max-width: 560px) { .bc-info-list { grid-template-columns: 1fr; } }

        .bc-info-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          line-height: 1.65;
          font-weight: 300;
        }

        .bc-info-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--bc-gold);
          flex-shrink: 0;
          margin-top: 6px;
          opacity: 0.7;
        }

        /* ─── Actions ─────────────────────────────── */
        .bc-actions {
          background: var(--bc-cream);
          padding: clamp(24px, 3vw, 36px) clamp(28px, 4vw, 48px);
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .bc-btn-primary {
          flex: 1;
          min-width: 160px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--bc-forest);
          color: var(--bc-cream);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--bc-forest);
          border-radius: 1px;
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .bc-btn-primary:hover {
          background: var(--bc-gold);
          border-color: var(--bc-gold);
          transform: translateY(-2px);
        }

        .bc-btn-outline {
          flex: 1;
          min-width: 160px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: var(--bc-forest);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(26,31,27,0.3);
          border-radius: 1px;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .bc-btn-outline:hover {
          background: var(--bc-forest);
          color: var(--bc-cream);
          border-color: var(--bc-forest);
          transform: translateY(-2px);
        }

        /* ─── Next steps ──────────────────────────── */
        .bc-next {
          background: var(--bc-forest);
          padding: clamp(64px, 8vw, 100px) clamp(20px, 5vw, 64px);
        }

        .bc-next-inner { max-width: 960px; margin: 0 auto; }

        .bc-next-header { text-align: center; margin-bottom: 56px; }

        .bc-next-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.1;
        }

        .bc-next-h2 em { font-style: italic; color: var(--bc-gold-lt); }

        .bc-next-rule {
          width: 40px; height: 1px;
          background: var(--bc-gold);
          margin: 20px auto;
        }

        .bc-next-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.06);
        }

        @media (max-width: 680px) { .bc-next-grid { grid-template-columns: 1fr; } }

        .bc-next-card {
          background: rgba(26,31,27,0.5);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .bc-next-card:hover { background: rgba(44,61,46,0.8); }

        .bc-next-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--bc-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .bc-next-card:hover::before { transform: scaleX(1); }

        .bc-next-icon {
          width: 48px; height: 48px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          margin-bottom: 22px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .bc-next-card:hover .bc-next-icon {
          background: var(--bc-gold);
          color: var(--bc-cream);
          border-color: var(--bc-gold);
        }

        .bc-next-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 12px;
        }

        .bc-next-desc {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(249,246,241,0.4);
          font-weight: 300;
        }
      `}),(0,r.jsxs)("div",{className:"bc-page",children:[(0,r.jsx)(t.Header,{}),(0,r.jsxs)("main",{children:[(0,r.jsxs)("div",{className:"bc-hero",children:[(0,r.jsx)("div",{className:"bc-hero-check",children:(0,r.jsx)(i,{size:30,strokeWidth:1.5})}),(0,r.jsxs)("h1",{className:"bc-hero-title",children:["Booking ",(0,r.jsx)("em",{children:"Confirmed"})]}),(0,r.jsxs)("p",{className:"bc-hero-id",children:["Confirmation · ",(0,r.jsx)("span",{children:e.id})]})]}),(0,r.jsx)("section",{className:"bc-main",children:(0,r.jsxs)("div",{className:`bc-inner${b?" visible":""}`,children:[(0,r.jsxs)("div",{className:"bc-card-grid",children:[(0,r.jsxs)("div",{className:"bc-card",children:[(0,r.jsxs)("div",{className:"bc-card-head",children:[(0,r.jsx)("div",{className:"bc-card-icon",children:(0,r.jsx)(s.Calendar,{size:16,strokeWidth:1.5})}),(0,r.jsx)("div",{className:"bc-card-title",children:"Booking Details"})]}),(0,r.jsxs)("div",{children:[[{label:"Room Type",value:e.room},{label:"Check-in",value:e.checkIn},{label:"Check-out",value:e.checkOut},{label:"Duration",value:`${e.nights} Nights`},{label:"Guests",value:`${e.guests} Guests`},...e.includesGolf?[{label:"Golf Rounds",value:"Included",gold:!0}]:[]].map(e=>(0,r.jsxs)("div",{className:"bc-row",children:[(0,r.jsx)("span",{className:"bc-row-label",children:e.label}),(0,r.jsx)("span",{className:`bc-row-value${e.gold?" bc-row-value--gold":""}`,children:e.value})]},e.label)),(0,r.jsxs)("div",{className:"bc-row",style:{marginTop:"8px",paddingTop:"16px",borderTop:"1px solid rgba(26,31,27,0.12)",borderBottom:"none"},children:[(0,r.jsx)("span",{className:"bc-row-label--total",children:"Total Amount"}),(0,r.jsxs)("span",{className:"bc-row-value--total",children:["$",e.totalPrice]})]})]})]}),(0,r.jsxs)("div",{className:"bc-card bc-card--dark",children:[(0,r.jsxs)("div",{className:"bc-card-head",children:[(0,r.jsx)("div",{className:"bc-card-icon bc-card-icon--light",children:(0,r.jsx)(l,{size:16,strokeWidth:1.5})}),(0,r.jsx)("div",{className:"bc-card-title",children:"Guest Information"})]}),(0,r.jsx)("div",{children:[{icon:(0,r.jsx)(l,{size:14,strokeWidth:1.5}),value:`${e.guestInfo.firstName} ${e.guestInfo.lastName}`,sub:"Primary Guest",href:null},{icon:(0,r.jsx)(d.Mail,{size:14,strokeWidth:1.5}),value:e.guestInfo.email,sub:"Email Address",href:`mailto:${e.guestInfo.email}`},{icon:(0,r.jsx)(c.Phone,{size:14,strokeWidth:1.5}),value:e.guestInfo.phone,sub:"Phone Number",href:`tel:${e.guestInfo.phone}`}].map(e=>(0,r.jsxs)("div",{className:"bc-guest-row",children:[(0,r.jsx)("div",{className:"bc-guest-icon",children:e.icon}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"bc-guest-name",style:{color:"#f9f6f1"},children:e.value}),(0,r.jsx)("div",{className:"bc-guest-sub",children:e.sub})]})]},e.sub))})]})]}),(0,r.jsxs)("div",{className:"bc-info-strip",children:[(0,r.jsx)("div",{className:"bc-info-head",children:"Important Information"}),(0,r.jsx)("ul",{className:"bc-info-list",children:["Check-in from 2:00 PM · Check-out by 11:00 AM","Free cancellation up to 24 hours before arrival","Confirmation email sent to your registered address","For changes contact us at +256 746 077 473"].map(e=>(0,r.jsxs)("li",{className:"bc-info-item",children:[(0,r.jsx)("span",{className:"bc-info-dot"}),e]},e))})]}),(0,r.jsxs)("div",{className:"bc-actions",children:[(0,r.jsxs)(f.default,{href:"/",className:"bc-btn-primary",children:["Return to Homepage",(0,r.jsx)("svg",{width:"13",height:"13",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),(0,r.jsxs)("a",{href:"tel:+256746077473",className:"bc-btn-outline",children:[(0,r.jsx)(c.Phone,{size:14,strokeWidth:1.5}),"Contact Us"]})]})]})}),(0,r.jsx)("section",{className:"bc-next",children:(0,r.jsxs)("div",{className:"bc-next-inner",children:[(0,r.jsxs)("div",{className:"bc-next-header",children:[(0,r.jsx)("div",{className:"bc-eyebrow",style:{color:"rgba(184,148,90,0.85)",justifyContent:"center"},children:"Prepare for Your Stay"}),(0,r.jsxs)("h2",{className:"bc-next-h2",children:["What's ",(0,r.jsx)("em",{children:"Next?"})]}),(0,r.jsx)("div",{className:"bc-next-rule"})]}),(0,r.jsx)("div",{className:"bc-next-grid",children:[{icon:(0,r.jsx)(p.MapPin,{size:18,strokeWidth:1.5}),title:"Plan Your Journey",desc:"Find directions and plan your travel to Mt. Rwenzori Golf Resort & Spa in Kasese, Uganda."},{icon:(0,r.jsx)(s.Calendar,{size:18,strokeWidth:1.5}),title:"Explore Activities",desc:"Discover our championship golf course, spa services, and the surrounding mountain attractions."},{icon:(0,r.jsx)(h,{size:18,strokeWidth:1.5}),title:"Travel Insurance",desc:"Consider travel insurance for a completely worry-free mountain vacation experience."}].map(e=>(0,r.jsxs)("div",{className:"bc-next-card",children:[(0,r.jsx)("div",{className:"bc-next-icon",children:e.icon}),(0,r.jsx)("div",{className:"bc-next-title",children:e.title}),(0,r.jsx)("p",{className:"bc-next-desc",children:e.desc})]},e.title))})]})})]}),(0,r.jsx)(o.Footer,{})]})]})}],58945)}]);