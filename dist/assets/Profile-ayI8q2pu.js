import{o as b,r as a,b as w,n as g,p as S,j as e,B as c,S as k,T as d,H as $,L as o,O as T,g as y}from"./index-BXO2U9-f.js";import{N as I}from"./NestedLayoutsSpinner-B0krdBdp.js";import{F as A}from"./FollowAndUnfollowButtons-BjMUWOHr.js";import{T as E,a as F,b as l,c as L}from"./chunk-IAXSQ4X2-Cn_DVlwo.js";import"./chunk-AXLEE3EK-TN3R7wDi.js";import"./index-o6s6JXNz.js";function D(){const{id:s}=b(),[t,m]=a.useState(null),[x,h]=a.useState(""),[f,u]=a.useState(!0),{user:r}=w(),[j,n]=a.useState(0),{pathname:p}=g();return a.useEffect(()=>{(()=>{switch(p){case`/profile/${s}`:n(0);break;case`/profile/${s}/bookmarks`:n(1);break;case`/profile/${s}/followers`:n(2);break;case`/profile/${s}/following`:n(3);break;case`/profile/${s}/about`:n(4);break}})(),S.get(`/api/users/${s}`,{withCredentials:!1}).then(i=>i.data).then(i=>{if(i.error)return h(i.error);m(i.data)}).catch(()=>h("Internal server error")).finally(()=>u(!1))},[s,p]),e.jsxs(c,{minH:"100vh",display:"flex",alignItems:"start",p:"0",children:[e.jsx(c,{w:"68vw",p:"12",mt:"16",children:f?e.jsx(k,{}):x?e.jsx(d,{color:"red.600",textAlign:"center",fontSize:"lg",fontWeight:"medium",children:x}):e.jsxs(e.Fragment,{children:[e.jsx($,{children:t==null?void 0:t.fullname}),e.jsxs(E,{size:"sm",mt:"8",defaultIndex:j,children:[e.jsxs(F,{overflowY:"hidden",height:"full",children:[e.jsx(o,{to:`/profile/${s}`,children:e.jsx(l,{py:"2",whiteSpace:"nowrap",m:"0",children:"Publications"})}),(t==null?void 0:t._id)===(r==null?void 0:r._id)?e.jsx(o,{to:`/profile/${s}/bookmarks`,children:e.jsx(l,{py:"2",whiteSpace:"nowrap",m:"0",children:"Bookmarks"})}):null,e.jsx(o,{to:`/profile/${s}/followers`,children:e.jsx(l,{py:"2",whiteSpace:"nowrap",m:"0",children:"Followers"})}),e.jsx(o,{to:`/profile/${s}/following`,children:e.jsx(l,{py:"2",whiteSpace:"nowrap",m:"0",children:"Following"})}),e.jsx(o,{to:`/profile/${s}/about`,children:e.jsx(l,{py:"2",whiteSpace:"nowrap",m:"0",children:"About"})})]}),e.jsx(L,{py:"10",children:e.jsx(a.Suspense,{fallback:e.jsx(I,{}),children:e.jsx(T,{})})})]})]})}),e.jsxs(c,{mt:"16",px:"12",pt:"16",children:[e.jsx(y,{src:t==null?void 0:t.profilePicture,w:"90px",h:"90px",objectFit:"cover",rounded:"full"}),e.jsx(d,{fontWeight:"bold",mt:"5",mb:"8",children:t==null?void 0:t.fullname}),t&&(r==null?void 0:r._id)!==(t==null?void 0:t._id)?e.jsx(A,{authorID:t._id}):e.jsx(o,{to:"/settings",children:e.jsx(d,{color:"teal.500",fontSize:"sm",textDecoration:"underline",children:"Edit profile"})})]})]})}export{D as default};