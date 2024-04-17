import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const addRoleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetSchema =
    {
        id: 'addRoleEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organizationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            locationId: {
                type: 'id',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(addRoleEmitTargetSchema)

export default addRoleEmitTargetSchema
