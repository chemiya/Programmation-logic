#include <iostream>

int main() {
    char caracter;
    int numeroLinea;
    int numeroIzquierda;
    int rayas=5;
    std::string cadena;
    std::string cadenaTeclado;
    std::string linea = "";

    std::cout << "Por favor, introduce un numero: ";
    std::cin >> cadenaTeclado;
    
    
    for (int i = cadenaTeclado.length() - 1; i >= 0; i--) {
        caracter = cadenaTeclado[i];
        
        
       

        cadena = caracter;
        numeroLinea = std::stoi(cadena);
        numeroIzquierda=10-numeroLinea;
        linea="";
        for (int i = 0; i <= numeroIzquierda-1; i++) {
            linea+="O";
        }
        for (int i = 0; i <= rayas-1; i++) {
            linea+="-";
        }
        for (int i = 0; i <= numeroLinea-1; i++) {
            linea+="O";
        }
        std::cout << linea << std::endl;
   
    }

    return 0;
}
