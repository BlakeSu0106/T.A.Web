import axios from "axios";

export default {

  async authAdmin(data){
    try{
      const res = await axios.post('/api/Auth/validate',data);
      return res;
    } 
    catch(err) {
      return false;
    }
  }
}