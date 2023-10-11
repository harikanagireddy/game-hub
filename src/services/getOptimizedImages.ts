const getOptimizedImages =(url:string)=> {
    const target = 'media/'
    const index= url.indexOf(target) + target.length;
    console.log("index: ", index,
     "url.slice(0,index) :", url.slice(0,index),
     "url.slice(index): ", url.slice(index));
    return url.slice(0,index)+ 'crop/600/400/' + url.slice(index)

}

export default getOptimizedImages;