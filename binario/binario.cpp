#include <iostream>
#include <vector>


std::vector<int> invertir(std::vector<int>& v) {
    int inicio = 0;
    int fin = v.size() - 1;

    while (inicio < fin) {
        int temp = v[inicio];
        v[inicio] = v[fin];
        v[fin] = temp;

        
        inicio++;
        fin--;
    }
    return v;
}


std::vector<int> decimalToBinary(int decimal) {
    std::vector<int> binario;

    
    if (decimal == 0) {
        binario.push_back(0);
        return binario;
    }

    while (decimal > 0) {
        
        int residuo = decimal % 2;
        binario.push_back(residuo);

        
        decimal /= 2;
    }

    binario=invertir(binario);

    return binario;
}

int main() {
    int numeroDecimal;
    std::string salida = "";

    std::cout << "Introduce un numero decimal: ";
    std::cin >> numeroDecimal;

    
    std::vector<int> resultado = decimalToBinary(numeroDecimal);

    
    for (int bit : resultado) {
            salida+= std::to_string(bit);
    }

    std::cout << "En binario: " << salida << std::endl;
    

    return 0;
}
