import{o as b,r,b as w,n as g,p as S,j as e,B as c,S as k,T as d,H as $,L as a,O as T,g as y}from"./index-gfkfeWlX.js";import{N as I}from"./NestedLayoutsSpinner-DK1Auhsn.js";import{F as A}from"./FollowAndUnfollowButtons-CQp1f4lL.js";import{T as E,a as F,b as i,c as L}from"./chunk-IAXSQ4X2-D3OQXIgH.js";import"./chunk-AXLEE3EK-DMovQRT3.js";import"./index-xScHUS36.js";function D(){const{id:t}=b(),[s,f]=r.useState(null),[x,h]=r.useState(""),[m,u]=r.useState(!0),{user:l}=w(),[j,o]=r.useState(0),{pathname:p}=g();return r.useEffect(()=>{(()=>{switch(p){case`/profile/${t}`:o(0);break;case`/profile/${t}/bookmarks`:o(1);break;case`/profile/${t}/followers`:o(2);break;case`/profile/${t}/following`:o(3);break;case`/profile/${t}/about`:o(4);break}})(),S.get(`/api/users/${t}`,{withCredentials:!1}).then(n=>n.data).then(n=>{if(n.error)return h(n.error);f(n.data)}).catch(()=>h("Internal server error")).finally(()=>u(!1))},[t,p]),e.jsxs(c,{minH:"100vh",display:"flex",alignItems:"start",p:"0",children:[e.jsx(c,{w:"68vw",p:"12",mt:"16",children:m?e.jsx(k,{}):x?e.jsx(d,{color:"red.600",textAlign:"center",fontSize:"lg",fontWeight:"medium",children:x}):e.jsxs(e.Fragment,{children:[e.jsx($,{children:s==null?void 0:s.fullname}),e.jsxs(E,{size:"sm",mt:"8",defaultIndex:j,children:[e.jsxs(F,{overflowY:"hidden",height:"full",children:[e.jsx(a,{to:`/profile/${t}`,children:e.jsx(i,{py:"2",whiteSpace:"nowrap",m:"0",children:"Publications"})}),e.jsx(a,{to:`/profile/${t}/bookmarks`,children:e.jsx(i,{py:"2",whiteSpace:"nowrap",m:"0",children:"Bookmarks"})}),e.jsx(a,{to:`/profile/${t}/followers`,children:e.jsx(i,{py:"2",whiteSpace:"nowrap",m:"0",children:"Followers"})}),e.jsx(a,{to:`/profile/${t}/following`,children:e.jsx(i,{py:"2",whiteSpace:"nowrap",m:"0",children:"Following"})}),e.jsx(a,{to:`/profile/${t}/about`,children:e.jsx(i,{py:"2",whiteSpace:"nowrap",m:"0",children:"About"})})]}),e.jsx(L,{py:"10",children:e.jsx(r.Suspense,{fallback:e.jsx(I,{}),children:e.jsx(T,{})})})]})]})}),e.jsxs(c,{mt:"16",px:"12",pt:"16",children:[e.jsx(y,{src:s==null?void 0:s.profilePicture,w:"90px",h:"90px",objectFit:"cover",rounded:"full"}),e.jsx(d,{fontWeight:"bold",mt:"5",mb:"8",children:s==null?void 0:s.fullname}),s&&(l==null?void 0:l._id)!==(s==null?void 0:s._id)?e.jsx(A,{authorID:s._id}):e.jsx(a,{to:"/settings",children:e.jsx(d,{color:"teal.500",fontSize:"sm",textDecoration:"underline",children:"Edit profile"})})]})]})}export{D as default};
