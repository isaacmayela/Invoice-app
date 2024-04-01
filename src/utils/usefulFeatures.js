import GetPostLocalStorageDatas from "../localStorage/localStorage"

class UsefulFeatures{

    static duplicateItem () {
        const scrollState = {"isDisplay": false}
        GetPostLocalStorageDatas.postData(scrollState)
    }

    static changeScrollBarState () {
        
    }
}

export default UsefulFeatures