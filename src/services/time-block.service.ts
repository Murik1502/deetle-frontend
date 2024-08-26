import { axiosWithAuth } from '@/api/interceptors';
import { ITimeBlockResponse, TypeTimeBlockFormState } from './../types/time-block.types';
class TimeBlockService {
    private BASE_URL = '/user/time-block'

    async getTimeBlocks() {
        const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
            this.BASE_URL
        )

        return response
    }

    async createTimeBlock(data: TypeTimeBlockFormState) {
        const response = await axiosWithAuth.post(
            this.BASE_URL,
            data
        )

        return response
    }

    async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
        const response = await axiosWithAuth.put(
            `${this.BASE_URL}/${id}`,
            data
        )

        return response
    }
}

export const timeBlockService = new TimeBlockService()