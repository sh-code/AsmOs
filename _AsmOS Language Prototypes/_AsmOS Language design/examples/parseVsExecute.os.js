i = 5;

executedVariable = {
    return i*10 + 1*2;
}

i = 9;

console.writeLine(executeVariable); // prints 52

boundVariable => {
    return i*10 + 1*2;
}

console.writeLine(boundVariable); // prints "92" since we set i to 9 before calling the thing

//basically, (the code until now was linear and would actually execute, but following one probably won't)
boundVar => 5; //same as boundVar = {return 5;}
// boundVar becomes a pointer to a function that returns 5. as opposed to
valueVar = {return 5;} //creates a function that returns 5 and upon this call, executes the function and valueVar becomes an on-stack value thing 