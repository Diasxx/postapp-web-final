import React from 'react';
const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1>Contact Information</h1>
            <p>Email: <span className="contact-info">example@email.com</span></p>
            <p>Phone: <span className="contact-info">123-456-7890</span></p>

            {/* Add more information as needed */}

            <hr />

            <h2>Additional Information</h2>
            <div>
                <p>Address: <span className="contact-info">123 Main Street</span></p>
                <p>City: <span className="contact-info">Cityville</span></p>
                {/* Add more information as needed */}
            </div>

            <hr />

            <h2>Contact Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <br />

                <label>Gender:</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>

                <br />

                <label>
                    <input type="checkbox" name="subscribe" /> Subscribe to newsletter
                </label>

                <br />

                <button type="submit">Submit</button>
            </form>

            <hr />

            <h2>Contact Table</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>555-1234</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3">Footer information</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Contacts;
