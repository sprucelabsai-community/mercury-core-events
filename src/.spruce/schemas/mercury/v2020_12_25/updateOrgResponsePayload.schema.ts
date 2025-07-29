import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import organizationSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/organization.schema'

const updateOrgResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgResponsePayloadSchema  = {
	id: 'updateOrgResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organization': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: organizationSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrgResponsePayloadSchema)

export default updateOrgResponsePayloadSchema
