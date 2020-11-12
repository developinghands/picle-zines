# Fetching Docs from Collection
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