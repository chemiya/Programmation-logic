using System;

class Program
{
    static void Main()
    {
        Console.Write("Por favor, ingresa una cadena: ");
        string input = Console.ReadLine(); 

        Dictionary<string, string> diccionario = new Dictionary<string, string>();
        List<string> pila = new List<string>();
        
        diccionario[")"] = "(";
        diccionario["}"] = "{";
        diccionario["]"] = "[";

        string iniciales="([{";
        string finales=")]}";
        int incorrecta=0;
        

        
        foreach (char caracter in input)
        {
                    
            if (iniciales.Contains(caracter)){
                pila.Add(caracter.ToString());
            }
                
            else if (finales.Contains(caracter)){
                if(pila.Count==0){
                    Console.WriteLine("No esta equilibrada");
                    incorrecta=1;
                }

                string ultimoElemento = pila[pila.Count - 1]; 
                pila.Remove(ultimoElemento);

                string extraido=diccionario[caracter.ToString()];

                if(extraido!=ultimoElemento){
                    Console.WriteLine("No esta equilibrada");
                    incorrecta=1;
                }
                    
             }
        }

        if (pila.Count==0 && incorrecta==0){
            Console.WriteLine("Correcta");
        }
    }
}

