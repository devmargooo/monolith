import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DONATION')
export class Donation {
 @PrimaryGeneratedColumn('uuid')
  donation_id!: string;

  @Column({ unique: true })
  payment_id!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount!: number;

  @Column('datetime') // Используем datetime вместо timestamp
  timestamp!: Date;

  @Column()
  status!: string;

  @Column()
  username!: string;

  @Column()
  useremail!: string;

//   @OneToOne(() => DonationMessage, (message) => message.donation)
//   message!: DonationMessage;
}
