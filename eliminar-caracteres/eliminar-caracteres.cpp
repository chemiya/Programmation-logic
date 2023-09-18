#include <iostream>
#include <string>


bool caracterEnCadena(const std::string& cadena, char caracterBuscado) {
    for (char c : cadena) {
        if (c == caracterBuscado) {
            
            return true; 
        }
    }

    
    return false; 
}

int main() {

    std::string primeraCadena = "";
    std::string segundaCadena = "";
    char caracter;
    std::string caracteresPrimera;
    std::string caracteresSegunda;



    std::cout << "Introduce un primera cadena: ";
    std::cin >> primeraCadena;

    std::cout << "Introduce un segunda cadena: ";
    std::cin >> segundaCadena;


   for (int i =0  ; i < primeraCadena.length(); i++) {
        caracter = primeraCadena[i];

        if (!caracterEnCadena(segundaCadena, caracter)) {
            if (!caracterEnCadena(caracteresPrimera, caracter)) {
                caracteresPrimera+=caracter;
            }
            
        } 
   }

      for (int i =0  ; i < segundaCadena.length(); i++) {
        caracter = segundaCadena[i];

        if (!caracterEnCadena(primeraCadena, caracter)) {
            if (!caracterEnCadena(caracteresSegunda, caracter)) {
                caracteresSegunda+=caracter;
            }
            
        } 
   }
    
    std::cout << "Caracteres que estan en la primera y no en la segunda: ";
    for (int i = 0; i < caracteresPrimera.length(); i++) {
        std::cout << caracteresPrimera[i];
    }

        std::cout << "\nCaracteres que estan en la segunda y no en la primera: ";
    for (int i = 0; i < caracteresSegunda.length(); i++) {
        std::cout << caracteresSegunda[i];
    }


    return 0;
}
