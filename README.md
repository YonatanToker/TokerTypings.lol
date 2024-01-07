# [TokerTypings.lol](https://tokertypings.lol/)
Welcome to TokerTypings.lol, a modern and minimalistic typing tests website.
Edit: Don't contribute, some time after releasing it, the project's typing logic is good however the localStorage is not associated with context, the logic for websites that save results or user preferences in localStorage should be that they would work with React context or some state mangement solution and then set that localStorage will be associated with that context or state mangement solution, for the elements inside the apps only render them after it loads the value of the context, if can't or doesn't exist then create one with some default values.
----------------
Anyway I created a whole better website: https://smashertypist.com/ and it has or will have (I'm typing this as I'm in the middle of building it) 40 different languages and full control over the typing preferences, the results are saved to the database with your user. Most importantly it isn't broken like this website in the localStorage side :)


![four-pics](https://github.com/YonatanToker/TokerTypings.lol/assets/116793943/c4053562-ffb5-4d25-9698-b245cd9086fe)

## Overview
TokerTypings.lol is built with simplicity and user experience in mind. Whether you're looking to hone your typing skills, compete with your past scores, or simply get into the world of touch typing, this platform offers you the tools and adaptability you need:

- **Custom Preferences:** Adjust the theme, font, and punctuation based on your preferences - all saved to your localStorage.
- **Multiple Difficulty Levels:** Choose between Easy, Normal, or Hard typing tests.
- **Instant Feedback:** Once done with your typing test, get instant results on your words per minute (WPM), accuracy, correct and wrong words count.
- **Progress Tracking:** Dive deep into your typing journey with a chart reflecting your historical test results on the Statistics page.
- **No Sign-ups:** No need to register. All your data and settings are stored in your browser's localStorage.

## Getting Started
To get started, just navigate to the website and begin your typing journey! Adjust your preferences and get typing.

## Contribute
TokerTypings.lol is open-source and contributions are always welcome! Check out our [contribution guidelines](./CONTRIBUTING.md) for more details.

To get started with local development:

```bash
# Clone the repository
git clone https://github.com/YonatanToker/TokerTypings.lol.git

# Navigate to the directory
cd TokerTypings.lol

# Install the dependencies
npm install

# Start the local development server
npm run dev
```
## Support the Project
If you've found value in this platform and wish to show your appreciation:

- **Star on Github:** If you like the project, consider giving it a star on Github!
- **Donate:** Your support will help keep the platform free and support future developments. [Donate here](https://www.paypal.com/paypalme/yonatantoker).
- **Contribute:** Dive into the code, add features, fix bugs, and become a part of the TokerTypings.lol community.

## Special Thanks
Huge thanks to everyone who has supported, contributed, or used TokerTypings.lol. Your support and feedback are invaluable!

## License
This project is licensed under the [MIT License](./LICENSE.md).
