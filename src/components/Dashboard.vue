<template>
  <v-content class="dashboard">
    <v-container fluid class="px-0 py-0">
      <v-list two-line>
        <v-subheader>
          {{ header }}
        </v-subheader>
        <v-divider />
        <v-list-tile avatar to="new-goal">
          <v-list-tile-avatar>
            <img style="width: 50%;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NiA0OTEuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS44NiA0OTEuODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY1LjE2NywyMTEuNjE0SDI4MC4yNDVWMjYuNjkxYzAtOC40MjQtMTEuNDM5LTI2LjY5LTM0LjMxNi0yNi42OXMtMzQuMzE2LDE4LjI2Ny0zNC4zMTYsMjYuNjl2MTg0LjkyNEgyNi42OSAgICBDMTguMjY3LDIxMS42MTQsMCwyMjMuMDUzLDAsMjQ1LjkyOXMxOC4yNjcsMzQuMzE2LDI2LjY5LDM0LjMxNmgxODQuOTI0djE4NC45MjRjMCw4LjQyMiwxMS40MzgsMjYuNjksMzQuMzE2LDI2LjY5ICAgIHMzNC4zMTYtMTguMjY4LDM0LjMxNi0yNi42OVYyODAuMjQ1SDQ2NS4xN2M4LjQyMiwwLDI2LjY5LTExLjQzOCwyNi42OS0zNC4zMTZTNDczLjU5LDIxMS42MTQsNDY1LjE2NywyMTEuNjE0eiIgZmlsbD0iIzQyNDI0MiIvPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Add new goal
            </v-list-tile-title>
            <v-list-tile-sub-title>
              add new goals.
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
        <template v-for="(item, index) in items">
          <v-list-tile avatar :key="item.id" :to="'goal/' + item.id">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="item.title" v-if="index < items.length - 1"></v-divider>
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
      header: 'Goals',
      items: [
        {
          id: 0,
          avatar: '/static/timeIsMoney.jpg',
          title: 'Create money management app',
          subtitle: 'Create app for money management - 3 goals completed out of 10'
        },
        {
          id: 1,
          avatar: '/static/bills.jpeg',
          title: 'Pay bills',
          subtitle: 'Pay all the monthly bills - 1 goals completed out of 5'
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

<style scoped>
  .dashboard >>> .list__tile__avatar .avatar {
    background-color: white;
  }
</style>
