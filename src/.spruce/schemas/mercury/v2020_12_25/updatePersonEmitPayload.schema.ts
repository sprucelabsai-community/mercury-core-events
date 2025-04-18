import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import securityQuestionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/securityQuestion.schema'

const updatePersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema  = {
	id: 'updatePersonEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** First name. */
	            'firstName': {
	                label: 'First name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Last name. */
	            'lastName': {
	                label: 'Last name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Timezone. */
	            'timezone': {
	                label: 'Timezone',
	                type: 'select',
	                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
	            },
	            /** Avatar src. */
	            'avatar': {
	                label: 'Avatar src',
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	            /** Phone. A number that can be texted */
	            'phone': {
	                label: 'Phone',
	                type: 'phone',
	                isPrivate: true,
	                hint: 'A number that can be texted',
	                options: undefined
	            },
	            /** Username. An optional username if the person does not want to login using their phone */
	            'username': {
	                label: 'Username',
	                type: 'text',
	                isPrivate: true,
	                hint: 'An optional username if the person does not want to login using their phone',
	                options: undefined
	            },
	            /** . */
	            'password': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'securityQuestions': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: securityQuestionSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonEmitPayloadSchema)

export default updatePersonEmitPayloadSchema
