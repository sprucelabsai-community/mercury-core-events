import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import listPeopleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleEmitTargetAndPayload.schema'
import listPeopleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleResponsePayload.schema'

const listPeopleEventContract = buildEventContract({
    eventSignatures: {
        'list-people::v2020_12_25': {
            emitPayloadSchema: listPeopleEmitTargetAndPayloadSchema,
            responsePayloadSchema: listPeopleResponsePayloadSchema,
        },
    },
})
export default listPeopleEventContract

export type ListPeopleEventContract = typeof listPeopleEventContract
