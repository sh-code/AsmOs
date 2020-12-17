using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryPrototypeEmulator
{
    class Memory //1 command bit (0 = mode: load/1 = mode: save value), 64 64 64 bits address, 64 bits input/output value
    {
        public const int 
            maxPageCount = 10, 
            maxPageHeight = 1080, 
            maxPageWidth = 1900;

        private List<long[,]> mem;
        //current active frame (/page, same thing)
        public ulong page;
        //current "window" into the frame - has topleft y x and bottomright y x. this is the part of memory which
        public ulong wndStartY, wndStartX, wndEndY, wndEndX;

        public Memory(int pageCount, ulong pageHeight, ulong pageWidth)
        {
            mem = new List<long[,]>(pageCount);

            for (int pg = 0; pg < mem.Count; pg++)
                mem[pg] = new long[pageHeight, pageWidth];
        }

        /// <summary>
        /// This is what executes either a store or retrieve instruction and in case of store returns nothing (the line for feeding the
        /// actual value to store, on the hardware level
        /// and in case of retrieve returns current value at requested memory location
        /// </summary>
        /// <returns></returns>
        public void Tick(bool mode, int pg, ulong yLoc, ulong xLoc, ref long val)
        {
            if(false == mode)
            {// mode 0 - load value
                val = mem[pg][yLoc, xLoc];
            }
        }
    }
}
