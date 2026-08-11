(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76841,25269,28736,e=>{"use strict";var t=e.i(44501),a=e.i(33596),r=e.i(3985);let i=(0,r.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",0,i],25269);var s=e.i(83198);let o=(0,r.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",0,o],28736);let n=(0,r.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var l=e.i(6272),c=e.i(73972),d=e.i(64237),p=e.i(70646);e.s(["Footer",0,function(){let e=new Date().getFullYear(),r=[{href:"https://www.facebook.com/profile.php?id=61589477902150",icon:l.Facebook,label:"Facebook"},{href:"https://instagram.com",icon:c.Instagram,label:"Instagram"},{href:"https://x.com/home",icon:d.Twitter,label:"X"},{href:"https://tiktok.com/@mtrwenzori",icon:p.Music,label:"TikTok"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("footer",{className:"ftr",children:[(0,t.jsxs)("div",{className:"ftr-cta",children:[(0,t.jsxs)("p",{className:"ftr-cta-text",children:["Your mountain escape ",(0,t.jsx)("em",{children:"awaits."}),(0,t.jsx)("br",{}),"Reserve your stay today."]}),(0,t.jsxs)(a.default,{href:"/booking",className:"ftr-cta-btn",children:["Book Your Stay",(0,t.jsx)("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),(0,t.jsxs)("div",{className:"ftr-main",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.default,{href:"/",className:"ftr-brand-logo",children:[(0,t.jsx)("img",{src:"/logo.JPG",alt:"Mt. Rwenzori Golf Resort"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"ftr-brand-name",children:"Mt. Rwenzori"}),(0,t.jsx)("span",{className:"ftr-brand-sub",children:"Golf Resort & Spa"})]})]}),(0,t.jsx)("p",{className:"ftr-brand-desc",children:"A serene mountain retreat in the heart of the Rwenzori Mountains — offering luxury accommodation, championship golf, and world-class spa services."}),(0,t.jsx)("div",{className:"ftr-socials",children:r.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"ftr-social","aria-label":e.label,children:(0,t.jsx)(e.icon,{size:15})},e.label))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"ftr-col-head",children:"Navigate"}),(0,t.jsx)("ul",{className:"ftr-nav-list",children:[{href:"/",label:"Home"},{href:"/accommodation",label:"Accommodation"},{href:"/golf",label:"Golf"},{href:"/spa",label:"Spa"},{href:"/amenities",label:"Amenities"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}].map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:e.href,className:"ftr-nav-link",children:e.label})},e.href))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"ftr-col-head",children:"Services"}),(0,t.jsx)("div",{children:["9-Hole Golf Course","Premium Spa & Wellness","Full English Breakfast","High-Speed WiFi","Event Hosting","Mountain Trekking"].map(e=>(0,t.jsx)("div",{className:"ftr-service-item",children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"ftr-col-head",children:"Contact Us"}),(0,t.jsxs)("div",{className:"ftr-contact-list",children:[(0,t.jsxs)("div",{className:"ftr-contact-item",children:[(0,t.jsx)("div",{className:"ftr-contact-icon",children:(0,t.jsx)(i,{size:13})}),(0,t.jsx)("span",{children:"Kasese, Rwenzori Mountain Region, Uganda"})]}),(0,t.jsxs)("a",{href:"tel:+256746077473",className:"ftr-contact-item",children:[(0,t.jsx)("div",{className:"ftr-contact-icon",children:(0,t.jsx)(s.Phone,{size:13})}),(0,t.jsx)("span",{children:"+256 746 077 473"})]}),(0,t.jsxs)("a",{href:"tel:+256774751727",className:"ftr-contact-item",children:[(0,t.jsx)("div",{className:"ftr-contact-icon",children:(0,t.jsx)(s.Phone,{size:13})}),(0,t.jsx)("span",{children:"+256 774 751 727"})]}),(0,t.jsxs)("a",{href:"mailto:mtrwenzorigolfresortspa@gmail.com",className:"ftr-contact-item",children:[(0,t.jsx)("div",{className:"ftr-contact-icon",children:(0,t.jsx)(o,{size:13})}),(0,t.jsx)("span",{children:"mtrwenzorigolfresortspa@gmail.com"})]}),(0,t.jsxs)("div",{className:"ftr-contact-item",children:[(0,t.jsx)("div",{className:"ftr-contact-icon",children:(0,t.jsx)(n,{size:13})}),(0,t.jsxs)("span",{children:["Open Year-Round",(0,t.jsx)("br",{}),"Check-in from 2:00 PM"]})]})]})]})]}),(0,t.jsxs)("div",{className:"ftr-bottom",children:[(0,t.jsxs)("div",{className:"ftr-bottom-left",children:[(0,t.jsxs)("p",{className:"ftr-copyright",children:["© ",e,"Mt. Rwenzori Golf Resort & Spa. All rights reserved."]}),(0,t.jsxs)("div",{className:"ftr-dev",children:[(0,t.jsx)("span",{children:"Developed by Baliddawa Allan "}),(0,t.jsx)("span",{className:"ftr-dev-sep",children:"·"}),(0,t.jsx)("a",{href:"tel:0700966715",children:"0700 966 715"}),(0,t.jsx)("span",{className:"ftr-dev-sep",children:"·"}),(0,t.jsx)("a",{href:"tel:0785639406",children:"0785 639 406"})]})]}),(0,t.jsxs)("div",{className:"ftr-bottom-right",children:[(0,t.jsx)(a.default,{href:"#",className:"ftr-legal-link",children:"Privacy"}),(0,t.jsx)(a.default,{href:"#",className:"ftr-legal-link",children:"Terms"}),(0,t.jsx)(a.default,{href:"/contact",className:"ftr-legal-link",children:"Contact"})]})]})]})]})}],76841)},38175,e=>{"use strict";var t=e.i(44501),a=e.i(1685),r=e.i(13293),i=e.i(76841),s=e.i(98924);let o=(0,e.i(3985).default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["default",0,function(){let[e,n]=(0,a.useState)(null),[l,c]=(0,a.useState)(""),[d,p]=(0,a.useState)(""),[f,m]=(0,a.useState)(1),[x,h]=(0,a.useState)(!1),[g,u]=(0,a.useState)({firstName:"",lastName:"",email:"",phone:"",specialRequests:""}),b=[{id:"deluxe",name:"Deluxe Room",price:100,description:"Luxurious accommodation with premium amenities",features:["King Size Bed","Mountain View","Mini Bar","Premium Amenities"],image:"/images/_DSC9760.jpg",maxGuests:2},{id:"double-mountain",name:"Double Room with Mountain View",price:60,description:"Comfortable room with stunning mountain vistas",features:["Double Bed","Mountain View","Workspace","Modern Bathroom"],image:"/images/_DSC9758.jpg",maxGuests:2},{id:"cottage",name:"Cottage with Beautiful Mountain View",price:150,description:"Private cottage with breakfast included",features:["Private Cottage","Mountain View","Breakfast Included","Living Area"],image:"/images/_DSC9747.png",maxGuests:4},{id:"twin-golf",name:"Twin Room with Mountain View",price:95,description:"Twin accommodation with breakfast and golf round",features:["Twin Beds","Mountain View","Breakfast Included","1 Round Golf"],image:"/images/_DSC9770.jpg",maxGuests:2}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Header,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(s.HeroSection,{title:"Book Your Stay",subtitle:"Reserve your luxury accommodation at Mt. Rwenzori Golf Resort & Spa",image:"/images/_DSC9854.png"}),(0,t.jsx)("section",{className:"py-16 md:py-24 bg-white",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-4 md:px-6",children:(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),alert("Booking submitted! We will contact you shortly to confirm your reservation.")},className:"space-y-8",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,t.jsx)("input",{type:"date",value:l,onChange:e=>c(e.target.value),required:!0}),(0,t.jsx)("input",{type:"date",value:d,onChange:e=>p(e.target.value),required:!0}),(0,t.jsx)("select",{value:f,onChange:e=>m(Number(e.target.value)),children:[1,2,3,4,5,6].map(e=>(0,t.jsx)("option",{children:e},e))})]}),(0,t.jsx)("div",{className:"bg-secondary p-6 rounded-lg",children:(0,t.jsxs)("label",{className:"flex items-center gap-3",children:[(0,t.jsx)("input",{type:"checkbox",checked:x,onChange:e=>h(e.target.checked)}),(0,t.jsx)(o,{className:"w-5 h-5 text-accent"}),(0,t.jsx)("span",{children:"Add Golf Round (+$35/night)"})]})}),(0,t.jsxs)("div",{className:"text-xl font-bold",children:["Total: $",(()=>{if(!e)return 0;let t=b.find(t=>t.id===e);if(!t)return 0;let a=l&&d?Math.ceil((new Date(d).getTime()-new Date(l).getTime())/864e5):0,r=t.price*a;return x&&!t.features.includes("1 Round Golf")&&(r+=35*a),r})()]}),(0,t.jsx)("button",{type:"submit",className:"w-full bg-accent py-3 rounded-lg",children:"Complete Booking"})]})})})]}),(0,t.jsx)(i.Footer,{})]})}],38175)}]);