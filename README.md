# AsmOs
A theoretical language with the flexibility and dev looseness of JS, specificity of C# and clarity and brevity and syntactical universality of... AsmOS?
Oh, and native-ness of C/asm, for a good measure, since the syntax tree of a program should be compilable to directly
runnable machine code just by reading and appending leaf values (hex codes/instructions of tokens)

(Might or might not require the development of new-paradigm CPU/GPU and RAM. mainly RAM. But that's the very last step)

[Link to youtube playlist of lectures serving as inspirations](https://www.youtube.com/watch?v=8JOD1AQGqEg&list=PL48i-JtES9DPwPpvD5SIRoJtedCo6cHmA&index=2)

This repo is to store my experiments and thoughts on the way of making this into maybe a thing at least in an interpreted/vm way.

[Current most up-to date syntax/usage showcase is in fibonacci here](https://github.com/sh-code/AsmOs/tree/main/_AsmOS%20Language%20Prototypes/_AsmOS%20Language%20design/examples)
or in [libs/dom.os.js](https://github.com/sh-code/AsmOs/blob/main/_AsmOS%20Language%20Prototypes/_AsmOS%20Language%20design/libs/dom.os.js)

Those two guys are trying to be the best and most ideal example of syntax, formatting, programming style, and everything, that I was able to come up with currently.
Except the overabundance of comments which wouldn't  show in actual program and are only so bountiful here because they are trying to explain syntactical and semantical features of the language.

Duplicate extension .os.js is only because JS syntax highlighting relatively nicely applies to this language. actual extension would just be .os.
Or .os for pure source code files (text which we know is program in AsmOS) and .asm.os for hybrid text/already parsed and written out machine code (?)
Basically the .os asks you whether you want to give it the permission to even compile (and then run), whereas asm.os has the runnable part saved in itself so it just launches like a normal program.
