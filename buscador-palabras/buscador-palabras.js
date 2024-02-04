
lista_palabras=[
    "drow",
    "r...",
    "o...",
    "s..."
]
palabra_buscar="word";

longitud_palabra_buscar=palabra_buscar.length





for (fila=0;fila<lista_palabras.length;fila++){
    palabra_recorrer=lista_palabras[fila]
    longitud_palabra_recorrer=palabra_recorrer.length
    for (col=0;col<palabra_recorrer.length;col++){
        if(palabra_recorrer[col]==palabra_buscar[0]){
            



            if(col+longitud_palabra_buscar>longitud_palabra_recorrer){
                
            }else{
                contador_recorrer_palabra=1
                encontrada=1
                contador_correctas=1
                for (i=col+1;i<palabra_recorrer.length;i++){
                    if(palabra_recorrer[i]==palabra_buscar[contador_recorrer_palabra]){
                        contador_correctas+=1
                    }
                    contador_recorrer_palabra+=1
                }
                
                if(contador_correctas==longitud_palabra_buscar){
                    posiciones=[[fila,col],[fila,col+longitud_palabra_buscar-1]]
                    console.log("encontrada linea hacia izquierda:",posiciones)
                }  
            }

            
            if(col+1-longitud_palabra_buscar<0){
                
            }else{
                contador_recorrer_palabra=1
                encontrada=1
                contador_correctas=1
                for (i=col-1;i>=0;i--){
                    if(palabra_recorrer[i]==palabra_buscar[contador_recorrer_palabra]){
                        contador_correctas+=1
                    }
                    contador_recorrer_palabra+=1
                }
                
                if(contador_correctas==longitud_palabra_buscar){
                    posiciones=[[fila,col-longitud_palabra_buscar+1],[fila,col]]
                    console.log("encontrada linea hacia izquierda:",posiciones)
                }   
            }


            if(fila+longitud_palabra_buscar>lista_palabras.length){
                
            }else{
                contador_recorrer_palabra=1
                encontrada=1
                contador_correctas=1
                for (i=fila+1;i<lista_palabras.length;i++){
                    palabra_recorrer=lista_palabras[i]
                    if(palabra_recorrer[col]==palabra_buscar[contador_recorrer_palabra]){
                        contador_correctas+=1
                    }
                    contador_recorrer_palabra+=1
                }
                
                if(contador_correctas==longitud_palabra_buscar){
                    posiciones=[[fila,col],[fila,col+longitud_palabra_buscar-1]]
                    console.log("encontrada columna hacia abajo:",posiciones)
                }  
            }


            if(fila-longitud_palabra_buscar+1<0){
                
            }else{
                contador_recorrer_palabra=1
                encontrada=1
                contador_correctas=1
                for (i=fila-1;i>=0;i--){
                    palabra_recorrer=lista_palabras[i]
                    
                    if(palabra_recorrer[col]==palabra_buscar[contador_recorrer_palabra]){
                        contador_correctas+=1
                    }
                    contador_recorrer_palabra+=1
                }
                
                if(contador_correctas==longitud_palabra_buscar){
                    posiciones=[[fila-longitud_palabra_buscar+1,col],[fila,col]]
                    console.log("encontrada columna hacia arriba:",posiciones)
                }   
            }
               
            
            
            
        }
    }
}


