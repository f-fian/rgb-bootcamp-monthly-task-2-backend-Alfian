import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { ClinicCovid19Request } from 'src/request/clinicCovid19.request';
import { ClinicCovid19Service } from './clinicCovid19.service';



@Controller("clinic/:clinicId/covid19")
export class ClinicCovid19Controller {
  constructor(private readonly ClinicCovid19Service: ClinicCovid19Service) {}


  @Post()
  clinicCovid19Post(
  @Body() ClinicCovid19Request:ClinicCovid19Request,
  @Param("clinicId",ParseIntPipe) clinicId:number
  ){
    return this.ClinicCovid19Service.cmsClinicCovid19Post(ClinicCovid19Request,clinicId)
  }

  @Get(":clinicCovidId")
  clinicCovid19Get(
    @Param("clinicId",ParseIntPipe) clinicId:number,
    @Param("clinicCovidId",ParseIntPipe) clinicCovidId:number){
    return this.ClinicCovid19Service.cmsClinicCovid19Get(clinicId,clinicCovidId)
  }

  @Get()
  clinicCovid19GetList(@Param("clinicId",ParseIntPipe) clinicId:number){
    return this.ClinicCovid19Service.cmsClinicCovid19GetList(clinicId)
  }

  @Put(":id")
  covid19Update(
    @Body() ClinicCovid19Request:ClinicCovid19Request,
    @Param("id",ParseIntPipe) id:number){
    return this.ClinicCovid19Service.cmsClinicCovid19Update(ClinicCovid19Request,id)
  }

  @Delete(":id")
  @HttpCode(204)
  covid19Delete(
    @Param("id",ParseIntPipe) id:number){
    this.ClinicCovid19Service.cmsClinicCovid19Delete(id)
  }

}