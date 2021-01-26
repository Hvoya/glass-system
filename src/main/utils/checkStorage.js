import fs from 'fs';
import path from 'path';
import { Sequelize } from "sequelize";

export function checkStorage(app) {
  const userDataDirPath = app.getPath('userData');
  const userDataDir = fs.readdirSync(userDataDirPath);
  const appDataDir = path.join(userDataDirPath, 'glass-system');
  const dbPath = path.join(appDataDir, 'db.sqlite');

  if (!userDataDir.includes('glass-system')) fs.mkdir(appDataDir, () => void 0);
  // if (!fs.existsSync(dbPath)) {
  //   fs.writeFileSync(dbPath, () => void 0);
  // }

  return new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
  });
}