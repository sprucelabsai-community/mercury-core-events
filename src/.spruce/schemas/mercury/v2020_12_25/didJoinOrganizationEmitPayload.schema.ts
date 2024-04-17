import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const didJoinOrganizationEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema =
    {
        id: 'didJoinOrganizationEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            personId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            roleId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            isFirstRole: {
                type: 'boolean',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(didJoinOrganizationEmitPayloadSchema)

export default didJoinOrganizationEmitPayloadSchema
