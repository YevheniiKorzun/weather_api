import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1706959577742 implements MigrationInterface {
    name = 'Migration1706959577742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "lat"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "lat" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "lon"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "lon" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "lon"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "lon" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "lat"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "lat" integer NOT NULL`);
    }

}
