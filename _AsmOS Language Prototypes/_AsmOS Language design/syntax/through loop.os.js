/* probably outdated */
/* through is a horrible keyword */

through([a .. z] => $letter){
    print($letter + "\n");
}

//code results in
/*
a
b
c
d
e
f
g
..etc, up to
z
*/

//can also do "staggered/compound/composite range"
through(char letter => [[a .. z] + [A .. Z]]){ //maybe I want an "append" operator different from "+" because i might want "+" to be "add each" member of list A to the corresponding member of list B
    print(letter + "\n");
    //the double bracket [[]] is actually mandatory, because [] is our list/range delimiter, and we are creating one range by appending
    //two ranges together.
}

/* code results in
a
b
c
d
e
f
g
..etc, up to
z
A
B
C
D
E
F
G
...etc, up to
Z
*/