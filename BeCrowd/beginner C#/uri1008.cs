using System; 

class URI {

    static void Main(string[] args) { 
    int NUMBER = int.Parse(Console.ReadLine());
    int HORAS = int.Parse(Console.ReadLine());
    float VALOR = float.Parse(Console.ReadLine());

    var SALARY = HORAS * VALOR; 

    Console.WriteLine("NUMBER = {0}", NUMBER);
    Console.WriteLine("SALARY = U$ {0:F2}", SALARY);

    }

}