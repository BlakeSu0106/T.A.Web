import axios from "axios";

export default {

  async createCorporationAsync(data){
    try{
      const res = await axios.post('/api/Corporation',data);
      return res.data;
    } 
    catch(err) {
      return false;
    }
  },
  async getAllCorporationAsync(){
    try{
      const res = await axios.get('api/Corporation/all');
      return res.data;
    }
    catch(err){
      return err;
    }
  }
}