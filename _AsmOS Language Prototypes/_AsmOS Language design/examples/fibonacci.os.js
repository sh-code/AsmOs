/* up-to-date-for: 2020-12-17 */

//shortest and simplest possible example of fibonacci full program
public fibonacci { //object/namespace/block name. when marked as public, when this program's file is included by another program (from different file), it can be accessed as a library
    public int[] iterative(int length){
        int[length] res = [1, 1];   //seed with initial two values. //could also be res = [0:1, 1:1] with explicitly specified indexes. //that way i can seed arbitrary positions like res = [25:1, 30:1];
        throuhg(position => [2 .. length]){
            res[position] = res[position - 1] + res[position - 2];
        }

        return res;
    }


    public int[] recursive(int position, int length, int[] sequence = null){
        if(position < 2) return recursive(2, length, new int[2]{1, 1});
        else if(position < length) 
            return recursive(position + 1, length, sequence.append(sequence[position-1] + sequence[position-2]));
        else 
            return sequence;
    }
}

main { //main entrypoint object/namespace/block of the program
    console.writeLine("Choose method:");
    console.writeLine("1. iterative \n 2. recursive \n 0. exit");
    int choice = console.readLine(int);
    int length = console.readLine("Choose sequence length: ", int);

    switch(choice){
        case 0: end; //exit is to jump out of current block. end ends the whole program. cases don't fall through in this language
        case 1: console.writeLine(fibonacci.iterative(length));
        case 2: console.writeLine(fibonacci.recursive(0, length));
        default: console.writeLine("No idea what you meant. Bye."); end;
    }
}

//the difference between "=" and "=>":
// "=" is immediate eval and assign
// "=>" is lazy eval - "goes to(?)" - assign/bind the expression into the variable, and only actually run/eval it when needed, and return the result of that expression as the value of the variable
//so:
int[] staticSequence = [1 .. 50]; //when the line executes, it generates an array of 50 elements with values 1 to 50 and assigns it to the staticSequence var.
//and:
int[] dynamicSequence => [1 .. 50]; //when the line executes, binds the sequence generator to the variable, and... that's all
int oneNum = dynamicSequence[5]; //this is the moment when the bound code (in this case a simple sequence/list generator) runs and returns the result value

//meaning