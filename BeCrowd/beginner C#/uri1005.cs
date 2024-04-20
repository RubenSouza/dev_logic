using System; 

class URI {

    static void Main(string[] args) { 

      float A = float.Parse(Console.ReadLine());
    float B = float.Parse(Console.ReadLine());

    var MEDIA = (A * 3.5 + B * 7.5) / 11;

    Console.WriteLine("MEDIA = {0:F5}",MEDIA);

    }

}