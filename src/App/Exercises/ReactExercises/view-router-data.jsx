import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
export const blockRouterMetaData = [ 
    ReactRouterEventsMetaData, 
    ReactRouterEventsMetaData, 
    ReactRouterEventsMetaData, 
    ReactRouterEventsMetaData,
 ];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
