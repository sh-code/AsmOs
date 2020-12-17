/* up-to-date-for: 2020-12-17 */

main {
    inc fibonacciProgram = "fibonacci.os.js"; //assign the include into a variable if we want to be able to run the whole program
    inc "fibonacci.os.js"; //ignore the main program, just include the public namespaces from the file

    fibonacciProgram.run(); //if included with assign to variable. this command will effectively release control to the called program fully, until that one terminates with end, or with exit from the main block, or with whatever my asynchronous "Application.ProcessEvents" equivalent is. (sleep?)
    //in both cases though, i can use
    console.writeLine("Iterative fibonacci direct namespace call: " + fibonacci.iterative(50));
    //or, if named include, i can also address it as
    console.writeLine("Program-reference-based fibonacci call: " + fibonacciProgram.fibonacci.iterative(50));
}