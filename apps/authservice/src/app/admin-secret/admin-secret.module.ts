import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminSecretService } from './admin-secret.service';
import { AdminSecret } from './entities/admin-secret.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminSecret])],
  providers: [AdminSecretService],
  exports: [AdminSecretService],
})
export class AdminSecretModule {}
