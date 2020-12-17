/* probably outdated and/or nonsense */

| //branching operator
true | false; //this line evals either to the literal true, or literal false, depending on need
x = true | false; //variable x evals either to the literal true or literal false.
//right now, it's declared, we know all of its possible values, but until it can only eval into one branch/value
//it is undefined, has no value/all of the possible values at the same time, therefore returns 
(x) ? {
    //true block, but does it execute?
}
| false //and is there a difference for explicit value block?
{
    //does this one execute?
}


bool = 
    true -> { true | 1 | t } // assigning expression as a replacement for string literal. giving name to chunk of code, basically, therefore defining a function
    | false -> { false | 0 | f } }; //"bool" can be true or false (pipe == "block branching"), and both true and false can be expressed in 3 different ways
    //the one that points to itself (true -> true) is final literal - considered the most default state (literal state) and doesn't get replaced
    //when comparing two values with the same final literal, that's the comparison that will be used 
//shouldn't it rather be
// bool = { true } | { false }; ?
bool isTrue = true;
bool isFalse = false; //lol

(isTrue) ? {
    //true block
}
|//block branching, second block executed if variable has the second value
{
    //second value (in case of bool, "false" block)
}


trool = { true | false | filenotfound }; //because why not

filenotfound = { filenotfound | wtfknows }; //and now filenotfound returns true when compared with both of these

trool

trool maybeTrue = filenotfound;

(maybeTrue) ? {
    //true block
}
| //block branching
{
    //false block
}
| //block branching; trool still has only three possible branches, but you can explicitly define any of the "forms" of filenotfound, or just handle it generally and maybe do nested branch inside for a specific value
{
    //filenotfound block <- this one will be executed both for filenotfound, and wtfknows flavor
    (maybeTrue == wtfknows) ?
    {
        //executed only if the flavor/form of filenotfound in maybeTrue variable is "wtfknows"
    }
}


//we can also check it with explicit value condition
(maybeTrue) ? true -> {
    //explicit true block
}
| false -> {
    //explicit false block
}
| filenotfound -> {
    //explicit filenotfound block
}

//or ...this beast - implicit first (true) condition, explicit last one, skipping false
(maybeTrue) ? {
    //first value block, in this case true
}
| filenotfound -> {
    //explicit filenotfound. we don't need to handle false, so we omit it.
}

//this syntax would basically be first-class switch operator, done by pattern matching (? pattern matching operator on the value)
// () can contain expressions, of course
(maybeTrue == isTrue) ? { //this actually will work, as it will pattern-match ordered value subset, truncated to the smallest, so we handle true | false, our result is normal bool
    //true block
}
| //maybe i should forbid these unnamed ones... it's cool, but opens up room for unclear code
{
    //false block
}

//since we kinda do computation by in-place evals of chunks of code until a literal is left, which we display as output of the program,
//our loops basically mean "buffer resulting literals of repeated evaluation of enclosed chunk of code into one literal"

