chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
      defaultEmotes: {
        '4Head': 'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/453150489_2247616115597177_4345249609147547689_n.jpg?stp=cp0_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AWQ12O1cFlUQ7kNvgFvgZkM&_nc_ht=scontent.ftun14-1.fna&oh=00_AYDJjrHFUq4jcbhkdtN_Q5cflOsalqg__v9HLehbs1rkng&oe=66AD03D4',
        'FeelsBadMan': 'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/453208819_2247615285597260_562199660378188488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3-RO2tzSBegQ7kNvgGzPi05&_nc_ht=scontent.ftun14-1.fna&oh=00_AYBPxC__nCO_uq551s3UEW00_MygI5oYif7Zn8MqdASu7w&oe=66AD154F',
        'PepeLaugh': 'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/453286345_2247613248930797_6536794089292726622_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0Rw20bZUTG4Q7kNvgHnH2F8&_nc_ht=scontent.ftun14-1.fna&oh=00_AYCVCe1neKVZGl__Nj2nX0rL3PfHOmYqsw0w5fNJo54KNA&oe=66AD1C2F'
      }
    });
  });