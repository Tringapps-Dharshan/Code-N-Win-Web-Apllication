import Content from './Content';
import Nav from './Nav';
function App() {
  return (
    <div className="row m-0">
      <div className='col-sm-2 navbg'>
        <Nav/>
      </div>
      <div className='col-sm-10 bg-white'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
