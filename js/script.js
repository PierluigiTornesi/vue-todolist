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
        }
    },
})

app.mount("#app");