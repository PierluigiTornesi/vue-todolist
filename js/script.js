const {createApp} = Vue;

const app = createApp({
    data(){
        return{
           todo:{
            text: "",
            done: false,
           },
           todolist:[], 
        };
    },
    created(){
        
    },
    methods: {
        addToDo: function(){
            this.todolist.push({...this.todo})
            this.todo.text = "";
        },
        removeTodo: function(index){
            this.todolist.splice(index,1)
        }
    },
})

app.mount("#app");