<h1>Documento resumen del proyecto para mejorar la lógica de programación</h1>

<ol>
<h2><li>Resumen del proyecto</li></h2>
<p>Este proyecto consiste en diferentes ejercicios en diferentes lenguajes para mejorar la lógica de programación. Para ello, se proponen diferentes problemas y en primer lugar se planteará un algoritmo en pseudocódigo que lo resuelva. A continuación se implementa el algoritmo propuesto en código. Entre los ejercicios planteados se pueden encontrar juegos como el cuatro en línea y algoitmos de búsqueda como quicksort.</p>




<h2><li>Tecnologías utilizadas</li></h2>
<p>Para la resolución de los diferentes ejercicios se utilizarán las siguientes tecnologías:</p>
<ul>
<li>Java</li>
<li>Python</li>
<li>C</li>
<li>Javascript</li>
<li>C++</li>
<li>PHP</li>
<li>C#</li>
</ul>




<h2><li>Ejercicios</li></h2>
<ol>
<h3><li>Abaco</li></h3>
<h4>Descripción del algoritmo</h4>
El abaco contiene 10 líneas. La primera de arriba son las unidades y la última millares de millón. Cada línea tiene 10 bolas. Las bolas que se situen a la derecha representan el numero de unidades deseadas en la medida correspondiente a la línea. 

<h4>Algoritmo</h4>

```
numero_abaco=entrada_teclado()
numero_abaco_string=str(numero_abaco)

for i=numero_abaco.length-1;i>=0;i--:
    numero_linea=int(numero_abaco[i]
    numero_bolas_izquierda=10-numero_linea
    numero_rayas=5
    linea_imprimir=""
    for k=0;k<numero_bolas_izquierda;k++:
        linea_imprimir=linea_imprimir+"O"

    for k=0;k<numero_rayas;k++:
        linea_imprimir=linea_imprimir+"-"

    for k=0;k<numero_linea;k++:
        linea_imprimir=linea_imprimir+"O"

    print(numero_linea)


```











<h3><li>Teclado T9</li></h3>
<h4>Descripción del algoritmo</h4>
El usuario introduce los números que pulsa. Esas pulsaciones se deben traducir a texto segun la correspondencia entre los números y las letras de un teclado T9. Por ejemplo, la entrada de "222-44-33-6-2" se traduce a chema.


<h4>Algoritmo</h4>


```
entrada=entrada_teclado()
texto=[]

while i<entrada.length:
    contador_repetidos=0
    if entrada[i]==entrada[i+1] and i+1<entrada.length:
        contador_repetidos++
        if entrada[i]==entrada[i+2] and i+2<entrada.length:
            contador_repetidos++
            if entrada[i]==entrada[i+3] and i+3<entrada.length:
                contador_repetidos++
    
    letra=buscar_letra(entrada[i],contador_repetidos)
    i=i+contador_repetidos+1
    texto.anadir_letra(letra)


buscar_letra(numero, repeticiones):
    if numero==2:
        if repeticiones==0
            return "a"
        elif repeticiones==1
            return "b"
        else
            return "c"
    elif numero==3:
        if repeticiones==0
            return "d"
        elif repeticiones==1
            return "e"
        else
            return "f"
    elif numero==4:
        if repeticiones==0
            return "g"
        elif repeticiones==1
            return "h"
        else
            return "i"
    elif numero==5:
        if repeticiones==0
            return "j"
        elif repeticiones==1
            return "k"
        else
            return "l"
    elif numero==6:
        if repeticiones==0
            return "m"
        elif repeticiones==1
            return "n"
        else
            return "o"
    elif numero==7:
        if repeticiones==0
            return "p"
        elif repeticiones==1
            return "q"
        else
            return "r"
    elif numero==8:
        if repeticiones==0
            return "s"
        elif repeticiones==1
            return "t"
        else
            return "u"
    else:
        if repeticiones==0
            return "w"
        elif repeticiones==1
            return "x"
        elif repeticiones==2
            return "y"
        else:
            return "z"
        


```





