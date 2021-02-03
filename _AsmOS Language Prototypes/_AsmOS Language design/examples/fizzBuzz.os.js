//this one is hugely obfuscated
str fizzBuzz(int n){
    str s => [ n, s[3].substr(0, 4), s[3].substr(-4), "FizzBuzz" ]; //bind (slightly self-referential) array
    
    int selector = ((n % 3) == 0) + ((n % 5) == 0) * 2; //calculate selector
    return s[selector]; //select and return the appropriate value
}

//asmos
str fizzBuzz(int n){
    str s => [ n, s[3].substr(0, 4), s[3].substr(-4), "FizzBuzz" ]; //bind (slightly self-referential) array
    return s[((n % 3) == 0) + ((n % 5) == 0) * 2]; //select and return the appropriate value
}

//same thing as above but oneliner (in asmos)
str fizzBuzz(int n){ret [n, here[3].substr(0, 4), here[3].substr(-4), "FizzBuzz"][((n % 3) == 0) + ((n % 5) == 0) * 2]} //"return" optional?

//same idea as above but in c#
static string fizzBuzz(int n) {
    string s = "FizzBuzz";
    string[] res = new string[] { n.ToString(), s.Substring(0, 4), s.Substring(4, 4), s };
    return res[Convert.ToInt32((n % 3) == 0) + Convert.ToInt32((n % 5) == 0) * 2];
}

//same idea as above but in c#
static string fizzBuzz(int n) {
    string[] res = new string[] { n.ToString(), "Fizz", "Buzz", "FizzBuzz" };
    return res[Convert.ToInt32((n % 3) == 0) + Convert.ToInt32((n % 5) == 0) * 2];
}

static string fizzBuzz(int n) {
    string[] res = new string[] { n.ToString(), "Fizz", "Buzz", "FizzBuzz" };
    return new string[]{ n.ToString(), "Fizz", "Buzz", "FizzBuzz" }[Convert.ToInt32((n % 3) == 0) + Convert.ToInt32((n % 5) == 0) * 2];
}

Func<int, string> fizzBuzz = (int n) => new[] { n.ToString(), "Fizz", "Buzz", "FizzBuzz" }[Convert.ToInt32((n % 3) == 0) + Convert.ToInt32((n % 5) == 0) * 2];
for (int c = 1; c < 31; c++) Console.WriteLine(fbz(c));