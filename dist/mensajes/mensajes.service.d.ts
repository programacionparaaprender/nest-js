import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    deleteMensaje(id: number): Promise<any>;
    createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    getMensaje(id: number): Promise<Mensaje>;
    updateMensaje(id: number, mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    findAll(): Promise<Mensaje[]>;
}
