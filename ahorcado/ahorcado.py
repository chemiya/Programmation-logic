import random


def obtener_palabra_aleatoria():
    palabras=["programacion","nomenclatura","locomotora","inconmensurable","abecedario","paralelepipedo"]
    return random.choice(palabras)




palabra=obtener_palabra_aleatoria()
continuar=True
intentos=6
letras_usuario=[]

while continuar==True:
    cadena_mostrar=""
    letra=input("introduce letra: ")
    if letra in letras_usuario:
        print("ya has introducido esta letra")
    else:
        letras_usuario.append(letra)

        if letra in palabra:
            print("has acertado la letra")
            
        else:
            intentos=intentos-1
            print("la letra no esta. Te quedan:",intentos," intentos")
        
        print("letras introducidas:",letras_usuario)
        


        for i in range(len(palabra)):
            letra_palabra=palabra[i]
            if letra_palabra in letras_usuario:
                cadena_mostrar=cadena_mostrar+letra_palabra
            else:
                cadena_mostrar=cadena_mostrar+"_"

        print("palabra:"+cadena_mostrar)
        print("\n")

        if intentos==0:
            continuar=False
            print("se te acabaron los intentos. La palabra era "+palabra)
        if cadena_mostrar==palabra:
            continuar=False
            print("adivinaste la palabra")