<h3><li>Lanzar moneda trucada</li></h3>
<h4>Descripción del algoritmo</h4>
Se tiene una moneda en la que la probabilidad de que salga cara se puede modificar. El usuario introduce el numero de experimentos que quiere realizar y las probabilidades de que salga cara y cruz. En cada experimento se lanza la moneda hasta que salga cara. En ese momento se pasa al siguiente experimento. Al final se muestra el numero máximo de lanzamientos entre todos los experimentos, es decir el numero máximo de cruces que han salido. Por ejemplo, el numero máximo de cruces en un experimento han sido de 7 cruces. Tambien se debe mostrar cuantos experimentos hay con un numero determinado de cruces antes de la cara. Por ejemplo, se han encontrado 14 experimentos con 3 cruces, 21 experimentos con 4 cruces.


<h4>Algoritmo</h4>

```
probabilidad_cara=entrada_teclado()
numero_experimentos=entrada_teclado()
resultados_experimentos=[]
//por ejemplo: 3,4,5,6,2  : 3 lanzamientos hasta cara en el experimento 0
numero_experimentos_con_cruces=[20 ceros]
//por ejemplo: 20,13,9,3    : 20 experimentos con 0 cruces antes de la cara

for i=0;i<numero_experimentos;i++:
    numero_lanzamientos=0
    sin_cara=true
    while(numero_lanzamientos<=30 && sin_cara==true):
        resultado=lanzar_moneda(probabilidad_cara)
        if(resultado=="cara"):
            sin_cara=false
            resultados_experimentos.añadir_resultado(numero_lanzamientos)
        else:
            numero_lanzamientos++

for k=0;k<resultados_experimentos.length;k++:
    numero_experimentos_con_cruces[resultados_experimentos[k]]++



lanzar_moneda(probabilidad_cara):
    numero_aleatorio=generar_aleatorio()
    if(numero_aleatorio<probabilidad_cara):
        return "cara"
    else:
        return "cruz"


```




<h3><li>Primos gemelos</li></h3>
<h4>Descripción del algoritmo</h4>
Los primos gemelos son numeros primos que difieren en 2 unidades. Por lo tanto, se recorren los numeros menores que el limite introducido comprobando por cada número si es primo y a la vez comprobando si el número 2 unidades mayor en primo. El 1 no se considera primo, el 2 y el 3 si son primos. Los múltiplos de 2 y 3 no son primos. Un número es primo si solo se puede dividir entre 1 o si mismo. Comenzando un bucle en 5, se verifica si el número es divisible entre algún número entre 5 y la raiz cuadrada del número.

<h4>Algoritmo</h4>

```
lista_primos_gemelos=[]
limite_superior=entrada_teclado()

for i=2;i<limite_superior;i++:
    if es_primo(i) and es_primo(i+2):
        lista_primos_gemelos.añadir_elemento([i,i+2])



es_primo(numero):
    if numero==1:
        return false
    if numero==2 or numero==3:
        return true
    if numero%2==0 or numero%3==0:
        return false

    i=5
    while i*i<=numero
        if numero%i==0 or numero%(i+2)==0:
            return false
        i+=6
    return true
    


```




<h3><li>Análisis de texto</li></h3>
<h4>Descripción del algoritmo</h4>
Analizar un texto obteniendo el número total de palabras, la longitud media de las palabras, el número de oraciones y el tamaño de la palabra más larga. Para ello, utilizar un unico bucle.

<h4>Algoritmo</h4>


```
contador_espacios=0
contador_puntos=0
media_tamano_palabras=0
tamano_palabra_mas_larga=0

nombre_fichero=entrada_teclado()
fichero=abrir_fichero(nombre_fichero)

for i=0;i<fichero.length;i++:
    linea=fichero[i]
    tamano_palabra=0
    for k=0;k<linea.length;k++:
        if linea[k]==" " or linea[k]=="\n":
            contador_espacios++
            media_tamano_palabras=media_tamano_palabras+tamano_palabra+1
            if(tamano_palabra+1>tamano_palabra_mas_larga):
                tamano_palabra_mas_larga=tamano_palabra+1
            tamano_palabra=0
        elif linea[k]==".":
            contador_puntos++
            media_tamano_palabras=media_tamano_palabras+tamano_palabra+1
            if(tamano_palabra+1>tamano_palabra_mas_larga):
                tamano_palabra_mas_larga=tamano_palabra+1
            tamano_palabra=0
        else:
            tamano_palabra++


media_tamano_palabras=media_tamano_palabras/(contador_espacios+contador_puntos)


```




