import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('admin_secret')
export class AdminSecret {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  hashedPassword!: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt!: Date;
}
