<template>
  <q-page class="flex">
    <div class="col-auto">
      <div class="col">
        <q-table
          :rows="rowdata"
          :columns="columns"
          row-key="name"
          separator="cell"
          flat
          bordered
          style="width:900px"
          class="absolute-center vertical-middle"
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                dense
                round
                flat
                color="grey"
                @click="editRow(props)"
                icon="edit"
              ></q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useStore } from '../stores/store'
import companyApi from '../apis/companyApi.js'

const columns = [
  {
    name: "name",
    required: true,
    label: "集團名稱",
    align: "left",
    field: (row) => row.name,
    sortable: false,
    style: 'width:300px'
  },
  {
    name: "description",
    label: "敘述",
    align: "left",
    field: (row) => row.description,
  },
  { name: "actions", label: "編輯設定", field: "", align: "center", style: 'width:200px' },
];

export default defineComponent({
  name: "PageIndex",

  setup() {
    const store = useStore()
    const rowdata = ref([]);
    
    async function getAllCompany(){
      const data = companyApi.getAllCompanyAsync();
      return data;
    }

    // 取得公司/集團列表API Function
    onMounted(() => {
      getAllCompany().then((data)=>{
        console.log(data)
        rowdata.value = data
      })
    })

    return {
      columns,
      rowdata,
    };
  },
});
</script>