<h3><li>Convertir número en decimal a binario</li></h3>
<h4>Descripción del algoritmo</h4>
Se divide el número decimal entre 2 y el valor del resto se va almacenando en una lista. Si el cociente obtenido es mayor que 0, repite el proceso diviendo entre 2 y almacenando el resto. Con el nuevo cociente se repite el proceso. Finalmente se invierte la lista.



<h4>Algoritmo</h4>

```
lista_bits=[]
numero_decimal=entrada_teclado()


while numero_decimal>0:
    residuo=numero_decimal%2
    lista_bits.añadir_residuo(residuo)
    numero_decimal=int(numero_decimal/2)

lista_bits=invertir_lista(lista_bits)
lista_bits_texto=convertir_lista(lista_bits)



invertir_lista(lista):
    indice_inicio=0
    indice_fin=len(lista)-1

    while indice_inicio<indice_fin:
        auxiliar=lista[indice_fin]
        lista[indice_fin]=lista[indice_inicio]
        lista[indice_inicio]=auxiliar
        indice_inicio=indice_inicio+1
        indice_fin=indice_fin-1
    

convertir_lista(lista):
    cadena_lista_devolver=""
    for i=0;i<len(lista);i++:
        cadena_lista=cadena_lista+lista[i]

    return cadena_lista
```







<h3><li>Ahorcado</li></h3>
<h4>Descripción del algoritmo</h4>
En este juego, se selecciona una palabra aleatoria. El usuario introduce una letra, si está en la palabra se muestra la palabra con la letra marcada, si no está, se resta un intento. Tiene 6 intentos.


<h4>Algortimo</h4>

```
palabra=obtener_palabra_aleatoria()
continuar=true
intentos=6
letras_usuario=[]

while continuar==true:
    cadena_mostrar=""
    letra=entrada_teclado()
    letras_usuario.anadir_letra(letra)

    if letra in palabra:
        print("has acertado la letra")
        
    else:
        intentos--
        print("la letra no esta. Te quedan:"+intentos+" intentos")
    
    print("letras introducidas:"+letras_usuario)

    for i=0;i<palabra.length;i++:
        letra_palabra=palabra[i]
        if letra_palabra in letras_usuario:
            cadena_mostrar=cadena_mostrar+letra_palabra
        else:
            cadena_mostrar=cadena_mostrar+"_"

    print("palabra:"+cadena_mostrar)

    if intentos==0:
        continuar=false
        print("se te acabaron los intentos. La palabra era "+palabra)
    if cadena_mostrar==palabra:
        continuar=false
        print("adivinaste la palabra")

obtener_palabra_aleatoria():
    palabras=["una","dos","tres","cuatro"]
    return seleccionar_aleatoria(palabras)


```



<h3><li>Cuatro en línea</li></h3>
<h4>Descripción del algoritmo</h4>
En este juego dos jugadores van introduciendo fichas por la parte de arriba del tablero. Gana el que conecte 4 en fila, columna o diagonal.
<h4>Algortimo</h4>

