(self.webpackChunkharvesterhci=self.webpackChunkharvesterhci||[]).push([[8856],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3674:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s={sidebar_position:2},c={unversionedId:"vm-management/access-to-the-vm",id:"version-0.2.0/vm-management/access-to-the-vm",isDocsHomePage:!1,title:"Access to the VM",description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI.",source:"@site/versioned_docs/version-0.2.0/vm-management/access-to-the-vm.md",sourceDirName:"vm-management",slug:"/vm-management/access-to-the-vm",permalink:"/docs/vm-management/access-to-the-vm",editUrl:"https://github.com/harvester/harvester.github.io/edit/master/website/versioned_docs/version-0.2.0/vm-management/access-to-the-vm.md",version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2.0/tutorialSidebar",previous:{title:"How to Create a VM",permalink:"/docs/vm-management/create-vm"},next:{title:"VM Backup & Restore",permalink:"/docs/vm-management/backup-restore"}},i=[],u={toc:i};function l(e){var t=e.components,s=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."),(0,a.kt)("p",null,"Optionally, connect directly from your computer's SSH client."),(0,a.kt)("h4",{id:"access-with-the-ui"},"Access with the UI"),(0,a.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,a.kt)("p",null,"If the VGA display is not enabled on the VM (e.g., when using the Ubuntu minimal cloud image), the VM can be accessed with the serial console."),(0,a.kt)("h4",{id:"access-using-ssh"},"Access using SSH"),(0,a.kt)("p",null,"Use the address in a terminal emulation client (such as Putty) or use the following command line to access the VM directly from your computer's SSH client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3602).Z})))}l.isMDXComponent=!0},3602:function(e,t,n){"use strict";t.Z=n.p+"assets/images/access-to-vm-897089a361092bdb57cc1f1861b33d6a.png"}}]);