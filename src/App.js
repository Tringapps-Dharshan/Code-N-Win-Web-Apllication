import './bootstrap/css/bootstrap.min.css'
import Content from './Content';
import Nav from './Nav';
function App() {
  return (
    <div className="row">
      <div className='col-sm-3'>
        <Nav/>
      </div>
      <div className='col-sm-9 bg-white'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
