import { openDB } from "idb";

const dbName = "qnotes";
const version = 1; //versions start at 1

const db = openDB(dbName, version, {
  async upgrade(db) {
    // Create a store of objects
    const noteStore = db.createObjectStore("notes", {
      // The 'id' property of the object will be the key.
      keyPath: "id",
      // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true,
    });
    // Create an index on the 'date' property of the objects.
    noteStore.createIndex("date", "date");

    const userStore = db.createObjectStore("users", {
      // The 'id' property of the object will be the key.
      keyPath: "id",
      // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true,
    });
    // Create an index on the 'date' property of the objects.
    userStore.createIndex("date", "date");

    const settingStore = db.createObjectStore("settings", {
      // The 'id' property of the object will be the key.
      keyPath: "id",
      // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true,
    });
    // Create an index on the 'date' property of the objects.
    settingStore.createIndex("date", "date");
  },
});
db.catch((e) => {
  console.log({ e });
});

export async function add(store, val) {
  return (await db).add(store, val);
}
export async function getAll(store) {
  return (await db).getAll(store);
}
export async function get(store, key) {
  return (await db).get(store, key);
}
export async function set(store, key, val) {
  return (await db).put(store, val, key);
}
export async function del(store, key) {
  return (await db).delete(store, key);
}
export async function clear(store) {
  return (await db).clear(store);
}
export async function keys(store) {
  return (await db).getAllKeys(store);
}
