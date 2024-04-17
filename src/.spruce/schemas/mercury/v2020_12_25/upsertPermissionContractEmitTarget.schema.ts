import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const upsertPermissionContractEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetSchema =
    {
        id: 'upsertPermissionContractEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organizationId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            permissionContractId: {
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
            skillId: {
                type: 'id',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    upsertPermissionContractEmitTargetSchema
)

export default upsertPermissionContractEmitTargetSchema
