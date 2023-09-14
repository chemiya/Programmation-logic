#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
//f6
int main() {
    int contador_espacios=0;
    int contador_puntos=0;
    double media_tamano_palabras=0;
    int tamano_palabra_mas_larga=0;
    int tamano_palabra=0;


    
    char linea[1000];
    FILE *archivo;


    
    archivo = fopen("../texto.txt", "r"); 


    if (archivo == NULL) {
        printf("No se pudo abrir el archivo.\n");
        return 1;
    }

    

    while (fgets(linea, sizeof(linea), archivo) != NULL) {
        
        tamano_palabra=0;
        for (int k=0;k<strlen(linea);k++){
            if (linea[k] == ' ' || linea[k] == '\n') {
                contador_espacios++;
                media_tamano_palabras=media_tamano_palabras+tamano_palabra;
                printf("Encuentro espacio. tamano palabra %d\n",tamano_palabra);        
                if(tamano_palabra>tamano_palabra_mas_larga){
                    tamano_palabra_mas_larga=tamano_palabra;
                }
                tamano_palabra=0;
            } else if (linea[k] == '.'){
                contador_puntos++;

            }else{
                tamano_palabra++;
            }
        }



    }



    fclose(archivo);
    int palabras=contador_espacios ;
    media_tamano_palabras=media_tamano_palabras/palabras;

    printf("Palabras: %d\n",palabras );
    printf("Palabra mas larga: %d\n",tamano_palabra_mas_larga );
    printf("Tamano medio: %f\n",media_tamano_palabras );

}