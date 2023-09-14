<h1>Documento resumen del proyecto para crear la aplicación "Foodeador"</h1>

<ol>
<h2><li>Resumen del proyecto</li></h2>
<p></p>




<h2><li>Ejercicios</li></h2>
<ol>
<h3><li>Abaco</li></h3>
<h4>Descripción del algoritmo</h4>
El abaco contiene 10 lineas. La primera de arriba son las unidades y la ultima millares de millon. Cada linea tiene 10 bolas. Las bolas que se situen a la derecha representan el numero de unidades deseadas en la medida correspondiente a la linea. 

<h4>Algoritmo</h4>


```
numero_abaco=entrada_teclado()
numero_abaco_string=str(numero_abaco)

for i=numero_abaco.length-1;i>=0;i--:
    numero_linea=int(numero_abaco[i]
    numero_bolas_izquierda=10-numero_linea
    numero_rayas=15-numero_linea-numero_bolas_izquierda
    linea_imprimir=""
    for k=0;k<numero_bolas_izquierda;k++:
        linea_imprimir=linea_imprimir+"O"

    for k=0;k<numero_rayas;k++:
        linea_imprimir=linea_imprimir+"-"

    for k=0;k<numero_linea;k++:
        linea_imprimir=linea_imprimir+"O"

    print(numero_linea)




```

<h4>Estado</h4>
Pendiente de realizar, en c++



<h3><li>Teclado t9</li></h3>
<h4>Descripción del algoritmo</h4>
El usuario introduce los numeros que pulsa. Esas pulsaciones se deben traducir a texto. 222443362 se traduce a chema


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

<h4>Estado</h4>
Pendiente de realizar, en c#


<h3><li>Lanzar moneda trucada</li></h3>
<h4>Descripción del algoritmo</h4>
Se tiene una moneda en la que la probabilidad de que salga cara se puede modificar. El usuario introduce el numero de experimentos que quiere realizar y las probabilidades de que salga cara y cruz. En cada experimento se lanza la moneda hasta que salga cara. En ese momento se pasa al siguiente experimento. Al final se muestra el numero maximo de lanzamientos entre todos los experimentos, es decir el numero maximo de cruces que han salido. Por ejemplo, el numero maximo de cruces en un experimento han sido de 7 cruces. Tambien se debe mostrar cuantos experimentos hay con un numero determinado de cruces antes de la cara. Por ejemplo, se han encontrado 14 experimentos con 3 cruces, 21 experimentos con 4 cruces.


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
<h4>Estado</h4>
Hecho en Python

<h3><li>Primos gemelos</li></h3>
<h4>Descripción del algoritmo</h4>
Los primos gemelos son numeros primos que difieren en 2 unidades. Por lo tanto, se recorren los numeros menores que el limite introducido comprobando por cada numero si es numero y a la vez comprobando si el numero 2 unidades mayor en primo. El 1 no se considera primo, el 2 y el 3 si son primos. Los multiplos de 2 y 3 no son primos. Un numero es primo si solo se puede dividir entre 1 o si mismo. Comenzando un bucle en 5, se verifica si el numero es divisible entre algun numero entre 5 y la raiz cuadrada del numero.

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

<h4>Estado</h4>
Pendiente de realizar, en Php


<h3><li>Analisis de texto</li></h3>
<h4>Descripción del algoritmo</h4>
Analizar un texto obteniendo el numero total de palabras, la longitud media de las palabras, el numero de oraciones y el tamano de la palabra mas larga. Para ello utilizar un unico bucle.

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

<h4>Estado</h4>
Pendiente de realizar, en c


<h3><li>Convertir numero en decimal a binario</li></h3>
<h4>Descripción del algoritmo</h4>
Se divide el numero decimal entre 2 y el valor del resto se va almacenando en una lista. Si el cociente obtenido es mayor que 0, repite el proceso diviendo entre 2 y almacenando el resto. Con el nuevo cociente se repite el proceso. Finalmente se invierte la lista



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

<h4>Estado</h4>
Pendiente de realizar, en c++





<h3><li>Ahorcado</li></h3>
<h4>Descripción del algoritmo</h4>
En este juego, se selecciona una palabra aleatoria. El usuario introduce una letra, si esta en la palabra se muestra la palabra con las letra marcada, si no esta se resta un intento. Tiene 6 intentos.


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

<h4>Estado</h4>
Hecho en Python

<h3><li>Cuatro en linea</li></h3>
<h4>Descripción del algoritmo</h4>
En este juego dos jugadores van introduciendo fichas por la parte de arriba del tablero. Gana el que conecte 4 en fila, columna o diagonal
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


comrpobar_ganador(tablero,jugador_actual):
    //comprobar en las filas
    contador_seguidos=0
    fila_junta=""
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

<h4>Estado</h4>
Pendiente de hacer en Java

<h3><li>Batalla naval</li></h3>
<h4>Descripción del algoritmo</h4>
Los usuarios tienen dos barcos cada uno. Deben definir las coordenadas donde estan la punta de cada barco y el final de cada barco. Los usuarios van diciendo coordenadas y se va comprobando si tocan barco o caen en agua. Un barco se hunde, si el usuario dice todas las coordenadas del barco. Gana el jugador que hunda los dos barcos del oponente. Los barcos tienen una longitud de 3 casillas.

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

