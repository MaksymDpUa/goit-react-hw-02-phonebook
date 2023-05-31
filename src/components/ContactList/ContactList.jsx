export const ContactList = ({ contacts }) => {
    
    return <section>
        <h2>Contacts</h2>
        <ul>
            {contacts.map((contact) => {
                return <li key={contact.name}>
        {contact.name}: {contact.number}
                </li>
            })}
        </ul>
    </section>
}