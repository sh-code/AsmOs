/* probably complete nonsense */

os.runtime {
    pub code(){
        //describes the tree structure of the assembled program
        pub declaration(str label, mem data){
            pub int hexAddr;
            pub prot label, data; //prot - protected - property invisible from outside. pub prot - public protected - property visible from outside but readonly
        }

        pub prot declaration[] declarations;


        pub int add(declaration toAdd){
            declarations.add(toAdd);
            return toAdd.hexAddr; //return hex address where this declaration starts
        }
    }
}