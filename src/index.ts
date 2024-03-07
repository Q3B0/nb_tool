function clone<T, U>(obj: T) : U{
    var str = JSON.stringify(obj);
    if(str){
        return JSON.parse(str);
    }
    throw new Error("Type convert error");
}

export default clone;