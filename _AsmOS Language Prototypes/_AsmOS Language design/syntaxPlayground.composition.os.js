/* heavily outdated */

/*
(assume following types already exist)
Transform
Mesh
Renderer
Collider
Rigidbody
*///the equals here is not correct, it should be =>, but i want js parser to autocomplete them for me so that it doesn't fight me
var Transform = {}, Mesh = {}, Renderer = {}, Collider = {}, Rigidbody = {};


//creating new (empty) Entity (object/scope/function) - all that it has is identity
var bgDecor => {};
bgDecor +=> new Transform({1000, 1000, 0}, {0, 0, 0}, {1, 1, 1}); //bgDecor now has position, rotation and scale. {} create anonymous scopes/objects that fit definition of Vector3, so type checking works out
bgDecor +=> new Mesh('mountains.fbx'), new Renderer(); //creates first a mesh component that loads data from asset, then Renderer
bgDecor +=> new Collider(this.Mesh); //...except now it's not a a decor anymore, since it collides
//notice the "this" - it refers to the bgDecor itself, because => is "assignment INTO the left-hand side scope, to on the right-hand side, "this" changes"
bgDecor +=> new Mesh('clouds_for_mountains.fbx'); //now our decor has two meshes, and the single renderer renders them both by default
//we can now component-type-match it with any scope that has the same components as "equal", 
//if the scope B has additional components then A is "subset" of B, and if B misses some components, A is superset of B.
//if they both miss some components as well as have additional ones, they are false component-type-match, but can be both
//cast to common lower component type.

//we can now also access each specific mesh by array indexing
bgDecor.Mesh[0].vertices; //contains vertices for the first added mesh
bgDecor.Mesh[1].vertices; //contains vertices for the second added mesh

bgDecor -=> Mesh; //remove (all) mesh components from decor.

//this is why it's nice to have scopes named, so we can access them more easily
bgDecor +=> groundMesh = new Mesh('mountains.fbx'); //we are adding scope named groundMesh of type Mesh
bgDecor +=> cloudsMesh = new Mesh('clouds_for_mountains.fbx'){}; //this is a more explicitly decorated version to make it clear we're adding scope to bgDecor
//the ending brackets are basically "empty custom override code for this mesh", meaning it's a non-sublassed mesh
bgDecor +=> forestMesh = new Mesh('tree.fbx', 500){
    public Mesh(string modelFile, prop int numberOfTrees):parent(modelFile){}; //override for constructor that adds numoftrees property
    //no need to fill it into "inside variable", the numberOfTrees is automatically assigned as class member since it has "prop" keyword
    //"prop" forces the declaration to become "property", persistent variable, for the scope in which it is

    public override cast Vector3[] getVertices(){ //override signifies that this overrides the same-named function from parent
        //"cast" means that this function is also used to perform default cast to Vector3[], ON TOP OF being callable as a named function
        //(function like that must be parameterless, or have all parameters optional)
        //standard getVertices returns just the mesh, but ours will first duplicate them to create a single/mesh forest
        //(this is actually a stupid idea, rendering-wise, but i want to demonstrate ad-hoc subclassing/overloading)
        forest = new Vector3[]; //allocates empty collection of Vertices
        loop(int c=0, c<numberOfTrees, c++){
            float rot = new Random(0, 360); //creates new random object, passes its constructor range from 0 to 360, 
            //and then runs public int type function on it (if the class contains it, otherwise we get exception)
            forest.Add(
                vertices.forEach(v => return v.RotateAround(Vector3.zero, Vector3.up, rot)) //foreach is linq-like, creates collection, which gets added to forest
            )//this single call rotates the whole tree around by rot degrees, and adds it to the forest mesh
        }//after this loop, our forest mesh is complete

        return forest; //so we can return it. Mesh's default getVertices successfully overloaded. and since renderer uses to know what to render,
        //it's automatically going to draw as it should
    }//and now I need a way to promote the forestMesh to class, derived from Mesh
}

//wooh. and after this diversion, we can now access all three meshes by name
bgDecor.Mesh[cloudsMesh]; //access the mesh via the array of Mesh components
bgDecor.cloudsMesh; //or via bgDecor entity's variable/property
//and we can remove it via ...i'm probably gonna call it "reflecion operators. and it's gonna be"
bgDecor -=> cloudsMesh; //"reflection remove"
bgDecor +=> stormMesh = new Mesh('storm_over_mountains.fbx'); //and this is "reflection add"

//and however renderer renders the meshes, all the time, it can just go
bgDecor.Mesh.forEach(m => renderMesh(m));