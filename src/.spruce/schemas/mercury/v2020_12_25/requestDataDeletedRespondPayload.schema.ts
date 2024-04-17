import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const requestDataDeletedRespondPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RequestDataDeletedRespondPayloadSchema =
    {
        id: 'requestDataDeletedRespondPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {},
    }

SchemaRegistry.getInstance().trackSchema(requestDataDeletedRespondPayloadSchema)

export default requestDataDeletedRespondPayloadSchema
