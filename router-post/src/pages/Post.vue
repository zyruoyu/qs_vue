<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading
    </div>
    <div class="error" v-if="error">
      {{error}}
    </div>
    <transition name="slide">
      <div v-if="post"
       class="content">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </transition>
  </div>
</template>
<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter { 
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
<script>
  import { getPost } from '@/api'
  export default { 
    data() {
      return {
        loading: false,
        error: null,
        post: null
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.error = this.post = null
        this.loading = true
        getPost(this.$route.params.id, 
        (err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        })
      }
    }
  }
</script>
