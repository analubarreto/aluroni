import styles from './SearchInput.module.scss';
import React from 'react';
import { CgSearch } from 'react-icons/cg';

interface Props {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchInput({ search, setSearch }: Props) {
  return (
    <div className={styles.searchWrapper}>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search in our menu" />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  )
}