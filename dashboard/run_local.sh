#!/usr/bin/env bash

set -euo pipefail

THIS_SCRIPT_PATH=$(cd "$(dirname "$0")" && pwd)
cd "$THIS_SCRIPT_PATH"

# set up the environment
export USERID_HEADER="kubeflow-userid"
export USERID_PREFIX=""
export REGISTRATION_FLOW="false"
export DASHBOARD_CONFIGMAP="central-dashboard-config"
export POD_NAMESPACE="deploykf-dashboard"
export PROFILES_KFAM_SERVICE_HOST="localhost"
export PROFILES_KFAM_SERVICE_PORT="8081"

# port-forward KFAM API
kubectl port-forward -n deploykf-dashboard svc/kfam-api 8081:http &
PF_PID_1=$!
trap "kill $PF_PID_1" EXIT

# port-forward Kubeflow Notebooks UI
kubectl port-forward -n kubeflow svc/jupyter-web-app-service 8085:http &
PF_PID_2=$!
trap "kill $PF_PID_2" EXIT

# port-forward Kubeflow Pipelines UI
kubectl port-forward -n kubeflow svc/ml-pipeline-ui 8087:http &
PF_PID_3=$!
trap "kill $PF_PID_3" EXIT

# run the dashboard
npm run dev