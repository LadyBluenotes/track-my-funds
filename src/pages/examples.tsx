import React, { } from "react";
import Image from "next/image";
import {
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import ContentCard from "./components/common/ContentCard";
import Headings from "./components/common/Headings";
import Paragraph from "./components/common/Paragraph";
import OutlineFreeBtn from "./components/common/OutlineFreeBtn";
import PrimaryBtn from "./components/common/PrimaryBtn";
import Heading from "./components/common/Headings";

import AccountCard from "./components/AccountCard";
import Table from "./components/Table";

export default function Examples() {

  return (
    <>
      <Table 
        title="Income" 
        tableHead={[
          { columnName: "Income Source" },
          { columnName: "Amount" }
        ]}
      
      />
    </>
  );
}
