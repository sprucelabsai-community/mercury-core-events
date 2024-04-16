import { SchemaRegistry } from '@sprucelabs/schema'
import didInstallEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didInstallEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const didInstallEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetAndPayloadSchema =
    {
        id: 'didInstallEmitTargetAndPayload',
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
                options: { schema: didInstallEmitTargetSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(didInstallEmitTargetAndPayloadSchema)

export default didInstallEmitTargetAndPayloadSchema
