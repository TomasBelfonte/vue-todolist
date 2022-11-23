const { createApp } = Vue 

const app = createApp ({
    data () {
        return {
            toDoList: [
                {
                    text: "Testo cose da fare",
                    done: false,
                    category:"Casa"
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    category:"Lavoro"
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    category:"Pagamenti"
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    category:"Generico"
                },
                {
                    text: "Testo cose da fare",
                    done: false,
                    category:"Hobby"
                }
            ]
        }
    },
    methods: {
        
    }
}).mount("#app")
