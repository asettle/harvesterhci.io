(self.webpackChunkharvesterhci=self.webpackChunkharvesterhci||[]).push([[8433],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||c;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5557:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return i},default:function(){return l}});var n=r(2122),a=r(9756),c=(r(7294),r(3905)),s={sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Accessing VM through Harvester","Access to the VM"]},o={unversionedId:"vm-management/access-to-the-vm",id:"vm-management/access-to-the-vm",isDocsHomePage:!1,title:"Access to the VM",description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI.",source:"@site/docs/vm-management/access-to-the-vm.md",sourceDirName:"vm-management",slug:"/vm-management/access-to-the-vm",permalink:"/docs/next/vm-management/access-to-the-vm",editUrl:"https://github.com/harvester/harvester.github.io/edit/master/website/docs/vm-management/access-to-the-vm.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Accessing VM through Harvester","Access to the VM"]},sidebar:"tutorialSidebar",previous:{title:"How to Create a VM",permalink:"/docs/next/vm-management/create-vm"},next:{title:"VM Backup & Restore",permalink:"/docs/next/vm-management/backup-restore"}},i=[],u={toc:i};function l(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."),(0,c.kt)("p",null,"Optionally, connect directly from your computer's SSH client."),(0,c.kt)("h4",{id:"access-with-the-ui"},"Access with the UI"),(0,c.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,c.kt)("p",null,"If the VGA display is not enabled on the VM (e.g., when using the Ubuntu minimal cloud image), the VM can be accessed with the serial console."),(0,c.kt)("h4",{id:"access-using-ssh"},"Access using SSH"),(0,c.kt)("p",null,"Use the address in a terminal emulation client (such as Putty) or use the following command line to access the VM directly from your computer's SSH client:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(3602).Z})))}l.isMDXComponent=!0},3602:function(e,t,r){"use strict";t.Z=r.p+"assets/images/access-to-vm-897089a361092bdb57cc1f1861b33d6a.png"}}]);