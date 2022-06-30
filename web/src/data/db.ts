const initDB = async () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const dbRequest = indexedDB.open("robots", 1);

    dbRequest.onupgradeneeded = (event) => {
      let db = dbRequest.result;
      console.log(db.version);
      db.createObjectStore("robots", { keyPath: "id" });
      db.createObjectStore("tags", { keyPath: "id" });
    };

    dbRequest.onsuccess = (event) => {
      let db = dbRequest.result;

      db.onversionchange = () => {
        db.close();
        reject(Error("DB_OUTDATED"));
      };

      resolve(db);
    };

    dbRequest.onerror = () => {
      reject(Error("DB_INITIALIZATION_FAILED"));
    };
  });
};

export default initDB;
