import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1706959343576 implements MigrationInterface {
  name = 'Migration1706959343576';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "weather" ("id" SERIAL NOT NULL, "lat" integer NOT NULL, "lon" integer NOT NULL, "data" json, CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "weather"`);
  }
}
