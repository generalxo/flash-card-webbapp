// created component
import Header from "../components/Header/Header";
// styled components

const DecksPage = () => {
  return (
    <>
        <Header title="Decks" />
        <div>
            <a>
                <p>Link to create a new deck</p>
            </a>
            <h3>Here all a users Decks should be listed</h3>
        </div>
    </>
  )
}

export default DecksPage;