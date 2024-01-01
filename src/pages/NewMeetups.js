import { useNavigate } from 'react-router-dom'
import AddNewMeetupForm from "../components/meetup/AddNewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate()
    function onAddMeetupHandler(meetupData) {
        fetch('https://meetups-app-a25df-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/')
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <AddNewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;