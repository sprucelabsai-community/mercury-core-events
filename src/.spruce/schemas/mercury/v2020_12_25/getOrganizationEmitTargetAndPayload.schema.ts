import { SchemaRegistry } from '@sprucelabs/schema'
import getOrganizationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getOrganizationEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetAndPayloadSchema =
    {
        id: 'getOrganizationEmitTargetAndPayload',
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
                options: {
                    schema: getOrganizationEmitTargetSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    getOrganizationEmitTargetAndPayloadSchema
)

export default getOrganizationEmitTargetAndPayloadSchema
