import { SchemaRegistry } from '@sprucelabs/schema'
import deleteLocationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteLocationEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const deleteLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema =
    {
        id: 'deleteLocationEmitTargetAndPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** Source. */
            source: {
                label: 'Source',
                type: 'schema',
                options: { schema: eventSourceSchema_v2021_09_13 },
            },
            /** . */
            target: {
                type: 'schema',
                isRequired: true,
                options: { schema: deleteLocationEmitTargetSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    deleteLocationEmitTargetAndPayloadSchema
)

export default deleteLocationEmitTargetAndPayloadSchema
