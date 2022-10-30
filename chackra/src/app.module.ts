import { Module } from '@nestjs/common';
import dattebayo from "./dattebayo/dattabayo";

@Module({
  imports: [
    dattebayo,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
