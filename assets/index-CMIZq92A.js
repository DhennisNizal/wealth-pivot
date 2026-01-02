import{b as t,d as o,c as r,B as c,u as m,r as a,a as d,j as e,S as p,A as u}from"./index-wcGpI5TT.js";const g=o.section`
  width: 100%;
  padding: 1rem 4rem;
  margin-bottom: 8rem;

  ${t.mobile} {
    padding: 2rem;
  }
`,b=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-content: center;

  ${t.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${t.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`,h=o(c)`
  display: block;
  margin: 3rem auto;
  width: 6.5rem;
  height: 2.5rem;
  color: ${r.white};
  background-color: ${r.emeraldGreen};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    color: ${r.white} !important;
    background-color: ${r.emeraldGreen} !important;
    transform: scale(1.05);
  }
`,f=a.memo(u),A=()=>{const i=m(),s=a.useCallback(()=>{i("/article-page")},[i]),l=a.useMemo(()=>d.slice(0,4),[]);return e.jsxs(g,{children:[e.jsx(p,{title:"Articles",subtitle:"Articles that inform and inspire"}),e.jsx(b,{children:l.map(n=>e.jsx(f,{item:n},n.id))}),e.jsx(h,{type:"primary",onClick:s,children:"View all"})]})};export{A as default};
