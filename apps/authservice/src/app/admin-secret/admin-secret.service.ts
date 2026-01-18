import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AdminSecret } from './entities/admin-secret.entity';

@Injectable()
export class AdminSecretService {
  constructor(
    @InjectRepository(AdminSecret)
    private readonly adminSecretRepository: Repository<AdminSecret>
  ) {}

  /**
   * Устанавливает новый пароль администратора.
   * При добавлении новой записи старая автоматически удаляется.
   * @param password Пароль в открытом виде
   * @returns Созданная запись AdminSecret
   */
  async setPassword(password: string): Promise<AdminSecret> {
    // Удаляем все существующие записи
    await this.adminSecretRepository.createQueryBuilder().delete().execute();

    // Хешируем новый пароль
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Создаем новую запись
    const adminSecret = this.adminSecretRepository.create({
      hashedPassword,
    });

    return await this.adminSecretRepository.save(adminSecret);
  }

  /**
   * Проверяет пароль администратора.
   * @param password Пароль в открытом виде для проверки
   * @returns true если пароль верный, false если нет или записи не существует
   */
  async verifyPassword(password: string): Promise<boolean> {
    const adminSecrets = await this.adminSecretRepository.find({
      take: 1,
      order: { createdAt: 'DESC' },
    });

    if (adminSecrets.length === 0) {
      return false;
    }

    const adminSecret = adminSecrets[0];
    return await bcrypt.compare(password, adminSecret.hashedPassword);
  }

  /**
   * Проверяет, существует ли пароль администратора.
   * @returns true если пароль установлен, false если нет
   */
  async isPasswordSet(): Promise<boolean> {
    const count = await this.adminSecretRepository.count();
    return count > 0;
  }
}
