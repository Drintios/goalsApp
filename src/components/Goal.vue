<template>
  <v-content>
    <v-container fluid class="px-0 py-0">
      <v-flex align-center xs12>
        <v-card>
          <v-card-media :src="goal.avatar" height="200px" />
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                {{goal.title}}
              </h3>
              <div>
                {{goal.subtitle}}
              </div>
            </div>
          </v-card-title>
          <v-card-text>
            {{progress}}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile avatar :key="item.title">
            <v-list-tile-action>
              <v-checkbox v-model="item.completed" @change="updateProgress(items)"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="index" v-if="index < items.length - 1" />
        </template>
      </v-list>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'goal',
  data () {
    return {
      progress: '',
      goal: {
        id: 1,
        avatar: '/static/timeIsMoney.jpg',
        title: 'Create money management app',
        subtitle: 'Create app for money management'
      },
      items: [
        {
          id: 0,
          completed: true,
          avatar: '/static/timeIsMoney.jpg',
          title: 'Setup dev env',
          subtitle: 'Do setup for development enviroment, it will be vuejs.'
        },
        {
          id: 1,
          completed: false,
          avatar: '/static/bills.jpeg',
          title: 'Create first page (Dashboard)',
          subtitle: 'Start the enviroment and develop the first page of the app which will be the Dashboard.'
        },
        {
          id: 2,
          completed: false,
          avatar: '/static/taxes.jpg',
          title: 'Work on the details page for each task',
          subtitle: 'Create details page with demo content.'
        }
      ]
    }
  },
  methods: {
    calcProgress (items) {
      let progress = 0
      for (var i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.completed) {
          progress += 1
        }
      }

      let progressString = progress + ' out of ' + items.length + ' tasks completed.'

      return progressString
    },
    updateProgress (items) {
      this.progress = this.calcProgress(items)
    }
  },
  mounted () {
    this.updateProgress(this.items)
  }
}
</script>
