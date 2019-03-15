<template>
  <div class="test">
    <h1>This is a test page that I'm not doing anything with</h1>
    <Form />
  </div>
</template>
<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'form',
  components: {
    Form
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
