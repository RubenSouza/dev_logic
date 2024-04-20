using System; 

class URI {

    static void Main(string[] args) { 
    double n = 3.14159; 
    double r = double.Parse(Console.ReadLine());

    var result = n * (r * r);

    Console.WriteLine("A={0:F4}",result);

    }

}