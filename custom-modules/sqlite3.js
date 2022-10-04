import sqlite3 from "sqlite3";

class Sql3 {
  createDb() {
    return new sqlite3.Database("./books.db");
  }
}

export default Sql3;
