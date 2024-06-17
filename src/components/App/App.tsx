import RootRoutes from 'routes/RootRoutes';
import packageJSON from '../../../package.json';

const App = () => {
  console.log(`v${packageJSON.version}`);

  return <RootRoutes />;
};

export default App;
