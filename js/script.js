const {createApp} = Vue;

const app = createApp({
    data(){
        return{
           todo: "",
           todolist:[], 
        };
    },
    created(){
        
    },
    methods: {
        addToDo: function(){
            this.todolist.push(this.todo)
        },
        removeTodo: function(index){
            this.todolist.splice(index,1)
        }
    },
})

app.mount("#app");