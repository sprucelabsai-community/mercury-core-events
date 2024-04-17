import { SchemaRegistry } from '@sprucelabs/schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import eventTargetSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventTarget.schema'
import { SpruceSchemas } from '../../schemas.types'

const feedPredicateSchema: SpruceSchemas.Mercury.v2020_12_25.FeedPredicateSchema =
    {
        id: 'feedPredicate',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            target: {
                type: 'schema',
                options: { schema: eventTargetSchema_v2021_09_13 },
            },
            /** . */
            source: {
                type: 'schema',
                options: { schema: eventSourceSchema_v2021_09_13 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(feedPredicateSchema)

export default feedPredicateSchema
