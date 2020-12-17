/* probably mostly outdated */

/*
    DESIGN PRINCIPLES:
    1. As simple and clean as possible. as little special char decorators and keywords as possible
    Each character or keyword should have irremovable, irreplacable, important meaning
    (read and write small amount of code carefully to get it right)
    
    2. function, object, namespace, scope are the same thing.
    the main difference is how they behave on assignment.
    
    3. everything is an object
    
    4. syntax contains as many optional things as possible, each command should
    ideally have only single mandatory part, which does the most common thing,
    each additional part of command specifies the behavior
    
    5. ECS-oriented OO: single-parent inheritance by subclassing, multiple-inheritance by
    component composition
*/

// 1. - scope/object/function definition:
{} //anonymous scope/object (taking no params, returning no value)

() => {} //anonymous function (taking no params, returning no value)

int () => {} //anonymous function taking no params, returning int value

string hello() => {} //named function taking no params, returning string value

string hello(string name) => { return "Hello, " + name; } //named function taking a param, returning string

//2. main difference between class, function, scope and namespace is how they behave
//on (equals sign) assignment.
// function evaluates (runs) and assigns value
string hello(string name) => { return "Hello, " + name; }
string greeting = hello("Midnight");
//greeting now contains "Hello, Midnight"

class greeter(string name) => { //if class, params are params for constructor
    public name; //whatever is outside any function within class is its constructor and is
    //evaluated on "new". this "public name" automatically takes the string name parameter
    //and makes it into a public property of the class
    private string privateName = name;

    public string sayGreeting() => return "Hello, " + name;

    //following is basically a cast function for the class to a type, in this case string
    public string => return "This is a greeter class with name " + name + " auto-evald into string";
}

greeter g = new greeter("Midnight");
//g now contains instance of greeter class with
//g.name contains "Midnight"; g.privateName also contains midnight but is inaccessible from outside

string gEvaldResult = g.sayGreeting(); //evals SayGreeting and assigns to variable
string gNonevaldResult => g.sayGreeting(); //assigns (BINDS) actual non-evald function to the variable
string gNonevaldToString1 = "Eval1: " + gNonevaldResult; //variable now has value "Eval1: Hello, Midnight";
g.name = "Sim"; //gEvaldResult, naturally, stays "Hello, Midnight"
string gNonevaldToString2 = "Eval2: " + gNonevaldResult; //variable now has value "Eval2: Hello, Sim", because 
// gNonevaldResult is evaluated lazily, meaning the function bound to its value runs at the point we do eval-assignment (equals) to a string type 

string autoEvalClass = g; //after this line, autoEvalClass contains "This is a greeter class with name 'Sim' auto-evald into string"

