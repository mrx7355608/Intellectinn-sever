import{m as o,j as r,S as c,T as m}from"./index-N_Esq6xR.js";import{A as p}from"./ArticlesList-DKSA2Ocq.js";import{u as n}from"./useFetch-pmIvTeDd.js";import"./articles-B_K4BwBe.js";import"./chunk-4FCEGNGT-DaJvZmNO.js";import"./chunk-5FG5SY5K-DFfNRqu8.js";import"./chunk-AXLEE3EK-CzTmDxlU.js";import"./chunk-W7WUSNWJ-XkcY5p11.js";function A(){const[s,l]=o(),e=s.get("query"),{loading:a,err:t,data:i}=n(`/api/articles/search?articles=${e}`);return r.jsx(r.Fragment,{children:a?r.jsx(c,{}):t?r.jsx(m,{color:"red.600",children:t}):r.jsx(p,{articles:i})})}export{A as default};