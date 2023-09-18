#include <stdio.h>
int buscar_fila_libre(int columna, char tablero[6][6])
{
    for (int i = 5; i >= 0; i--)
    {
        if (tablero[i][columna] == ' ')
        {
            return i;
        }
    }

    return -1;
}

int comprobar_ganador(char tablero[6][6], char jugador)
{
    int contador_seguidos = 0;
    int ganador = 0;

    for (int i = 0; i < 6; i++)
    {
        for (int k = 0; k < 6; k++)
        {
            if (tablero[i][k] == jugador)
            {
                contador_seguidos++;

                if (contador_seguidos == 4)
                {
                    ganador = 1;
                }
            }
            else
            {
                contador_seguidos = 0;
            }
        }
    }

    for (int i = 0; i < 6; i++)
    {
        for (int k = 0; k < 6; k++)
        {
            if (tablero[k][i] == jugador)
            {
                contador_seguidos++;

                if (contador_seguidos == 4)
                {
                    ganador = 1;
                }
            }
            else
            {
                contador_seguidos = 0;
            }
        }
    }

    for (int i = 0; i < 6; i++)
    {
        for (int k = 0; k < 6; k++)
        {
            if (tablero[i][k] == jugador)
            {
                

                if (i + 3 < 6 && k + 3 < 6)
                {
                    if (tablero[i + 1][k + 1] == jugador & tablero[i + 2][k + 2] == jugador & tablero[i + 3][k + 3] == jugador)
                    {
                        ganador = 1;
                    }
                    
                }
                if (i - 3 > -1 && k - 3 > -1)
                {
                    if (tablero[i - 1][k - 1] == jugador & tablero[i - 2][k - 2] == jugador & tablero[i - 3][k - 3] == jugador)
                    {
                        ganador = 1;
                    }
                    
                }
            }
        }
    }

    return ganador;
}

int main()
{

    char tablero[6][6];

    for (int fila = 0; fila < 6; fila++)
    {
        for (int columna = 0; columna < 6; columna++)
        {
            tablero[fila][columna] = ' ';
        }
    }

    int finalizado = 0;
    char jugador_actual = 'X';
    int columnaEntrada;
    int fila_libre;

    while (finalizado == 0)
    {
        printf("Turno para: %c. Selecciona columna\n", jugador_actual);
        scanf("%d", &columnaEntrada);

        fila_libre = buscar_fila_libre(columnaEntrada, tablero);
        tablero[fila_libre][columnaEntrada] = jugador_actual;

        finalizado = comprobar_ganador(tablero, jugador_actual);
        if (finalizado == 1)
        {
            printf("Ganador: %c. \n", jugador_actual);
        }

        if (jugador_actual == 'X')
        {
            jugador_actual = 'O';
        }
        else
        {
            jugador_actual = 'X';
        }

        printf("\nTablero:\n");

        for (int fila = 0; fila < 6; fila++)
        {
            for (int columna = 0; columna < 6; columna++)
            {
                printf("%c|", tablero[fila][columna]);
            }
            printf("\n");
        }
    }

    return 0;
}
