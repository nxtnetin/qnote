import { openDB } from 'idb';

const dbName = 'qnotes';
const version = 1; //versions start at 1

const db = openDB(dbName, version, {
    async upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('notes', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      // Create an index on the 'date' property of the objects.
      store.createIndex('date', 'date');
    }
  });
db.catch(e=>{
    console.log({e});
})

  export async function add(val) {
    return (await db).add('notes', val);
  }
  export async function getAll() {
    return (await db).getAll('notes');
  }
  export async function get(key) {
    return (await db).get('notes', key);
  }
  export async function set(key, val) {
    return (await db).put('notes', val, key);
  }
  export async function del(key) {
    return (await db).delete('notes', key);
  }
  export async function clear() {
    return (await db).clear('notes');
  }
  export async function keys() {
    return (await db).getAllKeys('notes');
  }

