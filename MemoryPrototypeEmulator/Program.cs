using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryPrototypeEmulator
{
    class Program
    {
        private static string currentInstructionASM = "";
        private static ulong[] instructionRegister = new ulong[4]; //todo: for now, this is 64bit keyword, not 8bit, just for simplicity
                                                                   //therefore one instruction (along with parameters) is 256 bits wide. that's therefore our (minimum) cpu<->memory bus width
        private static ulong instructionPointer = 0;


        private static Memory mem;

        static void Main(string[] args)
        {
            mem = new Memory(1, 1080, 1900);

            ConsoleShowInstruction(
                    instructionRegister[0],
                    instructionRegister[1],
                    instructionRegister[2],
                    instructionRegister[3]
            );

            while ("0 0 0 0" != (currentInstructionASM = Console.ReadLine()))
            {
                //parsing and executing instruction 
                instructionRegister =
                    currentInstructionASM.Split(new char[] { ' ' }, 4, StringSplitOptions.None)
                    .Select(strInt => ulong.Parse(strInt)).ToArray();

                ConsoleShowInstruction(
                    instructionRegister[0],
                    instructionRegister[1],
                    instructionRegister[2],
                    instructionRegister[3]
                );

                //actually execute the instruction
                executeInstruction();
            }
            Console.Write("HALT.");
            Console.ReadLine(); //just to keep us the console window
        }

        private static void executeInstruction()
        {
            /*==INSTRUCTION LIST==
                0 - load from memory (format: 0 [page] [yLoc] [xLoc] <- actually
                1 - store in memory (format: 1 [page] [yLoc] [xLoc] [value])
                2 - output/display on screen (format: 2 [page] [yLoc] [xLoc] )
             */

            switch (instructionRegister[0])
            {
                case 0:
                    //mem.Tick(0, 0,  )
                break;
            }
        }

        //helper functions
        public static void ConsoleShowInstruction(ulong i, ulong p1, ulong p2, ulong res)
        {
            Console.Write(i.ToString() + " " + p1.ToString() + " " + p2.ToString() + " " + res + " > ");
        }
    }
}
