"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_mensaje_dto_1 = require("./dto/create-mensaje-dto");
const mensajes_service_1 = require("./mensajes.service");
let MensajesController = class MensajesController {
    constructor(mensajeService) {
        this.mensajeService = mensajeService;
    }
    create(createMensajeDto, response) {
        this.mensajeService.createMensaje(createMensajeDto)
            .then(mensaje => {
            response.status(common_1.HttpStatus.CREATED).json(mensaje);
        })
            .catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: "Error en la creación." });
        });
    }
    update(id, createMensajeDto, response) {
        this.mensajeService.updateMensaje(id, createMensajeDto)
            .then(mensaje => {
            response.status(common_1.HttpStatus.OK).json(mensaje);
        })
            .catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: `Error en la actualización #${id}.` });
        });
    }
    getAll(response) {
        this.mensajeService.getAll()
            .then(mensajesList => {
            response.status(common_1.HttpStatus.OK).json(mensajesList);
        })
            .catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: "Error en la obtención de mensajes." });
        });
    }
    remove(id, response) {
        this.mensajeService.deleteMensaje(id)
            .then(mensajesList => {
            response.status(common_1.HttpStatus.OK).json(mensajesList);
        })
            .catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: `Error en la eliminación #${id}.` });
        });
    }
    findOne(id, response) {
        this.mensajeService.getMensaje(id)
            .then(mensaje => {
            response.status(common_1.HttpStatus.OK).json(mensaje);
        })
            .catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: `No existe #${id}.` });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensaje_dto_1.CreateMensajeDto, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_mensaje_dto_1.CreateMensajeDto, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "remove", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "findOne", null);
MensajesController = __decorate([
    common_1.Controller('mensajes'),
    __metadata("design:paramtypes", [mensajes_service_1.MensajesService])
], MensajesController);
exports.MensajesController = MensajesController;
//# sourceMappingURL=mensajes.controller.js.map