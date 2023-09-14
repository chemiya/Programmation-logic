function quicksort(array){
    if (array.length<1){
        return []
    }
        

    var izquierda=[]
    var derecha=[]
    var pivot=array[0]

    for (var i=1;i<array.length;i++){
        if (array[i]<pivot){
            izquierda.push(array[i])
        }
        else{
            derecha.push(array[i])
        }
    }


    
    return [].concat(quicksort(izquierda),pivot,quicksort(derecha));

}

console.log(quicksort([3,5,2,7,5]))