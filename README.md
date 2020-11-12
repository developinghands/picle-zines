## Fetching Docs from Collection
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

## Get Doc from collection based on specific ID
In where clause, '__name__' is the reference for ID
```javascript
  useEffect(() => {
    if (id) {
      db.collection("news")
        .where("__name__", "==", id)
        .get()
        .then(snap => {
          setData(
            snap.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        })
        .catch(error => console.error("Error: ", error));
    } else {
      console.log("No Post Data Found, loading dummy data... ");
    }
  }, []);
```

## Fetching Image from firestorage

```javascript
Fetch only if URL is passed as in props
export default function Suggested({url}){
  if (url) {
    storage
      .ref()
      .child(`${url}`)
      .getDownloadURL()
      .then(image => {
        setImage(image);
      }).catch(error => console.log(error));
  }
}
```

