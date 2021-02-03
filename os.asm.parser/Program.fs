// Learn more about F# at http://fsharp.org

open System

let pm word = 
    match word with
    | "hi" -> "greeting"
    | "hi!" -> "enthusiastic greeting"
    | "hello" -> "formal greeting"
    | _ -> "something else"

[<EntryPoint>]
let main argv =
    printfn "Hello World from F#!"
    let response = Console.ReadLine()
    printfn "%s" (pm response)
    Console.ReadLine()
    0 // return an integer exit code
