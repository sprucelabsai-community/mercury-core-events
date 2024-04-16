import { SchemaRegistry } from '@sprucelabs/schema'
import locationSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/location.schema'
import { SpruceSchemas } from '../../schemas.types'

const updateLocationResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationResponsePayloadSchema =
    {
        id: 'updateLocationResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            location: {
                type: 'schema',
                isRequired: true,
                options: { schema: locationSchema_v2020_07_22 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(updateLocationResponsePayloadSchema)

export default updateLocationResponsePayloadSchema
