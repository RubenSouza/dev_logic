using System; 

class URI {

    static void Main(string[] args) { 

    string name = Console.ReadLine();
    double SALARIO = double.Parse(Console.ReadLine());
    double VENDAS = double.Parse(Console.ReadLine());

    double PERCENTUAL = 85.0 / 100.0;
    var BONUS = VENDAS - (PERCENTUAL * VENDAS);
    var TOTAL = SALARIO + BONUS;

    Console.WriteLine("TOTAL = R$ {0:F2}",TOTAL);
    }

}