import { database_classic } from "./DB/database_classic";

const db_classic = database_classic.getInstance();
db_classic?.add({ name: "Ronaldo", age: 45 });
db_classic?.add({ name: "Ricardo", age: 60 });
db_classic?.add({ name: "Rodrigo", age: 47 });
const db1 = db_classic;
db1?.show();
db_classic?.remove(2);
db1?.show();
