export const ContactList = ({ contacts }) => {
    
    return <section>
        <h2>Contacts</h2>
        <ul>
            {contacts.map((contact) => {
                return <li>
        {contact.name}
                </li>
            })}
        </ul>
    </section>
}