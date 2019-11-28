import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
      ) {}
    async getAll(): Promise<Mensaje[]>
    {
        return await this.mensajeRepository.find();
    }

    async deleteMensaje(id:number): Promise<any>
    {
        return await this.mensajeRepository.delete(id);
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>
    {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;
        return this.mensajeRepository.save(nuevo);
    }

    async getMensaje(id:number): Promise<Mensaje>
    {
        const mensajeUpdate = await this.mensajeRepository.findOne(id);
        var mensaje: Mensaje;
        mensaje.mensaje = mensajeUpdate.mensaje;
        mensaje.nick = mensajeUpdate.nick;
        mensaje.id = mensajeUpdate.id;
        return mensaje;
    }

    async updateMensaje(id:number, mensajeNuevo: CreateMensajeDto): Promise<Mensaje>
    {
        const mensajeUpdate = await this.mensajeRepository.findOne(id);
        mensajeUpdate.mensaje = mensajeNuevo.mensaje;
        mensajeUpdate.nick = mensajeNuevo.nick;
        return this.mensajeRepository.save(mensajeUpdate);
    }

    findAll(): Promise<Mensaje[]> {
        return this.mensajeRepository.find();
    }
}
