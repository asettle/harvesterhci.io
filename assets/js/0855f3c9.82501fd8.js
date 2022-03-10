(self.webpackChunkharvesterhci=self.webpackChunkharvesterhci||[]).push([[5257],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1914:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Install Harverster","Installing Harverster","Harverster Installation","PXE Boot Install"]},s={unversionedId:"installation/pxe-boot-install",id:"installation/pxe-boot-install",isDocsHomePage:!1,title:"PXE Boot Install",description:"Starting from version 0.2.0, Harvester can be installed in a mass manner. This document provides an example to do the automatic installation with PXE boot.",source:"@site/docs/installation/pxe-boot-install.md",sourceDirName:"installation",slug:"/installation/pxe-boot-install",permalink:"/docs/next/installation/pxe-boot-install",editUrl:"https://github.com/harvester/harvester.github.io/edit/master/website/docs/installation/pxe-boot-install.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Install Harverster","Installing Harverster","Harverster Installation","PXE Boot Install"]},sidebar:"tutorialSidebar",previous:{title:"ISO Installation",permalink:"/docs/next/installation/iso-install"},next:{title:"Harvester Configuration",permalink:"/docs/next/installation/harvester-configuration"}},l=[{value:"Preparing HTTP Servers",id:"preparing-http-servers",children:[]},{value:"Preparing Boot Files",id:"preparing-boot-files",children:[]},{value:"Preparing iPXE boot scripts",id:"preparing-ipxe-boot-scripts",children:[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"CREATE mode",id:"create-mode",children:[]},{value:"JOIN mode",id:"join-mode",children:[]}]},{value:"DHCP server configuration",id:"dhcp-server-configuration",children:[]},{value:"Harvester configuration",id:"harvester-configuration",children:[]},{value:"UEFI HTTP Boot support",id:"uefi-http-boot-support",children:[{value:"Serve the iPXE program",id:"serve-the-ipxe-program",children:[]},{value:"DHCP server configuration",id:"dhcp-server-configuration-1",children:[]},{value:"The iPXE script for UEFI boot",id:"the-ipxe-script-for-uefi-boot",children:[]}]}],p={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starting from version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.0"),", Harvester can be installed in a mass manner. This document provides an example to do the automatic installation with PXE boot."),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://ipxe.org/"},"iPXE")," to perform the network boot. It has more features than the traditional PXE Boot program and is likely available in modern NIC cards. If NIC cards don't come with iPXE firmware, iPXE firmware images can be loaded from the TFTP server first."),(0,i.kt)("p",null,"To see sample iPXE scripts, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"https://github.com/harvester/ipxe-examples"),"."),(0,i.kt)("h2",{id:"preparing-http-servers"},"Preparing HTTP Servers"),(0,i.kt)("p",null,"An HTTP server is required to serve boot files. Please ensure these servers are set up correctly before continuing."),(0,i.kt)("p",null,"Let's assume an NGINX HTTP server's IP is ",(0,i.kt)("inlineCode",{parentName:"p"},"10.100.0.10"),", and it serves ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/")," folder at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/"),"."),(0,i.kt)("h2",{id:"preparing-boot-files"},"Preparing Boot Files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download the required files from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"https://github.com/harvester/harvester/releases"),". Choose an appropriate version."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ISO: ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-amd64.iso")),(0,i.kt)("li",{parentName:"ul"},"The kernel: ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-vmlinuz-amd64")),(0,i.kt)("li",{parentName:"ul"},"The initrd: ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-initrd-amd64")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Serve the files."),(0,i.kt)("p",{parentName:"li"},"Copy or move the downloaded files to an appropriate location so they can be downloaded via the HTTP server. e.g.,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo mkdir -p /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-amd64.iso /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-vmlinuz-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-initrd-amd64 /usr/share/nginx/html/harvester/\n")))),(0,i.kt)("h2",{id:"preparing-ipxe-boot-scripts"},"Preparing iPXE boot scripts"),(0,i.kt)("p",null,"When performing automatic installation, there are two modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE"),": we are installing a node to construct an initial Harvester cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JOIN"),": we are installing a node to join an existing Harvester cluster.")),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"Nodes need to have at least ",(0,i.kt)("strong",{parentName:"p"},"8G")," of RAM because the full ISO file is loaded into tmpfs during the installation."),(0,i.kt)("h3",{id:"create-mode"},"CREATE mode"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secretly. Please do not make the configuration file publicly accessible at the moment.")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/installation/harvester-configuration"},"Harvester configuration file")," ",(0,i.kt)("inlineCode",{parentName:"p"},"config-create.yaml")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," mode. Modify the values as needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# cat /usr/share/nginx/html/harvester/config-create.yaml\ntoken: token\nos:\n  hostname: node1\n  ssh_authorized_keys:\n  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDbeUa9A7Kee+hcCleIXYxuaPksn2m4PZTd4T7wPcse8KbsQfttGRax6vxQXoPO6ehddqOb2nV7tkW2mEhR50OE7W7ngDHbzK2OneAyONYF44bmMsapNAGvnsBKe9rNrev1iVBwOjtmyVLhnLrJIX+2+3T3yauxdu+pmBsnD5OIKUrBrN1sdwW0rA2rHDiSnzXHNQM3m02aY6mlagdQ/Ovh96h05QFCHYxBc6oE/mIeFRaNifa4GU/oELn3a6HfbETeBQz+XOEN+IrLpnZO9riGyzsZroB/Y3Ju+cJxH06U0B7xwJCRmWZjuvfFQUP7RIJD1gRGZzmf3h8+F+oidkO2i5rbT57NaYSqkdVvR6RidVLWEzURZIGbtHjSPCi4kqD05ua8r/7CC0PvxQb1O5ILEdyJr2ZmzhF6VjjgmyrmSmt/yRq8MQtGQxyKXZhJqlPYho4d5SrHi5iGT2PvgDQaWch0I3ndEicaaPDZJHWBxVsCVAe44Wtj9g3LzXkyu3k= root@admin\n  password: rancher\ninstall:\n  mode: create\n  mgmt_interface: eth0\n  device: /dev/sda\n  iso_url: http://10.100.0.10/harvester-amd64.iso\n\n")),(0,i.kt)("p",null,"For machines that needs to be installed as ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!ipxe\nkernel vmlinuz k3os.mode=install console=ttyS0 console=tty1 harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd initrd\nboot\n")),(0,i.kt)("p",null,"Let's assume the iPXE script is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-create")),(0,i.kt)("h3",{id:"join-mode"},"JOIN mode"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secretly. Please do not make the configuration file publicly accessible at the moment.")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/installation/harvester-configuration"},"Harvester configuration file")," ",(0,i.kt)("inlineCode",{parentName:"p"},"config-join.yaml")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. Modify the values as needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# cat /usr/share/nginx/html/harvester/config-join.yaml\nserver_url: https://10.100.0.130:6443\ntoken: token\nos:\n  hostname: node2\n  ssh_authorized_keys:\n  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDbeUa9A7Kee+hcCleIXYxuaPksn2m4PZTd4T7wPcse8KbsQfttGRax6vxQXoPO6ehddqOb2nV7tkW2mEhR50OE7W7ngDHbzK2OneAyONYF44bmMsapNAGvnsBKe9rNrev1iVBwOjtmyVLhnLrJIX+2+3T3yauxdu+pmBsnD5OIKUrBrN1sdwW0rA2rHDiSnzXHNQM3m02aY6mlagdQ/Ovh96h05QFCHYxBc6oE/mIeFRaNifa4GU/oELn3a6HfbETeBQz+XOEN+IrLpnZO9riGyzsZroB/Y3Ju+cJxH06U0B7xwJCRmWZjuvfFQUP7RIJD1gRGZzmf3h8+F+oidkO2i5rbT57NaYSqkdVvR6RidVLWEzURZIGbtHjSPCi4kqD05ua8r/7CC0PvxQb1O5ILEdyJr2ZmzhF6VjjgmyrmSmt/yRq8MQtGQxyKXZhJqlPYho4d5SrHi5iGT2PvgDQaWch0I3ndEicaaPDZJHWBxVsCVAe44Wtj9g3LzXkyu3k= root@admin\n  dns_nameservers:\n  - 1.1.1.1\n  - 8.8.8.8\n  password: rancher\ninstall:\n  mode: join\n  mgmt_interface: eth0\n  device: /dev/sda\n  iso_url: http://10.100.0.10/harvester/harvester-amd64.iso\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"server_url")," needs to be provided."),(0,i.kt)("p",null,"For machines that needs to be installed in ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!ipxe\nkernel vmlinuz k3os.mode=install console=ttyS0 console=tty1 harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-join.yaml\ninitrd initrd\nboot\n")),(0,i.kt)("p",null,"Let's assume the iPXE script is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-join"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TROUBLESHOOTING")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sometimes the installer might be not able to fetch the Harvester configuration file because the network stack is not ready yet. To work around this, please add a ",(0,i.kt)("inlineCode",{parentName:"p"},"boot_cmd")," parameter to the iPXE script, e.g.,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'#!ipxe\nkernel vmlinuz k3os.mode=install console=ttyS0 console=tty1 harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-join.yaml boot_cmd="echo include_ping_test=yes >> /etc/conf.d/net-online"\ninitrd initrd\nboot\n')))),(0,i.kt)("h2",{id:"dhcp-server-configuration"},"DHCP server configuration"),(0,i.kt)("p",null,"Here is an example to configure the ISC DHCP server to offer iPXE scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'option architecture-type code 93 = unsigned integer 16;\n\nsubnet 10.100.0.0 netmask 255.255.255.0 {\n    option routers 10.100.0.10;\n        option domain-name-servers 192.168.2.1;\n    range 10.100.0.100 10.100.0.253;\n}\n\ngroup {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n\n\ngroup {\n  # join group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-join-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-join";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node2 { hardware ethernet 52:54:00:69:d5:92; }\n}\n')),(0,i.kt)("p",null,"The config file declares a subnet and two groups. The first group is for hosts to boot with ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," mode and the other one is for ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. By default, the iPXE path is chosen, but if it sees a PXE client, it also offers the iPXE image according to client architecture. Please prepare those images and a tftp server first."),(0,i.kt)("h2",{id:"harvester-configuration"},"Harvester configuration"),(0,i.kt)("p",null,"For more information about Harvester configuration, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/installation/harvester-configuration"},"Harvester configuration"),"."),(0,i.kt)("p",null,"Users can also provide configuration via kernel parameters. For example, to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," install mode, the user can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester.install.mode=create")," kernel parameter when booting. Values passed through kernel parameters have higher priority than values specified in the config file."),(0,i.kt)("h2",{id:"uefi-http-boot-support"},"UEFI HTTP Boot support"),(0,i.kt)("p",null,"UEFI firmware supports loading a boot image from HTTP server. This section demonstrates how to use UEFI HTTP boot to load the iPXE program and perform the automatic installation."),(0,i.kt)("h3",{id:"serve-the-ipxe-program"},"Serve the iPXE program"),(0,i.kt)("p",null,"Download the iPXE uefi program from ",(0,i.kt)("a",{parentName:"p",href:"http://boot.ipxe.org/ipxe.efi"},"http://boot.ipxe.org/ipxe.efi")," and make ",(0,i.kt)("inlineCode",{parentName:"p"},"ipxe.efi")," can be downloaded from the HTTP server. e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/share/nginx/html/harvester/\nwget http://boot.ipxe.org/ipxe.efi\n")),(0,i.kt)("p",null,"The file now can be downloaded from ",(0,i.kt)("a",{parentName:"p",href:"http://10.100.0.10/harvester/ipxe.efi"},"http://10.100.0.10/harvester/ipxe.efi")),(0,i.kt)("h3",{id:"dhcp-server-configuration-1"},"DHCP server configuration"),(0,i.kt)("p",null,"If the user plans to use the UEFI HTTP boot feature by getting a dynamic IP first, the DHCP server needs to provides the iPXE program URL when it sees such a request. Here is an updated ISC DHCP server group example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'group {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } elsif substring (option vendor-class-identifier, 0, 10) = "HTTPClient" {\n    # UEFI HTTP Boot\n    option vendor-class-identifier "HTTPClient";\n    filename "http://10.100.0.10/harvester/ipxe.efi";\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"elsif substring")," statement is new, and it offers ",(0,i.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe.efi")," when it sees a UEFI HTTP boot DHCP request. After the client fetches the iPXE program and runs it, the iPXE program will send a DHCP request again and load the iPXE script from URL ",(0,i.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe-create-efi"),"."),(0,i.kt)("h3",{id:"the-ipxe-script-for-uefi-boot"},"The iPXE script for UEFI boot"),(0,i.kt)("p",null,"It's mandatory to specify the initrd image for UEFI boot in the kernel parameters. Here is an updated version of iPXE script for ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!ipxe\nkernel vmlinuz initrd=initrd k3os.mode=install console=ttyS0 console=tty1 harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd initrd\nboot\n")),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"initrd=initrd")," is required for initrd to be chrooted."))}h.isMDXComponent=!0}}]);