import inquirer from "inquirer";
let todos  : string[]  = [ ]
let loop  = true

while(loop) {
    const answere : { 
        Todo : string ,
        addmore:boolean
    } = await inquirer.prompt([
        {
            type : "input",
            name : "Todo" ,
            message : "what do you wnat to add ? : "

        },
        {
            type : "confirm",
            name : "addmore" ,
            message : "Do you wnat to add more ? : ",
            default : false
        }

    ])
    const {Todo , addmore } = answere 
    loop  = addmore 

    if(Todo){
        todos.push(Todo)

    }
    else{
        console.log("Envalid Input")
    }

}

if(todos.length > 0 ){
    console.log("Your todo list is : ")
    todos.forEach(todo =>{
        console.log(todo)
    })
}
else{
    console.log("No Todos found")
}








