using System; 

class URI {

    static void Main(string[] args) { 

String line1 = Console.ReadLine();
String line2 = Console.ReadLine();

string[] values1 = line1.Split(' ');
int cod1 = int.Parse(values1[0]);
int cod2 = int.Parse(values1[1]);
double cod3 = double.Parse(values1[2]);
double somaProduto1 = cod2 * cod3;

string[] values2 = line2.Split(' ');
int cod4 = int.Parse(values2[0]);
int cod5 = int.Parse(values2[1]);
double cod6 = double.Parse(values2[2]);
double somaProduto2 = cod5 * cod6;

double resultado = somaProduto1 + somaProduto2;


Console.WriteLine("VALOR A PAGAR: R$ {0:F2}", resultado);

    }

}