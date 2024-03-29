import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { NotificationContext } from "../context/NotificationProvider";

const API_URL = process.env.REACT_APP_API_URL;

const get = (path) => buildAxiosAction({ method: "get", path });

const buildAxiosAction = ({ method, path, data = {} }) =>
  new Promise((resolve, reject) => {
    axios[method](`${API_URL}/${path}`, data)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error.response));
  });

export default function useCrud(resource) {
  const [models, setModels] = useState([]);
  const [saving, setSaving] = useState(false);
  const [validationErrors, setValidationErrors] = useState();
  const Notification = useContext(NotificationContext);

  const resetValidationErrors = () => setValidationErrors(null);

  const all = () => {
    get(resource)
      .then((data) => setModels(data))
      .catch(handleError);
  };

  const findModel = (id) => {
    const isModelWithId = (model) => model.id === id;
    return {
      model: models.find(isModelWithId),
      index: models.findIndex(isModelWithId),
    };
  };

  const handleError = (response) => {
    const data = response.data || {};
    if (response.status === 400) {
      setValidationErrors(data);
      return;
    }
    Notification.error(data.message || data.error || "Something went wrong");
  };

  const remove = (id) => {
    const { model: modelToDelete, index } = findModel(id);
    const filtered = models.filter((model) => model.id !== id);
    setModels(filtered);

    buildAxiosAction({ method: "delete", path: `${resource}/${id}` })
      .then(() => Notification.info(`Element with id=${id} has been deleted`))
      .catch((response) => {
        handleError(response);
        models[index] = modelToDelete;
        setModels([...models]);
      });
  };

  const upsert = (data, onSuccess) => {
    setSaving(true);
    resetValidationErrors();
    buildAxiosAction({ method: "put", path: resource, data })
      .then((model) => {
        Notification.info(
          `Element has been ${data.id ? "updated" : "created "} succefully`
        );
        const { model: updated, index } = findModel(data.id);
        if (updated && index > -1) {
          models[index] = model;
          setModels([...models]);
        } else {
          setModels((models) => [...models, model]);
        }
        onSuccess();
      })
      .catch(handleError)
      .finally(() => setSaving(false));
  };

  useEffect(all, [Notification, resource]);

  return {
    models,
    saving,
    validationErrors,
    all,
    remove,
    upsert,
    resetValidationErrors,
  };
}
