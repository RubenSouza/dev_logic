using System; 

class URI {

    static void Main(string[] args) { 

    int A = int.Parse(Console.ReadLine());
    int B = int.Parse(Console.ReadLine());
    int C = int.Parse(Console.ReadLine());
    int D = int.Parse(Console.ReadLine());

    var DIFERENCA = (A * B) - (C* D);

    Console.WriteLine("DIFERENCA = {0}", DIFERENCA);
    }

}