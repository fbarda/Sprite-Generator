import {default as FOPConstructor} from "./../../forkedOutPromise/module.mjs";

/**
 * @returns {Promise<string>}
 * @param {File}file 
 */
async function fileToDataURL(file) {
    if (!(file instanceof File)) {
        throw "Not a file.";
    }
    const fileReader = new FileReader();
    const forkedPromise = new FOPConstructor();
    fileReader.onload = () => forkedPromise.resolve(fileReader.result);
    fileReader.readAsDataURL(file);
    return forkedPromise.promise;
}
/**
 * @returns {Promise<{width:number,height:number}>}
 * @param {string} dataURL
 */
async function getImageSizes(dataURL) {

    return new Promise(
        resolve => {
            const img = new Image();
            const remover = () => img.remove();
            const exporter = async sizeObj => {
                remover();
                return sizeObj;
            };
            img.onload = () => {
                resolve(
                    exporter({
                        height: Number(img.naturalHeight),
                        width: Number(img.naturalWidth)
                    }));
            };
            img.src = dataURL;
        }
    );
}
/**
 * 
 * @param {string|File} file 
 */

export async function getImageSize(file){
    if(file instanceof File){
        file =await fileToDataURL(file);
    }
    if(typeof file !=="string"){
        throw "Invalid File.";
    }
    return getImageSizes(file);
}