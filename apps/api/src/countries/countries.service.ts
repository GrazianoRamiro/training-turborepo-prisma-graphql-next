import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Country } from './countries.model';
import { countriesErrorMessages } from './countries.constants';

@Injectable()
export class CountriesService {
  private readonly logger = new Logger(CountriesService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Country[]> {
    try {
      return this.databaseService.client.country.findMany();
    } catch (error) {
      this.logger.error(countriesErrorMessages.COUNTRY_NOT_FOUND, error);

      throw new HttpException(
        countriesErrorMessages.COUNTRY_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findOne(id: number): Promise<Country> {
    try {
      return this.databaseService.client.country.findUnique({ where: { id } });
    } catch (error) {
      this.logger.error(countriesErrorMessages.COUNTRY_NOT_FOUND, error);

      throw new HttpException(
        countriesErrorMessages.COUNTRY_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
