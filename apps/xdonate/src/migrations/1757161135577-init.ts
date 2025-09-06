import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1757161135577 implements MigrationInterface {
  name = 'Init1757161135577';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "DONATION" ("donation_id" varchar PRIMARY KEY NOT NULL, "payment_id" varchar NOT NULL, "amount" decimal(10,2) NOT NULL, "timestamp" datetime NOT NULL, "status" varchar NOT NULL, "username" varchar NOT NULL, "useremail" varchar NOT NULL, CONSTRAINT "UQ_e199585466ce953843ac806d47c" UNIQUE ("payment_id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "DONATION"`);
  }
}
