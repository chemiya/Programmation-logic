probabilidad_cara = input("Ingrese la probabilidad de que salga cara: ")
probabilidad_cara = float(probabilidad_cara)
numero_experimentos= int(input("Ingrese el numero de experimentos: "))
resultados_experimentos=[]
#por ejemplo: 3,4,5,6,2  : 3 lanzamientos hasta cara en el experimento 0
numero_experimentos_con_cruces=[0]*20
#por ejemplo: 20,13,9,3    : 20 experimentos con 0 cruces antes de la cara


import random
def lanzar_moneda(probabilidad_cara):
    numero_aleatorio=random.random()
    if(numero_aleatorio<probabilidad_cara):
        return "cara"
    else:
        return "cruz"




for i in range(numero_experimentos):
    numero_lanzamientos=0
    sin_cara=True
    while(numero_lanzamientos<=30 and sin_cara==True):
        resultado=lanzar_moneda(probabilidad_cara)

        if(resultado=="cara"):
            sin_cara=False
            resultados_experimentos.append(numero_lanzamientos)
        else:
            numero_lanzamientos=numero_lanzamientos+1


for k in range(len(resultados_experimentos)):
    numero_experimentos_con_cruces[resultados_experimentos[k]]=numero_experimentos_con_cruces[resultados_experimentos[k]]+1


for i in range(len(numero_experimentos_con_cruces)):
    print("con "+str(i)+" cruces se han encontrado: "+str(numero_experimentos_con_cruces[i]))


