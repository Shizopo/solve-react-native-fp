// @flow

// const contactsApi = arr => {
//   let data = fetchContacts(arr);
//   console.log("data", data);
//   return new Promise<{}>((resolve, reject) => {
//     resolve(data);
//     reject(new Error("Something just went wrong"));
//   });
// };

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const arrangeContactsList = resp => {
  let currentData = [];
  resp.forEach(el => {
    currentData.push({
      id: el.id,
      name: el.name,
      photo: el.image,
      location: el.location.name,
      gender: el.gender,
      isOnline: Math.random() * (3 - 1) + 1 > 2 ? true : false,
      messages: [
        {
          author: el.name,
          status: "read",
          date: randomDate(new Date(2018, 0, 1), new Date()),
          text: "Some generated text will appear here, but not now",
        },
        {
          author: el.name,
          status: "read",
          date: randomDate(new Date(2018, 0, 1), new Date()),
          text: "Some generated text will appear here, but not now",
        },
        {
          author: el.name,
          status: "read",
          date: randomDate(new Date(2018, 0, 1), new Date()),
          text: "Some generated text will appear here, but not now",
        },
        {
          author: el.name,
          status: "read",
          date: randomDate(new Date(2018, 0, 1), new Date()),
          text: "Some generated text will appear here, but not now",
        },
        {
          author: el.name,
          status: "read",
          date: randomDate(new Date(2018, 0, 1), new Date()),
          text: "Some generated text will appear here, but not now",
        },
      ],
    });
  });
  return currentData;
};

// const fetchContacts = arr => {
//   fetch(`https://rickandmortyapi.com/api/character/${arr}`)
//     .then(resp => resp.json())
//     .then(resp => {
//       const arrangedContactsList = arrangeContactsList(resp);
//       console.log("arranged", arrangedContactsList);
//       console.log("NOTarranged", resp);

//       return arrangedContactsList;
//     })
//     .catch(err => console.log(err));
// };

// const callContactsApi = arr => contactsApi(arr);

class ContactsService {
  callContactsApi(arr) {
    // return contactsApi(arr);
    return new Promise<{}>((resolve, reject) => {
      fetch(`https://rickandmortyapi.com/api/character/${arr}`)
        .then(resp => resp.json())
        .then(resp => {
          const arrangedContactsList = arrangeContactsList(resp);
          resolve(arrangedContactsList);
          reject(new Error("Something just went wrong"));
          //   return arrangedContactsList;
        })
        .catch(err => console.log(err));
    });
  }
}

const contactsService = new ContactsService();

export { contactsService };
