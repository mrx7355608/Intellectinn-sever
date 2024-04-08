import{i as M,j as r,c as v,f as j,r as a,d as P,I as w,a as k,S as R,e as V,T as A,g as G}from"./index-gfkfeWlX.js";import{g as O}from"./index-xScHUS36.js";function T(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):M(e)?Object.keys(e).reduce((n,o)=>(n[o]=t(e[o]),n),{}):e!=null?t(e):null}var C=e=>r.jsx(v.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});C.displayName="StackItem";function H(e){const{spacing:t,direction:n}=e,o={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":T(n,l=>o[l])}}var S=j((e,t)=>{const{isInline:n,direction:o,align:l,justify:W,spacing:d="0.5rem",wrap:_,children:f,divider:c,className:I,shouldWrapChildren:u,...E}=e,m=n?"row":o??"column",p=a.useMemo(()=>H({spacing:d,direction:m}),[d,m]),s=!!c,x=!u&&!s,N=a.useMemo(()=>{const h=O(f);return x?h:h.map((i,g)=>{const y=typeof i.key<"u"?i.key:g,L=g+1===h.length,b=u?r.jsx(C,{children:i},y):i;if(!s)return b;const D=a.cloneElement(c,{__css:p}),F=L?null:D;return r.jsxs(a.Fragment,{children:[b,F]},y)})},[c,p,s,x,u,f]),B=P("chakra-stack",I);return r.jsx(v.div,{ref:t,display:"flex",alignItems:l,justifyContent:W,flexDirection:m,flexWrap:_,gap:s?void 0:d,className:B,...E,children:N})});S.displayName="Stack";var U=j((e,t)=>r.jsx(S,{align:"center",...e,direction:"column",ref:t}));U.displayName="VStack";function K({onChangeHandler:e}){return r.jsx(w,{placeholder:"Email address",type:"email",name:"email",onChange:e,w:"full"})}function Q({onChangeHandler:e}){return r.jsx(w,{placeholder:"Password",type:"password",name:"password",onChange:e})}function X({buttonText:e,isLoading:t}){return r.jsx(k,{colorScheme:"teal",type:"submit",w:"full",mt:"5",children:t?r.jsx(R,{}):e})}function Y({error:e}){const{colorMode:t}=V();return r.jsx(A,{w:"full",fontWeight:"medium",color:t==="light"?"red.700":"red.200",bg:t==="light"?"red.100":"red.900",p:"3",mb:"1",rounded:"md",children:e})}function Z(){const e=()=>{window.open("http://localhost:8000/api/auth/google","_self")};return r.jsxs(k,{w:"full",pos:"relative",bg:"transparent",p:"6",variant:"outline",onClick:e,children:[r.jsx(G,{src:"/google.png",alt:"Google login button",objectFit:"cover",borderRadius:"full",w:"24px",pos:"absolute",top:"3",left:"3"}),"Continue With Google"]})}export{Z as C,K as E,X as F,Q as P,Y as S,U as V};
