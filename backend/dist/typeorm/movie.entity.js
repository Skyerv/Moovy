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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
let Movie = class Movie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'std_id',
    }),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'imbd_id',
        type: 'varchar',
        length: 100,
    }),
    __metadata("design:type", String)
], Movie.prototype, "imdb_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'std_title',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'std_year',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Movie.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'std_poster',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Movie.prototype, "poster", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'std_rating',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Movie.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'std_audioreview',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Movie.prototype, "audioreview", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)('movies')
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map