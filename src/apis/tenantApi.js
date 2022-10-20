import axios from "axios";

export default {

  async createTenantAsync(data){
    try{
      const res = await axios.post('/api/Tenant',data);
      return res.data;
    } 
    catch(err) {
      return false;
    }
  },
  async getAllTenantAsync(){
    try{
      const res = await axios.get('api/Tenant/all');
      return res.data;
    }
    catch(err){
      return err;
    }
  }
}