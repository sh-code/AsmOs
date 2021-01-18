# Blocks
In AsmOS, block, scope, namespace, function and class are basically one and the same, or rather, several "variants" of the same thing.

That thing is "block".

----

## Block
Most generic type - is just a(n unnamed, unparameterized, non-isolated, void-returning (or to a single value resolving)) node containing other blocks and/or expressions. Has access to variables of the whole parent chain up to first isolated block.

    { //block - code block with no name, no parameters, no return value
        console.writeLine("Hello, this is code");
    }

When assigned to a variable (do I really want to enable that even though it makes sense?), and executed in another place (in a way similar to executing void parameterless function assigned to a variable), if the variables used (but not declared) in there will be undefined. In other words, they expect to exist within the parent already and be of the proper type, otherwise you get a standard "variable not declared" error.

Is the only "fallthrough block", meaning when we encounter its start, we just go on and start executing it. Execution of contents of every other block needs to be triggered.

## Namespace
An explicitly named block. Basically acts as a singleton class and I see no reason why couldn't it be thought of that way.

    os.gfx { //namespace os.gfx
        //some initialization code can go here

        pub class Bitmap { //we'll get here in a moment

        }
    }

Execution of direct descendant fallthrough blocks triggered by

    import os.gfx;
    
## Class
Same as namespace except not a singleton, can (and needs to) create instances via new.

    os.gfx {
        pub class Bitmap {
            pub new(){
                //empty class constructor
            };
        }
    }

"Execution" triggered by

    os.gfx.Bitmap b = new os.gfx.Bitmap();
This executes the direct descendants (property and variable and function declarations and initializations) and then the new() function itself.

## Function
Differs from class that local variables defined in it are not persistent. In fact, the function has no persistent values in it at all, only code. It is a (usually explicitly named but can be unnamed) block taking parameters and possibly returning a value.

It can of course be pure if it touches nothing else than its params and return value (and doesn't assign to params), or non-pure, which is detected automatically.

    os.gfx {
        pub class Bitmap {
            pub int customMultiplier = 1;
            
            pub new(){
                //empty class constructor
            };

            //pure function, obviously
            pub int pureMultiply(int a, int b){
                return a * b;
            }

            //non-pure one, even though it only accesses "this"
            pub int nonpureMultiply(int a){
                return a * customMultiplier;
            }
        }
    }

Execution triggered by... calling the function, duh

    os.gfx.Bitmap b = new os.gfx.Bitmap();
    console.writeLine(b.pureMultiply(21, 2));
    b.customMultiplier = 21;
    console.writeLine(b.nonpureMultiply(2));