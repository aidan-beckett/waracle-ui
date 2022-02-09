export default class BaseService {
  
  defaultConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  host: string;
  
  constructor(host: string){
    this.host = host;  
  }
}