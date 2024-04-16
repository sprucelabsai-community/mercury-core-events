import { SchemaRegistry } from '@sprucelabs/schema'
import getEventContractsTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getEventContractsTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getEventContractsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsEmitTargetAndPayloadSchema =
    {
        id: 'getEventContractsEmitTargetAndPayload',
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
                options: { schema: getEventContractsTargetSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    getEventContractsEmitTargetAndPayloadSchema
)

export default getEventContractsEmitTargetAndPayloadSchema
