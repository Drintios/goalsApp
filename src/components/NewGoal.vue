<template>
  <v-content class="dashboard">
    <v-container fluid>
      <picture-input
        ref="pictureInput"
        width="600"
        height="600"
        margin="16"
        accept="image/jpeg,image/png"
        size="10"
        buttonClass="btn"
      />
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          required
        />
        <v-text-field
          label="Description"
          v-model="description"
        />
        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'new-goal',
  data () {
    return {
      valid: false,
      name: '',
      description: ''
    }
  },
  components: {
    PictureInput
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log('Validated')
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
