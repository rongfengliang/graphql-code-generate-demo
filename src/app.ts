
import {Query} from "../typings/types"

class Getharborinfo {
    query: Query;
    constructor(query:Query){
        this.query=query;
    }
    get_system_version(){
      return  this.query.get_systeminfo;
    }
}