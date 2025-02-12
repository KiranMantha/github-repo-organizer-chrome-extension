import { useRef } from 'preact/hooks';
import { Button, Card, Dialog } from '../ui';
import { StyledCollection, StyledReposContainer, StyledReposList } from './Collection.styles';

export const Collection = ({
  data,
  onAddRepo
}: {
  data: { name: string; repos: string[] };
  onAddRepo: (repoUrl: string) => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const showCollection = () => {
    dialogRef.current?.showModal();
  };

  const addRepo = () => {
    const repoUrl = prompt('Enter repo url:');
    if (repoUrl) onAddRepo(repoUrl);
  };

  return (
    <div>
      <Card className="pointer flex-item" onClick={showCollection}>
        <StyledCollection>
          <svg
            className="icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="File / Folder_Document">
                <path
                  id="Vector"
                  d="M9 15H15M9 12H15M3 6V16.8C3 17.9201 3 18.4796 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8037C18.9216 20 19.4806 20 19.908 19.7822C20.2843 19.5905 20.5905 19.2841 20.7822 18.9078C21.0002 18.48 21.0002 17.9199 21.0002 16.7998L21.0002 9.19978C21.0002 8.07967 21.0002 7.51962 20.7822 7.0918C20.5905 6.71547 20.2837 6.40973 19.9074 6.21799C19.4796 6 18.9201 6 17.8 6H12M3 6H12M3 6C3 4.89543 3.89543 4 5 4H8.67452C9.1637 4 9.40915 4 9.63933 4.05526C9.8434 4.10425 10.0379 4.18526 10.2168 4.29492C10.4186 4.41856 10.5918 4.59183 10.9375 4.9375L12 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
          {data.name}
        </StyledCollection>
      </Card>
      <Dialog
        ref={dialogRef}
        title="Repos"
        footer={
          <div className="text-center">
            <Button varient="primary" onClick={addRepo}>
              Add Repo
            </Button>
          </div>
        }
      >
        <StyledReposContainer>
          {data.repos.length ? (
            <StyledReposList>
              {data.repos.map((repourl) => (
                <li>
                  <svg
                    aria-label="public repo"
                    className="icon"
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                  >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  {repourl}
                </li>
              ))}
            </StyledReposList>
          ) : null}
          {!data.repos.length && (
            <div>
              <i>Please add a repo</i>
            </div>
          )}
        </StyledReposContainer>
      </Dialog>
    </div>
  );
};
