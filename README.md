# multitool

## DEV
### Install:
* [docker](https://www.docker.com/)
* [k3d](https://k3d.io/v5.4.9/)
* [kubectl](https://kubernetes.io/docs/tasks/tools/)
* [tilt](https://tilt.dev/)
 
### Run:
*
    ```bash
     k3d registry create registry.local.tashima.space --port 5345
    ```
*
    ```bash
     k3d cluster create local -p 80:80@loadbalancer -p 443:443@loadbalancer --registry-use k3d-registry.local.tashima.space:5345
    ```
*
    ```bash
     tilt up
    ```
