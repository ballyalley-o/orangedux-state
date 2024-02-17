import React, { FC, ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { useAction, useTypedSelector } from '../../hook'

const RepoList: FC = () => {
  const [pkg, setPkg] = useState('')
  const { searchRepository } = useAction()
  const { data, error, loading } = useTypedSelector(
    (state) => state.respository
  )

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPkg(e.target.value)

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepository(pkg)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input value={pkg} onChange={(e) => setPkg(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data?.map((name: any) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepoList
