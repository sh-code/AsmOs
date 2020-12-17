using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CPUEmulatorKISS
{
    public class CPU
    {
        public ulong returnVal = 0;

        public void Tick(ulong instruction, ulong param1addr, ulong param2addr, ulong returnAddr)
        {
            switch (instruction)
            {
                case 0: //noop
                break;

                case 1: //enter (nesting) section
                break;

                case 2: //exit (nesting) section
                break;

                case 3: // jump
                break;

                case 4: //jump to returnaddr if val at param1addr is smaller than val at param2addr
                break;
            }
        }
    }
}
