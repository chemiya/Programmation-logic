

using System;

class Program
{

    static string buscar_letra(int numero, int repeticiones)
    {
        if (numero == 2)
        {
            if (repeticiones == 0)
            {
                return "a";
            }

            else if (repeticiones == 1)
            {
                return "b";
            }

            else
            {
                return "c";
            }

        }
        else if (numero == 3)
        {
            if (repeticiones == 0)
            {
                return "d";
            }

            else if (repeticiones == 1)
            {
                return "e";
            }

            else
            {
                return "f";
            }
        }
        else if (numero == 4)
        {
            if (repeticiones == 0)
            {
                return "g";
            }

            else if (repeticiones == 1)
            {
                return "h";
            }

            else
            {
                return "i";
            }
        }
        else if (numero == 5)
        {
            if (repeticiones == 0)
            {
                return "j";
            }

            else if (repeticiones == 1)
            {
                return "k";
            }

            else
            {
                return "l";
            }
        }
        else if (numero == 6)
        {
            if (repeticiones == 0)
            {
                return "m";
            }

            else if (repeticiones == 1)
            {
                return "n";
            }

            else
            {
                return "o";
            }
        }
        else if (numero == 7)
        {
            if (repeticiones == 0)
            {
                return "p";
            }

            else if (repeticiones == 1)
            {
                return "q";
            }

            else
            {
                return "r";
            }
        }
        else if (numero == 8)
        {
            if (repeticiones == 0)
            {
                return "s";
            }

            else if (repeticiones == 1)
            {
                return "t";
            }

            else
            {
                return "u";
            }
        }
        else
        {
            if (repeticiones == 0)
            {
                return "w";
            }

            else if (repeticiones == 1)
            {
                return "x";
            }
            else if (repeticiones == 2)
            {
                return "y";
            }

            else
            {
                return "z";
            }
        }
    }

    static void Main()
    {
        Console.Write("Por favor, ingresa la cadena de numeros: ");
        string texto = Console.ReadLine();

        
        int numero = 0;
        string letra = "";
        string cadena_final = "";
        string[] subcadenas = texto.Split("-");
        foreach (string entrada in subcadenas)
        {

                int i = 0;
                int contador_repetidos = 0;
                if (i + 1 < entrada.Length && entrada[i] == entrada[i + 1])
                {
                    contador_repetidos++;
                }

                if (i + 2 < entrada.Length && entrada[i] == entrada[i + 2])
                {
                    contador_repetidos++;
                }

                if (i + 3 < entrada.Length && entrada[i] == entrada[i + 3])
                {
                    contador_repetidos++;
                }

                numero = int.Parse(entrada[i].ToString());
                letra = buscar_letra(numero, contador_repetidos);
                cadena_final += letra;
                



            
            
        }

        Console.WriteLine("el texto convertido es :" + cadena_final);
    }
}
