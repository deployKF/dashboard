# deployKF - Dashboard

The dashboard for [deployKF](https://github.com/deployKF/deployKF).

## About

This is a fork of the [Kubeflow Central Dashboard](https://github.com/kubeflow/kubeflow/tree/88ac76f797cb63ac9b7027ae2acaddca7f370716/components/centraldashboard) component.
The fork is used to apply style and other changes to the dashboard.

## Image Locations

- [ghcr.io/deploykf/dashboard](https://ghcr.io/deploykf/dashboard) (recommended)
  - `docker pull ghcr.io/deploykf/dashboard:TAG_NAME`
- [docker.io/deploykf/dashboard](https://hub.docker.com/r/deploykf/dashboard)
  - `docker pull deploykf/dashboard:TAG_NAME`

## Development

### Important Links

- The [Dockerfile](dashboard/Dockerfile) for the container image.

### Building for ARM

Building this image for `arm64` using QEMU emulation will likely never finish (for example, inside a GitHub Action).
To resolve this, we build the image locally on an ARM device (like an Apple Silicon Mac) and push the intermediate layers to the cache.

> **NOTE:** for security reasons, we only push locally built layers to a cache (which the CI/CD process pulls from), and never push directly to the final image registry.

__Steps to build for ARM:__

1. create a PR suggesting changes
    - _TIP: before you have pushed the cache layers, the build job will likely time out (so you may wish to cancel it manually)_
2. clone your PR source repo onto an ARM device (ensure you checkout the EXACT commit of your PR)
3. authorize `docker` with a GitHub Token for writing to `ghcr.io/deploykf` ([see GitHub docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry))
4. build the image, and cache all layers to the [`ghcr.io/deploykf/ci/dashboard`](https://ghcr.io/deploykf/ci/dashboard) registry

```shell
cd dashboard/

CI_REGISTRY_IMAGE="ghcr.io/deploykf/ci/dashboard"
docker buildx build --cache-to=type=registry,ref=${CI_REGISTRY_IMAGE},mode=max .
```
