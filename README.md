# Twitch Emotes for Facebook

Twitch Emotes for Facebook is a Chrome extension that enhances your Facebook experience by replacing specific text with Twitch emotes. You can also add custom emotes to personalize your interactions.

## Features

- **Text Replacement**: Automatically replaces predefined text with Twitch emotes on Facebook.
- **Custom Emotes**: Add and use your custom emotes.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click `Load unpacked` and select the extension's directory.

## Important Notes

- **Emote URLs**: Due to Content Security Policy (CSP) restrictions, you must use URLs from specific domains. Only URLs from the following domains are allowed:
  - `fbcdn.net`
  - `facebook.com`
  - `fbsbx.com`
  - `cdninstagram.com`
  - `whatsapp.net`
  - `fb.com`
  - `oculuscdn.com`
  - `tenor.co`
  - `tenor.com`
  - `giphy.com`

  To work around this restriction, you need to upload emotes as Facebook posts to obtain a valid URL. For example:
  [https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/453097694_2247706425588146_5274859161791835768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SP_2u2DDvLsQ7kNvgGXkjbL&_nc_ht=scontent.ftun14-1.fna&oh=00_AYDOQQmxAXiTR8KyMPKeqEIq_kRX3kr88U-ntMRVV50rNA&oe=66AD4163](https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/453097694_2247706425588146_5274859161791835768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SP_2u2DDvLsQ7kNvgGXkjbL&_nc_ht=scontent.ftun14-1.fna&oh=00_AYDOQQmxAXiTR8KyMPKeqEIq_kRX3kr88U-ntMRVV50rNA&oe=66AD4163)
  
- **Uploading Emotes**: To use custom emotes, you need to upload them as posts on Facebook to get a valid URL.

## Screenshots

### Adding Emotes

![Popup](screenshots/popup.png)

### Emotes in Action

![Emotes in Action](screenshots/example.png)

## To Do

- **Support for GIFs**: Currently, the extension only supports static images. Implementing GIF support to allow animated emotes if possible.
- **Find a way to use pngs**: Since Facebook automatically adds white bg to pngs, the only work around is to make a circular emote to hide as much as possible of the white bg.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
