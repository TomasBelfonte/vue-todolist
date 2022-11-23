const { createApp } = Vue 

const app = createApp ({
    data () {
        return {
            toDoList: [
                {
                    text: "Testo",
                    done: false,
                    category:"Casa"
                },
                {
                    text: "Testo",
                    done: false,
                    category:"Lavoro"
                },
                {
                    text: "Testo",
                    done: false,
                    category:"Pagamenti"
                },
                {
                    text: "Testo",
                    done: false,
                    category:"Generico"
                },
                {
                    text: "Testo",
                    done: false,
                    category:"Hobby"
                }
            ]
        }
    },
    {
        methods: {

        }
    }
}).mount("#app")
