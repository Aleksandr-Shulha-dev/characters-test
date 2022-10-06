import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Schema } from '../common/types';


const adapter = new FileSync<Schema>('db.json');
const db = low(adapter);

export { db };