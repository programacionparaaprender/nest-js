import { 
    Controller, 
    Res, 
    Get, 
    Post,
    Body,
    Put,
    Param,
    Query,
    HttpStatus, 
    Delete } from '@nestjs/common';
import { create } from 'domain';
import { CreateMensajeDto } from './dto/create-mensaje-dto'
import { MensajesService } from './mensajes.service'
import { restElement } from '@babel/types';
import { Mensaje } from './entities/mensaje.entity';
@Controller('mensajes')
export class MensajesController {
    constructor(private mensajeService: MensajesService) {

    }

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajeService.createMensaje(createMensajeDto)
        .then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        })
        .catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:"Error en la creación."});
        });
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajeService.updateMensaje(id, createMensajeDto)
        .then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        })
        .catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:`Error en la actualización #${id}.`});
        });
    }

    @Get()
    getAll(@Res() response) {
        this.mensajeService.getAll()
        .then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        })
        .catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:"Error en la obtención de mensajes."});
        });
    }

    @Delete(':id')
    remove(@Param('id') id: number, @Res() response) 
    {
        this.mensajeService.deleteMensaje(id)
        .then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        })
        .catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:`Error en la eliminación #${id}.`});
        });
    }

    @Get(':id')
    findOne(@Param('id') id: number, @Res() response) 
    {
        this.mensajeService.getMensaje(id)
        .then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        })
        .catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:`No existe #${id}.`});
        });
    }
    
    

}
