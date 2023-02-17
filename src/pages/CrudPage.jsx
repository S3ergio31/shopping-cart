import { useEffect, useState } from "react";
import MainLayout from "layouts/MainLayout";
import useCrud from "hooks/useCrud";
import CrudProvider from "context/CrudProvider";
import CreateButton from "components/crud/CreateButton";
import UpsertModal from "components/crud/UpsertModal";
import ModelTable from "components/crud/ModelTable";

const isAheaderObject = (header) => typeof header === "object";

const getHeaderName = (header) =>
  isAheaderObject(header) ? header.name : header;

const initSelectedModel = (headers) => {
  return headers.reduce(
    (accum, header) => ({
      ...accum,
      [getHeaderName(header)]: undefined,
    }),
    {}
  );
};

const CrudPage = ({ headers, resource, searchBy, attributes = [] }) => {
  const [show, setShow] = useState(false);
  const [selectedModel, setSelectedModel] = useState(
    initSelectedModel(headers)
  );

  const {
    models,
    saving,
    validationErrors,
    remove,
    all,
    upsert,
    resetValidationErrors,
  } = useCrud(resource);

  useEffect(all, []);

  const toggle = () => {
    setShow((s) => !s);
    resetValidationErrors();
  };

  const state = {
    show,
    selectedModel,
    headers,
    attributes,
    saving,
    validationErrors,
    toggle,
    remove,
    setSelectedModel,
    upsert,
    resetValidationErrors,
    initSelectedModel,
    isAheaderObject,
    getHeaderName,
  };

  return (
    <CrudProvider value={state}>
      <UpsertModal attributes={attributes} />
      <MainLayout>
        <CreateButton />
        <ModelTable rows={models} searchBy={searchBy} />
      </MainLayout>
    </CrudProvider>
  );
};

export default CrudPage;
