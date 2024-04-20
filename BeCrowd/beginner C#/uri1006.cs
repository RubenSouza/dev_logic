using System; 

class URI {

    static void Main(string[] args) { 

    float A = float.Parse(Console.ReadLine());
    float B = float.Parse(Console.ReadLine());
    float C = float.Parse(Console.ReadLine());

    var MEDIA = (A * 2 + B * 3 + C * 5) / 10;

    Console.WriteLine("MEDIA = {0:F1}",MEDIA);
    }

}