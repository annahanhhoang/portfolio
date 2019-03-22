<template>
    <v-navigation-drawer v-model="drawer"
                         permanent>
        <v-avatar size="150">
            <img src="@/assets/avatar.jpg">
        </v-avatar>

        <v-divider></v-divider>

        <v-list>
            <v-list-tile v-for="item in items"
                         :key="item.title"
                         @click="">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                items: [
                    { title: 'Home', icon: 'home' },
                    { title: 'About', icon: 'question_answer' }
                ],
                right: null
            }
        }
    }
</script>