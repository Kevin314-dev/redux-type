import * as React from "react"

type Props = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
       <fieldset className="Add-article">
          <fieldset className="form-group">
              <input className="form-control "
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
              />
          </fieldset>
          <fieldset className="form-group">
              <input className="form-control"
                type="text"
                id="body"
                placeholder="Description"
                onChange={handleArticleData}
              />

          </fieldset>
        
          <button className="btn btn-primary" disabled={article === undefined ? true : false}>
            Add article
          </button>
       </fieldset>
     
    </form>
  )
}

