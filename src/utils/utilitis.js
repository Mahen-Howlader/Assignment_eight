

export function getLocalStoresGetData(name){
    const get = localStorage.getItem(name)
    if(get){
        return JSON.parse(get)
    }
    return [];
}



export function getLocalStoresSetData(data,name,successAlert,errorAlert){
    const get = getLocalStoresGetData(name);
    console.log(get)
    const finData = get.find(val => val.bookId === data.bookId)

    if(!finData){
        get.push(data)
        localStorage.setItem(name, JSON.stringify(get))
        successAlert()
    }else{
        errorAlert()
    }
}


export function getLocalStoresSetDataWishlist(data,name,wishList,successAlert,errorAlert){
    const get = getLocalStoresGetData(name);
    const wishListGetData = getLocalStoresGetData(wishList);
    const finData = get.find(val => val.bookId === data.bookId)
    const wishFin = wishListGetData.find(val => val.bookId === data.bookId)


    if(!wishFin && !finData){
        wishListGetData.push(data)
        localStorage.setItem(wishList, JSON.stringify(wishListGetData))
        successAlert()
    }else{
        errorAlert()
    }
}