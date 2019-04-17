<template>
    <div class="resume">
        <span class="mr-1" v-for="item in resumes" :key="item.id">
            <a :href="item.link">
                <v-icon>{{item.icon}}</v-icon>
            </a>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                resumes: [
                    { id: 'Word', icon: 'mdi-file-word-box', link: 'https://drive.google.com/uc?export=download&id=1j27KYnrfoi4A32ujL0g9tPFqu9j8v6fF' },
                    { id: 'PDF', icon: 'mdi-file-pdf-box', link: 'https://drive.google.com/uc?export=download&id=1q7vYHswrtYEOef2Z1_GPsxu-0dlagRlI' },
                ],
            }
        }
    }
</script>