<h4>Estado</h4>
Pendiente de realizar en Java


<h3><li>2048</li></h3>
<h4>Descripción del algoritmo</h4>
En este juego, se tiene una cuadricula de 4x4. El usuario introduce la direccion en que quiere mover los numeros. Si al mover los numeros, se encuentran con otro numero de mismo valor, los numeros se juntan en una casilla con el valor de la suma. AL inicio hay dos casillas con numeros 2. Se termina el juego si el tablero esta lleno y no puedes realizar ningun movimiento que una dos casillas.



<h4>Algortimo</h4>

```

tablero=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
continuar_juego=true

while continuar_juego==true:
    movimiento=entrada_teclado()

    if movimiento=="derecha":


        for i=0;i<tablero.length;i++:
            for j=0;j<tablero[0].length-1;j++:
                if tablero[i,j]==tablero[i,j+1]:
                    tablero[i,j+1]=tablero[i,j]*2
                    desplazar=j
                    while desplazar>0:
                        tablero[i,desplazar]=tablero[i,desplazar-1]
                        desplazar--


        
        for i=tablero.length-1;i>=0;i--:        //recorro filas
            celdas_mover_fila=0
            for j=tablero[0].length-1;j>=0;j--:     //recorro columnas de la fila
                if tablero[i,j]==0:
                    celdas_mover++
        
            mover_celdas_fila(i,celdas_mover)

    if movimiento=="abajo":
        
        for i=tablero[0].length-1;i>=0;i--:     //recorro columnas
            celdas_mover_columna=0
            for j=tablero.length-1;j>=0;j--:        //recorro filas de la columna
                if tablero[j,i]==0:
                    celdas_mover++
        
            mover_celdas_columna(i,celdas_mover)
                

mover_celdas_fila(fila,celdas_mover):
    for i=tablero.length[0]-1;i>=0;i--:     //recorro columnas de la fila
        tablero[fila,i]=tablero[fila,i-celdas_mover]

mover_celdas_columna(columna,celdas_mover):
    for i=tablero.length-1;i>=0;i--:        //recorro filas de la columna
        tablero[i,columna]=tablero[i-celdas_mover,columna]


introducir_dos_aleatorio():
    vacias=[]
    for i=0;i<tablero.length;i++:
        for j=0;j<tablero[0].length;j++:
            if tablero[i,j]==0:
                vacias.anadir_elemento([i,j])

    valor_aleatorio=generar_aleatorio()
    tablero[vacias[aleatorio]]=2




```
<h4>Estado</h4>
Pendiente de realizar en Java



<h3><li>entrevista</li></h3>

<h4>Estado</h4>
Pendiente de realizar en Javascript

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

<h4>Estado</h4>
Pendiente de realizar en Javascript

https://www.youtube.com/watch?v=DYmTpUfcyT8&t=317s


<h3><li>Busqueda binaria</li></h3>
<h4>Descripción del algoritmo</h4>
Este algoritmo busca un numero dentro de array ordenado. Busca la posicion del medio del array. Si el valor a buscar es menor que el valor del medio, se coge el punto medio del array de la izquierda y se aplica el mismo procedimiento. Si el valor a buscar es mayor que el valor del medio, se coge el punto medio del array de la derecha. Se aplica lo mismo con el nuevo array. Se termina si se encuentra el numero en uno de los elementos del medio o si la variable que almacena el elemento de la izquierda del array que se comprueba es mayor que el elemento de la derecha del array que se comprueba.

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
<h4>Estado</h4>
Pendiente de realizar en Javascript

https://www.youtube.com/watch?v=HQQno0ckmgY&list=PLJW2tvooj-C7RmUHi5NB0EN1mAOKCj9ww



<h3><li>Eliminar caracteres</li></h3>
<h4>Descripción del algoritmo</h4>
Se reciben dos cadenas como entrada. De salida se devolveran dos cadenas, en la primera se incluyen los caracteres que estan en la primera pero no en la segunda. En la segunda se incluyen los caracteres que estan en la segunda y no en la primera

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

<h4>Estado</h4>
Pendiente de realizar en c++

<h3><li>Expresiones equilibradas</li></h3>
<h4>Descripción del algoritmo</h4>
Comprobar que en una expresion los corchetes, llaves y parentesis se abren y cierran en forma correcta
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
<h4>Estado</h4>
Pendiente de realizar en c#

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

<h4>Estado</h4>
Pendiente de realizar en php






</ol>




<h2><li>Tecnologías utilizadas</li></h2>
<p>Se van a utilizar las siguientes tecnologías:</p>
<ul>
<li>Java</li>
<li>Python</li>
<li>C</li>
<li>Javascript</li>
<li>Typescript</li>
<li>C++</li>
<li>PHP</li>
<li>C#</li>
</ul>








<h2><li>Estructura del backend</li></h2>

<p></p>






<h2><li>Estructura del frontend</li></h2>








<h2><li>Resultado final: vídeo youtube y repositorio</li></h2>
Repositorio Github:


<h2><li>Conclusiones</li></h2>
He aprendido como crear una API REST con .net y como gestionar con ella los datos de una base de datos MySQL. He seguido aplicando y ampliando los conocimientos que tenía sobre Vue y SCSS.


</ol>