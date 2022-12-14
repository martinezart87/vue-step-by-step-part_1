export default {
    // <slot /> - dodaje tekst z sekcji app-button
    template: `
        <div>What's up</div>
        <button 
            :class="{
                 'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                 'bg-blue-200 hover:bg-blue-400': type === 'primary',
                 'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                 'bg-gray-200 hover:bg-gray-400': type === 'muted',
                 'is-loading': processing
            }" 
            :disabled="processing">
            Hi there <slot />
        </button>
    `,

    props: {
        // type: String,
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false,
        }
    },

    // data() {
    //     return {
    //         processing: true
    //     };
    // }

    // mounted() {
    //     alert('hello');
    // }
}