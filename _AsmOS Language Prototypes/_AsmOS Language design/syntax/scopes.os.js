// scope/namespace/block thingy can be:
// - ISOLATED (pure function):
// [visibility] [returnType] [name] ([paramList]) => { //code// }
pub str getName (client) => {   //this is an isolated scope so all params are provided byval 
                                //(unless explicitly stated? do i allow exceptions?)
    return client.firstName + " " + client.lastName;
}
//p.s. the "client" in params is... autotyped/nametyped variable. if a type "client" exists, and what
//is expected is a "type varName" or "varname" (that allows in-place declaration), and all that is provided
//is single identifier token, then that token in its home scope is a variable of that name, of that type

//- NORMAL/CASCADING (works how namespaces/classes/functions/blocks scopes work in normal declarative)
//  languages
// [visibility] [(return) type missing==null==namespace/class type block] [(namespaceclass) name]
pub clientDB {
    priv str lastCommand;

    //[vis] [ret] [name] ([params]) [name] ([paramList]){ //code// }
    pub void setName (client, str newName){
        //lefthand side - set generator containing n (in this case two items)
        // - pointers to client name
        //.split returns its own set with m items, and then first n items of that set
        //get assigned (or sent, if they're functions?) to the values pointed at by 
        //the items of the lefthand generated set.
        [client.firstName, client.lastName] = newName.split([',', ' ']);
        //we still have direct access to clientDB.lastCommand because...
        lastCommand = "setName({client.id}, {newName})"; // ...cascading scope "inherits" 
        //all the variables from the upper scopes, or rather, a scope's variables
        //"sink" to the "lower" (child) scopes (unless they're an isolated (pure function) scooe, in which case
        //only the vars passed as params get inside the function, and only on byval basis)

        //p.s. regarding the set assignment... consider:
        str[] r = 
        [(s)=>{return "i:"+s}, (n){return "n:"+s}] <= newName.split([',', ' ']);

        console.write(r); //assuming newName is = "John Doe, Jr."
        //outputs
        // ["i:John", "n:Doe"]
        // set/list of two strings equal to the results of their corresponding two generator functions
    
        //todo: this is a separate feature but since i just realized it...
        //the above means that if i do
        str[] p = [(s)=>{return s.len() + ":"}..] <= newName.split([',', ' ']);
        //the first set generated, the one with function (target set)
        //is defined as a set with 0 position being that function,
        //and it infinitely repeating.
        //therefore when newName is piped into it, what falls out is all the items
        //that are not procedural (the two items of data from newName.split, we ignore the remaining
        //infinity-2 items of the lazily evaluated generator)
        //so then, for "Lord Argobest Hilarious The Third, King of Scotland"
        console.write(p);
        //gives us a beautiful set of processed strings:
        /*
            [
                ":Lord", 
                ":Argobest", 
                ":Hilarious", 
                ":The", 
                ":Third", 
                ":King", 
                ":of", 
                ":Scotland"
            ]
        */

        //now funny thing, I think, already established rules even allow me
        //to inject an iteration variable in there:
        str[] itGen => [{
            int i;
            (str){return (i++) + ": " + str} // (str)=>{return (i++) + ": " + str} WOULD NOT WORK, because => indicates isolated block, no access to "i" var
            //(that also btw means that as we define it up there, the i is local to itGen, outside can't see it)
        }..]; //this probably looks weird and maybe even is...
        //this expression defines a generator of an infinite sequence of pointers
        //to the block defined as literal inside, which
        // creates private variable i, and defines a str=>str conversion function
        // (non-isolated block) which can then increment the i, which is
        // persistent for the lifespan of the block (which ends when last pointer to the block is lost)

        //so now when we feed our "Lord Argobest Hilarious The Third, King of Scotland"
        str[] itGenEval = itGen <= newName.split([',', ' ']);
        //the generator applies along the whole literal data and results in
        console.write(itGenVal);
        /*
            [
                "0:Lord", 
                "1:Argobest", 
                "2:Hilarious", 
                "3:The", 
                "4:Third", 
                "5:King", 
                "6:of", 
                "7:Scotland"
            ]
        */

    }
}