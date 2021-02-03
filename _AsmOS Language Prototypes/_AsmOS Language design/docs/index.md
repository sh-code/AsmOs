# Philosophy
## 1. I don't care... unless I need/want to, at which point I can seamlessly get down to the assembler (or even machine code).
When I say "draw me a list of items", I want it to automatically look good on whatever display platform (and template/style) I have set.

So basically:

    str[] listOfStrings = {"first"; "second"; "third"; "item(s)"};
    console.writeLine(listOfStrings);

Should result in console output of something like:

    first, second, third, item(s)

While

    str[] listOfStrings = {"first"; "second"; "third"; "item(s)"};
    console.write(listOfStrings);

should result in something like:

    listOfStrings:
    - first
    - second
    - third
    - item(s)

### **For this purpose, there will be something like "type formatters"**
Class/function which takes a type param and returns a type, and that's it. For example, to achieve the output equivalent to the default console.write, one would do:

    pub class StrArrayToStr{
        priv str[] originalArray;
        priv str originalArrayName

        pub str[] { 
            set new { //set new means that this property can be used as "assign-constructor"? that if I do: StrArrayToStr convert = stringArray; <- this would actually auto-instantiate a new class
                originalArray = value; 
                originalArrayName = value.sourceIdentifier;
            }
        }

        pub str {
            get {
                return 
                    originalArrayName + ":"
                    + originalArray.join("\n - ");
                //i don't like "\n" as newline, I would like something that's less messy in the string
            } 
            }
        }
    }

Except this is a separate class which would need to be used like:

    StrArrayToStr convert = new StrArrayToStr();
    str[] source = { "first", "second", "third" };
    convert = source; //runs the pub str[] set
    console.write(convert); //runs the pub str get

Or

    str[] source = { "first", "second", "third" };
    StrArrayToStr convert = source; //runs the pub str[] set new, since the "new" keyword in there signifies that the class can be initialized by assignment to that property
    console.write(convert); //runs the pub str get of the class

To actually make it usable in a nice auto way, we need to be able to inject these properties into existing classes?

    Assume that str[] as a type exists, and we want to add the above functionality (fron our code using the lib) to it (without having to modify or subclass stuff in the lib), as it is not implemented yet. What we would do is put some code into library/namespace init which extends the object, like:

        os.data.utils {
            str[].str => { //arrow notation so that it gets evald upon calling (we're assigning process, code, algorighm, to be executed on property read, not a result of it (executed on whenever the code is parsed), which would be "=")
                get {
                    return 
                        value.sourceIdentifier + ":"
                        + value.join("\n - ");
                }
            }
        }

The above code basically adds a type property to the str[] type, so after it actually runs, we can do:

    str[] toPrint = {"first", "second", "third"};
    console.write(toPrint); //since console.write takes str as param, the added str[].str get will run and its result will be written.

