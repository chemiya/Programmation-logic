function busqueda_binaria(array,valor_buscar){
    min=0
    max=array.length-1
    console.log("aplico busqueda binaria con minimo:"+min+" y maximo:"+max)

    while (min<=max){
        console.log("entro bucle porque:"+min+"<="+max)
        medio=Math.floor((max+min)/2)
        console.log("El valor medio calculado es:"+medio)

        if (array[medio]==valor_buscar){
            console.log("El valor del medio tiene el valor buscado. Posicion:"+array[medio])
            return medio
        }
        if (array[medio]>valor_buscar){
            console.log("El valor del medio es superior al que busco:"+array[medio]+">"+valor_buscar)
            max=medio-1
            console.log("Ahora el max es:"+max)
        }
        else{
            min=medio+1
            console.log("El valor del medio es inferior al que busco:"+array[medio]+"<"+valor_buscar)
            console.log("Ahora el min es:"+min)

        }
    }
    
    return -1


    }


console.log(busqueda_binaria([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],11))
