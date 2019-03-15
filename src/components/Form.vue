
<template>
  <div class="container">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Add User</h3>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <md-field>
              <label>Name</label>
              <md-input v-model="name"></md-input>
            </md-field>
          </div>
          <div class="form-group">
            <md-field>
              <label>Email</label>
              <md-input v-model="email"></md-input>
            </md-field>
          </div>
          <!-- <button type="button" @click="setName(name)" class="btn btn-primary">SaveName</button> -->
          <md-button class="md-raised" @click="setName(name)">SaveName</md-button>
          <!-- <button type="button" @click="setEmail(email)" class="btn btn-primary">SaveEamil</button> -->
          <md-button class="md-raised" @click="setEmail(email)">SaveEamil</md-button>
        </form>
      </div>
    </div>
    <div class="panel panel-success">
      <div class="panel-body">
        My Name is : {{ storeName }}
        <br>
        My Email is : {{ storeEmail }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      storeEmail: 'getEmail',
      storeName: 'getName'
    })
  },
  methods: {
    setName (name) {
      this.$store.commit('setName', name)
    },
    setEmail (email) {
      this.$store.commit('setEmail', email)
    }
  },
  data () {
    return {
      email: '',
      name: ''
    }
  }
}
</script>

<style scoped>
/* .md-input {
  background-color: lightblue;
} */
.md-field {
  width: 200px;
  margin: auto;
}
.form-group{
    padding-top:5px;
    padding-bottom:5px;
}
.panel-title 
{
    color:white;
}
.panel-body{
    color:white;
}
</style>
