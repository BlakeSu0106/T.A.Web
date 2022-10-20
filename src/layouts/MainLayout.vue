<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar> </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { onMounted, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useStore } from '../stores/store'
import { useRouter } from 'vue-router'

const linksList = [
  {
    mainTitle: '建立',
    id: 'tenant',
    list:[
      {
        title: '建立',
        caption: '建立新內容',
        icon: 'build',
        to: '/create',
      },
      {
        title: '列表',
        caption: '查看列表',
        icon: 'list',
        to: '/list',
      }
    ]
  }
]

export default {

  components: {
    EssentialLink
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const route = useRouter();

    onMounted(() => {
      
    })
    return {
      store,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
};
</script>
