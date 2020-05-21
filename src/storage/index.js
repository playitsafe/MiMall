/*
 * Storage Encapsulation
 */
const STORAGE_KEY = 'mall'
// format:
// mall: {"user":{"userName": "Aaron", "age": 30}}
export default {
  // store value (key, value, user)
  setItem (key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name); // 递归
      val[key] = value
      this.setItem(module_name, val)
    // if no module in param, as user
    } else {
      // get all value first
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  // get userName(key) from user(module_name)
  // or just get user: {}
  // sessionStorageFormat = {
  //   user: {
  //     userName: 'foo',
  //     age: 'bar'
  //   }
  // }

  getItem (key, module_name) {
    if (module_name) {
      // to do test this 
      let val = this.getItem(module_name); // 递归
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },

  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  clear (key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key];
    } else {
      delete val[key]
    }
    
    // this.setItem(STORAGE_KEY, val);
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}