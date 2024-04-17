import { SchemaRegistry } from '@sprucelabs/schema'
import securityQuestionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/securityQuestion.schema'
import { SpruceSchemas } from '../../schemas.types'

const updatePersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema =
    {
        id: 'updatePersonEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** First name. */
            firstName: {
                label: 'First name',
                type: 'text',
                isPrivate: true,
                options: undefined,
            },
            /** Last name. */
            lastName: {
                label: 'Last name',
                type: 'text',
                isPrivate: true,
                options: undefined,
            },
            /** Timezone. */
            timezone: {
                label: 'Timezone',
                type: 'select',
                options: {
                    choices: [
                        { value: 'Pacific/Niue', label: 'Niue Time' },
                        {
                            value: 'Pacific/Pago_Pago',
                            label: 'Samoa Standard Time',
                        },
                        {
                            value: 'Pacific/Rarotonga',
                            label: 'Cook Islands Standard Time',
                        },
                        {
                            value: 'Pacific/Honolulu',
                            label: 'Hawaii-Aleutian Standard Time',
                        },
                        { value: 'Pacific/Tahiti', label: 'Tahiti Time' },
                        { value: 'Pacific/Marquesas', label: 'Marquesas Time' },
                        { value: 'Pacific/Gambier', label: 'Gambier Time' },
                        {
                            value: 'America/Adak',
                            label: 'Hawaii-Aleutian Time (Adak)',
                        },
                        {
                            value: 'America/Anchorage',
                            label: 'Alaska Time - Anchorage',
                        },
                        {
                            value: 'America/Juneau',
                            label: 'Alaska Time - Juneau',
                        },
                        {
                            value: 'America/Metlakatla',
                            label: 'Alaska Time - Metlakatla',
                        },
                        { value: 'America/Nome', label: 'Alaska Time - Nome' },
                        {
                            value: 'America/Sitka',
                            label: 'Alaska Time - Sitka',
                        },
                        {
                            value: 'America/Yakutat',
                            label: 'Alaska Time - Yakutat',
                        },
                        { value: 'Pacific/Pitcairn', label: 'Pitcairn Time' },
                        {
                            value: 'America/Hermosillo',
                            label: 'Mexican Pacific Standard Time',
                        },
                        {
                            value: 'America/Dawson_Creek',
                            label: 'Mountain Standard Time - Dawson Creek',
                        },
                        {
                            value: 'America/Fort_Nelson',
                            label: 'Mountain Standard Time - Fort Nelson',
                        },
                        {
                            value: 'America/Phoenix',
                            label: 'Mountain Standard Time - Phoenix',
                        },
                        {
                            value: 'America/Los_Angeles',
                            label: 'Pacific Time - Los Angeles',
                        },
                        {
                            value: 'America/Tijuana',
                            label: 'Pacific Time - Tijuana',
                        },
                        {
                            value: 'America/Vancouver',
                            label: 'Pacific Time - Vancouver',
                        },
                        {
                            value: 'America/Dawson',
                            label: 'Yukon Time - Dawson',
                        },
                        {
                            value: 'America/Whitehorse',
                            label: 'Yukon Time - Whitehorse',
                        },
                        {
                            value: 'America/Belize',
                            label: 'Central Standard Time - Belize',
                        },
                        {
                            value: 'America/Costa_Rica',
                            label: 'Central Standard Time - Costa Rica',
                        },
                        {
                            value: 'America/El_Salvador',
                            label: 'Central Standard Time - El Salvador',
                        },
                        {
                            value: 'America/Guatemala',
                            label: 'Central Standard Time - Guatemala',
                        },
                        {
                            value: 'America/Managua',
                            label: 'Central Standard Time - Managua',
                        },
                        {
                            value: 'America/Regina',
                            label: 'Central Standard Time - Regina',
                        },
                        {
                            value: 'America/Swift_Current',
                            label: 'Central Standard Time - Swift Current',
                        },
                        {
                            value: 'America/Tegucigalpa',
                            label: 'Central Standard Time - Tegucigalpa',
                        },
                        {
                            value: 'Pacific/Easter',
                            label: 'Easter Island Time',
                        },
                        { value: 'Pacific/Galapagos', label: 'Galapagos Time' },
                        {
                            value: 'America/Chihuahua',
                            label: 'Mexican Pacific Time - Chihuahua',
                        },
                        {
                            value: 'America/Mazatlan',
                            label: 'Mexican Pacific Time - Mazatlan',
                        },
                        {
                            value: 'America/Boise',
                            label: 'Mountain Time - Boise',
                        },
                        {
                            value: 'America/Cambridge_Bay',
                            label: 'Mountain Time - Cambridge Bay',
                        },
                        {
                            value: 'America/Denver',
                            label: 'Mountain Time - Denver',
                        },
                        {
                            value: 'America/Edmonton',
                            label: 'Mountain Time - Edmonton',
                        },
                        {
                            value: 'America/Inuvik',
                            label: 'Mountain Time - Inuvik',
                        },
                        {
                            value: 'America/Ojinaga',
                            label: 'Mountain Time - Ojinaga',
                        },
                        {
                            value: 'America/Yellowknife',
                            label: 'Mountain Time - Yellowknife',
                        },
                        {
                            value: 'America/Eirunepe',
                            label: 'Acre Standard Time - Eirunepe',
                        },
                        {
                            value: 'America/Rio_Branco',
                            label: 'Acre Standard Time - Rio Branco',
                        },
                        {
                            value: 'America/Bahia_Banderas',
                            label: 'Central Time - Bahia Banderas',
                        },
                        {
                            value: 'America/North_Dakota/Beulah',
                            label: 'Central Time - Beulah, North Dakota',
                        },
                        {
                            value: 'America/North_Dakota/Center',
                            label: 'Central Time - Center, North Dakota',
                        },
                        {
                            value: 'America/Chicago',
                            label: 'Central Time - Chicago',
                        },
                        {
                            value: 'America/Indiana/Knox',
                            label: 'Central Time - Knox, Indiana',
                        },
                        {
                            value: 'America/Matamoros',
                            label: 'Central Time - Matamoros',
                        },
                        {
                            value: 'America/Menominee',
                            label: 'Central Time - Menominee',
                        },
                        {
                            value: 'America/Merida',
                            label: 'Central Time - Merida',
                        },
                        {
                            value: 'America/Mexico_City',
                            label: 'Central Time - Mexico City',
                        },
                        {
                            value: 'America/Monterrey',
                            label: 'Central Time - Monterrey',
                        },
                        {
                            value: 'America/North_Dakota/New_Salem',
                            label: 'Central Time - New Salem, North Dakota',
                        },
                        {
                            value: 'America/Rainy_River',
                            label: 'Central Time - Rainy River',
                        },
                        {
                            value: 'America/Rankin_Inlet',
                            label: 'Central Time - Rankin Inlet',
                        },
                        {
                            value: 'America/Resolute',
                            label: 'Central Time - Resolute',
                        },
                        {
                            value: 'America/Indiana/Tell_City',
                            label: 'Central Time - Tell City, Indiana',
                        },
                        {
                            value: 'America/Winnipeg',
                            label: 'Central Time - Winnipeg',
                        },
                        {
                            value: 'America/Bogota',
                            label: 'Colombia Standard Time',
                        },
                        {
                            value: 'America/Cancun',
                            label: 'Eastern Standard Time - Cancun',
                        },
                        {
                            value: 'America/Jamaica',
                            label: 'Eastern Standard Time - Jamaica',
                        },
                        {
                            value: 'America/Panama',
                            label: 'Eastern Standard Time - Panama',
                        },
                        { value: 'America/Guayaquil', label: 'Ecuador Time' },
                        { value: 'America/Lima', label: 'Peru Standard Time' },
                        {
                            value: 'America/Boa_Vista',
                            label: 'Amazon Standard Time - Boa Vista',
                        },
                        {
                            value: 'America/Campo_Grande',
                            label: 'Amazon Standard Time - Campo Grande',
                        },
                        {
                            value: 'America/Cuiaba',
                            label: 'Amazon Standard Time - Cuiaba',
                        },
                        {
                            value: 'America/Manaus',
                            label: 'Amazon Standard Time - Manaus',
                        },
                        {
                            value: 'America/Porto_Velho',
                            label: 'Amazon Standard Time - Porto Velho',
                        },
                        {
                            value: 'America/Barbados',
                            label: 'Atlantic Standard Time - Barbados',
                        },
                        {
                            value: 'America/Martinique',
                            label: 'Atlantic Standard Time - Martinique',
                        },
                        {
                            value: 'America/Puerto_Rico',
                            label: 'Atlantic Standard Time - Puerto Rico',
                        },
                        {
                            value: 'America/Santo_Domingo',
                            label: 'Atlantic Standard Time - Santo Domingo',
                        },
                        { value: 'America/La_Paz', label: 'Bolivia Time' },
                        { value: 'America/Santiago', label: 'Chile Time' },
                        { value: 'America/Havana', label: 'Cuba Time' },
                        {
                            value: 'America/Detroit',
                            label: 'Eastern Time - Detroit',
                        },
                        {
                            value: 'America/Grand_Turk',
                            label: 'Eastern Time - Grand Turk',
                        },
                        {
                            value: 'America/Indiana/Indianapolis',
                            label: 'Eastern Time - Indianapolis',
                        },
                        {
                            value: 'America/Iqaluit',
                            label: 'Eastern Time - Iqaluit',
                        },
                        {
                            value: 'America/Kentucky/Louisville',
                            label: 'Eastern Time - Louisville',
                        },
                        {
                            value: 'America/Indiana/Marengo',
                            label: 'Eastern Time - Marengo, Indiana',
                        },
                        {
                            value: 'America/Kentucky/Monticello',
                            label: 'Eastern Time - Monticello, Kentucky',
                        },
                        {
                            value: 'America/New_York',
                            label: 'Eastern Time - New York',
                        },
                        {
                            value: 'America/Nipigon',
                            label: 'Eastern Time - Nipigon',
                        },
                        {
                            value: 'America/Pangnirtung',
                            label: 'Eastern Time - Pangnirtung',
                        },
                        {
                            value: 'America/Indiana/Petersburg',
                            label: 'Eastern Time - Petersburg, Indiana',
                        },
                        {
                            value: 'America/Port-au-Prince',
                            label: 'Eastern Time - Port-au-Prince',
                        },
                        {
                            value: 'America/Thunder_Bay',
                            label: 'Eastern Time - Thunder Bay',
                        },
                        {
                            value: 'America/Toronto',
                            label: 'Eastern Time - Toronto',
                        },
                        {
                            value: 'America/Indiana/Vevay',
                            label: 'Eastern Time - Vevay, Indiana',
                        },
                        {
                            value: 'America/Indiana/Vincennes',
                            label: 'Eastern Time - Vincennes, Indiana',
                        },
                        {
                            value: 'America/Indiana/Winamac',
                            label: 'Eastern Time - Winamac, Indiana',
                        },
                        { value: 'America/Guyana', label: 'Guyana Time' },
                        { value: 'America/Asuncion', label: 'Paraguay Time' },
                        { value: 'America/Caracas', label: 'Venezuela Time' },
                        {
                            value: 'America/Argentina/Buenos_Aires',
                            label: 'Argentina Standard Time - Buenos Aires',
                        },
                        {
                            value: 'America/Argentina/Catamarca',
                            label: 'Argentina Standard Time - Catamarca',
                        },
                        {
                            value: 'America/Argentina/Cordoba',
                            label: 'Argentina Standard Time - Cordoba',
                        },
                        {
                            value: 'America/Argentina/Jujuy',
                            label: 'Argentina Standard Time - Jujuy',
                        },
                        {
                            value: 'America/Argentina/La_Rioja',
                            label: 'Argentina Standard Time - La Rioja',
                        },
                        {
                            value: 'America/Argentina/Mendoza',
                            label: 'Argentina Standard Time - Mendoza',
                        },
                        {
                            value: 'America/Argentina/Rio_Gallegos',
                            label: 'Argentina Standard Time - Rio Gallegos',
                        },
                        {
                            value: 'America/Argentina/Salta',
                            label: 'Argentina Standard Time - Salta',
                        },
                        {
                            value: 'America/Argentina/San_Juan',
                            label: 'Argentina Standard Time - San Juan',
                        },
                        {
                            value: 'America/Argentina/San_Luis',
                            label: 'Argentina Standard Time - San Luis',
                        },
                        {
                            value: 'America/Argentina/Tucuman',
                            label: 'Argentina Standard Time - Tucuman',
                        },
                        {
                            value: 'America/Argentina/Ushuaia',
                            label: 'Argentina Standard Time - Ushuaia',
                        },
                        {
                            value: 'Atlantic/Bermuda',
                            label: 'Atlantic Time - Bermuda',
                        },
                        {
                            value: 'America/Glace_Bay',
                            label: 'Atlantic Time - Glace Bay',
                        },
                        {
                            value: 'America/Goose_Bay',
                            label: 'Atlantic Time - Goose Bay',
                        },
                        {
                            value: 'America/Halifax',
                            label: 'Atlantic Time - Halifax',
                        },
                        {
                            value: 'America/Moncton',
                            label: 'Atlantic Time - Moncton',
                        },
                        {
                            value: 'America/Thule',
                            label: 'Atlantic Time - Thule',
                        },
                        {
                            value: 'America/Araguaina',
                            label: 'Brasilia Standard Time - Araguaina',
                        },
                        {
                            value: 'America/Bahia',
                            label: 'Brasilia Standard Time - Bahia',
                        },
                        {
                            value: 'America/Belem',
                            label: 'Brasilia Standard Time - Belem',
                        },
                        {
                            value: 'America/Fortaleza',
                            label: 'Brasilia Standard Time - Fortaleza',
                        },
                        {
                            value: 'America/Maceio',
                            label: 'Brasilia Standard Time - Maceio',
                        },
                        {
                            value: 'America/Recife',
                            label: 'Brasilia Standard Time - Recife',
                        },
                        {
                            value: 'America/Santarem',
                            label: 'Brasilia Standard Time - Santarem',
                        },
                        {
                            value: 'America/Sao_Paulo',
                            label: 'Brasilia Standard Time - Sao Paulo',
                        },
                        {
                            value: 'Atlantic/Stanley',
                            label: 'Falkland Islands Standard Time',
                        },
                        {
                            value: 'America/Cayenne',
                            label: 'French Guiana Time',
                        },
                        { value: 'Antarctica/Palmer', label: 'Palmer Time' },
                        {
                            value: 'America/Punta_Arenas',
                            label: 'Punta Arenas Time',
                        },
                        { value: 'Antarctica/Rothera', label: 'Rothera Time' },
                        { value: 'America/Paramaribo', label: 'Suriname Time' },
                        {
                            value: 'America/Montevideo',
                            label: 'Uruguay Standard Time',
                        },
                        {
                            value: 'America/St_Johns',
                            label: 'Newfoundland Time',
                        },
                        {
                            value: 'America/Noronha',
                            label: 'Fernando de Noronha Standard Time',
                        },
                        {
                            value: 'Atlantic/South_Georgia',
                            label: 'South Georgia Time',
                        },
                        {
                            value: 'America/Miquelon',
                            label: 'St. Pierre & Miquelon Time',
                        },
                        { value: 'America/Nuuk', label: 'West Greenland Time' },
                        {
                            value: 'Atlantic/Cape_Verde',
                            label: 'Cape Verde Standard Time',
                        },
                        { value: 'Atlantic/Azores', label: 'Azores Time' },
                        { value: 'UTC', label: 'Coordinated Universal Time' },
                        {
                            value: 'America/Scoresbysund',
                            label: 'East Greenland Time',
                        },
                        { value: 'Etc/GMT', label: 'Greenwich Mean Time' },
                        {
                            value: 'Africa/Abidjan',
                            label: 'Greenwich Mean Time - Abidjan',
                        },
                        {
                            value: 'Africa/Bissau',
                            label: 'Greenwich Mean Time - Bissau',
                        },
                        {
                            value: 'America/Danmarkshavn',
                            label: 'Greenwich Mean Time - Danmarkshavn',
                        },
                        {
                            value: 'Africa/Monrovia',
                            label: 'Greenwich Mean Time - Monrovia',
                        },
                        {
                            value: 'Atlantic/Reykjavik',
                            label: 'Greenwich Mean Time - Reykjavik',
                        },
                        {
                            value: 'Africa/Sao_Tome',
                            label: 'Greenwich Mean Time - São Tomé',
                        },
                        {
                            value: 'Africa/Algiers',
                            label: 'Central European Standard Time - Algiers',
                        },
                        {
                            value: 'Africa/Tunis',
                            label: 'Central European Standard Time - Tunis',
                        },
                        { value: 'Europe/Dublin', label: 'Ireland Time' },
                        { value: 'Africa/Casablanca', label: 'Morocco Time' },
                        {
                            value: 'Europe/London',
                            label: 'United Kingdom Time',
                        },
                        {
                            value: 'Africa/Lagos',
                            label: 'West Africa Standard Time - Lagos',
                        },
                        {
                            value: 'Africa/Ndjamena',
                            label: 'West Africa Standard Time - Ndjamena',
                        },
                        {
                            value: 'Atlantic/Canary',
                            label: 'Western European Time - Canary',
                        },
                        {
                            value: 'Atlantic/Faroe',
                            label: 'Western European Time - Faroe',
                        },
                        {
                            value: 'Europe/Lisbon',
                            label: 'Western European Time - Lisbon',
                        },
                        {
                            value: 'Atlantic/Madeira',
                            label: 'Western European Time - Madeira',
                        },
                        {
                            value: 'Africa/El_Aaiun',
                            label: 'Western Sahara Time',
                        },
                        {
                            value: 'Africa/Juba',
                            label: 'Central Africa Time - Juba',
                        },
                        {
                            value: 'Africa/Khartoum',
                            label: 'Central Africa Time - Khartoum',
                        },
                        {
                            value: 'Africa/Maputo',
                            label: 'Central Africa Time - Maputo',
                        },
                        {
                            value: 'Africa/Windhoek',
                            label: 'Central Africa Time - Windhoek',
                        },
                        {
                            value: 'Europe/Amsterdam',
                            label: 'Central European Time - Amsterdam',
                        },
                        {
                            value: 'Europe/Andorra',
                            label: 'Central European Time - Andorra',
                        },
                        {
                            value: 'Europe/Belgrade',
                            label: 'Central European Time - Belgrade',
                        },
                        {
                            value: 'Europe/Berlin',
                            label: 'Central European Time - Berlin',
                        },
                        {
                            value: 'Europe/Brussels',
                            label: 'Central European Time - Brussels',
                        },
                        {
                            value: 'Europe/Budapest',
                            label: 'Central European Time - Budapest',
                        },
                        {
                            value: 'Africa/Ceuta',
                            label: 'Central European Time - Ceuta',
                        },
                        {
                            value: 'Europe/Copenhagen',
                            label: 'Central European Time - Copenhagen',
                        },
                        {
                            value: 'Europe/Gibraltar',
                            label: 'Central European Time - Gibraltar',
                        },
                        {
                            value: 'Europe/Luxembourg',
                            label: 'Central European Time - Luxembourg',
                        },
                        {
                            value: 'Europe/Madrid',
                            label: 'Central European Time - Madrid',
                        },
                        {
                            value: 'Europe/Malta',
                            label: 'Central European Time - Malta',
                        },
                        {
                            value: 'Europe/Monaco',
                            label: 'Central European Time - Monaco',
                        },
                        {
                            value: 'Europe/Oslo',
                            label: 'Central European Time - Oslo',
                        },
                        {
                            value: 'Europe/Paris',
                            label: 'Central European Time - Paris',
                        },
                        {
                            value: 'Europe/Prague',
                            label: 'Central European Time - Prague',
                        },
                        {
                            value: 'Europe/Rome',
                            label: 'Central European Time - Rome',
                        },
                        {
                            value: 'Europe/Stockholm',
                            label: 'Central European Time - Stockholm',
                        },
                        {
                            value: 'Europe/Tirane',
                            label: 'Central European Time - Tirane',
                        },
                        {
                            value: 'Europe/Vienna',
                            label: 'Central European Time - Vienna',
                        },
                        {
                            value: 'Europe/Warsaw',
                            label: 'Central European Time - Warsaw',
                        },
                        {
                            value: 'Europe/Zurich',
                            label: 'Central European Time - Zurich',
                        },
                        {
                            value: 'Africa/Cairo',
                            label: 'Eastern European Standard Time - Cairo',
                        },
                        {
                            value: 'Europe/Kaliningrad',
                            label: 'Eastern European Standard Time - Kaliningrad',
                        },
                        {
                            value: 'Africa/Tripoli',
                            label: 'Eastern European Standard Time - Tripoli',
                        },
                        {
                            value: 'Africa/Johannesburg',
                            label: 'South Africa Standard Time',
                        },
                        { value: 'Antarctica/Troll', label: 'Troll Time' },
                        {
                            value: 'Asia/Baghdad',
                            label: 'Arabian Standard Time - Baghdad',
                        },
                        {
                            value: 'Asia/Qatar',
                            label: 'Arabian Standard Time - Qatar',
                        },
                        {
                            value: 'Asia/Riyadh',
                            label: 'Arabian Standard Time - Riyadh',
                        },
                        { value: 'Africa/Nairobi', label: 'East Africa Time' },
                        {
                            value: 'Asia/Amman',
                            label: 'Eastern European Time - Amman',
                        },
                        {
                            value: 'Europe/Athens',
                            label: 'Eastern European Time - Athens',
                        },
                        {
                            value: 'Asia/Beirut',
                            label: 'Eastern European Time - Beirut',
                        },
                        {
                            value: 'Europe/Bucharest',
                            label: 'Eastern European Time - Bucharest',
                        },
                        {
                            value: 'Europe/Chisinau',
                            label: 'Eastern European Time - Chisinau',
                        },
                        {
                            value: 'Asia/Damascus',
                            label: 'Eastern European Time - Damascus',
                        },
                        {
                            value: 'Asia/Gaza',
                            label: 'Eastern European Time - Gaza',
                        },
                        {
                            value: 'Asia/Hebron',
                            label: 'Eastern European Time - Hebron',
                        },
                        {
                            value: 'Europe/Helsinki',
                            label: 'Eastern European Time - Helsinki',
                        },
                        {
                            value: 'Europe/Kiev',
                            label: 'Eastern European Time - Kyiv',
                        },
                        {
                            value: 'Asia/Nicosia',
                            label: 'Eastern European Time - Nicosia',
                        },
                        {
                            value: 'Europe/Riga',
                            label: 'Eastern European Time - Riga',
                        },
                        {
                            value: 'Europe/Sofia',
                            label: 'Eastern European Time - Sofia',
                        },
                        {
                            value: 'Europe/Tallinn',
                            label: 'Eastern European Time - Tallinn',
                        },
                        {
                            value: 'Europe/Uzhgorod',
                            label: 'Eastern European Time - Uzhhorod',
                        },
                        {
                            value: 'Europe/Vilnius',
                            label: 'Eastern European Time - Vilnius',
                        },
                        {
                            value: 'Europe/Zaporozhye',
                            label: 'Eastern European Time - Zaporozhye',
                        },
                        { value: 'Asia/Famagusta', label: 'Famagusta Time' },
                        { value: 'Asia/Jerusalem', label: 'Israel Time' },
                        { value: 'Europe/Kirov', label: 'Kirov Time' },
                        {
                            value: 'Europe/Minsk',
                            label: 'Moscow Standard Time - Minsk',
                        },
                        {
                            value: 'Europe/Moscow',
                            label: 'Moscow Standard Time - Moscow',
                        },
                        {
                            value: 'Europe/Simferopol',
                            label: 'Moscow Standard Time - Simferopol',
                        },
                        { value: 'Europe/Istanbul', label: 'Turkey Time' },
                        {
                            value: 'Europe/Volgograd',
                            label: 'Volgograd Standard Time',
                        },
                        {
                            value: 'Asia/Yerevan',
                            label: 'Armenia Standard Time',
                        },
                        { value: 'Europe/Astrakhan', label: 'Astrakhan Time' },
                        {
                            value: 'Asia/Baku',
                            label: 'Azerbaijan Standard Time',
                        },
                        {
                            value: 'Asia/Tbilisi',
                            label: 'Georgia Standard Time',
                        },
                        { value: 'Asia/Dubai', label: 'Gulf Standard Time' },
                        {
                            value: 'Indian/Mauritius',
                            label: 'Mauritius Standard Time',
                        },
                        { value: 'Indian/Reunion', label: 'Réunion Time' },
                        {
                            value: 'Europe/Samara',
                            label: 'Samara Standard Time',
                        },
                        { value: 'Europe/Saratov', label: 'Saratov Time' },
                        { value: 'Indian/Mahe', label: 'Seychelles Time' },
                        { value: 'Europe/Ulyanovsk', label: 'Ulyanovsk Time' },
                        { value: 'Asia/Kabul', label: 'Afghanistan Time' },
                        { value: 'Asia/Tehran', label: 'Iran Time' },
                        {
                            value: 'Indian/Kerguelen',
                            label: 'French Southern & Antarctic Time',
                        },
                        { value: 'Indian/Maldives', label: 'Maldives Time' },
                        { value: 'Antarctica/Mawson', label: 'Mawson Time' },
                        {
                            value: 'Asia/Karachi',
                            label: 'Pakistan Standard Time',
                        },
                        { value: 'Asia/Dushanbe', label: 'Tajikistan Time' },
                        {
                            value: 'Asia/Ashgabat',
                            label: 'Turkmenistan Standard Time',
                        },
                        {
                            value: 'Asia/Samarkand',
                            label: 'Uzbekistan Standard Time - Samarkand',
                        },
                        {
                            value: 'Asia/Tashkent',
                            label: 'Uzbekistan Standard Time - Tashkent',
                        },
                        {
                            value: 'Asia/Aqtau',
                            label: 'West Kazakhstan Time - Aqtau',
                        },
                        {
                            value: 'Asia/Aqtobe',
                            label: 'West Kazakhstan Time - Aqtobe',
                        },
                        {
                            value: 'Asia/Atyrau',
                            label: 'West Kazakhstan Time - Atyrau',
                        },
                        {
                            value: 'Asia/Oral',
                            label: 'West Kazakhstan Time - Oral',
                        },
                        {
                            value: 'Asia/Qyzylorda',
                            label: 'West Kazakhstan Time - Qyzylorda',
                        },
                        {
                            value: 'Asia/Yekaterinburg',
                            label: 'Yekaterinburg Standard Time',
                        },
                        {
                            value: 'Asia/Colombo',
                            label: 'India Standard Time - Colombo',
                        },
                        {
                            value: 'Asia/Kolkata',
                            label: 'India Standard Time - Kolkata',
                        },
                        { value: 'Asia/Kathmandu', label: 'Nepal Time' },
                        {
                            value: 'Asia/Dhaka',
                            label: 'Bangladesh Standard Time',
                        },
                        { value: 'Asia/Thimphu', label: 'Bhutan Time' },
                        {
                            value: 'Asia/Almaty',
                            label: 'East Kazakhstan Time - Almaty',
                        },
                        {
                            value: 'Asia/Qostanay',
                            label: 'East Kazakhstan Time - Kostanay',
                        },
                        { value: 'Indian/Chagos', label: 'Indian Ocean Time' },
                        { value: 'Asia/Bishkek', label: 'Kyrgyzstan Time' },
                        { value: 'Asia/Omsk', label: 'Omsk Standard Time' },
                        { value: 'Asia/Urumqi', label: 'Urumqi Time' },
                        { value: 'Antarctica/Vostok', label: 'Vostok Time' },
                        { value: 'Indian/Cocos', label: 'Cocos Islands Time' },
                        { value: 'Asia/Yangon', label: 'Myanmar Time' },
                        { value: 'Asia/Barnaul', label: 'Barnaul Time' },
                        {
                            value: 'Indian/Christmas',
                            label: 'Christmas Island Time',
                        },
                        { value: 'Antarctica/Davis', label: 'Davis Time' },
                        { value: 'Asia/Hovd', label: 'Hovd Standard Time' },
                        {
                            value: 'Asia/Bangkok',
                            label: 'Indochina Time - Bangkok',
                        },
                        {
                            value: 'Asia/Ho_Chi_Minh',
                            label: 'Indochina Time - Ho Chi Minh City',
                        },
                        {
                            value: 'Asia/Krasnoyarsk',
                            label: 'Krasnoyarsk Standard Time - Krasnoyarsk',
                        },
                        {
                            value: 'Asia/Novokuznetsk',
                            label: 'Krasnoyarsk Standard Time - Novokuznetsk',
                        },
                        {
                            value: 'Asia/Novosibirsk',
                            label: 'Novosibirsk Standard Time',
                        },
                        { value: 'Asia/Tomsk', label: 'Tomsk Time' },
                        {
                            value: 'Asia/Jakarta',
                            label: 'Western Indonesia Time - Jakarta',
                        },
                        {
                            value: 'Asia/Pontianak',
                            label: 'Western Indonesia Time - Pontianak',
                        },
                        {
                            value: 'Australia/Perth',
                            label: 'Australian Western Standard Time',
                        },
                        {
                            value: 'Asia/Brunei',
                            label: 'Brunei Darussalam Time',
                        },
                        {
                            value: 'Asia/Makassar',
                            label: 'Central Indonesia Time',
                        },
                        {
                            value: 'Asia/Macau',
                            label: 'China Standard Time - Macao',
                        },
                        {
                            value: 'Asia/Shanghai',
                            label: 'China Standard Time - Shanghai',
                        },
                        {
                            value: 'Asia/Hong_Kong',
                            label: 'Hong Kong Standard Time',
                        },
                        {
                            value: 'Asia/Irkutsk',
                            label: 'Irkutsk Standard Time',
                        },
                        {
                            value: 'Asia/Kuala_Lumpur',
                            label: 'Malaysia Time - Kuala Lumpur',
                        },
                        {
                            value: 'Asia/Kuching',
                            label: 'Malaysia Time - Kuching',
                        },
                        {
                            value: 'Asia/Manila',
                            label: 'Philippine Standard Time',
                        },
                        {
                            value: 'Asia/Singapore',
                            label: 'Singapore Standard Time',
                        },
                        { value: 'Asia/Taipei', label: 'Taipei Standard Time' },
                        {
                            value: 'Asia/Choibalsan',
                            label: 'Ulaanbaatar Standard Time - Choibalsan',
                        },
                        {
                            value: 'Asia/Ulaanbaatar',
                            label: 'Ulaanbaatar Standard Time - Ulaanbaatar',
                        },
                        {
                            value: 'Australia/Eucla',
                            label: 'Australian Central Western Standard Time',
                        },
                        { value: 'Asia/Dili', label: 'East Timor Time' },
                        {
                            value: 'Asia/Jayapura',
                            label: 'Eastern Indonesia Time',
                        },
                        { value: 'Asia/Tokyo', label: 'Japan Standard Time' },
                        {
                            value: 'Asia/Pyongyang',
                            label: 'Korean Standard Time - Pyongyang',
                        },
                        {
                            value: 'Asia/Seoul',
                            label: 'Korean Standard Time - Seoul',
                        },
                        { value: 'Pacific/Palau', label: 'Palau Time' },
                        {
                            value: 'Asia/Chita',
                            label: 'Yakutsk Standard Time - Chita',
                        },
                        {
                            value: 'Asia/Khandyga',
                            label: 'Yakutsk Standard Time - Khandyga',
                        },
                        {
                            value: 'Asia/Yakutsk',
                            label: 'Yakutsk Standard Time - Yakutsk',
                        },
                        {
                            value: 'Australia/Darwin',
                            label: 'Australian Central Standard Time',
                        },
                        {
                            value: 'Australia/Adelaide',
                            label: 'Central Australia Time - Adelaide',
                        },
                        {
                            value: 'Australia/Broken_Hill',
                            label: 'Central Australia Time - Broken Hill',
                        },
                        {
                            value: 'Australia/Brisbane',
                            label: 'Australian Eastern Standard Time - Brisbane',
                        },
                        {
                            value: 'Australia/Lindeman',
                            label: 'Australian Eastern Standard Time - Lindeman',
                        },
                        {
                            value: 'Pacific/Guam',
                            label: 'Chamorro Standard Time',
                        },
                        { value: 'Pacific/Chuuk', label: 'Chuuk Time' },
                        {
                            value: 'Australia/Hobart',
                            label: 'Eastern Australia Time - Hobart',
                        },
                        {
                            value: 'Antarctica/Macquarie',
                            label: 'Eastern Australia Time - Macquarie',
                        },
                        {
                            value: 'Australia/Melbourne',
                            label: 'Eastern Australia Time - Melbourne',
                        },
                        {
                            value: 'Australia/Sydney',
                            label: 'Eastern Australia Time - Sydney',
                        },
                        {
                            value: 'Pacific/Port_Moresby',
                            label: 'Papua New Guinea Time',
                        },
                        {
                            value: 'Asia/Ust-Nera',
                            label: 'Vladivostok Standard Time - Ust-Nera',
                        },
                        {
                            value: 'Asia/Vladivostok',
                            label: 'Vladivostok Standard Time - Vladivostok',
                        },
                        {
                            value: 'Australia/Lord_Howe',
                            label: 'Lord Howe Time',
                        },
                        {
                            value: 'Pacific/Bougainville',
                            label: 'Bougainville Time',
                        },
                        { value: 'Antarctica/Casey', label: 'Casey Time' },
                        { value: 'Pacific/Kosrae', label: 'Kosrae Time' },
                        {
                            value: 'Asia/Magadan',
                            label: 'Magadan Standard Time',
                        },
                        {
                            value: 'Pacific/Noumea',
                            label: 'New Caledonia Standard Time',
                        },
                        {
                            value: 'Pacific/Norfolk',
                            label: 'Norfolk Island Time',
                        },
                        { value: 'Pacific/Pohnpei', label: 'Ponape Time' },
                        {
                            value: 'Asia/Sakhalin',
                            label: 'Sakhalin Standard Time',
                        },
                        {
                            value: 'Pacific/Guadalcanal',
                            label: 'Solomon Islands Time',
                        },
                        {
                            value: 'Asia/Srednekolymsk',
                            label: 'Srednekolymsk Time',
                        },
                        {
                            value: 'Pacific/Efate',
                            label: 'Vanuatu Standard Time',
                        },
                        { value: 'Asia/Anadyr', label: 'Anadyr Standard Time' },
                        { value: 'Pacific/Fiji', label: 'Fiji Time' },
                        {
                            value: 'Pacific/Tarawa',
                            label: 'Gilbert Islands Time',
                        },
                        {
                            value: 'Pacific/Kwajalein',
                            label: 'Marshall Islands Time - Kwajalein',
                        },
                        {
                            value: 'Pacific/Majuro',
                            label: 'Marshall Islands Time - Majuro',
                        },
                        { value: 'Pacific/Nauru', label: 'Nauru Time' },
                        {
                            value: 'Pacific/Auckland',
                            label: 'New Zealand Time',
                        },
                        {
                            value: 'Asia/Kamchatka',
                            label: 'Petropavlovsk-Kamchatski Standard Time',
                        },
                        { value: 'Pacific/Funafuti', label: 'Tuvalu Time' },
                        { value: 'Pacific/Wake', label: 'Wake Island Time' },
                        {
                            value: 'Pacific/Wallis',
                            label: 'Wallis & Futuna Time',
                        },
                        { value: 'Pacific/Chatham', label: 'Chatham Time' },
                        { value: 'Pacific/Apia', label: 'Apia Standard Time' },
                        { value: 'Pacific/Fakaofo', label: 'Tokelau Time' },
                        {
                            value: 'Pacific/Tongatapu',
                            label: 'Tonga Standard Time',
                        },
                        {
                            value: 'Pacific/Kiritimati',
                            label: 'Line Islands Time',
                        },
                    ],
                },
            },
            /** Avatar src. */
            avatar: {
                label: 'Avatar src',
                type: 'image',
                options: { requiredSizes: ['*'] },
            },
            /** Phone. A number that can be texted */
            phone: {
                label: 'Phone',
                type: 'phone',
                isPrivate: true,
                hint: 'A number that can be texted',
                options: undefined,
            },
            /** . */
            password: {
                type: 'text',
                options: undefined,
            },
            /** . */
            securityQuestions: {
                type: 'schema',
                isArray: true,
                options: { schema: securityQuestionSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(updatePersonEmitPayloadSchema)

export default updatePersonEmitPayloadSchema
