import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = () => {
  const items = [];
  items.push({
    Numero: "1",
    kyu: "8",
    Codewars: (
      <a href="https://www.codewars.com/kata/523b4ff7adca849afe000035">
        Function 1 - hello world
      </a>
    ),
    Soluzione: (
      <a
        href="https://github.com/Valerio-boi/Codewars-python/blob/master/FunctionHelloWorld.py"
        target="_blank"
      >
        Function 1 - hello world
      </a>
    ),
  });
  items.push({
    Numero: "2",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/5b180e9fedaa564a7000009a">
        Fix string case
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/FixStringCase.py">
        Fix string case
      </a>
    ),
  });
  items.push({
    Numero: "3",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/53dbd5315a3c69eed20002dd">
        List Filtering
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/ListFiltering.py">
        List Filtering
      </a>
    ),
  });
  items.push({
    Numero: "4",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/57a62154cf1fa5b25200031e">
        Alternate case
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/AlternateCase.py">
        Alternate case
      </a>
    ),
  });
  items.push({
    Numero: "5",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/5174a4c0f2769dd8b1000003">
        Sort Numbers
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/SortNumbers.py">
        Sort Numbers
      </a>
    ),
  });
  items.push({
    Numero: "6",
    kyu: "7",
    Codewars: (
      <a href="https://www.codewars.com/kata/5174a4c0f2769dd8b1000003">
        Testing 1-2-3
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/Testing123.py">
        Testing 1-2-3
      </a>
    ),
  });
  items.push({
    Numero: "7",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9">
        CamelCase Method
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/kata-python/CamelCaseMethod.py">
        CamelCase Method
      </a>
    ),
  });
  items.push({
    Numero: "8",
    kyu: "6",
    Codewars: (
      <a href="https://www.codewars.com/kata/57eb8fcdf670e99d9b000272">
        Highest Scoring Word
      </a>
    ),
    Soluzione: (
      <a href="https://github.com/Valerio-boi/Codewars-python/blob/master/HigestScoringWord.py">
        Highest Scoring Word
      </a>
    ),
  });
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "Numero",
    text: "N.",
    sort: true,
  },
  {
    dataField: "kyu",
    text: "kyu",
    sort: true,
  },
  {
    dataField: "Codewars",
    text: "Codewars Kata",
  },
  {
    dataField: "Soluzione",
    text: "La mia soluzione",
  },
];

export default function pythonCodeWars() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="Numero"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
