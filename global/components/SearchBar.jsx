import SearchIcon from "@rsuite/icons/Search";
import { AutoComplete, InputGroup } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import styles from "../styles/search_bar.module.css";

export default function SearchBar(props) {
  const names = [];

  return (
    <div className={styles.search_block}>
      <InputGroup inside>
        <AutoComplete data={names} />
        <InputGroup.Addon>
          <SearchIcon className={styles.search_icon} />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
}
