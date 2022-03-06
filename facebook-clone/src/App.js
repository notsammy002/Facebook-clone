import './App.css';
import HomePost from './components/HomePost';
import MediaPost from './components/MediaPost';
import PostInput from './components/PostInput';


function App() {
  return (
    <div className="App">
      <h1>hello first time using mui</h1>
      {/* //<MediaPost />// */}
      <MediaPost />
      <HomePost />
      <PostInput />
    </div>
  );
}

export default App;