```
tablero=[["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""]
]

finalizado=false
jugador_actual="X"

while finalizado==false
    print("turno para:"+jugador_actual+". Selecciona columna")
    columna=entrada_teclado()
    fila_libre=buscar_libre_columna(columna)
    tablero[fila_libre,columna]=jugador_actual

    finalizado=comprobar_ganador(tablero, jugador_actual)


    if jugador_actual=="X":
        jugador_actual="O"
    else:
        jugador_actual="X"

buscar_libre_columna(columna):
    for i=0;i<tablero.length;i++:
        if tablero[i,columna]=="":
            return i


comrpobar_ganador(tablero,jugador_actual):
    //comprobar en las filas
    contador_seguidos=0
    
    for i=0;i<6;i++:
        for k=0;k<6;k++:
            if tablero[i,k]==jugador_actual:
                contador_seguidos++
                if contador_seguidos==4:
                    ganador=true
            else:
                contador_seguidos=0
    
    contador_seguidos=0
    for t=0;t<6;t++:
        for s=0;s<6;s++:
            if tablero[s,t]==jugador_actual:
                contador_seguidos++
                if contador_seguidos==4:
                    ganador=true
            else:
                contador_seguidos=0

    contador_seguidos=0
    for u=0;u<3;u++:
        for w=0;w<3;w++:
            if tablero[u,w]==jugador_actual:
                contador_seguidos++
                if u+3<6 and w+3<6:
                    if tablero[u+1,w+1]==jugador_actual and tablero[u+2,w+2]==jugador_actual and tablero[u+3,w+3]==jugador_actual:
                        ganador=true
                    
                if u-3>-1 and w-3>-1:
                    if tablero[u-1,w-1]==jugador_actual and tablero[u-2,w-2]==jugador_actual and tablero[u-3,w-3]==jugador_actual:
                        ganador=true

    return ganador


```



<h3><li>Batalla naval</li></h3>
<h4>Descripción del algoritmo</h4>
Los usuarios tienen dos barcos cada uno. Deben definir las coordenadas donde están la punta de cada barco y el final de cada barco. Los usuarios van diciendo coordenadas y se va comprobando si tocan barco o caen en agua. Un barco se hunde, si el usuario dice todas las coordenadas del barco. Gana el jugador que hunda los dos barcos del oponente. Los barcos tienen una longitud de 3 casillas.

<h4>Algoritmo</h4>

