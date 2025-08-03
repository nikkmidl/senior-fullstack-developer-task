import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Status {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  DELETED = 'DELETED'
}

export type Role = 'User' | 'Admin' | 'Editor'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ default: '["User"]' }) // ❌ Single role only
  roles: string;

  @Column()
  status: Status;
}
