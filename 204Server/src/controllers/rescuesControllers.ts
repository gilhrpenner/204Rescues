import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Rescues from '../models/Rescues';
import rescuewView from '../views/rescue_view';

export default {
    async index (req: Request, res: Response) {
        const rescuesRepository = getRepository(Rescues);

        const rescues = await rescuesRepository.find({
            relations: ['images']
        })
        return res.json(rescuewView.renderMany(rescues));
    },

    async show (req: Request, res: Response) {
        const { id } = req.params;
        const rescuesRepository = getRepository(Rescues);

        const rescue = await rescuesRepository.findOneOrFail(id, {
            relations: ['images']
        }); //TODO: handle this error in case ID does not exists

        return res.json(rescuewView.render(rescue));
    },

    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            donations,
            registeredCharity,
        } = req.body;

        const rescuesRepository = getRepository(Rescues);
        const requestImages = req.files as Express.Multer.File[];

        let images: Array<Object> = [];
        if (requestImages) {
            images = requestImages.map(image => {
                return { path: image.filename }
            });
        }

        const data = {
            name,
            latitude,
            longitude,
            about,
            donations,
            registeredCharity,
            images,
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(2000),
            donations: Yup.string().required(),
            registeredCharity: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const rescue = rescuesRepository.create(data);
        await rescuesRepository.save(rescue);
        return res.status(201).json(rescue);
    }
};