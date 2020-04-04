/**
 * @module BulkCanvas:exporter
 */
/**
 * @returns {Promise<string>}
 * @param {string} dataURL
 */
export async function getDataFromDataURL(dataURL){
    const startPoint = dataURL.indexOf(",");
    return dataURL.slice(startPoint);
}

export async function addFilesToJSZIPZip(zip,files){}