import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const getFeedEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetSchema =
    {
        id: 'getFeedEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            locationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            organizationId: {
                type: 'id',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getFeedEmitTargetSchema)

export default getFeedEmitTargetSchema
