3-6 Challenge: Pet Competition Web Form
---------------------------------------

Build a Form
    For this challenge activity you are to design and create one web page that includes an HTML form. This form will use several different form elements.

    The web page is to use the standard overhead for HTML5.

 

Header
    Above the form add a header section related to the pet competition. Include some text and a background image.

 

The Form
    Add a form that uses the POST method to send the form data to http://example.com/example (Links to an external site.). This server page will actually process your form data. It will produce a table that lists all the form variables and their current value.
    Add a name attribute to each of the form elements to create a field that will be submitted.
    Add an input element that submits the form.
    As you add elements, you can click this submit button to make sure the data for each form element is being submitted.
    Add an input element that resets all the form elements to their default state
 

Section for Pet Information
    Add an area in the form to gather the following information about the pet.

        Add a heading for this area of the form
    Include the specified form elements.

        name
            text input
            label
        birthdate
            date input
            label
        pet type
            radio button group with a radio button and label for each of the following
                Cat
                Dog
                Reptile
                Bird
                Rodent
        pet bio
            textarea
            label or paragraph explaining to enter a short biography of the pet
 

Section for Contact Information
    Add an area in the form to gather contact information about the pet owner.

        Add a heading for this area of the form
    Gather the following information about the pet owner. Include the specified form elements.

        name
            text input
            label
        telephone number
            tel input
            label
        email
            email input
            label
 

Section About Competition Entry
    Add an area in the form to gather information about the competition entry.

        Add a heading for this area of the form
    Gather the following information about the competition entry. Include the specified form elements.

        which competition they are entering
            a checkbox and label for each of the following
                singing pet competition
                cutest pet competition
                pet tricks competition
        name of the entry
            text input
            label
        for the pet tricks competition include a select element with options for the following.
            obstacle course
            frisbee/ball/other catching
            roll over/play dead 
            other
 

Section About Boarding
    Add an area in the form to gather information about pet boarding during the competition.
        Add a heading for this area of the form
    Gather the following information about the pet boarding. Include the specified form elements.

        how many days of boarding
            number input
            label
            minimum value of 0
            maximum value of 3
        size of kennel in inches
            slider input
                minimum value 0
                maximum value 48 inch
                step of 8 inch
 

Validate the Web Form
    Set the following form elements to be required
        pet owner name
        pet owner phone number
        pet owner email
    Use the following pattern for the phone number
        ^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$
 

Style the Web Form
    Add at least one fieldset with legend
    Add at least two related images (in addition to the background image for the header)
    Add style to the web page by linking it to an external .css file.
    Add color (text or background)
    Style the form elements to create a general theme.
    Include padding and margin sizes that produce comfortable spacing throughout the form.
    Change the style on focus for the three required elements. Set the background to one color when the input is valid and another color when it is invalid.
        pet owner name
        pet owner phone number
        pet owner email