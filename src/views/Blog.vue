<template>
    <v-layout class="blog-page">
        <v-flex xs12 class="py-0">
            <h1>My stories</h1>
            <v-data-iterator :items="posts"
                             :rows-per-page-items="rowsPerPageItems"
                             :pagination.sync="pagination"
                             content-tag="v-layout"
                             hide-actions
                             row
                             wrap
                             fill-height>

                <template v-slot:item="props">
                    <v-flex xs12
                            sm6
                            md4
                            lg3>
                        <v-card>
                            <img v-if="props.item.featured_image"
                                 :src="props.item.featured_image"
                                 alt="">

                            <v-card-title primary-title>
                                <router-link :to="'/blog/' + props.item.slug"><h2>{{ props.item.title }}</h2></router-link>
                            </v-card-title>

                            <v-card-text>
                                <p>{{ props.item.summary }} <router-link :to="'/blog/' + props.item.slug">See more</router-link></p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
        </v-flex>
    </v-layout>
</template>

<script>
    import Butter from 'buttercms'
    const butter = Butter('5a9ba7ca3d732aa1a1be900fc8c81d38f6937d73')

    export default {
        data() {
            return {
                page_title: 'Blog',
                posts: [],
                rowsPerPageItems: [4, 8, 12],
                pagination: {
                    rowsPerPage: 4
                },
            }
        },
        methods: {
            getPosts() {
                const vm = this

                butter.post.list({
                    page: 1,
                    page_size: vm.pagination.rowsPerPage
                }).then(res => {
                    vm.posts = res.data.data
                })
            }
        },
        created() {
            this.getPosts()
        }
    }
</script>