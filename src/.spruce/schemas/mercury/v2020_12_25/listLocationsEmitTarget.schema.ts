import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listLocationsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema  = {
	id: 'listLocationsEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . Will filter locations by this organization. */
	            'organizationId': {
	                type: 'id',
	                hint: 'Will filter locations by this organization.',
	                options: undefined
	            },
	            /** . */
	            'locationIds': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitTargetSchema)

export default listLocationsEmitTargetSchema
