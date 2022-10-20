import axios from "axios";

export default {

  async createBusinessUserAsync(data){
    try{
      const res = await axios.post('/api/BusinessUser',data);
      return res.data;
    } 
    catch(err) {
      return false;
    }
  }
}