<template>
  <q-page class="flex">
    <div id="q-app" style="min-height: 100vh">
      <div>
        <q-tabs v-model="tab" class="text-grey" active-color="primary">
          <q-tab name="tenant" label="租戶" />
          <q-tab name="corporation" label="集團" />
          <q-tab name="company" label="公司" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tenant"> </q-tab-panel>
          <q-tab-panel name="corporation"> </q-tab-panel>
          <q-tab-panel name="company">
            <div class="q-ml-lg q-gutter-y-sm column" style="max-width: 510px">
              <q-input
                class="justify-end"
                outlined
                label="公司名稱"
                v-model="companyName"
              >
              </q-input>
            </div>
            <div class="q-ml-lg q-mt-md" style="max-width:260px">
              <p>公司敘述</p>
              <q-input
                v-model="description"
                autogrow
                outlined
                filled
              />
            </div>
            <div class="q-ml-lg q-mt-md" style="max-width:260px">
              <p>隸屬集團</p>
              <q-select
                dense
                outlined
                option-value="id"
                option-label="name"
                :options="options"
                v-model="selected"
              >

              </q-select>
            </div>
            <div class="q-ml-lg q-mt-md">
              <p>渠道類型</p>
              <q-checkbox v-model="channelType" val="Web" label="Web" />
              <q-checkbox v-model="channelType" val="Line" label="Line" />
              <div v-if="isLine()">
                <p>Line相關設定</p>
              </div>
            </div>
            <div class="q-ml-lg q-mt-md" style="max-width: 230px">
              <p>後台管理者帳號：</p>
              <q-input outlined dense v-model="account"></q-input>
              <p class="q-mt-lg">後台管理者密碼：</p>
              <q-input
                outlined
                dense
                type="password"
                v-model="password"
              ></q-input>
              <p class="q-mt-lg">後台管理者信箱</p>
              <q-input
                outlined
                dense
                type="email"
                v-model="email"
              />
            </div>
            <div class="q-ml-lg q-mt-md">
              <q-btn
                color="primary"
                label="建立公司"
                unelevated
                class="q-mr-lg"
                @click="submit()"
              />
              <q-btn
                color="white"
                label="重置"
                text-color="grey"
                unelevated
                outline
                @click="clearData()"
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useStore } from "../stores/store";
import companyApi from "../apis/companyApi.js"
import corporationApi from "../apis/corporationApi.js"
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const route = useRouter();
    const channelType = ref([]);
    const companyName = ref("");
    const store = useStore();
    const password = ref("");
    const account = ref("");
    // 後續在onMounted透過API取得集團列表
    const options = ref(["A", "B"]);
    const selected = ref(null);
    const corporation = ref("");
    const tab = ref("tenant");
    const description = ref(null);
    const email = ref(null);
    const $q = useQuasar();

    // 檢查是否有勾選Line
    function isLine() {
      var any = channelType.value.includes("Line");
      return any;
    }
    function clearData() {
      channelType.value = [];
      companyName.value = "";
      account.value = "";
      password.value = "";
      description.value = "";
      email.value = null
      selected.value = null
    }

    function getAllCorporation(){
      return corporationApi.getAllCorporationAsync()
    }

    async function createCompany(data){
      const res = await companyApi.createCompanyAsync(data);
      return res;
    }

    function submit(){
      const req = {
        "corporationId": selected.value.id,
        "name":companyName.value,
        "code":"test",
        "description":description.value
      };
      createCompany(req).then((data) =>{
        console.log(data)
        if(data != false){
          $q.notify({
            type: "positive",
            message: "建立成功",
          });
          clearData()
          route.push("/list");
        }
      })
    }

    onMounted(() => {
      getAllCorporation().then((data) =>{
        console.log(data)
        options.value = data
      })
    })

    return {
      channelType,
      companyName,
      isLine,
      password,
      account,
      clearData,
      options,
      corporation,
      tab,
      selected,
      submit,
      description,
      email
    };
  },
});
</script>
