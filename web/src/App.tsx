import { useMemo } from 'react';
import Robot from 'lib/core/Robot';

import useLoadable from './utils/useLoadable';
import LocalRobotRepository from './data/LocalRobotRepository';
import ServiceContext, { ServiceContextType } from './serviceContext';
import IRepository from 'lib/core/IRepository';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import ListRobots from './ListRobots';
import ViewRobot from './ViewRobot';
import EditRobot from './Edit';

function App() {
  const [robotRepository, isRobotRepositoryLoading] = useLoadable<IRepository<Robot>>(async () => {
    const repo = new LocalRobotRepository();
    await repo.init();
    
    return repo;
  });

  const services = useMemo<ServiceContextType>(() => ({
    robotRepository,
  }), [robotRepository]);

  if (isRobotRepositoryLoading) return <div>Loading...</div>;

  return (
    <ServiceContext.Provider value={services}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListRobots />} />
          <Route path="create" element={<Create />} />
          <Route path=":id" element={<ViewRobot />} />
          <Route path=":id/edit" element={<EditRobot />} />
        </Routes>
      </BrowserRouter>
    </ServiceContext.Provider>
  );
}

export default App;
