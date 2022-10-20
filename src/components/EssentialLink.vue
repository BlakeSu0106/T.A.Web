<template>
  <q-expansion-item :label="mainTitle">
    <q-list>
      <q-item
        clickable
        tag="a"
        :to="item.to"
        @click="setTitle(item.title)"
        v-for="item in list"
        :key="item"
        :active="item.title === store.PageName"
      >
        <q-item-section v-if="item.icon" avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "../stores/store";

export default defineComponent({
  name: "EssentialLink",
  setup() {
    const store = useStore();
    return {
      setTitle(title) {
        store.PageName = title;
      },
      store
    };
  },
  props: {
    mainTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      required: false,
      default: () => [
        {
          title: "",
          caption: "",
          to: "",
          icon: "",
        },
      ],
    },
  },
});
</script>
