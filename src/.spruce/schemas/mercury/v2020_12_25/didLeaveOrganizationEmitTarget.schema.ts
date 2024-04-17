import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const didLeaveOrganizationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTargetSchema =
    {
        id: 'didLeaveOrganizationEmitTarget',
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
            locationId: {
                type: 'id',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(didLeaveOrganizationEmitTargetSchema)

export default didLeaveOrganizationEmitTargetSchema
