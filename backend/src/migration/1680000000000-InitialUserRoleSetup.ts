import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialUserRoleSetup1680000000000 implements MigrationInterface {
  name = 'InitialUserRoleSetup1680000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    roles JSONB NOT NULL DEFAULT '["User"]',
                    status INTEGER NULL
                )
            `);

      await queryRunner.query(`
                INSERT OR IGNORE INTO users (username, roles, status) VALUES
                ('admin_user', '["Admin"]', 'ENABLED'),
                ('regular_user', '["User"]', 'ENABLED'),
                ('editor_user', '["Editor"]', 'ENABLED'),
                ('disabled_user', '["Editor"]', 'DISABLED'),
                ('deleted_user', '["Editor"]', 'DELETED')
            `);
    } catch (error) {
      console.error('Migration up error:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`DROP TABLE IF EXISTS users`);
    } catch (error) {
      console.error('Migration down error:', error);
      throw error;
    }
  }
}