```
//las coordenadas de los barcos van en formato:
//   2/3,5/3 o 2/3,2/6
//fil 2 col 3 inicio y fil 5 col 3 final
// tablero de 8x8
barco1_jugador1_coordenadas=entrada_teclado()
barco2_jugador1_coordenadas=entrada_teclado()
barco1_jugador2_coordenadas=entrada_teclado()
barco2_jugador2_coordenadas=entrada_teclado()

Barco b1j1=Barco(barco1_jugador1_coordenadas)
Barco b2j1=Barco(barco2_jugador1_coordenadas)
Barco b1j2=Barco(barco1_jugador2_coordenadas)
Barco b2j2=Barco(barco2_jugador2_coordenadas)



coordenadas_introducidas_jugador1=[]
coordenadas_introducidas_jugador2=[]


sin_ganador=true
turno="jugador 1"

while sin_ganador==true:
    print("jugador 1 introduce coordenada")
    coordenada_introducida=entrada_teclado()


    if turno=="jugador 1":
        comprobacion_repetida=comprobar_coordenada_repetida(coordenada_introducida,coordenadas_introducidas_jugador1)
        if comprobacion_repetida==1:
            print("esta coordenada ya la has introducido")
        else:
            coordenadas_introducidas_jugador1.anadir_coordenada(coordenada_introducida)
            comprobacion_eliminacion=comprobacion_coordenada_barco(coordenada_introducida,b1j2)
            if comprobacion_eliminacion:
                b1j2.posiciones_eliminadas=b1j2.posiciones_eliminadas+1
            comprobacion_eliminacion=comprobacion_coordenada_barco(coordenada_introducida,b2j2)
            if comprobacion_eliminacion:
                b2j2.posiciones_eliminadas=b2j2.posiciones_eliminadas+1

            if b1j2.posiciones_eliminadas==3:
                print("barco 1 del jugador 2 eliminado")
            if b2j2.posiciones_eliminadas==3:
                print("barco 2 del jugador 2 eliminado")
            if b1j2.posiciones_eliminadas==3 and b2j2.posiciones_eliminadas==3:
                print("ambos barcos del jugador 2 eliminados")
                sin_ganador=false
            turno="jugador 2"
    else:
        comprobacion_repetida=comprobar_coordenada_repetida(coordenada_introducida,coordenadas_introducidas_jugador2)
        if comprobacion_repetida==1:
            print("esta coordenada ya la has introducido")
        else:
            coordenadas_introducidas_jugador2.anadir_coordenada(coordenada_introducida)
            comprobacion_eliminacion=comprobacion_coordenada_barco(coordenada_introducida,b1j1)
            if comprobacion_eliminacion:
                b1j1.posiciones_eliminadas=b1j1.posiciones_eliminadas+1
            comprobacion_eliminacion=comprobacion_coordenada_barco(coordenada_introducida,b2j1)
            if comprobacion_eliminacion:
                b2j1.posiciones_eliminadas=b2j1.posiciones_eliminadas+1

            if b1j1.posiciones_eliminadas==3:
                print("barco 1 del jugador 1 eliminado")
            if b2j1.posiciones_eliminadas==3:
                print("barco 2 del jugador 1 eliminado")
            if b1j1.posiciones_eliminadas==3 and b2j1.posiciones_eliminadas==3:
                print("ambos barcos del jugador 1 eliminados")
                sin_ganador=false
            turno="jugador 1"

comprobar_coordenada_repetida(coordenada_introducida, coordenadas_introducidas):
    for i=0;i<coordenadas_introducidas.length;i++:
        if coordenada_introducida.coordenadaX==coordenadas_introducidas[i].coordenadaX and coordenada_introducida.coordenadaY==coordenadas_introducidas[i].coordenadaY
            return 1 


comprobacion_eliminacion(coordenada_introducida,barco):
    if coordenada_introducida.coordenadaX==barco.inicio.coordenadaX and coordenada_introducida.coordenadaY==barco.inicio.coordenadaY
        return 1
    if coordenada_introducida.coordenadaX==barco.fin.coordenadaX and coordenada_introducida.coordenadaY==barco.fin.coordenadaY
        return 1
    
    if coordenada_introducida.coordenadaX==barco.inicio.coordenadaX and coordenada_introducida.coordenadaY>=barco.inicio.coordenadaY and coordenada_introducida.coordenadaY<=barco.fin.coordenadaY
        return 1

    if coordenada_introducida.coordenadaY==barco.inicio.coordenadaY and coordenada_introducida.coordenadaX>=barco.inicio.coordenadaX and coordenada_introducida.coordenadaX<=barco.fin.coordenadaX
        return 1


class Coordenada:
    int coordenadaX
    int coordenadaY
class Barco:
    Coordenada inicio
    Coordenada fin
    int posiciones_eliminadas
    string jugador

```





<h3><li>Buscador de palabras en todos los sentidos</li></h3>
<h4>Descripción del algoritmo</h4>
Se desea implementar un buscador de una palabra en un texto. Se recibe una lista con palabras y la palabra a buscar. Se debe decir la posicion de inicio y final donde se encuentre la palabra en esa lista. La palabra se buscará horizontalmente de izquierda a derecha, horizontalmente de derecha a izquierda, verticalmente de arriba a abajo y verticalmente de abajo a arriba.

<h4>Algortimo</h4>

```
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


```





<h3><li>Quicksort</li></h3>
<h4>Descripción del algoritmo</h4>
Este algoritmo de ordenacion utiliza un pivote. Se comparan el resto de elementos con el pivote. Si son menores, se van a un array a la izquierda, si son mayores se van a un array a la derecha. Se aplica el mismo procedimiento sobre el array de la izquierda y el de la derecha y se juntan el array de la izquierda con el pivote con el array de la derecha. Se finaliza cuando el array sea de un solo elemento.

<h4>Algortimo</h4>




```
array_entrada=entrada_teclado()


quicksort(array):
    if array.length==0
        return []

    izquierda=[]
    derecha=[]
    pivote=array[0]

    for i=1;i<array.length;i++:
        if array[i]<pivot:
            izquierda.anadir_elemento(array[i])
        else:
            derecha.anadir_elemento(array[i])

    
    return quicksort(izquierda)+pivote+quicksort(derecha)


```




