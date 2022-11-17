import { SequelizeModule } from '@nestjs/sequelize';

const dattebayo = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leto',
  password: 'password',
  database: 'vania_lox',
  autoLoadModels: true,
  synchronize: true,
});

export default dattebayo;
