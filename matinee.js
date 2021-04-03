'use strict';function m(elem){var e={};if(elem!==undefined){var sel=[];if(typeof elem==='object'){var group=[];for(let i=0;i<elem.length;i+=1){if(elem[i].indexOf('{all}')!==-1){group.push(document.querySelectorAll(elem[i].split(' ')[0]));sel.push(elem[i].split(' ')[0])}else{group.push(document.querySelector(elem[i]));sel.push(elem[i])}}e.elem=sel;e.group=group;e.all=document.querySelectorAll(e.elem);e.node=document.querySelector(e.elem)}else if(typeof elem==='string'){if(elem.indexOf('{all}')!==-1){var sel=elem.split(' ');e.elem=sel[0];e.node=document.querySelector(e.elem);e.all=document.querySelectorAll(e.elem)}else if(elem.indexOf('{all}')===-1){e.elem=elem;e.all=document.querySelectorAll(e.elem);e.node=document.querySelector(e.elem)}}}e.sift=function(stop_at){if(stop_at){var all=document.querySelectorAll(e.elem);for(let i=0;i<all.length;i+=1){if(i===stop_at){e.node=all[i]}}}else if(!stop_at){throw new Error('An int value is required for sift function: sift(int);')}if(typeof e.elem==='object'){throw new Error(typeof e.elem+' can not be sifted, only single string values accepted.')}return e};e.set_attr=function(type,value){if(typeof e.elem==='object'){var selectors=[];for(let i=0;i<elem.length;i+=1){if(elem[i].indexOf('{all}')!==-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelectorAll(e.elem[i]))}else if(elem[i].indexOf('{all}')===-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelector(e.elem[i]))}}var method=[];for(let i=0;i<selectors.length;i+=1){if(selectors[i].length===undefined){method.push(selectors[i].setAttribute(type,value))}else if(selectors[i].length!==undefined){for(let x=0;x<selectors[i].length;x+=1){method.push(selectors[i][x].setAttribute(type,value))}}}}else if(typeof e.elem==='string'){if(elem.indexOf('{all}')===-1&&elem.split(' ')[0]===e.elem){e.node.setAttribute(type,value)}else if(elem.indexOf('{all}')!==-1&&elem.split(' ')[0]===e.elem){for(let i=0;i<document.querySelectorAll(e.elem).length;i+=1){document.querySelectorAll(e.elem)[i].setAttribute(type,value)}}}return e};e.remove_attr=function(attr){if(typeof e.elem==='object'){var selectors=[];for(let i=0;i<elem.length;i+=1){if(elem[i].indexOf('{all}')!==-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelectorAll(e.elem[i]))}else if(elem[i].indexOf('{all}')===-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelector(e.elem[i]))}}var remove=[];for(let i=0;i<selectors.length;i+=1){if(selectors[i].length!==undefined){for(let x=0;x<selectors[i].length;x+=1){remove.push(selectors[i][x].removeAttribute(attr))}}else if(selectors[i].length===undefined){remove.push(selectors[i].removeAttribute(attr))}}}else if(typeof e.elem==='string'){if(elem.indexOf('{all}')!==-1&&elem.split(' ')[0]){var remove=[];for(let i=0;i<e.all.length;i+=1){remove.push(e.all[i].removeAttribute(attr))}}else if(elem.indexOf('{all}')===-1&&elem.split(' ')[0]){e.node.removeAttribute(attr)}}return e};var events_opts={target:'',events:'',func:''};e.events=function(events_opts){const opts=events_opts;if(!opts.target){opts.target=null;if(typeof e.elem==='object'){var selectors=[];for(let i=0;i<elem.length;i+=1){if(elem[i].indexOf('{all}')!==-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelectorAll(e.elem[i]))}else if(elem[i].indexOf('{all}')===-1&&elem[i].split(' ')[0]===e.elem[i]){selectors.push(document.querySelector(e.elem[i]))}}var obj_ev=[];for(let i=0;i<selectors.length;i+=1){for(let x=0;x<opts.events.length;x+=1){if(selectors[i].length===undefined){obj_ev.push(selectors[i].addEventListener(opts.events[x],opts.func))}else if(selectors.length!==undefined){for(let z=0;z<selectors[i].length;z+=1){obj_ev.push(selectors[i][z].addEventListener(opts.events[x],opts.func))}}}}}else if(typeof e.elem==='string'){var str_ev=[];if(elem.indexOf('{all}')===-1){for(let i=0;i<opts.events.length;i+=1){str_ev.push(document.querySelector(e.elem).addEventListener(opts.events,opts.func))}}else if(elem.indexOf('{all}')!==-1){for(let i=0;i<opts.events.length;i+=1){for(let x=0;x<document.querySelectorAll(e.elem).length;x+=1){str_ev.push(document.querySelectorAll(e.elem)[x].addEventListener(opts.events[i],opts.func))}}}}}else if(!elem||!e.elem){for(let i=0;i<opts.events.length;i+=1){opts.target.addEventListener(opts.events[i],opts.func)}}return e};e.innerHTML_to=function(elem){if(e.node.innerHTML){var html_from=e.node.innerHTML;m(elem).node.innerHTML=html_from}return e};e.iframe_content=function(part){if(part==='body'){return e.node.contentDocument.body}else if(part==='head'){return e.node.contentDocument.head}return e};var menu_toggle_opts={puppet:'',puppet_css:{css_open:'',css_close:''},icon_name:'',icon_open:'',icon_close:''};e.menu_toggle=function(toggle_mthd,menu_toggle_opts){var opts=menu_toggle_opts;m().events({target:document,events:toggle_mthd,func:(event)=>{var trigger=document.querySelector(e.elem);var puppet_elem=document.querySelector(opts.puppet);var item=event.target;var menu_puppet=array_contains(array_string(parents(item)),opts.puppet);var toggle_icon=document.querySelector(opts.icon_name);if(item===trigger&&puppet_elem.style.visibility==='hidden'||item===trigger&&!puppet_elem.getAttribute('style')){(opts.puppet_css)?puppet_elem.style.cssText='visibility:visible; opacity:1; '+opts.puppet_css.css_open:puppet_elem.style.cssText='visibility:visible; opacity:1;';if(toggle_icon){toggle_icon.classList.add(opts.icon_open);toggle_icon.classList.remove(opts.icon_close)}}else if(item===trigger||item!==trigger&&!menu_puppet&&puppet_elem.style.visibility==='visible'){+(opts.puppet_css)?puppet_elem.style.cssText='visibility:hidden; opacity:0; '+opts.puppet_css.css_close:puppet_elem.style.cssText='visibility:hidden; opacity:0;';if(toggle_icon){toggle_icon.classList.remove(opts.icon_open);toggle_icon.classList.add(opts.icon_close)}}}});return e};var window_toggle_opts={puppet:'',puppet_css:{css_open:'',css_close:''},prevent_close_on:'',prevent_close_on_css:{css_open:'',css_close:''}};e.window_toggle=function(toggle_mthd,window_toggle_opts){var opts=window_toggle_opts;m().events({target:document,events:toggle_mthd,func:(event)=>{var item=event.target;var trigger=document.querySelector(e.elem);var puppet_elem=document.querySelector(opts.puppet);var prevent_close=array_contains(array_string(parents(item)),opts.prevent_close_on);if(item===trigger&&puppet_elem.style.visibility==='hidden'||item===trigger&&!puppet_elem.getAttribute('style')){(opts.puppet_css)?puppet_elem.style.cssText='opacity:1; visibility:visible; '+opts.puppet_css.css_open:puppet_elem.style.cssText='opacity:1; visibility:visible;';if(opts.prevent_close_on_css){m(opts.prevent_close_on).node.style.cssText=opts.prevent_close_on_css.css_open}}else if(!prevent_close&&puppet_elem.style.visibility==='visible'){(opts.puppet_css)?puppet_elem.style.cssText='opacity:0; visibility:hidden; '+opts.puppet_css.css_close:puppet_elem.style.cssText='opacity:0; visibility:hidden;';if(opts.prevent_close_on_css){m(opts.prevent_close_on).node.style.cssText=opts.prevent_close_on_css.css_close}}}});return e};e.replace_attr_value=function(attr,old_val,new_val){if(elem.indexOf('{all}')===-1){var new_attr_val=e.node.getAttribute(attr).replace(old_val,new_val);e.node.setAttribute(attr,new_attr_val)}else if(elem.indexOf('{all}')!==-1){var new_attr_val=[];for(let i=0;i<e.all.length;i+=1){if(e.all[i].getAttribute(attr)===old_val){new_attr_val.push(e.all[i].setAttribute(attr,new_val))}}}return e};var construct_menu_opts={menu_name:'',drop_menu_name:'',menu_items:'',menu_item_links:''};e.drop_menu=function(construct_menu_opts){var opts=construct_menu_opts;if(e.node.innerHTML.indexOf('[drop-menu]')!==-1){var content=e.node.innerHTML.split(' ');for(let i=0;i<opts.menu_items.length;i+=1){for(let x=0;x<content.length;x+=1){if(content[x]==='[drop-menu]'){content[x]='<a class="_drop-toggle '+opts.menu_name.toLowerCase()+'">'+opts.menu_name+'</a><ul class="'+opts.drop_menu_name+' _drop-backing"></ul>'}}}e.node.innerHTML=content.toString().replace(/,/g,' ')}for(let i=0;i<opts.menu_items.length;i+=1){var new_elems1=document.createElement('li');new_elems1.setAttribute('class',' _d-list');var new_elems2=document.createElement('a');new_elems2.setAttribute('href',opts.menu_item_links[i]);new_elems2.setAttribute('class',opts.menu_items[i].toLowerCase().replace(/[' ']/g,'-'));new_elems2.innerHTML=opts.menu_items[i];new_elems1.appendChild(new_elems2);m('.'+opts.drop_menu_name).node.appendChild(new_elems1)}if(m('._drop-toggle').all.length>1){var ids=[];for(let i=0;i<=m('._drop-toggle').all.length;i+=1){ids.push('_d-toggle-'+i)}for(let i=0;i<m('._drop-toggle').all.length;i+=1){m('._drop-toggle').all[i].classList.add(ids[i])}}return e};var sub_menu_opts={menu_for:'',toggle_name:'',sub_menu_name:'',menu_items:'',menu_item_links:''};e.sub_menu=function(sub_menu_opts){var opts=sub_menu_opts;m('.'+opts.menu_for).node.innerHTML+='<ul class="'+opts.sub_menu_name+' _d-sub"></ul>';for(let i=0;i<opts.menu_items.length;i+=1){var new_elem1=document.createElement('li');new_elem1.setAttribute('class','_d-list');var new_elem2=document.createElement('a');new_elem2.setAttribute('href',opts.menu_item_links[i]);new_elem2.setAttribute('class',opts.menu_items[i].replace(' ','-'));new_elem2.innerHTML=opts.menu_items[i];new_elem1.appendChild(new_elem2);m('.'+opts.sub_menu_name).node.appendChild(new_elem1)}m('.'+opts.menu_for).node.classList.add(opts.toggle_name);return e};e.parents=function(){if(typeof e.elem==='object'){throw new Error("Can not get parents of "+typeof e.elem+', only single arguments accepted.')}else if(typeof e.elem==='string'){var el=e.node;var parents=[];parents.unshift('[{parents}]');while(el){el=el.parentElement;parents.push(el)}if(parents.indexOf(null)!==-1){parents[parents.indexOf(null)]='';e.elem=parents.filter(Boolean)}else if(parents.indexOf(null)===-1){e.elem=parents}}return e};e.get_array=function(){if(typeof e.elem==='object'){for(let i=0;i<e.elem.length;i+=1){if(e.elem[i]==='parents'){var arr_clean=e.elem[i]=''}}if(e.elem&&!arr_clean){return e.elem}else if(arr_clean){return arr_clean.filter(Boolean)}}else if(typeof e.elem==='string'){e.elem=e.all;return e.elem}};e.array_string=function(){var arr_str=[];if(typeof e.elem==='object'&&e.elem.indexOf('[{parents}]')!==-1&&elem.indexOf('{all}')===-1){for(let i=0;i<e.elem.length;i+=1){if(e.elem[i].localName&&e.elem[i].className){arr_str.push(e.elem[i].localName+' .'+e.elem[i].className)}else if(e.elem[i].localName&&e.elem[i].id){arr_str.push(e.elem[i].localName+' #'+e.elem[i].id)}else if(e.elem[i]==='[{parents}]'){e.elem[i]=''}else{arr_str.push(e.elem[i].localName)}}}else if(typeof e.elem==='string'&&e.elem.indexOf('[{parents}]')===-1&&elem.indexOf('{all}')!==-1||elem.indexOf('{all}')===-1){for(let i=0;i<e.all.length;i+=1){if(e.all[i].localName&&e.all[i].className){arr_str.push(e.all[i].localName+' .'+e.all[i].className)}else if(e.all[i].localName&&e.all[i].id){arr_str.push(e.all[i].localName+' #'+e.all[i].id)}else{arr_str.push(e.all[i].localName)}}}return arr_str.filter(Boolean).toString()};return e}function parents(elem){var node=elem;var arr=[];while(node){arr.push(node);node=node.parentElement}return arr}function array_string(array){var arr_str=[];for(let i=0;i<array.length;i+=1){if(array[i].localName&&array[i].className){arr_str.push(array[i].localName+" ."+array[i].className)}else if(array[i].localName&&array[i].id){arr_str.push(array[i].localName+" #"+array[i].id)}else{arr_str.push(array[i].localName)}}return arr_str.toString()}function string_to_array(str,split){var arr=str.split(split);return arr}function array_contains(array,identifier){if(array.indexOf(identifier)!==-1){return true}else if(array.indexOf(identifier)===-1){return false}}