<h3><li>Búsqueda binaria</li></h3>
<h4>Descripción del algoritmo</h4>
Este algoritmo busca un número dentro de array ordenado. Busca la posición del medio del array. Si el valor a buscar es menor que el valor del medio, se coge el punto medio del array de la izquierda y se aplica el mismo procedimiento. Si el valor a buscar es mayor que el valor del medio, se coge el punto medio del array de la derecha. Se aplica lo mismo con el nuevo array. Se termina si se encuentra el número en uno de los elementos del medio o si la variable que almacena el elemento de la izquierda del array que se comprueba es mayor que el elemento de la derecha del array que se comprueba.

<h4>Algoritmo</h4>

```
busqueda_binaria(array,valor_buscar):
    min=0
    max=array.length-1

    while min<=max:
        medio=int((max+min)/2)

        if array[medio]==valor_buscar:
            return medio

        if array[medio]>valor_buscar:
            max=medio-1
        else:
            min=medio+1

    
    return -1




```



<h3><li>Eliminar caracteres</li></h3>
<h4>Descripción del algoritmo</h4>
Se reciben dos cadenas como entrada. De salida se devolverán dos cadenas, en la primera se incluyen los caracteres que están en la primera pero no en la segunda. En la segunda se incluyen los caracteres que están en la segunda y no en la primera.

<h4>Algortimo</h4>

```
cadena1=entrada_teclado()
cadena2=entrada_teclado()

diferencia_primera=[]
diferencia_segunda=[]


for i=0;i<cadena1.length;i++:
    caracter_comprobar=cadena1[i]
    comprobacion=comprobar_en_cadena(caracter,cadena2)
    if(!comprobacion):
        diferencia_primera.añadir_elemento(caracter)


for i=0;i<cadena2.length;i++:
    caracter_comprobar=cadena2[i]
    comprobacion=comprobar_en_cadena(caracter,cadena1)
    if(!comprobacion):
        diferencia_segunda.añadir_elemento(caracter)


```



<h3><li>Expresiones equilibradas</li></h3>
<h4>Descripción del algoritmo</h4>
Comprobar que en una expresión los corchetes, llaves y paréntesis se abren y cierran en forma correcta.
<h4>Algortimo</h4>

```
pila=[]
diccionario = {')': '(', '}': '{', ']': '['}
expresion=entrada_teclado()

for i=0;i<expresion.length;i++:
    caracter=expresion[i]
    if caracter in "([{":
        pila.añadir_inicio_expresion(caracter)
    elif caracter in ")]}":
        if pila.length==0 or pila.pop()!=diccionario[caracter]://pop saca el ultimo 
            return false

if pila.length==0:
    return true
else:
    return false



```


<h3><li>Torres de hanoi</li></h3>
<h4>Descripcion del algoritmo</h4>
Solo se puede mover un disco a la vez. No se puede colocar un disco mayor sobre un disco mas pequeño. El objetivo es mover todos los discos de la izquierda a la derecha mantiendo el orden. Si queda un disco, se mueve el disco de la torre origen a la de destino. Si no, se mueven discos-1 de la torre origen a la auxiliar utilizando la de destino como auxiliar. Se mueve el disco que falta de la torre origen a la de destino. Despues se mueven discos -1 de la torre auxiliar a la de destino usando la torre de origen como destino

<h4>Algoritmo</h4>

```
hanoi(discos,origen,destino,auxiliar):
    if discos==1:
        print("Mueve disco {discos} de {torre_origen} a {torre_destino}")
        return

    hanoi(discos - 1, torre_origen, torre_auxiliar, torre_destino)
    print("Mueve disco {discos} de {torre_origen} a {torre_destino}")
    hanoi(discos - 1, torre_auxiliar, torre_destino, torre_origen)





```








</ol>




















<h2><li>Resultado final: vídeo youtube y repositorio</li></h2>
Repositorio Github: https://github.com/chemiya/Programmation-logic

Video Youtube: https://youtu.be/5p2x525HV3s


<h2><li>Conclusiones</li></h2>
He mejorado en la manera de resolver diferentes problemas de programación, planteando de manera inicial en pseudocódigo como resolver el problema y después plasmándolo en código. 

</ol>