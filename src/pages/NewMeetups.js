import AddNewMeetupForm from "../components/meetup/AddNewMeetupForm";

function NewMeetupPage() {
    function onAddMeetupHandler(meetupData) {

    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <AddNewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;