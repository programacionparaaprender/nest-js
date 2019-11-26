import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { create } from 'domain';
import { CreateMensajeDto } from './dto/create-mensaje-dto'
@Controller('mensajes')
export class MensajesController {
    @Post()
    create(@Body() createCatDto: CreateMensajeDto) {
      return 'Mensaje creado';
    }
    @Get()
    getAll() {
        return 'Lista de mensajes.';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: CreateMensajeDto) {
        return `Mensaje #${id} actualizado`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
