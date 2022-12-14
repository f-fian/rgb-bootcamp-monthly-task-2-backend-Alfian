import { Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';
import { ClinicCovid19Controller } from './clinicCovid19.controller';
import { ClinicCovid19Service } from './clinicCovid19.service';
import { Clinic } from 'src/model/clinicModel';
import { Covid19 } from 'src/model/covid19Model';


@Module({
  imports: [SequelizeModule.forFeature([ClinicCovid19,Clinic,Covid19])],
  controllers: [ClinicCovid19Controller],
  providers: [ClinicCovid19Service],
})
export class ClinicCovid19Module {}
