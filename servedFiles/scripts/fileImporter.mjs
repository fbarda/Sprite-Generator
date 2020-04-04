//jshint browser:true
import { default as forkedPromiseConstructor } from "./forkedOutPromise/module.mjs";
import {every} from "./asyncArrayUtils/module.mjs";
async function fileToDataURL(file) {
    if (!(file instanceof File)) {
        throw "Not a file.";
    }
    const fileReader = new FileReader();
    const forkedPromise = new forkedPromiseConstructor();
    fileReader.onload = () => forkedPromise.resolve(fileReader.result);
    fileReader.readAsDataURL(file);
    return forkedPromise.promise;
}
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
async function validateFileList(fileList){
    if(fileList instanceof FileList){
        return;
    }
    if(fileList instanceof Array && await every(fileList,item=>item instanceof File)){
        return;
    }
    throw "Provide a valid FileList.";
}
export async function importFiles(fileList) {
    
        //Phase 1:Test until next commit.
        const length = fileList.length;
    for (let i = 0; i < length; i++) {
        const currentFile = fileList[i];
    
        await fileToDataURL(currentFile) //TEST SUCCESS
            .then(getImageSizes); //TEST SUCCESS
           
    }
    return;
}
