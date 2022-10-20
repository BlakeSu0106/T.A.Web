import axios from "axios";

export default {

  async createCompanyAsync(data){
    try{
      const res = await axios.post('/api/Company',data);
      return res.data;
    } 
    catch(err) {
      return false;
    }
  },
  async getAllCompanyAsync(){
    try{
      const res = await axios.get('api/Company/all');
      return res.data;
    }
    catch(err){
      return err;
    }
  }
}