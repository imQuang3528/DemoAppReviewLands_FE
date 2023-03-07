
class CommonFunction{
    deserialize(value){
        return JSON.parse(value);
    }

    serialize(value){
        return JSON.stringify(value);
    }

    validateImage(name){
        let lstImgValid=["jpg","jpeg","png"];
        for(let item=0;item<lstImgValid.length;item++){
            let element=lstImgValid[item];
            if(name.toLowerCase().endsWith(element)){
                return true;
            }
        }
        return false;
    }
}

export default new CommonFunction();