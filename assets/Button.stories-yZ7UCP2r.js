import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{u as K}from"./MantineThemeProvider-mLsTmVGU.js";import{B as $}from"./Button-K_00itHE.js";import{P as r}from"./PlayIcon-lIg5OZmR.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Loader-7jh9v0Es.js";const D="_lyricBlueRoot_hrif6_1",G="_secondaryRoot_hrif6_58",p={lyricBlueRoot:D,secondaryRoot:G},d=({size:c="sm",type:u="primary",disabled:M=!1,elevated:N=!0,color:m="lyricBlue",label:w,...A})=>{const E=K(),O=F=>{switch(F){case"primary":return"filled";case"secondary":return"outline";case"tertiary":return"default";case"link":return"transparent";default:return"filled"}};return e.jsx($,{variant:O(u),size:c,color:m,disabled:M,classNames:{root:m==="lyricBlue"?p.lyricBlueRoot:p.secondaryRoot},style:{borderRadius:u!=="link"?E.radius[c]:0,boxShadow:N&&u!=="link"?"inset 1px -3px 12px 2px #0000000F,1px 2px 12px 0px #0000001A":"none"},...A,children:w})};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"link"'}]}},size:{defaultValue:{value:"sm"},description:"Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},color:{defaultValue:{value:"lyricBlue"},description:"Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default",name:"color",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"lyricBlue"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Indicates disabled state",name:"disabled",required:!1,type:{name:"boolean"}},elevated:{defaultValue:{value:"true"},description:"",name:"elevated",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={title:"Atoms/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftSection:{control:!1},rightSection:{control:!1}}},t={args:{type:"primary",label:"Button",leftSection:e.jsx(r,{size:16}),rightSection:e.jsx(r,{size:16}),color:"lyricBlue"}},a={args:{type:"secondary",label:"Button",leftSection:e.jsx(r,{size:16}),rightSection:e.jsx(r,{size:16}),color:"lyricBlue"}},o={args:{type:"tertiary",label:"Button",leftSection:e.jsx(r,{size:16}),rightSection:e.jsx(r,{size:16}),color:"lyricBlue"}},n={args:{type:"link",label:"Button",leftSection:e.jsx(r,{size:16}),rightSection:e.jsx(r,{size:16}),color:"lyricBlue"}},s={args:{size:"md",label:"Button",leftSection:e.jsx(r,{size:16}),rightSection:e.jsx(r,{size:16})}},l={args:{size:"sm",label:"Button",leftSection:e.jsx(r,{size:12}),rightSection:e.jsx(r,{size:12})}},i={args:{size:"xs",label:"Button",leftSection:e.jsx(r,{size:12}),rightSection:e.jsx(r,{size:12})}};var y,f,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "primary",
    label: 'Button',
    leftSection: <PlayIcon size={16} />,
    rightSection: <PlayIcon size={16} />,
    color: "lyricBlue"
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,z,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "secondary",
    label: 'Button',
    leftSection: <PlayIcon size={16} />,
    rightSection: <PlayIcon size={16} />,
    color: "lyricBlue"
  }
}`,...(B=(z=a.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "tertiary",
    label: 'Button',
    leftSection: <PlayIcon size={16} />,
    rightSection: <PlayIcon size={16} />,
    color: "lyricBlue"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,P,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "link",
    label: 'Button',
    leftSection: <PlayIcon size={16} />,
    rightSection: <PlayIcon size={16} />,
    color: "lyricBlue"
  }
}`,...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var I,_,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Button',
    leftSection: <PlayIcon size={16} />,
    rightSection: <PlayIcon size={16} />
  }
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var R,V,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Button',
    leftSection: <PlayIcon size={12} />,
    rightSection: <PlayIcon size={12} />
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var C,L,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    label: 'Button',
    leftSection: <PlayIcon size={12} />,
    rightSection: <PlayIcon size={12} />
  }
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const ee=["Primary","Secondary","Tertiary","Link","Large","Medium","Small"];export{s as Large,n as Link,l as Medium,t as Primary,a as Secondary,i as Small,o as Tertiary,ee as __namedExportsOrder,Z as default};
