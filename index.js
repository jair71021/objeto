/*const obj={
    name:{
        value:'',
        placeholder:'ingresa'
    },
    app:{
        value:'juan',
        
        placeholder:'nombre'
    }

}
const  fun =(obj) =>{
    const no={...obj,name:{value:'hola'},app:{...obj.app,placeholder:'name'}}
    console.log(no);
}
fun(obj)
*/




/*const obj ={
    nom:'nuevo',
    nom:'rol', 
    app:'aqui'
}

const nv ={...obj,app:'suarez',nom:'jair'}

console.log(nv)


const nu ={
    name:{
        value:' rol',
        placheloder:' mi nombre'
    }
}

const nv ={...nu,name:{...nu.name , clase:'a'}}
console.log(nv);*/




/*
const operaciones ={
    sumar: ({a,b }) => a+b,
    restar: ({a,b}) => a-b,
    multi: ({c,d}) => c*d
    
    
}



console.log(operaciones.sumar({a:5, b:7}));
console.log(operaciones.restar({a:5, b:7}));
console.log(operaciones.multi({c:5, d:7}));
*/
/*
const suma = ({a,b }) => a+b;
const resta =({a,b}) => a-b;
const por=({c,d})=> c*d;
const operaciones ={
    sumar: suma,
    restar: resta,
    multi: por
    
    
}
console.log(operaciones.sumar({a:5, b:7}));
console.log(operaciones.restar({a:5, b:7}));
console.log(operaciones.multi({c:5, d:7}));
*/


const miHook = (initiaValue) =>{
    let values = initiaValue;
    const setValues =( fun )=>{
        values= fun ()
    }

    return [ values,setValues];
}


const [values,setValues] = miHook({name:'jair'});
setValues((values)=>{
    console.log(values);
    return values;

})

