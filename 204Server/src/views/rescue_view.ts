import Rescues from '../models/Rescues';
import imagesView from './images_view';

export default {
    render(rescue: Rescues) {
        return {
            name: rescue.name,
            latitude: rescue.latitude,
            longitude: rescue.longitude,
            about: rescue.about,
            donations: rescue.donations,
            registeredCharity: rescue.registeredCharity,
            images: imagesView.renderMany(rescue.images)
        }
    },

    renderMany(rescues: Rescues[]) {
        return rescues.map(rescue => this.render(rescue))
    }
};