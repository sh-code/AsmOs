/* probably outdated or nonsense */
/* notes to machine code representation(?) */

//this is a description of down to the metal representation of data in AsmOS, on the level of bits, basically.
//processor should (probably?) be 64bit, so that's our int size. "message" size (instruction with its parameters) would then be
//4ints, [instruction][address of param1][address of param2][address to write result to] or something like that.

//bitwise, the (64bit int) values should map to:
// 0 - null, false, or number zero or character zero (depending on the type). also a type identifier of pointer
// 1 - true, number 1, character for number 1 (depending on the type). also a type identifier of boolean
// 2 - number 2, character for number 2, type identifier of int64
// ...etc etc, up to 9. that should (ideally), as type identifiers, cover all the first-class (elementary) data types, so that from
// 10 - we go for custom types


// variable representation in memory: [type][value]
// meaning, pointer would be [0 int], where the int is the actual memory address as int64
// boolean would be [0 1] for true, [0 0] for false
// int would be [2 10] for integer of value 10