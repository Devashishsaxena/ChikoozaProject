export const apiPath = "/";
export const templatePath = "http://chikooza.radixforce.com/";
export const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
};
if(localStorage.getItem('token') != null){
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}
export const contentArea = "bg-white p-2 border buttoncurve";