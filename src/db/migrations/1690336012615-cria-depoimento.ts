import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaDepoimento1690336012615 implements MigrationInterface {
    name = 'CriaDepoimento1690336012615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "depoimento" ("id" SERIAL NOT NULL, "foto" character varying(255) NOT NULL, "depoimento" character varying(255) NOT NULL, "nome" character varying(100) NOT NULL, CONSTRAINT "PK_517b34fc61199db688e07ccf2fe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "depoimento"`);
    }

}
