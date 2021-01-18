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
        client.firstName, client.lastName = newName.split([',', ' ']);
        //we still have direct access to clientDB.lastCommand because...
        lastCommand = "setName({client.id}, {newName})"; // ...cascading scope "inherits" 
        //all the variables from the upper scopes, or rather, a scope's variables
        //"sink" to the "lower" (child) scopes (unless they're an isolated (pure function) scooe, in which case
        //only the vars passed as params get inside the function, and only on byval basis)
    }
}