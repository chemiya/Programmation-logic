
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




/*
lista_palabras=entrada_teclado()
palabra_buscar=entrada_teclado()
longitud_palabra=palabra_buscar.length
posiciones_encontradas=[]

for i=0;i<lista_palabras.length;i++:
    palabra_recorrer=lista_palabras[i]
    for k=0;k<palabra_recorrer.length;k++:
        if palabra_recorrer[k]==palabra_buscar[0]:  //si encuentro el primer caracter
            encontrada=comprobar_encontrada_horizontal_hacia_derecha(i,k,palabra_recorrer)
            if encontrada!=-1:
                posiciones_encontradas.añadir(encontrada)
            encontrada=comprobar_encontrada_horizontal_hacia_izquierda(i,k,palabra_recorrer)
            if encontrada!=-1:
                posiciones_encontradas.añadir(encontrada)
            encontrada=comprobar_encontrada_vertical_hacia_abajo(i,k)
            if encontrada!=-1:
                posiciones_encontradas.añadir(encontrada)
            encontrada=comprobar_encontrada_vertical_hacia_arriba(i,k)
            if encontrada!=-1:
                posiciones_encontradas.añadir(encontrada)
            

comprobar_encontrada_horizontal_hacia_derecha(fila,col,palabra_recorrer)
    
    contador_recorrer_palabra=1
    for i=col+1;i<palabra_recorrer.length;i++:
        if palabra_recorrer[i]!=palabra_buscar[contador_recorrer_palabra]:
            return -1
        contador_recorrer_palabra++
    
    array_posiciones=[fila,col],[fila,col+palabra.length-2]
    return arrray_posiciones

comprobar_encontrada_horizontal_hacia_izquierda(fila,col,palabra_recorrer)
    igual=1
    contador_recorrer_palabra=1
    for i=col-1;i>=0;i--:
        if palabra_recorrer[i]!=palabra_buscar[contador_recorrer_palabra]:
            return -1
        contador_recorrer_palabra++
    
    array_posiciones=[fila,col],[fila,col-palabra.length+2]
    return arrray_posiciones

comprobar_encontrada_vertical_hacia_abajo(fila,col)
    igual=1
    contador_recorrer_palabra=1
    for i=fila+1;i<lista_palabras.length;i++:
        palabra_revisar=lista_palabras[i]
        if palabra_revisar[col]!=palabra_buscar[contador_recorrer_palabra]:
             return -1
        contador_recorrer_palabra++       
 
    
    array_posiciones=[fila,col],[fila+palabra.length-2,col]
    return arrray_posiciones

comprobar_encontrada_vertical_hacia_arriba(fila,col)
    igual=1
    contador_recorrer_palabra=1
    for i=fila-1;i>=0;i--:
        palabra_revisar=lista_palabras[i]
        if palabra_revisar[col]!=palabra_buscar[contador_recorrer_palabra]:
             return -1
        contador_recorrer_palabra++       
 
    
    array_posiciones=[fila,col],[fila,col-palabra.length+2]
    return arrray_posiciones

*/