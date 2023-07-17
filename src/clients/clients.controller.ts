import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Response } from 'express';



@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(
    @Body() data: CreateClientDto,
    @Res() res: Response
    ) {
    
    const client = await this.clientsService.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      status: data.status
    });
    return res.status(201).json({
      message: 'Client created',
      client
    })
    
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }


  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateClientDto
    ): Promise<any>  {
    return this.clientsService.update(id.toString(), updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.delete(id.toString());
  }
}
