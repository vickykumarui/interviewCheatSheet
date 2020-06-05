/*
factory is a place where we create multiple things
say we have a application in which we have lot of class and many time we want to crete it object so each time we do it using new key word.
Factory is a place which we can use to create all those object despite of doint it at many places
Example
*/
function student(name){
    this.name = name;
}

function athelete(name){
    this.name = name;
}

function actor(name){
    this.name = name;
}


function factory(name, type){
    
        switch(type){
            case 1:
                return new student(name);

            case 2:
                return new athelete(name);
            
            case 3:
                return new actor(name);
        }
   

}



