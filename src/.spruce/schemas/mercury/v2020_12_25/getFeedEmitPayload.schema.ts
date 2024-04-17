import { SchemaRegistry } from '@sprucelabs/schema'
import feedPredicateSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/feedPredicate.schema'
import getFeedPagingRequestSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getFeedPagingRequest.schema'
import { SpruceSchemas } from '../../schemas.types'

const getFeedEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema =
    {
        id: 'getFeedEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            paging: {
                type: 'schema',
                options: { schema: getFeedPagingRequestSchema_v2020_12_25 },
            },
            /** . */
            predicates: {
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: { schema: feedPredicateSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getFeedEmitPayloadSchema)

export default getFeedEmitPayloadSchema
