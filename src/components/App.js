import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Login from "./Login";
import Counter from "./Counter";
import Time from "./Time";
import notes from "../notes";

// function createNote(note){
//   return <Note
//   id={note.id}
//   key={note.id}
//   title={note.title}
//   content={note.content} />
// }
var isLoggedIn = true;
var userIsRegistered = true;
function App() {
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <main>
          <section>
            <Counter />
            <Time />
          </section>
          <section>
            {notes.map((note) => (
              <Note
                id={note.id}
                key={note.id}
                title={note.title}
                content={note.content}
              />
            ))}
          </section>
        </main>
      ) : (
        <Login isRegistered={userIsRegistered} />
      )}
      <Footer />
    </div>
  );
}

export default App;
