import path from 'path';
import { IEnviromentConfig } from './enviromentConfig.interface';

const database = path.join(__dirname, '../../database/SPOTI_DB.sqlite');
const dialect = process.env.DB_DIALECT || 'sqlite';

const config: IEnviromentConfig | any = {
  development: {
    dialect,
    storage: database,
    models: [path.resolve(__dirname, "../schemas/SPOTI_DB/models")],
    timezone: '+00:00',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
    logging: false,
  },
  test: {
    dialect,
    storage: database,
    models: [path.resolve(__dirname, "../schemas/SPOTI_DB/models")],
    timezone: '+00:00',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
    logging: true,
  },
  production: {
    dialect,
    storage: database,
    models: [path.resolve(__dirname, "../schemas/SPOTI_DB/models")],
    timezone: '+00:00',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      createdBy: 'created_by',
      updatedBy: 'updated_by',
    },
    logging: false,
  },
};

export = config;