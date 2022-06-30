import IRepository from 'lib/core/IRepository';
import Robot from 'lib/core/Robot';
import React, { useContext } from 'react';

export type ServiceContextType = {
  robotRepository?: IRepository<Robot>;
};

const initServices = {
  robotRepository: undefined,
}

const ServiceContext = React.createContext<ServiceContextType>(initServices);

export const useService = () => useContext(ServiceContext);
export default ServiceContext;