import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableCell, TableRow } from ".";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Table> = {
  args: {
    className: undefined,
    children: [
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>,
      <TableRow isHeader>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>,
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
    ]
  }
};