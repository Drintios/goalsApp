<template>
  <v-content>
    <v-container fluid class="px-0 py-0">
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
          <v-list-tile avatar v-else :key="item.id" :to="'goal/' + item.id">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      items: [
        {
          header: 'Goals'
        },
        {
          id: 0,
          avatar: '/static/timeIsMoney.jpg',
          title: 'Create money management app',
          subtitle: 'Create app for money management - 3 goals completed out of 10'
        },
        {
          divider: true,
          inset: true
        },
        {
          id: 1,
          avatar: '/static/bills.jpeg',
          title: 'Pay bills',
          subtitle: 'Pay all the monthly bills - 1 goals completed out of 5'
        },
        {
          divider: true,
          inset: true
        },
        {
          id: 2,
          avatar: '/static/taxes.jpg',
          title: 'Pay income taxes',
          subtitle: 'Pay income taxes - 0 goals out of 1'
        }
      ]
    }
  }
}
</script>
