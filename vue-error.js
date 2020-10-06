Vue.component('error', {
    data() {
        return {
            errText: '',
        }
    },

    methods: {
        setError(error) {
            this.errText = error;
        }
    },

    computed: {
        isVisible() {
            return this.errText !== '';
        }
    },

    template: `
    <div class="errModal" v-if="isVisible">
        <p class="errMsg">
            <button class="closeErrBtn" @click="setError('')">&times;</button>
            {{errText}}
        </p>
    </div>`,
});
