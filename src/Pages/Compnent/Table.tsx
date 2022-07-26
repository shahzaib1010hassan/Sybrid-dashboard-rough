import { useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 300ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.lg,
  },
}));

interface TableScrollAreaProps {
  data: { name: string; email: string; company: string }[];
}

export default function TableScrollArea({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.company}</td>
    </tr>
  ));

  return (
    <div className="bg-lightGrey w-full ">
      <h1 className="text-left ml-4 mt-4">Datasets</h1>
      <p className="text-textColor text-left ml-4 mb-4">Manage Datasets</p>
      <div>
        <div className="m-4 bg-white rounded-2xl space-6 shadow-xl">
          <ScrollArea
            sx={{ height: 300 }}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
          >
            <Table className="w-full">
              <thead
                className={cx(classes.header, { [classes.scrolled]: scrolled })}
              >
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Records</th>
                  <th>Region</th>
                  <th>Last Modified</th>
                  <th>Assign DEO</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
