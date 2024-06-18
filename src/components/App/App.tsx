import { useEffect } from 'react';
import RootRoutes from 'routes/RootRoutes';
import { checkLsRatingData } from 'utils/checkLsRatingData';
import packageJSON from '../../../package.json';

const App = () => {
  console.log(`v${packageJSON.version}`);

  useEffect(() => {
    checkLsRatingData();
  }, []);

  return <RootRoutes />;
};

export default App;
