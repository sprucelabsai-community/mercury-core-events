import { SchemaRegistry } from '@sprucelabs/schema'
import authenticateEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/authenticateEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const authenticateEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitTargetAndPayloadSchema =
    {
        id: 'authenticateEmitTargetAndPayload',
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
            payload: {
                type: 'schema',
                options: { schema: authenticateEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(authenticateEmitTargetAndPayloadSchema)

export default authenticateEmitTargetAndPayloadSchema
