import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateAuthorizerStatusPersonSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateAuthorizerStatusPerson.schema'

const didUpdateAuthorizerStatusEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitPayloadSchema  = {
	id: 'didUpdateAuthorizerStatusEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'person': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateAuthorizerStatusPersonSchema_v2020_12_25,}
	            },
	            /** . */
	            'statuses': {
	                type: 'select',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didUpdateAuthorizerStatusEmitPayloadSchema)

export default didUpdateAuthorizerStatusEmitPayloadSchema
