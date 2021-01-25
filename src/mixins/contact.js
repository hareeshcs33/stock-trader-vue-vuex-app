export default {
    data() {
        return {
            username: '',
        }
    },
    computed: {},
    created() {
        console.log('created contact.js');
    },
    methods: {
        submitContactForm() {
            console.log("username " + this.username);
            this.username = '';
        }
    },
    components: {},
};