<!-- template for the modal component -->
<template id="modal-template">
    <v-dialog value="true" persistent max-width="500">
        <v-toolbar dense>
            <v-toolbar-title>
                {{messageHeader}}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="$emit('close')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>

        <v-card>
            <v-card-text>
                {{messageBody}}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: [
            'messageHeader',
            'messageBody'
        ]
    }
</script>