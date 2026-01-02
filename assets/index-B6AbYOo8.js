import{G as o,b as t,d as n,c as i,r as m,j as e,S as h,B as u,J as g}from"./index-CJO8mH-I.js";function f(r){return o({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(r)}function x(r){return o({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z"},child:[]}]})(r)}function p(r){return o({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},child:[]}]})(r)}const b=n.div`
  width: 100%;
  padding: 1rem 4rem;
  margin-bottom: 8rem;

  ${t.mobile} {
    padding: 2rem 1rem;
  }
`,j=n.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${t.mobile} {
    padding: 1rem;
  }
`,v=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${t.mobile} {
    grid-template-columns: repeat(1, 3fr);
  }

  ${t.tablet} {
    grid-template-columns: repeat(1, 3fr);
  }

  .card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    min-height: 15rem;
    padding: 1.5rem;
    background-color: ${i.darkBlue};
    border-radius: 0.5rem;

    h2 {
      color: ${i.white};
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;

      ${t.mobile} {
        font-size: 1rem;
      }
    }

    svg {
      font-size: 4rem;
      color: ${i.emeraldGreen};
    }
  }
`,$=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: ${i.white};
  text-align: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin: 2rem 0 0 0;
    color: ${i.emeraldGreen};

    ${t.mobile} {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    max-width: 80%;

    ${t.mobile} {
      font-size: 1rem;
      max-width: 100%;
      line-height: 2rem;
    }

    ${t.tablet} {
      max-width: 100%;
    }
  }
`,w=n.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${i.white};
  margin: auto;

  ${t.mobile} {
    flex-direction: column;
  }
  ${t.tablet} {
    flex-direction: column;
  }

  .left {
    height: auto;

    h2 {
      margin: 0;
      font-size: 2.5rem;
      color: ${i.lightGray};

      ${t.mobile} {
        text-align: center;
        font-size: 1.8rem;
      }
      ${t.tablet} {
        text-align: center;
      }
    }
  }

  .right {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
      font-weight: 500;
      background-color: ${i.emeraldGreen};
      color: ${i.white};
      border: none;
      transition: transform 0.2s ease;

      &:hover {
        color: ${i.white} !important;
        background-color: ${i.emeraldGreen} !important;
        transform: scale(1.03);
      }
    }
  }
`,z=()=>{const[r,a]=m.useState(!1),s=()=>a(!0),l=()=>a(!1),d=c=>{console.log("Email submitted:",c),l()};return e.jsxs(b,{children:[e.jsx(h,{title:"About Us",subtitle:"Our mission and commitment"}),e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsxs("div",{className:"card-item",children:[e.jsx(f,{}),e.jsx("h2",{children:"We deliver proven guidance for confident financial decisions."})]}),e.jsxs("div",{className:"card-item",children:[e.jsx(x,{}),e.jsx("h2",{children:"We craft solutions designed to elevate your path to growth."})]}),e.jsxs("div",{className:"card-item",children:[e.jsx(p,{}),e.jsx("h2",{children:"Trusted by thousands of readers pursuing growth worldwide"})]})]}),e.jsxs($,{children:[e.jsx("h2",{children:"Our Mission: Unbiased Financial Education"}),e.jsx("p",{children:"We cut through the noise to deliver straightforward and unbiased advice. Our community is built on trust, transparency, and the belief that everyone deserves to feel confident about their financial future."})]}),e.jsxs(w,{children:[e.jsx("div",{className:"left",children:e.jsx("h2",{children:"Join thousand of readers growing financially online"})}),e.jsx("div",{className:"right",children:e.jsx(u,{onClick:s,type:"primary",children:"Join community"})})]})]}),e.jsx(g,{visible:r,onClose:l,onSubmit:d})]})};export{z as default};
