import Home from './pages/home.jsx';
import Layout from './components/layout.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
// Remix icon
import 'remixicon/fonts/remixicon.css';

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Home />
    </Layout>
  );
}
