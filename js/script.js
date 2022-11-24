const { createApp } = Vue 

const app = createApp ({
    data () {
        return {
            toDoList: [
                {
                    text: "Testo cose da fare",
                    done: false,
                    cat:"Casa",
                    created: new Date("2022-11-23"),
                    completed: "null"
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    cat:"Lavoro",
                    created: new Date("2022-11-23"),
                    completed: ""
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    cat:"Pagamenti",
                    created: new Date("2022-11-23"),
                    completed: ""
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    cat:"Generico",
                    created: new Date("2022-11-23"),
                    completed: ""
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    cat: "Hobby",
                    created: new Date("2022-11-23"),
                    completed: ""
                }
            ],
            newToDoList: {
                    text:"",
                    cat:""
                }
        }
    }, 
    methods: {

        // qui vengono aggiunte altre cose da fare
        onAddClick () {
            this.toDoList.push({
                ...this.newToDoList,
                done: false,
                created: new Date(),
                completed: ""
            }), 
            this.newToDoList.text = "",
            this.newToDoList.cat= ""
        },

        clickDelete (el) {
            const warning = confirm("Confermi di voler cancellare il dato ?")

            if (warning) {
                this.toDoList.splice(el, 1)
            }
            
        }
        
    }
}).mount("#app")
