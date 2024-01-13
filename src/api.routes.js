// const FULL_ROUTE = window.location.href

// export const APP_NAME = "report-builder"
// export const API_BASE_ROUTE = FULL_ROUTE.substring(0, FULL_ROUTE.indexOf('/apps/'.concat(APP_NAME).concat('/')))
// export const SERVER_URL = FULL_ROUTE.substring(0, FULL_ROUTE.indexOf('/api/apps/'.concat(APP_NAME)))
// export const ORGANISATION_UNITS_ROUTE = API_BASE_ROUTE.concat('/organisationUnits.json?paging=false&fields=id,name,displayName,parent,level')
// export const SUPERVISORS_ROUTE = API_BASE_ROUTE.concat('/users.json')
// export const ME_ROUTE = API_BASE_ROUTE.concat('/me.json?fields=id,displayName,name,authorities,userGroups')
// export const ME_SETTINGS_ROUTE = API_BASE_ROUTE.concat('/systemSettings.json')
// export const ORGANISATION_UNIT_GROUP_ROUTE = API_BASE_ROUTE.concat('/organisationUnitGroups.json?paging=false')
// export const PERIOD_TYPE_ROUTE = API_BASE_ROUTE.concat('/periodTypes.json?paging=false')
// export const ORGANISATION_UNIT_LEVELS_ROUTE = API_BASE_ROUTE.concat('/organisationUnitLevels.json?paging=false&fields=id,name,level')
// export const DATA_ELEMENTS_ROUTE = API_BASE_ROUTE.concat('/dataElements.json?paging=false&fields=id,name,domainType,dimensionItemType')
// export const INDICATORS_ROUTE = API_BASE_ROUTE.concat('/indicators.json?paging=false&fields=id,name,dimensionItemType')
// export const PROGRAM_INDICATORS_ROUTE = API_BASE_ROUTE.concat('/programIndicators.json?paging=false&fields=id,name,dimensionItemType,trackedEntityAttribute')
// export const PROGRAMS_ROUTE = API_BASE_ROUTE.concat('/programs.json?paging=false&fields=id,name')
// export const USER_GROUPS_ROUTE = API_BASE_ROUTE.concat('/userGroups.json?paging=false')
// export const SYSTEM_INFOS_ROUTE = API_BASE_ROUTE.concat('/system/info.json')
// export const DATA_STORE_ROUTE = API_BASE_ROUTE.concat('/dataStore')
// export const ANALYTICS_ROUTE = API_BASE_ROUTE.concat("/analytics/dataValueSet.json")
// export const TEIS_ROUTE = API_BASE_ROUTE.concat('/trackedEntityInstances.json')
// export const SMS_ROUTE_API = API_BASE_ROUTE.concat('/sms/outbound')
// export const TRACKER_ENTITY_INSTANCES_ROUTE = API_BASE_ROUTE.concat('/trackedEntityInstances')
// export const ONE_ORG_UNIT_GROUP_ROUTE = API_BASE_ROUTE.concat('/organisationUnitGroups')


// for local

const FULL_ROUTE = "http://localhost:9999/api"

export const APP_NAME = "hmis-report-builder"
// export const API_BASE_ROUTE = FULL_ROUTE.substring(0, FULL_ROUTE.indexOf('/apps/'.concat(APP_NAME).concat('/')))
export const SERVER_URL = FULL_ROUTE.substring(0, FULL_ROUTE.indexOf('/api/apps/'.concat(APP_NAME)))
export const ORGANISATION_UNITS_ROUTE = FULL_ROUTE.concat('/organisationUnits.json?paging=false&fields=id,name,displayName,parent,level')
export const SUPERVISORS_ROUTE = FULL_ROUTE.concat('/users.json')
export const ME_ROUTE = FULL_ROUTE.concat('/me.json?fields=id,displayName,name,authorities,userGroups')
export const ME_SETTINGS_ROUTE = FULL_ROUTE.concat('/systemSettings.json')
export const ORGANISATION_UNIT_GROUP_ROUTE = FULL_ROUTE.concat('/organisationUnitGroups.json?paging=false')
export const PERIOD_TYPE_ROUTE = FULL_ROUTE.concat('/periodTypes.json?paging=false')
export const ORGANISATION_UNIT_LEVELS_ROUTE = FULL_ROUTE.concat('/organisationUnitLevels.json?paging=false&fields=id,name,level')
export const DATA_ELEMENTS_ROUTE = FULL_ROUTE.concat('/dataElements.json?paging=false&fields=id,name,domainType,dimensionItemType')
export const INDICATORS_ROUTE = FULL_ROUTE.concat('/indicators.json?paging=false&fields=id,name,dimensionItemType')
export const PROGRAM_INDICATORS_ROUTE = FULL_ROUTE.concat('/programIndicators.json?paging=false&fields=id,name,dimensionItemType,trackedEntityAttribute')
export const PROGRAMS_ROUTE = FULL_ROUTE.concat('/programs.json?paging=false&fields=id,name')
export const USER_GROUPS_ROUTE = FULL_ROUTE.concat('/userGroups.json?paging=false')
export const SYSTEM_INFOS_ROUTE = FULL_ROUTE.concat('/system/info.json')
export const DATA_STORE_ROUTE = FULL_ROUTE.concat('/dataStore')
export const ANALYTICS_ROUTE = FULL_ROUTE.concat("/analytics/dataValueSet.json")
export const TEIS_ROUTE = FULL_ROUTE.concat('/trackedEntityInstances.json')
export const SMS_ROUTE_API = FULL_ROUTE.concat('/sms/outbound')
export const TRACKER_ENTITY_INSTANCES_ROUTE = FULL_ROUTE.concat('/trackedEntityInstances')
export const ONE_ORG_UNIT_GROUP_ROUTE = FULL_ROUTE.concat('/organisationUnitGroups')



