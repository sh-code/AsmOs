/* up-to-date-for: 2020-12-17 */

os.dom {
    public enum eTag {
        txt, //linear text. no children, no position, just the data
        block, //container that can be freely positioned and sized and whatever is in it gets relayouted
        h1, h2, h3, h4, h5, h6, h7, h8, //html exists. html tags inside blocks behave as if the block was the whole containing window and layout accordingly
        div, //html elements inside html elements layout normally (still naturally restricted by the bottom-most block)
        p,   //maybe i should make better tag names instead of html
        span, //but html would be kinda backwards-compatible at least regarding thinking?
        b, i, u, //bold/italica/underlined
        a,
        img,
        button, input,
    }


    node (pub eTag tag, pub node[] children = null){
        //"private" in above default constructor (or any accessor modifier) denotes that these parameters
        //will carry over into the object as a property (of that access level) without having to re-declare and assign them
        pub str text; //public property - text of the node
        pub position = {
            vec2 topLeft = (0,0);
            vec2 bottomRight = (0,0);

            vec2 bottomLeft => (topLeft.x, bottomRight.y); //if they were with "=", they would only run during the constructor running (in-place init)
            vec2 topRight => (bottomRight.x, topLeft.y); //and retain the same value even after topLeft/bottomRight were changed.
            // with "=>" they are always executed/calculated on access from current values of topLeft/bottomRight
            //incidentally it always creates a new vector instance and throws it away when it falls out of scope/is dereferenced
            float width => topLeft.x - bottomRight.x;   //my screen coordinate could be highest x on the right and highest y on the top
                                                        //so that the direction of my length-logic was left->right top->down difference
            float height => topLeft.y - bottomRight.y;  //"=>" same here. "link expression into/onto value", not "calculate and assign result"
        };

        pub float area => position.width * position.height; //still in the constructor, still setting this thing's basic properties up

        pub string => return text; //what happens when you try to pull string out of the class (cast it to string, basically)
        pub void (string val) => text = val; //what happens when you try to push string into the class (set the class to a string value)

        pub node (string val){ //additional constructor. if the class is created with this, this should modify the data into the default constructor
                                //todo: i don't like thy syntax or block organization for this, or for the layering of constructors in general,
                                //it doesn't make sense yet. rework
            //let's assume val is pure string because it's supposed to be a text node (no formatting or children, only text)
            text = val;
            tag = txt;
            children = null;
            //this is how a pure text (non-element) node needs to be set up
        }
    }
}


main { //example usage
    root = node(block,
        node(div, [//a single var of the correct type (the div here, as param of the block node for node[] children) gets autocast to an array of that type containing single item (if necessary). this div is useless except to show this feature so that I don't forget about it
            //here it's a normal array now
                node(h1, "Title"),  
                node(p, "Paragraph 1"),
                node(p, "Paragraph 2"),
                node(img, "http://url-to-img.jpg")
            ]
        )
    );
    
    root.childen[0].children[maxId]; //would return the img. .maxId is array prop giving the id of the last element
    root.children.append(node(div, node("another div"))); 
}