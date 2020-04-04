/**
 * @module BulkCanvas:StorageHandler
 */

 /**
  * 
  * @param {string} key 
  */
 export async function get(key){
    return Promise.resolve().then(()=>localStorage.getItem(key));
 }
 /**
  * 
  * @param {string} key 
  * @param {*} data 
  */
 export async function set(key,data){
    return Promise.resolve().then(()=>localStorage.setItem(key,data));
 }