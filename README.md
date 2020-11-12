# Fetching Docs from Collection
In useEffect method...
```javascript
    db.collection("news")                                       //firebase collection
      .get()
      .then(snapshot =>
        setSuggest(                                             //set suggest
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
      .catch(error => {
        console.error("Error: ", error);                        //error
      });
```

# Fetching Image from firestorage

```javascript
export default function Suggested({url}){
  if (url) {
    storage
      .ref()
      .child(`${url}`)
      .getDownloadURL()
      .then(image => {
        setImage(image);
      });
  }
}
```