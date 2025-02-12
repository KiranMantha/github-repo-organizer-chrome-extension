import { useState } from 'preact/hooks';
import { Collection } from './collection';
import { Button, Card } from './ui';

export function App() {
  const [collections, setCollections] = useState<Array<{ name: string; repos: string[] }>>([]);

  const addCollection = () => {
    const collection = prompt('Enter collection name:');
    if (collection) setCollections([...collections, { name: collection, repos: [] }]);
  };

  const addRepoToCollection = (repoUrl: string, index: number) => {
    collections[index].repos.push(repoUrl);
    setCollections([...collections]);
  };

  return (
    <section className="collections-container">
      <div>
        <h4 className="collections-title">
          Collections
          <Button onClick={addCollection}>Add Collection</Button>
        </h4>
      </div>
      <div className="collections">
        {collections.map((item, i) => {
          return (
            <Collection
              data={item}
              key={`${item.name}_${i}`}
              onAddRepo={(repoUrl: string) => {
                addRepoToCollection(repoUrl, i);
              }}
            />
          );
        })}
      </div>
      {!collections.length && (
        <Card>
          <i>Add some collections</i>
        </Card>
      )}
    </section>
  );
}
