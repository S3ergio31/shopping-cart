import {
  capitalize,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CrudContext } from "context/CrudProvider";
import { useContext, useEffect, useState } from "react";
import Actions from "./Actions";
import Search from "./Search";

const ModelTable = ({ rows = [], searchBy }) => {
  const { headers, isAheaderObject, getHeaderName } = useContext(CrudContext);
  const getHeaderValue = (header, row) =>
    isAheaderObject(header) ? header.format(row) : row[header];
  const [search, setSearch] = useState();
  const handleSearch = ({ target }) => setSearch(target.value);

  const [filtered, setFiltered] = useState(rows);
  useEffect(() => {
    if (search) {
      setFiltered(rows.filter((row) => row[searchBy].includes(search)));
    } else {
      setFiltered(rows);
    }
  }, [search, rows, searchBy]);

  return (
    <TableContainer component={Paper} sx={{ my: 1 }}>
      <Search search={search} onSearch={handleSearch} />
      <Table sx={{ minWidth: 650 }} aria-label="Crud Table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={getHeaderName(header)}>
                {capitalize(getHeaderName(header))}
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers.map((header) => (
                <TableCell key={getHeaderName(header)}>
                  {getHeaderValue(header, row)}
                </TableCell>
              ))}
              <Actions model={row} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModelTable;
