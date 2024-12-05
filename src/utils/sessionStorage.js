
export const sessStr = {
    set(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(sessionStorage.getItem(key));
    },
    remove(key){
        sessionStorage.removeItem(key);
    }
}

if (!sessStr.get('user')) {
    sessStr.set('user',{});
}