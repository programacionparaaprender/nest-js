import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajeService;
    constructor(mensajeService: MensajesService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    update(id: number, createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    remove(id: number, response: any): void;
    findOne(id: number, response: any): void;
}
