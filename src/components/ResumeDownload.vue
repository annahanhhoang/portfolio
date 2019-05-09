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
                    { id: 'Word', icon: 'mdi-file-word-box', link: 'https://drive.google.com/uc?export=download&id=1kbHY8QejWVBgrCm6Ru67GDy2Dizr4spx' },
                    { id: 'PDF', icon: 'mdi-file-pdf-box', link: 'https://drive.google.com/uc?export=download&id=13P2xBD7LZQw0EglMmfQMmZjTp90ls1Yt' },
                ],
            }
        }
    }
</script>