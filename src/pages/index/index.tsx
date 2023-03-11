import React, { FC } from "react";
import { Layout } from "../../components/Layout";
import { IPage } from "../../interface/page";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;

  return <Layout />;
};
